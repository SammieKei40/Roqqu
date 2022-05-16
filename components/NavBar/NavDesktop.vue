<template>
  <div>
      <div role="listbox" v-bind:class="{ isActive,  visible}" :aria-expanded="{aria}" class="ui dropdown hidden-m" tabindex="0">
                                    <div class="text" role="alert" aria-live="polite"></div>
                                    <i @click="openNav"  aria-hidden="true" class="bars icon"></i>
                                    <div v-bind:class="{ visible}" @click="closeNav" class="menu transition">
                                        <a  class="closebtn" style=" pointer: cursor;"></a>
                                        <div class="ui grid">
                                            <div class="sixteen wide column">
                                                <img  class="user-icon item logo-item" src="~/assets/img/user.png" style="border-radius: 50%; margin: 0px auto; padding: 0px;">
                                                <div class="text-center"><span style="color: darkgray;">Roqqu user</span>
                                                    <h2 class="text-blue" style="margin-top: 0px; font-weight: 500;"><span>NGN 0</span></h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="divider"></div>
                                        <div class="ui grid">
                                            <div class="sixteen wide column">
                                                <div class="header">Primary Currency</div>
                                                <div id="selectedPrimaryCurrency" role="listbox" aria-expanded="false" class="ui fluid selection dropdown ui dropdown label" tabindex="0">
                                                    <div class="default text" role="alert" aria-live="polite">NGN</div><i aria-hidden="true" class="dropdown icon"></i>
                                                    <div class="menu transition">
                                                        <div role="option" aria-checked="false" aria-selected="true" class="selected item" style="pointer-events: all;"><span class="text">NGN</span></div>
                                                        <div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">USD</span></div>
                                                        <div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">GBP</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="divider"></div>
                                        <div role="option" class="item"><i aria-hidden="true" class="question circle icon"></i><span class="text">Help</span></div>
                                        <div role="option" class="item"><i aria-hidden="true" class="info circle icon"></i><span class="text">About Roqqu</span></div>
                                        <div role="option" class="item"><i aria-hidden="true" class="sign-out icon"></i><span class="text">Sign out</span></div>
                                    </div>
                                </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isActive: false,
            visible: false,
            aria: false
        }
    },
    methods: {
        openNav(){
            this.$data.isActive = true
            this.$data.visible = true
            this.$data.aria = true
            this.$emit('close');

            console.log('Success')
        },
        closeNav(){
            this.$data.isActive = false
            this.$data.visible = false
            this.$data.aria = false

            console.log('Success')
        }
    }
}
</script>

<style>

</style>