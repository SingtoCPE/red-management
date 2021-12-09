<template>
  <v-app :height="height">
    <v-app-bar fixed app>
      <v-toolbar-title
        v-if="isCheckDisplay"
        class="text-h4 font-weight-bold"
        v-text="title"
      />
      <v-spacer />
      <v-btn
        v-if="isCheckDisplay"
        height="45"
        width="130"
        class="mr-3"
        depressed
      >
        วิดีโอสอนใช้งาน
      </v-btn>
      <v-btn
        height="45"
        width="130"
        class="font-weight-bold mr-10"
        elevation="5"
        to="/login"
      >
        เข้าสู่ระบบ
      </v-btn>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: "สอบสวน.COM",
      drawerAppBar: true,
      isCheckDisplay: false,
    };
  },
  computed: {
    height() {
      if (
        this.$vuetify.breakpoint.name === "xs" ||
        this.$vuetify.breakpoint.name === "sm"
      ) {
        this.isCheckDisplay = false;
      } else {
        this.isCheckDisplay = true;
      }
    },
  },
  methods: {
    signOut() {
      this.$store.commit("login/setIsLogin", false);
      this.$router.push("/login");
    },
  },
};
</script>
