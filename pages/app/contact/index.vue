<template>
  <v-container>
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="12">
        <v-card :color="item.color" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5" v-text="item.title"></v-card-title>
              <v-card-subtitle v-text="item.name"></v-card-subtitle>
            </div>
            <v-avatar class="ma-3" size="125">
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
        <v-card>
          <v-card-text>
            <!-- Nadthaphon Changchai (Ae), <br />
            158/22 Baan Sookcharoen Apartment,Soi Therd-Thai 33,<br />
            Talad Plue, Thonburi, Bangkok, 10600 Thailand <br /> -->
            Mobile: +668 1102 8375 | Email<span
              style="cursor: pointer"
              @click="sendMail()"
            >
              : nadthaphonc@gmail.com</span
            >
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
          color: '#238636',
          src: 'https://i.ibb.co/5YKChJs/20292898-1240532989409434-330607457384079060-n-2.png',
          title: 'GitHub',
          name: 'bastonzam',
        },
        {
          color: '#0099fe',
          src: 'https://i.ibb.co/p0bXFdH/26220691-2453428464882695-162313541230933688-o.jpg',
          title: 'Facebook',
          name: 'Nadthaphon Changchai',
        },
        {
          color: '#d30066',
          src: 'https://i.ibb.co/0V27rtL/126958541-3424758317749700-9204153798471885330-n.jpg',
          title: 'Instagram',
          name: 'bastonzam',
        },
      ],
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
