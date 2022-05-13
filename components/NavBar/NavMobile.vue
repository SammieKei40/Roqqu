<template>
  <div>
      <a class="launch icon item desktop-remove" style="padding-left: 10px;">
                            <i @click="openNav" class="content icon text-white" style="font-size: 1.4em; line-height: 2.5em;"></i>
                         </a>
                       
                        <div v-bind:style="{display}" class="back-drop" id="back-drop" ></div>
                     
                        <div v-bind:style="{width}" id="mySidenav" class="sidenav desktop-remove">
                            <a @click="closeNav" class="closebtn">×</a>
                            <div class="ui grid">
                                <div class="sixteen wide column text-center">
                                    <p style="margin-bottom: 0px;"><img class="user-icon logo-item" src="~/assets/img/user.png" style="border-radius: 50%; margin: 0px auto; padding: 0px;"></p>
                                    <div class="text-center"><span style="color: white;">Roqqu user</span>
                                        <h2 class="text-white" style="margin-top: 0px; font-weight: 500;"><span>NGN 0</span></h2>
                                    </div>
                                </div>
                            </div>
                            <div class="ui grid" style="background-color: white; height: 90%;">
                                <div class="sixteen wide column">
                                    <div class="header" style="padding-bottom: 10px; color: rgb(144, 144, 144);">Primary Currency</div>
                                    <div id="selectedPrimaryCurrency-sm" role="listbox" aria-expanded="false" class="ui fluid selection dropdown ui dropdown label" tabindex="0">
                                        <div class="default text" role="alert" aria-live="polite">NGN</div><i aria-hidden="true" class="dropdown icon"></i>
                                        <div class="menu transition">
                                            <div role="option" aria-checked="false" aria-selected="true" class="selected item" style="pointer-events: all;"><span class="text">NGN</span></div>
                                            <div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">USD</span></div>
                                            <div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">GBP</span></div>
                                        </div>
                                    </div>
                                    <div role="option" class="item"><i aria-hidden="true" class="question circle icon"></i><span class="text">Help</span></div>
                                    <div role="option" class="item"><i aria-hidden="true" class="info circle icon"></i><span class="text">About Roqqu</span></div>
                                    <div role="option" class="item"><i aria-hidden="true" class="cog icon icon"></i><span class="text">Settings</span></div>
                                    <div role="option" class="item"><i aria-hidden="true" class="sign-out icon"></i><span class="text">Sign out</span></div>
                                    <div class="divider"></div>
                                    <div class="header" style="padding-top: 15px; color: rgb(144, 144, 144);">Company</div>
                                    <div role="option" class="item"><span class="text">Terms of use</span></div>
                                    <div role="option" class="item"><span class="text">About Roqqu</span></div>
                                    <div role="option" class="item"><span class="text">Privacy policy</span></div>
                                </div>
                            </div>
                        </div>
  </div>
</template>

<script>
export default {
        data(){
        return {
                width: '0px',
                display: 'none'
        }
    },
    methods: {
        openNav(){
            this.$data.width = '300px'
            this.$data.display = 'block'
        },
        closeNav(){
            this.$data.width = '0px'
            this.$data.display = 'none'
        }
    }
  }

</script>

<style>

</style>