!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}({12:function(t,e){},4:function(t,e,r){"use strict";r.r(e);r(12);function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var i={set template(t){this._template=t},get template(){return this._template},set form(t){this._form=jQuery("#"+t)},get form(){return this._form},init:function(t){this.trigger=t,this.form.html(this.template),this._attachEvents()},_submitFeedback:function(t){var e=this,r=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(r,!0).forEach(function(e){o(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},t,{nonce:this.nonce});this.form.addClass("process-response"),this.form.find(".deactivating-spinner").fadeIn(),jQuery.ajax({type:"POST",data:{action:this.slug+"_uninstall_feedback",args:r},dataType:"json",url:ajaxurl,success:function(t){return window.location.href=e.deactivateUrl},error:function(t){return console.warn(t)}})},_showForm:function(){var t=this;jQuery("body").toggleClass(this.slug+"-deactivate-form-active"),this.form.fadeIn({complete:function(){var e=t.form.offset();e.top<50&&jQuery(t).parent().css("top",50-e.top+"px"),jQuery("html,body").animate({scrollTop:Math.max(0,e.top-50)})}})},_attachEvents:function(){var t=this,e=this;this.trigger.on("click",function(e){e.preventDefault(),t._showForm()}),this.form.on("change","input[type=radio]",function(){var t=e.form.find("#"+e.slug+"-deactivate-details-label strong"),r=e.form.find('p[id="'+e.slug+'-anonymous"]')[0],n=e.form.find("#"+e.slug+"-deactivate-submit-form span")[0],o=e.form.find('input[name="'+e.slug+'-deactivate-reason"]:checked').val();t.text(e.translations[o]),r.style.display="inline-block",n.style.display="inline-block"}),this.form.on("click","#"+e.slug+"-deactivate-submit-form",function(r){r.preventDefault();var n={reason:t.form.find('input[name="'+e.slug+'-deactivate-reason"]:checked').val(),details:t.form.find("#"+e.slug+"-deactivate-details").val(),anonymous:!!t.form.find("#"+e.slug+"-anonymous:checked").length||userSettings.uid};void 0===n.reason?window.location.href=t.deactivateUrl:t._submitFeedback(n)}),jQuery("."+this.slug+"-deactivate-form-bg").on("click",function(){t.form.fadeOut(),jQuery("body").removeClass(t.slug+"-deactivate-form-active")})}};jQuery(document).ready(function(t){var e=i;e.slug="kaliforms",e.template=KaliFormsPluginDeactivationObject.modalHtml,e.form="kaliforms-deactivate-form",e.deactivateUrl=jQuery('[data-slug="kali-forms"]').find("a").attr("href"),e.deactivate=!1,e.translations=KaliFormsPluginDeactivationObject.translations,e.nonce=KaliFormsPluginDeactivationObject.ajax_nonce,e.init(jQuery('[data-slug="kali-forms"]').find("a"))})}});