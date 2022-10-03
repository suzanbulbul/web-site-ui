<template>
    <header id="header">
        <div class="header-top">
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
        </div>
        <div class="header">
            <div class="container">
               <div class="row align-items-center">
                    <div class="logo col-4">
                        <img src="~/assets/img/logo.jpeg" />
                    </div>
                    <div class="col-md-8">
                        <div class="d-none d-md-block d-sm-none">
                            <ul class="nav">
                                <li v-for="(item, index) in 4" :key="index" class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Home</a>
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
      mounted () {
        window.addEventListener('scroll', this.handleScroll)
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