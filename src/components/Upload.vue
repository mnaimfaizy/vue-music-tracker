<template>
  <div class="bg-white rounded border border-gray-200 relative flex flex-col">
    <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
      <span class="card-title">Upload</span>
      <i class="fas fa-upload float-right text-green-400 text-2xl"></i>
    </div>
    <div class="p-6">
      <!-- Upload Limit Error -->
      <div
        v-if="uploadLimitError"
        class="text-white text-center font-bold p-4 mb-4 rounded bg-red-500"
      >
        Upload limit reached! You can only upload {{ MAX_SONGS }} tracks during testing.
      </div>
      <div
        v-else-if="!canUpload"
        class="text-white text-center font-bold p-4 mb-4 rounded bg-yellow-500"
      >
        You have reached the maximum limit of {{ MAX_SONGS }} tracks.
      </div>
      <div v-else class="text-sm text-gray-600 mb-4">
        {{ remainingSlots }} of {{ MAX_SONGS }} upload slots remaining
      </div>
      <!-- Upload Dropbox -->
      <div
        class="w-full px-10 py-20 rounded text-center border border-dashed transition duration-500"
        :class="[
          canUpload ? 'cursor-pointer border-gray-400 text-gray-400 hover:text-white hover:bg-green-400 hover:border-green-400 hover:border-solid' : 'cursor-not-allowed border-gray-300 text-gray-300 bg-gray-100',
          { 'bg-green-400 border-green-400 border-solid': is_dragover && canUpload }
        ]"
        @drag.prevent.stop=""
        @dragstart.prevent.stop=""
        @dragend.prevent.stop="is_dragover = false"
        @dragover.prevent.stop="canUpload && (is_dragover = true)"
        @dragenter.prevent.stop="canUpload && (is_dragover = true)"
        @dragleave.prevent.stop="is_dragover = false"
        @drop.prevent.stop="canUpload && upload($event)"
      >
        <h5>{{ canUpload ? 'Drop your files here' : 'Upload limit reached' }}</h5>
      </div>
      <input type="file" multiple @change="upload($event)" :disabled="!canUpload" />
      <hr class="my-6" />
      <!-- Progess Bars -->
      <div class="mb-4" v-for="upload in uploads" :key="upload.name">
        <!-- File Name -->
        <div class="font-bold text-sm" :class="upload.text_class">
          <i :class="upload.icon"></i>
          {{ upload.name }}
        </div>
        <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
          <!-- Inner Progress Bar -->
          <div
            class="transition-all progress-bar bg-blue-400"
            :class="upload.variant"
            :style="{ width: upload.current_progress + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { storage, auth, songsCollection } from '@/includes/firebase'

export default {
  name: 'Upload',
  data() {
    return {
      is_dragover: false,
      uploads: [],
      uploadLimitError: false,
      MAX_SONGS: 10
    }
  },
  props: ['addSong', 'currentSongCount'],
  computed: {
    canUpload() {
      return this.currentSongCount < this.MAX_SONGS
    },
    remainingSlots() {
      return this.MAX_SONGS - this.currentSongCount
    }
  },
  methods: {
    upload($event) {
      this.is_dragover = false
      this.uploadLimitError = false

      if (!this.canUpload) {
        this.uploadLimitError = true
        return
      }

      const files = $event.dataTransfer ? [...$event.dataTransfer.files] : [...$event.target.files]
      
      // Filter files to respect the upload limit
      const audioFiles = files.filter((file) => file.type === 'audio/mpeg')
      const allowedFiles = audioFiles.slice(0, this.remainingSlots)
      
      if (audioFiles.length > this.remainingSlots) {
        alert(`You can only upload ${this.remainingSlots} more track(s). You've reached the ${this.MAX_SONGS} track limit for testing.`)
      }

      allowedFiles.forEach((file) => {

        if (!navigator.onLine) {
          this.uploads.push({
            task: {},
            current_progress: 100,
            name: file.name,
            variant: 'bg-red-400',
            icon: 'fas fa-times',
            text_class: 'text-red-400'
          })
          return
        }

        const storageRef = storage.ref('songs')
        const songsRef = storageRef.child(`${file.name}`) // bucket/songs/file_name
        const task = songsRef.put(file)

        const uploadIndex =
          this.uploads.push({
            task,
            current_progress: 0,
            name: file.name,
            variant: 'bg-blue-400',
            icon: 'fas fa-spinner fa-spin',
            text_class: ''
          }) - 1

        task.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            this.uploads[uploadIndex].current_progress = progress
          },
          (error) => {
            this.uploads[uploadIndex].variant = 'bg-red-400'
            this.uploads[uploadIndex].icon = 'fas fa-times'
            this.uploads[uploadIndex].text_class = 'text-red-400'
            console.log(error)
          },
          async () => {
            const song = {
              uid: auth.currentUser.uid,
              display_name: auth.currentUser.displayName,
              original_name: task.snapshot.ref.name,
              modified_name: task.snapshot.ref.name,
              genre: '',
              comment_count: 0
            }

            song.url = await task.snapshot.ref.getDownloadURL()

            const songRef = await songsCollection.add(song)
            const songSnapshot = await songRef.get()

            this.addSong(songSnapshot)

            this.uploads[uploadIndex].variant = 'bg-green-400'
            this.uploads[uploadIndex].icon = 'fas fa-check'
            this.uploads[uploadIndex].text_class = 'text-green-400'
          }
        )
      })
    },
    cancelUploads() {
      this.uploads.forEach((upload) => {
        upload.task.cancel()
      })
    }
  },
  beforeUnmount() {
    this.uploads.forEach((upload) => {
      upload.task.cancel()
    })
  }
}
</script>
<style lang=""></style>
