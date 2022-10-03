<template>
  <div class="container">
	<div  v-for="(item, index) in 20" :key="index">
		<h1>deneme</h1>
		{{data.deneme}}
		<i class="icon-arrow"></i></div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				data: '',
			}
		},
		mounted () {
			this.$axios.$get("deneme?populate=*&locale").then((res) => {
        if(res.data && res.data.attributes){
          this.data = res.data.attributes
        }
			})
		}
	}
	</script>
