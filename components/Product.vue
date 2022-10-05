<template>
    <div class="product mb-100">
      <h2 class="title">Ürünler</h2>
      <carousel :centered="true" :mouse-drag="true" :pagination-enabled="false" :navigation-enabled="true" :per-page-custom="[[320,1],[576,2],[768,3]]">
        <slide v-for="(item,index) in 4" :key="index" class="m-2 card">
          <button  @click="$bvModal.show(`product_${index}`)">
            <img src="~/assets/img/example.png" />
            <div class="content">
              <h2 class="title w-80">test</h2>
              <p class="desc">Deneme</p>
            </div>
          </button>
          <b-modal :id="`product_${index}`" content-class="modal_crypyoquestions" hide-footer hide-header centered>
            <div class="d-flex justify-content-end align-items-start mb-3">
              <button class="close" @click="$bvModal.hide(`product_${index}`)">
                <i class="icon-close" />
              </button>
            </div>
            <div>
                <img src="~/assets/img/example.png" />
                <div class="content">
                    <h2 class="title">test</h2>
                    <p class="desc">Deneme</p>
                </div>
              </div>
          </b-modal>
        </slide>
      </carousel>
    </div>
  </template>