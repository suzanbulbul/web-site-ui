<template>
    <div class="showroom mb-100"> 
        <div class="title">{{data.title}}</div>
        <carousel 
            :per-page="1"  
            :mouse-drag="true" 
            :pagination-enabled="false" 
            :navigation-enabled="true"
            navigationNextLabel=""
            navigationPrevLabel=""
            >
            <slide  v-for="(item, index) in data.Card" :key="index" >
                <div class="card">
                    <div class="content">
                        <div class="sub-title">{{item.title}}</div>
                        <p class="decs" v-html="item.desc"></p>
                        <a class="link" :href="'tel:+' + item.url">{{item.url}}</a>
                    </div>
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
    this.$axios.$get(`showroom?populate=*,Card&locale`).then((res) => {
        if (res.data && res.data.attributes) {
        this.data = res.data.attributes
        }
    })
    }
}
</script>