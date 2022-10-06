<template>
    <div class="about-us mb-100">
        <div class="row align-items-center">
            <div class="col-md-6 col-sm-12 text-center" v-if="data.img">
                 <img :src="`${$config.strapiURL}${data.img.data.attributes.url}`" alt="Abous-us">
            </div>
            <div class="col-md-6 col-sm-12">
                <div class="sub-title">{{data.title}}</div>
                <p class="desc" v-html="data.desc"></p>
            </div>
        </div>
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
    this.$axios.$get(`about-us?populate=aboutus,aboutus.img&locale${this.$i18n.locale}`).then((res) => {
      if (res.data && res.data.attributes) {
        this.data = res.data.attributes.aboutus
      }
    })
  }
}
</script>