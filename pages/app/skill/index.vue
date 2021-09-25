<template>
  <v-container>
    <v-row justify="space-around">
      <v-expansion-panels class="mb-6" v-model="panel" multiple>
        <v-expansion-panel v-for="(item, i) in templates" :key="i">
          <v-expansion-panel-header
            class="text-h5"
            expand-icon="mdi-menu-down "
          >
            {{ item.label }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <template v-for="(v, k) in skills">
              <v-slider
                readonly
                v-model="point[k]"
                :label="v.label"
                color="green"
                track-color="orange"
                thumb-color="indigo"
                thumb-label="always"
                :key="k"
              ></v-slider>
            </template>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      panel: [0],
      templates: {
        skill: {
          label: 'Skill',
        },
      },
      point: {
        vueJS: 85,
        ReactJS: 60,
        Csharp: 70,
        PHP: 60,
        JS: 85,
        Api: 60,
        SQL: 70,
        Git: 65,
      },
      skills: {
        vueJS: {
          label: 'Vue JS/NUXT',
        },
        ReactJS: {
          label: 'React JS',
        },
        Csharp: {
          label: 'C#',
        },
        PHP: {
          label: 'PHP',
        },
        JS: {
          label: 'Javascript',
        },
        Api: {
          label: 'Api',
        },
        SQL: {
          label: 'SQL Server,MySql',
        },
        Git: {
          label: 'Git/Github,Git/Gitlab',
        },
      },
    }
  },
}
</script>
