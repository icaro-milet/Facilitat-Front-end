/**
 * Kendo UI v2023.2.829 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.timeselector.js";import"./kendo.icons.js";var __meta__={id:"timedurationpicker",name:"TimeDurationPicker",category:"web",description:"The TimeDurationPicker widget allows the end user to select a time range stored in milliseconds.",docsCategory:"editors",depends:["timeselector"]};!function(e,t){var a=window.kendo,n=a.ui,s=n.Widget,i=a.html,r=e.map,o=e.extend,l=a.mediaQuery,d="open",u="close",_="change",c="k-focus",p="aria-expanded",m="mouseenter"+(w=".kendoTimeDurationPicker")+" mouseleave"+w,h="k-disabled",f="aria-hidden",v="aria-disabled",g="aria-readonly",k="disabled",b="readonly",I="k-invalid",y="_",S=a.caret,P=a.keys,w=".kendoTimeDurationPicker";i=a.html;var x={hours:{name:"hours",format:"## hours",divider:36e5,min:0,max:23,step:1},minutes:{name:"minutes",format:"## mins",divider:6e4,min:0,max:59,step:1},seconds:{name:"seconds",format:"## sec",divider:1e3,min:0,max:59,step:1},milliseconds:{name:"milliseconds",format:"### msec",min:0,max:999,step:1},days:{format:"## days",name:"days",divider:864e5,min:0,max:365,step:1}};var M=s.extend({init:function(n,i){var d,u=this;i=i||{},s.fn.init.call(u,n,i),u._columns=(d=i.columns,r(d,(function(e){var t=o(!0,{},x[(e="string"==typeof e?{name:e}:e).name],e);return t.selectorFormat="{0:"+"0".repeat(t.format.match(/#/g).length)+"}",t}))),u.options.columns=u._columns,u.options.readonly=i.readonly!==t?i.readonly:Boolean(u.element.attr("readonly")),u.options.enable=i.enable!==t?i.enable:!Boolean(u.element.is("[disabled]")||e(n).parents("fieldset").is(":disabled")),u.bigScreenMQL=l("large"),"auto"==u.options.adaptiveMode&&u.bigScreenMQL.onChange((()=>{u._timeSelector&&(u._timeSelector.destroy(),u._timeSelector=null),u._popupView()})),u._wrapper(),u._button(),u._applyCssClasses(),u._input(),u._popupView(),u._buildMask(),u._validation(),u._editable({readonly:u.options.readonly,disable:!u.options.enable}),u._ariaLabel(u._timeSelector._listsContainer),u.options.value&&(u.value(i.value),u._old=u._maskedInput.val()),u._canUpdateLast=!0,a.notify(u)},options:{name:"TimeDurationPicker",columns:[],separator:",",shortcuts:[],value:null,adaptiveMode:"none",size:"medium",fillMode:"solid",rounded:"medium",messages:{set:"Set",cancel:"Cancel",days:"Days",hours:"Hours",minutes:"Minutes",milliseconds:"Milliseconds",seconds:"Seconds"}},events:[d,u,_],destroy:function(){var e=this;e.wrapper.off(w),e._maskedInput.off(w),e._timeSelector&&(e._timeSelector.destroy(),e._timeSelector=null),e.bigScreenMQL&&e.bigScreenMQL.destroy()},value:function(e){var a=this;if(e===t)return a._value;e="number"==typeof e?parseInt(e):null,a._value=e,a.element.val(a._value),a._timeSelector._value=a._value,a._updateValueFromTimeSelector()},_toggleHover:function(t){e(t.currentTarget).toggleClass("k-hover","mouseenter"===t.type)},_editable:function(e){var t=this,a=e.disable,n=e.readonly,s=t._maskedInput.add(t.element).off(w),i=t.wrapper.off(w);n||a?(i.addClass(a?h:"").removeClass(a?"":h),s.attr(k,a).attr(b,n).attr(v,a).attr(g,n)):(i.removeClass(h).on(m,t._toggleHover),s&&s.length&&(s.removeAttr(k),s.removeAttr(b)),s.attr(v,!1).attr(g,!1),t._attachHandlers())},readonly:function(e){this._editable({readonly:e===t||e,disable:!1})},enable:function(e){this._editable({readonly:!1,disable:!(e=e===t||e)})},_popupView:function(){var e=this,t=e.options;e._timeSelector||(e._timeSelector=new a.ui.TimeSelector(e._maskedInput,{id:e.element.attr("id")+"_timeSelector",anchor:e.wrapper,adaptiveMode:t.adaptiveMode,columns:t.columns,shortcuts:t.shortcuts,value:t.value,size:"auto"!=t.adaptiveMode||e.bigScreenMQL.mediaQueryList.matches?t.size:"large",fillMode:t.fillMode,rounded:t.rounded,messages:t.messages,focus:function(){e._maskedInput.trigger("focus"),e._selectNearestSection(e._lastCaret||0)},close:function(t){e.trigger(u)?t.preventDefault():(e._maskedInput.attr(p,!1),e._timeSelector._listsContainer.attr(f,!0))},open:function(t){e.trigger(d)?t.preventDefault():(e._maskedInput.attr(p,!0),e._timeSelector._listsContainer.attr(f,!1),e._lastCaret=S(e._maskedInput)[0],e._lastCaret===e._maskedInput.val().length&&(e._lastCaret=0))},change:function(t){e._value=t,e._updateValueFromTimeSelector(),e._removeInvalidState(),e.trigger(_)}}))},_button:function(){var t,a=this,n=a.element,s=a.options;(t=n.next("button.k-input-button"))[0]||(t=e(i.renderButton('<button unselectable="on" tabindex="-1" class="k-input-button" aria-label="select"></button>',{icon:"clock-arrow-rotate",size:s.size,fillMode:s.fillMode,shape:"none",rounded:"none"})).insertAfter(n)),a._button=t.attr({role:"button"})},_buildMask:function(){var e,t,a=this.options.columns,n="";this._emtpyMask="",this._maskParts=[];for(var s=0;s<a.length;s++)t={},e=a[s].format,s&&(n=this.options.separator),n+=e.replace(/#/g,"_"),this._emtpyMask+=n,t.end=this._emtpyMask.length-1,t.mask=e.replace(/#/g,"_"),t.symbolsLength=t.mask.match(/_/g).length,t.start=this._emtpyMask.indexOf(t.mask),t.numberEnd=this._emtpyMask.lastIndexOf(y)+1,t.numberStart=this._emtpyMask.indexOf(y,t.start),this._maskParts.push(t);this._old=this._emtpyMask,this._maskedInput.val(this._emtpyMask)},_input:function(){var t=this;t._maskedInput=e("<input />").attr(a.attr("validate"),!1).attr({role:"combobox","aria-expanded":!1,"aria-controls":t.element.attr("id")+"_timeSelector",autocomplete:"off"}).addClass("k-input-inner").insertBefore(t.element),t.element.hide()},_wrapper:function(){var e,t=this.element;(e=t.parents(".k-timedurationpicker"))[0]||(e=t.wrap("<span></span>").parent()),this.wrapper=e.addClass("k-timedurationpicker k-input")},_attachHandlers:function(){var e=this;e._maskedInput.on("keydown"+w,e._keydown.bind(e)).on("input"+w,e._inputHandler.bind(e)).on("focus"+w,e._focus.bind(e)).on("focusout"+w,e._focusout.bind(e)).on("paste"+w,e._paste.bind(e)).on("mousedown"+w,e._mouseDown.bind(e)).on("mouseup"+w,e._mouseUp.bind(e)),e.wrapper.on("click"+w,".k-input-button",e._click.bind(e))},_mouseDown:function(){this._mouseOnInput=!0},_mouseUp:function(){var e=S(this._maskedInput[0]),t=this._maskedInput[0].value;e[0]===e[1]&&this._selectNearestSection(e[1]==t.length?t.length-1:e[1])},_triggerChange:function(){(this._lastValue==t&&this._value||this._lastValue!=this._value)&&(this._lastValue=this._value,this.trigger(_))},_focusout:function(){this._updateValueFromInput(),this._triggerChange(),this._canUpdateLast=!0,this.wrapper.removeClass(c)},_focus:function(){var e=this;e._mouseOnInput||setTimeout((function(){e._selectNearestSection(0)}),10),e._mouseOnInput=!1,e.wrapper.addClass(c)},_selectNearestSection:function(e){for(var t,a=0;a<this._maskParts.length;a++)e>=(t=this._maskParts[a]).start&&e<=t.end&&S(this._maskedInput[0],t.numberStart,t.numberEnd)},_getPartValue:function(e,t){var a=this.options.separator,n=e.indexOf(a,t),s=e.lastIndexOf(a,t);return e.substring(s<0?0:s+1,n<0?e.length:n)},_getEmptyPart:function(e){return this._getPartValue(this._emtpyMask,e)},_fillParts:function(e){var t,a=this._emtpyMask.split(this.options.separator);e+="";for(var n=0;n<a.length;n++)(t=a[n].match(/_/g).length)>e.length?a[n]=a[n].replace(y.repeat(t),"0".repeat(t-e.length)+e):(a[n]=a[n].replace(y.repeat(t),e.substring(0,t)),e=e.substring(t,t.length));return a.join(this.options.separator)},_clearParts:function(e,t,a){for(var n,s=e.split(this.options.separator),i=0,r=0;r<s.length;r++)n=i+s[r].length,(i<=t&&n>=t||i<=a&&n>=a)&&(s[r]=this._getEmptyPart(i)),i+=s[r].length+1;return s.join(this.options.separator)},_updatePart:function(e,t){var n=this._getEmptyPart(this._old.indexOf(e)),s=e.substring(n.indexOf(y),n.lastIndexOf(y)+1),i="{0:"+"0".repeat(s.length)+"}";return s.indexOf(y)>=0||"0"!==e[e.search(/[0-9]/)]||t.length>1?e.replace(s,a.format(i,parseInt(t))):e.replace(s,a.format(i,parseInt(s+t)))},_replacePart:function(e,t,a){return e.replace(this._getPartValue(e,a),t)},_click:function(){this._timeSelector&&this._timeSelector.toggle()},_switchPart:function(e){var a,n=this.options.separator,s=e.caret!=t?e.caret:S(this._maskedInput[0])[0],i=this._maskedInput.val();e.next?(a=i.indexOf(n,s))<0?a=i.length-1:a++:(a=i.lastIndexOf(n,s))<0?a=0:a--,this._selectNearestSection(a)},_keydown:function(e){var t,a,n,s,i,r=e.keyCode,o=this.options.separator;if(this._backward=r===P.BACKSPACE,r==P.LEFT||r==P.RIGHT){if(e.preventDefault(),t=S(this._maskedInput[0])[0],s=(a=this._maskedInput.val()).indexOf(o,t),i=a.lastIndexOf(o,t),s<0&&r==P.RIGHT||i<0&&r==P.LEFT)return;n=r==P.LEFT?i-1:s+1,this._selectNearestSection(n),r==P.LEFT&&(this._canUpdateLast=!0)}else this._timeSelector.popup.visible()?this._timeSelector._scrollerKeyDownHandler(e):r==P.UP||r==P.DOWN?(e.preventDefault(),e.altKey&&this._timeSelector.toggle()):r==P.ENTER&&(this._updateValueFromInput(),this._triggerChange())},_updateValueFromTimeSelector:function(){for(var e,t,a,n=this,s=function(e){var t,a=Math.floor(e/864e5);t=e%864e5;var n=Math.floor(t/36e5);t=e%36e5;var s=Math.floor(t/6e4);return t=e%6e4,{days:a,hours:n,minutes:s,seconds:Math.floor(t/1e3),milliseconds:t=e%1e3}}(n._value),i="",r=this._columns[o],o=0;o<this._columns.length;o++)t=s[(r=this._columns[o]).name]+"",e=this._maskParts[o],o&&(i+=n.options.separator),s[r.name]?(a=e.symbolsLength-t.length,i+=e.mask.replace(y.repeat(e.symbolsLength),"0".repeat(a<0?0:a)+t)):i+=e.mask;n._maskedInput.val(i),n._old=i},_validation:function(){var t=this.element;this._validationIcon=e(a.ui.icon({icon:"exclamation-circle",iconClass:"k-input-validation-icon k-hidden"})).insertAfter(t)},_addInvalidState:function(){this.wrapper.addClass(I),this._validationIcon.removeClass("k-hidden")},_removeInvalidState:function(){this.wrapper.removeClass(I),this._validationIcon.addClass("k-hidden")},_updateValueFromInput:function(){for(var e,t,n,s,i=this._maskedInput.val(),r={},o=!0,l=0;l<this._columns.length;l++){if(e=this._columns[l],t=this._maskParts[l],n=i.substring(t.numberStart,t.numberEnd).replace(/_/g,""),!((n=a.parseInt(n||0))>=e.min&&n<=e.max)){o=!1;break}r[e.name]=n}o?(this._value=864e5*((s=r).days||0)+36e5*(s.hours||0)+6e4*(s.minutes||0)+1e3*(s.seconds||0)+(s.milliseconds||0),this.element.val(this._value||""),this._timeSelector._value=this._value,this._removeInvalidState()):this._addInvalidState()},_paste:function(e){var t;this._isPasted=!0,this._pasted=(e.clipboardData||e.originalEvent.clipboardData).getData("Text");var a=S(this._maskedInput);this._maskedInput.val().length!=a[1]||a[0]?(t=this._getEmptyPart(a[0]),this._pasted=this._pasted.substring(0,t.match(/_/g).length)):this._replaceEntire=!0},_inputHandler:function(){if(a._activeElement()===this._maskedInput[0]){var e,t,n,s,i,r,o,l,d,u,_,c=this,p=c._old,m=c.options.separator,h=c._maskedInput[0].value,f=S(c._maskedInput)[0],v=p.length-h.length;if(e=c._isPasted?c._pasted:h.substring(f-1,f),t=/\d/.test(e),c._isPasted&&c._replaceEntire&&t)return c._old=c._fillParts(parseInt(e)),c._maskedInput.val(c._old),c._selectNearestSection(0),void(c._isPasted=c._replaceEntire=!1);if(c._isPasted&&(v=0),c._isPasted=!1,e===m&&!c._backward)return c._maskedInput.val(c._old),void c._switchPart({caret:f,next:!0});if(!h&&c._backward)return c._old=c._emtpyMask,c._maskedInput.val(c._old),void c._selectNearestSection(f);if(!t&&!c._backward)return c._maskedInput.val(c._old),void c._selectNearestSection(f);if(!v||v>0){if(s=h.substring(f,h.length),d=(i=h.substring(0,f))+(r=c._emtpyMask.substring(i.length,p.indexOf(s)))+s,u=c._getPartValue(c._old,f),_=c._old.indexOf(m,c._old.indexOf(u)+1),c._backward){if(r.split(m).length>1)c._old=this._clearParts(d,f,f+r.length);else{if((o=this._getEmptyPart(f))==u)return c._maskedInput.val(c._old),void c._switchPart({caret:f});c._old=c._replacePart(d,o,f)}return c._maskedInput.val(c._old),void c._selectNearestSection(f)}if(_<0&&-1===u.indexOf(y)&&!c._canUpdateLast)return c._maskedInput.val(c._old),void c._selectNearestSection(f);t&&(l="0"===(n=c._updatePart(u,e))[n.search(/[0-9]/)],d=c._replacePart(d,n,f),c._maskedInput.val(d),_>0&&!l?c._selectNearestSection(_+1,!0):c._selectNearestSection(f),c._canUpdateLast=!(_<0&&!l)),c._old=d}else v<0&&(c._maskedInput.val(c._old),c._selectNearestSection(c._old.length-1))}}});a.cssProperties.registerPrefix("TimeDurationPicker","k-input-"),a.cssProperties.registerValues("TimeDurationPicker",[{prop:"rounded",values:a.cssProperties.roundedValues.concat([["full","full"]])}]),n.plugin(M)}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.timedurationpicker.js.map
