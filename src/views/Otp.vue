<template>
  <v-container fluid>
    <v-row justify="center" align="center" style="height: 90vh">
      <v-col xs="11" sm="6" md="4">
        <v-card max-height="100vh" class="pa-3" outlined>
          <v-container>
            <div
              class="text-center text-xs-subtitle-1 text-sm-h6 text-md-h5 pb-1"
            >
              Registration verify
            </div>
            <div class="text-center py-2">
              Please, enter your code that already to send in your phone
            </div>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row justify="center">
                <v-col xs="1" sm="2" md="2">
                  <v-text-field
                    dense
                    v-model="dOne"
                    :rules="dOneRules"
                    required
                    outlined
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col xs="1" sm="2" md="2">
                  <v-text-field
                    dense
                    v-model="dTwo"
                    :rules="dTwoRules"
                    required
                    outlined
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col xs="1" sm="2" md="2">
                  <v-text-field
                    dense
                    v-model="dThree"
                    :rules="dTwoRules"
                    required
                    outlined
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col xs="1" sm="2" md="2">
                  <v-text-field
                    hide-details
                    dense
                    v-model="dFour"
                    :rules="dTwoRules"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
              <p class="red--text text-center mb-0 py-2"></p>
              <div class="d-flex flex-column align-center">
                <v-btn
                  color="primary"
                  class="mb-4 text-capitalize"
                  @click="submitGo"
                >
                  Verifycation
                </v-btn>
              </div>
              <hr class="mx-4" />
              <div class="text-center mt-2">
                Not have the code?
                <v-btn small class="text-capitalize" color="primary" text
                  >Re-send code</v-btn
                >
              </div>
            </v-form>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
