<template>
    <div class="landing-view">
      <header>
        <h1 class="title">Flokédex - A living dex tracker!</h1>
      </header>

      <main>
        <div class="logo">
            <img src="@/assets/logo.svg" alt="Flokédex logo" />
        </div>
        <p class="description">
          Customise, simplify, and make your journey to complete the living dex across games, or even isolated to a single game, a piece of cake!
        </p>
        <p class="instructions">
          For usage instructions and tutorial videos, head to: <a href="https://github.com/Flokedex/Wiki-GHpages" target="_blank" rel="noopener noreferrer">
          Flokédex Wiki</a>.
        </p>
        <p class="contribute">
          This project is open source and available at
          <a href="https://github.com/Flokedex" target="_blank" rel="noopener noreferrer">Flokédex GitHub Repository</a>, where you can contribute to make this better.
        </p>
        <p class="support">
          If you like my app, you can show your appreciation
          <a href="https://buymeacoffee.com/ferlow" target="_blank" rel="noopener noreferrer">by buying me a coffee</a>.
        </p>
        <p class="disclaimer">
          This app is in its early stages and bugs are guarenteed. Head to the repo to report them.
        </p>
          <p>
            It is also not affiliated with Nintendo, Game Freak, or The Pokémon Company.
          </p>

        <button class="discord-login-button" @click="$loginWithDiscord">
  <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg" alt="Discord Icon" style="width: 20px; height: 20px; margin-right: 8px;">
Continue with Discord
</button>
      </main>
    </div>
  </template>

<script>
import BottomBar from '@/components/BottomBar.vue'
export default {
  name: 'LandingPage',
  components: BottomBar
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_LandingView.scss'
</style>
