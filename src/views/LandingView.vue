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
        Currently all main games are supported, and we're aware of issues with sprites not displaying correctly.
      </p>
      <p>This is caused by the underlying third-party API and workarounds are currently put in place, while the issue was reported to the other APIs repo.</p>
      <p>
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
        This app is in its early stages and bugs are guaranteed. Head to the repo to report them.
      </p>
      <p>
        It is also not affiliated with Nintendo, Game Freak, or The Pokémon Company.
      </p>
    </main>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_LandingView.scss';
</style>
