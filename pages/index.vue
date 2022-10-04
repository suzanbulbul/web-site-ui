<template>
  <div class="container">
	<div>
		<div  v-for="(item, index) in 20" :key="index">
		<h1>deneme</h1>
		{{data.deneme}}
		<i class="icon-arrow"></i></div>
	</div>
	<carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false">
		<slide>
			Slide 1 Content
		</slide>
		<slide>
			Slide 2 Content
		</slide>
	</carousel>
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
