<template>
  <div>
      <div class="ui secondary pointing menu" style="justify-content: space-between"> 
                                  <nuxt-link class="item" to="Overview">
                                    <div class="text-center w-100"><i class="th icon"></i>
                                            <p>Overview</p>
                                        </div>
                                    </nuxt-link>
                                    
                                <nuxt-link class="item " to="Address">
                                    <div class="text-center w-100"><i class="qrcode icon"></i>
                                        <p>Wallets</p>
                                    </div>
                                </nuxt-link>

                        <!-----        <nuxt-link class="item " to="Savings">
                                    <div class="text-center w-100"><i class="dollar sign icon"></i>
                                        <p style="margin-bottom: 0px;">Savings</p>
                                    </div>
                                </nuxt-link>

                                <nuxt-link class="item " to="nfts">
                                    <div class="text-center w-100"><i class="file audio icon"></i>
                                        <p style="margin-bottom: 0px;">NFTs</p>
                                    </div>
                                </nuxt-link> --->
                                
                                <nuxt-link class="item " to="Transactions">
                                    <div class="text-center w-100"><i class="tasks icon"></i>
                                        <p>Transactions</p>
                                    </div>
                                </nuxt-link>
                                </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>