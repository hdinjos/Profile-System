<template>
  <v-row justify="center">
    <v-dialog v-model="editProfileDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Edit Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  v-model="name"
                  label="Name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-select
                  v-model="genderNumber"
                  :items="genders"
                  label="Gender*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="birthday"
                      label="Birthday Date*"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    ref="picker"
                    v-model="birthday"
                    :max="new Date().toISOString().substr(0, 10)"
                    min="1950-01-01"
                    @change="save"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="hometown"
                  label="Hometown*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  counter
                  label="Bio*"
                  :rules="rules"
                  v-model="bio"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            depressed
            color="grey lighten-2"
            class="text-capitalize"
            @click="editProfile"
          >
            Close
          </v-btn>
          <v-btn
            depressed
            color="primary"
            class="white--text text-capitalize"
            @click="dialog = false"
          >
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    name: "",
    genders: [
      {
        text: "Male",
        value: 0,
      },
      {
        text: "Female",
        value: 1,
      },
    ],
    genderNumber: "",
    birthday: new Date().toISOString().substr(0, 10),
    hometown: "",
    bio: "",
    menu: false,
    rules: [(v) => v.length <= 220 || "Max 220 characters"],
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
  methods: {
    save(birthday) {
      this.$refs.menu.save(birthday);
    },
  },
  props: {
    editProfileDialog: Boolean,
    editProfile: Function,
  },
  updated() {
    console.log(this.name);
    console.log(this.genderNumber);
    console.log(this.birthday);
    console.log(this.hometown);
    console.log(this.bio);
  },
};
</script>

<style>
</style>