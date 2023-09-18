/**
 * Kendo UI v2023.2.829 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.color.js";import"./kendo.popup.js";import"./kendo.slider.js";import"./kendo.userevents.js";import"./kendo.button.js";import"./kendo.binder.js";import"./kendo.textbox.js";import"./kendo.numerictextbox.js";import"./kendo.html.button.js";import"./kendo.icons.js";!function(e,t){var o=window.kendo,a=o.ui,n=a.Widget,r=o.parseColor,i=o.ui.Popup.TabKeyTrap,s=e.extend,l=".kendoColorTools",c="keydown"+l,d="k-disabled",p=n.extend({init:function(e,t){var o=this;n.fn.init.call(o,e,t),e=o.element,t=o.options,e.is("input")?(o._initialValue(),o._preventDefaultLabelClick()):o._value=r(t.value),o._tabIndex=e.attr("tabIndex")||0,t._standalone&&(o._triggerSelect=o._triggerChange)},options:{name:"ColorSelector",ARIATemplate:e=>`Current selected color is ${e||"none"}`,value:null,_standalone:!0},events:["change","select","forceSelect","cancel"],color:function(e){return e!==t&&(this._value=r(e),this.element.is("input")&&this._updateInput(this._value),this._updateUI(this._value)),this._value},value:function(e){return(e=this.color(e))&&(e=this.options.opacity?e.toCssRgba():e.toCss()),e||null},enable:function(e){0===arguments.length&&(e=!0),this.element.is("input")&&this.element.attr("disabled",!e),this.wrapper.toggleClass(d,!e),this._onEnable(e)},_attachFocusEvents:function(){this.wrapper.on(c,this._navKeydown.bind(this)).on("focusout"+l,this._navFocusout.bind(this))},_initialValue:function(){var e=this.element,t=this.options.value||e.attr("value");t&&(this._value=r(t,!0)),this.element.val(t)},_innerTabindex:function(e){this.wrapper.find(".k-draghandle, .k-button, .k-input-inner").attr("tabindex",e)},_isInputTypeColor:function(){var e=this.element[0];return/^input$/i.test(e.tagName)&&/^color$/i.test(e.type)},_navFocusout:function(){var e=this,t=e.wrapper[0];setTimeout((function(){t.contains(document.activeElement)||e._releaseInnerFocus()}))},_navKeydown:function(e){var a=this.wrapper;e.keyCode===o.keys.ENTER&&a.attr("tabindex")?(e.preventDefault(),this._trapInnerFocus()):e.keyCode===o.keys.ESC&&a.attr("tabindex")===t&&(this._releaseInnerFocus(),this.wrapper.trigger("focus"))},_releaseInnerFocus:function(){this._tabKeyTrap.removeTrap(),this.wrapper.attr("tabindex",this._tabIndex),this._innerTabindex(-1)},_select:function(e,t){var o=this._value;e=this.color(e),t||(e&&(!o||!e.equals(o))||null===e&&e!==o?(null===e&&this.element.val&&this.element.val(e),this.element.trigger("change"),this.trigger("change",{value:this.value()})):this._standalone||this.trigger("cancel"))},_navigation:function(){var e=this.value();e&&e.indexOf("rgba")>-1&&(e=e.replace("rgba","RGBA")),this.options._otOfPicker?(this._innerTabindex(-1),this._attachFocusEvents(),this._tabKeyTrap=new i(this.wrapper),this._ariaTemplate=o.template(this.options.ARIATemplate),this.wrapper.attr({"aria-label":this._ariaTemplate(e||""),tabindex:this._tabIndex})):(this.wrapper.removeAttr("tabindex"),this.wrapper.removeAttr("aria-label"),this.wrapper.removeAttr("role"),this.wrapper.removeAttr("aria-keyshortcuts"))},_trapInnerFocus:function(){this._innerTabindex(0),this.wrapper.removeAttr("tabindex"),this.wrapper.find(".k-hsv-draghandle").trigger("focus"),this._tabKeyTrap.trap()},_triggerSelect:function(e){u(this,"select",e)},_triggerChange:function(e){u(this,"change",e)},destroy:function(){this.element&&this.element.off(l),this.wrapper&&(this.wrapper.off(c),this.wrapper.off(l).find("*").off(l),this.wrapper=null),n.fn.destroy.call(this)},_preventDefaultLabelClick:function(){var e=this.element,t=e.closest("label"),o=e.attr("id");o&&(t=t.add('label[for="'+o+'"]')),t.on("click",(function(e){e.preventDefault()}))},_updateUI:e.noop,_updateInput:function(e){var t,a="";e&&(a=this._isInputTypeColor()||1==e.a?e.toCss():e.toCssRgba(),this.element.val(a)),this.options._otOfPicker&&(this._ariaTemplate||(this._ariaTemplate=o.template(this.options.ARIATemplate)),(t=this.value())&&t.indexOf("rgba")>-1&&(t=t.replace("rgba","RGBA")),this.wrapper.attr("aria-label",this._ariaTemplate(t||"")))},_selectOnHide:function(){return null},_cancel:function(){this.trigger("cancel")}});function u(e,t,o){((o=r(o))&&!o.equals(e.color())||o!==e.color())&&("change"==t&&(e._value=o,e._updateInput(e._value)),o&&1!=o.a?o=o.toCssRgba():o&&(o=o.toCss()),e.trigger(t,{value:o}))}s(a,{colorpicker:{ColorSelector:p}})}(window.kendo.jQuery),function(e,t){var o=kendo.ui.colorpicker,a=e.extend,n=kendo.Color,r=kendo.parseColor;function i(e,t){return o=s(l(e,t)),a=s(l(t,{r:0,g:0,b:0,a:1})),(Math.max(o,a)+.05)/(Math.min(o,a)+.05);var o,a}function s(e){var t=[e.r,e.g,e.b].map((function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}));return.2126*t[0]+.7152*t[1]+.0722*t[2]}function l(e,t){var o=c(e.r,0,255),a=c(e.g,0,255),n=c(e.b,0,255),r=c(e.a,0,1),i=c(t.r,0,255),s=c(t.g,0,255),l=c(t.b,0,255);return{r:Math.round((1-r)*i+r*o),g:Math.round((1-r)*s+r*a),b:Math.round((1-r)*l+r*n)}}function c(e,o,a){return null===(n=e)||n===t||isNaN(e)||e<=o?o:e>=a?a:e;var n}function d(e,t){if(0===e.length)return"";var o=e.reduce((function(e,o,a,n){return 0===a?kendo.format("M {0},{1}",o[0],o[1]):kendo.format("{0} {1}",e,t(o,a,n))}),"");return kendo.format('<path d="{0}" fill="none" stroke="white" stroke-width="1"/>',o)}function p(e,t){var o=t[0]-e[0],a=t[1]-e[1];return{length:Math.sqrt(Math.pow(o,2)+Math.pow(a,2)),angle:Math.atan2(a,o)}}a(o,{contrastToolUtils:{getContrastFromTwoRGBAs:i,renderSvgCurveLine:function(e,t,o){var s,l,u=function(s,l,d,p,h){var v=(d+p)/2,f=a({},t,{s:l/e.width,v:1-v/e.height}),C=i(r(function(e){var t=c(e.h,0,359.9),o=c(e.s,0,1),a=c(e.v,0,1),r=c(e.a,0,1);return n.fromHSV(t,o,a,r).toCssRgba()}(f)).toBytes(),r(o).toBytes());return d+.5>p?C<s+1&&C>s-1?v:null:h(C,s)?u(s,l,d,p-(p-d)/2,h):u(s,l,d+(p-d)/2,p,h)},h=function(e,t){return e>t},v=function(e,t){return e<t},f=function(t,o,a){for(var n=[],r=0;r<=e.width;r+=e.width/o){var i=u(t,r,0,e.height,a?v:h);null!==i&&n.push([r,i])}return n},C=(l=p,s=function(e,t,o,a){var n=.1,r=l(t||e,o||e),i=r.angle+(a?Math.PI:0),s=r.length*n;return[e[0]+Math.cos(i)*s,e[1]+Math.sin(i)*s]},function(e,t,o){var a=s(o[t-1],o[t-2],e),n=s(e,o[t-1],o[t+1],!0);return kendo.format("C {0},{1} {2},{3} {4},{5}",a[0],a[1],n[0],n[1],e[0],e[1])}),_=d(f(4.5,16,!1),C)+d(f(4.5,16,!0),C)+d(f(7,16,!1),C)+d(f(7,16,!0),C);return`<svg xmlns="http://www.w3.org/2000/svg" ${kendo.attr("style-position")}="absolute" ${kendo.attr("style-overflow")}="visible" ${kendo.attr("style-pointer-events")}="none" ${kendo.attr("style-left")}="0px" ${kendo.attr("style-top")}="0px" ${kendo.attr("style-z-index")}="3" >`+_+"</svg>"}}})}(window.kendo.jQuery);var __meta__$1={id:"colorgradient",name:"ColorGradient",category:"web",description:"ColorGradient allows selection of a color from an HSV canvas.",depends:["core","popup","textbox","icons"]};!function(e,t){var o=window.kendo,a=o.ui,n=o.Observable,r=o.parseColor,i=e.extend,s=o.htmlEncode,l=o.Color,c=o.keys,d="#ffffff",p="#000000",u="keydown.kendoColorTools",h=a.colorpicker.ColorSelector,v=a.colorpicker.contrastToolUtils;function f(e){e.preventDefault()}var C=n.extend({init:function(e,t){var a=this;a.element=e,a.options=t,a._viewModel=o.observable({switchMode:a.switchMode.bind(a),keydown:a.keydown.bind(a),isHEXMode:function(){return"hex"===this.get("format")},isRGBMode:function(){return"rgb"===this.get("format")},format:t.format,formats:t.formats,rgb:null,hex:function(){return null!==this.get("rgb")&&this.get("rgb").toCss({alpha:t.opacity})}}),a._changeHandler=a.change.bind(a),a._viewModel.bind("change",a._changeHandler),a._render(),a.element.on(u,a.keydown.bind(a)),n.fn.init.call(a)},_template:o.template((({options:e,ns:t})=>{let o=s(e.size),a=s(e.tabindex),n="";if(e.formats&&e.formats.length>1){n=`<div class="k-vstack"><button class="k-colorgradient-toggle-mode" data-${t}role="button" data-${t}icon="caret-alt-expand" data data-${t}bind="click: switchMode" data-${t}fill-mode="flat" data-${t}size="${o}" title="${s(e.messages.toggleFormat)}"></button></div>`}let r="";if(e.formats&&e.formats.indexOf("hex")>=0){r=`<div class="k-vstack" data-${t}bind="visible: isHEXMode"><input type="text" data-${t}bind="value: hex" data-${t}role="textbox" data-${t}size="${o}" tabindex="${a}"  aria-label="${s(e.messages.hex)}"/><label class="k-colorgradient-input-label">HEX</label></div>`}let i="";if(e.formats&&e.formats.indexOf("rgb")>=0){if(i=`<div class="k-vstack" data-${t}bind="visible: isRGBMode"><input tabindex="${a}" data-${t}bind="value: rgb.r" data-${t}role="numerictextbox" data-${t}size="${o}" data-${t}max="255" data-${t}min="0" data-${t}decimals="0" data-${t}spinners="false" data-${t}format="n0" aria-label="${s(e.messages.red)}" /><label class="k-colorgradient-input-label">R</label></div><div class="k-vstack" data-${t}bind="visible: isRGBMode"><input tabindex="${a}" data-${t}bind="value: rgb.g" data-${t}role="numerictextbox" data-${t}size="${o}" data-${t}max="255" data-${t}min="0" data-${t}decimals="0" data-${t}spinners="false" data-${t}format="n0" aria-label="${s(e.messages.green)}" /><label class="k-colorgradient-input-label">G</label></div><div class="k-vstack" data-${t}bind="visible: isRGBMode"><input tabindex="${a}" data-${t}bind="value: rgb.b" data-${t}role="numerictextbox" data-${t}size="${o}" data-${t}max="255" data-${t}min="0" data-${t}decimals="0" data-${t}spinners="false" data-${t}format="n0" aria-label="${s(e.messages.blue)}"/><label class="k-colorgradient-input-label">B</label></div>`,e.opacity){i+=`<div class="k-vstack" data-${t}bind="visible: isRGBMode"><input tabindex="${a}" data-${t}bind="value: rgb.a" data-${t}role="numerictextbox" data-${t}size="${o}" data-${t}step="0.1" data-${t}max="1" data-${t}min="0" data-${t}decimals="1" data-${t}spinners="false" data-${t}format="n1" aria-label="${e.messages.alpha}" /><label class="k-colorgradient-input-label">A</label></div>`}}return n+r+i})),destroy:function(){var e=this;e._viewModel.unbind("change",e._changeHandler),o.unbind(e.element),o.destroy(e.element),e.element.off(u),delete e._viewModel,delete e._changeHandler},change:function(e){var t=this;e.field.indexOf("rgb")>=0?(t._color=t._tryParseColor(t._viewModel.rgb.toCssRgba()),t._viewModel.set("hex",t._color.toCss({alpha:t.options.opacity}))):"hex"===e.field&&(t._color=t._tryParseColor(e.sender[e.field]),t._viewModel.set("rgb",t._color)),t._preventChangeEvent||t.trigger("change",{value:t._color})},keydown:function(t){var o=this,a=e(t.target).data("kendoTextBox");t.keyCode===c.ENTER&&e(t.target).is("input")&&(a&&a._change&&a._change(),o.trigger("change",{value:o._color}),o.trigger("select",{value:o._color}))},reset:function(){var e=this;e._preventChangeEvent=!0,e._viewModel.set("rgb",r(p)),delete e._preventChangeEvent},switchMode:function(){var e=this,t=e._viewModel,o=t.format,a=t.formats.indexOf(o)+1;a=a>=t.formats.length?0:a,e._preventChangeEvent=!0,e._viewModel.set("format",t.formats[a]),delete e._preventChangeEvent},value:function(e){var t=this;t._color=e&&e.toBytes()||r(p),t._preventChangeEvent=!0,t._viewModel.set("rgb",t._color),delete t._preventChangeEvent},_render:function(){var e=this;e.element.append(e._template({ns:o.ns,guid:o.guid(),options:e.options})).parent(),o.bind(e.element,e._viewModel),e.element.attr("data-"+o.ns+"stop","stop")},_tryParseColor:function(e){try{e=r(e)||this._color}catch(t){e=this._color}return e}}),_=h.extend({init:function(t,a){var n,r=this;h.fn.init.call(r,t,a),(a=r.options=o.deepExtend({},r.options,a)).messages.previewInput&&(a.messages.hex=a.messages.previewInput),a.messages=a.messages?e.extend(r.options.messages,a.messages):r.options.messages,t=r.element,r._wrapper(),r._sliders(),r._hsvArea(),n=r._value,r._gradientInputs(),r._updateUI(n),r._navigation()},options:{name:"ColorGradient",opacity:!1,hsvDragARIATemplate:e=>`Color well with two-dimensional slider for selecting saturation and value. Selected color is ${e||"none"}`,input:!0,format:"hex",formats:["rgb","hex"],contrastTool:!1,size:"medium",messages:{contrastRatio:"Contrast ratio:",fail:"Fail",pass:"Pass",hex:"HEX",toggleFormat:"Toggle format",red:"Red channel",green:"Green channel",blue:"Blue channel",alpha:"Alpha channel"},_otOfPicker:!0},_template:o.template((e=>'<div class="k-colorgradient-canvas k-hstack"><div class="k-hsv-rectangle"><div class="k-hsv-gradient"><div role="slider" aria-orientation="undefined" class="k-hsv-draghandle k-draghandle"></div></div></div><div class="k-hsv-controls k-hstack"><input class="k-hue-slider k-colorgradient-slider" />'+(e.opacity?'<input class="k-alpha-slider k-colorgradient-slider" />':"")+"</div></div>"+(e.input?'<div class="k-colorgradient-inputs k-hstack"></div>':"")+(e.contrastTool?'<div class="k-colorgradient-color-contrast k-vbox"></div>':""))),focus:function(){this._hsvHandle.focus()},setBackgroundColor:function(t){var o=this;o.options.contrastTool&&(o.options.contrastTool=e.isPlainObject(o.options.contrastTool)?i({},o.options.contrastTool,{backgroundColor:t}):{backgroundColor:t},o._updateColorContrast(o.color()||r(d)))},_getHSV:function(e,t,o,a){var n=this,i=n._hsvRect,s=i.width(),c=i.height(),d=this._hsvHandle.position();return s&&c?(null==e&&(e=n._hueSlider.value()),null==t&&(t=d.left/s),null==o&&(o=1-d.top/c),null==a&&(a=n._opacitySlider?n._opacitySlider.value()/100:1),l.fromHSV(e,t,o,a)):n.color()?n.color().toHSV():r(p)},_gradientInputs:function(){var e=this,t=e.options;e._colorgradientInputs.length&&(e._colorInput=new C(e._colorgradientInputs,i({},t,{tabindex:0})),e._colorInput.bind("change",(function(t){e._updateUI(t.value,!0)})),e._colorInput.bind("select",(function(t){var o=r(t.value);e._select(o),e.trigger("forceSelect",{value:e.value()})})))},_hsvArea:function(){var e,t,a=this,n=a.wrapper.find(".k-hsv-rectangle"),r=n.find(".k-draghandle").attr("tabIndex",0).on(u,(e=a._hsvKeydown,t=a,function(){return e.apply(t,arguments)})),i=this.value();function s(e,t){var o,n,r=this.offset,i=e-r.left,s=t-r.top,l=this.width,c=this.height;o=(i=i<0?0:i>l?l:i)/l,n=1-(s=s<0?0:s>c?c:s)/c,a._svChange(o,n)}i&&i.indexOf("rgba")>-1&&(i=i.replace("rgba","RGBA")),this._hsvDragAriaTemplate||(this._hsvDragAriaTemplate=o.template(this.options.hsvDragARIATemplate)),r.attr("aria-label",this._hsvDragAriaTemplate(i||"")),a._hsvEvents=new o.UserEvents(n,{global:!0,press:function(e){this.offset=o.getOffset(n),this.width=n.width(),this.height=n.height(),r.focus(),s.call(this,e.x.location,e.y.location)},start:function(){n.addClass("k-dragging"),r.focus()},move:function(e){e.preventDefault(),s.call(this,e.x.location,e.y.location)},end:function(){n.removeClass("k-dragging")}}),a._hsvRect=n,a._hsvHandle=r},_hsvKeydown:function(e){var t=this;function o(o,a){var n=t._getHSV();n[o]+=a*(e.shiftKey?.01:.05),n[o]<0&&(n[o]=0),n[o]>1&&(n[o]=1),t._updateUI(n),f(e)}function a(o){var a=t._getHSV();a.h+=o*(e.shiftKey?1:5),a.h<0&&(a.h=0),a.h>359&&(a.h=359),t._updateUI(a),f(e)}switch(e.keyCode){case c.LEFT:e.ctrlKey?a(-1):o("s",-1);break;case c.RIGHT:e.ctrlKey?a(1):o("s",1);break;case c.UP:o(e.ctrlKey&&t._opacitySlider?"a":"v",1);break;case c.DOWN:o(e.ctrlKey&&t._opacitySlider?"a":"v",-1);break;case c.ENTER:t._select(t._getHSV());break;case c.F2:t._colorInput.element.find("input").trigger("focus").select();break;case c.ESC:t._cancel()}},_onEnable:function(e){var t=this.wrapper;this._hueSlider.enable(e),this._opacitySlider&&this._opacitySlider.enable(e),t.find("input").attr("disabled",!e),this.options._standalone&&(e?t.removeAttr("aria-disabled"):t.attr("aria-disabled",!0))},_reset:function(){var e=this;e._colorInput&&e._colorInput.reset(),e._resetHsv(),e._resetColorContrast()},_resetColorContrast:function(){var e=this,t=e.options.contrastTool;e._contrastTool.length&&e._updateColorContrast(t.backgroundColor?r(t.backgroundColor):r(d))},_resetHsv:function(){var e=r(p);this._updateHsv(e)},_sliders:function(){var e=this,t=e.wrapper,o=t.find(".k-hue-slider"),a=t.find(".k-alpha-slider");function n(t){e._updateUI(e._getHSV(t.value,null,null,null))}function r(t){e._updateUI(e._getHSV(null,null,null,t.value/100))}o.attr("aria-label","hue"),e._hueSlider=o.kendoSlider({min:0,max:360,tickPlacement:"none",showButtons:!1,orientation:"vertical",slide:n,change:n}).data("kendoSlider"),a.attr("aria-label","opacity"),e._opacitySlider=a.kendoSlider({min:0,max:100,tickPlacement:"none",showButtons:!1,orientation:"vertical",slide:r,change:r}).data("kendoSlider")},_svChange:function(e,t){var o=this._getHSV(null,e,t,null);this._updateUI(o)},_updateColorContrast:function(e){var t=this,a=t.options.contrastTool,n=a.backgroundColor?r(a.backgroundColor):r(d),i=v.getContrastFromTwoRGBAs(r(e.toCssRgba()),n),l=o.template((({messages:e,ratio:t})=>`<div class="k-contrast-ratio"><span class="k-contrast-ratio-text">${s(e.contrastRatio)} ${s(o.toString(t,"n2"))}</span><span class="k-contrast-validation k-text-success">`+(t>4.5?o.ui.icon("check"):"")+(t>7?o.ui.icon("check"):"")+"</span></div>")),c=o.template((({messages:e,ratio:t,limit:a,level:n})=>`<div><span>${s(n)}: ${s(a)} </span>`+(t>a?`<span class="k-contrast-validation k-text-success">${s(e.pass)} ${o.ui.icon("check")}</span>`:`<span class="k-contrast-validation k-text-error">${s(e.fail)} ${o.ui.icon("x")}</span>`)+"</div>")),p="";p+=l({messages:t.options.messages,ratio:i}),p+=c({messages:t.options.messages,ratio:i,limit:4.5,level:"AA"}),p+=c({messages:t.options.messages,ratio:i,limit:7,level:"AAA"}),t._contrastTool.find(".k-contrast-ratio, div").remove(),t._contrastTool.append(p),t._updateContrastSvg(n)},_updateContrastSvg:function(t){var a,n=this._hsvRect,r="k-color-contrast-svg",i={width:n.width(),height:n.height()};i.width&&i.height&&(a=e(v.renderSvgCurveLine(i,this._getHSV(),t)).addClass(r),o.applyStylesFromKendoAttributes(a,["position","overflow","pointer-events","left","top","z-index"]),n.find("."+r).remove(),n.append(a))},_updateHsv:function(e){var t=this,o=t._hsvRect;e=e.toHSV(),t._hsvHandle.css({left:e.s*o.width()+"px",top:(1-e.v)*o.height()+"px"}),t._hueElements.css("background-color",l.fromHSV(e.h,1,1,1).toCss()),t._hueSlider.value(e.h),t._opacitySlider&&(t._opacitySlider.wrapper.find(".k-slider-track").css("background","linear-gradient(to top, transparent, "+l.fromHSV(e.h,1,1,1).toCss()),t._opacitySlider.value(100*e.a)),t._updateHsvAria(e.s,e.v)},_updateHsvAria:function(e,t){var o=this.value();o&&o.indexOf("rgba")>-1&&(o=o.replace("rgba","RGBA")),this._hsvHandle.attr({"aria-label":this._hsvDragAriaTemplate(o||""),"aria-valuenow":Math.round(100*e),"aria-valuetext":"saturation: "+Math.round(100*e)+"%, value: "+Math.round(100*t)+"%"})},_updateUI:function(e,t){var o=this;e?(!t&&o._colorInput&&o._colorInput.value(e),o._triggerSelect(e),o._updateHsv(e),o._contrastTool.length&&o._updateColorContrast(e)):o._reset()},_wrapper:function(){var t,o=this.options;(t=this.element.is("input")?this.element.addClass("k-hidden").wrap("<div>").parent():this.element).addClass("k-colorgradient").attr({role:"textbox","aria-keyshortcuts":"Enter"}).append(this._template(o)),this._hueElements=e(".k-hsv-rectangle, .k-alpha-slider .k-slider-track",t),this._colorgradientInputs=e(".k-colorgradient-inputs",t),this._contrastTool=e(".k-colorgradient-color-contrast",t),this.wrapper=t},destroy:function(){this._hsvEvents.destroy(),this._hueSlider.destroy(),this._opacitySlider&&this._opacitySlider.destroy(),this._colorInput&&this._colorInput.destroy(),this._hueSlider=this._opacitySlider=this._hsvRect=this._hsvHandle=this._hueElements=this._selectedColor=this._colorAsText=this._contrastTool=null,h.fn.destroy.call(this)}});a.plugin(_)}(window.kendo.jQuery),function(e,t){var o=window.kendo,a=o.ui,n=o.parseColor,r=o.keys,i=".",s="background-color",l="k-selected",c="k-focus",d="k-colorpalette-tile",p=a.colorpicker.ColorSelector;function u(e){e.preventDefault()}function h(e,t){return function(){return e.apply(t,arguments)}}var v=p.extend({init:function(e,t){var a=this;p.fn.init.call(a,e,t),a._tabIndex=this.element.attr("tabindex")||0,a._wrapper(),t=a.options,a._selectedID=(t.ariaId||o.guid())+"_selected",a._ariaTemplate=o.template(a.options.ARIATemplate),a._value&&(a._updateUI(a._value),a.wrapper.find(".k-focus").removeClass(c)),a.wrapper.attr("aria-label",a._ariaTemplate(a.value()||"")),a._attachEvents()},focus:function(){this.wrapper&&!this.wrapper.is("[unselectable='on']")&&this.wrapper.trigger("focus")},options:{name:"ColorPalette",columns:10,tileSize:null,palette:"basic"},_attachEvents:function(){var e=this;e.wrapper.on("click.kendoColorTools",i+d,(function(t){e._select(t.currentTarget)})).on("keydown.kendoColorTools",h(e._keydown,e)).on("blur.kendoColorTools",(function(){e.wrapper.find(i+d).removeClass(c)})).on("focus.kendoColorTools",h(e._focus,e))},_colors:function(){var t=this.options,o=t.palette||"basic";return"websafe"==o?(o="FFFFFF,FFCCFF,FF99FF,FF66FF,FF33FF,FF00FF,CCFFFF,CCCCFF,CC99FF,CC66FF,CC33FF,CC00FF,99FFFF,99CCFF,9999FF,9966FF,9933FF,9900FF,FFFFCC,FFCCCC,FF99CC,FF66CC,FF33CC,FF00CC,CCFFCC,CCCCCC,CC99CC,CC66CC,CC33CC,CC00CC,99FFCC,99CCCC,9999CC,9966CC,9933CC,9900CC,FFFF99,FFCC99,FF9999,FF6699,FF3399,FF0099,CCFF99,CCCC99,CC9999,CC6699,CC3399,CC0099,99FF99,99CC99,999999,996699,993399,990099,FFFF66,FFCC66,FF9966,FF6666,FF3366,FF0066,CCFF66,CCCC66,CC9966,CC6666,CC3366,CC0066,99FF66,99CC66,999966,996666,993366,990066,FFFF33,FFCC33,FF9933,FF6633,FF3333,FF0033,CCFF33,CCCC33,CC9933,CC6633,CC3333,CC0033,99FF33,99CC33,999933,996633,993333,990033,FFFF00,FFCC00,FF9900,FF6600,FF3300,FF0000,CCFF00,CCCC00,CC9900,CC6600,CC3300,CC0000,99FF00,99CC00,999900,996600,993300,990000,66FFFF,66CCFF,6699FF,6666FF,6633FF,6600FF,33FFFF,33CCFF,3399FF,3366FF,3333FF,3300FF,00FFFF,00CCFF,0099FF,0066FF,0033FF,0000FF,66FFCC,66CCCC,6699CC,6666CC,6633CC,6600CC,33FFCC,33CCCC,3399CC,3366CC,3333CC,3300CC,00FFCC,00CCCC,0099CC,0066CC,0033CC,0000CC,66FF99,66CC99,669999,666699,663399,660099,33FF99,33CC99,339999,336699,333399,330099,00FF99,00CC99,009999,006699,003399,000099,66FF66,66CC66,669966,666666,663366,660066,33FF66,33CC66,339966,336666,333366,330066,00FF66,00CC66,009966,006666,003366,000066,66FF33,66CC33,669933,666633,663333,660033,33FF33,33CC33,339933,336633,333333,330033,00FF33,00CC33,009933,006633,003333,000033,66FF00,66CC00,669900,666600,663300,660000,33FF00,33CC00,339900,336600,333300,330000,00FF00,00CC00,009900,006600,003300,000000",t.columns=18):"basic"==o&&(o="000000,7f7f7f,880015,ed1c24,ff7f27,fff200,22b14c,00a2e8,3f48cc,a349a4,ffffff,c3c3c3,b97a57,ffaec9,ffc90e,efe4b0,b5e61d,99d9ea,7092be,c8bfe7"),"string"==typeof o&&(o=o.split(",")),Array.isArray(o)&&(o=e.map(o,(function(e){return n(e)}))),o},_current:function(t){this.wrapper.find(i+d).removeClass(c).removeAttr("id"),e(t).addClass(c).attr("id",this._selectedID),this.wrapper.removeAttr("aria-activedescendant").attr("aria-activedescendant",this._selectedID)},_focus:function(){var e=this.wrapper;0===e.find("#"+this._selectedID).length&&this._current(e.find(i+d).first())},_keydown:function(e){var t,o,a=this.wrapper.find(i+d),n=a.filter(".k-focus").get(0)||a.filter(".k-selected").get(0),s=e.keyCode;if(n&&(o=Array.prototype.indexOf.call(n.parentNode.children,n)),s==r.LEFT)t=n?n.previousSibling:a[a.length-1];else if(s==r.RIGHT)t=n?n.nextSibling:a[0];else if(s==r.DOWN)t=n?n.parentNode.nextSibling?n.parentNode.nextSibling.children[o]:null:a[0];else if(s==r.UP)t=n?n.parentNode.previousSibling?n.parentNode.previousSibling.children[o]:null:a.get[a.length-1];else if(s==r.ENTER){if(u(e),n)return this._select(n),void this.trigger("forceSelect",{value:this.value()})}else s==r.ESC&&this._cancel();t&&1!==t.nodeType&&(t=null),t&&(u(e),this._current(t))},_onEnable:function(e){this.options._standalone&&(e?(this.wrapper.attr("tabindex",this._tabIndex),this.wrapper.removeAttr("aria-disabled")):(this.wrapper.removeAttr("tabindex"),this.wrapper.attr("aria-disabled",!0)))},_select:function(t){var o=this.wrapper.find(i+d);t=e(t),p.fn._select.call(this,t.css(s)),o.removeClass(l).removeAttr("aria-selected"),t.addClass(l).attr("aria-selected",!0)},_template:o.template((({colors:e,columns:t,tileSize:a,value:n,id:r})=>{let i="";for(var s=0;s<e.length;++s){let a=e[s].equals(n);s&&s%t==0&&(i+='</tr><tr role="row">'),i+=`<td role="gridcell" unselectable="on" ${o.attr("style-background-color")}="${e[s].toCss()}"`+(a?" aria-selected=true":"")+" "+(r&&0===s?'id=\\"'+r+'\\" ':"")+" "+`class="k-colorpalette-tile${a?" k-selected":""}" `+`aria-label="${e[s].toCss()}"></td>`}return'<table class="k-colorpalette-table" role="presentation"><tr role="row">'+i+"</tr></table>"})),_tileSize:function(){var e,t,o=this.options.tileSize;if(o){if(/number|string/.test(typeof o))e=t=parseFloat(o);else{if("object"!=typeof o)throw new Error("Unsupported value for the 'tileSize' argument");e=parseFloat(o.width),t=parseFloat(o.height)}this.wrapper.find(i+d).css({width:e,height:t})}},_updateUI:function(t){var o=null,a=this.wrapper.find(i+d);this.wrapper.find(i+d).each((function(){var a=n(e(this).css(s));if(a&&a.equals(t))return o=this,!1})),this._current(o),a.removeClass(l),o&&(e(o).addClass(l),this.wrapper.attr("aria-label",this._ariaTemplate(this.value()||"")))},_wrapper:function(){var t,a,n=this.options,r=this._colors();t=this.element.is("input")?this.element.addClass("k-hidden").wrap("<div>").parent():this.element,a=e(this._template({colors:r,columns:n.columns,tileSize:n.tileSize,value:this._value,id:n.ariaId})),o.applyStylesFromKendoAttributes(a,["background-color"]),t.addClass("k-colorpalette").attr("role","grid").append(a).attr("tabindex",this._tabIndex),this.wrapper=t,this._tileSize()}});a.plugin(v)}(window.kendo.jQuery),function(e,t){var o=window.kendo,a=o.ui,n=o.html,r=o.Color,i=e.extend,s=o.htmlEncode,l="background-color",c=".kendoColorTools",d="click"+c,p=a.colorpicker.ColorSelector,u=o.keys,h="k-no-color",v="k-selected",f=".k-color-preview-mask",C="aria-pressed",_="aria-disabled",g={gradient:a.ColorGradient,palette:a.ColorPalette};var k=p.extend({init:function(e,t){var a=this;t&&!1===t.autoupdate&&(t._standalone=!1),p.fn.init.call(a,e,t),t=a.options=o.deepExtend({},a.options,t),e=a.element,a._wrapper();var n=a.color();a._changeView(t.view),a._setViewSize(),n?(a._updateUI(n),a._previousColor.children(f).css(l,n.toDisplay()),a._selectedColor.children(f).css(l,n.toDisplay())):(a._selectedColor.addClass(h),a._previousColor.addClass(h)),a._attachEvents(),a._navigation()},destroy:function(){var e=this;p.fn.destroy.call(this),e._view&&(e._view.destroy(),e._viewsContainer.empty()),e.element.off(c),e._selectedColor=e._previousColor=e._viewsContainer=e._view=null},options:{name:"FlatColorPicker",opacity:!1,buttons:!1,input:!0,preview:!0,clearButton:!1,format:"hex",formats:["rgb","hex"],view:"gradient",views:["gradient","palette"],palette:null,autoupdate:!0,backgroundColor:null,columns:10,tileSize:24,messages:{apply:"Apply",cancel:"Cancel",noColor:"no color",clearColor:"Clear color",previewInput:null,contrastRatio:"Contrast ratio:",fail:"Fail",pass:"Pass",hex:"HEX",toggleFormat:"Toggle format",red:"Red",green:"Green",blue:"Blue",alpha:"Alpha",gradient:"Gradient view",palette:"Palette view"},size:"medium",_otOfPicker:!0},setBackgroundColor:function(e){var t=this;t._view&&t._view.setBackgroundColor&&t._view.setBackgroundColor(e)},_attachEvents:function(){var t,o,a=this;a.wrapper.on("keydown.kendoColorTools",(t=a._keydown,o=a,function(){return t.apply(o,arguments)})).on(d,".k-coloreditor-reset",(function(){a._clearColor=!0,a._updateUI(null),a._view.value(null)})).on(d,".k-coloreditor-apply",(function(){a._clearColor?a._select(null):a._select(a._view.color())})).on(d,".k-coloreditor-cancel",(function(){delete a._clearColor,a._updateUI(a.color()),a._cancel()})).on(d,".k-button[data-view]",(function(t){var o=e(t.target).closest("[data-view]");o.is("."+v)||(a.wrapper.find(".k-button[data-view]").removeClass(v).attr(C,!1),o.addClass(v).attr(C,!0),a._changeView(o.data("view")))}))},_select:function(e){p.fn._select.call(this,e),this._updatePreviousColor(e)},_updatePreviousColor:function(e){var t=this;e?(t._previousColor.removeClass(h),t._previousColor.children(f).css(l,e.toDisplay())):(t._previousColor.addClass(h),t._previousColor.children(f).css(l,""))},_changeView:function(t){var o,a,n=this,i=e.extend({},n.options),s=g[t];n._view&&n._view._colorInput&&(n.options.format=n._view._colorInput._viewModel.format),n.options.view=t,delete i.name,delete i.change,delete i.select,delete i.cancel,delete i._standalone,n._view&&(o=n._view.color(),n._view.destroy(),n._viewsContainer.empty()),o&&(o=o.toHSV(),a=r.fromHSV(n._cachedHue||0,o.s,o.v,o.a),n._cachedHue=o.toHSV().h,o=o.equals(a)?a:o),i._otOfPicker=!1,s&&(n._view=new g[t](e("<div></div>").appendTo(n._viewsContainer),i),n._view.value(o),n._view.bind("change",(function(e){delete n._clearColor,n._updateUI(e.sender.color(),!0)})),n._view.bind("forceSelect",(function(e){delete n._clearColor,n._select(e.sender.color())})))},_onEnable:function(e){var t=this;t._view&&t._view._onEnable(e),t.options._standalone&&(e?t.wrapper.removeAttr(_):t.wrapper.attr(_,!0))},focus:function(){this._view&&this._view.focus()},_updateUI:function(e,t){var o=this;e&&e.toDisplay?(o._selectedColor.removeClass(h),o._selectedColor.children(f).css(l,e.toDisplay())):(o._selectedColor.addClass(h),o._selectedColor.children(f).css(l,"")),o._triggerSelect(e),o.options.autoupdate&&o._updatePreviousColor(e),t||o._view.value(e)},_setViewSize:function(){var e=this,t=e.wrapper[0],o=parseInt(e.options.tileSize.width||e.options.tileSize,10),a=parseInt(e.options.tileSize.width||e.options.tileSize,10),n=e.options.columns;t.style.setProperty("--kendo-color-preview-columns",n),t.style.setProperty("--kendo-color-preview-width",o+"px"),t.style.setProperty("--kendo-color-preview-height",a+"px")},_keydown:function(e){e.keyCode==u.ESC&&this._cancel()},_template:function(){var e=this.options,t=i({},e,{fillMode:"flat",themeColor:"base",rounded:"medium"});return o.template(((e,t)=>'<div class="k-coloreditor-header k-hstack">'+(e.views&&e.views.length>1?'<div class="k-coloreditor-header-actions k-hstack"><div role="group" class="k-button-group k-button-group-flat">'+n.renderButton(`<button aria-pressed="false" data-view="gradient" title="${s(e.messages.gradient)}"></button>`,i({icon:"droplet-slider"},t))+n.renderButton(`<button aria-pressed="false" data-view="palette" title="${s(e.messages.palette)}"></button>`,i({icon:"palette"},t))+"</div></div>":"")+'<div class="k-spacer"></div><div class="k-coloreditor-header-actions k-hstack">'+(e.clearButton?n.renderButton(`<button class="k-coloreditor-reset" title="${s(e.messages.clearColor)}"></button>`,i({icon:"droplet-slash"},t)):"")+(e.preview?'<div class="k-coloreditor-preview k-vstack"><span class="k-coloreditor-preview-color k-color-preview"><span class="k-color-preview-mask"></span></span><span class="k-coloreditor-current-color k-color-preview"><span class="k-color-preview-mask"></span></span></div>':"")+'</div></div><div class="k-coloreditor-views k-vstack"></div>'+(e.buttons?'<div class="k-coloreditor-footer k-actions k-actions-end k-actions-horizontal">'+n.renderButton(`<button class="k-coloreditor-cancel" title="${s(e.messages.cancel)}">${s(e.messages.cancel)}</button>`,i({},t,{fillMode:"solid"}))+n.renderButton(`<button class="k-coloreditor-apply" title="${s(e.messages.apply)}">${s(e.messages.apply)}</button>`,i({},t,{fillMode:"solid",themeColor:"primary"}))+"</div>":"")))(e,t)},_wrapper:function(){var t,o=this.options;(t=this.element.is("input")?this.element.addClass("k-hidden").wrap("<div>").parent():this.element).addClass("k-flatcolorpicker k-coloreditor").attr({role:"textbox","aria-keyshortcuts":"Enter"}).append(this._template()),this._selectedColor=e(".k-coloreditor-preview-color",t),this._previousColor=e(".k-coloreditor-current-color",t),this._viewsContainer=e(".k-coloreditor-views",t),t.find(".k-button[data-view="+o.view+"]").addClass(v).attr(C,!0),this.wrapper=t}});a.plugin(k)}(window.kendo.jQuery);var __meta__={id:"colorpicker",name:"Color tools",category:"web",description:"Color selection widgets",depends:["core","color","popup","slider","userevents","button","binder","textbox","numerictextbox","html.button"]};!function(e,t){var o=window.kendo,a=o.ui,n=a.Widget,r=o.Color,i=o.parseColor,s=o.keys,l=".kendoColorTools",c="click"+l,d="keydown"+l,p=a.colorpicker.ColorSelector,u=a.FlatColorPicker,h=n.extend({init:function(t,a){var r=this;a&&a.palette&&!a.view&&(a.view="palette"),n.fn.init.call(r,t,a),a=r.options=o.deepExtend({},r.options,a);var s=(t=r.element).attr("value")||t.val();s=i(s||a.value,!0),r._value=a.value=s;var l=o.html.renderButton('<button class="k-input-button" unselectable="on" aria-label="select" tabindex="-1"></button>',e.extend({},r.options,{icon:"caret-alt-down"})),c=r._inputWrapper=r.wrapper=e(r._template(e.extend({},r.options,{_buttonHtml:l})));r._applyCssClasses(),t.hide().after(c),t.is("input")&&(t.appendTo(c),r._preventDefaultLabelClick()),r._tabIndex=t.attr("tabIndex")||0,r.enable(!t.attr("disabled"));var d=t.attr("accesskey");d&&(t.attr("accesskey",null),c.attr("accesskey",d)),r.bind("activate",(function(e){e.isDefaultPrevented()||r.toggle()})),r._updateUI(s)},destroy:function(){this.wrapper.off(l).find("*").off(l),this._popup&&(this._selector.destroy(),this._popup.destroy()),this._selector=this._popup=this.wrapper=null,n.fn.destroy.call(this)},enable:function(e){var t=this,o=t.wrapper,a=o.find(".k-input-button");0===arguments.length&&(e=!0),t.element.attr("disabled",!e),o.attr("aria-disabled",!e),a.off(l).on("mousedown"+l,v),o.addClass("k-disabled").removeAttr("tabIndex").add("*",o).off(l),e?o.removeClass("k-disabled").attr("tabIndex",t._tabIndex).on("mouseenter"+l,(function(){o.addClass("k-hover")})).on("mouseleave"+l,(function(){o.removeClass("k-hover")})).on("focus"+l,(function(){o.addClass("k-focus")})).on("blur"+l,(function(){o.removeClass("k-focus")})).on(d,f(t._keydown,t)).on(c,".k-input-button",f(t.toggle,t)).on(c,".k-input-inner",(function(){t.trigger("activate")})):t.close()},_template:o.template((({toolIcon:e,_buttonHtml:t})=>`<span role="combobox" aria-haspopup="dialog" aria-expanded="false" class="k-colorpicker k-picker k-icon-picker"><span class="k-input-inner"><span class="k-value-icon k-color-preview ${e?"k-icon-color-preview":""}">`+(e?o.ui.icon({icon:e,iconClass:"k-color-preview-icon"}):"")+'<span class="k-color-preview-mask"></span></span></span >'+t+"</span>")),options:{name:"ColorPicker",closeOnSelect:!1,contrastTool:!1,palette:null,columns:10,toolIcon:null,value:null,messages:{apply:"Apply",cancel:"Cancel",noColor:"no color",clearColor:"Clear color",previewInput:null,contrastRatio:"Contrast ratio:",fail:"Fail",pass:"Pass",hex:"HEX",toggleFormat:"Toggle format",red:"Red",green:"Green",blue:"Blue",alpha:"Alpha",gradient:"Gradient view",palette:"Palette view"},opacity:!1,buttons:!0,preview:!0,clearButton:!1,input:!0,format:"hex",formats:["rgb","hex"],view:"gradient",views:["gradient","palette"],backgroundColor:null,ARIATemplate:e=>`Current selected color is ${e||"none"}`,size:"medium",rounded:"medium",fillMode:"solid"},events:["activate","change","select","open","close"],open:function(){this.element.prop("disabled")||this._getPopup().open()},close:function(){var e=this._selector&&this._selector.options||{};e._closing=!0,this._getPopup().close(),delete e._closing},toggle:function(){this.element.prop("disabled")||this._getPopup().toggle()},setBackgroundColor:function(e){var t=this,o=function(){t._selector.setBackgroundColor(e)};t.options.contrastTool.backgroundColor=e,t._selector&&t._popup&&t._popup.visible()?t._selector.setBackgroundColor(e):t._popup&&(t._popup.unbind("activate",o),t._popup.bind("activate",o))},_noColorIcon:function(){return this.wrapper.find(".k-color-preview")},color:p.fn.color,value:p.fn.value,_select:p.fn._select,_triggerSelect:p.fn._triggerSelect,_isInputTypeColor:p.fn._isInputTypeColor,_preventDefaultLabelClick:function(){var e=this,t=e.element,o=t.closest("label"),a=t.attr("id");a&&(o=o.add('label[for="'+a+'"]')),o.on("click",(function(t){e.open(),t.preventDefault()}))},_updateUI:function(e,t){this._updateInput(e),this._triggerSelect(e),this.wrapper.find(".k-color-preview-mask").css("background-color",e?e.toDisplay():""),this._noColorIcon().toggleClass("k-no-color",!e),this._selector&&!t&&this._selector.value(e)},_updateInput:function(e){var t="";e&&(t=this._isInputTypeColor()||1==e.a?e.toCss():e.toCssRgba(),this.element.val(t)),this._ariaTemplate||(this._ariaTemplate=o.template(this.options.ARIATemplate)),this.wrapper.attr("aria-label",this._ariaTemplate(t))},_keydown:function(e){var t=e.keyCode;this._getPopup().visible()?(t==s.ESC?this._selector._cancel():this._selector._keydown(e),v(e)):t!=s.ENTER&&t!=s.DOWN||(this.open(),v(e))},_getPopup:function(){var t=this,a=t._popup;if(!a){var n,s=t.options;n=u,s.autoupdate=!0!==s.buttons,delete s.select,delete s.change,delete s.cancel,s._otOfPicker=!1;var l=o.guid(),c=e('<div id="'+l+'" class="k-colorpicker-popup"></div>').appendTo(document.body),d=t._selector=new n(e("<div></div>").appendTo(c),s);t.wrapper.attr("aria-controls",l),t._popup=a=c.kendoPopup({anchor:t.wrapper,adjustSize:{width:5,height:0}}).data("kendoPopup"),d.bind({select:function(e){t._updateUI(i(e.value),!0)},change:function(e){t.options.buttons?t._select(d.color()):t._updateUI(i(e.value),!0),(t.options.buttons||"palette"===t._selector.options.view&&t.options.closeOnSelect)&&t.close()},cancel:function(){t.close()}}),a.bind({close:function(o){if(t.trigger("close"))o.preventDefault();else{t.wrapper.removeClass("k-focus");var a=d.color();t.options.buttons?t._select(t.color()):t._select(a),(a=t.color())&&a.h&&(t._cachedHue=a.h),event&&event instanceof MouseEvent&&0===e(event.target).parents(".k-colorpicker-popup").length||setTimeout((function(){t.wrapper&&!t.wrapper.is("[unselectable='on']")&&t.wrapper.trigger("focus")}),0),t.wrapper.attr("aria-expanded",!1)}},open:function(e){t.trigger("open")?e.preventDefault():(t.wrapper.addClass("k-focus"),t.wrapper.attr("aria-expanded",!0))},activate:function(){var e,o=t.color();o&&(o=o.toHSV(),e=r.fromHSV(t._cachedHue||0,o.s,o.v,o.a),o=o.equals(e)?e:o),d.value(o),d.focus(),t.wrapper.addClass("k-focus")}})}return a}});function v(e){e.preventDefault()}function f(e,t){return function(){return e.apply(t,arguments)}}a.plugin(h),o.cssProperties.registerPrefix("ColorPicker","k-picker-"),o.cssProperties.registerValues("ColorPicker",[{prop:"rounded",values:o.cssProperties.roundedValues.concat([["full","full"]])}])}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.colorpicker.js.map
