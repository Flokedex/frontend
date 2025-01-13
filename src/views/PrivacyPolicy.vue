<template>
    <div class="privacy-policy">
      <h1>Privacy Policy</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          This Privacy Policy outlines how we collect, use, and protect your information when you use our application. By using this app, you agree to the terms of this policy.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <ul>
          <li>
            <strong>User Account Information:</strong> When you sign in using Discord OAuth2, we collect and store your Discord username, ID, and avatar for authentication and display purposes.
          </li>
          <li>
            <strong>Tracking Data:</strong> We store information about the Pokémon you track across the app to provide personalized features.
          </li>
          <li>
            <strong>Cookies:</strong> We use cookies to maintain your login session. These cookies are first-party and do not involve any third-party tracking.
          </li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To authenticate and manage your account using Discord OAuth2.</li>
          <li>To provide a personalized experience by tracking your interactions with Pokémon in the app.</li>
          <li>To maintain your login session using first-party cookies.</li>
        </ul>
      </section>

      <section>
        <h2>Information Sharing</h2>
        <p>
          We do not share your information with third parties. Your data is used solely to enhance your experience within the app.
        </p>
      </section>

      <section>
        <h2>Data Security</h2>
        <p>
          We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>Your Rights</h2>
        <ul>
          <li>You can request access to the information we store about you.</li>
          <li>You can request deletion of your account and all associated data.</li>
          <li>You can contact us for any concerns or questions regarding your data.</li>
        </ul>
      </section>

      <section>
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at dev@flobauch.online
        </p>
      </section>
    </div>
  </template>

<script>
export default {
  name: 'PrivacyPolicy'
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_PrivacyPolicy.scss';
</style>
