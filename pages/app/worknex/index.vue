<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="100%">
        <v-img
          height="290px"
          src="https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
        >
          <v-card-title class="white--text mt-8" color="primary">
            <v-avatar size="200">
              <img
                alt="user"
                src="https://i.ibb.co/p0bXFdH/26220691-2453428464882695-162313541230933688-o.jpg"
              />
            </v-avatar>
            <p class="ml-3" style="color: #565c5e; font-size: 2em">
              Nadthaphon Changchai
            </p>
          </v-card-title>
        </v-img>
        <v-card-title>About me</v-card-title>
        <div v-for="(v, k) in info" :key="k">
          <v-card-actions>
            <v-card-subtitle>
              {{ v.title }}
            </v-card-subtitle>
            <v-spacer></v-spacer>
            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-divider></v-divider>
          <v-expand-transition>
            <div v-show="show">
              <v-card-text>{{ v.detail }} </v-card-text>
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
      show: false,
      info: [
        {
          title: 'ประวัติส่วนตัว',
          detail: ` I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape.`,
        },
      ],
    }
  },
}
</script>
