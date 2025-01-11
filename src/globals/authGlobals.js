export default {
  install (app) {
    app.config.globalProperties.$loginWithDiscord = function () {
      const baseUrl = process.env.VUE_APP_NODE_ENV === 'development'
        ? process.env.VUE_APP_DEV_BACKEND_URL
        : process.env.VUE_APP_PROD_BACKEND_URL
      const baseEndpoint = process.env.VUE_APP_BACKEND_BASE_ENDPOINT || ''
      const loginEndpoint = process.env.VUE_APP_DISCORD_LOGIN_ENDPOINT || ''

      if (!baseUrl || !loginEndpoint) {
        console.error('Environment variables for login URL are not properly set.')
        return
      }

      window.location.href = `${baseUrl}${baseEndpoint}${loginEndpoint}`
      console.log('Logging in with Discord...')
    }
  }
}
