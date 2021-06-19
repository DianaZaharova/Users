<template>
  <div class="sort">
    <h2 class="visually-hidden">Сортировка</h2>
    <p class="sort__title">Сортировка по количеству репозиториев</p>
    <div class="sort__container">
      <input
        class="sort__input"
        type="radio"
        id="ascending"
        name="radios"
        @click="changeSort('asc')"

      />
      <label class="sort__label" for="ascending">По возрастанию</label>
      <input
        class="sort__input"
        type="radio"
        id="descending"
        name="radios"
        @click="changeSort('desc')"
        checked
      />
      <label class="sort__label" for="descending">По убыванию</label>
    </div>
  </div>
</template>

<style lang="scss" src="./Sort.scss"></style>

<script>
  export default {
    name: "Sort",
    methods: {
      changeSort(typeSort) {
        this.$emit('sortUsers', typeSort)
      }
    }
  }
</script>