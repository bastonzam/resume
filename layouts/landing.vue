<template>
  <v-app>
    <v-main
      :style="{ backgroundImage }"
      style="
        background-position: center;
        background-size: cover;
        height: 100vh;
        backdrop-filter: opacity(80%);
      "
    >
      <Nuxt /> </v-main
  ></v-app>
</template>
<script>
export default {
  data() {
    return {
      backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("resume/Image/landing.jpg");`,
    }
  },
}
</script>
