<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-data-table :headers="headers" class="elevation-1"></v-data-table>
      </v-col>
    </v-row>
    <v-row justify="end">
      <v-col cols="3">
        <v-text-field outlined dense label="จำนวน" hide-details="auto" />
      </v-col>
      <v-col cols="3">
        <v-text-field outlined dense label="ส่วนลด" hide-details="auto" />
      </v-col>
    </v-row>
    <v-row justify="end">
      <v-col cols="3">
        <v-text-field
          outlined
          dense
          label="มูลค่าก่อน VAT"
          hide-details="auto"
        />
      </v-col>
      <v-col cols="3">
        <v-text-field outlined dense label="VAT" hide-details="auto" />
      </v-col>
      <v-col cols="3">
        <v-text-field outlined dense label="มูลค่าสุทธิ" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    headers: [
      { text: "ลำดับ", value: "" },
      { text: "รายการสินค้า", value: "" },
      { text: "จำนวน", value: "" },
      { text: "ราคา", value: "" },
      { text: "ส่วนลด", value: "" },
      { text: "มูลค่า", value: "" },
    ],
  }),
};
</script>
