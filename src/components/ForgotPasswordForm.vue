<template>
  <div
    class="text-white text-center font-bold p-4 mb-4"
    v-if="forgot_show_alert"
    :class="forgot_alert_variant"
  >
    {{ forgot_alert_msg }}
  </div>
  <vee-form :validation-schema="forgotPasswordSchema" @submit="resetPassword">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        name="email"
        type="email"
        autocomplete="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <p class="text-sm text-gray-600 mb-3">
      {{ $t('forgot_password.instructions') }}
    </p>
    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
      :disabled="forgot_in_submission"
    >
      {{ $t('forgot_password.send_reset_link') }}
    </button>
    <button
      type="button"
      class="block w-full mt-2 bg-gray-500 text-white py-1.5 px-3 rounded transition hover:bg-gray-600"
      @click="$emit('back-to-login')"
      :disabled="forgot_in_submission"
    >
      {{ $t('forgot_password.back_to_login') }}
    </button>
  </vee-form>
</template>
<script>
import { mapActions } from 'pinia'
import useUserStore from '@/stores/user'

export default {
  name: 'ForgotPasswordForm',
  data() {
    return {
      forgotPasswordSchema: {
        email: 'required|email'
      },
      forgot_in_submission: false,
      forgot_show_alert: false,
      forgot_alert_variant: 'bg-blue-500',
      forgot_alert_msg: ''
    }
  },
  methods: {
    ...mapActions(useUserStore, ['sendPasswordReset']),
    async resetPassword(values) {
      this.forgot_in_submission = true
      this.forgot_show_alert = true
      this.forgot_alert_variant = 'bg-blue-500'
      this.forgot_alert_msg = this.$t('forgot_password.sending')

      try {
        await this.sendPasswordReset(values.email)
        this.forgot_alert_variant = 'bg-green-500'
        this.forgot_alert_msg = this.$t('forgot_password.success')
        this.forgot_in_submission = false
      } catch (error) {
        console.log(error)
        this.forgot_in_submission = false
        this.forgot_alert_variant = 'bg-red-500'
        this.forgot_alert_msg = this.$t('forgot_password.error')
      }
    }
  }
}
</script>
