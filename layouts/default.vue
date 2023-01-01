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
        <div>
          <v-tooltip v-if="!$vuetify.theme.dark" bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" color="#181D31" small fab @click="darkMode">
                <v-icon color="#FFFFD0" class="mr-1">mdi-moon-waxing-crescent</v-icon>
              </v-btn>
            </template>
            <span>Dark Mode On</span>
          </v-tooltip>

          <v-tooltip v-else bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" color="#82C3EC" small fab @click="darkMode">
                <v-icon color="#FFEBB7">mdi-white-balance-sunny</v-icon>
              </v-btn>
            </template>
            <span>Dark Mode Off</span>
          </v-tooltip>
        </div>
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
import SnowFall from "snow-fall-effect";
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      snowFall:"",
      imgSRC:
        'https://images.unsplash.com/photo-1479064312651-24524fb55c0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
      dark: false,
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
  mounted() {
    this.snowFall = new SnowFall({
        color: this.dark ? "#F1F6F5" : "#7FE9DE",
        density: 6,
        sizeRange: [5, 25],
      });
      this.snowFall.init();
  },
  methods: {
    darkMode() {
      this.snowFall.stopTheSnowing()
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.dark = !this.dark
      this.snowFall = new SnowFall({
        color: this.dark ? "#F1F6F5" : "#7FE9DE",
        density: 6,
        sizeRange: [5, 25],
      });
      this.snowFall.init();
 
    },
  },
  watch: {
    dark(v) {
      if (!v) {
        this.imgSRC =
          'https://images.unsplash.com/photo-1479064312651-24524fb55c0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80'
      } else {
        this.imgSRC =
          'https://images.unsplash.com/photo-1646361700146-855e94bb6ce5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      }
    },
  },
}
</script>
<style>
/* .v-list .v-list-item--active {
  color: #93634a !important;
} */
.theme--light.v-application {
  background: #f5f5f5;
}
[v-cloak] > * {
  display: none;
}
[v-cloak]::before {
  content: 'loading...';
}
</style>
