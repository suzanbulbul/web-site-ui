<template>
    <header id="header">
        <div class="header-top">
            <!---
            <div class="container">
                <div class="row justify-content-md-end">
                    <div class="col-md-4 col-sm-12">
                        <label>Tüm Ürünlerde Ücretsiz Kargo</label>
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <div class="row">
                            <span v-for="(item, index) in 2" :key="index" class="col-6">Destek</span>
                        </div>
                    </div>
                </div>
            </div>  
            -->
        </div>
        <div class="header">
            <div class="container">
               <div class="row align-items-center">
                    <div class="logo col-4" v-if="data.logo">
                        <img :src="`${$config.strapiURL}${data.logo.data.attributes.url}`" alt="Banner">
                    </div>
                    <div v-if="menu" class="col-md-8">
                        <div class="d-none d-md-block d-sm-none">
                            <ul class="nav">
                                <li v-for="(item, index) in menu" :key="index" class="nav-item">
                                    <a v-if="item.items.length > 0" aria-current="page">{{item.title}}
                                        <ul class="sub-menu">
                                            <li v-for="(str, index) in item.items" :key="index" class="sub-item">
                                               <nuxt-link :to="localePath(str.path)">{{ str.title }}</nuxt-link>
                                            </li>
                                        </ul>
                                    </a>
                                    <nuxt-link v-else :to="localePath(item.path)" class="nav-link">{{item.title}}</nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    data () {
        return {
            menu: '',
            data: ''
        }
    },
    mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.$axios.$get(`navigation/render/2?locale=${this.$i18n.locale}&type=TREE`).then((res) => {
            this.menu = res
    }),
    this.$axios.$get(`header?populate=logo&locale=${this.$i18n.locale}`).then((res) => {
        if (res.data && res.data.attributes) {
            this.data = res.data.attributes
        }
    })
    },
    destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
    handleScroll (event) {
        if (window.pageYOffset > 30) {
        document.getElementById('header').classList.add('scrolled')
        } else {
        document.getElementById('header').classList.remove('scrolled')
        }
    },
    }
}
</script>