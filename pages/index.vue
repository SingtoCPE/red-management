<template>
  <v-container fill-height fluid>
    <v-row class="my-0" align="center" justify="center">
      <v-col class="col-12 text-center text-h2 font-weight-bold">
        <v-divider class="my-5" />
        <span>SBS MANAGEMENT</span>
        <v-divider class="my-5" />
      </v-col>
    </v-row>
    <v-row no-gutters class="my-0" justify="center"
      ><v-col cols="12" sm="5" md="5">
        <v-card flat>
          <v-text-field v-model="form.username" outlined />
          <v-text-field
            v-model="form.password"
            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show3 ? 'text' : 'password'"
            class="input-group--focused"
            outlined
            @click:append="show3 = !show3"
          />
          <v-btn block x-large dark @click="submit">เข้าสู่ระบบ</v-btn>
        </v-card>
      </v-col></v-row
    >
    <v-row class="my-0" align="center" justify="center">
      <v-col class="col-12 d-flex justify-center">
        <v-card flat width="500">
          <img src="../img/1.png" width="100%" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from "vuex";

export default {
  layout: "empty",
  data: () => ({
    form: {
      username: "admin",
      password: "1234",
    },
    show3: false,
  }),
  methods: {
    submit() {
      this.$router.push("/dashboard");
    },
  },
};
</script>
