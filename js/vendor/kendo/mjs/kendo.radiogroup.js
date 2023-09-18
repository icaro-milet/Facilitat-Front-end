/**
 * Kendo UI v2023.2.829 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.inputgroupbase.js";import"./kendo.radiobutton.js";var __meta__={id:"radiogroup",name:"RadioGroup",category:"web",description:"The RadioGroup component.",depends:["core","inputgroupbase","radiobutton"]};!function(e,t){var i=window.kendo.ui,a=i.InputGroupBase,r="checked",n="role",o=a.extend({options:{name:"RadioGroup",inputName:"",inputSize:"medium",enabled:!0,labelPosition:"after",layout:"vertical",items:[]},ITEM_TEMPLATE:'<li class="k-radio-item"><input type="radio" class="k-radio" ><label class="k-radio-label" ></label></li>',NS:".kendoRadioGroup",COMPONENT:"kendoRadioButton",groupStyles:{item:"k-radio-item",input:"k-radio",label:"k-radio-label",list:"k-radio-list",vertical:"k-list-vertical",horizontal:"k-list-horizontal",disabled:"k-disabled"},item:function(t){var i=this.wrapper.find("input:checked");return this._indexIsPresent(t)?e(this.items().get(t)):i.length?i:void 0},value:function(e){var t=this,i=t.element.find("[value='"+e+"']");if(undefined===e)return t._value;null===e&&(t._value=null,t.element.find("."+t.groupStyles.input).prop(r,!1)),i.length>0&&(t._value=e,t.element.find("."+t.groupStyles.input).prop(r,!1),i.prop(r,!0))},_changeHandler:function(t){var i=e(t.target),a=this._value;this._targetForPreventedChange!==t.target?(this._value=i.val(),this.trigger("change",{oldValue:a,newValue:this._value,target:i})):this._targetForPreventedChange=null},_dataValRequired:function(e){e["data-val-required"]=this.wrapper.attr("data-val-required")},_wrapper:function(){a.fn._wrapper.call(this),this.wrapper.find("."+this.groupStyles.item).attr(n,"none"),this.wrapper.attr(n,"radiogroup")}});i.plugin(o)}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.radiogroup.js.map
