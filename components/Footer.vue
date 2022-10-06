<template>
  <footer>
    <div class="container">
     <div class="row">
        <div class="col-md-4 col-sm-12">
            <div v-if="data.logo">
              <img class="logo" :src="`${$config.strapiURL}${data.logo.data.attributes.url}`" alt="Banner">
            </div>
            <div class="social-media">
                <div class="row justify-content-start align-items-center">
                <a v-for="(social, idx) in data.socialmedia" :key="idx" :href="social.url" target="_blank">
                  <i :class="`icon-${social.icon}`" />
                </a>
            </div>
             <div class="d-block d-sm-block d-md-none">
              <div class="subtext">İsmet Paşa Mahallesi Trabzon Caddesi No:31/B Dulkadiroğlu /K Maraş</div>
            </div>
        </div>
        </div>
        <div class="col-md-8">
          <ul class="row justify-content-end align-items-start">
            <li v-for="(item, idx) in menu" :key="idx" class="list">
              <div v-if="item.items.length > 0" class="title">
                {{item.title}}
                <ul class="mt-2">
                  <li v-for="(str, index) in item.items" :key="index">
                    <nuxt-link class="subtitle" :to="localePath(str.path)">{{ str.title }}</nuxt-link>
                  </li>
                </ul>
              </div>
              <nuxt-link class="title" v-else :to="localePath(item.path)">{{ item.title }}</nuxt-link>
            </li>
          </ul>
        </div>
     </div>
     <div class="d-none d-md-block d-sm-none">
      <div class="subtext" v-html="data.subtext"></div>
     </div>
    </div>
  </footer>
</template>
<script>
  export default {
      data () {
          return {
              data: '',
              menu: ''
          }
      },
      mounted () {
        this.$axios.$get(`navigation/render/4?locale=${this.$i18n.locale}&type=TREE`).then((res) => {
                this.menu = res
        }),
        this.$axios.$get(`footer?populate=logo,socialmedia&locale=${this.$i18n.locale}`).then((res) => {
            if (res.data && res.data.attributes) {
                this.data = res.data.attributes
            }
        })
      }
  }
  </script>