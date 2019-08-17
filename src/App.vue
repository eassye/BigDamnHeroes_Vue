<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand href="#">Big Damn Heroes</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if="!isAuthenticated" href="#" @click.prevent="login">Login</b-nav-item>
        <b-nav-item-dropdown v-if="isAuthenticated" v-bind:text="profile.name" right>
          <b-dropdown-item href="#" @click.prevent="logout">Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
    <img alt="Vue logo" src="./assets/logo.png">
    <div> 
      <router-link to="/species">Species</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      isAuthenticated: false,
      profile: this.$auth.profile
    };
  },
  async created() {
    try {
       // eslint-disable-next-line
      console.log('ARE WE HERE?');
      return await this.$auth.renewTokens();
    } catch (e) {
      // eslint-disable-next-line
      console.log(e);
    }
  },
  methods: {
    login() {
      this.$auth.login();
    },
     logout() {
      this.$auth.logOut();
    },
    handleLoginEvent(data) {
      this.isAuthenticated = data.loggedIn;
      this.profile = data.profile;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
