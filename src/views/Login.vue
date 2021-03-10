<template>
  <v-container fluid>
    <v-row justify="center" align="center" style="height: 90vh">
      <v-col xs="11" sm="6" md="4">
        <v-card max-height="100vh" class="pa-3" outlined>
          <v-container>
            <div
              class="text-center text-xs-subtitle-1 text-sm-h6 text-md-h5 pb-3"
            >
              Login
            </div>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                dense
                v-model="phone"
                :rules="phoneRules"
                label="Phone"
                required
                outlined
                :loading="loading"
                ref="phone"
              ></v-text-field>

              <v-text-field
                dense
                v-model="password"
                :rules="passwordRules"
                label="Password"
                required
                outlined
                :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="() => (value = !value)"
                :type="value ? 'password' : 'text'"
                ref="password"
              ></v-text-field>
              <hr class="mx-4" />
              <div class="d-flex flex-column align-center">
                <div>
                  <v-btn
                    color="primary"
                    class="mt-3 text-capitalize"
                    @click="logIn"
                  >
                    Login
                  </v-btn>
                </div>
                <div class="mt-2">
                  <span>Don’t have an account?</span>
                  <router-link class="mx-2 text-decoration-none" to="/register"
                    >Register</router-link
                  >
                </div>
                <!-- <v-alert v-if="failure" type="error" dense>
                  {{ failure }}
                </v-alert> -->
              </div>
            </v-form>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar top v-model="snackbarVal" :timeout="timeout" color="red">
      {{ failure }}

      <template v-slot:action="{ attrs }">
        <v-btn
          x-small
          outlined
          v-bind="attrs"
          @click="snackbarVal = false"
          icon
          color="white"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    snackbarVal: false,
    timeout: 10000,
    value: "password",
    valid: false,
    phone: "",
    password: "",
    phoneRules: [
      v => !!v || "Phone is required",
      v => /^[0-9]{1,20}$/.test(v) || "Phone must number"
    ],
    passwordRules: [
      v => !!v || "Password is required",
      v => v.length >= 8 || "Password minimum 8 characters"
      // (v) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v)
      //   || 'Password must minimum 8 character, at least one letter and one number ',
    ]
  }),
  methods: {
    async logIn() {
      if (this.valid && this.phone && this.password) {
        const arrPhone = this.phone.split("");
        arrPhone.splice(0, 1);
        arrPhone.unshift("62");
        const newPhone = arrPhone.join("");
        const payload = {
          phone: newPhone,
          password: this.password,
          latlong: newPhone,
          device_token: newPhone,
          device_type: 2
        };
        await this.$store.dispatch("oauth/getData", payload);
        if (this.success) {
          this.$router.push("/");
        } else if (this.failure) {
          if (this.failure === "Password is incorrect") {
            this.snackbarVal = true;
            this.$refs["password"].focus();
          } else {
            this.snackbarVal = true;
            this.$refs["phone"].focus();
          }
        }
      }
    }
  },
  computed: {
    success() {
      return this.$store.state.oauth.isSuccess;
    },
    loading() {
      return this.$store.state.oauth.isLoading;
    },
    failure() {
      return this.$store.state.oauth.isFailure;
    }
  }
  // watch: {
  //   failure() {
  //     this.snackbarVal = true;
  //   }
  // }
};
</script>

<style>
</style>
