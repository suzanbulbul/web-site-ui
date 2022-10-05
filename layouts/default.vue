<template>
  <main>
    <Header/>
    <router-view />
    <Footer/>
  </main>
</template>
<script>
export default {
  name: 'Default',
  scrollToTop: true
}
</script>
