<template>
  <div class="banner mb-100">
  <carousel 
      :per-page="1"  
      :mouse-drag="true" 
      :pagination-enabled="false" 
      :navigation-enabled="true"
      navigationNextLabel=""
      navigationPrevLabel=""
  >
    <slide  v-for="(item, index) in data" :key="index" >
        <div v-if="item.img.data">
            <img :src="`${$config.strapiURL}${item.img.data.attributes.url}`" alt="Banner">
        </div>
        <div v-if="item.title && item.desc" class="area">
            <h1 class="title">{{item.title}}</h1>
            <p class="desc w-80" v-html="item.desc"></p>
        </div>
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
    this.$axios.$get(`banner?populate=slider,slider.img&locale`).then((res) => {
      if (res.data && res.data.attributes) {
        this.data = res.data.attributes.slider
      }
    })
  }
}
</script>
  