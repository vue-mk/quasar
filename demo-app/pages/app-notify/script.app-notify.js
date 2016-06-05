module.exports=function(i){function t(o){if(n[o])return n[o].exports;var s=n[o]={exports:{},id:o,loaded:!1};return i[o].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=i,t.c=n,t.p="",t(0)}({0:function(i,t,n){i.exports=n(7)},7:function(i,t,n){"use strict";var o=n(8);i.exports={template:o,data:{types:["positive","negative","info","warning"],notifyShowing:!1},methods:{basicNotify:function(){quasar.notify("Basic notify. Can be dismissed by swiping it left or right.")},basicNotifyWithLongMessage:function(){quasar.notify("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")},notifyWithType:function(i){console.log(i),quasar.notify[i]({html:quasar.capitalize(i)+" notify"})},noTimeoutNotify:function(){quasar.notify({html:"This notify won't timeout. User must acknowledge it.",timeout:0})},notifyWithIcon:function(){quasar.notify({html:"Notify with an icon",icon:"camera_enhance"})},notifyWithButton:function(){quasar.notify({html:"Notify with an action button",button:{label:"Undo",handler:function(){quasar.notify.positive("Undone!")}}})},showNotify:function(){if(!this.notifyShowing){var i=this;this.notify=quasar.notify({html:"Dismiss this notify with nearby Dissmiss Notify button",timeout:0,onDismiss:function(){i.notifyShowing=!1}}),this.notifyShowing=!0}},dismissNotify:function(){this.notifyShowing&&(this.notify.dismiss(),this.notifyShowing=!1)},showMultipleNotifiers:function(){this.types.forEach(function(i){this.notifyWithType(i)}.bind(this))}}}},8:function(i,t){i.exports='<div class="screen-bar shadow-1 fixed-top">Quasar App Notify</div>\n\n<h5>Basic Notifiers</h5>\n<p>\n  <button class="primary" @click="basicNotify()">\n    Basic Notify\n  </button>\n\n  <button class="primary" @click="basicNotifyWithLongMessage()">\n    Basic Notify with Long Message\n  </button>\n</p>\n\n<h5>Types of Notifiers</h5>\n<p>\n  <button\n    v-for="type in types"\n    :class="type"\n    @click="notifyWithType(type)"\n  >\n    {{type | capitalize}} Notify\n  </button>\n</p>\n\n<h5>Notifiers with Options</h5>\n<p>\n  <button class="primary" @click="noTimeoutNotify()">\n    Basic Notify with No Timeout\n  </button>\n\n  <button class="primary" @click="notifyWithIcon()">\n    Notify With an Icon\n  </button>\n\n  <button class="primary" @click="notifyWithButton()">\n    Notify With a Button\n  </button>\n</p>\n\n<h5>Controlling Notifiers</h5>\n<p>\n  <button\n    class="secondary"\n    @click="showNotify()"\n    :class="{disabled: notifyShowing}"\n  >\n    Show Notify\n  </button>\n  <button\n    class="secondary"\n    @click="dismissNotify()"\n    :class="{disabled: !notifyShowing}"\n  >\n    Dismiss Notify\n  </button>\n</p>\n\n<h5>Simultaneous Multiple Notifiers</h5>\n<p>\n  <button class="primary" @click="showMultipleNotifiers()">\n    Show Multiple Notifiers\n  </button>\n</p>\n'}});