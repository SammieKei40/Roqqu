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
                <div class="ui stackable menu transparent nav-links"><a href="#" target="_blank" class="item"><span><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 15" data-radium="true" style="display: inline-flex; fill: white; width: 1em; height: 1em;">
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
    <div class="text-center card-header p-20">
        <h2 class="font-bold" style="font-weight: 400;">Choose an option to continue</h2>
    </div>
    <div class="ui four column doubling stackable grid container" style="margin-top: 30px;">
        <div class="ui column"><nuxt-link to="Transfer" style="color: rgb(28, 18, 77);">
                <div class="ui card w-100 choose-token">
                    <div class="content ui grid">
                        <div class="sixteen wide computer three wide mobile column p-0">
                            <div class="text-center-d m-20-d"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAFFUlEQVR4nO3cX2xTVRwH8O/vtoMJqEggmhA18YEXEwk4lT9jvYWQsbVzvR0lQKKBB5f45Jsj0QcejAGfTQyQiOFBDLO9W9ZbJ5H1dpsEdYFg4gsPJmpIiBJFZTCluz8fUGcMo+3tObdb7+/z2LTnd3K+uee2p+ceQAghhBBCCCEC0tVVWBpLF441uh+NZjSi6PbMyNpbreyCub8R9ReSwAOI9ea3zZaNKQCbgq69EAUaQCyV74dB5wA8FmTdhSwaRBHzQLGVf7v1HhgHgqi3mGgPoD0z8gTfuJUFoU13rcVI6xRkWs6uSNm4JIM/P00BMHVY+QEG8gBW6anRHJRPQVtfHH4wEi2cJKY+1W03I6UBtFvOugg4B8bTKtttZsqmINNykhHgS4Bk8GugIIB/5/thAA/X3164UD0f3pwZXdVyx/uQiDtVdajZlOzEfcfY9z0gbo2s98qzORCe8tuG8DkFxVLOPo+MzwEZ/HrVdAWYZjGKR26/xeABsK4uhUvVAZg9I6u96PRHBNqhs0NhU1UA29IjG5mNHAFP6u5Q2FS8B3RYhZcNNiYhg69FQ/4RE3MqBjBud5/yyGsH8F0A/Qmdqq6AiVzPRSp7bQw+p7tDYVP1FOSO9Fw3flm+i0BHdXYobGq6B7huvOza3YfA2A/CtK5OhYmvm3BpKHHaI2MLgG8V9yd0fH8Lmsh2fT0zQxv+XgUVPtW1GnoXU4flvE6gt+Ej0Eqrhc1Owe8A4nE7eZSAXgA36m8vXJT9EHPtRH4WeAHgb1S1GQZKfwlP2okrFF2+CeCPVbbbzJQvRbiD8ZslO7GHwYcAzKpuv9loWgu6e18A8U4AP+qp0Ry0LsaVcskie9E2MKZ01lnMtK+Gjg93/kArl20DcFJ3rcUo0O/gsVS+H0TvAmj55zX5HRCg0lDyOMHYDuBakHUXssD/kHHtrslI1GsDcCHo2gtRQ/4RGxvsubpshkyATzSivhBCCCEWgFjKObU5c+aBRtWXfUGEl5aUV0xuTzsN2XgmAQAAeOMsYyqe+iTwfa8SwJzVHnmjHVZ+IMiioV6HAYCY5dxro/3ppdPRV86e7dS+9UaugHvb98fy8vn2vrz2B1AkgPk9E/HoUtxyenUWkQDu7yEPsE2rcASHD2sZKwmgMmLwQOzyc8Nmyl6punEJoHpJpiVfxPtGlT6ILgHUZp3nlS+Y6cJuVQ1KADWjFcx8xrQKRzKZM5G6W6v0hnm+J4u7incQ3Xve7vS99UaugPrEW1CeMvsc3wdSSQD1e5w9TMQs56CfD0sAarQCeD+WLhx7tn+qpeK7/0MCUIm5f8VP18bMjFP1sZwSgHLUzmVMmelCVQfTSgB6rGVmtyPlvFbpjRKARgS+Xek9gZycG0JXiWi3aycq7v6TK0C9CYqizc11V7X1UgJQiej4zTWP7nAHE1VvPpYpSI0ZYrzq2t0f1PpBCaBejO8pgj43m/D1FJBMQfUZ/bMlssHv4AOyK8Lvai8T6J010ZtvDA7uqetJUJmCave7wThYHOrOqmhMAqjNFcOIpIvZXcpOA5B7QPXyLdElz6scfEACqAYT6Ghp/Ve9nw3u/FV14zIF3d/PhsH7i9nEp7D1FJAA5nd51uB0KZvUeiqYTEH3dnrpdHTrpObBB+QK+L8yg98ct5OBnQwpAcy5brCxtzjUFejZqBIAAIAuRojTY3ZX4KcDyz0AfGLZDLaM5RJyNLMQQgghhBAiEH8BQ05t/tGt5ecAAAAASUVORK5CYII=" style="max-width: 100%; width: 40px;"></div>
                        </div>
                        <div class="sixteen wide computer eleven wide mobile column p-0">
                            <div class="text-center-d header p-t-10-m p-b-20-d">Fiat Transfer</div>
                        </div>
                        <div class="two wide mobile column p-0 desktop-remove"><i class="icon chevron right p-t-10-m"></i></div>
                    </div>
                </div>
            </nuxt-link></div>
        <div class="ui column"><nuxt-link to="withdrawWallet" style="color: rgb(28, 18, 77);">
                <div class="ui card w-100 choose-token">
                    <div class="content ui grid">
                        <div class="sixteen wide computer three wide mobile column p-0">
                            <div class="text-center-d m-20-d"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADyUlEQVRoge2Xz2sTQRTHv5Okto0XbbNtkVZKD6Ig3vwXPCl48Q+wh4IXr9a7xavgSdR/w/4NehERERF6sYhCq4JgGpPM18Nmd+fHm9nd2OplHySZ3cx+3+fNvPcyARprrLHG/qepf+3w841z3R/j2aTdwrKiSgjVU0BCYAUaPSj0AJVA8UCT25de7L2N6XVOCkhrLCsgyYHAZQLJzzG6bQDQACca2WexnAQJKKg1AFdqB/D65vqZbl9dGEMlSqkelO4BrRVCJ1CqByABsQwg+T5CFwBGo8K5NaJ9z5/l3zS+uxyDFwN4c23jDvp8fAS005VgqkgtA4Y5imvGv0/v0Z/D8hT3AuhrvQOg7QiVOBdgIs9ENfxdiJoXwLhz6uxgMDCEhJWJwbB8TrVnqoXgBbCxvo53H/dw9HtQ6jycGo57B1AcCytfJQQvx4b3b7GAM/PApbVdMUjskhnBlWjaj3JfgVtzj3Z3zUe8HciLNghfATYfTg0raa5S4wmA89EAoLVxQScW04sPWwxrwpZoZhoE1lxceQc8YdmR2Odd+AmwDxuHZ1QzEkA6uSKs1z5OAjaQouEAdCBvZdh0NCVsRDNfhgi8GECeQnWLTHDEirWQXXuwwetIAKAuh82HXpEdH6yjITYHKYCijbriVfO2AqyoGYN1NSMBQBtFXAorOLJuhRfAbg7lmpUDILV54X5bXmR1YSP1xJBmLACYvwNTFZkBW6HLuLAk0B+NAQDznRZUBD4SwHEUWRg+1HZJ4NfFq1jY3AYIHD5/iNMfXtkajrV8fj0pZE46kjlOr0mCOp2XvnR6BDHnak7m6vSljbmCJkj0hyMs3L6HmYUlzCwuYXFzG/3h2NZ0TN6BukVmpXx5LWQa1v5R8IMsSM9Nbv4OaJ3vAkl/ZY0VM+dlKw1ysvrGc45mtnvubs21FQ6f7WB4+BXDgy84ePoAs21VsJgNZmLxIrY+pllZd1XDuZ+N59+/xLe71wEQ3U4r/cNS9zBX52xjhIYqXaes7SoS820AUAWL1EBCAeS/A1L7kvL2L2CdSQ6srFkaQC5YE7a4JbfZqWBpzRZjCJyFwl1Gytvitgzvd7I4vB1HZEGkAMzT6InBGhqVYQOF7O+AcJiLCbNCl5kWNn8PN6HADgQc1cnbOm3X9RKrhQoBZILTFlkEdqJRC5bW3pUHwOxPfV3Y9OHjh438iIkBgHofxKoFKwELeSvDBuBziXiXcZx8cu94ZyENbJHct06l2j4DZeej/Azknm1CJ1jnPGTPrQCvsVUyqbHGGmussXr2BybIJNL+Zm4gAAAAAElFTkSuQmCC" style="max-width: 100%; width: 40px;"></div>
                        </div>
                        <div class="sixteen wide computer eleven wide mobile column p-0">
                            <div class="text-center-d header p-t-10-m p-b-20-d">Withdraw to Wallet<small class="text-green" style="font-size: 9px;">&nbsp;&nbsp;(FASTEST)</small></div>
                        </div>
                        <div class="two wide mobile column p-0 desktop-remove"><i class="icon chevron right p-t-10-m"></i></div>
                    </div>
                </div>
            </nuxt-link></div>
        <div class="ui column"><nuxt-link to="withdrawBank" style="color: rgb(28, 18, 77);">
                <div class="ui card w-100 choose-token">
                    <div class="content ui grid">
                        <div class="sixteen wide computer three wide mobile column p-0">
                            <div class="text-center-d m-20-d"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACgklEQVRoge2ZTUhUURiGn2/GaRyxpKRa1KJWEsI1a4KKNq3dh7YJijaK4W9KUA0WokZda1OtqkVQuIzctumHysxRhFYVREFBlGNpajNfKye73hnnzo9zpfvs7vm+c877cnkP53LBw11IoRbe8ShSWlEeO6aibQCicmXqx4Y77w9HfhViv7wbqXp8en2wdOE40Alss5S/oHJdg+uuThh93/K5b96MGNGOLcwnGhE9BWxcoX0auCUlDER3mx/zsX/ORoznHTvxx1uAk0DI4fR5hPuqvt6J8OU3uejI2kj1aFuNX7UdpQEoyUUEkACGRbkQ3We+yGYBx0ZqRtoPKYkuoC6b+RnwBKF/fK/5wMmkzIRoxGeMTtWhnAH2Z6MuC8ZQMavefbg7dGQovlJzWiPVk5F1/plYPaLdwK68SXTGW+BabLriZrqj29ZI9WRjuX82eALoALYXSKBTPqNyw1eSGByrHfxuLf5jpHa0eXM8HmhCtBnYtGoSHaAQE7jt9wX6X+8Z+LQ4njRivGo5j0oXzo/QYjEr0BcNmz0AvuSwylnWjgmAkMK5xQffkoK/CGJyZS1q/k+wPX6Nl60DCJ2rLSYTBPqjYbPbOu6za46XzfUAwwVX5RCFh79DcxftaiteUYyRVrWOjYfNZfMy6cvnWlZs38haxDPiNjwjbsMz4jY8I27DM+I2PCNuwzPi4ZEe26+uA09bQzMBuaSi9UDlKmtKxVdRuVe2oJ3PDpqz1qLtf42fAe1FaCq8NkdUqmjTTJB5oM1atA+7SEOhVWWLKkeLrcEjE5Jhd2nAU7Es+MmwuzTgqVgW/L9hd3HAU7E0+EtPra1F0JIrSc3eXcvDIz1/ANpLwPqixxnMAAAAAElFTkSuQmCC" style="max-width: 100%; width: 40px;"></div>
                        </div>
                        <div class="sixteen wide computer eleven wide mobile column p-0">
                            <div class="text-center-d header p-t-10-m p-b-20-d">Withdraw to Bank Account</div>
                        </div>
                        <div class="two wide mobile column p-0 desktop-remove"><i class="icon chevron right p-t-10-m"></i></div>
                    </div>
                </div>
            </nuxt-link></div>
        
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