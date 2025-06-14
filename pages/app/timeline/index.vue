<template>
  <v-container class="neu-container pa-6" style="background: #f9f9f9; min-height: 100vh;">
    <v-row justify="center">
      <v-card class="neu-card pa-6" max-width="100%">
        <v-card-text>
          <v-timeline>
            <v-timeline-item v-for="(year, i) in years" :key="i" small class="neu-timeline-item">
              <template v-slot:opposite>
                <span class="timeline-year" :style="{ color: year.color }">
                  {{ year.year }}
                </span>
              </template>
              <div class="py-4">
                <h2 class="timeline-school" :style="{ color: year.color }">
                  {{ year.school }}
                </h2>
                <div class="timeline-detail">
                  {{ year.detail }}
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      years: [
        {
          color: '#ff7043',
          year: '2023-NOW',
          school: 'ttb spark | ttb bank',
          detail: `I am now an employee here.`,
        },
        {
          color: '#ff7043',
          year: '2020-2023',
          school: 'KERRY EXPRESS (THAILAND) PUBLIC COMPANY LIMITED',
          detail: `I worked as a Software Developer responsible for developing various systems for the company such as tracking systems, CMS, and other internal tools to improve operational efficiency.`,
        },
        {
          color: '#f48fb1',
          year: '2016-2020',
          school: 'Suranaree University of Technology (SUT)',
          detail: `Studied computer engineering. Initially struggled with calculus but improved significantly. Enjoyed making applications and developed websites during internships.`,
        },
        {
          color: '#81c784',
          year: '2010-2016',
          school: 'Pakkhat Pittayakom School (PKK)',
          detail: `Attended middle and high school here. Joined computer and short film clubs. Discovered a passion for computers and creative projects.`,
        },
        {
          color: '#4dd0e1',
          year: '2005-2010',
          school: 'Khok sa-at School (KS)',
          detail: `Elementary school years. Focused more on playing than studying but had a good foundation close to home.`,
        },
      ]
      ,
    }
  },
}
</script>

