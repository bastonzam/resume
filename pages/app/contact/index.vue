<template>
  <v-container class="neu-container pa-6">
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="12">
        <v-card class="neu-card pa-4" elevation="2" tile>
          <div class="d-flex flex-no-wrap justify-space-between align-center">
            <div>
              <v-card-title class="text-h5 font-weight-bold text--primary" v-text="item.title"></v-card-title>
              <v-card-subtitle class="text--secondary" v-text="item.name"></v-card-subtitle>
            </div>
            <v-avatar class=" ma-3" size="125">
              <v-img
                style="cursor: pointer"
                @click="gotoSpecificPage(item.title)"
                :alt="item.name"
                :src="item.src"
              ></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="neu-section pa-4" elevation="1">
          <v-card-text style="color: rgba(0,0,0,0.7); font-weight: 500;">
            Mobile:
            <a style="color: rgba(0,0,0,0.6);" href="tel:+66811028375">+668 1102 8375</a>
            |
            Email:
            <span
              style="cursor: pointer; text-decoration: underline; color: rgba(0,0,0,0.6);"
              @click="sendMail()"
            >
              nadthaphonc@gmail.com
            </span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      items: [
        {
          color: '#f9f9f9', // light neutral gray-white
          src: 'https://i.ibb.co/5YKChJs/20292898-1240532989409434-330607457384079060-n-2.png',
          title: 'GitHub',
          name: 'bastonzam',
        },
        {
          color: '#f1f1f1', // slightly darker than #f9f9f9
          src: 'https://i.ibb.co/p0bXFdH/26220691-2453428464882695-162313541230933688-o.jpg',
          title: 'Facebook',
          name: 'Nadthaphon Changchai',
        },
        {
          color: '#ffffff', // pure white
          src: 'https://i.ibb.co/0V27rtL/126958541-3424758317749700-9204153798471885330-n.jpg',
          title: 'Instagram',
          name: 'bastonzam',
        },
      ]


    }
  },
  methods: {
    gotoSpecificPage(title) {
      if (title == 'GitHub') {
        window.open('https://github.com/bastonzam', '_blank')
      } else if (title == 'Facebook') {
        window.open('https://web.facebook.com/Nadhapon/', '_blank')
      } else if (title == 'Instagram') {
        window.open('https://www.instagram.com/bastonzam/', '_blank')
      }
    },
    sendMail() {
      let link =
        'mailto:nadthaphonc@gmail.com' +
        '?cc=bbbgin22@gmail.com' +
        '&subject=' +
        encodeURIComponent('We need you to join us') +
        '&body=' +
        encodeURIComponent('Hi, Mr.Nadthaphon Changchai')
      window.location.href = link
    },
  },
}
</script>
