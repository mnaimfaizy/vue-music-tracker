<template>
  <main>
    <section class="container mx-auto mt-6 px-4">
      <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">{{ $t('reset_password.title') }}</h1>

        <div
          class="text-white text-center font-bold p-4 mb-4"
          v-if="show_alert"
          :class="alert_variant"
        >
          {{ alert_msg }}
        </div>

        <!-- Reset Password Form -->
        <vee-form
          v-if="!resetComplete"
          :validation-schema="resetSchema"
          @submit="confirmReset"
        >
          <div class="mb-4">
            <label class="inline-block mb-2 text-gray-700">{{
              $t('reset_password.new_password')
            }}</label>
            <vee-field
              name="password"
              type="password"
              class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
              :placeholder="$t('reset_password.new_password_placeholder')"
            />
            <ErrorMessage class="text-red-600" name="password" />
          </div>

          <div class="mb-4">
            <label class="inline-block mb-2 text-gray-700">{{
              $t('reset_password.confirm_password')
            }}</label>
            <vee-field
              name="confirm_password"
              type="password"
              class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
              :placeholder="$t('reset_password.confirm_password_placeholder')"
            />
            <ErrorMessage class="text-red-600" name="confirm_password" />
          </div>

          <button
            type="submit"
            class="block w-full bg-purple-600 text-white py-2 px-3 rounded transition hover:bg-purple-700"
            :disabled="in_submission"
          >
            {{ $t('reset_password.submit') }}
          </button>
        </vee-form>

        <!-- Success Message -->
        <div v-else class="text-center">
          <p class="text-gray-700 mb-4">{{ $t('reset_password.complete_message') }}</p>
          <router-link
            to="/"
            class="inline-block bg-purple-600 text-white py-2 px-6 rounded transition hover:bg-purple-700"
          >
            {{ $t('reset_password.go_to_login') }}
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { auth } from '@/includes/firebase'

export default {
  name: 'ResetPassword',
  data() {
    return {
      resetSchema: {
        password: 'required|min:9|max:100',
        confirm_password: 'passwords_mismatch:@password'
      },
      in_submission: false,
      show_alert: false,
      alert_variant: 'bg-blue-500',
      alert_msg: '',
      resetComplete: false,
      actionCode: null
    }
  },
  mounted() {
    // Get the action code from URL query parameters
    const urlParams = new URLSearchParams(window.location.search)
    this.actionCode = urlParams.get('oobCode')

    if (!this.actionCode) {
      this.show_alert = true
      this.alert_variant = 'bg-red-500'
      this.alert_msg = this.$t('reset_password.invalid_link')
    } else {
      // Verify the reset code is valid
      this.verifyResetCode()
    }
  },
  methods: {
    async verifyResetCode() {
      try {
        // Verify the password reset code is valid
        await auth.verifyPasswordResetCode(this.actionCode)
      } catch (error) {
        console.error(error)
        this.show_alert = true
        this.alert_variant = 'bg-red-500'
        this.alert_msg = this.$t('reset_password.expired_link')
      }
    },
    async confirmReset(values) {
      this.in_submission = true
      this.show_alert = true
      this.alert_variant = 'bg-blue-500'
      this.alert_msg = this.$t('reset_password.resetting')

      try {
        // Confirm the password reset with the new password
        await auth.confirmPasswordReset(this.actionCode, values.password)

        this.alert_variant = 'bg-green-500'
        this.alert_msg = this.$t('reset_password.success')
        this.resetComplete = true
        this.in_submission = false
      } catch (error) {
        console.error(error)
        this.in_submission = false
        this.alert_variant = 'bg-red-500'
        this.alert_msg = this.$t('reset_password.error')
      }
    }
  }
}
</script>
