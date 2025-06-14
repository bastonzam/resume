<template>
  <v-container class="neu-container pa-6" style="background: #f9f9f9; min-height: 100vh;">
  <v-card class="neu-card pa-6" max-width="100%">
    <v-row justify="space-around">
      <v-expansion-panels
        class="neu-section mb-6 pa-4"
        v-model="panel"
        multiple
      >
        <v-expansion-panel
          v-for="(item, i) in templates"
          :key="i"
          class="neu-inner mb-4"
        >
          <v-expansion-panel-header
            class="text-h5 font-weight-bold"
            expand-icon="mdi-menu-down"
          >
            {{ item.label }}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pa-4">
            <template v-for="(v, k) in skills">
              <v-slider
                readonly
                v-model="point[k]"
                :label="v.label"
                color="#666666"
                track-color="#dddddd"
                thumb-color="#444444"
                thumb-label="always"
              ></v-slider>
            </template>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>

    <v-row justify="space-around">
      <v-expansion-panels
        class="neu-section pa-4"
        v-model="panel2"
      >
        <v-expansion-panel
          v-for="(item, i) in templates2"
          :key="i"
          class="neu-inner mb-4"
        >
          <v-expansion-panel-header
            class="text-h5 font-weight-bold"
            expand-icon="mdi-menu-down"
          >
            {{ item.label }}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pa-4">
            <div class="text-body-1">
              <strong>Leader skill</strong> →
              <span>
                Shared idea, Management job task to junior dev, Meeting starter
              </span>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-card>
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
        ReactTS: 90,
        Csharp: 70,
        PHP: 50,
        JS: 95,
        Api: 90,
        SQL: 70,
        Git: 70,
        UXUI: 90,
        SWIFT: 50,
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
        ReactTS: {
          label: 'React TS',
        },
        UXUI: {
          label: 'Work with UX/UI',
        },

        vueJS: {
          label: 'Vue JS/NUXT',
        },
        Csharp: {
          label: 'C# (.net core)',
        },
        SQL: {
          label: 'SQL Server,MySql',
        },
        Git: {
          label: 'Git etc.',
        },
        PHP: {
          label: 'PHP',
        },
        SWIFT: {
          label: 'Swift',
        },
      },
    }
  },
}
</script>
