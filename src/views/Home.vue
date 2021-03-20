<template>
  <div>
    <Header />
    <v-container>
      <!-- <v-menu min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar color="brown" size="48">
              <span class="white--text headline">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="brown">
                <span class="white--text headline">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text> Edit Account </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text> Disconnect </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu> -->
      <v-row>
        <v-col cols="12" class="d-flex child-flex">
          <v-card>
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="40vh"
              max-width="100wh"
              src="https://picsum.photos/id/11/500/300"
              class="grey lighten-2"
            >
              <v-btn
                color="white"
                class="text-capitalize"
                absolute
                bottom
                right
                outlined
              >
                <v-icon>mdi-camera-iris</v-icon>
                <span class="ml-1"> Edit Cover</span>
              </v-btn>
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
      <v-avatar
        size="200"
        style="position: absolute; z-index: 1; left: 37vh; top: 26vh"
      >
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <v-row class="my-2">
        <v-col cols="12" sm="6" md="4" style="margin-top: 15vh">
          <div class="headline">Profile</div>
          <v-card class="px-4 pt-2 pb-12" max-height="100vh">
            <!-- <div
              class="px-3 py-3 d-flex flex-column justify-space-between"
              style="height: 65vh"
            > -->
            <div class="pb-3" v-for="(sub, index) in subs" :key="index">
              <div class="subtitle-1 font-weight-bold">{{ sub }}</div>
              <div class="body-2">
                {{
                  index === 0
                    ? profile.name
                    : "data belum ada" && index === 1
                    ? profile.gender
                    : "data belum ada" && index === 2
                    ? profile.birthday
                    : "data belum ada" && index === 3
                    ? profile.hometown
                    : "data belum ada" && index === 4
                    ? profile.bio
                    : "data belum ada"
                }}
              </div>
            </div>
            <v-speed-dial right bottom absolute>
              <template v-slot:activator>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      small
                      depressed
                      fab
                      color="primary"
                    >
                      <v-icon color="white">mdi-square-edit-outline</v-icon>
                    </v-btn>
                  </template>
                  <span>Edit Profile</span>
                </v-tooltip>
              </template>
            </v-speed-dial>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="8">
          <v-row>
            <v-col cols="12">
              <div class="headline">Careers</div>
              <v-card class="px-4 pt-2 pb-12" max-height="33vh">
                <v-row align="center" style="height: 27vh" class="text-center">
                  <v-col cols="12" md="4">
                    <div class="subtitle-1 font-weight-bold">Company Name</div>
                    <div class="body-2">Praxis Academy</div>
                  </v-col>
                  <v-col cols="12" md="4">
                    <div class="subtitle-1 font-weight-bold">Starting From</div>
                    <div class="body-2">21/04/2020</div>
                  </v-col>
                  <v-col cols="12" md="4">
                    <div class="subtitle-1 font-weight-bold">Ending In</div>
                    <div class="body-2">24/10/2020</div>
                  </v-col>
                </v-row>
                <v-speed-dial right bottom absolute>
                  <template v-slot:activator>
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          v-bind="attrs"
                          v-on="on"
                          small
                          depressed
                          fab
                          color="primary"
                        >
                          <v-icon color="white">mdi-square-edit-outline</v-icon>
                        </v-btn>
                      </template>
                      <span>Edit Careers</span>
                    </v-tooltip>
                  </template>
                </v-speed-dial>
              </v-card>
            </v-col>

            <v-col cols="12">
              <div class="headline">Educations</div>
              <v-card class="px-4 pt-2 pb-12" max-height="33vh" cols="4">
                <v-row align="center" style="height: 27vh" class="text-center">
                  <v-col cols="12" md="7">
                    <div class="subtitle-1 font-weight-bold">School Name</div>
                    <div class="body-2">SMK Tunas Harapan Pati</div>
                  </v-col>
                  <v-col cols="12" md="3">
                    <div class="subtitle-1 font-weight-bold">
                      Graduation Time
                    </div>
                    <div class="body-2">21/05/215</div>
                  </v-col>
                </v-row>
                <v-speed-dial right bottom absolute>
                  <template v-slot:activator>
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          v-bind="attrs"
                          v-on="on"
                          small
                          depressed
                          fab
                          color="primary"
                        >
                          <v-icon color="white">mdi-square-edit-outline</v-icon>
                        </v-btn>
                      </template>
                      <span>Edit Educations </span>
                    </v-tooltip>
                  </template>
                </v-speed-dial>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="headline">Galery</div>
      <v-row>
        <v-col
          v-for="n in 12"
          :key="n"
          class="d-flex child-flex"
          cols="12"
          sm="4"
          md="3"
        >
          <v-card>
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              aspect-ratio="1"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  data: () => ({
    user: {
      initials: "JD",
      fullName: "John Doe",
      email: "john.doe@doe.com",
    },
    subs: ["Name", "Gender", "Birthday", "Hometown", "Bio"],
    profile: {
      name: "hendi",
      gender: "laki-laki",
      birthday: "18 Maret 1997",
      hometown: "Pati",
      bio:
        "Saya adalah seorang programmer entusias di bidang web khususnya frontend, pengalaman saya ini saya dapatkan dari mengikuti bootcamp di praxis academy dan saling diskusi dengan teman-teman yang bergelut dibidang yang sama",
    },
  }),
  components: {
    Header,
  },
};
</script>
