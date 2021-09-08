<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      ><v-list-item class="px-2">
        <v-list-item-title class="text-h6">
          <v-icon>mdi-apps</v-icon>
          Portfolio
        </v-list-item-title>
      </v-list-item>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: { name: 'app' },
        },
        {
          icon: 'mdi-school',
          title: 'Studies',
          to: { name: 'app-studies' },
        },
        {
          icon: 'mdi-briefcase',
          title: 'Work & Experience',
          to: { name: 'app-worknex' },
        },
        {
          icon: 'mdi-account-box',
          title: 'Contact',
          to: { name: 'app-contact' },
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
<style>
.v-list .v-list-item--active {
  color: #81d4fa !important;
}
</style>
