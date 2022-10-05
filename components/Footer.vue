<template>
  <footer>
    <div class="container">
     <div class="row">
        <div class="col-md-4 col-sm-12">
            <img class="logo" src="~/assets/img/logo.png" />
            <div class="d-block d-sm-block d-md-none">
              <div class="subtext">İsmet Paşa Mahallesi Trabzon Caddesi No:31/B Dulkadiroğlu /K Maraş</div>
            </div>
            <div class="social-media">
                <div class="row justify-content-start align-items-center">
                <a v-for="(social, idx) in socialmedia" :key="idx" :href="social.url" target="_blank">
                  <i :class="`icon-${social.icon}`" />
                </a>
            </div>
        </div>
        </div>
        <div class="col-md-8">
          <ul class="row justify-content-end align-items-start">
            <li v-for="(item, idx) in 4" :key="idx" class="list">
              <div class="title">
                test
              </div>
              <ul >
                <li v-for="(str, index) in 2" :key="index">
                  <a class="subtitle" >
                    deneme
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
     </div>
     <div class="d-none d-md-block d-sm-none">
      <div class="subtext">İsmet Paşa Mahallesi Trabzon Caddesi No:31/B Dulkadiroğlu /K Maraş</div>
     </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data () {
      return {
        socialmedia: [
          { icon: 'instagram', url: '/' },
          { icon: 'whatsapp', url: '/' },
          { icon: 'phone', url: '/' }
        ]
      }
    }
  }
  </script>