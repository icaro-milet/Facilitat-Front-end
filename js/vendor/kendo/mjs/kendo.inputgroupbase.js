/**
 * Kendo UI v2023.2.829 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";var __meta__={id:"inputgroupbase",name:"InputGroupBase",category:"web",description:"The InputGroupBase component.",depends:["core"]};!function(t,e){var i=window.kendo,n=i.ui,s=n.Widget,a=t.extend,r="change",l="focus",o="select",d=".",u="disabled",p="required",h=s.extend({init:function(t,e){var i=this;s.fn.init.call(i,t,e),i.options=a({},i.options,e),i._iterateMarkupItems(),i._parseItems(i.options.items),i._wrapper(),i.value(i.options.value),i._attachEvents()},options:{name:"InputGroupBase"},events:[r,l,o],ITEM_TEMPLATE:"",NS:".kendoInputGroupBase",groupStyles:{},destroy:function(){var e=this;this.items().each((function(e,n){var s=i.widgetInstance(t(n));s&&s.destroy()})),e.element.off(e.NS),s.fn.destroy.call(e)},item:function(e){if(this._indexIsPresent(e))return t(this.items().get(e))},items:function(){return this.wrapper.find(d+this.groupStyles.input)},enable:function(t){var e;!1!==t&&!0!==t||(e=this.element.find(d+this.groupStyles.item),this._disabledOnElements(e,!t))},enableItem:function(e,i){if(!1===e||!0===e){if(this._indexIsPresent(i))i=t(this.element.find(d+this.groupStyles.item).get(i));else{if(!(i instanceof jQuery))return;if(i.is("input"))i=i.closest(d+this.groupStyles.item);else if(!i.is("li"))return}this._disabledOnElements(i,!e)}},value:function(){return!1},_attachEvents:function(){var t=this;t.element.on(l+t.NS,d+t.groupStyles.input,t._focusHandler.bind(t)).on(r+t.NS,d+t.groupStyles.input,t._changeHandler.bind(t)).on("click"+t.NS,d+t.groupStyles.input,t._clickHandler.bind(t))},_clickHandler:function(e){var i=t(e.target);this.trigger(o,{target:i})&&(e.preventDefault(),e.stopPropagation(),this._targetForPreventedChange=e.target)},_changeHandler:function(){return!1},_dataValRequired:function(){return!1},_disabledOnElements:function(t,e){var i=t.find("input");e?(i.attr(u,""),t.addClass(this.groupStyles.disabled)):(i.prop(u,!1),t.removeClass(this.groupStyles.disabled))},_focusHandler:function(e){var i=t(e.target);this.trigger(l,{target:i})},_indexIsPresent:function(t){return!isNaN(t)&&null!==t&&!0!==t&&!1!==t&&this.wrapper.find(d+this.groupStyles.input).length>t},_initializeItem:function(e,i){var n=t(this.wrapper.find(d+this.groupStyles.item).get(i)||this.ITEM_TEMPLATE);this._preInitItem(e,n),this._initItem(e,n),this._postInitItem(e,n)},_preInitItem:function(t,i){var n=i.find(d+this.groupStyles.label),s=i.find(d+this.groupStyles.input);0===i.closest(d+this.groupStyles.list).length&&this.element.append(i),null!==t.value&&t.value!==e&&s.val(t.value),t.id&&(s.attr("id",t.id),n.attr("for",t.id))},_initItem:function(e,i){var n=i.find(d+this.groupStyles.label),s=i.find(d+this.groupStyles.input),a=t.extend({},e,{rounded:this.options.inputRounded,size:this.options.inputSize});delete a.name,e.label&&n.length>0&&n.remove(),s[this.COMPONENT](a)},_postInitItem:function(t,e){var i=e.find(d+this.groupStyles.label),n=e.find(d+this.groupStyles.input);t.name&&n.attr("name",t.name),t.labelAfter||i.after(n),t.attributes&&e.attr(t.attributes),t.cssClass&&e.addClass(t.cssClass),t.enabled||this._disabledOnElements(e,!0),t.validation&&n.attr(t.validation)},_iterateMarkupItems:function(){var t=this.element;t.children("li").length>0&&t.find("li").each(this._markupItem.bind(this))},_markupItem:function(e,i){i.querySelector("input").hasAttribute("disabled")&&t(i).addClass(this.groupStyles.disabled)},_parseItem:function(t,n){var s=this.options,r=this._items;"string"!=typeof t&&"number"!=typeof t||(t={value:t,label:t}),!1!==t.encoded&&(t.encoded=!0),"after"===s.labelPosition&&(t.labelAfter=!0),t.enabled===e&&(t.enabled=s.enabled),t.id||(t.id=i.guid()),t.name=s.inputName||this.element.attr("name")||this.element.attr("id"),r.length>n?r[n]=a({},r[n],t):r.push(t)},_parseItems:function(t){this._items||(this._items=[]),t&&t.forEach(this._parseItem.bind(this))},_validationSettings:function(){var t=this.wrapper,e=this._items,i={};t.is("[required]")&&(i.required=p,t.prop(p,!1)),t.is("[data-val=true]")&&(i["data-val"]="true",t.removeAttr("data-val")),t.is("[data-val-required]")&&(this._dataValRequired(i),t.removeAttr("data-val-required")),t.is("[data-val-server]")&&(i["data-val-server"]=t.attr("data-val-server")),Object.keys(i).length>0&&(!e||0===e.length)&&t.find("li").each((function(){e.push({})})),e.forEach((function(t){t.validation=i}))},_wrapper:function(){var t=this.wrapper=this.element,e=this._items,i=t.find("li"),n=t.find("input");t.addClass(this.groupStyles.list),"vertical"===this.options.layout?t.addClass(this.groupStyles.vertical):t.addClass(this.groupStyles.horizontal),i.length>0&&n.length>0&&(i.addClass(this.groupStyles.item),n.addClass(this.groupStyles.input),t.find("label").addClass(this.groupStyles.label)),this._validationSettings(),e.forEach(this._initializeItem.bind(this))}});n.plugin(h)}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.inputgroupbase.js.map
