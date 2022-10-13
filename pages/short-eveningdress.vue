<template>
    <div class="container">
        <div class="products">
            <div class="row">
                <div v-for="(item, idx) in data" :key="idx" class="col-sm-6 col-md-6 col-lg-4">
                    <a :href="item.url" class="productCard__item">
                        <div  v-if="item.attributes.img">
                            <img class="productCard__img" :src="`${$config.strapiURL}${item.attributes.img.data.attributes.url}`" alt="Abous-us">
                        </div>
                        <div class="productCard__detail">
                            <h2 class="productCard__title">{{item.attributes.title}}</h2>
                            <p class="productCard__desc">{{item.attributes.desc}}</p>
                            <div class="productCard__price">
                                <span class="productCard__newPrice">{{item.attributes.amount}}</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div v-if="!pageLoaded" class="text-center">
                <button class="btn-more" @click="getData">
                    Daha Fazlası
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
    return {
        data: '',
        perPage: 0,
        pageLoaded: false
    }
    },
    mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.perPage = this.perPage + 3
      const url = `short-eveningdresses?populate=*,img,tag&locale=${this.$i18n.locale}&pagination[limit]=${this.perPage}`
      this.$axios.$get(url).then((res) => {
        this.data = res.data
        if (res.meta.pagination.total < this.perPage) {
          this.pageLoaded = true
        }
      })
    }
  }
}
</script>