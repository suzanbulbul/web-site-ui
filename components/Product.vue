<template>
    <div class="product mb-100">
      <h2 class="title">{{data.title}}</h2>
      <carousel :centered="true" :mouse-drag="true" :pagination-enabled="false" :navigation-enabled="true" :per-page-custom="[[320,1],[576,2],[768,3]]">
        <slide v-for="(item,index) in data.Card" :key="index" class="m-2 card">
          <a :href="item.url">
            <div  v-if="item.img">
              <img :src="`${$config.strapiURL}${item.img.data.attributes.url}`" alt="Abous-us">
            </div>
            <div class="content">
              <h2 class="title w-80">{{item.title}}</h2>
              <p class="desc">{{item.desc}}</p>
            </div>
          </a>
        </slide>
      </carousel>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          data: ''
        }
      },
      mounted () {
        this.$axios.$get(`product?populate=*,Card,Card.img&locale${this.$i18n.locale}`).then((res) => {
          if (res.data && res.data.attributes) {
            this.data = res.data.attributes
          }
        })
      }
    }
    </script>