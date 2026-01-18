<template>
  <div class="fixed bottom-0 left-0 bg-white px-4 py-2 w-full">
    <!-- Track Info -->
    <div class="text-center" v-if="current_song.modified_name">
      <span class="song-title font-bold">{{ current_song.modified_name }}</span> by
      <span class="song-artist">{{ current_song.display_name }}</span>
    </div>
    <div class="flex flex-nowrap gap-4 items-center">
      <!-- Play/Pause Button -->
      <button type="button" @click.prevent="toggleAudio">
        <i
          class="fa text-gray-500 text-xl"
          :class="{ 'fa-play': !playing, 'fa-pause': playing }"
        ></i>
      </button>
      <!-- Current Position -->
      <div class="player-currenttime">{{ seek }}</div>
      <!-- Scrub Container  -->
      <div
        @click.prevent="updateSeek"
        class="w-full h-2 rounded bg-gray-200 relative cursor-pointer"
      >
        <!-- Player Ball -->
        <span
          class="absolute -top-2.5 -ml-2.5 text-gray-800 text-lg"
          :style="{ left: playerProgress }"
        >
          <i class="fas fa-circle"></i>
        </span>
        <!-- Player Progress Bar-->
        <span
          class="block h-2 rounded bg-gradient-to-r from-green-500 to-green-400"
          :style="{ width: playerProgress }"
        ></span>
      </div>
      <!-- Duration -->
      <div class="player-duration">{{ duration }}</div>
      <!-- Volume Control -->
      <div class="flex items-center gap-2 ml-4">
        <i class="fa text-gray-500" :class="volume === 0 ? 'fa-volume-mute' : volume < 50 ? 'fa-volume-down' : 'fa-volume-up'"></i>
        <input
          type="range"
          min="0"
          max="100"
          :value="volume"
          @input="updateVolume"
          class="w-20 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          style="accent-color: #10b981"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import usePlayerStore from '@/stores/player'

export default {
  name: 'Player',
  methods: {
    ...mapActions(usePlayerStore, ['toggleAudio', 'updateSeek', 'updateVolume'])
  },
  computed: {
    ...mapState(usePlayerStore, ['playing', 'duration', 'seek', 'playerProgress', 'current_song', 'volume'])
  }
}
</script>
