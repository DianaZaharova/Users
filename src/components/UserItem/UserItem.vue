<template>
  <div class="users__wrap">
    <img
      class="users__img"
      :src="user.avatar_url"
      alt="Фото пользователя"
    />
    <div class="users__description">
      <h3 class="users__name">{{user.login}}</h3>
      <div class="users__info-wrap">
        <p class="users__info">
          Followers:
          <span class="users__info_black"
            >-</span
          >
        </p>
        <p class="users__info">
          Following:
          <span class="users__info_black"
            >-</span
          >
        </p>
      </div>
      <p class="users__info">
        Repositories:
        <span class="users__info_black">-</span>
      </p>
      <div class="users__links-wrap">
        <a class="users__github-link" :href="user.html_url"
          >Ссылка на Github</a
        >
        <a class="users__info-link" href="#">More information</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./UserItem.scss"></style>

<script>

  export default {
    name: "UserItem",
    data() {
      return {
        detailsOpen: false,
      }
    },
    props: {
      user: { 
        type: Object,
      }
    }
  }
</script>