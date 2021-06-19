<template>
    <section class="app">
      <header class="app__header">
        <div class="app__header-content">
          <Search/>
          <Sort @sortUsers="changeTypeSort"/>
        </div>
      </header>
      <router-view></router-view>
      <UsersList :allUsers="allUsers"  @newPage="changePage"/>
    </section>
</template>

<style lang="scss" src="./app.scss"></style>

<script>
import {mapGetters, mapActions} from "vuex"
import Search from '../Search/Search.vue'
import Sort from '../Sort/Sort.vue'
import UsersList from '../UsersList/UsersList.vue'

export default {
  components: { Search, Sort, UsersList },
  computed: mapGetters(["allUsers"]),
  data() {
    return {
      order: "desc",
      page: 1,
    }
  },
    methods:{
    changeTypeSort(type) {
      this.order = type
    },
    changePage(page) {
      this.page = page
    },
    ...mapActions(["fetchUsers" ]),

  },
  async mounted() {
    this.fetchUsers({page: this.page, order: this.order})
  },
  watch: {
    page(page) {
      this.fetchUsers({page: page, order: this.order})
    },
    order(order) {
      this.fetchUsers({page: this.page, order: order})
    },
  }
};
</script>
