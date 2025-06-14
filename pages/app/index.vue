<template>
  <v-container class="pa-6" style="background: #f9f9f9; min-height: 100vh;">
    <v-row justify="center">
      <v-card width="100%" class="neu-card pa-4">
        <v-img height="300px" :src="bannerImage" cover class="rounded-xl">
          <v-row align="end" class="fill-height">
            <v-col align-self="start" class="pa-0" cols="12"
              style="display: flex; justify-content: center; margin-top: 1rem;">
              <div class="neu-avatar">
                <v-avatar size="200">
                  <v-img :src="profileImage"></v-img>
                </v-avatar>
              </div>
            </v-col>
            <v-col class="py-0 text-center">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-h5 font-weight-bold ">
                    {{ getFullname() }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-white">{{ getJobTitle() }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-img>

        <div class="text-right my-4">
          <v-btn class="neu-btn" @click="downloadItem()">Download Resume</v-btn>
        </div>
        <div v-for="(v, k) in info" :key="k" class="neu-section pa-4 mb-6">
          <div class="d-flex align-center justify-space-between">
            <h3 class="text-subtitle-1 font-weight-bold mb-2">{{ v.title }}</h3>
            <v-btn icon class="neu-icon-btn" @click="toggleShow(k)">
              <v-icon>{{ showItems[k] ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </div>

          <v-expand-transition>
            <div v-show="showItems[k]">
              <div class="neu-inner pa-4 mt-2">
                <v-list two-line>
                  <v-list-item v-for="(item, i) in personalInfoItems(v.info)" :key="i">
                    <v-list-item-icon>
                      <v-icon :color="item.color">{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{ item.value }}</v-list-item-title>
                      <v-list-item-subtitle>{{ item.label }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </div>
            </div>

          </v-expand-transition>
        </div>

      </v-card>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      profileImage: 'resume/Image/profile2x.png',
      bannerImage: 'https://images.unsplash.com/photo-1629904888099-00285934292b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      showItems: [true],
      info: [
        {
          title: 'About Me',
          info: {
            name: 'Nadthaphon',
            lastname: 'Changchai',
            age: new Date().getFullYear() - 1997,
            gender: 'Male',
            jobTitle: 'Software Engineer',
          },
        },
      ],
    }
  },
  methods: {
    toggleShow(index) {
      this.$set(this.showItems, index, !this.showItems[index]);
    },
    downloadItem() {
      fetch('resume/file/cv.jpg').then((response) => {
        response.blob().then((blob) => {
          const fileURL = window.URL.createObjectURL(blob)
          let alink = document.createElement('a')
          alink.href = fileURL
          alink.download = 'resume.jpg'
          alink.click()
        })
      })
    },
    getFullname() {
      return `${this.info[0].info.name} ${this.info[0].info.lastname}`
    },
    getJobTitle() {
      return this.info[0].info.jobTitle
    },
    personalInfoItems(info) {
      return [
        {
        icon: 'mdi-account-outline',  // minimal กว่า mdi-account-box-outline
        color: 'grey',
        label: 'Name',
        value: `${info.name} ${info.lastname}`,
      },
      {
        icon: 'mdi-calendar-blank-outline',  // แทน human-cane
        color: 'grey',
        label: 'Age',
        value: `${info.age} years`,
      },
      {
        icon: 'mdi-gender-male-female',  // ใช้ไอคอนรวมเพศที่เรียบกว่า
        color: 'grey',
        label: 'Sex',
        value: info.gender,
      },
      ];
    },
  },
}
</script>
