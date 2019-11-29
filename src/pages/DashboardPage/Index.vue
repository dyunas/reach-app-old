<template>
  <q-page class="flex">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-section>
          <div class="text-subtitle2">Pabeng Delicacies - San Pedro</div>
          <div class="text-caption">Sweets, Deserts, Cakes, Fruit Cakes, Fruit Juice</div>
          <q-rating size="16px" v-model="stars" :max="5" />
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/parallax2.jpg" />

        <q-card-section>
          <div class="text-subtitle2">BurgrEat - San Pedro</div>
          <div class="text-caption">Burgers, Heavy Meal, Fries, Softdrinks, Sodas</div>
          <q-rating size="16px" v-model="stars" :max="5" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      stars: 2
    }
  }
}
</script>

<style lang="sass">
.my-card
  width: 100%
  min-width: 300px
  max-width: 320px
</style>