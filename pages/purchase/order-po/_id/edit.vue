<template>
  <v-form>
    <v-card>
      <v-card-title>
        <v-row>
          <v-col> แก้ไขใบขอซื้อ (Purchase Order) </v-col>
        </v-row>
        <v-row justify="end">
          <v-btn @click="submit" class="mr-2" color="primary">บันทึก</v-btn>
          <v-btn @click="cancel" class="mr-3" color="error">ยกเลิก</v-btn>
        </v-row>
      </v-card-title>
      <v-card-text class="mt-3">
        <v-row dense>
          <v-col cols="12" sm="6" md="6">
            <v-text-field label="เลขที่" outlined dense hide-details="auto" />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="วันที่เอกสาร"
              outlined
              type="date"
              dense
              hide-details="auto"
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-autocomplete
              label="ชื่อลูกค้า"
              outlined
              dense
              hide-details="auto"
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-autocomplete
              label="ชื่อพนักงาน"
              outlined
              dense
              hide-details="auto"
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-autocomplete label="แผนก" outlined dense hide-details="auto" />
          </v-col>
          <v-col cols="12" sm=" 3" md="3">
            <v-autocomplete
              label="ชนิดของ VAT"
              outlined
              dense
              hide-details="auto"
            />
          </v-col>
          <v-col cols="12" sm="3" md="3">
            <v-text-field outlined dense hide-details="auto" />
          </v-col>
          <v-col cols="12" sm=" 3" md="3">
            <v-autocomplete
              label="หน่วยเงิน"
              outlined
              dense
              hide-details="auto"
            />
          </v-col>
          <v-col cols="12" sm="3" md="3">
            <v-text-field outlined dense hide-details="auto" />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-autocomplete
              label="อัตราแลกเปลี่ยน"
              outlined
              dense
              hide-details="auto"
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field label="อนุมัติ" outlined dense hide-details="auto" />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              label="วันที่อนุมัติ"
              outlined
              dense
              type="date"
              hide-details="auto"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card class="px-4" flat>
        <FormOne />
      </v-card>
    </v-card>
  </v-form>
</template>

<script>
import FormOne from "../../components/table/-FormTableOne.vue";

export default {
  head: () => ({
    title: "แก้ไขใบขอซื้อ -",
  }),
  components: {
    FormOne,
  },
  data: () => ({}),
  methods: {
    submit() {
      this.$router.go(-1);
    },
    cancel() {
      this.$router.go(-1);
    },
  },
};
</script>
