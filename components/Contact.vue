<template>
    <div class="contact mb-100">
        <div class="title">{{data.title}}</div>
        <div class="map">
            <iframe
                :src=data.map 
                width="100%"
                height="481"
                style="border: 0"
                loading="lazy"
            ></iframe>
            <div class="w-80 mx-auto">
                <h2 class="sub-title">{{data.mapTitle}}</h2>
                <p class="desc" v-html="data.mapDesc"></p>
                <a class="link" :href="'tel:+' + data.phoneNumber">{{data.phoneNumber}}</a>
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
    this.$axios.$get(`contact?populate=*&locale`).then((res) => {
        if (res.data && res.data.attributes) {
        this.data = res.data.attributes
        }
    })
    }
}
</script>