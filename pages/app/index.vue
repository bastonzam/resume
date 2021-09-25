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
            <p class="ml-3" style="color: #565c5e; font-size: 1.2em">
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
              <v-card-text>
                <v-list two-line>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="indigo">mdi-account-box-outline</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>
                        {{
                          `${v.info.name}  ${v.info.lastname}`
                        }}</v-list-item-title
                      >
                      <v-list-item-subtitle>Name</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="green">mdi-human-cane</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>
                        {{ `${v.info.age} years` }}</v-list-item-title
                      >
                      <v-list-item-subtitle>Age</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="orange">mdi-gender-male</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>
                        {{ v.info.gender }}</v-list-item-title
                      >
                      <v-list-item-subtitle>Sex</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
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
      show: true,
      info: [
        {
          title: 'Personal data',
          info: {
            name: 'Nadthaphon',
            lastname: 'Changchai',
            age: new Date().getFullYear() - 1997,
            gender: 'Male',
          },
        },
      ],
    }
  },
}
</script>
