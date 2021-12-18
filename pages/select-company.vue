<template>
  <v-container class="py-10" fluid>
    <v-row class="mb-10" no-gutters justify="center">
      <v-col class="text-center text-h3"> เลือกบริษัท </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-data-table
          @click:row="selected"
          :headers="headers"
          :items="companyItems"
          hide-default-footer
          class="elevation-1"
        ></v-data-table></v-col
    ></v-row>
  </v-container>
</template>
<script>
export default {
  layout: "empty",
  data: () => ({
    headers: [
      { text: "ลำดับ", value: "id" },
      { text: "ชื่อบริษัท", value: "companyName" },
      { text: "พื้นที่", value: "area" },
    ],
    companyItems: [
      { id: 1, companyName: "SBS MANAGEMENT", area: "นครราชสีมา" },
      { id: 2, companyName: "SG MANAGEMENT", area: "ขอนแก่น" },
    ],
  }),
  methods: {
    selected(row) {
      this.$store.commit("company/setCompany", row);
      this.$router.push("/dashboard");
    },
  },
};
</script>
