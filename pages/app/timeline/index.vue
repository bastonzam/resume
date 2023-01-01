<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="100%">
        <v-card-text>
          <v-timeline>
            <v-timeline-item
              v-for="(year, i) in years"
              :key="i"
              :color="year.color"
              small
            >
              <template v-slot:opposite>
                <span
                  :class="`headline font-weight-bold ${year.color}--text`"
                  v-text="year.year"
                ></span>
              </template>
              <div class="py-4">
                <h2
                  :class="`headline font-weight-light mb-4 ${year.color}--text`"
                >
                  {{ year.school }}
                </h2>
                <div>
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
          color: 'orange',
          year: '2020-Now',
          school: 'KERRY EXPRESS (THAILAND) PUBLIC COMPANY LIMITED',
          detail: `I am now an employee here.`,
        },
        {
          color: 'pink',
          year: '2016-2020',
          school: 'Suranaree University of Technology (SUT)',
          detail: `I studied computer engineering because I was confident that I had a fair knowledge of physics and mathematics. But my first year of college made me realize that I was wrong.I got an F grade on Calculus One. I was discouraged, but I fought until I got a B-plus in calculus two and three. As for the subject, I like making applications. And do projects by making application delivery I just learned how making a website during my internship. And made a website until now`,
        },
        {
          color: 'green',
          year: '2010-2016',
          school: 'Pakkhat Pittayakom School (PKK)',
          detail: `My second school I moved here because I wanted to change my perspective on studying. Being at this school made me realize that there are many talented people out there. That's why I started to improve myself and find something I like. Middle school was a time of great change.Whether physically or emotionally I joined the computer club for the first time (because I wanted to play games), but I didn't like it.In high school, I was in a short film club and I really liked it. Until thinking of wanting to continue making short films But then there was a high school web writing competition and I won. So I like computers again and again.`,
        },
        {
          color: 'cyan',
          year: '2005-2010',
          school: 'Khok sa-at School (KS)',
          detail: `I started my first study here. And here is a good elementary period. Because it's close to home Makes sneaking home easy. When I was studying here, I was a kid, so thinking about studying wasn't the main point. And at that time I felt that I was very hot, focusing more on playing.`,
        },
      ],
    }
  },
}
</script>
