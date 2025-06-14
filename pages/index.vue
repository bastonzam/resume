<template>
  <div class="wrapper">
    <div class="Container">
      <div class="nav">
        <div class="logo">PORTFOLIO</div>
        <div class="menu">
          <ul class="navMenu">
            <li><a @click="linkTo('home')">Home</a></li>
            <li><a @click="linkTo('timeline')">Timeline</a></li>
            <li><a @click="linkTo('skill')">Skill</a></li>
            <li><a @click="linkTo('contact')">Contact</a></li>
            <!-- <li><a>Registration</a></li> -->
          </ul>
        </div>
      </div>
      <div class="header">
        <h1>Welcome!</h1>
        <p>Portfolio | Nadthaphon</p>
        <v-btn class="neu-btn" x-large type="button" @click="linkTo('home')">Go to main page</v-btn>
        <div class="m-menu" style="display: none">
          <ul class="m-navMenu" style="list-style: none; padding-left: 0px">
            <li class="m"><a @click="linkTo('home')">Home</a></li>
            <li class="m"><a @click="linkTo('timeline')">Timeline</a></li>
            <li class="m">
              <a @click="linkTo('skill')">Skill</a>
            </li>
            <li class="m"><a @click="linkTo('contact')">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    <v-dialog transition="dialog-bottom-transition" v-model="dialog" max-width="360">
      <v-card>
        <v-card-text class="text-h5 pt-6" style="text-align: center">
          Click accept if you annoyed
        </v-card-text>

        <v-card-actions>
          <v-btn block color="primary" @click="acceptCookie()">
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  layout: 'landing',
  data() {
    return {
      dialog: false,
    }
  },
  mounted() {
    let fakeCookie = localStorage.getItem('fakeCookie')
    if (fakeCookie != 'true') {
      this.dialog = true
    }
  },
  methods: {
    acceptCookie() {
      this.dialog = false
      localStorage.setItem('fakeCookie', 'true')
    },
    linkTo(v) {
      if (v === 'home') {
        this.$router.replace({ name: 'app' })
      } else {
        this.$router.replace({ name: `app-${v}` })
      }
    },
  },
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 10px;
  scroll-behavior: smooth;
}

.wrapper {
  width: auto;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  backdrop-filter: opacity(80%);
}

.Container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.521);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
}

.logo {
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.7rem;
  color: white;
  margin: 4%;
}

.menu {
  display: inline-block;
  line-height: 80px;
}

.menu ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.menu ul li {
  display: inline-block;
}

.menu ul li a {
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  color: white;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 0 5px;
  transition: 0.5s ease;
}

.menu ul li a:hover {
  border-color: white;
}

.header {
  text-align: center;
}

.header h1 {
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  color: white;
  padding: 45% 20px 8px;
}

.header p {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  color: white;
  padding: 10px 15px;
}

@media only screen and (max-width: 768px) {
  div.menu {
    display: none;
  }

  div.nav {
    width: 100%;
    place-content: center;
  }

  div.m-menu {
    display: block !important;
    margin-top: 2rem;
  }

  .m a {
    font-size: 20px !important;
    text-decoration: none !important;
    color: white !important;
    line-height: 26px;
  }
}
</style>
