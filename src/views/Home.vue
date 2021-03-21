<template>
  <div>
    <Header />
    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex child-flex">
          <v-card style="position: relative">
            <v-img
              :lazy-src="dataImgCover"
              max-height="40vh"
              max-width="100wh"
              :src="dataImgCover"
              class="grey lighten-2"
              aspect-ratio="1"
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
            <div class="avatar">
              <v-img
                class="grey lighten-2 avatar-img"
                :src="dataImgUser"
                :lazy-src="dataImgUser"
                aspect-ratio="1"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-btn class="avatar-btn" depressed fab color="primary"
                ><v-icon>mdi-camera</v-icon></v-btn
              >
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="my-2">
        <v-col cols="12" sm="6" md="4" class="profile" style="">
          <div class="headline">Profile</div>
          <v-card v-if="dataUser" class="px-4 pt-2 pb-12" max-height="100vh">
            <div class="pb-3" v-for="(sub, index) in subs" :key="index">
              <div class="subtitle-1 font-weight-bold">{{ sub }}</div>
              <div class="body-2">
                {{
                  index === 0
                    ? dataProfile.name
                    : "data belum ada" && index === 1
                    ? dataProfile.gender
                    : "data belum ada" && index === 2
                    ? dataProfile.birthday
                    : "data belum ada" && index === 3
                    ? dataProfile.hometown
                    : "data belum ada" && index === 4
                    ? dataProfile.bio
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
                      @click="editProfile"
                    >
                      <v-icon color="white">mdi-square-edit-outline</v-icon>
                    </v-btn>
                  </template>
                  <span>Edit Profile</span>
                </v-tooltip>
              </template>
            </v-speed-dial>
          </v-card>
          <v-skeleton-loader
            v-else
            max-height="100vh"
            type="list-item-three-line@4, actions"
          ></v-skeleton-loader>
        </v-col>
        <EditProfileDialog
          :editProfileDialog="editProfileDialog"
          :editProfile="editProfile"
        />
        <v-col cols="12" sm="6" md="8">
          <v-row>
            <v-col cols="12">
              <div class="headline">Careers</div>

              <v-card v-if="dataUser" class="px-4 pt-2 pb-12" max-height="33vh">
                <v-row align="center" style="height: 27vh" class="text-center">
                  <v-col cols="12" md="4">
                    <div class="subtitle-1 font-weight-bold">Company Name</div>
                    <div class="body-2">
                      {{
                        dataCareer.company_name
                          ? dataCareer.company_name
                          : "Empty Data"
                      }}
                    </div>
                  </v-col>
                  <v-col cols="12" md="4">
                    <div class="subtitle-1 font-weight-bold">Starting From</div>
                    <div class="body-2">
                      {{
                        dataCareer.starting_from
                          ? dataCareer.starting_from
                          : "Empty Data"
                      }}
                    </div>
                  </v-col>
                  <v-col cols="12" md="4">
                    <div class="subtitle-1 font-weight-bold">Ending In</div>
                    <div class="body-2">
                      {{
                        dataCareer.ending_in
                          ? dataCareer.ending_in
                          : "Empty Data"
                      }}
                    </div>
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
              <v-skeleton-loader
                v-else
                max-height="100vh"
                type="list-item-three-line@2, actions"
              ></v-skeleton-loader>
            </v-col>

            <v-col cols="12">
              <div class="headline">Educations</div>
              <v-card
                v-if="dataUser"
                class="px-4 pt-2 pb-12"
                max-height="33vh"
                cols="4"
              >
                <v-row align="center" style="height: 27vh" class="text-center">
                  <v-col cols="12" md="7">
                    <div class="subtitle-1 font-weight-bold">School Name</div>
                    <div class="body-2">
                      {{
                        !dataEducation.school_name
                          ? "Empty Data"
                          : dataEducation.school_name
                      }}
                    </div>
                  </v-col>
                  <v-col cols="12" md="3">
                    <div class="subtitle-1 font-weight-bold">
                      Graduation Time
                    </div>
                    <div class="body-2">
                      {{
                        !dataEducation.graduation_time
                          ? "Empty Data"
                          : dataEducation.graduation_time
                      }}
                    </div>
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
              <v-skeleton-loader
                v-else
                max-height="100vh"
                type="list-item-three-line@2, actions"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="headline">Galery</div>
      <v-row>
        <v-col
          v-for="img in dataListImgUser"
          :key="img.id"
          class="d-flex child-flex"
          cols="12"
          sm="4"
          md="3"
        >
          <v-card>
            <v-img
              :src="img.picture.url"
              :lazy-src="img.picture.url"
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
import EditProfileDialog from "@/components/EditProfileDialog.vue";

export default {
  name: "Home",
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
  data: () => ({
    editProfileDialog: false,
    subs: ["Name", "Gender", "Birthday", "Hometown", "Bio"],
  }),
  components: {
    Header,
    EditProfileDialog,
  },
  methods: {
    editProfile() {
      this.editProfileDialog = !this.editProfileDialog;
    },
  },
  computed: {
    dataUser() {
      return this.$store.state.profile.isSuccess;
    },
    dataProfile() {
      if (this.dataUser) {
        return this.dataUser.data.user;
      } else {
        return {
          name: "",
          gender: "",
          birthday: "",
          hometown: "",
          bio: "",
        };
      }
    },
    dataCareer() {
      if (this.dataUser) {
        return this.dataUser.data.user.career;
      } else {
        return {
          company_name: "",
          ending_in: "",
          starting_from: "",
        };
      }
    },
    dataEducation() {
      if (this.dataUser) {
        return this.dataUser.data.user.education;
      } else {
        return {
          school_name: "",
          graduation_time: "",
        };
      }
    },
    dataImgUser() {
      if (this.dataUser) {
        return this.dataUser.data.user.user_picture.picture.url;
      } else {
        return "";
      }
    },
    dataImgCover() {
      if (this.dataUser) {
        return this.dataUser.data.user.cover_picture.url;
      } else {
        return "";
      }
    },
    dataListImgUser() {
      if (this.dataUser) {
        return this.dataUser.data.user.user_pictures;
      } else {
        return [];
      }
    },
  },
  created() {
    (async () => {
      await this.$store.dispatch("profile/callGetProfile");
      console.log("halo bosq", this.$store.state.profile.isSuccess);
    })();
  },
};
</script>

<style scoped>
.avatar {
  height: 17vh;
  width: 17vh;
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  bottom: -8vh;
  left: 2vh;
}
.avatar-img {
  border-radius: 50%;
  height: 17vh;
  width: 17vh;
  position: relative;
}
.avatar-btn {
  width: 35px !important;
  height: 35px !important;
  position: absolute;
  right: 1vh;
  bottom: 0vh;
}

.profile {
  margin-top: 8vh;
}
@media only screen and (min-width: 600px) {
  .avatar {
    height: 180px;
    width: 180px;
    bottom: -80px;
    left: 80px;
  }

  .avatar-img {
    height: 180px;
    width: 180px;
  }
  .avatar-btn {
    right: 25px;
    bottom: 0px;
  }

  .profile {
    margin-top: 70px;
  }
}

@media only screen and (min-width: 960px) {
  .avatar {
    height: 200px;
    width: 200px;
    bottom: -90px;
    left: 70px;
  }

  .avatar-img {
    height: 200px;
    width: 200px;
  }
  .avatar-btn {
    right: 20px;
    bottom: 10px;
  }

  .profile {
    margin-top: 80px;
  }
}
</style>