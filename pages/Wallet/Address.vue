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
        <div class="ui three column doubling stackable grid container" style="">
            <div class="sixteen wide column">
                <div class="ui card w-100">
                    <div class="content">
                        <h2 class="font-bold" style="font-size: 20px; font-weight: 400;">Wallet Addresses<button class="ui button bg-light right floated hide">Back</button></h2>
                    </div>
                    <div class="ui large vertical menu w-100" style="display: none; border: none; box-shadow: none; margin-bottom: 0px;"><a class="item" style="padding: 0px;"></a></div>
                    <div class="content">
                        <div class="">
                            <p class="text-muted">Wallets allow you to organize your funds into categories, like spending or savings.</p>
                            <div class="ui grid">
                                <div class="eight wide computer sixteen wide mobile column pt-0-m">
                                    <div class="card address-cards">
                                        <div class="ui grid">
                                            <div class="thirteen wide column">
                                                <p class="font-bold" style="color: rgb(255, 173, 2);">Bitcoin Wallet</p><small class="text-muted">Balance</small><br>
                                                <p><span>0.0000 BTC</span></p><small class="text-muted">Total Received</small><br>
                                                <p><span>0 BTC</span></p>
                                            </div>
                                            <div class="three wide column"><img class="w-100" src="~/static/media/btc.d9c1768c.png"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="eight wide computer sixteen wide mobile column p-l-0 pt-0-m">
                                    <div class="card address-cards">
                                        <div class="ui grid">
                                            <div class="thirteen wide column">
                                                <p class="font-bold">Ethereum Wallet</p><small class="text-muted">Balance</small><br>
                                                <p><span>0.0000 ETH</span></p><small class="text-muted">Total Received</small><br>
                                                <p><span>0 ETH</span></p>
                                            </div>
                                            <div class="three wide column"><img class="w-100" src="~/static/media/eth.73579dcc.png"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="eight wide computer sixteen wide mobile column pt-0-m" style="padding-top: 0px;">
                                    <div class="card address-cards">
                                        <div class="ui grid">
                                            <div class="thirteen wide column">
                                                <p class="font-bold" style="color: rgb(83, 174, 148);">Tether Wallet</p><small class="text-muted">Balance</small><br>
                                                <p><span>0.0000 USDT</span></p><small class="text-muted">Total Received</small><br>
                                                <p><span>0 USDT</span></p>
                                            </div>
                                            <div class="three wide column"><img class="w-100" src="~/static/media/usdt.bb4ee7f0.png"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="eight wide computer sixteen wide mobile column p-l-0 pt-0-m" style="padding-top: 0px;">
                                    <div class="card address-cards">
                                        <div class="ui grid">
                                            <div class="thirteen wide column">
                                                <p class="font-bold" style="color: rgb(52, 93, 157);">Litecoin Wallet</p><small class="text-muted">Balance</small><br>
                                                <p><span>0.0000 LTC</span></p><small class="text-muted">Total Received</small><br>
                                                <p><span>0 LTC</span></p>
                                            </div>
                                            <div class="three wide column"><img class="w-100" src="data:image/png;base64,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"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="eight wide computer sixteen wide mobile column pt-0-m" style="padding-top: 0px;">
                                    <div class="card address-cards">
                                        <div class="ui grid">
                                            <div class="thirteen wide column">
                                                <p class="font-bold">XRP Wallet</p><small class="text-muted">Balance</small><br>
                                                <p><span>0.0000 XRP</span></p><small class="text-muted">Total Received</small><br>
                                                <p><span>0 XRP</span></p>
                                            </div>
                                            <div class="three wide column"><img class="w-100" src="~/static/media/xrp.6684b41b.png"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="eight wide computer sixteen wide mobile column p-l-0 pt-0-m" style="padding-top: 0px;">
                                    <div class="card address-cards">
                                        <div class="ui grid">
                                            <div class="thirteen wide column">
                                                <p class="font-bold" style="color: rgb(255, 6, 10);">TRON Wallet</p><small class="text-muted">Balance</small><br>
                                                <p><span>0.0000 TRX</span></p><small class="text-muted">Total Received</small><br>
                                                <p><span>0 TRX</span></p>
                                            </div>
                                            <div class="three wide column"><img class="w-100" src="~/static/media/trx.457af50e.png"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="eight wide computer sixteen wide mobile column pt-0-m" style="padding-top: 0px;">
                                    <div class="card address-cards">
                                        <div class="ui grid">
                                            <div class="thirteen wide column">
                                                <p class="font-bold" style="color: rgb(0, 141, 228);">DASH Wallet</p><small class="text-muted">Balance</small><br>
                                                <p><span>0.0000 DASH</span></p><small class="text-muted">Total Received</small><br>
                                                <p><span>0 DASH</span></p>
                                            </div>
                                            <div class="three wide column"><img class="w-100" src="data:image/png;base64,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"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="eight wide computer sixteen wide mobile column p-l-0 pt-0-m" style="padding-top: 0px;">
                                    <div class="card address-cards">
                                        <div class="ui grid">
                                            <div class="thirteen wide column">
                                                <p class="font-bold" style="color: black;">EOS Wallet</p><small class="text-muted">Balance</small><br>
                                                <p><span>0.0000 EOS</span></p><small class="text-muted">Total Received</small><br>
                                                <p><span>0 EOS</span></p>
                                            </div>
                                            <div class="three wide column"><img class="w-100" src="~/static/media/eos.5929c6f7.png"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="eight wide computer sixteen wide mobile column pt-0-m" style="padding-top: 0px;">
                                    <div class="card address-cards">
                                        <div class="ui grid">
                                            <div class="thirteen wide column">
                                                <p class="font-bold" style="color: rgb(243, 186, 47);">BNB Wallet</p><small class="text-muted">Balance</small><br>
                                                <p><span>0.0000 BNB</span></p><small class="text-muted">Total Received</small><br>
                                                <p><span>0 BNB</span></p>
                                            </div>
                                            <div class="three wide column"><img class="w-100" src="~/static/media/bnb.ca6e0b5b.png"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="eight wide computer sixteen wide mobile column p-l-0 pt-0-m" style="padding-top: 0px;">
                                    <div class="card address-cards">
                                        <div class="ui grid">
                                            <div class="thirteen wide column">
                                                <p class="font-bold" style="color: rgb(241, 42, 19);">HIVE Wallet</p><small class="text-muted">Balance</small><br>
                                                <p><span>0.0000 HIVE</span></p><small class="text-muted">Total Received</small><br>
                                                <p><span>0 HIVE</span></p>
                                            </div>
                                            <div class="three wide column"><img class="w-100" src="~/static/media/hive.8f806023.png"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="eight wide computer sixteen wide mobile column pt-0-m" style="padding-top: 0px;">
                                    <div class="card address-cards">
                                        <div class="ui grid">
                                            <div class="thirteen wide column">
                                                <p class="font-bold" style="color: rgb(0, 89, 221);">STEEM Wallet</p><small class="text-muted">Balance</small><br>
                                                <p><span>0.0000 STEEM</span></p><small class="text-muted">Total Received</small><br>
                                                <p><span>0 STEEM</span></p>
                                            </div>
                                            <div class="three wide column"><img class="w-100" src="~/static/media/steem.543d2664.png"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="eight wide computer sixteen wide mobile column p-l-0 pt-0-m" style="padding-top: 0px;">
                                    <div class="card address-cards">
                                        <div class="ui grid">
                                            <div class="thirteen wide column">
                                                <p class="font-bold" style="color: rgb(194, 166, 51);">DOGE Wallet</p><small class="text-muted">Balance</small><br>
                                                <p><span>0.0000 DOGE</span></p><small class="text-muted">Total Received</small><br>
                                                <p><span>0 DOGE</span></p>
                                            </div>
                                            <div class="three wide column"><img class="w-100" src="~/static/media/doge.9f41f6a8.png"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hide">
                            <div>
                                <div class="ui grid">
                                    <div class="ui sixteen wide column" style="padding-top: 0px; padding-bottom: 0px;"><button class="ui button blue w-100-m" style="padding-right: 20px; padding-left: 20px;"><i class="icon add"></i>&nbsp; Generate new Bitcoin address</button>
                                        <div class="ui secondary pointing menu" style="margin-bottom: 0px;"><a class="item w-50-m active">
                                                <div class="text-center w-100">
                                                    <p>Addresses</p>
                                                </div>
                                            </a><a class="item w-50-m">
                                                <div class="text-center w-100">
                                                    <p>Transactions</p>
                                                </div>
                                            </a></div>
                                        <div style="padding-top: 0px;">
                                            <div class="">
                                                <table class="ui table ui very basic table selectable unstackable">
                                                    <tbody>
                                                        <tr style="border-radius: 5px;">
                                                            <td class="desktop-remove p-0"><small class="text-muted">Total Received:&nbsp;</small><small><span>0 BTC</span>
                                                                    <div class="ui horizontal label orange right floated" style="font-weight: 400;">genesis</div>
                                                                </small><br><small class="text-muted">Created:&nbsp;</small><small><span>2 days ago</span></small><br><span style="font-size: 13px;">3HwAoVVBKQtvuhgFKyKivwXtKU51m5aqKD</span>
                                                                <div><button class="ui small button" title="Copy address to clipboard" style="border: 0px; font-weight: 400; cursor: pointer; color: rgb(52, 152, 219); background-color: rgba(52, 152, 219, 0.1);"><i class="ui copy outline icon"></i>Copy</button></div>
                                                            </td>
                                                            <td class="hidden-m"><small class="text-muted">Address</small><br><span>3HwAoVVBKQtvuhgFKyKivwXtKU51m5aqKD</span></td>
                                                            <td class="hidden-m">
                                                                <div><button class="ui small button" title="Copy address to clipboard" style="border: 0px; font-weight: 400; cursor: pointer; color: rgb(52, 152, 219); background-color: rgba(52, 152, 219, 0.1);"><i class="ui copy outline icon"></i>Copy</button></div>
                                                            </td>
                                                            <td class="hidden-m"><small class="text-muted">Total Received</small><br><small><span>0 BTC</span></small></td>
                                                            <td class="hidden-m"><small class="text-muted">Created</small><br><small>2 days ago</small></td>
                                                            <td class="hidden-m" style="width: 5px;">
                                                                <div class="ui horizontal label orange" style="font-weight: 400;">genesis</div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="hide">
                                                <div>
                                                    <div style="">
                                                        <div class="ui large vertical menu w-100" style="display: none; border: none; box-shadow: none; margin-bottom: 0px;"><a class="item" style="padding: 0px;"></a></div>
                                                        <div class="content" style="padding: 0px;">
                                                            <div class="text-center" style="padding: 100px;"><img alt="no transaction" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHXSURBVHhe7dxJSkRBEATQfw8nEL26IurG4QTqUXSl4nAAzWhNkKI3VVEYPyEeBNgNRUUnLWIu/mJmZmZmZhp7kYvIR+SrSND1MnIckdqNvES2layQ58hOROY8giJXEWmRTuh6E0H3M7yh8hlBCXwTq0FndH/fvBJBAaQqeX8PkOQBklQF8t42vUbPTaMqkPe26TV6bhp5AZIHSPIASR4gSd7/LYICFf8TwRIE3fEZZE4jKHEdqTREDO82gu4neEPlIPIYQREkPUTuf37cWNvr7Ivu+3hDBQN8irQDvPtNWtvrvwPEZ5DJX+HK6yx8BpnKf0RynSX9I4ICSFXy/h4gyQMkqQrkvW16jZ6bRlUg723Ta/TcNPICJA+Q5AGSPECSvL/XWSSvs0heZ5G8ziJ5nUXyOouEAkhV8v4eIMkDJKkK5L1teo2em0ZVIO9t02v03DTyAiQPkOQBkjxAkry/11kkr7NIXmeRvM4ieZ1F8jqLhAJIVfL+HiDJAySpCuS9bXqNnptGVSDvbdNr9Nw08gIkD5DkAZI8QJK8fz6tqPI6S/rYEzw+CSUqr7Pw2CoZPHuq8qOfXiOHESlsNvD4JPwqbCu5xmCBgG/eUcTMzMzMzP7XsnwDfZBBzPrYsbsAAAAASUVORK5CYII=" style="opacity: 0.5;">
                                                                <p>No Transactions Recorded</p>
                                                                <p class="font-light">You have not made any transactions yet</p>
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
                        <div class="hide">
                            <div>
                                <div class="ui grid">
                                    <div class="ui sixteen wide column" style="padding-top: 0px; padding-bottom: 0px;"><button class="ui button blue w-100-m" style="padding-right: 20px; padding-left: 20px;"><i class="icon add"></i>&nbsp; Generate new Ethereum address</button>
                                        <div class="ui secondary pointing menu" style="margin-bottom: 0px;"><a class="item w-50-m active">
                                                <div class="text-center w-100">
                                                    <p>Addresses</p>
                                                </div>
                                            </a><a class="item w-50-m">
                                                <div class="text-center w-100">
                                                    <p>Transactions</p>
                                                </div>
                                            </a></div>
                                        <div style="padding-top: 0px;">
                                            <div class="">
                                                <table class="ui table ui very basic table selectable unstackable">
                                                    <tbody>
                                                        <tr style="border-radius: 5px;">
                                                            <td class="desktop-remove p-0"><small class="text-muted">Total Received:&nbsp;</small><small><span>0 ETH</span>
                                                                    <div class="ui horizontal label teal right floated" style="font-weight: 400;">genesis</div>
                                                                </small><br><small class="text-muted">Created:&nbsp;</small><small><span>2 days ago</span></small><br><span style="font-size: 13px;">0xe61d7f9b099cad33e7374fd0200c4130d179c216</span>
                                                                <div><button class="ui small button" title="Copy address to clipboard" style="border: 0px; font-weight: 400; cursor: pointer; color: rgb(52, 152, 219); background-color: rgba(52, 152, 219, 0.1);"><i class="ui copy outline icon"></i>Copy</button></div>
                                                            </td>
                                                            <td class="hidden-m"><small class="text-muted">Address</small><br><span>0xe61d7f9b099cad33e7374fd0200c4130d179c216</span></td>
                                                            <td class="hidden-m">
                                                                <div><button class="ui small button" title="Copy address to clipboard" style="border: 0px; font-weight: 400; cursor: pointer; color: rgb(52, 152, 219); background-color: rgba(52, 152, 219, 0.1);"><i class="ui copy outline icon"></i>Copy</button></div>
                                                            </td>
                                                            <td class="hidden-m"><small class="text-muted">Total Received</small><br><small><span>0 ETH</span></small></td>
                                                            <td class="hidden-m"><small class="text-muted">Created</small><br><small>2 days ago</small></td>
                                                            <td class="hidden-m" style="width: 5px;">
                                                                <div class="ui horizontal label teal" style="font-weight: 400;">genesis</div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="hide">
                                                <div>
                                                    <div style="">
                                                        <div class="ui large vertical menu w-100" style="display: none; border: none; box-shadow: none; margin-bottom: 0px;"><a class="item" style="padding: 0px;"></a></div>
                                                        <div class="content" style="padding: 0px;">
                                                            <div class="text-center" style="padding: 100px;"><img alt="no transaction" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHXSURBVHhe7dxJSkRBEATQfw8nEL26IurG4QTqUXSl4nAAzWhNkKI3VVEYPyEeBNgNRUUnLWIu/mJmZmZmZhp7kYvIR+SrSND1MnIckdqNvES2layQ58hOROY8giJXEWmRTuh6E0H3M7yh8hlBCXwTq0FndH/fvBJBAaQqeX8PkOQBklQF8t42vUbPTaMqkPe26TV6bhp5AZIHSPIASR4gSd7/LYICFf8TwRIE3fEZZE4jKHEdqTREDO82gu4neEPlIPIYQREkPUTuf37cWNvr7Ivu+3hDBQN8irQDvPtNWtvrvwPEZ5DJX+HK6yx8BpnKf0RynSX9I4ICSFXy/h4gyQMkqQrkvW16jZ6bRlUg723Ta/TcNPICJA+Q5AGSPECSvL/XWSSvs0heZ5G8ziJ5nUXyOouEAkhV8v4eIMkDJKkK5L1teo2em0ZVIO9t02v03DTyAiQPkOQBkjxAkry/11kkr7NIXmeRvM4ieZ1F8jqLhAJIVfL+HiDJAySpCuS9bXqNnptGVSDvbdNr9Nw08gIkD5DkAZI8QJK8fz6tqPI6S/rYEzw+CSUqr7Pw2CoZPHuq8qOfXiOHESlsNvD4JPwqbCu5xmCBgG/eUcTMzMzMzP7XsnwDfZBBzPrYsbsAAAAASUVORK5CYII=" style="opacity: 0.5;">
                                                                <p>No Transactions Recorded</p>
                                                                <p class="font-light">You have not made any transactions yet</p>
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
                        <div class="hide">
                            <div>
                                <div class="ui grid">
                                    <div class="ui sixteen wide column" style="padding-top: 0px; padding-bottom: 0px;"><button class="ui button blue w-100-m" style="padding-right: 20px; padding-left: 20px;"><i class="icon add"></i>&nbsp; Generate new Litecoin address</button>
                                        <div class="ui secondary pointing menu" style="margin-bottom: 0px;"><a class="item w-50-m active">
                                                <div class="text-center w-100">
                                                    <p>Addresses</p>
                                                </div>
                                            </a><a class="item w-50-m">
                                                <div class="text-center w-100">
                                                    <p>Transactions</p>
                                                </div>
                                            </a></div>
                                        <div style="padding-top: 0px;">
                                            <div class="">
                                                <table class="ui table ui very basic table selectable unstackable">
                                                    <tbody>
                                                        <tr style="border-radius: 5px;">
                                                            <td class="desktop-remove p-0"><small class="text-muted">Total Received:&nbsp;</small><small><span>0 LTC</span>
                                                                    <div class="ui horizontal label orange right floated" style="font-weight: 400;">genesis</div>
                                                                </small><br><small class="text-muted">Created:&nbsp;</small><small><span>2 days ago</span></small><br><span style="font-size: 13px;">LNh7p5jrnFC6SkwjBk1dx1uup4jya8Trp1</span>
                                                                <div><button class="ui small button" title="Copy address to clipboard" style="border: 0px; font-weight: 400; cursor: pointer; color: rgb(52, 152, 219); background-color: rgba(52, 152, 219, 0.1);"><i class="ui copy outline icon"></i>Copy</button></div>
                                                            </td>
                                                            <td class="hidden-m"><small class="text-muted">Address</small><br><span>LNh7p5jrnFC6SkwjBk1dx1uup4jya8Trp1</span></td>
                                                            <td class="hidden-m">
                                                                <div><button class="ui small button" title="Copy address to clipboard" style="border: 0px; font-weight: 400; cursor: pointer; color: rgb(52, 152, 219); background-color: rgba(52, 152, 219, 0.1);"><i class="ui copy outline icon"></i>Copy</button></div>
                                                            </td>
                                                            <td class="hidden-m"><small class="text-muted">Total Received</small><br><small><span>0 LTC</span></small></td>
                                                            <td class="hidden-m"><small class="text-muted">Created</small><br><small>2 days ago</small></td>
                                                            <td class="hidden-m" style="width: 5px;">
                                                                <div class="ui horizontal label orange" style="font-weight: 400;">genesis</div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="hide">
                                                <div>
                                                    <div style="">
                                                        <div class="ui large vertical menu w-100" style="display: none; border: none; box-shadow: none; margin-bottom: 0px;"><a class="item" style="padding: 0px;"></a></div>
                                                        <div class="content" style="padding: 0px;">
                                                            <div class="text-center" style="padding: 100px;"><img alt="no transaction" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHXSURBVHhe7dxJSkRBEATQfw8nEL26IurG4QTqUXSl4nAAzWhNkKI3VVEYPyEeBNgNRUUnLWIu/mJmZmZmZhp7kYvIR+SrSND1MnIckdqNvES2layQ58hOROY8giJXEWmRTuh6E0H3M7yh8hlBCXwTq0FndH/fvBJBAaQqeX8PkOQBklQF8t42vUbPTaMqkPe26TV6bhp5AZIHSPIASR4gSd7/LYICFf8TwRIE3fEZZE4jKHEdqTREDO82gu4neEPlIPIYQREkPUTuf37cWNvr7Ivu+3hDBQN8irQDvPtNWtvrvwPEZ5DJX+HK6yx8BpnKf0RynSX9I4ICSFXy/h4gyQMkqQrkvW16jZ6bRlUg723Ta/TcNPICJA+Q5AGSPECSvL/XWSSvs0heZ5G8ziJ5nUXyOouEAkhV8v4eIMkDJKkK5L1teo2em0ZVIO9t02v03DTyAiQPkOQBkjxAkry/11kkr7NIXmeRvM4ieZ1F8jqLhAJIVfL+HiDJAySpCuS9bXqNnptGVSDvbdNr9Nw08gIkD5DkAZI8QJK8fz6tqPI6S/rYEzw+CSUqr7Pw2CoZPHuq8qOfXiOHESlsNvD4JPwqbCu5xmCBgG/eUcTMzMzMzP7XsnwDfZBBzPrYsbsAAAAASUVORK5CYII=" style="opacity: 0.5;">
                                                                <p>No Transactions Recorded</p>
                                                                <p class="font-light">You have not made any transactions yet</p>
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
                        <div class="hide">
                            <div>
                                <div class="ui grid">
                                    <div class="ui sixteen wide column" style="padding-top: 0px; padding-bottom: 0px;"><button class="ui button orange w-100-m" style="padding-right: 20px; padding-left: 20px;"><i class="icon add"></i>&nbsp; Generate new Doge address</button>
                                        <div class="ui secondary pointing menu" style="margin-bottom: 0px;"><a class="item w-50-m active">
                                                <div class="text-center w-100">
                                                    <p>Addresses</p>
                                                </div>
                                            </a><a class="item w-50-m">
                                                <div class="text-center w-100">
                                                    <p>Transactions</p>
                                                </div>
                                            </a></div>
                                        <div style="padding-top: 0px;">
                                            <div class="">
                                                <table class="ui table ui very basic table selectable unstackable">
                                                    <tbody>
                                                        <tr style="border-radius: 5px;">
                                                            <td class="desktop-remove p-0"><small class="text-muted">Total Received:&nbsp;</small><small><span>0 DOGE</span>
                                                                    <div class="ui horizontal label orange right floated" style="font-weight: 400;">genesis</div>
                                                                </small><br><small class="text-muted">Created:&nbsp;</small><small><span>2 days ago</span></small><br><span style="font-size: 13px;">DGhourbh2SZAo1JFHjCUDiVgS6KTMHrbUa</span>
                                                                <div><button class="ui small button" title="Copy address to clipboard" style="border: 0px; font-weight: 400; cursor: pointer; color: rgb(52, 152, 219); background-color: rgba(52, 152, 219, 0.1);"><i class="ui copy outline icon"></i>Copy</button></div>
                                                            </td>
                                                            <td class="hidden-m"><small class="text-muted">Address</small><br><span>DGhourbh2SZAo1JFHjCUDiVgS6KTMHrbUa</span></td>
                                                            <td class="hidden-m">
                                                                <div><button class="ui small button" title="Copy address to clipboard" style="border: 0px; font-weight: 400; cursor: pointer; color: rgb(52, 152, 219); background-color: rgba(52, 152, 219, 0.1);"><i class="ui copy outline icon"></i>Copy</button></div>
                                                            </td>
                                                            <td class="hidden-m"><small class="text-muted">Total Received</small><br><small><span>0 DOGE</span></small></td>
                                                            <td class="hidden-m"><small class="text-muted">Created</small><br><small>2 days ago</small></td>
                                                            <td class="hidden-m" style="width: 5px;">
                                                                <div class="ui horizontal label orange" style="font-weight: 400;">genesis</div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="hide">
                                                <div>
                                                    <div style="">
                                                        <div class="ui large vertical menu w-100" style="display: none; border: none; box-shadow: none; margin-bottom: 0px;"><a class="item" style="padding: 0px;"></a></div>
                                                        <div class="content" style="padding: 0px;">
                                                            <div class="text-center" style="padding: 100px;"><img alt="no transaction" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHXSURBVHhe7dxJSkRBEATQfw8nEL26IurG4QTqUXSl4nAAzWhNkKI3VVEYPyEeBNgNRUUnLWIu/mJmZmZmZhp7kYvIR+SrSND1MnIckdqNvES2layQ58hOROY8giJXEWmRTuh6E0H3M7yh8hlBCXwTq0FndH/fvBJBAaQqeX8PkOQBklQF8t42vUbPTaMqkPe26TV6bhp5AZIHSPIASR4gSd7/LYICFf8TwRIE3fEZZE4jKHEdqTREDO82gu4neEPlIPIYQREkPUTuf37cWNvr7Ivu+3hDBQN8irQDvPtNWtvrvwPEZ5DJX+HK6yx8BpnKf0RynSX9I4ICSFXy/h4gyQMkqQrkvW16jZ6bRlUg723Ta/TcNPICJA+Q5AGSPECSvL/XWSSvs0heZ5G8ziJ5nUXyOouEAkhV8v4eIMkDJKkK5L1teo2em0ZVIO9t02v03DTyAiQPkOQBkjxAkry/11kkr7NIXmeRvM4ieZ1F8jqLhAJIVfL+HiDJAySpCuS9bXqNnptGVSDvbdNr9Nw08gIkD5DkAZI8QJK8fz6tqPI6S/rYEzw+CSUqr7Pw2CoZPHuq8qOfXiOHESlsNvD4JPwqbCu5xmCBgG/eUcTMzMzMzP7XsnwDfZBBzPrYsbsAAAAASUVORK5CYII=" style="opacity: 0.5;">
                                                                <p>No Transactions Recorded</p>
                                                                <p class="font-light">You have not made any transactions yet</p>
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
                        <div class="hide">
                            <div>
                                <div class="ui grid">
                                    <div class="ui sixteen wide column" style="padding-top: 0px; padding-bottom: 0px;"><button class="ui button blue w-100-m" style="padding-right: 20px; padding-left: 20px;"><i class="icon add"></i>&nbsp; Generate new Dash address</button>
                                        <div class="ui secondary pointing menu" style="margin-bottom: 0px;"><a class="item w-50-m active">
                                                <div class="text-center w-100">
                                                    <p>Addresses</p>
                                                </div>
                                            </a><a class="item w-50-m">
                                                <div class="text-center w-100">
                                                    <p>Transactions</p>
                                                </div>
                                            </a></div>
                                        <div style="padding-top: 0px;">
                                            <div class="">
                                                <table class="ui table ui very basic table selectable unstackable">
                                                    <tbody>
                                                        <tr style="border-radius: 5px;">
                                                            <td class="desktop-remove p-0"><small class="text-muted">Total Received:&nbsp;</small><small><span>0 DASH</span>
                                                                    <div class="ui horizontal label orange right floated" style="font-weight: 400;">genesis</div>
                                                                </small><br><small class="text-muted">Created:&nbsp;</small><small><span>2 days ago</span></small><br><span style="font-size: 13px;">Xef6tQZr4owd5zhBdjDRYdtaHMt5cP1thJ</span>
                                                                <div><button class="ui small button" title="Copy address to clipboard" style="border: 0px; font-weight: 400; cursor: pointer; color: rgb(52, 152, 219); background-color: rgba(52, 152, 219, 0.1);"><i class="ui copy outline icon"></i>Copy</button></div>
                                                            </td>
                                                            <td class="hidden-m"><small class="text-muted">Address</small><br><span>Xef6tQZr4owd5zhBdjDRYdtaHMt5cP1thJ</span></td>
                                                            <td class="hidden-m">
                                                                <div><button class="ui small button" title="Copy address to clipboard" style="border: 0px; font-weight: 400; cursor: pointer; color: rgb(52, 152, 219); background-color: rgba(52, 152, 219, 0.1);"><i class="ui copy outline icon"></i>Copy</button></div>
                                                            </td>
                                                            <td class="hidden-m"><small class="text-muted">Total Received</small><br><small><span>0 DASH</span></small></td>
                                                            <td class="hidden-m"><small class="text-muted">Created</small><br><small>2 days ago</small></td>
                                                            <td class="hidden-m" style="width: 5px;">
                                                                <div class="ui horizontal label orange" style="font-weight: 400;">genesis</div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="hide">
                                                <div>
                                                    <div style="">
                                                        <div class="ui large vertical menu w-100" style="display: none; border: none; box-shadow: none; margin-bottom: 0px;"><a class="item" style="padding: 0px;"></a></div>
                                                        <div class="content" style="padding: 0px;">
                                                            <div class="text-center" style="padding: 100px;"><img alt="no transaction" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHXSURBVHhe7dxJSkRBEATQfw8nEL26IurG4QTqUXSl4nAAzWhNkKI3VVEYPyEeBNgNRUUnLWIu/mJmZmZmZhp7kYvIR+SrSND1MnIckdqNvES2layQ58hOROY8giJXEWmRTuh6E0H3M7yh8hlBCXwTq0FndH/fvBJBAaQqeX8PkOQBklQF8t42vUbPTaMqkPe26TV6bhp5AZIHSPIASR4gSd7/LYICFf8TwRIE3fEZZE4jKHEdqTREDO82gu4neEPlIPIYQREkPUTuf37cWNvr7Ivu+3hDBQN8irQDvPtNWtvrvwPEZ5DJX+HK6yx8BpnKf0RynSX9I4ICSFXy/h4gyQMkqQrkvW16jZ6bRlUg723Ta/TcNPICJA+Q5AGSPECSvL/XWSSvs0heZ5G8ziJ5nUXyOouEAkhV8v4eIMkDJKkK5L1teo2em0ZVIO9t02v03DTyAiQPkOQBkjxAkry/11kkr7NIXmeRvM4ieZ1F8jqLhAJIVfL+HiDJAySpCuS9bXqNnptGVSDvbdNr9Nw08gIkD5DkAZI8QJK8fz6tqPI6S/rYEzw+CSUqr7Pw2CoZPHuq8qOfXiOHESlsNvD4JPwqbCu5xmCBgG/eUcTMzMzMzP7XsnwDfZBBzPrYsbsAAAAASUVORK5CYII=" style="opacity: 0.5;">
                                                                <p>No Transactions Recorded</p>
                                                                <p class="font-light">You have not made any transactions yet</p>
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
                        <div class="hide">
                            <div>
                                <div class="ui grid">
                                    <div class="ui sixteen wide column" style="padding-top: 0px; padding-bottom: 0px;"><button class="ui button teal w-100-m" style="padding-right: 20px; padding-left: 20px;"><i class="icon add"></i>&nbsp; Generate new Tether USD address</button>
                                        <div class="ui secondary pointing menu" style="margin-bottom: 0px;"><a class="item w-50-m active">
                                                <div class="text-center w-100">
                                                    <p>Addresses</p>
                                                </div>
                                            </a><a class="item w-50-m">
                                                <div class="text-center w-100">
                                                    <p>Transactions</p>
                                                </div>
                                            </a></div>
                                        <div style="padding-top: 0px;">
                                            <div class="">
                                                <table class="ui table ui very basic table selectable unstackable">
                                                    <tbody>
                                                        <tr style="border-radius: 5px;">
                                                            <td class="desktop-remove p-0"><small class="text-muted">Total Received:&nbsp;</small><small><span>0 USDT</span>
                                                                    <div class="ui horizontal label teal right floated" style="font-weight: 400;">genesis</div>
                                                                </small><br><small class="text-muted">Created:&nbsp;</small><small><span>2 days ago</span></small><br><span style="font-size: 13px;">TSNAJNB9bVo1Z4TrSEUQz6EwJt2GvGrC2f</span>
                                                                <div><button class="ui small button" title="Copy address to clipboard" style="border: 0px; font-weight: 400; cursor: pointer; color: rgb(52, 152, 219); background-color: rgba(52, 152, 219, 0.1);"><i class="ui copy outline icon"></i>Copy</button></div>
                                                            </td>
                                                            <td class="hidden-m"><small class="text-muted">Address</small><br><span>TSNAJNB9bVo1Z4TrSEUQz6EwJt2GvGrC2f</span></td>
                                                            <td class="hidden-m">
                                                                <div><button class="ui small button" title="Copy address to clipboard" style="border: 0px; font-weight: 400; cursor: pointer; color: rgb(52, 152, 219); background-color: rgba(52, 152, 219, 0.1);"><i class="ui copy outline icon"></i>Copy</button></div>
                                                            </td>
                                                            <td class="hidden-m"><small class="text-muted">Total Received</small><br><small><span>0 USDT</span></small></td>
                                                            <td class="hidden-m"><small class="text-muted">Created</small><br><small>2 days ago</small></td>
                                                            <td class="hidden-m" style="width: 5px;">
                                                                <div class="ui horizontal label teal" style="font-weight: 400;">genesis</div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="hide">
                                                <div>
                                                    <div style="">
                                                        <div class="ui large vertical menu w-100" style="display: none; border: none; box-shadow: none; margin-bottom: 0px;"><a class="item" style="padding: 0px;"></a></div>
                                                        <div class="content" style="padding: 0px;">
                                                            <div class="text-center" style="padding: 100px;"><img alt="no transaction" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHXSURBVHhe7dxJSkRBEATQfw8nEL26IurG4QTqUXSl4nAAzWhNkKI3VVEYPyEeBNgNRUUnLWIu/mJmZmZmZhp7kYvIR+SrSND1MnIckdqNvES2layQ58hOROY8giJXEWmRTuh6E0H3M7yh8hlBCXwTq0FndH/fvBJBAaQqeX8PkOQBklQF8t42vUbPTaMqkPe26TV6bhp5AZIHSPIASR4gSd7/LYICFf8TwRIE3fEZZE4jKHEdqTREDO82gu4neEPlIPIYQREkPUTuf37cWNvr7Ivu+3hDBQN8irQDvPtNWtvrvwPEZ5DJX+HK6yx8BpnKf0RynSX9I4ICSFXy/h4gyQMkqQrkvW16jZ6bRlUg723Ta/TcNPICJA+Q5AGSPECSvL/XWSSvs0heZ5G8ziJ5nUXyOouEAkhV8v4eIMkDJKkK5L1teo2em0ZVIO9t02v03DTyAiQPkOQBkjxAkry/11kkr7NIXmeRvM4ieZ1F8jqLhAJIVfL+HiDJAySpCuS9bXqNnptGVSDvbdNr9Nw08gIkD5DkAZI8QJK8fz6tqPI6S/rYEzw+CSUqr7Pw2CoZPHuq8qOfXiOHESlsNvD4JPwqbCu5xmCBgG/eUcTMzMzMzP7XsnwDfZBBzPrYsbsAAAAASUVORK5CYII=" style="opacity: 0.5;">
                                                                <p>No Transactions Recorded</p>
                                                                <p class="font-light">You have not made any transactions yet</p>
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
                        <div class="hide">
                            <div>
                                <div class="ui grid">
                                    <div class="ui sixteen wide column" style="padding-top: 0px; padding-bottom: 0px;">
                                        <div class="ui secondary pointing menu" style="margin-bottom: 0px;"><a class="item w-50-m active">
                                                <div class="text-center w-100">
                                                    <p>Addresses</p>
                                                </div>
                                            </a><a class="item w-50-m">
                                                <div class="text-center w-100">
                                                    <p>Transactions</p>
                                                </div>
                                            </a></div>
                                        <div style="padding-top: 0px;">
                                            <div class="">
                                                <div style="padding: 30px;"><small class="text-muted">XRP Wallet Address</small>
                                                    <p class="f-20" style="margin-bottom: 0px;"><span class="text-blue">rHxsZo42NrTq1hC9dcnS8KAuvc8LrNdbpn</span></p><br><small class="text-muted">Your unique tag</small>
                                                    <p class="f-20" style="margin-bottom: 0px;">888243741</p><br><span style="display: block; margin-bottom: 15px;">
                                                        <div><button class="ui small button" title="Copy address to clipboard" style="border: 0px; font-weight: 400; cursor: pointer; color: rgb(52, 152, 219); background-color: rgba(52, 152, 219, 0.1);"><i class="ui copy outline icon"></i>Copy</button></div>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="hide">
                                                <div>
                                                    <div style="">
                                                        <div class="ui large vertical menu w-100" style="display: none; border: none; box-shadow: none; margin-bottom: 0px;"><a class="item" style="padding: 0px;"></a></div>
                                                        <div class="content" style="padding: 0px;">
                                                            <div class="text-center" style="padding: 100px;"><img alt="no transaction" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHXSURBVHhe7dxJSkRBEATQfw8nEL26IurG4QTqUXSl4nAAzWhNkKI3VVEYPyEeBNgNRUUnLWIu/mJmZmZmZhp7kYvIR+SrSND1MnIckdqNvES2layQ58hOROY8giJXEWmRTuh6E0H3M7yh8hlBCXwTq0FndH/fvBJBAaQqeX8PkOQBklQF8t42vUbPTaMqkPe26TV6bhp5AZIHSPIASR4gSd7/LYICFf8TwRIE3fEZZE4jKHEdqTREDO82gu4neEPlIPIYQREkPUTuf37cWNvr7Ivu+3hDBQN8irQDvPtNWtvrvwPEZ5DJX+HK6yx8BpnKf0RynSX9I4ICSFXy/h4gyQMkqQrkvW16jZ6bRlUg723Ta/TcNPICJA+Q5AGSPECSvL/XWSSvs0heZ5G8ziJ5nUXyOouEAkhV8v4eIMkDJKkK5L1teo2em0ZVIO9t02v03DTyAiQPkOQBkjxAkry/11kkr7NIXmeRvM4ieZ1F8jqLhAJIVfL+HiDJAySpCuS9bXqNnptGVSDvbdNr9Nw08gIkD5DkAZI8QJK8fz6tqPI6S/rYEzw+CSUqr7Pw2CoZPHuq8qOfXiOHESlsNvD4JPwqbCu5xmCBgG/eUcTMzMzMzP7XsnwDfZBBzPrYsbsAAAAASUVORK5CYII=" style="opacity: 0.5;">
                                                                <p>No Transactions Recorded</p>
                                                                <p class="font-light">You have not made any transactions yet</p>
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
                        <div class="hide">
                            <div>
                                <div class="ui grid">
                                    <div class="ui sixteen wide column" style="padding-top: 0px; padding-bottom: 0px;"><button class="ui button red w-100-m" style="padding-right: 20px; padding-left: 20px;"><i class="icon add"></i>&nbsp; Generate new Tron address</button>
                                        <div class="ui secondary pointing menu" style="margin-bottom: 0px;"><a class="item w-50-m active">
                                                <div class="text-center w-100">
                                                    <p>Addresses</p>
                                                </div>
                                            </a><a class="item w-50-m">
                                                <div class="text-center w-100">
                                                    <p>Transactions</p>
                                                </div>
                                            </a></div>
                                        <div style="padding-top: 0px;">
                                            <div class="">
                                                <table class="ui table ui very basic table selectable unstackable">
                                                    <tbody>
                                                        <tr style="border-radius: 5px;">
                                                            <td class="desktop-remove p-0"><small class="text-muted">Total Received:&nbsp;</small><small><span>0 TRX</span>
                                                                    <div class="ui horizontal label teal right floated" style="font-weight: 400;">genesis</div>
                                                                </small><br><small class="text-muted">Created:&nbsp;</small><small><span>2 days ago</span></small><br><span style="font-size: 13px;">TSNAJNB9bVo1Z4TrSEUQz6EwJt2GvGrC2f</span>
                                                                <div><button class="ui small button" title="Copy address to clipboard" style="border: 0px; font-weight: 400; cursor: pointer; color: rgb(52, 152, 219); background-color: rgba(52, 152, 219, 0.1);"><i class="ui copy outline icon"></i>Copy</button></div>
                                                            </td>
                                                            <td class="hidden-m"><small class="text-muted">Address</small><br><span>TSNAJNB9bVo1Z4TrSEUQz6EwJt2GvGrC2f</span></td>
                                                            <td class="hidden-m">
                                                                <div><button class="ui small button" title="Copy address to clipboard" style="border: 0px; font-weight: 400; cursor: pointer; color: rgb(52, 152, 219); background-color: rgba(52, 152, 219, 0.1);"><i class="ui copy outline icon"></i>Copy</button></div>
                                                            </td>
                                                            <td class="hidden-m"><small class="text-muted">Total Received</small><br><small><span>0 TRX</span></small></td>
                                                            <td class="hidden-m"><small class="text-muted">Created</small><br><small>2 days ago</small></td>
                                                            <td class="hidden-m" style="width: 5px;">
                                                                <div class="ui horizontal label teal" style="font-weight: 400;">genesis</div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="hide">
                                                <div>
                                                    <div style="">
                                                        <div class="ui large vertical menu w-100" style="display: none; border: none; box-shadow: none; margin-bottom: 0px;"><a class="item" style="padding: 0px;"></a></div>
                                                        <div class="content" style="padding: 0px;">
                                                            <div class="text-center" style="padding: 100px;"><img alt="no transaction" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHXSURBVHhe7dxJSkRBEATQfw8nEL26IurG4QTqUXSl4nAAzWhNkKI3VVEYPyEeBNgNRUUnLWIu/mJmZmZmZhp7kYvIR+SrSND1MnIckdqNvES2layQ58hOROY8giJXEWmRTuh6E0H3M7yh8hlBCXwTq0FndH/fvBJBAaQqeX8PkOQBklQF8t42vUbPTaMqkPe26TV6bhp5AZIHSPIASR4gSd7/LYICFf8TwRIE3fEZZE4jKHEdqTREDO82gu4neEPlIPIYQREkPUTuf37cWNvr7Ivu+3hDBQN8irQDvPtNWtvrvwPEZ5DJX+HK6yx8BpnKf0RynSX9I4ICSFXy/h4gyQMkqQrkvW16jZ6bRlUg723Ta/TcNPICJA+Q5AGSPECSvL/XWSSvs0heZ5G8ziJ5nUXyOouEAkhV8v4eIMkDJKkK5L1teo2em0ZVIO9t02v03DTyAiQPkOQBkjxAkry/11kkr7NIXmeRvM4ieZ1F8jqLhAJIVfL+HiDJAySpCuS9bXqNnptGVSDvbdNr9Nw08gIkD5DkAZI8QJK8fz6tqPI6S/rYEzw+CSUqr7Pw2CoZPHuq8qOfXiOHESlsNvD4JPwqbCu5xmCBgG/eUcTMzMzMzP7XsnwDfZBBzPrYsbsAAAAASUVORK5CYII=" style="opacity: 0.5;">
                                                                <p>No Transactions Recorded</p>
                                                                <p class="font-light">You have not made any transactions yet</p>
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
                        <div class="hide">
                            <div>
                                <div class="ui grid">
                                    <div class="ui sixteen wide column" style="padding-top: 0px; padding-bottom: 0px;">
                                        <div class="ui secondary pointing menu" style="margin-bottom: 0px;"><a class="item w-50-m active">
                                                <div class="text-center w-100">
                                                    <p>Addresses</p>
                                                </div>
                                            </a><a class="item w-50-m">
                                                <div class="text-center w-100">
                                                    <p>Transactions</p>
                                                </div>
                                            </a></div>
                                        <div style="padding-top: 0px;">
                                            <div class="">
                                                <div style="padding: 30px;"><small class="text-muted">EOS Account</small>
                                                    <p class="f-20" style="margin-bottom: 0px;"><span class="text-blue">roqquloveeos</span></p><br><small class="text-muted">Your memo</small>
                                                    <p class="f-20" style="margin-bottom: 0px;">rylrYp8TNAm0iGolPQ6D</p><br><span style="display: block; margin-bottom: 15px;">
                                                        <div><button class="ui small button" title="Copy address to clipboard" style="border: 0px; font-weight: 400; cursor: pointer; color: rgb(52, 152, 219); background-color: rgba(52, 152, 219, 0.1);"><i class="ui copy outline icon"></i>Copy</button></div>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="hide">
                                                <div>
                                                    <div style="">
                                                        <div class="ui large vertical menu w-100" style="display: none; border: none; box-shadow: none; margin-bottom: 0px;"><a class="item" style="padding: 0px;"></a></div>
                                                        <div class="content" style="padding: 0px;">
                                                            <div class="text-center" style="padding: 100px;"><img alt="no transaction" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHXSURBVHhe7dxJSkRBEATQfw8nEL26IurG4QTqUXSl4nAAzWhNkKI3VVEYPyEeBNgNRUUnLWIu/mJmZmZmZhp7kYvIR+SrSND1MnIckdqNvES2layQ58hOROY8giJXEWmRTuh6E0H3M7yh8hlBCXwTq0FndH/fvBJBAaQqeX8PkOQBklQF8t42vUbPTaMqkPe26TV6bhp5AZIHSPIASR4gSd7/LYICFf8TwRIE3fEZZE4jKHEdqTREDO82gu4neEPlIPIYQREkPUTuf37cWNvr7Ivu+3hDBQN8irQDvPtNWtvrvwPEZ5DJX+HK6yx8BpnKf0RynSX9I4ICSFXy/h4gyQMkqQrkvW16jZ6bRlUg723Ta/TcNPICJA+Q5AGSPECSvL/XWSSvs0heZ5G8ziJ5nUXyOouEAkhV8v4eIMkDJKkK5L1teo2em0ZVIO9t02v03DTyAiQPkOQBkjxAkry/11kkr7NIXmeRvM4ieZ1F8jqLhAJIVfL+HiDJAySpCuS9bXqNnptGVSDvbdNr9Nw08gIkD5DkAZI8QJK8fz6tqPI6S/rYEzw+CSUqr7Pw2CoZPHuq8qOfXiOHESlsNvD4JPwqbCu5xmCBgG/eUcTMzMzMzP7XsnwDfZBBzPrYsbsAAAAASUVORK5CYII=" style="opacity: 0.5;">
                                                                <p>No Transactions Recorded</p>
                                                                <p class="font-light">You have not made any transactions yet</p>
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
                        <div class="hide">
                            <div>
                                <div class="ui grid">
                                    <div class="ui sixteen wide column" style="padding-top: 0px; padding-bottom: 0px;">
                                        <div class="ui secondary pointing menu" style="margin-bottom: 0px;"><a class="item w-50-m active">
                                                <div class="text-center w-100">
                                                    <p>Addresses</p>
                                                </div>
                                            </a><a class="item w-50-m">
                                                <div class="text-center w-100">
                                                    <p>Transactions</p>
                                                </div>
                                            </a></div>
                                        <div style="padding-top: 0px;">
                                            <div class="">
                                                <div style="padding: 30px;"><small class="text-muted">BNB Wallet Address</small>
                                                    <p class="f-20" style="margin-bottom: 0px;"><span class="text-blue">bnb1xk05h8xzy4f4t2scg232gkj99m3u24q70cudkv</span></p><br><small class="text-muted">Your memo</small>
                                                    <p class="f-20" style="margin-bottom: 0px;">rylrYp8TNAm0iGolPQ6D</p><br><span style="display: block; margin-bottom: 15px;">
                                                        <div><button class="ui small button" title="Copy address to clipboard" style="border: 0px; font-weight: 400; cursor: pointer; color: rgb(52, 152, 219); background-color: rgba(52, 152, 219, 0.1);"><i class="ui copy outline icon"></i>Copy</button></div>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="hide">
                                                <div>
                                                    <div style="">
                                                        <div class="ui large vertical menu w-100" style="display: none; border: none; box-shadow: none; margin-bottom: 0px;"><a class="item" style="padding: 0px;"></a></div>
                                                        <div class="content" style="padding: 0px;">
                                                            <div class="text-center" style="padding: 100px;"><img alt="no transaction" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHXSURBVHhe7dxJSkRBEATQfw8nEL26IurG4QTqUXSl4nAAzWhNkKI3VVEYPyEeBNgNRUUnLWIu/mJmZmZmZhp7kYvIR+SrSND1MnIckdqNvES2layQ58hOROY8giJXEWmRTuh6E0H3M7yh8hlBCXwTq0FndH/fvBJBAaQqeX8PkOQBklQF8t42vUbPTaMqkPe26TV6bhp5AZIHSPIASR4gSd7/LYICFf8TwRIE3fEZZE4jKHEdqTREDO82gu4neEPlIPIYQREkPUTuf37cWNvr7Ivu+3hDBQN8irQDvPtNWtvrvwPEZ5DJX+HK6yx8BpnKf0RynSX9I4ICSFXy/h4gyQMkqQrkvW16jZ6bRlUg723Ta/TcNPICJA+Q5AGSPECSvL/XWSSvs0heZ5G8ziJ5nUXyOouEAkhV8v4eIMkDJKkK5L1teo2em0ZVIO9t02v03DTyAiQPkOQBkjxAkry/11kkr7NIXmeRvM4ieZ1F8jqLhAJIVfL+HiDJAySpCuS9bXqNnptGVSDvbdNr9Nw08gIkD5DkAZI8QJK8fz6tqPI6S/rYEzw+CSUqr7Pw2CoZPHuq8qOfXiOHESlsNvD4JPwqbCu5xmCBgG/eUcTMzMzMzP7XsnwDfZBBzPrYsbsAAAAASUVORK5CYII=" style="opacity: 0.5;">
                                                                <p>No Transactions Recorded</p>
                                                                <p class="font-light">You have not made any transactions yet</p>
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
                        <div class="hide">
                            <div>
                                <div class="ui grid">
                                    <div class="ui sixteen wide column" style="padding-top: 0px; padding-bottom: 0px;">
                                        <div class="ui secondary pointing menu" style="margin-bottom: 0px;"><a class="item w-50-m active">
                                                <div class="text-center w-100">
                                                    <p>Addresses</p>
                                                </div>
                                            </a><a class="item w-50-m">
                                                <div class="text-center w-100">
                                                    <p>Transactions</p>
                                                </div>
                                            </a></div>
                                        <div style="padding-top: 0px;">
                                            <div class="">
                                                <div style="padding: 30px;"><small class="text-muted">HIVE Account</small>
                                                    <p class="f-20" style="margin-bottom: 0px;"><span class="text-blue">roqqulovehive</span></p><br><small class="text-muted">Your memo</small>
                                                    <p class="f-20" style="margin-bottom: 0px;">rylrYp8TNAm0iGolPQ6D</p><br><span style="display: block; margin-bottom: 15px;">
                                                        <div><button class="ui small button" title="Copy address to clipboard" style="border: 0px; font-weight: 400; cursor: pointer; color: rgb(52, 152, 219); background-color: rgba(52, 152, 219, 0.1);"><i class="ui copy outline icon"></i>Copy</button></div>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="hide">
                                                <div>
                                                    <div style="">
                                                        <div class="ui large vertical menu w-100" style="display: none; border: none; box-shadow: none; margin-bottom: 0px;"><a class="item" style="padding: 0px;"></a></div>
                                                        <div class="content" style="padding: 0px;">
                                                            <div class="text-center" style="padding: 100px;"><img alt="no transaction" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHXSURBVHhe7dxJSkRBEATQfw8nEL26IurG4QTqUXSl4nAAzWhNkKI3VVEYPyEeBNgNRUUnLWIu/mJmZmZmZhp7kYvIR+SrSND1MnIckdqNvES2layQ58hOROY8giJXEWmRTuh6E0H3M7yh8hlBCXwTq0FndH/fvBJBAaQqeX8PkOQBklQF8t42vUbPTaMqkPe26TV6bhp5AZIHSPIASR4gSd7/LYICFf8TwRIE3fEZZE4jKHEdqTREDO82gu4neEPlIPIYQREkPUTuf37cWNvr7Ivu+3hDBQN8irQDvPtNWtvrvwPEZ5DJX+HK6yx8BpnKf0RynSX9I4ICSFXy/h4gyQMkqQrkvW16jZ6bRlUg723Ta/TcNPICJA+Q5AGSPECSvL/XWSSvs0heZ5G8ziJ5nUXyOouEAkhV8v4eIMkDJKkK5L1teo2em0ZVIO9t02v03DTyAiQPkOQBkjxAkry/11kkr7NIXmeRvM4ieZ1F8jqLhAJIVfL+HiDJAySpCuS9bXqNnptGVSDvbdNr9Nw08gIkD5DkAZI8QJK8fz6tqPI6S/rYEzw+CSUqr7Pw2CoZPHuq8qOfXiOHESlsNvD4JPwqbCu5xmCBgG/eUcTMzMzMzP7XsnwDfZBBzPrYsbsAAAAASUVORK5CYII=" style="opacity: 0.5;">
                                                                <p>No Transactions Recorded</p>
                                                                <p class="font-light">You have not made any transactions yet</p>
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
                        <div class="hide">
                            <div>
                                <div class="ui grid">
                                    <div class="ui sixteen wide column" style="padding-top: 0px; padding-bottom: 0px;">
                                        <div class="ui secondary pointing menu" style="margin-bottom: 0px;"><a class="item w-50-m active">
                                                <div class="text-center w-100">
                                                    <p>Addresses</p>
                                                </div>
                                            </a><a class="item w-50-m">
                                                <div class="text-center w-100">
                                                    <p>Transactions</p>
                                                </div>
                                            </a></div>
                                        <div style="padding-top: 0px;">
                                            <div class="">
                                                <div style="padding: 30px;"><small class="text-muted">STEEM Account</small>
                                                    <p class="f-20" style="margin-bottom: 0px;"><span class="text-blue">roqqulovesteem</span></p><br><small class="text-muted">Your memo</small>
                                                    <p class="f-20" style="margin-bottom: 0px;">rylrYp8TNAm0iGolPQ6D</p><br><span style="display: block; margin-bottom: 15px;">
                                                        <div><button class="ui small button" title="Copy address to clipboard" style="border: 0px; font-weight: 400; cursor: pointer; color: rgb(52, 152, 219); background-color: rgba(52, 152, 219, 0.1);"><i class="ui copy outline icon"></i>Copy</button></div>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="hide">
                                                <div>
                                                    <div style="">
                                                        <div class="ui large vertical menu w-100" style="display: none; border: none; box-shadow: none; margin-bottom: 0px;"><a class="item" style="padding: 0px;"></a></div>
                                                        <div class="content" style="padding: 0px;">
                                                            <div class="text-center" style="padding: 100px;"><img alt="no transaction" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHXSURBVHhe7dxJSkRBEATQfw8nEL26IurG4QTqUXSl4nAAzWhNkKI3VVEYPyEeBNgNRUUnLWIu/mJmZmZmZhp7kYvIR+SrSND1MnIckdqNvES2layQ58hOROY8giJXEWmRTuh6E0H3M7yh8hlBCXwTq0FndH/fvBJBAaQqeX8PkOQBklQF8t42vUbPTaMqkPe26TV6bhp5AZIHSPIASR4gSd7/LYICFf8TwRIE3fEZZE4jKHEdqTREDO82gu4neEPlIPIYQREkPUTuf37cWNvr7Ivu+3hDBQN8irQDvPtNWtvrvwPEZ5DJX+HK6yx8BpnKf0RynSX9I4ICSFXy/h4gyQMkqQrkvW16jZ6bRlUg723Ta/TcNPICJA+Q5AGSPECSvL/XWSSvs0heZ5G8ziJ5nUXyOouEAkhV8v4eIMkDJKkK5L1teo2em0ZVIO9t02v03DTyAiQPkOQBkjxAkry/11kkr7NIXmeRvM4ieZ1F8jqLhAJIVfL+HiDJAySpCuS9bXqNnptGVSDvbdNr9Nw08gIkD5DkAZI8QJK8fz6tqPI6S/rYEzw+CSUqr7Pw2CoZPHuq8qOfXiOHESlsNvD4JPwqbCu5xmCBgG/eUcTMzMzMzP7XsnwDfZBBzPrYsbsAAAAASUVORK5CYII=" style="opacity: 0.5;">
                                                                <p>No Transactions Recorded</p>
                                                                <p class="font-light">You have not made any transactions yet</p>
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
   NavMobile,
   NavDesktop
  }
}
</script>

<style>

</style>