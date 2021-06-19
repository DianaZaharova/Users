<template>
  <div class="users">
    <h2 class="visually-hidden">Пользователи</h2>
    <div v-if="allUsers !== undefined && allUsers.length !== 0">
      <ul class="users__list">
        <li class="users__item" v-for="user in allUsers" :key="user.id">
          <UserItem :user="user"/>
        </li>
      </ul>
      <div class="users__pagination">
      <button :disabled="page <= 1" class="users__pagination-btn" @click="changePage(page -= 1)">Назад</button>
      <button :disabled="page >= 100" class="users__pagination-btn" @click="changePage(page += 1)">Вперед</button>
      </div>
    </div>
    <div v-else class="users__error">
      <p>Произошла ошибка :(</p>
      <p>Возможно сервер перезагружен, Пожалуста повторите попытку позже</p>
    </div>
  </div>
</template>

<style lang="scss" src="./UsersList.scss"></style>

<script>
  import UserItem from '../UserItem/UserItem.vue'

  export default {
    name: "UsersList",
    props: ["allUsers"],
    data() {
      return {
        page: 1,
      }
    },
    components: { UserItem },
    methods: {
      changePage(page) {
        if(page >= 1 && page <= 100) {
          this.$emit('newPage', page)
        }
      }
    }
  }
</script>