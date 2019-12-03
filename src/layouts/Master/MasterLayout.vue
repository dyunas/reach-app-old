<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GPL__toolbar" style="height: 64px">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class="q-mx-md"
        />

        <q-toolbar-title v-if="$q.screen.gt.sm" shrink class="row items-center no-wrap">
          <img src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg" />
          <!-- <img alt="REACH Logo" src="~assets/reach-logo-low.png" /> -->
        </q-toolbar-title>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>2</q-badge>
            <q-tooltip>Notifications</q-tooltip>
            <q-menu transition-show="jump-down" transition-hide="jump-up">
              <q-list style="min-width: 100px">
                <q-item clickable>
                  <q-item-section>
                    Having fun
                    <span class="text-caption text-weight-light">Nov. 29, 2019 - 02:38 PM</span>
                  </q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>
                    Having fun
                    <span class="text-caption text-weight-light">Nov. 29, 2019 - 02:38 PM</span>
                  </q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>
                    Mind blown
                    <span class="text-caption text-weight-light">Nov. 29, 2019 - 02:38 PM</span>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
            <q-menu>
              <div class="row no-wrap q-pa-md">
                <div class="column">
                  <div class="text-h6 q-mb-md">Settings</div>
                  <q-toggle v-model="mobileData" label="Use Mobile Data" />
                  <q-toggle v-model="bluetooth" label="Bluetooth" />
                </div>

                <q-separator vertical inset class="q-mx-lg" />

                <div class="column items-center">
                  <q-avatar size="72px">
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>

                  <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                  <q-btn color="primary" label="Logout" push size="sm" v-close-popup />
                </div>
              </div>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" elevated @click="leftDrawerOpen = false">
      <q-scroll-area class="fit">
        <q-toolbar v-if="$q.platform.is.mobile" class="GPL__toolbar">
          <q-toolbar-title class="row items-center text-grey-8">
            <img
              class="q-pl-md"
              src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
            />
            <!-- <span class="q-ml-sm">Photos</span> -->
          </q-toolbar-title>
        </q-toolbar>

        <q-list padding>
          <q-item-label header>Navigation</q-item-label>
          <q-item v-for="link in links" :key="link.text" clickable class="GPL__drawer-item">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <div class="q-py-md q-px-md text-grey-9">
            <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
              <a
                v-for="button in buttons2"
                :key="button.text"
                class="GPL__drawer-footer-link"
                href="javascript:void(0)"
              >{{ button.text }}</a>
            </div>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="GPL__page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      mobileData: false,
      bluetooth: true,
      leftDrawerOpen: false,
      links: [
        { icon: 'dashboard', text: 'Dashboard' },
        { icon: 'shopping_cart', text: 'My Cart' },
        { icon: 'build', text: 'Settings' }
      ],
      buttons2: [
        { text: 'Terms & Conditions' },
        { text: 'Privacy' }
      ]
    }
  }
}
</script>

<style lang="sass">
.GPL
  &__toolbar
    height: 64px
    background-color: #E5E057
  &__toolbar-input
    width: 35%
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000
  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px
    .q-item__section--avatar
      padding-left: 12px
      .q-icon
        color: #5f6368
    .q-item__label:not(.q-item__label--caption)
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem
    &--storage
      border-radius: 0
      margin-right: 0
      padding-top: 24px
      padding-bottom: 24px
  &__side-btn
    &__label
      font-size: 12px
      line-height: 24px
      letter-spacing: .01785714em
      font-weight: 500
  @media (min-width: 1024px)
    &__page-container
      padding-left: 94px
</style>