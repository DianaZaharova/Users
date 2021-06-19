<template>
  <div class="search">
    <form class="search__form">
      <h2 class="visually-hidden">Поиск</h2>
      <label class="search__label" for="search">Найти пользователя</label>
      <div class="search__container">
        <input
          class="search__input"
          type="text"
          name="search"
          placeholder="Введите логин"
        />
        <button class="search__submit">Искать</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" src="./Search.scss"></style>

<script>
  import {mapGetters, mapActions} from "vuex"

  export default {
    computed: mapGetters(["searchUser"]),
    methods: mapActions(["fetchUser"]),
  }
</script>