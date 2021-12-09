<template>
  <v-card class="pa-6">
    <v-row justify="center">
      <v-col cols="10">
        <v-row>
          <v-col cols="12" sm="6" md="6" class="text-h4">
            <span>วิเคราะห์ระบบขาย</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-card color="#385F73" dark class="text-h4 pa-6">
              <v-row>
                <v-col class="col-12 text-center">199</v-col>
              </v-row>
              <v-divider class="my-4" />
              <v-row>
                <v-col class="col-12 text-center">ใบเสนอราคา</v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-card color="#385F73" dark class="text-h4 pa-6">
              <v-row>
                <v-col class="col-12 text-center">100</v-col>
              </v-row>
              <v-divider class="my-4" />
              <v-row>
                <v-col class="col-12 text-center"
                  >ใบรับคำสั่งซื้อจากลูกค้า</v-col
                >
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="mt-3" justify="center">
      <v-col cols="11" sm="10" md="10">
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
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <v-divider class="my-10" />

    <v-row justify="center">
      <v-col cols="10">
        <v-row>
          <v-col cols="12" sm="6" md="6" class="text-h4">
            <span>วิเคราะห์ระบบซื้อ</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-card color="#385F73" dark class="text-h4 pa-6">
              <v-row>
                <v-col class="col-12 text-center">199</v-col>
              </v-row>
              <v-divider class="my-4" />
              <v-row>
                <v-col class="col-12 text-center">ใบขอซื้อทั้งหมด</v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-card color="#385F73" dark class="text-h4 pa-6">
              <v-row>
                <v-col class="col-12 text-center">100</v-col>
              </v-row>
              <v-divider class="my-4" />
              <v-row>
                <v-col class="col-12 text-center">ใบสั่งซื้อทั้งหมด</v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="mt-3" justify="center">
      <v-col cols="11" sm="10" md="10">
        <v-card>
          <v-card-title>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="searchSales"
              append-icon="mdi-magnify"
              label="ค้นหา"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>

          <v-data-table
            :headers="salesHeader"
            :items="salesItems"
            :search="searchSales"
            class="elevation-2"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    searchPurchase: "",
    searchSales: "",

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
    ],
    salesHeader: [
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
    salesItems: [
      {
        id: 1,
        text: "ใบเสนอราคาขายวัวแดง",
        customerName: "สมชาย สมดี",
        date: "11/11/2564",
        approveDate: "23/11/2564",
      },
      {
        id: 2,
        text: "ใบเสนอราคาขายวัวเขียว",
        customerName: "สมชาย สมดี",
        date: "11/11/2564",
        approveDate: "23/11/2564",
      },
    ],
  }),
};
</script>
