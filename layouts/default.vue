<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list rounded nav>
        <div v-for="(item, index) in items" :key="index">
          <v-list-item
            v-if="!item.childrens"
            @click="checkStart(index)"
            :to="item.to"
            router
            exact
            link
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>

          <v-list-group v-if="item.childrens" :prepend-icon="item.icon">
            <template v-slot:activator>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </template>

            <v-list-group no-action sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="(n, index) in item.childrens"
                :key="index"
                :to="n.to"
                link
              >
                <v-list-item-title v-text="n.title"></v-list-item-title>
              </v-list-item>
            </v-list-group>
          </v-list-group>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-icon class="ml-1">mdi-account-cowboy-hat</v-icon>
      <v-spacer />
      <v-menu
        rounded
        transition="slide-x-transition"
        max-height="550px"
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="mr-3" icon x-large v-on="on" v-bind="attrs">
            <v-avatar color="teal" size="48">
              <span class="white--text headline">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card width="300">
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="teal" class="mb-2">
                <span class="white--text headline">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
                block
                color="error"
                class="font-weight-bold text-h6"
                @click="signOut"
              >
                Sign Out
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-card flat class="ma-3">
        <nuxt />
      </v-card>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      title: "SBS MANAGEMENT",
      user: {
        initials: "AD",
        fullName: "ADMIN",
        email: "john.doe@doe.com",
      },
      items: [
        {
          icon: "mdi-podium-gold",
          title: "Dashboard",
          to: "/dashboard",
        },

        {
          icon: "mdi-cart-arrow-down",
          title: "ระบบซื้อ",
          childrens: [
            {
              title: "ใบขอซื้อ",
              // to: "/courts/provincial-court",
            },
            {
              title: "ใบสั่งซื้อ",
              // to: "/courts/district-court",
            },
          ],
        },

        {
          icon: "mdi-script-text",
          title: "ระบบขาย",
          childrens: [
            {
              title: "ใบเสนอราคา",
              // to: "/courts/provincial-court",
            },
            {
              title: "ใบรับคำสั่งซื้อจากลูกค้า",
              // to: "/courts/district-court",
            },
          ],
        },

        {
          icon: "mdi-account-circle",
          title: "บัญชีผู้ใช้",
          // to: "/accounts/user-account",
        },
      ],
    };
  },

  methods: {
    signOut() {
      this.$router.push("/");
      this.$store.commit("login/setIsLogin", false);
    },
    checkStart(index) {
      console.log({ index });
    },
  },
};
</script>
