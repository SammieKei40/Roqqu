<template>
  <div>
      <div class="ui grid container">
                                <div class="ui negative message" style="width: 100%; margin-bottom: 8px;">
                                    <p class="text-orange"><i class="icon circle info"></i> Your profile is incomplete, please fill your first name, last name and phone number and click on save.</p>
                                </div>
                                <nuxt />
                                <div class="w-100 p-0">
                                    <div class="ui card w-100">
                                        <div class="content">
                                            <h2 class="f-20" style="font-weight: 400;">Your Profile</h2>
                                        </div>
                                        <div class="ui large vertical menu w-100" style="display: none; border: none; box-shadow: none; margin-bottom: 0px;"><a class="item" style="padding: 0px;"></a></div>
                                        <div class="content" style="padding-top: 8px;">
                                            <div class="ui grid">
                                                <div class="two wide computer four wide mobile column"><img class="w-100 item logo-item" src="/static/media/user-icon.471a1ad3.png" style="margin: 5px auto; padding: 0px; border-radius: 50%;"></div>
                                                <div class="six wide computer twelve wide mobile column" style="border-right: 1px solid rgb(238, 238, 238);">
                                                    <p style="margin-top: 5px; margin-bottom: 0px;">Change profile image</p><small class="text-muted">Max file size of 1mb, preferably a 1X1 image</small><br><label for="uploadCaptureInputFile" title="Upload image" class="ui button" style="padding: 7px; font-size: 11px; margin-top: 5px;">Upload</label><input hidden="" type="file" id="uploadCaptureInputFile" class="inputfile">
                                                </div>
                                                <div class="eight wide computer sixteen wide mobile column">
                                                    <p style="margin-top: 5px; margin-bottom: 0px;"><i class="icon envelope"></i>&nbsp;&nbsp;Email authentication</p><small class="text-muted" style="display: block; padding-left: 30px;">Email authentication is automatically activated on your account</small>
                                                </div>
                                            </div>
                                            <hr style="border-width: 0.5px;">
                                            <form>
                                                <div class="ui grid">
                                                    <div class="eight wide computer sixteen wide mobile column ui form">
                                                        <div class="field"><span>First name</span>&nbsp;&nbsp;<small class="text-muted">(This is part of your public profile)</small><input spellcheck="false" type="text" name="fname" placeholder="First Name" value=""></div>
                                                    </div>
                                                    <div class="eight wide computer sixteen wide mobile column ui form">
                                                        <div class="field"><span>Last name</span>&nbsp;&nbsp;<input spellcheck="false" type="text" name="lname" placeholder="Last Name" value=""></div>
                                                    </div>
                                                </div>
                                                <div class="ui grid">
                                                    <div class="eight wide computer sixteen wide mobile column ui form">
                                                        <div class="field"><span>Phone Number</span>&nbsp;&nbsp;<div class="ui left labeled input" style="border: 1px solid red;">
                                                                <div class="ui basic label" style="width: 40px; border-right: 0px rgba(34, 36, 38, 0.15); padding: 5px; border-top-color: rgba(34, 36, 38, 0.15); border-bottom-color: rgba(34, 36, 38, 0.15); border-left-color: rgba(34, 36, 38, 0.15);"><img src="/static/media/nigeria.b6bce092.svg" style="padding: 4px; margin-left: 8px; margin-top: 3px;"></div><input required="" type="number" placeholder="080xxxxxxxx" name="phone" value="" style="border-left: 0px;">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="eight wide computer sixteen wide mobile column ui form">
                                                        <div class="field"><span>Primary Email Address</span>&nbsp;&nbsp;<small class="text-muted">(We'll never share your email with anyone)</small>
                                                            <div class="ui icon input field w-100"><input disabled="" type="email" spellcheck="false" required="" name="email" placeholder="Email address" value="shodiposamuel1@gmail.com"><i class="check text-green link icon" title="Your email is verified"></i></div>
                                                        </div>
                                                    </div>
                                                </div><button class="ui button blue btn right floated w-100-m" type="submit">Save Changes</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>