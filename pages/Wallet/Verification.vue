<template>
    <div>
        <div style="overflow-x: hidden;">
            <div class="nav-top">
                <div class="ui grid l-r-pad">
                    
                    <div class="five wide computer five wide tablet five wide mobile column z-t-b-p-m zero-t-b-p">
                       
                        <NavMobile />

                        <div class="ui stackable menu transparent hidden-m zero-t-b-p" style="margin-top: 0px;"><a class="item logo-item w-100 p-l-0" href="/"><img class="logo" alt="roqqu logo" src="~/assets/img/roqqu.png"></a></div>
                    </div>

                    <div class="six wide column hidden-m zero-t-b-p">
                        <div class="ui stackable menu transparent nav-links"><a href="https://roqqu.com" target="_blank" class="item"><span><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 15" data-radium="true" style="display: inline-flex; fill: white; width: 1em; height: 1em;">
                                        <defs></defs>
                                        <title>credit card</title>
                                        <path id="credit-card-a" class="cls-1" d="M21.86 0H2.14A2.11 2.11 0 0 0 0 2.08v10.84A2.11 2.11 0 0 0 2.14 15h19.72A2.11 2.11 0 0 0 24 12.92V2.08A2.11 2.11 0 0 0 21.86 0zm-18 12.5a1.25 1.25 0 1 1 1.28-1.25 1.27 1.27 0 0 1-1.28 1.25zm3.43 0a1.25 1.25 0 1 1 1.28-1.25 1.27 1.27 0 0 1-1.28 1.25zm3.42 0A1.25 1.25 0 1 1 12 11.25a1.27 1.27 0 0 1-1.29 1.25zm12.43-6.25a.42.42 0 0 1-.43.42H1.29a.42.42 0 0 1-.43-.42V2.92a.42.42 0 0 1 .43-.42h21.42a.42.42 0 0 1 .43.42z"></path>
                                    </svg></span>Home</a><a class="item active" href="/wallet"><span><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-radium="true" style="display: inline-flex; fill: white; width: 1em; height: 1em;">
                                            <path d="M17.135 0c-.39 0-.893.112-1.563.28C13.898.725 4.074 3.46 3.907 3.515c-1.451.558-2.4 1.117-2.958 1.73a3.985 3.985 0 0 1 2.4-.78h15.628V2.622c0-.949 0-2.623-1.842-2.623zM3.349 5.581C1.284 5.581 0 7.535 0 8.931v11.943A3.12 3.12 0 0 0 3.126 24h17.19a3.12 3.12 0 0 0 3.126-3.126V8.82c0-1.73-1.619-3.238-3.349-3.238H3.349zm15.907 7.814c.781 0 1.395.614 1.395 1.396 0 .781-.614 1.395-1.395 1.395a1.382 1.382 0 0 1-1.396-1.395c0-.782.614-1.396 1.396-1.396z"></path>
                                        </svg></span></span>Wallet</a><a class="item " href="/token/BTC"><span><i class="icon bitcoin"></i></span>Tokens</a><a href="https://roqqu.com/business" target="_blank" class="item"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 43" data-radium="true" style="display: inline-flex; fill: white; width: 1em; height: 1em;">
                                        <path d="M2.609 12.95l35.043-7.887-.485-2.126a1.14 1.14 0 0 0-1.354-.852L2.971 9.427c-.61.134-.992.739-.859 1.344.167.722.33 1.457.497 2.18zm-.29-5.45L35.574.071c1.586-.354 3.167.636 3.523 2.21l3.485 15.29H40.5l-1.58-6.925-35.044 7.889 2.17 9.495.195.842a.634.634 0 0 0 .76.476l.26-.06v2.025l-.038.012a2.465 2.465 0 0 1-2.93-1.837L.077 11.002a2.832 2.832 0 0 1 .382-2.21C.891 8.105 1.523 7.675 2.316 7.5h.002zm8.632 10.624a2.944 2.944 0 0 0-2.946 2.93v19.022c0 1.612 1.322 2.924 2.946 2.924h34.098C46.673 43 48 41.682 48 40.076V21.054c0-1.612-1.327-2.93-2.951-2.93H10.95zm33.382 8.515v-3.873a.449.449 0 0 0-.454-.45h-8.724a.455.455 0 0 0-.454.45v3.873c0 .246.204.45.454.45h8.724a.455.455 0 0 0 .454-.45zm-6.431 11.74a.456.456 0 0 1-.46-.45v-.9c0-.245.205-.45.46-.45h5.971c.248 0 .454.203.454.45v.9c0 .245-.204.45-.454.45h-5.971zm-8.336 0a.455.455 0 0 1-.454-.45v-.896c0-.25.204-.45.454-.45h5.977c.248 0 .454.203.454.45v.896c0 .245-.205.45-.454.45h-5.977zm-8.33 0a.455.455 0 0 1-.454-.45v-.896c0-.25.204-.45.453-.45h5.978c.247 0 .453.203.453.45v.896c0 .245-.204.45-.453.45h-5.978zm-8.33 0a.455.455 0 0 1-.455-.45v-.896c0-.25.205-.45.454-.45h5.977c.248 0 .454.203.454.45v.896c0 .245-.204.45-.454.45h-5.977z"></path>
                                    </svg></span>Merchants</a></div>
                    </div>

                    <div class="five wide computer eleven wide tablet eleven wide mobile column z-t-b-p-m zero-t-b-p"><a class="item logo-item w-100 p-l-0 desktop-remove" href="/">
                    <img class="logo mobile-logo" alt="roqqu logo" src="~/assets/img/roqqu.png"></a>
                        <div class="ui menu transparent hidden-m" style="margin-top: 0px;">
                            <div class="ui right dropdown item" style="padding: 0px; opacity: 1;">
                                <img class="user-icon item logo-item p-r-0 p-l-0 ml-auto hidden-m" src="~/assets/img/user.png" style="border-radius: 50%;">
                                    <NavDesktop />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="wallet-navbar hidden-m">
                    <div class="ui grid container">
                        <div class="thirteen wide column" style="padding-top: 0px; padding-bottom: 0px;">
                            <div class="ui secondary pointing menu" style="justify-content: space-between">
                                <nuxt-link class="item " to="Overview"><i class="th icon"></i>Overview</nuxt-link>
                                <nuxt-link class="item " to="Address"><i class="qrcode icon"></i>Addresses</nuxt-link>
                                <nuxt-link class="item " to="Transactions"><i class="tasks icon"></i>Transactions</nuxt-link>
                            <!-----    <nuxt-link class="item " to="Savings"><i class="percent icon"></i>Savings</nuxt-link>
                                <nuxt-link class="item " to="nfts"><i class="file audio icon"></i>NFTS</nuxt-link>
                                <nuxt-link class="item " to="payment"><i class="chain icon"></i>Payment Links</nuxt-link> --->
                                <nuxt-link class="item " to="settings"><i class="cog icon"></i>Settings</nuxt-link>
                                <nuxt-link class="item " to="security"><i class="shield alternate icon"></i>Security</nuxt-link>
                </div>
                        </div>
                        <div class="three wide column hidden-m">
                           <p style="text-align: center; color: rgb(52, 152, 219); background-color: rgba(52, 152, 219, 0.1); padding: 5px; font-size: 0.8em; border-radius: 5px;">
                    <nuxt-link to="deposit"> <i class="text-blue icon help circle"></i> Deposit peer?</nuxt-link>
                    </p>
                        </div>
                    </div>
                </div>
               
                    <div class="twelve wide column p-l-0">
    <div class="ui grid container">
        <div class="w-100 p-0" style="">
            <div class="ui card w-100">
                <div>
                    <div class="ui four column doubling stackable grid container" style="margin-top: 10px;">
                        <div class="sixteen wide column">
                            <div class="ui deposit-card">
                                <div>
                                    <div class="center aligned ui form">
                                        <div class="ui form">
                                            <div class="text-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAC/klEQVR42u2cy29MYRiHj0tr5d9wafkLWNr4A0TnDBIb9iOElYRUCCMVTdG1WJBewkYUibgEscKwaM+YKelcOtPOtF2S1/dOutBqJ3O+72sZnif5JZPO5WTe5/S7tXmDAAAAAAAAAAAAAAAAAACUZLQ7CLPXgkT00WTBRMiSLCzWpi84OLHLX+H3j28JeqIB88E/KHLL+R6EUX9wINPpXvxE9JSCWueJm4QwukERHdMzcd1+zGfY8TMcJca7Le7+xoRLAX0kjK7GF5CIMhTPWz7YCJincN4yZyOAwvkMAhCAAAQgAAEIQAACEPAfCug6kZcLw0V58bkqk+V6I/q4d6QoO81zCFgjAZ1HsnL5fknKs3Wp1FZOaaYul0ZL0nk4iwCfArT4o28rqxZ+eUbeVKwltHoN3/mrBVwxd37cL3TR/CYgwIMAHfObDTvNhqMdqTwCXAXohGv7pc4PFRHgKuClWeHYfqnnn6pMwq4XzJdq1gJy5r0IcLxgzkHAlyICGILaXYDucG0FnLOYhBGwLHq8oEtKm2Xo9lQeAT4uqscLcQXo8pWNmK+jCHOsMPy69aOIIfPajkMcRfg9jDMS9Hih2XCkz+mdb1t8BLQQPV7QHa6ucHSPoNHHOuH6GPMRQBCAAIIABPySrUezsq/3q5y5U5B7ryryLDMj73Oz8m261og+1p/dNc+dNq/R1+p7EOAoYO/ZSRkcK8vUdPwDOX3PrUdl2WM+AwExsy2Va9zNvpZ4+vfk7pO5dVmGtrWADWEkxwenpFCteV9n6ybt1O2CbAwRsGI2m93rTTNkrPWGZ+BhWTYlEfBb0g9K67br1P+yQMAfPgJgEkYAAhCAAI4iEEAQgACCAASQNRMwR+G8pU67mjZsV9NH4bwlHV+Atl5stNuigM4ty5LjXbZN+/opoGu7MtP6zRptuRhGjymkdcaCY+863HqHqgRtvchwFLNxq7nznYu/ZFI2rRe1+5/O6PSTWynzi7VJ24/5AAAAAAAAAAAAAAAAAP8aPwEOL6ggeD1dCAAAAABJRU5ErkJggg==" style="padding: 15px;">
                                                <h2 class="font-bold" style="font-weight: 400; margin-top: 10px; margin-bottom: 20px;">Verification Required</h2>
                                            </div>
                                            <hr style="border-width: 0.5px; border-style: dashed; border-color: rgb(238, 238, 238); margin-bottom: 20px;">
                                            <p>Verification needed, your account verification is incomplete.</p><button class="ui button green w-100" style="padding-right: 20px; padding-left: 20px; margin-top: 10px; margin-bottom: 10px;">Increase Account Limit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
                <div class="menu-bar desktop-remove">
                    <div class="ui grid container">
                        <div class="sixteen wide column" style="padding-top: 0px; padding-bottom: 0px;">
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

                           <!-----     <nuxt-link class="item " to="Savings">
                                    <div class="text-center w-100"><i class="dollar sign icon"></i>
                                        <p style="margin-bottom: 0px;">Savings</p>
                                    </div>
                                </nuxt-link>

                                <nuxt-link class="item " to="nfts">
                                    <div class="text-center w-100"><i class="file audio icon"></i>
                                        <p style="margin-bottom: 0px;">NFTs</p>
                                    </div>
                                </nuxt-link> -->
                                
                                <nuxt-link class="item " to="Transactions">
                                    <div class="text-center w-100"><i class="tasks icon"></i>
                                        <p>Transactions</p>
                                    </div>
                                </nuxt-link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a id="gotosettings" href="/wallet/settings/profile"></a>
    </div>
</template>

<script>
import NavMobile from "@/components/NavBar/NavMobile";
import NavDesktop from "@/components/NavBar/NavDesktop";


export default{
    components: {
        NavMobile,
        NavDesktop,
    },
    data() {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
        console.log('clicked')
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
}
</script>




