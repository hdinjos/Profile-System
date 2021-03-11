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
        style="position: absolute; z-index: 1; left: 30vh; top: 26vh"
      >
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <v-row class="my-2">
        <v-col cols="3" style="margin-top: 15vh">
          <v-card height="65vh">
            <div
              class="px-3 py-3 d-flex flex-column justify-space-between"
              style="height: 65vh"
            >
              <div v-for="(sub, index) in subs" :key="index">
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

              <!-- <v-list-item two-line v-for="(sub, index) in subs" :key="index">
              <v-list-item-content>
                <v-list-item-title>{{ sub }}</v-list-item-title>
                <v-list-item-subtitle>
                  Secondary text dfsdf fds fvdv dvfv fvdfv dvfds d dfvdf
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item> -->
              <!-- <div>Name</div>
            <div>gender</div>
            <div>Birthday</div>
            <div>Hometown</div>
            <div>bio</div> -->
              <!-- <v-spacer></v-spacer> -->
              <div class="d-flex justify-end">
                <v-card-actions class="pa-1">
                  <v-btn color="black" class="text-capitalize" outlined>
                    <v-icon>mdi-card-account-details</v-icon>
                    <span class="ml-1"> Edit Profile</span>
                  </v-btn>
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col>
          <v-row>
            <v-col cols="6">
              <v-card height="33vh" cols="4">
                <div class="d-flex justify-end">
                  <v-card-actions>
                    <v-btn
                      color="black"
                      class="mr-2 my-2 text-capitalize"
                      outlined
                    >
                      <v-icon>mdi-domain</v-icon>
                      <span class="ml-1"> Edit Career</span>
                    </v-btn>
                  </v-card-actions>
                </div>
                <!-- <v-btn
                  color="black"
                  class="text-capitalize"
                  absolute
                  bottom
                  right
                  outlined
                >
                  <v-icon>mdi-domain</v-icon>
                  <span class="ml-1"> Edit Career</span>
                </v-btn> -->
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card height="33vh" cols="4">
                <v-btn
                  color="black"
                  class="text-capitalize"
                  absolute
                  bottom
                  right
                  outlined
                >
                  <v-icon>mdi-school</v-icon>
                  <span class="ml-1"> Edit Education</span>
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-card height="33vh" cols="4"></v-card>
            </v-col>
            <v-col cols="6">
              <v-card height="33vh" cols="4"></v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="headline">Galery</div>
      <v-row>
        <v-col v-for="n in 12" :key="n" class="d-flex child-flex" cols="2">
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
      email: "john.doe@doe.com"
    },
    subs: ["Name", "Gender", "Birthday", "Hometown", "Bio"],
    profile: {
      name: "hendi",
      gender: "laki-laki",
      birthday: "18 Maret 1997",
      hometown: "Pati",
      bio:
        "Saya adalah seorang programmer entusias di bidang web khususnya frontend, pengalaman saya ini saya dapatkan dari mengikuti bootcamp di praxis academy dan saling diskusi dengan teman-teman yang bergelut dibidang yang sama"
    }
  }),
  components: {
    Header
  }
};
</script>
