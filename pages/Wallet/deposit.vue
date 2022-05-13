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
            <div class="five wide computer eleven wide tablet eleven wide mobile column z-t-b-p-m zero-t-b-p"><a class="item logo-item w-100 p-l-0 desktop-remove" href="/"><img class="logo mobile-logo" alt="roqqu logo" src="~/assets/img/roqqu.png"></a>
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
                    <Router />
                </div>
                <div class="three wide column hidden-m">
                    <p style="text-align: center; color: rgb(52, 152, 219); background-color: rgba(52, 152, 219, 0.1); padding: 5px; font-size: 0.8em; border-radius: 5px;">
                    <nuxt-link to="deposit"> <i class="text-blue icon help circle"></i> Deposit peer?</nuxt-link>
                    </p>
                </div>
            </div>
        </div>
        <div class="wallet-wrapper">
            <div class="text-center" style="padding: 20px;">
                <h2 style="margin-bottom: 0px; font-weight: 400;">Oops !!!</h2>
                <h3 class="font-light" style="margin-top: 0px;">Your account is not enabled to receive and confirm peer deposits</h3>
            </div>
            <div class="ui four column doubling stackable grid container" style="margin-top: 30px;">
                <div class="sixteen wide column">
                    <div class="ui card deposit-card">
                        <div class="content">
                            <div class="center aligned ui form">
                                <div class="ui form"><img src="data:image/png;base64,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" style="padding-bottom: 20px;"><br><span class="text-center" style="font-size: 14px; display: block;">Want to be part of the network? Click <a href="https://forms.gle/e9sFNuSGoNPqy9HZ6" target="_blank">https://forms.gle/e9sFNuSGoNPqy9HZ6</a></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="menu-bar desktop-remove">
            <div class="ui grid container">
                <div class="sixteen wide column" style="padding-top: 0px; padding-bottom: 0px;">
                    <Router2 />
                </div>
            </div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
import Router from "@/components/Router";
import Router2 from "@/components/Router2";
import NavMobile from "@/components/NavBar/NavMobile";
import NavDesktop from "@/components/NavBar/NavDesktop";

export default {
components: {
   Router,
   Router2,
   NavDesktop,
   NavMobile
  }
}

</script>

<style>

</style>