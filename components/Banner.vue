<template>
   <div class="banner">
    <carousel 
        :per-page="1"  
        :mouse-drag="true" 
        :pagination-enabled="false" 
        :navigation-enabled="true"
        navigationNextLabel=""
        navigationPrevLabel=""
   >
        <slide  v-for="(item, index) in 3" :key="index" >
            <img src="~/assets/img/example.png" />
            <div class="area">
                <h1 class="title">Sonia</h1>
                <p class="desc">Bright marble bathroom with two sinks and two mirrors.</p>
            </div>
        </slide>
    </carousel>
   </div>
  </template>
  <script>
  </script>
  