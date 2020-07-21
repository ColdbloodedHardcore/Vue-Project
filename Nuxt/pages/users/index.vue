<template>
    <section>
        <h1>{{this.pageTitle}}</h1>

        <ul>
          <li v-for="user of users" :key="user.id">
            <a href="#" @click.prevent="openUser(user)">{{ user.name }}</a> 
          </li>
        </ul>
    </section>  
</template>

<script>
export default {
  async fetch({store}) {
    if(store.getters['users/users'].lenght === 0) {
      await store.dispatch('users/fetch');
    }
  },
  data: () => ({
    pageTitle: 'Users Page'
  }),
  computed: {
    users() {
      return this.$store.getters['users/users']
    }
  },
  methods: {
    openUser(user) {
      this.$router.push('/users/' + user.id);
    }
  }
}
</script>

<style>

</style>

