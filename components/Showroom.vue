<template>
    <div class="showroom mb-100"> 
        <div class="title">SHOWROOMLARIMIZ</div>
        <carousel 
            :per-page="1"  
            :mouse-drag="true" 
            :pagination-enabled="false" 
            :navigation-enabled="true"
            navigationNextLabel=""
            navigationPrevLabel=""
            >
            <slide  v-for="(item, index) in 3" :key="index" >
                <div class="card">
                    <div class="content">
                        <div class="sub-title">Mibano</div>
                        <p class="decs">Denizhan Sk. Lale Han Zemin Kat No: 7/A</p>
                        <p>34394 Mecidiyeköy / İstanbul</p>
                    </div>
                </div>
            </slide>
        </carousel>
    </div>
</template>