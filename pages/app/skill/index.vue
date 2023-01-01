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
                color="#FF597B"
                track-color="#FAF8F1"
                thumb-color="#251749"
                thumb-label="always"
                :key="k"
              ></v-slider>
            </template>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    <v-row justify="space-around">
      <v-expansion-panels  v-model="panel2" class="mb-6">
        <v-expansion-panel  v-for="(item, i) in templates2" :key="i">
          <v-expansion-panel-header
            class="text-h5"
            expand-icon="mdi-menu-down "
          >
          {{ item.label }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div>
              <strong>Leader skill</strong> ->
              <span
                >Shared idea , Management job task to junior dev, Meeting
                starter
              </span>
            </div>
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
        skillP: {
          label: 'Skill with point',
        },
      },
      panel2: [0],
      templates2: {
       
        skill: {
          label: 'Skill',
        },
      },
      point: {
        vueJS: 85,
        ReactJS: 90,
        ReactTS: 70,
        Csharp: 70,
        PHP: 50,
        JS: 95,
        Api: 90,
        SQL: 70,
        Git: 70,
        UXUI: 90,
      },
      skills: {
        JS: {
          label: 'Javascript',
        },
        Api: {
          label: 'RESTful API , Swagger or Postman',
        },
        ReactJS: {
          label: 'React JS',
        },
        UXUI: {
          label: 'Work with UX/UI',
        },

        vueJS: {
          label: 'Vue JS/NUXT',
        },

        ReactTS: {
          label: 'React TS',
        },
        Csharp: {
          label: 'C# (.net core)',
        },
        SQL: {
          label: 'SQL Server,MySql',
        },
        Git: {
          label: 'Git/Github,Git/Gitlab',
        },
        PHP: {
          label: 'PHP',
        },
      },
    }
  },
}
</script>
