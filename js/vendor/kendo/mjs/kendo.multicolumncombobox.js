/**
 * Kendo UI v2023.2.829 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.combobox.js";var __meta__={id:"multicolumncombobox",name:"MultiColumnComboBox",category:"web",description:"The MultiColumnComboBox widget allows the selection from pre-defined values or entering a new value where the list popup is rendered in table layout.",depends:["combobox"],features:[{id:"mobile-scroller",name:"Mobile scroller",description:"Support for kinetic scrolling in mobile device",depends:["mobile.scroller"]},{id:"virtualization",name:"VirtualList",description:"Support for virtualization",depends:["virtuallist"]}]};!function(o,t){var i=window.kendo,e=i.ui,n=e.ComboBox,r=/^\d+(\.\d+)?%$/i,s=n.extend({init:function(o,t){n.fn.init.call(this,o,t),this.list.parent().addClass("k-dropdowngrid-popup"),this._allColumnsWidthsAreSet(this.options)?this.list.parent().width(this._calculateDropDownWidth(this.options)):this.options.dropDownWidth&&this.list.parent().width(this.options.dropDownWidth)},options:{name:"MultiColumnComboBox",ns:".kendoMultiColumnComboBox",columns:[],dropDownWidth:null,filterFields:[]},setOptions:function(o){n.fn.setOptions.call(this,o),this._allColumnsWidthsAreSet(o)?this.list.parent().width(this._calculateDropDownWidth(o)):this.options.dropDownWidth&&this.list.parent().width(this.options.dropDownWidth)},_allColumnsWidthsAreSet:function(o){var t=o.columns;if(!t||!t.length)return!1;for(var i=0;i<t.length;i++){var e=t[i].width;if(!e||isNaN(parseInt(e,10))||r.test(e))return!1}return!0},_calculateDropDownWidth:function(o){for(var t=o.columns,e=i.support.scrollbar(),n=0;n<t.length;n++){var r=t[n].width;e+=parseInt(r,10)}return e},_wrapper:function(){n.fn._wrapper.call(this),this.wrapper.addClass("k-dropdowngrid")}});e.plugin(s),i.cssProperties.registerPrefix("MultiColumnComboBox","k-input-"),i.cssProperties.registerValues("MultiColumnComboBox",[{prop:"rounded",values:i.cssProperties.roundedValues.concat([["full","full"]])}])}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.multicolumncombobox.js.map
