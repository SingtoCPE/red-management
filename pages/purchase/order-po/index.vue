<template>
  <v-card class="pa-6">
    <v-card-title>
      <v-row>
        <v-col> ใบขอซื้อ (Purchase Order) </v-col>
      </v-row>
      <v-row justify="end">
        <v-btn @click="goToNew" color="primary">เพิ่ม</v-btn>
      </v-row>
    </v-card-title>
    <v-row class="mt-3" justify="center">
      <v-col cols="12" sm="12" md="12">
        <v-card>
          <v-card-title>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="searchPurchase"
              append-icon="mdi-magnify"
              label="ค้นหา"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>

          <v-data-table
            :headers="purchaseHeader"
            :items="purchaseItems"
            :search="searchPurchase"
            class="elevation-2"
          >
            <template v-slot:body>
              <tbody>
                <tr v-for="(item, index) in purchaseItems" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.text }}</td>
                  <td>{{ item.customerName }}</td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.approveDate }}</td>
                  <td>
                    <v-btn small class="mr-2" @click="goToEdit(item)"
                      ><v-icon color="green">mdi-pencil</v-icon></v-btn
                    >
                    <v-btn small @click="deleteItem(item)"
                      ><v-icon color="red">mdi-trash-can</v-icon></v-btn
                    >
                  </td>
                </tr>
              </tbody>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  head: () => ({
    title: "ใบขอซื้อ -",
  }),
  data: () => ({
    searchPurchase: "",
    editedIndex: "",
    editedItem: "",

    purchaseHeader: [
      {
        text: "ลำดับ",
        value: "index",
      },
      {
        text: "ชื่อรายการ",
        value: "text",
      },
      {
        text: "ชื่อลูกค้า",
        value: "customerName",
      },
      {
        text: "วันที่เอกสาร",
        value: "date",
      },
      {
        text: "วันที่อนุมัติ",
        value: "approveDate",
      },
      {
        text: "",
        value: "actions",
      },
    ],
    purchaseItems: [
      {
        id: 1,
        text: "ใบเสนอราคาวัว",
        customerName: "สมพงษ์ คงดี",
        date: "18/11/2564",
        approveDate: "21/11/2564",
      },
      {
        id: 2,
        text: "ใบเสนอราคาวัวแดง",
        customerName: "สมชาย สมดี",
        date: "11/11/2564",
        approveDate: "23/11/2564",
      },
    ],
  }),
  methods: {
    goToNew() {
      this.$router.push("/purchase/order-po/new");
    },
    goToEdit(item) {
      this.$router.push(`/purchase/order-po/${item.id}/edit`);
    },
    deleteItem(item) {
      this.editedIndex = this.purchaseItems.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.$swal
        .fire({
          icon: "warning",
          text: `ต้องการที่จะลบ รายการ ${item.text} หรือไม่ ?`,
          confirmButtonText: "ตกลง",
          cancelButtonText: "ยกเลิก",
          showCancelButton: true,
          cancelButtonColor: "red",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.deleteItemConfirm();
          }
        });
    },
    deleteItemConfirm() {
      const id = this.editedItem.id;
      this.purchaseItems.splice(this.editedIndex, 1);
    },
  },
};
</script>
