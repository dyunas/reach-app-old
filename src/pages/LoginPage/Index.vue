<template>
  <q-page class="flex flex-center">
    <div class="row">
      <img alt="Quasar logo" src="~assets/reach-logo-low.png" />
    </div>
    <div class="row">
      <div class="q-pa-md">
        <q-card class="my-card">
          <q-card-section>
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
                dense
                v-model="username"
                label="Username"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type your username']"
                autofocus
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>

              <q-input
                dense
                v-model="password"
                :type="isPwd ? 'password' : 'text'"
                label="Password"
                lazy-rules
                :rules="[
                  val => val !== null && val.length > 0 || 'Please type your password',
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>

              <q-toggle v-model="remember" label="Remember me" />

              <div>
                <q-btn label="Submit" type="submit" color="primary" outline size="md" />
                <q-btn
                  label="Reset"
                  type="reset"
                  color="primary"
                  class="q-ml-sm"
                  outline
                  size="md"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      remember: false,
      isPwd: true
    }
  },

  methods: {
    onSubmit() {
      this.$store.dispatch(
        'loginModule/login',
        {
          username: this.username,
          password: this.password
        }
      )
        .then(result => {
          this.$router.push({ path: '/dashboard' })
        }).catch(error => {
          console.log(error)
        })
    },

    onReset() {
      this.username = ''
      this.password = ''
      this.remember = false
    }
  }
}
</script>

<style lang="sass">
.my-card
  width: 100%
  min-width: 300px
</style>