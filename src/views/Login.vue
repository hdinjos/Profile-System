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
              ></v-text-field>

              <v-text-field
                dense
                v-model="password"
                :rules="passwordRules"
                label="Password"
                required
                outlined
                type="password"
              ></v-text-field>
              <hr class="mx-4" />
              <div class="d-flex flex-column align-center">
                <div>
                  <v-btn
                    color="primary"
                    class="mt-3 text-capitalize"
                    @click="submitGo"
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
              </div>
            </v-form>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    phone: '',
    password: '',
    country: '',
    phoneRules: [
      (v) => !!v || 'Phone is required',
      (v) => /^[0-9]{1,20}$/.test(v) || 'Phone must number',
    ],
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v)
        || 'Password must minimum 8 character, at least one letter and one number ',
    ],
  }),
  methods: {
    submitGo() {
      if (this.valid) {
        alert('valid');
      }
    },
  },
};
</script>

<style>
</style>
