<template>
  <header class="container">
    <h1>deneme</h1>
    {{data.deneme}}
    <i class="icon-arrow"></i>
  </header>
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
