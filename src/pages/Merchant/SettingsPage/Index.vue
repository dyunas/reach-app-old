<!-- eslint-disable prettier/prettier -->
<template>
  <q-page>
    <h4 class="pageHeader">Settings</h4>

    <div class="q-pa-md row q-gutter-md">
      <div class="col col-md-12 col-lg-12">
        <q-card
          flat
          bordered
          class="my-card"
        >
          <q-tabs
            v-model="tab"
            class="bg-yellow text-primary shadow-2"
            align="left"
            inline-label
          >
            <q-tab
              icon="face"
              label="Profile"
              name="profile"
            />
            <q-tab
              icon="create"
              label="Edit Profile"
              name="changePass"
            />
            <q-tab
              icon="lock_open"
              label="Change Password"
              name="changePass"
            />
          </q-tabs>

          <q-separator />

          <q-card-section>
            <span class="text-h4 text-weight-thin">
              PROFILE HERE
            </span>
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

<style lang="sass" scoped>
.pageHeader
  margin: 15px 0px 5px 15px
</style>
