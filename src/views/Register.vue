<template>
  <v-container fluid>
    <v-row justify="center" align="center" style="height: 90vh">
      <v-col xs="11" sm="6" md="4">
        <v-card max-height="100vh" class="pa-3" outlined>
          <v-container>
            <div
              class="text-center text-xs-subtitle-1 text-sm-h6 text-md-h5 pb-3"
            >
              Registrasi
            </div>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                dense
                v-model="phone"
                :rules="phoneRules"
                label="Phone"
                required
                outlined
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
              ></v-text-field>
              <v-text-field
                dense
                v-model="country"
                :rules="countryRules"
                label="Country"
                required
                outlined
              ></v-text-field>
              <hr class="mx-4" />
              <div class="d-flex flex-column align-center">
                <div>
                  <v-btn
                    color="primary"
                    class="mt-3 text-capitalize"
                    @click="register"
                  >
                    Register
                  </v-btn>
                </div>
                <div class="mt-2">
                  <span>Already have an account?</span>
                  <router-link class="mx-2 text-decoration-none" to="/login"
                    >Login</router-link
                  >
                </div>
              </div>
            </v-form>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    value: "password",
    valid: false,
    phone: "",
    password: "",
    country: "",
    phoneRules: [
      v => !!v || "Phone is required",
      v => /^[0-9]{1,20}$/.test(v) || "Phone must number"
    ],
    passwordRules: [
      v => !!v || "Password is required",
      v => v.length >= 8 || "Password minimum 8 characters"
      // v =>
      //   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v) ||
      //   "Password must minimum 8 character, at least one letter and one number"
    ],
    countryRules: [
      v => !!v || "Country is required",
      v => v.length >= 3 || "Country must mininal 3 characters"
    ]
  }),
  methods: {
    async register() {
      if (this.valid && this.phone && this.password && this.country) {
        const arrPhone = this.phone.split("");
        arrPhone.splice(0, 1);
        arrPhone.unshift("62");
        const newPhone = arrPhone.join("");
        const payload = {
          phone: newPhone,
          password: this.password,
          country: this.country,
          latlong: newPhone,
          device_token: newPhone,
          device_type: 2
        };
        console.log(payload);
        try {
          const proxyCors = "https://safe-ravine-02458.herokuapp.com/";
          const instanceAxios = axios.create({
            baseURL: `${proxyCors}http://pretest-qa.dcidev.id/api/v1`,
            withCredentials: false
          });
          const res = await instanceAxios.post("/register", payload);
          console.log(res);
        } catch (err) {
          console.log(err);
        }
        // console.log(payload);
      }
    }
  }
};
</script>

<style>
</style>
