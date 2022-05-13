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
        <div class="wallet-wrapper"><br>
            <div class="ui three column doubling stackable grid container">
                <div class="sixteen wide column">
                    <div class="ui fluid icon input" style="margin-top: 10px; margin-bottom: 40px;"><input type="text" placeholder="Enter contract address of NFT" style="border: none; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"><i class="search icon"></i></div>
                    <div>
                        <h2 class="font-bold" style="font-weight: 400; margin-bottom: 0px;">Top creators globally</h2><span class="text-muted">These are the top creators whose collections have traded the most volume</span>
                        <div>
                            <div style="margin-top: 30px;">
                                <div class="slick-slider slick-initialized" dir="ltr">
                                    <div class="slick-list">
                                        <div class="slick-track" style="width: 2740px; opacity: 1; transform: translate3d(0px, 0px, 0px);">
                                            <div data-index="0" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" style="outline: none; width: 274px;">
                                                <div><a tabindex="-1" href="/wallet/nft/azuki" style="width: 100%; display: inline-block;">
                                                        <div class="ui card mappa" style="background-color: antiquewhite;">
                                                            <div class="content" style="padding: 30px 30px 20px;">
                                                                <div class="center aligned header">TeamAzuki</div>
                                                                <div class="center aligned description"><img class="ui avatar image" src="https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s130" style="height: 80px; width: 80px;"></div>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                            </div>
                                            <div data-index="1" class="slick-slide slick-active" tabindex="-1" aria-hidden="false" style="outline: none; width: 274px;">
                                                <div><a tabindex="-1" href="/wallet/nft/boredapeyachtclub" style="width: 100%; display: inline-block;">
                                                        <div class="ui card mappa" style="background-color: beige;">
                                                            <div class="content" style="padding: 30px 30px 20px;">
                                                                <div class="center aligned header">BoredApeYachtClub</div>
                                                                <div class="center aligned description"><img class="ui avatar image" src="https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s130" style="height: 80px; width: 80px;"></div>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                            </div>
                                            <div data-index="2" class="slick-slide" tabindex="-1" aria-hidden="true" style="outline: none; width: 274px;">
                                                <div><a tabindex="-1" href="/wallet/nft/mutant-ape-yacht-club" style="width: 100%; display: inline-block;">
                                                        <div class="ui card mappa" style="background-color: white;">
                                                            <div class="content" style="padding: 30px 30px 20px;">
                                                                <div class="center aligned header">MutantApeYachtClub</div>
                                                                <div class="center aligned description"><img class="ui avatar image" src="https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s130" style="height: 80px; width: 80px;"></div>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                            </div>
                                            <div data-index="3" class="slick-slide" tabindex="-1" aria-hidden="true" style="outline: none; width: 274px;">
                                                <div><a tabindex="-1" href="/wallet/nft/doodles-official" style="width: 100%; display: inline-block;">
                                                        <div class="ui card mappa" style="background-color: ghostwhite;">
                                                            <div class="content" style="padding: 30px 30px 20px;">
                                                                <div class="center aligned header">Doodles_LLC</div>
                                                                <div class="center aligned description"><img class="ui avatar image" src="https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s130" style="height: 80px; width: 80px;"></div>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                            </div>
                                            <div data-index="4" class="slick-slide" tabindex="-1" aria-hidden="true" style="outline: none; width: 274px;">
                                                <div><a tabindex="-1" href="/wallet/nft/clonex" style="width: 100%; display: inline-block;">
                                                        <div class="ui card mappa" style="background-color: aquamarine;">
                                                            <div class="content" style="padding: 30px 30px 20px;">
                                                                <div class="center aligned header">RTFKTCloneXVial</div>
                                                                <div class="center aligned description"><img class="ui avatar image" src="https://lh3.googleusercontent.com/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg=s130" style="height: 80px; width: 80px;"></div>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                            </div>
                                            <div data-index="5" class="slick-slide" tabindex="-1" aria-hidden="true" style="outline: none; width: 274px;">
                                                <div><a tabindex="-1" href="/wallet/nft/cryptopunks" style="width: 100%; display: inline-block;">
                                                        <div class="ui card mappa" style="background-color: gainsboro;">
                                                            <div class="content" style="padding: 30px 30px 20px;">
                                                                <div class="center aligned header">Larva Labs</div>
                                                                <div class="center aligned description"><img class="ui avatar image" src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s130" style="height: 80px; width: 80px;"></div>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                            </div>
                                            <div data-index="6" class="slick-slide" tabindex="-1" aria-hidden="true" style="outline: none; width: 274px;">
                                                <div><a tabindex="-1" href="/wallet/nft/deadfellaz" style="width: 100%; display: inline-block;">
                                                        <div class="ui card mappa" style="background-color: antiquewhite;">
                                                            <div class="content" style="padding: 30px 30px 20px;">
                                                                <div class="center aligned header">Deadfellaz</div>
                                                                <div class="center aligned description"><img class="ui avatar image" src="https://lh3.googleusercontent.com/seJEwLWJP3RAXrxboeG11qbc_MYrxwVrsxGH0s0qxvF68hefOjf5qrPSKkIknUTYzfvinOUPWbYBdM8VEtGEE980Qv2ti_GGd86OWQ=s130" style="height: 80px; width: 80px;"></div>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                            </div>
                                            <div data-index="7" class="slick-slide" tabindex="-1" aria-hidden="true" style="outline: none; width: 274px;">
                                                <div><a tabindex="-1" href="/wallet/nft/genesis-creepz" style="width: 100%; display: inline-block;">
                                                        <div class="ui card mappa" style="background-color: aliceblue;">
                                                            <div class="content" style="padding: 30px 30px 20px;">
                                                                <div class="center aligned header">Genesis-Creepz-OVERLORD</div>
                                                                <div class="center aligned description"><img class="ui avatar image" src="https://lh3.googleusercontent.com/r_FGZQ0mgacLAOzH1MxC9n-yyygNmg37QyjYvM3g4HCl1mOkeGif7_8IW62v_R4Tvx9O9EWdHkNmiQQW30DNxwcvuSbg5EM1FQeSDIo=s130" style="height: 80px; width: 80px;"></div>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                            </div>
                                            <div data-index="8" class="slick-slide" tabindex="-1" aria-hidden="true" style="outline: none; width: 274px;">
                                                <div><a tabindex="-1" href="/wallet/nft/supernormalbyzipcy" style="width: 100%; display: inline-block;">
                                                        <div class="ui card mappa" style="background-color: beige;">
                                                            <div class="content" style="padding: 30px 30px 20px;">
                                                                <div class="center aligned header">SuperNormalTeam</div>
                                                                <div class="center aligned description"><img class="ui avatar image" src="https://lh3.googleusercontent.com/cZ0lurTxSFfA6lZ_5670kU-GB_okeuTv1QSxCWWF_A0goQOGnRxZvVIOnHl3Rkfeqq-Gdmn0CZbcR7_N_UYM00gJD3w7nCwEU0Ns8yY=s130" style="height: 80px; width: 80px;"></div>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                            </div>
                                            <div data-index="9" class="slick-slide" tabindex="-1" aria-hidden="true" style="outline: none; width: 274px;">
                                                <div><a tabindex="-1" href="/wallet/nft/livesofasuna" style="width: 100%; display: inline-block;">
                                                        <div class="ui card mappa" style="background-color: ghostwhite;">
                                                            <div class="content" style="padding: 30px 30px 20px;">
                                                                <div class="center aligned header">Lives_of_Asuna</div>
                                                                <div class="center aligned description"><img class="ui avatar image" src="https://lh3.googleusercontent.com/8JqiF7Kar1LRGnh4j6o2niMjrkqaK-XOr1h7MPkiYbjP0vaOIMzLnOp50Q_xKnrDNEScmnbii4IRjrGIXKUfjKI7iM7VdxGeX_cy=s130" style="height: 80px; width: 80px;"></div>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="slick-dots" style="display: block;">
                                        <li class="slick-active"><button>1</button></li>
                                        <li class=""><button>2</button></li>
                                        <li class=""><button>3</button></li>
                                        <li class=""><button>4</button></li>
                                        <li class=""><button>5</button></li>
                                        <li class=""><button>6</button></li>
                                        <li class=""><button>7</button></li>
                                        <li class=""><button>8</button></li>
                                        <li class=""><button>9</button></li>
                                        <li class=""><button>10</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div><br>
                    <div style="margin-top: 50px; margin-bottom: 50px;">
                        <div class="ui card w-100"><img class="img-save" src="/static/media/nfts.55ab9ab4.png"></div>
                    </div>
                    <div class="hidden-m" style="margin-top: 50px; margin-bottom: 100px;">
                        <h2 class="font-bold" style="font-weight: 400; margin-bottom: 0px;">Trending globally &nbsp;🚀</h2><span class="text-muted">Showing volume and growth for the last 7 days</span>
                        <div>
                            <div style="margin-top: 30px;">
                                <div class="ui three column grid" style="margin-top: 30px;">
                                    <div class="ui column hover-item" style="padding: 20px; border-bottom: 1px solid rgb(235, 235, 235); height: 100px;"><a href="/wallet/nft/azuki">
                                            <div class="ui items">
                                                <div class="item" style="height: 60px;">
                                                    <p style="margin-top: 20px; margin-right: 20px; color: black;">1</p><a class="ui tiny image" style="width: 60px;"><img class="ui avatar image" src="https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s130" style="height: 100%; width: 100%; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></a>
                                                    <div class="content" style="padding-left: 10px; line-height: 0.7em; padding-top: 15px;"><span style="color: black;">Azuki</span>
                                                        <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>31,821.05</span></span><span class="right floated star text-green" style="font-size: 12px;"><i class="caret icon up"></i><span>+3.12%</span></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                    <div class="ui column hover-item" style="padding: 20px; border-bottom: 1px solid rgb(235, 235, 235); height: 100px;"><a href="/wallet/nft/boredapeyachtclub">
                                            <div class="ui items">
                                                <div class="item" style="height: 60px;">
                                                    <p style="margin-top: 20px; margin-right: 20px; color: black;">2</p><a class="ui tiny image" style="width: 60px;"><img class="ui avatar image" src="https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s130" style="height: 100%; width: 100%; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></a>
                                                    <div class="content" style="padding-left: 10px; line-height: 0.7em; padding-top: 15px;"><span style="color: black;">Bored Ape Yacht C...</span>
                                                        <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>12,484.14</span></span><span class="right floated star text-red" style="font-size: 12px;"><i class="caret icon down"></i><span>-0.65%</span></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                    <div class="ui column hover-item" style="padding: 20px; border-bottom: 1px solid rgb(235, 235, 235); height: 100px;"><a href="/wallet/nft/mutant-ape-yacht-club">
                                            <div class="ui items">
                                                <div class="item" style="height: 60px;">
                                                    <p style="margin-top: 20px; margin-right: 20px; color: black;">3</p><a class="ui tiny image" style="width: 60px;"><img class="ui avatar image" src="https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s130" style="height: 100%; width: 100%; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></a>
                                                    <div class="content" style="padding-left: 10px; line-height: 0.7em; padding-top: 15px;"><span style="color: black;">Mutant Ape Yacht ...</span>
                                                        <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>11,885.04</span></span><span class="right floated star text-red" style="font-size: 12px;"><i class="caret icon down"></i><span>-0.66%</span></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                    <div class="ui column hover-item" style="padding: 20px; border-bottom: 1px solid rgb(235, 235, 235); height: 100px;"><a href="/wallet/nft/doodles-official">
                                            <div class="ui items">
                                                <div class="item" style="height: 60px;">
                                                    <p style="margin-top: 20px; margin-right: 20px; color: black;">4</p><a class="ui tiny image" style="width: 60px;"><img class="ui avatar image" src="https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s130" style="height: 100%; width: 100%; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></a>
                                                    <div class="content" style="padding-left: 10px; line-height: 0.7em; padding-top: 15px;"><span style="color: black;">Doodles</span>
                                                        <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>8,919.06</span></span><span class="right floated star text-green" style="font-size: 12px;"><i class="caret icon up"></i><span>+0.07%</span></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                    <div class="ui column hover-item" style="padding: 20px; border-bottom: 1px solid rgb(235, 235, 235); height: 100px;"><a href="/wallet/nft/clonex">
                                            <div class="ui items">
                                                <div class="item" style="height: 60px;">
                                                    <p style="margin-top: 20px; margin-right: 20px; color: black;">5</p><a class="ui tiny image" style="width: 60px;"><img class="ui avatar image" src="https://lh3.googleusercontent.com/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg=s130" style="height: 100%; width: 100%; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></a>
                                                    <div class="content" style="padding-left: 10px; line-height: 0.7em; padding-top: 15px;"><span style="color: black;">CLONE X - X TAKAS...</span>
                                                        <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>6,407.78</span></span><span class="right floated star text-red" style="font-size: 12px;"><i class="caret icon down"></i><span>-0.17%</span></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                    <div class="ui column hover-item" style="padding: 20px; border-bottom: 1px solid rgb(235, 235, 235); height: 100px;"><a href="/wallet/nft/cryptopunks">
                                            <div class="ui items">
                                                <div class="item" style="height: 60px;">
                                                    <p style="margin-top: 20px; margin-right: 20px; color: black;">6</p><a class="ui tiny image" style="width: 60px;"><img class="ui avatar image" src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s130" style="height: 100%; width: 100%; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></a>
                                                    <div class="content" style="padding-left: 10px; line-height: 0.7em; padding-top: 15px;"><span style="color: black;">CryptoPunks</span>
                                                        <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>1,824.65</span></span><span class="right floated star text-red" style="font-size: 12px;"><i class="caret icon down"></i><span>-0.58%</span></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                    <div class="ui column hover-item" style="padding: 20px; border-bottom: 1px solid rgb(235, 235, 235); height: 100px;"><a href="/wallet/nft/deadfellaz">
                                            <div class="ui items">
                                                <div class="item" style="height: 60px;">
                                                    <p style="margin-top: 20px; margin-right: 20px; color: black;">7</p><a class="ui tiny image" style="width: 60px;"><img class="ui avatar image" src="https://lh3.googleusercontent.com/seJEwLWJP3RAXrxboeG11qbc_MYrxwVrsxGH0s0qxvF68hefOjf5qrPSKkIknUTYzfvinOUPWbYBdM8VEtGEE980Qv2ti_GGd86OWQ=s130" style="height: 100%; width: 100%; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></a>
                                                    <div class="content" style="padding-left: 10px; line-height: 0.7em; padding-top: 15px;"><span style="color: black;">DeadFellaz</span>
                                                        <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>257.36</span></span><span class="right floated star text-red" style="font-size: 12px;"><i class="caret icon down"></i><span>-0.44%</span></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                    <div class="ui column hover-item" style="padding: 20px; border-bottom: 1px solid rgb(235, 235, 235); height: 100px;"><a href="/wallet/nft/genesis-creepz">
                                            <div class="ui items">
                                                <div class="item" style="height: 60px;">
                                                    <p style="margin-top: 20px; margin-right: 20px; color: black;">8</p><a class="ui tiny image" style="width: 60px;"><img class="ui avatar image" src="https://lh3.googleusercontent.com/r_FGZQ0mgacLAOzH1MxC9n-yyygNmg37QyjYvM3g4HCl1mOkeGif7_8IW62v_R4Tvx9O9EWdHkNmiQQW30DNxwcvuSbg5EM1FQeSDIo=s130" style="height: 100%; width: 100%; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></a>
                                                    <div class="content" style="padding-left: 10px; line-height: 0.7em; padding-top: 15px;"><span style="color: black;">Creepz Genesis</span>
                                                        <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>175.84</span></span><span class="right floated star text-red" style="font-size: 12px;"><i class="caret icon down"></i><span>-0.48%</span></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                    <div class="ui column hover-item" style="padding: 20px; border-bottom: 1px solid rgb(235, 235, 235); height: 100px;"><a href="/wallet/nft/supernormalbyzipcy">
                                            <div class="ui items">
                                                <div class="item" style="height: 60px;">
                                                    <p style="margin-top: 20px; margin-right: 20px; color: black;">9</p><a class="ui tiny image" style="width: 60px;"><img class="ui avatar image" src="https://lh3.googleusercontent.com/cZ0lurTxSFfA6lZ_5670kU-GB_okeuTv1QSxCWWF_A0goQOGnRxZvVIOnHl3Rkfeqq-Gdmn0CZbcR7_N_UYM00gJD3w7nCwEU0Ns8yY=s130" style="height: 100%; width: 100%; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></a>
                                                    <div class="content" style="padding-left: 10px; line-height: 0.7em; padding-top: 15px;"><span style="color: black;">Zipcy's SuperNormal</span>
                                                        <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>36.03</span></span><span class="right floated star text-red" style="font-size: 12px;"><i class="caret icon down"></i><span>-0.39%</span></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                    <div class="ui column hover-item" style="padding: 20px; border-bottom: 1px solid rgb(235, 235, 235); height: 100px;"><a href="/wallet/nft/livesofasuna">
                                            <div class="ui items">
                                                <div class="item" style="height: 60px;">
                                                    <p style="margin-top: 20px; margin-right: 20px; color: black;">10</p><a class="ui tiny image" style="width: 60px;"><img class="ui avatar image" src="https://lh3.googleusercontent.com/8JqiF7Kar1LRGnh4j6o2niMjrkqaK-XOr1h7MPkiYbjP0vaOIMzLnOp50Q_xKnrDNEScmnbii4IRjrGIXKUfjKI7iM7VdxGeX_cy=s130" style="height: 100%; width: 100%; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></a>
                                                    <div class="content" style="padding-left: 10px; line-height: 0.7em; padding-top: 15px;"><span style="color: black;">Lives of Asuna</span>
                                                        <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>17.50</span></span><span class="right floated star text-red" style="font-size: 12px;"><i class="caret icon down"></i><span>-0.34%</span></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                    <div class="ui column hover-item" style="padding: 20px; border-bottom: 1px solid rgb(235, 235, 235); height: 100px;"><a href="/wallet/nft/killergf">
                                            <div class="ui items">
                                                <div class="item" style="height: 60px;">
                                                    <p style="margin-top: 20px; margin-right: 20px; color: black;">11</p><a class="ui tiny image" style="width: 60px;"><img class="ui avatar image" src="https://lh3.googleusercontent.com/dLc9ST0dc0ILRQY4I-UDBixUY3K8z-NsGLp-cpks3gGqKlJ39a702EwK9ibmK2NAqyhxuE5eAqJAXG6B0nNtMguWnK_uNOmTwi5DvrE=s130" style="height: 100%; width: 100%; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></a>
                                                    <div class="content" style="padding-left: 10px; line-height: 0.7em; padding-top: 15px;"><span style="color: black;">Killer GF</span>
                                                        <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>15.42</span></span><span class="right floated star text-red" style="font-size: 12px;"><i class="caret icon down"></i><span>-0.36%</span></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                    <div class="ui column hover-item" style="padding: 20px; border-bottom: 1px solid rgb(235, 235, 235); height: 100px;"><a href="/wallet/nft/fishyfam">
                                            <div class="ui items">
                                                <div class="item" style="height: 60px;">
                                                    <p style="margin-top: 20px; margin-right: 20px; color: black;">12</p><a class="ui tiny image" style="width: 60px;"><img class="ui avatar image" src="https://lh3.googleusercontent.com/5Yq4zTYC55Ntc2KMb46quvtHkR23sEyyclexQY51jRvOpJLCqpvQ8ZZB-az5UgEVQYyuF1Wi5wXa43GrNJTqLDF8b9JZskuFsTzeqw=s130" style="height: 100%; width: 100%; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></a>
                                                    <div class="content" style="padding-left: 10px; line-height: 0.7em; padding-top: 15px;"><span style="color: black;">FishyFam</span>
                                                        <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>9.32</span></span><span class="right floated star text-red" style="font-size: 12px;"><i class="caret icon down"></i><span>-0.27%</span></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                    <div class="ui column hover-item" style="padding: 20px; border-bottom: 1px solid rgb(235, 235, 235); height: 100px;"><a href="/wallet/nft/undead-pastel-club">
                                            <div class="ui items">
                                                <div class="item" style="height: 60px;">
                                                    <p style="margin-top: 20px; margin-right: 20px; color: black;">13</p><a class="ui tiny image" style="width: 60px;"><img class="ui avatar image" src="https://lh3.googleusercontent.com/dvcrWjYHh83wdOgOXChJioqkF_NtvHKOi63a8j33iivXMEtpGWQr6HQJ53N5RI8xWtKvK2PvN4XTjrgjVD0MUvWIGuKAGU697ReRaQ=s130" style="height: 100%; width: 100%; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></a>
                                                    <div class="content" style="padding-left: 10px; line-height: 0.7em; padding-top: 15px;"><span style="color: black;">Undead Pastel Club</span>
                                                        <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>0.76</span></span><span class="right floated star text-red" style="font-size: 12px;"><i class="caret icon down"></i><span>-0.05%</span></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                    <div class="ui column hover-item" style="padding: 20px; border-bottom: 1px solid rgb(235, 235, 235); height: 100px;"><a href="/wallet/nft/qudqwd-1">
                                            <div class="ui items">
                                                <div class="item" style="height: 60px;">
                                                    <p style="margin-top: 20px; margin-right: 20px; color: black;">14</p><a class="ui tiny image" style="width: 60px;"><img class="ui avatar image" src="https://lh3.googleusercontent.com/a3k_-JoPhVHrpiJzUutxIrne453-aebTF3TE9ElLGevdJ5iu4Zfyt_Ri6tcz8FXPlDkXKW1G4nrRpQ-5pRyNB4VIuS18QEOoYBg3ww=s130" style="height: 100%; width: 100%; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></a>
                                                    <div class="content" style="padding-left: 10px; line-height: 0.7em; padding-top: 15px;"><span style="color: black;">Meta Doge Meta Do...</span>
                                                        <div class="description"><span class="left floated like" style="font-size: 12px;">--</span><span class="right floated star" style="font-size: 12px;">--</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                    <div class="ui column hover-item" style="padding: 20px; border-bottom: 1px solid rgb(235, 235, 235); height: 100px;"><a href="/wallet/nft/v1-cryptopunks-wrapped">
                                            <div class="ui items">
                                                <div class="item" style="height: 60px;">
                                                    <p style="margin-top: 20px; margin-right: 20px; color: black;">15</p><a class="ui tiny image" style="width: 60px;"><img class="ui avatar image" src="https://lh3.googleusercontent.com/2y7QPhtqjJI-1ZI3zyT457WMIabXfN7xsQAeQixFieHihGE2immajlAXr_GnNeCoZBWXvV10aeDPwBTgsV-Adwc2lraxkn3DG0AJdGk=s130" style="height: 100%; width: 100%; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></a>
                                                    <div class="content" style="padding-left: 10px; line-height: 0.7em; padding-top: 15px;"><span style="color: black;">V1 CryptoPunks Wr...</span>
                                                        <div class="description"><span class="left floated like" style="font-size: 12px;">--</span><span class="right floated star" style="font-size: 12px;">--</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="desktop-remove" style="margin-top: 50px; margin-bottom: 50px;">
                        <h2 class="font-bold" style="font-weight: 400; margin-bottom: 0px;">Trending globally &nbsp;🚀</h2><span class="text-muted">Showing volume and growth for the last 7 days</span>
                        <div>
                            <div style="margin-top: 30px;">
                                <div class="ui internally celled grid" style="margin-top: 30px;">
                                    <div class="row">
                                        <div class="two wide column">
                                            <p style="margin-top: 22px; color: black;">1</p>
                                        </div>
                                        <div class="four wide column"><img class="ui avatar image" src="https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s130" style="height: 70px; width: 70px; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></div>
                                        <div class="ten wide column"><span style="color: black; display: block; margin-top: 17px;">Azuki</span>
                                            <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>31,821.05</span></span><span class="right floated star text-green" style="font-size: 12px; float: right;"><i class="caret icon up"></i><span>+3.12%</span></span></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="two wide column">
                                            <p style="margin-top: 22px; color: black;">2</p>
                                        </div>
                                        <div class="four wide column"><img class="ui avatar image" src="https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s130" style="height: 70px; width: 70px; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></div>
                                        <div class="ten wide column"><span style="color: black; display: block; margin-top: 17px;">Bored Ape Yacht C...</span>
                                            <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>12,484.14</span></span><span class="right floated star text-red" style="font-size: 12px; float: right;"><i class="caret icon down"></i><span>-0.65%</span></span></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="two wide column">
                                            <p style="margin-top: 22px; color: black;">3</p>
                                        </div>
                                        <div class="four wide column"><img class="ui avatar image" src="https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s130" style="height: 70px; width: 70px; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></div>
                                        <div class="ten wide column"><span style="color: black; display: block; margin-top: 17px;">Mutant Ape Yacht ...</span>
                                            <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>11,885.04</span></span><span class="right floated star text-red" style="font-size: 12px; float: right;"><i class="caret icon down"></i><span>-0.66%</span></span></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="two wide column">
                                            <p style="margin-top: 22px; color: black;">4</p>
                                        </div>
                                        <div class="four wide column"><img class="ui avatar image" src="https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s130" style="height: 70px; width: 70px; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></div>
                                        <div class="ten wide column"><span style="color: black; display: block; margin-top: 17px;">Doodles</span>
                                            <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>8,919.06</span></span><span class="right floated star text-green" style="font-size: 12px; float: right;"><i class="caret icon up"></i><span>+0.07%</span></span></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="two wide column">
                                            <p style="margin-top: 22px; color: black;">5</p>
                                        </div>
                                        <div class="four wide column"><img class="ui avatar image" src="https://lh3.googleusercontent.com/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg=s130" style="height: 70px; width: 70px; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></div>
                                        <div class="ten wide column"><span style="color: black; display: block; margin-top: 17px;">CLONE X - X TAKAS...</span>
                                            <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>6,407.78</span></span><span class="right floated star text-red" style="font-size: 12px; float: right;"><i class="caret icon down"></i><span>-0.17%</span></span></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="two wide column">
                                            <p style="margin-top: 22px; color: black;">6</p>
                                        </div>
                                        <div class="four wide column"><img class="ui avatar image" src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s130" style="height: 70px; width: 70px; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></div>
                                        <div class="ten wide column"><span style="color: black; display: block; margin-top: 17px;">CryptoPunks</span>
                                            <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>1,824.65</span></span><span class="right floated star text-red" style="font-size: 12px; float: right;"><i class="caret icon down"></i><span>-0.58%</span></span></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="two wide column">
                                            <p style="margin-top: 22px; color: black;">7</p>
                                        </div>
                                        <div class="four wide column"><img class="ui avatar image" src="https://lh3.googleusercontent.com/seJEwLWJP3RAXrxboeG11qbc_MYrxwVrsxGH0s0qxvF68hefOjf5qrPSKkIknUTYzfvinOUPWbYBdM8VEtGEE980Qv2ti_GGd86OWQ=s130" style="height: 70px; width: 70px; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></div>
                                        <div class="ten wide column"><span style="color: black; display: block; margin-top: 17px;">DeadFellaz</span>
                                            <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>257.36</span></span><span class="right floated star text-red" style="font-size: 12px; float: right;"><i class="caret icon down"></i><span>-0.44%</span></span></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="two wide column">
                                            <p style="margin-top: 22px; color: black;">8</p>
                                        </div>
                                        <div class="four wide column"><img class="ui avatar image" src="https://lh3.googleusercontent.com/r_FGZQ0mgacLAOzH1MxC9n-yyygNmg37QyjYvM3g4HCl1mOkeGif7_8IW62v_R4Tvx9O9EWdHkNmiQQW30DNxwcvuSbg5EM1FQeSDIo=s130" style="height: 70px; width: 70px; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></div>
                                        <div class="ten wide column"><span style="color: black; display: block; margin-top: 17px;">Creepz Genesis</span>
                                            <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>175.84</span></span><span class="right floated star text-red" style="font-size: 12px; float: right;"><i class="caret icon down"></i><span>-0.48%</span></span></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="two wide column">
                                            <p style="margin-top: 22px; color: black;">9</p>
                                        </div>
                                        <div class="four wide column"><img class="ui avatar image" src="https://lh3.googleusercontent.com/cZ0lurTxSFfA6lZ_5670kU-GB_okeuTv1QSxCWWF_A0goQOGnRxZvVIOnHl3Rkfeqq-Gdmn0CZbcR7_N_UYM00gJD3w7nCwEU0Ns8yY=s130" style="height: 70px; width: 70px; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></div>
                                        <div class="ten wide column"><span style="color: black; display: block; margin-top: 17px;">Zipcy's SuperNormal</span>
                                            <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>36.03</span></span><span class="right floated star text-red" style="font-size: 12px; float: right;"><i class="caret icon down"></i><span>-0.39%</span></span></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="two wide column">
                                            <p style="margin-top: 22px; color: black;">10</p>
                                        </div>
                                        <div class="four wide column"><img class="ui avatar image" src="https://lh3.googleusercontent.com/8JqiF7Kar1LRGnh4j6o2niMjrkqaK-XOr1h7MPkiYbjP0vaOIMzLnOp50Q_xKnrDNEScmnbii4IRjrGIXKUfjKI7iM7VdxGeX_cy=s130" style="height: 70px; width: 70px; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></div>
                                        <div class="ten wide column"><span style="color: black; display: block; margin-top: 17px;">Lives of Asuna</span>
                                            <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>17.50</span></span><span class="right floated star text-red" style="font-size: 12px; float: right;"><i class="caret icon down"></i><span>-0.34%</span></span></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="two wide column">
                                            <p style="margin-top: 22px; color: black;">11</p>
                                        </div>
                                        <div class="four wide column"><img class="ui avatar image" src="https://lh3.googleusercontent.com/dLc9ST0dc0ILRQY4I-UDBixUY3K8z-NsGLp-cpks3gGqKlJ39a702EwK9ibmK2NAqyhxuE5eAqJAXG6B0nNtMguWnK_uNOmTwi5DvrE=s130" style="height: 70px; width: 70px; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></div>
                                        <div class="ten wide column"><span style="color: black; display: block; margin-top: 17px;">Killer GF</span>
                                            <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>15.42</span></span><span class="right floated star text-red" style="font-size: 12px; float: right;"><i class="caret icon down"></i><span>-0.36%</span></span></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="two wide column">
                                            <p style="margin-top: 22px; color: black;">12</p>
                                        </div>
                                        <div class="four wide column"><img class="ui avatar image" src="https://lh3.googleusercontent.com/5Yq4zTYC55Ntc2KMb46quvtHkR23sEyyclexQY51jRvOpJLCqpvQ8ZZB-az5UgEVQYyuF1Wi5wXa43GrNJTqLDF8b9JZskuFsTzeqw=s130" style="height: 70px; width: 70px; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></div>
                                        <div class="ten wide column"><span style="color: black; display: block; margin-top: 17px;">FishyFam</span>
                                            <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>9.32</span></span><span class="right floated star text-red" style="font-size: 12px; float: right;"><i class="caret icon down"></i><span>-0.27%</span></span></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="two wide column">
                                            <p style="margin-top: 22px; color: black;">13</p>
                                        </div>
                                        <div class="four wide column"><img class="ui avatar image" src="https://lh3.googleusercontent.com/dvcrWjYHh83wdOgOXChJioqkF_NtvHKOi63a8j33iivXMEtpGWQr6HQJ53N5RI8xWtKvK2PvN4XTjrgjVD0MUvWIGuKAGU697ReRaQ=s130" style="height: 70px; width: 70px; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></div>
                                        <div class="ten wide column"><span style="color: black; display: block; margin-top: 17px;">Undead Pastel Club</span>
                                            <div class="description"><span class="left floated like" style="font-size: 12px;"><i class="ethereum icon"></i><span>0.76</span></span><span class="right floated star text-red" style="font-size: 12px; float: right;"><i class="caret icon down"></i><span>-0.05%</span></span></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="two wide column">
                                            <p style="margin-top: 22px; color: black;">14</p>
                                        </div>
                                        <div class="four wide column"><img class="ui avatar image" src="https://lh3.googleusercontent.com/a3k_-JoPhVHrpiJzUutxIrne453-aebTF3TE9ElLGevdJ5iu4Zfyt_Ri6tcz8FXPlDkXKW1G4nrRpQ-5pRyNB4VIuS18QEOoYBg3ww=s130" style="height: 70px; width: 70px; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></div>
                                        <div class="ten wide column"><span style="color: black; display: block; margin-top: 17px;">Meta Doge Meta Do...</span>
                                            <div class="description"><span class="left floated like" style="font-size: 12px;">--</span><span class="right floated star" style="font-size: 12px; float: right;">--</span></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="two wide column">
                                            <p style="margin-top: 22px; color: black;">15</p>
                                        </div>
                                        <div class="four wide column"><img class="ui avatar image" src="https://lh3.googleusercontent.com/2y7QPhtqjJI-1ZI3zyT457WMIabXfN7xsQAeQixFieHihGE2immajlAXr_GnNeCoZBWXvV10aeDPwBTgsV-Adwc2lraxkn3DG0AJdGk=s130" style="height: 70px; width: 70px; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;"></div>
                                        <div class="ten wide column"><span style="color: black; display: block; margin-top: 17px;">V1 CryptoPunks Wr...</span>
                                            <div class="description"><span class="left floated like" style="font-size: 12px;">--</span><span class="right floated star" style="font-size: 12px; float: right;">--</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="scrollmenu">
                        <div class="ui secondary pointing menu selector-main" style="margin-bottom: 0px;"><a class="item w-50-m active">
                                <div class="text-center w-100">
                                    <p><i class="icon globe"></i> &nbsp; Recently Bought Globally</p>
                                </div>
                            </a><a class="item w-50-m">
                                <div class="text-center w-100">
                                    <p><i class="icon check circle"></i> &nbsp; Curated Collections</p>
                                </div>
                            </a><a class="item w-50-m">
                                <div class="text-center w-100">
                                    <p><i class="icon heart"></i> &nbsp; My Favorites</p>
                                </div>
                            </a><a class="item w-50-m">
                                <div class="text-center w-100">
                                    <p><i class="icon file alternate"></i> &nbsp; My NFTs</p>
                                </div>
                            </a><a class="item w-50-m">
                                <div class="text-center w-100">
                                    <p><i class="icon list alternate"></i> &nbsp; Open Bids</p>
                                </div>
                            </a></div>
                    </div>
                    <div style="padding-top: 0px;">
                        <div class="">
                            <div class="ui five column doubling grid" style="margin-top: 30px;"></div>
                        </div>
                        <div class="hide">
                            <div class="ui five column doubling grid" style="margin-top: 30px;">
                                <div class="ui column"><a class="malla" href="/wallet/nft/azuki">
                                        <div class="ui card"><img src="https://lh3.googleusercontent.com/teeWDrxgBMnC3HU9h1vvywc9RgSxwPrWO29MjznLls3GdQU1CJpCYTa3-k0NtAbikoBkDXzUsOWdVx5Lu92SnTWHBp3NrTk5KxOC7w=w335" class="ui image">
                                            <div class="content">
                                                <div class="header">Azuki</div>
                                                <div class="meta">TeamAzuki</div>
                                            </div>
                                            <div class="extra content"><a><i aria-hidden="true" class="ethereum icon"></i><span>8.8 ETH</span></a></div>
                                        </div>
                                    </a></div>
                                <div class="ui column"><a class="malla" href="/wallet/nft/boredapeyachtclub">
                                        <div class="ui card"><img src="https://lh3.googleusercontent.com/Q4uXff5hD6T91FlaDiqZTpMu-kEgwx6IcUHXsWF_Moq5u6VOvfqKuIXN2_StL78LNiA1YW3e16vnrLq_zqvfOMtK7PLy9AcKGxWr=w335" class="ui image">
                                            <div class="content">
                                                <div class="header">Bored Ape Ya...</div>
                                                <div class="meta">BoredApeYachtClub</div>
                                            </div>
                                            <div class="extra content"><a><i aria-hidden="true" class="ethereum icon"></i><span>92.95 ETH</span></a></div>
                                        </div>
                                    </a></div>
                                <div class="ui column"><a class="malla" href="/wallet/nft/mutant-ape-yacht-club">
                                        <div class="ui card"><img src="https://lh3.googleusercontent.com/yk3VcJeSYX8bZny9oTE77l1uab4e4RF1q4mFNM7LuiuxejrajOvhg3NAHfF4Xren7-zI6MrEdM7l_RslSt8EN10Q4i1hRKxxO51BFA=w600" class="ui image">
                                            <div class="content">
                                                <div class="header">Mutant Ape Y...</div>
                                                <div class="meta">MutantApeYachtClub</div>
                                            </div>
                                            <div class="extra content"><a><i aria-hidden="true" class="ethereum icon"></i><span>19.79 ETH</span></a></div>
                                        </div>
                                    </a></div>
                                <div class="ui column"><a class="malla" href="/wallet/nft/doodles-official">
                                        <div class="ui card"><img src="https://lh3.googleusercontent.com/Oh7DyWJHJWxqmc1w1Ws13ijBlDPh1AS-q-uREhhXAeYgGsLHHe_DljvYFfE6Np_9K5V4w1hJwu7FYYzDxI18Zxq0QG2f8GLOBmac=w335" class="ui image">
                                            <div class="content">
                                                <div class="header">Doodles</div>
                                                <div class="meta">Doodles_LLC</div>
                                            </div>
                                            <div class="extra content"><a><i aria-hidden="true" class="ethereum icon"></i><span>17.54 ETH</span></a></div>
                                        </div>
                                    </a></div>
                                <div class="ui column"><a class="malla" href="/wallet/nft/clonex">
                                        <div class="ui card"><img src="https://lh3.googleusercontent.com/TShDqM9Z1yVBORi-C-hdMYPTTXpErAEn__ifv5coH9_X0AhOSM6-J1i-EXb7951dbUHzybVsnJjKQKr9Smrg3z-RjN5IjDvbCY8j=w335" class="ui image">
                                            <div class="content">
                                                <div class="header">CLONE X - X ...</div>
                                                <div class="meta">RTFKTCloneXVial</div>
                                            </div>
                                            <div class="extra content"><a><i aria-hidden="true" class="ethereum icon"></i><span>13.7 ETH</span></a></div>
                                        </div>
                                    </a></div>
                                <div class="ui column"><a class="malla" href="/wallet/nft/cryptopunks">
                                        <div class="ui card"><img src="https://lh3.googleusercontent.com/P---uIyyQIteX6QwsuuGAA1X2XHHmZAfN5bWHoU9N-4KPiJ3yjYSZQZHmIBncDhLSLoSUvowunPu1EvFO3bArxSH=w335" class="ui image">
                                            <div class="content">
                                                <div class="header">CryptoPunks</div>
                                                <div class="meta">Larva Labs</div>
                                            </div>
                                            <div class="extra content"><a><i aria-hidden="true" class="ethereum icon"></i><span></span></a></div>
                                        </div>
                                    </a></div>
                                <div class="ui column"><a class="malla" href="/wallet/nft/deadfellaz">
                                        <div class="ui card"><img src="https://lh3.googleusercontent.com/V7Ou4VW14tXbd-Bv3dfr8g0Mqi8lMJy4UyjIyAUw0okFg6p3S3702bM2z-K8zXn9_41tJSPt_Rc6xIGZcGEijhiNsL1A4LpGl36CbA=w335" class="ui image">
                                            <div class="content">
                                                <div class="header">DeadFellaz</div>
                                                <div class="meta">Deadfellaz</div>
                                            </div>
                                            <div class="extra content"><a><i aria-hidden="true" class="ethereum icon"></i><span>1.26 ETH</span></a></div>
                                        </div>
                                    </a></div>
                                <div class="ui column"><a class="malla" href="/wallet/nft/genesis-creepz">
                                        <div class="ui card"><img src="https://lh3.googleusercontent.com/DTO42LPv9nSR-gzB9eZ8InN4gMI8VG_nbO5J7sqrWdZ1U4ykx3ThsV2W4vvSRg9qeJr9TQ6OV74VS4u9CYK9--NLBDv-6xaNsihIBA=w335" class="ui image">
                                            <div class="content">
                                                <div class="header">Creepz Genesis</div>
                                                <div class="meta">Genesis-Creepz-OVERLORD</div>
                                            </div>
                                            <div class="extra content"><a><i aria-hidden="true" class="ethereum icon"></i><span>1 ETH</span></a></div>
                                        </div>
                                    </a></div>
                                <div class="ui column"><a class="malla" href="/wallet/nft/supernormalbyzipcy">
                                        <div class="ui card"><img src="https://lh3.googleusercontent.com/tWTYb6e8sRzB_pSEgEUZllV7y2brv7_sDV_bdfHJSc0k6CS60Tcw8mSLdw3DM2LvsGg9p7E3hkSDAXT6qdXUYR5otdNDQsBPMWwaZA=w335" class="ui image">
                                            <div class="content">
                                                <div class="header">Zipcy's Supe...</div>
                                                <div class="meta">SuperNormalTeam</div>
                                            </div>
                                            <div class="extra content"><a><i aria-hidden="true" class="ethereum icon"></i><span>0.15 ETH</span></a></div>
                                        </div>
                                    </a></div>
                                <div class="ui column"><a class="malla" href="/wallet/nft/livesofasuna">
                                        <div class="ui card"><img src="https://lh3.googleusercontent.com/8JqiF7Kar1LRGnh4j6o2niMjrkqaK-XOr1h7MPkiYbjP0vaOIMzLnOp50Q_xKnrDNEScmnbii4IRjrGIXKUfjKI7iM7VdxGeX_cy=w335" class="ui image">
                                            <div class="content">
                                                <div class="header">Lives of Asuna</div>
                                                <div class="meta">Lives_of_Asuna</div>
                                            </div>
                                            <div class="extra content"><a><i aria-hidden="true" class="ethereum icon"></i><span>0.14 ETH</span></a></div>
                                        </div>
                                    </a></div>
                                <div class="ui column"><a class="malla" href="/wallet/nft/killergf">
                                        <div class="ui card"><img src="https://lh3.googleusercontent.com/IpXXBiDLe3Y5AxX7Kc4jIgMakL0cGjAsasz0O49TzPE6QyFX1ht_pVbj_2TvLQvx7ab-z00cK5Z_BemZ6UAYkejl4VJ3ybuvQNKoVA=w335" class="ui image">
                                            <div class="content">
                                                <div class="header">Killer GF</div>
                                                <div class="meta">KillerGFTeam</div>
                                            </div>
                                            <div class="extra content"><a><i aria-hidden="true" class="ethereum icon"></i><span>0.17 ETH</span></a></div>
                                        </div>
                                    </a></div>
                                <div class="ui column"><a class="malla" href="/wallet/nft/fishyfam">
                                        <div class="ui card"><img src="https://lh3.googleusercontent.com/-9n8D-cd-_3lReJOPCcoixl-sHFAlLMa91LWOGRHhVh7OD9gdW81SOrptpHuFOdAZawtk14KAg8jMicWnOJ9PUuGyOzvwuVac-Bl=w335" class="ui image">
                                            <div class="content">
                                                <div class="header">FishyFam</div>
                                                <div class="meta">HBAcrypto</div>
                                            </div>
                                            <div class="extra content"><a><i aria-hidden="true" class="ethereum icon"></i><span>0.06 ETH</span></a></div>
                                        </div>
                                    </a></div>
                                <div class="ui column"><a class="malla" href="/wallet/nft/undead-pastel-club">
                                        <div class="ui card"><img src="https://lh3.googleusercontent.com/pLvRP96Xh42-ZiqJQDl1eP-9XqdZafD9gCsamkeffHLBszpLtyPgNnXfAVdV0JJ0hOOubAjWyFeXXuwHPoi90W27y9GtQVhlYitHyg=w335" class="ui image">
                                            <div class="content">
                                                <div class="header">Undead Paste...</div>
                                                <div class="meta">Undead-Pastel-Club</div>
                                            </div>
                                            <div class="extra content"><a><i aria-hidden="true" class="ethereum icon"></i><span>0.01 ETH</span></a></div>
                                        </div>
                                    </a></div>
                                <div class="ui column"><a class="malla" href="/wallet/nft/qudqwd-1">
                                        <div class="ui card"><img src="https://lh3.googleusercontent.com/1GpIX0Goxg5LCGz-q99zzPJBUA94qt818DDXFLZv6DZvCep_K6Ly4QWGx6sxb1bqxOsDT1pfm3cbIU2HC5LK71vNko5org2yMyoF3Q=w335" class="ui image">
                                            <div class="content">
                                                <div class="header">Meta Doge Me...</div>
                                                <div class="meta">metadoge</div>
                                            </div>
                                            <div class="extra content"><a><i aria-hidden="true" class="ethereum icon"></i><span></span></a></div>
                                        </div>
                                    </a></div>
                                <div class="ui column"><a class="malla" href="/wallet/nft/v1-cryptopunks-wrapped">
                                        <div class="ui card"><img src="https://lh3.googleusercontent.com/c3N87-ImLLCAOxyufvqt8NI34TGtms1rMmFnbWDlVOO3UuSTnDa_-7pYiCz_jOP-IWoK8Z4llw4SRl0IGDn-ZJ9HRvxcUq8BOddvCA=w335" class="ui image">
                                            <div class="content">
                                                <div class="header">V1 CryptoPun...</div>
                                                <div class="meta">FrankNFT_eth</div>
                                            </div>
                                            <div class="extra content"><a><i aria-hidden="true" class="ethereum icon"></i><span></span></a></div>
                                        </div>
                                    </a></div>
                            </div>
                        </div>
                        <div class="hide">
                            <div class="text-center card-header" style="height: 400px; padding-top: 50px;">
                                <h2 class="font-bold" style="font-weight: 400;">Coming soon</h2><small class="text-muted">We're working hard to make this feature available soon, kindly check back later.</small><br>
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
   NavMobile,
   NavDesktop
  }
}
</script>

<style>

</style>