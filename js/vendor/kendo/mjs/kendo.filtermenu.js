/**
 * Kendo UI v2023.2.829 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.datepicker.js";import"./kendo.numerictextbox.js";import"./kendo.dropdownlist.js";import"./kendo.buttongroup.js";import"./kendo.binder.js";import"./kendo.html.button.js";import"./kendo.icons.js";var __meta__={id:"filtermenu",name:"Filtering Menu",category:"framework",depends:["datepicker","numerictextbox","dropdownlist","buttongroup","binder","html.button","icons"],advanced:!0};!function(e,t){var i=window.kendo,l=i.ui,a=i.support,s=i.htmlEncode,r=a.browser.chrome?"disabled":"off",n="kendoPopup",o="init",c="open",u="refresh",d="change",p=".kendoFilterMenu",f=".k-table-th",h="Is equal to",m="Is not equal to",k={number:"numerictextbox",date:"datepicker"},g={string:"text",number:"number",date:"date"},v=i.isFunction,b=l.Widget,$=({actionsCssClass:e,messages:t})=>`<div class="k-actions-stretched ${e||"k-actions"}">`+i.html.renderButton(`<button title="${t.filter}">${s(t.filter)}</button>`,{type:"submit",themeColor:"primary",icon:"filter"})+i.html.renderButton(`<button title="${t.clear}">${s(t.clear)}</button>`,{type:"reset",icon:"filter-clear"})+"</div>",_=({field:e,format:t,ns:i,messages:l,extra:a,operators:r,type:n,role:o,values:c,componentType:u})=>`<div class="k-filter-menu-container"><div class="k-filter-help-text">${s(l.info)}</div><label><input type="radio" data-${i}bind="checked: filters[0].value" value="true" name="filters[0].value"/>${s(l.isTrue)}</label><label><input type="radio" data-${i}bind="checked: filters[0].value" value="false" name="filters[0].value"/>${s(l.isFalse)}</label>`+$({messages:l})+"</div>",y=({field:e,format:t,ns:l,messages:a,extra:r,operators:n,type:o,role:c,values:u,componentType:d})=>{var p=i.guid(),f=i.guid();return`<div class="k-filter-menu-container"><div><ul class="k-radio-list k-reset"><li><input type="radio" class="k-radio k-radio-md" id="${p}" data-${l}bind="checked: filters[0].value" value="true" name="filters[0].value" /><label class="k-radio-label" for="${p}">${s(a.isTrue)}</label></li><li><input type="radio" class="k-radio k-radio-md" id="${f}" data-${l}bind="checked: filters[0].value" value="false" name="filters[0].value" /><label class="k-radio-label" for="${f}">${s(a.isFalse)}</label></li></ul>`+$({actionsCssClass:"k-columnmenu-actions",messages:a})+"</div></div>"},x=({field:e,format:t,ns:i,messages:l,extra:a,operators:r,type:n,role:o,values:c,componentType:u})=>`<div class="k-filter-menu-container"><div class="k-filter-help-text">${s(l.info)}</div><label><span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"><input class="k-input-inner" data-${i}bind="value: filters[0].value" name="filters[0].value"/></span></label>`+$({messages:l})+"</div>",w=({field:e,format:t,ns:l,messages:a,extra:r,operators:n,type:o,role:c,values:u,componentType:d})=>'<div class="k-filter-menu-container">'+("classic"===d?`<div class="k-filter-help-text">${s(a.info)}</div>`:"")+`<select title="${a.operator}" data-${l}bind="value: filters[0].operator" data-${l}role="dropdownlist">`+`${Object.keys(n||{}).map((e=>`<option value="${e}">${n[e]}</option>`))}</select>`+(u?`<select title="${a.value}" data-${l}bind="value:filters[0].value" data-${l}text-field="text" data-${l}value-field="value" data-${l}source='${i.stringify(u).replace(/\'/g,"&#39;")}' data-${l}role="dropdownlist" data-${l}option-label="${a.selectValue}" data-${l}value-primitive="true"></select>`:`<input title="${a.value}" data-${l}bind="value:filters[0].value" class="k-input-inner" type="text" ${c?`data-${l}role="${c}"`:""} />`)+(r?("modern"===d?`<ul data-${l}role="buttongroup" data-bind="events: { select: onLogicChange }"><li data-${l}value="and">And</li><li data-${l}value="or">Or</li></ul>`:`<select title="${a.logic}" class="k-filter-and" data-${l}bind="value: logic" data-${l}role="dropdownlist"><option value="and">${s(a.and)}</option><option value="or">${s(a.or)}</option></select>`)+`<select title="${a.additionalOperator}" data-${l}bind="value: filters[1].operator" data-${l}role="dropdownlist">`+`${Object.keys(n||{}).map((e=>`<option value="${e}">${s(n[e])}</option>`))}</select>`+(u?`<select title="${a.additionalValue}" data-${l}bind="value:filters[1].value" data-${l}text-field="text" data-${l}value-field="value" data-${l}source='${i.stringify(u).replace(/\'/g,"&#39;")}' data-${l}role="dropdownlist" data-${l}option-label="${a.selectValue}" data-${l}value-primitive="true"></select>`:`<input title="${a.additionalValue}" data-${l}bind="value: filters[1].value" class="k-input-inner" type="text" ${c?`data-${l}role="${c}"`:""}/>`):"")+$({messages:a})+"</div>",S=({field:e,title:t,format:l,ns:a,messages:n,extra:o,operators:c,filterMenuGuid:u,type:d,role:p,inputType:f,values:h})=>`<div data-${a}role="view" class="k-grid-filter-menu"><div data-${a}role="header" class="k-header"><a href="#" class="k-header-cancel k-link" title="${n.cancel}" aria-label="${n.cancel}">${i.ui.icon("chevron-left")}</a>${s(n.filter)} ${s(n.into)} ${s(t)}<a href="#" class="k-header-done k-link" title="${n.done}" aria-label="${n.done}">${i.ui.icon("check")}</a></div><form title="${n.title}" class="k-filter-menu"><ul class="k-reset"><li><span class="k-list-title k-filter-help-text">${s(n.info)}</span><ul class="k-listgroup k-listgroup-flush"><li class="k-item k-listgroup-item"><label class="k-listgroup-form-row k-label"><span class="k-listgroup-form-field-label k-filter-operator-text">${n.operator}</span><span class="k-listgroup-form-field-wrapper"><select id="operator_${u}" title="${n.operator}" class="k-filter-operator" data-${a}bind="value: filters[0].operator" autocomplete="${r}" >${Object.keys(c||{}).map((e=>`<option value="${e}">${s(c[e])}</option>`))}</select></span></label></li><li class="k-item k-listgroup-item"><label class="k-listgroup-form-row k-label"><span class="k-listgroup-form-field-label k-filter-input-text">${n.value}</span><span class="k-listgroup-form-field-wrapper">`+(h?`<select id="value_${u}" title="${n.value}" data-${a}bind="value:filters[0].value" autocomplete="${r}" ><option value="">${n.selectValue}</option>${Object.keys(h||{}).map((e=>`<option value="${h[e].value}">${s(h[e].text)}</option>`))}</select>`:`<input id="value_${u}" title="${n.value}" data-${a}bind="value:filters[0].value" class="k-value-input" type="${f}" autocomplete="${r}" />`)+"</span></label></li></ul>"+(o?`<ul class="k-listgroup k-listgroup-flush"><li class="k-item k-listgroup-item"><label class="k-listgroup-form-row k-label"><span class="k-listgroup-form-field-label k-filter-logic-and-text">${n.and}</span><span class="k-listgroup-form-field-wrapper"><input id="and_${u}" title="${n.and}" type="radio" name="logic"data-${a}bind="checked: logic" value="and" autocomplete="${r}" /></span></label></li><li class="k-item k-listgroup-item"><label class="k-listgroup-form-row k-label"><span class="k-listgroup-form-field-label k-filter-logic-or-text">${n.or}</span><span class="k-listgroup-form-field-wrapper"><input id="or_${u}" title="${n.or}" type="radio" name="logic" data-${a}bind="checked: logic" value="or" autocomplete="${r}" /></span></label></li></ul><ul class="k-listgroup k-listgroup-flush"><li class="k-item k-listgroup-item"><label class="k-listgroup-form-row k-label"><span class="k-listgroup-form-field-label k-filter-operator-text">${n.additionalOperator}</span><span class="k-listgroup-form-field-wrapper"><select id="additionalOperator_${u}" title="${n.additionalOperator}" class="k-filter-operator" data-${a}bind="value: filters[1].operator" autocomplete="${r}" >${Object.keys(c||{}).map((e=>`<option value="${e}">${c[e]}</option>`))}</select></span></label></li><li class="k-item k-listgroup-item"><label class="k-listgroup-form-row k-label"><span class="k-listgroup-form-field-label k-filter-input-text">${n.additionalValue}</span><span class="k-listgroup-form-field-wrapper">`+(h?`<select id="additionalValue_${u}" title="${n.additionalValue}" data-${a}bind="value:filters[1].value" autocomplete="${r}" ><option value="">${n.selectValue}</option>${Object.keys(h||{}).map((e=>`<option value="${h[e].value}">${s(h[e].text)}</option>`))}</select>`:`<input id="additionalValue_${u}" title="${n.additionalValue}" data-${a}bind="value:filters[1].value" class="k-value-input" type="${f}" autocomplete="${r}" />`)+"</span></label></li></ul>":"")+'</li><li class="k-item k-clear-wrap"><span class="k-list-title">&nbsp;</span><ul class="k-listgroup k-listgroup-flush"><li class="k-listgroup-item">'+`<span class="k-link k-label k-clear" title="${n.clear}" aria-label="${n.clear}">`+`${s(n.clear)}</span></li></ul></li></ul></form></div>`,T=({field:e,title:t,format:l,ns:a,messages:n,extra:o,operators:c,filterMenuGuid:u,type:d,role:p,inputType:f,values:h})=>`<div data-${a}role="view" class="k-grid-filter-menu"><div data-${a}role="header" class="k-header"><a href="#" class="k-header-cancel k-link" title="${n.cancel}" aria-label="${n.cancel}">${i.ui.icon("chevron-left")}</a>${s(n.filter)} ${s(n.into)} ${s(t)}<a href="#" class="k-header-done k-link" title="${n.done}" aria-label="${n.done}">${i.ui.icon("check")}</a></div><form title="${n.title}" class="k-filter-menu"><ul class="k-reset"><li><span class="k-list-title k-filter-help-text">${s(n.info)}</span><ul class="k-listgroup k-listgroup-flush k-multicheck-bool-wrap"><li class="k-item k-listgroup-item"><label class="k-listgroup-form-row k-label"><span class="k-listgroup-form-field-label k-item-title">${s(n.isTrue)}</span><span class="k-listgroup-form-field-wrapper"></span><input id="true_${u}" title="${n.isTrue}" type="radio" data-${a}bind="checked: filters[0].value" value="true" name="filters[0].value" autocomplete="${r}" /></span></label></li><li class="k-item k-listgroup-item"><label class="k-listgroup-form-row k-label"><span for="false_${u}" class="k-listgroup-form-field-label k-item-title">${s(n.isFalse)}</span><span class="k-listgroup-form-field-wrapper"><input id="false_${u}" title="${n.isFalse}" type="radio" data-${a}bind="checked: filters[0].value" value="false" name="filters[0].value" autocomplete="${r}" /></span></label></li></ul></li><li class="k-item k-clear-wrap"><span class="k-list-title">&nbsp;</span><ul class="k-listgroup k-listgroup-flush"><li class="k-listgroup-item"><span class="k-link k-label k-clear" title="${n.clear}" aria-label="${n.clear}">${s(n.clear)}</span></li></ul></li></ul></form></div>`;function F(t,i){t.filters&&(t.filters=e.grep(t.filters,(function(e){return F(e,i),e.filters?e.filters.length:e.field!=i})))}function C(e){var t,i,l,a,s,r;if(e&&e.length)for(r=[],t=0,i=e.length;t<i;t++)s=""!==(l=e[t]).text?l.text||l.value||l:l.text,a=null==l.value?l.text||l:l.value,r[t]={text:s,value:a};return r}var A=b.extend({init:function(t,l){var a,s,r,n,o=this,c="string";for(s in(l=l||{}).componentType=l.componentType||"classic",b.fn.init.call(o,t,l),a=o.operators=l.operators||{},t=o.element,l=o.options,o.dataSource=B.create(l.dataSource),o.field=l.field||t.attr(i.attr("field")),(n=e(t.closest(f))).length?o.appendTo=n.find(l.appendTo):o.appendTo=e(l.appendTo),o.link=o._createLink()||e(),o.model=o.dataSource.reader.model,o._parse=function(e){return null!=e?e+"":e},o.model&&o.model.fields&&(r=o.model.fields[o.field])&&(c=r.type||"string",r.parse&&(o._parse=r.parse.bind(r))),l.values&&(c="enums"),o.type=c,a=a[c]||l.operators[c])break;o._defaultFilter=function(){return{field:o.field,operator:s||"eq",value:""}},o._refreshHandler=o.refresh.bind(o),o.dataSource.bind(d,o._refreshHandler),l.appendToElement?o._init():o.refresh()},_init:function(){var t,l=this,a=l.options.ui,s=v(a),r=i.attr("role");l.pane=l.options.pane,l.pane&&(l._isMobile=!0),s||(t=a||k[l.type]),l._isMobile?l._createMobileForm(t):l._createForm(t),l.form.on("submit"+p,l._submit.bind(l)).on("reset"+p,l._reset.bind(l)),s?l.form.find(".k-input-inner").removeClass("k-input-inner").each((function(){a(e(this))})):(l.form.find(".k-input-inner["+r+"]").removeClass("k-input-inner"),l.form.find(".k-input-inner:not([data-role]):not(.k-numerictextbox>.k-input-inner)").wrap("<span class='k-textbox k-input k-input-md k-rounded-md k-input-solid'></span>")),l.refresh(),l.trigger(o,{field:l.field,container:l.form}),l.options.cycleForm&&i.cycleForm(l.form)},_createForm:function(t){var l=this,a=l.options,r=l.operators||{},o=l.type;r=r[o]||a.operators[o],l.form=e('<form title="'+s(l.options.messages.title)+'" class="k-filter-menu"/>').html(i.template(l._getTemplate())({field:l.field,format:a.format,ns:i.ns,messages:a.messages,extra:a.extra,operators:r,type:o,role:t,values:C(a.values),componentType:l.options.componentType})),a.appendToElement?(l.element.append(l.form),l.popup=l.element.closest(".k-column-menu.k-popup").data(n)):l.popup=l.form[n]({anchor:l.link,copyAnchorStyles:!1,open:l._open.bind(l),activate:l._activate.bind(l),close:function(){l.options.closeCallback&&l.options.closeCallback(l.element)}}).data(n),l.form.on("keydown"+p,l._keydown.bind(l))},_getTemplate:function(){var e=this,t=v(e.options.ui);return"boolean"===e.type?t?x:"modern"===e.options.componentType?y:_:w},_createMobileForm:function(t){var l=this,a=l.options,s=l.operators||{},r=i.guid(),n=l.type;s=s[n]||a.operators[n],l.form=e("<div />").html(i.template("boolean"===n?T:S)({field:l.field,title:a.title||l.field,format:a.format,ns:i.ns,messages:a.messages,extra:a.extra,operators:s,filterMenuGuid:r,type:n,role:t,inputType:g[n],values:C(a.values)})),l.view=l.pane.append(l.form.html()),l.form=l.view.element.find("form"),l.view.element.on("click",".k-header-done",(function(e){l.form.submit(),e.preventDefault()})).on("click",".k-header-cancel",(function(e){l._closeForm(),e.preventDefault()})).on("click",".k-clear",(function(e){l._mobileClear(),e.preventDefault()})),l.view.bind("showStart",(function(){l.refresh()}))},_createLink:function(){var e,t=this,l=t.element,a=t.appendTo.length?l.find(t.appendTo):l,s=t.options,r=i.format(s.messages.buttonTitle,t.options.title||t.field);if(!s.appendToElement)return(e=l.addClass("k-filterable").find(".k-grid-filter-menu"))[0]||(e=a.append('<a class="k-grid-filter-menu k-grid-header-menu" href="#" aria-hidden="true" title="'+r+'" >'+i.ui.icon("filter")+"</a>").find(".k-grid-filter-menu")),e.attr("tabindex",-1).on("click"+p,t._click.bind(t)),e},refresh:function(){var e=this,t=e.dataSource.filter()||{filters:[],logic:"and"},l=[e._defaultFilter()],a=e._defaultFilter().operator;(e.options.extra||"isnull"!==a&&"isnullorempty"!==a&&"isnotnullorempty"!==a&&"isnotnull"!==a&&"isempty"!==a&&"isnotempty"!==a)&&l.push(e._defaultFilter()),e.filterModel=i.observable({logic:"and",filters:l}),e.form&&(i.bind(e.form.children().first(),e.filterModel),"modern"===e.options.componentType&&e.options.extra&&"boolean"!==e.type&&!e._isMobile&&(e.filterModel.bind("change",(function(){var t=i.attr("role"),l=e.form.find("["+t+"='buttongroup']").data("kendoButtonGroup"),a="and"===this.logic?0:1;l.select(l.element.children().eq(a))})),e.filterModel.set("onLogicChange",e._logicChangeHandler))),e._bind(t)?e.link.addClass("k-active"):e.link.removeClass("k-active")},_logicChangeHandler:function(e){var t=i.attr("value"),l=e.sender.current().attr(t);this.set("logic",l)},destroy:function(){var e=this;b.fn.destroy.call(e),e.form&&(i.unbind(e.form),i.destroy(e.form),e.form.off(p),e.popup&&(e.popup.destroy(),e.popup=null),e.form=null),e.view&&(e.view.purge(),e.view=null),e.link.off(p),e._refreshHandler&&(e.dataSource.unbind(d,e._refreshHandler),e.dataSource=null),e.element=e.link=e._refreshHandler=e.filterModel=null},_bind:function(e){var t,i,l,a,s=this,r=e.filters,n=!1,o=0,c=s.filterModel;for(t=0,i=r.length;t<i;t++)(a=r[t]).field==s.field?(c.set("logic",e.logic),(l=c.filters[o])||(c.filters.push({field:s.field}),l=c.filters[o]),l.set("value",s._parse(a.value)),l.set("operator",a.operator),o++,n=!0):a.filters&&(n=n||s._bind(a));return n},_stripFilters:function(t){return e.grep(t,(function(e){return""!==e.value&&null!=e.value||"isnull"===e.operator||"isnotnull"===e.operator||"isempty"===e.operator||"isnotempty"===e.operator||"isnullorempty"==e.operator||"isnotnullorempty"==e.operator}))},_merge:function(e){var t,i,l,a=this,s=e.logic||"and",r=this._stripFilters(e.filters),n=a.dataSource.filter()||{filters:[],logic:"and"};for(F(n,a.field),i=0,l=r.length;i<l;i++)(t=r[i]).value=a._parse(t.value);return r.length&&(n.filters.length?(e.filters=r,"and"!==n.logic&&(n.filters=[{logic:n.logic,filters:n.filters}],n.logic="and"),r.length>1?n.filters.push(e):n.filters.push(r[0])):(n.filters=r,n.logic=s)),n},filter:function(e){var t=this._stripFilters(e.filters);t.length&&this.trigger("change",{filter:{logic:e.logic,filters:t},field:this.field})||(e=this._merge(e)).filters.length&&this.dataSource.filter(e)},clear:function(t){var i=this;t=t||e.extend(!0,{},{filters:[]},i.dataSource.filter())||{filters:[]},this.trigger("change",{filter:null,field:i.field})||i._removeFilter(t)},_mobileClear:function(){var t=this,i=t.view.element;if("boolean"===t.type){var l=i.find("[type='radio']:checked"),a=l.val();l.val(""),l.trigger("change"),l.val(a),l.prop("checked",!1)}else{if(i.find("select").each((function(t,i){var l=e(i);l.val(l.find("option").first().val()),l.trigger("change")})),"string"===t.type||"date"===t.type||"number"===t.type)i.find(".k-value-input").each((function(t,i){var l=e(i);l.val(""),l.trigger("change")}));if(t.options.extra){var s=i.find("[name=logic]").first();s.prop("checked",!0),s.trigger("change")}}},_removeFilter:function(t){var i=this;t.filters=e.grep(t.filters,(function(t){return t.filters?(t.filters=(l=t.filters,a=i.field,e.grep(l,(function(t){return t.filters?(t.filters=e.grep(t.filters,(function(e){return e.field!=a})),t.filters.length):t.field!=a}))),t.filters.length):t.field!=i.field;var l,a})),t.filters.length||(t=null),i.dataSource.filter(t)},_submit:function(t){t.preventDefault(),t.stopPropagation();var i=this.filterModel.toJSON(),l=e.grep(i.filters,(function(e){return""!==e.value&&null!==e.value}));if(this._checkForNullOrEmptyFilter(i)||l&&l.length)this.filter(i);else{var a=this.dataSource.filter();a&&(a.filters.push(i),i=a),this.clear(i)}this._closeForm()},_checkForNullOrEmptyFilter:function(e){if(!e||!e.filters||!e.filters.length)return!1;var t,i=!1,l=!1;return e.filters[0]&&(i="isnull"==(t=e.filters[0].operator)||"isnotnull"==t||"isnotempty"==t||"isempty"==t||"isnullorempty"==t||"isnotnullorempty"==t),e.filters[1]&&(l="isnull"==(t=e.filters[1].operator)||"isnotnull"==t||"isnotempty"==t||"isempty"==t||"isnullorempty"==t||"isnotnullorempty"==t),!this.options.extra&&i||this.options.extra&&(i||l)},_reset:function(){this.clear(),this.options.search&&this.container&&this.container.find("label").parent().show(),this._closeForm()},_closeForm:function(){this._isMobile?this.pane.navigate("",this.options.animations.right):this.popup.close()},_click:function(e){e.preventDefault(),e.stopPropagation(),this.popup||this.pane||this._init(),this._isMobile?this.pane.navigate(this.view,this.options.animations.left):this.popup.toggle()},_open:function(){var t;e(".k-filter-menu").not(this.form).each((function(){(t=e(this).data(n))&&t.close()}))},_activate:function(){this.form.find(":kendoFocusable").first().trigger("focus"),this.trigger(c,{field:this.field,container:this.form})},_keydown:function(t){var l,a=e(t.target);if(t.keyCode==i.keys.ESC){if(l=i.widgetInstance(a.find("select")),a.hasClass("k-picker")&&l&&l.popup.visible())return void t.stopPropagation();a.closest(".k-popup").getKendoPopup().close()}},events:[o,"change",c],options:{name:"FilterMenu",extra:!0,appendToElement:!1,type:"string",operators:{string:{eq:h,neq:m,startswith:"Starts with",contains:"Contains",doesnotcontain:"Does not contain",endswith:"Ends with",isnull:"Is null",isnotnull:"Is not null",isempty:"Is empty",isnotempty:"Is not empty",isnullorempty:"Has no value",isnotnullorempty:"Has value"},number:{eq:h,neq:m,gte:"Is greater than or equal to",gt:"Is greater than",lte:"Is less than or equal to",lt:"Is less than",isnull:"Is null",isnotnull:"Is not null"},date:{eq:h,neq:m,gte:"Is after or equal to",gt:"Is after",lte:"Is before or equal to",lt:"Is before",isnull:"Is null",isnotnull:"Is not null"},enums:{eq:h,neq:m,isnull:"Is null",isnotnull:"Is not null"}},messages:{info:"Show items with value that:",title:"Show items with value that:",isTrue:"is true",isFalse:"is false",filter:"Filter",clear:"Clear",and:"And",or:"Or",selectValue:"-Select value-",operator:"Operator",value:"Value",additionalValue:"Additional value",additionalOperator:"Additional operator",logic:"Filters logic",cancel:"Cancel",done:"Done",into:"in",buttonTitle:"{0} filter column settings"},animations:{left:"slide",right:"slide:right"},componentType:"classic",cycleForm:!0,appendTo:null}}),H=".kendoFilterMultiCheck";function I(t,i){t.filters&&(t.filters=e.grep(t.filters,(function(e){return I(e,i),e.filters?e.filters.length:e.field==i&&"eq"==e.operator})))}function M(i){return"and"==i.logic&&i.filters.length>1?[]:i.filters?e.map(i.filters,(function(e){return M(e)})):i.value!==t?[i.value]:[]}function q(e,l){for(var a=i.getter(l,!0),s=[],r=0,n={};r<e.length;){var o=e[r++],c=a(o);c===t||n.hasOwnProperty(c)||(s.push(o),n[c]=!0)}return s}var B=i.data.DataSource,V=({field:e,title:t,ns:l,messages:a,search:s,checkAll:n})=>`<div data-${l}role="view" class="k-grid-filter-menu"><div data-${l}role="header" class="k-header"><a href="#" class="k-header-cancel k-link" title="${a.cancel}" aria-label="${a.cancel}">${i.ui.icon("chevron-left")}</a>${a.filter} ${a.into} ${t}<a href="#" class="k-header-done k-link" title="${a.done}" aria-label="${a.done}">${i.ui.icon("check")}</a></div><form class="k-filter-menu"><ul class="k-reset">`+(s?`<li class="k-space-right"><span class="k-searchbox k-textbox k-input k-input-md k-rounded-md k-input-solid"><input class="k-input-inner" placeholder="${a.search}" title="${a.search}" autocomplete="${r}"  /><span class="k-input-suffix">${i.ui.icon("search")}</span></li>`:"")+'<li class="k-filter-tools">'+`<span ${n?"":`${i.attr("style-visibility")}="hidden"`} class="k-label k-select-all" title="${a.checkAll}" `+`aria-label="${a.checkAll}">${a.checkAll}</span>`+`<span class="k-label k-clear-all" title="${a.clearAll}" `+`aria-label="${a.clearAll}">${a.clearAll}</span></li>`+(a.selectedItemsFormat?'<li><div class="k-filter-selected-items"></div></li>':"")+'<li><ul class="k-multicheck-wrap k-listgroup k-listgroup-flush"></ul></li></ul></form></div>',O=b.extend({init:function(t,l){var a;b.fn.init.call(this,t,l),l=this.options,this.element=e(t);var s,r,n=this.field=this.options.field||this.element.attr(i.attr("field")),o=l.checkSource;this._foreignKeyValues()?(this.checkSource=B.create(l.values),this.checkSource.fetch()):l.forceUnique?(delete(o=e.extend(!0,{},l.dataSource.options)).pageSize,this.checkSource=B.create(o),this.checkSource.reader.data=(s=this.checkSource.reader.data,r=this.field,function(e){return q(s(e),r)})):this.checkSource=B.create(o),this.dataSource=l.dataSource,this.model=this.dataSource.reader.model,this._parse=function(e){return e+""},this.model&&this.model.fields&&(n=this.model.fields[this.field])&&("number"==n.type?this._parse=function(e){return"string"==typeof e&&("null"===e.toLowerCase()||this._foreignKeyValues()&&""===e)?null:parseFloat(e)}:n.parse&&(this._parse=n.parse.bind(n)),this.type=n.type||"string"),(a=e(t.closest(f))).length?this.appendTo=a.find(l.appendTo):this.appendTo=e(l.appendTo),l.appendToElement?this._init():this._createLink(),this._refreshHandler=this.refresh.bind(this),this.dataSource.bind(d,this._refreshHandler)},_createLink:function(){var e=this.element,t=this.appendTo.length?e.find(this.appendTo):e,l=e.addClass("k-filterable").find(".k-grid-filter-menu"),a=s(i.format(this.options.messages.buttonTitle,this.options.title||this.field));l[0]||(l=t.append('<a class="k-grid-filter-menu k-grid-header-menu" href="#" title="'+a+'" aria-hidden="true"">'+i.ui.icon("filter")+"</a>").find(".k-grid-filter-menu")),this._link=l.attr("tabindex",-1).on("click"+p,this._click.bind(this))},_init:function(){var e=this,t=this.options.forceUnique,i=this.options;this.pane=i.pane,this.pane&&(this._isMobile=!0),this._createForm(),this._foreignKeyValues()?this.refresh():t&&!this.checkSource.options.serverPaging&&this.dataSource.data().length?(this.checkSource.data(q(this.dataSource.data(),this.field)),this.refresh()):(this._attachProgress(),this.checkSource.fetch((function(){e.refresh.call(e)}))),this.options.forceUnique||(this.checkChangeHandler=function(){e.container.empty(),e.refresh()},this.checkSource.bind(d,this.checkChangeHandler)),this.form.on("keydown"+H,this._keydown.bind(this)).on("submit"+H,this._filter.bind(this)).on("reset"+H,this._reset.bind(this)),this.trigger(o,{field:this.field,container:this.form})},_attachProgress:function(){var e=this;this._progressHandler=function(){l.progress(e.container,!0)},this._progressHideHandler=function(){l.progress(e.container,!1)},this.checkSource.bind("progress",this._progressHandler).bind("change",this._progressHideHandler)},_input:function(){var e=this;e._clearTypingTimeout(),e._typingTimeout=setTimeout((function(){e.search()}),100)},_clearSearch:function(){this.searchTextBox.val(""),this.search()},_clearTypingTimeout:function(){this._typingTimeout&&(clearTimeout(this._typingTimeout),this._typingTimeout=null)},search:function(){var e=this.options.ignoreCase,t=this.searchTextBox[0].value,i=this.container.find("label");e&&(t=t.toLowerCase());var l=0;for(this.options.checkAll&&i.length&&(this._isMobile?this.view.element.find(".k-select-all")[0].style.visibility=t?"hidden":"":(i[0].parentNode.style.display=t?"none":"",l++));l<i.length;){var a=i[l],s=a.textContent||a.innerText;e&&(s=s.toLowerCase()),a.parentNode.style.display=s.indexOf(t)>=0?"":"none",l++}},_activate:function(){this.form.find(":kendoFocusable").first().trigger("focus"),this.trigger(c,{field:this.field,container:this.form})},_createForm:function(){var t=this.options,l="",a=this;if(this._isMobile||(l+="<div class='k-filter-menu-container'>",t.search&&(l+="<span class='k-searchbox k-textbox k-input k-input-md k-rounded-md k-input-solid'>"+i.ui.icon("search")+"<input class='k-input-inner' type='text' placeholder='"+s(t.messages.search)+"' /><span class='k-input-suffix'><span class='k-clear-value'>"+i.ui.icon("x")+"</span></span></span>"),l+="<ul class='k-reset k-multicheck-wrap'></ul>",t.messages.selectedItemsFormat&&(l+="<div class='k-filter-selected-items'>"+i.format(t.messages.selectedItemsFormat,0)+"</div>"),l+="<div class='k-actions'>",l+="<button type='submit' class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary'><span class='k-button-text'>"+s(t.messages.filter)+"</span></button>",l+="<button type='reset' class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base'><span class='k-button-text'>"+s(t.messages.clear)+"</span></button>",l+="</div>",l+="</div>",this.form=e('<form class="k-filter-menu"/>').html(l),this.container=this.form.find(".k-multicheck-wrap")),this._isMobile){let l=e(i.template(V)({field:a.field,title:t.title||a.field,ns:i.ns,messages:t.messages,search:t.search,checkAll:t.checkAll}));i.applyStylesFromKendoAttributes(l,["visibility"]),a.form=e("<div />").append(l),a.view=a.pane.append(a.form.html()),a.form=a.view.element.find("form");var r=this.view.element;this.container=r.find(".k-multicheck-wrap"),r.on("click",".k-header-done",(function(e){a.form.submit(),e.preventDefault()})).on("click",".k-header-cancel",(function(e){a._closeForm(),e.preventDefault()})).on("click",".k-clear-all",(function(e){a._mobileCheckAll(!1),e.preventDefault()})).on("click",".k-select-all",(function(e){a._mobileCheckAll(!0),e.preventDefault()})),a.view.bind("showStart",(function(){a.refresh()}))}else t.appendToElement?(this.popup=this.element.closest(".k-column-menu.k-popup").data(n),this.element.append(this.form)):a.popup=a.form.kendoPopup({anchor:a._link,copyAnchorStyles:!1,open:a._open.bind(a),activate:a._activate.bind(a),close:function(){a.options.closeCallback&&a.options.closeCallback(a.element)}}).data(n);t.search&&(this.searchTextBox=this.form.find(".k-searchbox input"),this.searchTextBox.on("input"+H,this._input.bind(this)),this.clearSearchButton=this.form.find(".k-searchbox .k-clear-value"),this.clearSearchButton.on("click"+H,this._clearSearch.bind(this)))},_open:function(){var t;e(".k-filter-menu").not(this.form).each((function(){(t=e(this).data(n))&&t.close()}))},createCheckAllItem:function(){var t=this.options,l=i.template(t.itemTemplate({field:"all",mobile:this._isMobile})),a=e(l({all:t.messages.checkAll}));this.container.prepend(a),a.addClass("k-check-all-wrap"),this.checkBoxAll=a.find(":checkbox").eq(0).addClass("k-check-all"),this.checkAllHandler=this.checkAll.bind(this),this.checkBoxAll.on(d+H,this.checkAllHandler)},updateCheckAllState:function(){if(this.options.messages.selectedItemsFormat&&this.form.find(".k-filter-selected-items").text(i.format(this.options.messages.selectedItemsFormat,this.container.find(":checked:not(.k-check-all)").length)),this.checkBoxAll){var e=this.container.find(":checkbox:not(.k-check-all)").length==this.container.find(":checked:not(.k-check-all)").length;this.checkBoxAll.prop("checked",e)}},createIsNullItem:function(){var t=this.options,l=i.template(t.itemTemplate({field:"isNull",mobile:this._isMobile,valueField:"value"})),a=e(l({isNull:t.messages.isNull,value:null}));this.container.append(a)},refresh:function(e){var t=this.options.forceUnique,i=this.dataSource,l=this.getFilterArray();this._link&&this._link.toggleClass("k-active",0!==l.length),this.form&&(e&&t&&e.sender===i&&!i.options.serverPaging&&("itemchange"==e.action||"add"==e.action||"remove"==e.action||i.options.autoSync&&"sync"===e.action)&&!this._foreignKeyValues()&&(this.checkSource.data(q(this.dataSource.data(),this.field)),this.container.empty()),this.container.is(":empty")&&this.createCheckBoxes(),this.checkValues(l),this.trigger(u))},getFilterArray:function(){var t=e.extend(!0,{},{filters:[],logic:"and"},this.dataSource.filter());return I(t,this.field),M(t)},createCheckBoxes:function(){var e,t=this.options,l={field:this.field,format:t.format,mobile:this._isMobile,type:this.type},a=D.bind(this);this.options.forceUnique?this._foreignKeyValues()?(e=this.checkSource.data(),l.valueField="value",l.field="text"):e=this.checkSource._isServerGrouped()?q(this.checkSource._flatData(this.checkSource.data()),this.field):this.checkSource.data():e=this.checkSource.view(),"boolean"===this.type&&(this.createIsNullItem(),e=e.filter(a));var s=i.template(t.itemTemplate(l)),r=i.render(s,e);this.container.on(d+H,":checkbox",this.updateCheckAllState.bind(this)),this.container.prepend(r),t.checkAll&&!this._isMobile&&this.createCheckAllItem()},checkAll:function(){var e=this.checkBoxAll.is(":checked");this.container.find(":checkbox").prop("checked",e)},checkValues:function(t){var i=this;e(e.grep(this.container.find(":checkbox").prop("checked",!1),(function(l){var a=!1;if(!e(l).is(".k-check-all"))for(var s=i._parse(e(l).val()),r=0;r<t.length;r++)if(a="date"==i.type?t[r]&&s?t[r].getTime()==s.getTime():null===t[r]&&null===s:t[r]==s)return a}))).prop("checked",!0),this.updateCheckAllState()},_mobileCheckAll:function(t){this.container.find(":checkbox").each((function(i,l){var a=e(l);a.prop("checked",t),a.trigger("change")}))},_filter:function(t){t.preventDefault(),t.stopPropagation();var i={logic:"or"},l=this;i.filters=e.map(this.form.find(":checkbox:checked:not(.k-check-all)"),(function(t){return{value:e(t).val(),operator:"eq",field:l.field}})),this.trigger("change",{filter:i,field:l.field})||((i=this._merge(i)).filters.length?this.dataSource.filter(i):l._removeFilter(l.dataSource.filter()||{filters:[]}),this._closeForm())},_stripFilters:function(t){return e.grep(t,(function(e){return null!=e.value}))},_foreignKeyValues:function(){var e=this.options;return e.values&&!e.checkSource},destroy:function(){var e=this;b.fn.destroy.call(e),e.form&&(i.unbind(e.form),i.destroy(e.form),e.form.off(H),e.popup&&(e.popup.destroy(),e.popup=null),e.form=null,e.container&&(e.container.off(H),e.container=null),e.checkBoxAll&&e.checkBoxAll.off(H)),e.view&&(e.view.purge(),e.view=null),e._link&&e._link.off(p),e._refreshHandler&&(e.dataSource.unbind(d,e._refreshHandler),e.dataSource=null),e.checkChangeHandler&&e.checkSource.unbind(d,e.checkChangeHandler),e._progressHandler&&e.checkSource.unbind("progress",e._progressHandler),e._progressHideHandler&&e.checkSource.unbind("change",e._progressHideHandler),this._clearTypingTimeout(),this.searchTextBox&&(this.searchTextBox.off(H),this.searchTextBox=null),this.clearSearchButton&&(this.clearSearchButton.off(H),this.clearSearchButton=null),e.element=e.checkSource=e.container=e.checkBoxAll=e._link=e._refreshHandler=e.checkAllHandler=null},options:{name:"FilterMultiCheck",itemTemplate:({field:e,mobile:l,valueField:a,format:r,type:n})=>{var o="";return a===t&&(a=e),"date"==n&&(o=":yyyy-MM-ddTHH:mm:sszzz"),l?t=>`<li class='k-item k-listgroup-item'><label class='k-label k-listgroup-form-row k-checkbox-label'><span class='k-listgroup-form-field-label k-item-title '>${s(i.format(r||"{0}",i.getter(e)(t)))}</span><span class="k-listgroup-form-field-wrapper"><input type='checkbox' class='k-checkbox k-checkbox-md k-rounded-md' value='${s(i.format(`{0${o}}`,i.getter(a)(t)))}'/></span></label></li>`:t=>`<li class='k-item'><label class='k-label k-checkbox-label'><input type='checkbox' class='k-checkbox k-checkbox-md k-rounded-md' value='${s(i.format(`{0${o}}`,i.getter(a)(t)))}'/><span>${s(i.format(r||"{0}",i.getter(e)(t)))}</span></label></li>`},checkAll:!0,search:!1,ignoreCase:!0,appendToElement:!1,messages:{checkAll:"Select All",isNull:"is empty",clearAll:"Clear All",clear:"Clear",filter:"Filter",search:"Search",cancel:"Cancel",selectedItemsFormat:"{0} items selected",done:"Done",into:"in",buttonTitle:"{0} filter column settings"},forceUnique:!0,animations:{left:"slide",right:"slide:right"},appendTo:null},events:[o,u,"change",c]});function D(e){return null!==e[this.field]}e.extend(O.fn,{_click:A.fn._click,_keydown:A.fn._keydown,_reset:A.fn._reset,_closeForm:A.fn._closeForm,_removeFilter:A.fn._removeFilter,clear:A.fn.clear,_merge:A.fn._merge}),l.plugin(A),l.plugin(O)}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.filtermenu.js.map
