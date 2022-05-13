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
            <div class="ui three column doubling stackable grid container">
                <div class="sixteen wide column">
                    <div class="ui card w-100">
                        <div class="content">
                            <h2 class="f-20" style="font-weight: 400;">Security Settings</h2>
                        </div>
                        <div class="ui large vertical menu w-100" style="display: none; border: none; box-shadow: none; margin-bottom: 0px;"><a class="item" style="padding: 0px;"></a></div>
                        <div class="content" style="padding-top: 8px;">
                            <div class="ui grid">
                                <div class="eight wide computer sixteen wide mobile column" style="border-right: 1px solid rgb(238, 238, 238);">
                                    <p style="margin-top: 5px; margin-bottom: 0px;"><i class="icon key"></i>&nbsp;&nbsp;Change account password</p><small class="text-muted" style="display: block; padding-left: 30px;">Want to use a different password or lock someone else out of your account?</small><button class="ui button" style="margin-left: 30px; padding: 7px; font-size: 11px; margin-top: 5px;">Change password</button>
                                </div>
                                <div class="eight wide computer sixteen wide mobile column">
                                    <p style="margin-top: 5px; margin-bottom: 0px;"><i class="icon lock"></i>&nbsp;&nbsp;2 factor authentication</p><small class="text-muted" style="display: block; padding-left: 30px;">2FA is automatically activated on your account for security reasons</small><a href="knowledge_center" target="_blank" style="display: block; padding-left: 30px; font-size: 13px;">How can I deactivate this?</a>
                                </div>
                            </div>
                            <hr style="border-width: 0.5px;">
                            <div class="content">
                                <h2 class="f-20" style="font-weight: 400;">Connected Devices</h2>
                            </div>
                            <div class="ui large vertical menu w-100" style="display: none; border: none; box-shadow: none; margin-bottom: 0px;"><a class="item" style="padding: 0px;"></a></div>
                            <p class="text-muted">These are all the devices you have authorized to have access to your account, you can remove anyone at any time to prevent device from accessing your account without your authorization.</p>
                            <div class="transactions" style="padding-top: 20px;">
                                <table class="ui selectable unstackable basic table">
                                    <thead class="">
                                        <tr class="hidden-m">
                                            <th class="">Browser</th>
                                            <th class="">Operating System</th>
                                            <th class="">Device</th>
                                            <th class="">Authorized</th>
                                            <th class=""></th>
                                        </tr>
                                        <tr class="desktop-remove">
                                            <th class="">Authorized Devices</th>
                                            <th class=""></th>
                                        </tr>
                                    </thead>
                                    <tbody class="">
                                        <tr class="device-row">
                                            <td class="desktop-remove"><span style="font-size: 13px;">Chrome Mobile&nbsp;v100&nbsp;on Android&nbsp;0&nbsp;- (Generic Smartphone)</span><br><small class="text-muted">authorized May 10th 2022, 9:49:56 am</small></td>
                                            <td class="desktop-remove"><span class="remove-icon text-red" style="font-size: 13px;"><i class="icon delete"></i></span></td>
                                            <td class="hidden-m"><span style="font-size: 13px;">Chrome Mobile&nbsp;v100</span></td>
                                            <td class="hidden-m"><span style="font-size: 13px;">Android&nbsp;0</span></td>
                                            <td class="hidden-m"><span style="font-size: 13px;">Generic Smartphone</span></td>
                                            <td class="hidden-m"><span style="font-size: 13px;">May 10th 2022, 9:49:56 am</span></td>
                                            <td class="hidden-m"><span class="remove-icon text-red" style="font-size: 13px; opacity: 0;"><i class="icon delete"></i></span></td>
                                        </tr>
                                        <tr class="device-row">
                                            <td class="desktop-remove"><span style="font-size: 13px;">Chrome&nbsp;v101&nbsp;on Windows&nbsp;10&nbsp;- (Other)</span><br><small class="text-muted">authorized May 10th 2022, 4:57:14 am</small></td>
                                            <td class="desktop-remove"><span class="remove-icon text-red" style="font-size: 13px;"><i class="icon delete"></i></span></td>
                                            <td class="hidden-m"><span style="font-size: 13px;">Chrome&nbsp;v101</span></td>
                                            <td class="hidden-m"><span style="font-size: 13px;">Windows&nbsp;10</span></td>
                                            <td class="hidden-m"><span style="font-size: 13px;">Other</span></td>
                                            <td class="hidden-m"><span style="font-size: 13px;">May 10th 2022, 4:57:14 am</span></td>
                                            <td class="hidden-m"><span class="remove-icon text-red" style="font-size: 13px; opacity: 0;"><i class="icon delete"></i></span></td>
                                        </tr>
                                        <tr class="device-row">
                                            <td class="desktop-remove"><span style="font-size: 13px;">Chrome Mobile&nbsp;v100&nbsp;on Android&nbsp;0&nbsp;- (Generic Smartphone)</span><br><small class="text-muted">authorized May 9th 2022, 3:48:44 am</small></td>
                                            <td class="desktop-remove"><span class="remove-icon text-red" style="font-size: 13px;"><i class="icon delete"></i></span></td>
                                            <td class="hidden-m"><span style="font-size: 13px;">Chrome Mobile&nbsp;v100</span></td>
                                            <td class="hidden-m"><span style="font-size: 13px;">Android&nbsp;0</span></td>
                                            <td class="hidden-m"><span style="font-size: 13px;">Generic Smartphone</span></td>
                                            <td class="hidden-m"><span style="font-size: 13px;">May 9th 2022, 3:48:44 am</span></td>
                                            <td class="hidden-m"><span class="remove-icon text-red" style="font-size: 13px; opacity: 0;"><i class="icon delete"></i></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="ui card w-100">
                        <div class="content">
                            <h2 class="f-20" style="font-weight: 400;">API Keys<small class="right floated" style="padding-top: 3px; font-size: 13px;"><a href="https://developers.roqqu.com" target="_blank">Documentation</a></small></h2>
                        </div>
                        <div class="ui large vertical menu w-100" style="display: none; border: none; box-shadow: none; margin-bottom: 0px;"><a class="item" style="padding: 0px;"></a></div>
                        <div class="content text-center" style="padding: 50px;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAYISURBVHhe7ZxNbBRlGMefdltFYyRq/Igx8aNePNSTITHGKIke9CZ6ISHhZqNH0dSDkggSDS0QqpdC6W4hIJDAyaDiwcSDHiBKUAtGPqKAbY2VVgK1tcz4f7bPynT2md352u1m5vkl/2zSfeeZd/7/fd93Zna2ZBiGYRiGYRiGYRiGYRhGME6JuqAXoB6ot6wirXNGaK0zTE87O+lOaWo0AucA3QLDX4YOwPxxt0RuLaGdA/0IbUH7FVLGSIqzm+6BqZtg6qRmfFhh+xPQGvcr6pDSRhTYOEw/b8DMKb+5SVQOZoSekd0YYXCL9BCM+1YzNA3JdNbnDlKn7NIIgj+9MOsvzci0hdC/tsW/Bjg7ehFhXNPMa5QQyk/OEN0vXTAqlEdGia5qpjVa2O9JTF/LpSuGrBmXNbMqwsiZhy6g3Xm8zmptkgg1j7gutUmX8gsvrDA5cAHHe2PQa965Htvcir+thomj2jZxhZpvyi7yC0xdp5nDwnvHEMS90rQKCeaQtm0codYMrnselvL5g82G6dMB5ow5u+huaRqIs51uRo3vtBpxhFqHpXT+wMFv1ExhYZF/XZrVBeGt1GrEEfrk4GyvW0rnByzky2CkupDDlPko1we8GKPWJa1WHKFWUUrnBxz0K5oZLLz3mzQLDbY5qtWKI9T6m9cnKZ0PMAr2a2awYMhZaRYa1Dui1Yor9OElKZ0PYOCEZgQL7826B+k2aRoKbPOzViuuEMiAlM4+ONguzQSv0Ga1NK8L2j6u1UgiBHxMymcfvmelmeAVDBkNM4+XF/Qifa7VSCLUnJZdZB98ons0E/yCKYf5bEw2q0LC6NO2TUO5uROMQHo1AwJ0HO1X+u8z8TQFfaa0T03OED0ou8s2+NS/rRlQSxgJF3lqQgifQme1NmkLF6ePSZezDQ6Uv5pVTWglOXvoAelytkEgazUDWk38pIt0Odvwc1OaAa0kniKlu9kHI+QuHLCjGdEqwjp1VLqbDxDID5oRraJ/h2ivdDUfIJCtmhGtonMbO66P9bX3SnezD6aEFZoRraB/drS5o+90uqff7XTzFsoJzZCl1kR/oRxI7kJBIGs0Q5ZS88Pknl6/EEZF4/2FOZwZPi/dzi7l53dL9L1mzFLpj603RgfrFEbI3FAbn3VdzUUofE3SKqfAvHZwAN5ALn5Y+P/9/IRSos1eY5ZERXLPvNexKIzK6PC241DcEXpOup5N3IN0E0bJN94Db7YuYCR4w6ho+qP2qrb5CGWQluNAT/oPvhn6c1u7GkZZGCX5DaVI9+FAm7rIT3IYvnWjSnkOxdlDt2P6SvUJElVYM8b6lGkK5v/6weK1pPL3/I6Uha9m34Ia8lsRPps6/75iOsTTF7cZ36KHldtQGGc3PYqDPZTWaTFf9PF1hv/UtmJ2JYyKLJQAcO7fjSmmhGCu+I0IIx4REzDXfwVeEQc0pZjMslBqUP6t+jCtwoFvhwHHEZD+5PzC9+9fzA3RPr5rW2WoR2c2dLgzg4uvNfyyUCLAp8vuLnoERnTxd+D+r135xiDfIPQbyqNivL/gXsfi7jdVk4WSIotCwSvfDpndWXtUaLJQUoRDwWnu3FyMILyyUFKEbwyWTfIZF1UWSopYKC2IhdKCwCD+Tv/VWuLTZ7xWmeuVhdJEYGCou88WSpMIGwjLQmkCUQJhWSgNJmogLAulgcQJhGWhNIi4gbAslAaQJBCWhZIyMGkHrkW+rKFf/Mb6ZaE0kbC/lbRQmkTYQFgWShOIEggraijOCD0puzLCEDUQVqRQirRPdmWEIU4grLChIJArufklcBrEDYQVOpRhWiW7M+qRJBBWYCgf3wgFa8knsjujHkkDYdULxaatCCCQZe5euiNIMPMpfwCa6oZi01Y6wMhuv/lBqhUKgt0vJY0kRAmEFRTK1ED7jE1bKRA1EJYWyqn1ne7lbYVnpawRlziBsLyh8COvv28ubJKSRhLiBsLiUDiMS32FDVLOSEqSQLCQX5scaO+RUkYaxA3E7vY2CP6vpjBYfQivlpwRekJKGIZhGIZhGIZhGIZhGIZhGDmF6D8a8fWiEsqzOwAAAABJRU5ErkJggg==">
                            <p class="text-muted">API keys help you use roqqu's infrastructure from within your own application.</p><button class="ui button blue w-100-m" style="padding-right: 20px; padding-left: 20px; margin-top: 10px; margin-bottom: 10px;"><i class="icon add"></i>&nbsp; Add API key</button>
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