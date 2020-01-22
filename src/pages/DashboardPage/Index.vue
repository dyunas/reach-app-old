<!-- eslint-disable prettier/prettier -->
<template>
  <q-page class="flex">
    <div
      class="q-pa-md row q-gutter-y-md"
      v-bind:class="{ 'q-gutter-x-md' : isDesktop }"
    >
      <div class="col col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />

          <q-card-section>
            <div class="text-subtitle2">Pabeng Delicacies - San Pedro</div>
            <div class="text-caption">
            </div>
            <q-rating
              size="16px"
              v-model="stars"
              :max="5"
            />
          </q-card-section>
        </q-card>
      </div>
      <div class="col col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />

          <q-card-section>
            <div class="text-subtitle2">Pabeng Delicacies - San Pedro</div>
            <div class="text-caption">
              Sweets, Deserts, Cakes, Fruit Cakes, Fruit Juice
            </div>
            <q-rating
              size="16px"
              v-model="stars"
              :max="5"
            />
          </q-card-section>
        </q-card>
      </div>

      <div class="col col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/parallax2.jpg" />

          <q-card-section>
            <div class="text-subtitle2">BurgrEat - San Pedro</div>
            <div class="text-caption">
              Burgers, Heavy Meal, Fries, Softdrinks, Sodas
            </div>
            <q-rating
              size="16px"
              v-model="stars"
              :max="5"
            />
          </q-card-section>
        </q-card>
      </div>
      <div class="col col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/parallax2.jpg" />

          <q-card-section>
            <div class="text-subtitle2">BurgrEat - San Pedro</div>
            <div class="text-caption">
              Burgers, Heavy Meal, Fries, Softdrinks, Sodas
            </div>
            <q-rating
              size="16px"
              v-model="stars"
              :max="5"
            />
          </q-card-section>
        </q-card>
      </div>
      <div class="col col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/parallax2.jpg" />

          <q-card-section>
            <div class="text-subtitle2">BurgrEat - San Pedro</div>
            <div class="text-caption">
              Burgers, Heavy Meal, Fries, Softdrinks, Sodas
            </div>
            <q-rating
              size="16px"
              v-model="stars"
              :max="5"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      stars: 2,
      isDesktop: true
    };
  },

  mounted () {
    this.checkPlatform()
  },

  methods: {
    checkPlatform () {
      if (this.$q.platform.desktop) {
        this.isDesktop = true
      } else {
        this.isDesktop = false
      }
    }
  }
};
</script>
