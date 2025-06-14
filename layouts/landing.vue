<template>
  <v-app>
    <div v-cloak>
      <v-main
        :style="{ backgroundImage }"
        style="
          background-position: center;
          background-size: cover;
          height: 100vh;
          backdrop-filter: opacity(80%);
        "
      >
        <Nuxt />
      </v-main>
    </div>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
       backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("resume/Image/landing.jpg");`
      //backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1706&q=80");`,
    }
  },
}
</script>
<style>
[v-cloak] > * {
  display: none;
}
[v-cloak]::before {
  content: 'loading...';
}
</style>
