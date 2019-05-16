<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          歡迎來到flask門控系統
        </h1>
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">請刷卡後點選下方按鈕</h2>
        <h2 v-if="status">歡迎 {{ name }}</h2>
        <h2 v-else>{{ name }}</h2>
        <v-layout justify-center>
          <v-app>
            <div>
              <v-btn color="success" @click="getRFID">驗證卡號</v-btn>
            </div>
          </v-app>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data(){
      return {
        name : '',
        status : false
      }
    },
    methods:{
      getRFID(){
        this.axios('rfid')
        .then(response => {
          this.status = response.data.status
          this.name = response.data.user
          
        })
      }
    }
  }
</script>

<style>

</style>
