<template>
  <v-app light>
    <div v-cloak>
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        fixed
        :src="imgSRC"
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
        <v-spacer></v-spacer>
      </v-app-bar>
      <v-main>
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>

      <v-footer :absolute="!fixed" app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      imgSRC:
        'https://images.unsplash.com/photo-1479064312651-24524fb55c0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: { name: 'app' },
        },
        {
          icon: 'mdi-chart-gantt',
          title: 'Timeline',
          to: { name: 'app-timeline' },
        },
        {
          icon: 'mdi-briefcase',
          title: 'Skill',
          to: { name: 'app-skill' },
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
[v-cloak] > * {
  display: none;
}
[v-cloak]::before {
  content: 'loading...';
}
</style>
