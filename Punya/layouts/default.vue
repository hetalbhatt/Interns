<template>
  <v-app class="white">
    
    <v-app-bar
      fixed
      app
      class=""
      color="rgba(255,255,255,0.9)"
    >
      <v-toolbar-title v-text="title" class="title-text brown--text"/>
      <v-spacer />
      
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

    </v-app-bar>
    <v-content>
      <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="brown--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Coffee Menu</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
      <v-container fluid class="pa-0">
        <nuxt />
      </v-container>

      <!--LOGIN BUTTON-->
      <v-speed-dial
      :bottom="true"
      :left="true"
      :style="{'position':'fixed'}">
      
        <template v-slot:activator>
          <v-btn
          color="pink darken-2"
          class="ma-2"
          dark
          fab
          @click="loginDialog = !loginDialog"
          >
            <v-icon v-if="false">mdi-close</v-icon>
            <v-icon v-else>mdi-account-circle</v-icon>
          </v-btn>
        </template>
      </v-speed-dial>
      <v-dialog v-model="loginDialog" persistent max-width="80%"> 
        <v-card>
          <v-card-title class="headline">Login</v-card-title>
          <v-card-text>
            <v-form>
              <v-container>
                <v-row>
                  <v-text-field label="User ID"></v-text-field>
                </v-row>

                <v-row>
                  <v-text-field label="Password"></v-text-field>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red lighten-1" text @click="loginDialog = false">Cancel</v-btn>
            <v-btn color="brown darken-1" text @click="loginDialog = false">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      
      <!--DIALOG-->
      <LoginDialog v-if="!loginDialog" />
    </v-content>
    
  </v-app>
</template>

<script>
/* eslint-disable */

import LoginDialog from '@/./components/LoginDialog'

export default {
  components:{
    LoginDialog
  },
  data () {
    return {
      title: 'Thomson Brewers',
      loginDialog : false,
      drawer : false
    }
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');

  .title-text{
    font-family: 'Pacifico' , cursive;
    font-size: 2em;
  }

  .pacifico-font{
    font-family: 'Pacifico' , cursive;
  }

  @media only screen and (max-width: 600px) {
    
    .pacifico-font{
      font-family: 'Pacifico' , cursive;
      font-size: 1em;
    }

  }
</style>
