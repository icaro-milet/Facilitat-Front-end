/**
 * Kendo UI v2023.2.829 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.data.js";import"./kendo.popup.js";import"./kendo.window.js";import"./kendo.gantt.data.js";import"./kendo.grid.js";import"./kendo.datetimepicker.js";import"./kendo.numerictextbox.js";import"./kendo.textbox.js";import"./kendo.form.js";import"./kendo.tabstrip.js";var __meta__={id:"gantt.editors",name:"GanttEditors",category:"web",description:"The Gantt component editors.",depends:["data","popup","window","gantt.data","grid","datetimepicker","numerictextbox","textbox","form","tabstrip"],hidden:!0};!function(e,t){var i=window.kendo,n=i.ui,a=i.Observable,o=n.Widget,d=i.htmlEncode,r=e.extend,s="23em",l="k-gantt-delete",c="k-gantt-cancel",p="k-gantt-update",u={form:"k-popup-edit-form",editForm:"k-gantt-edit-form",formContainer:"k-edit-form-container",resourcesFormContainer:"k-resources-form-container",message:"k-popup-message",buttonsContainer:"k-edit-buttons k-actions",button:"k-button",buttonDefaults:"k-button-md k-rounded-md k-button-solid k-button-solid-base",editField:"k-edit-field",editLabel:"k-edit-label",resourcesField:"k-gantt-resources"},m=a.extend({init:function(e,t){a.fn.init.call(this),this.element=e,this.options=r(!0,{},this.options,t)},destroy:function(){this.close(),this.unbind()},close:function(){var e=this,t=function(){e.editable&&(e.container.data("kendoWindow").destroy(),e.editable=null,e.container=null),e.popup&&(e.popup.destroy(),e.popup=null)};e.editable&&e.container.is(":visible")?(e.trigger("close",{window:e.container}),e.container.data("kendoWindow").bind("deactivate",t).close()):t()},editTask:function(e,t){this.task=e,this.plannedEditors=t,this.editable=this._createPopupEditor()},fields:function(){var t,n=this.options,a=this.task,o={};return n.editable.template?e.map(a.fields,(function(e,t){return{field:t}})):(o.general=this._fieldsGeneral(),n.resources&&(o.resources=[{field:"resources"}]),n.dependencies&&(o.dependencies=this._fieldsDependencies(a)),t=r(!0,{},a.fields),Object.keys(i.data.GanttTask.fields).map((e=>{delete t[e]})),Object.keys(t).length>0&&(o.other=this._fieldsOther(t)),o)},showDialog:function(t){var n,a=u,o=this.element,r=t.model,s=this,p=e(i.format('<div class="'+a.formContainer+'" data-uid="'+r.uid+'">')).appendTo(o),m=this.options.messages;p.append(e("<p>"+t.text+"</p>")),n=e('<div class="'+a.buttonsContainer+'">'),p.append(n),n.append(e("<button class='"+l+"'>"+d(m.destroy)+"</button>").kendoButton({name:"delete",themeColor:"primary",icon:"trash",click:e=>{e.preventDefault(),h.close(),t.callback()}})),n.append(e("<button class='"+c+"'>"+d(m.cancel)+"</button>").kendoButton({name:"cancel",icon:"cancel",click:e=>{e.preventDefault(),h.close(),t.callback(!0)}})),this.popup&&this.popup.destroy();var h=this.popup=p.kendoWindow({modal:!0,autoFocus:!1,resizable:!1,draggable:!1,title:t.title,visible:!1,deactivate:function(){this.destroy(),s.trigger("close",{window:p})}}).getKendoWindow();h.center().open(),h.element.find(".k-button-solid-primary").trigger("focus")},_buildButtons:function(t){var i=this.options.messages,n=e('<div class="'+u.buttonsContainer+'">');n.appendTo(t),n.append(e("<button class='"+p+"'>"+d(i.save)+"</button>").kendoButton({name:"update",themeColor:"primary",icon:"save",click:this._onSave.bind(this)})),n.append(e("<button class='"+c+"'>"+d(i.cancel)+"</button>").kendoButton({name:"cancel",icon:"cancel",click:this._onCancel.bind(this)})),n.append(e("<span class='k-spacer'>")),!1!==this.options.editable.destroy&&n.append(e("<button class='"+l+"'>"+d(i.destroy)+"</button>").kendoButton({name:"delete",themeColor:"primary",icon:"trash",fillMode:"flat",click:this._onDelete.bind(this)}))},_buildEditTemplate:function(t,n){var a=this.options.editable.template,o=r({},i.Template,this.options.templateSettings),d="";a?("string"==typeof a&&(a=i.unescape(a)),d+=i.template(a,o)(t)):(this.renderForm=!0,d+=`<div role="form" class="k-gantt-edit-tabstrip" ${i.attr("style-min-height")}="28em"></div>`);var s=e(d);i.applyStylesFromKendoAttributes(s,["min-height"]),s.appendTo(n)},_createPopupEditor:function(){var t,n=this,a=this.options.messages,o=u,d=this.task,s=e(i.format('<div {0}="{1}" class="{2} {3}">',i.attr("uid"),d.uid,o.form,o.editForm));return s.appendTo(this.element),this._buildEditTemplate(d,s),this._buildButtons(s),this.container=s.kendoWindow(r({width:554,modal:!0,resizable:!1,draggable:!0,title:a.editor.editorTitle,visible:!1,actions:["Minimize","Maximize","Close"],close:function(e){e.userTriggered&&n.trigger("cancel",{container:s,model:d})&&e.preventDefault()}},{})),t=this.renderForm?this._initForm():s.kendoEditable({model:d,clearContainer:!1,validateOnBlur:!0,target:n.options.target}).data("kendoEditable"),i.cycleForm(s),this.trigger("edit",{container:s,model:d})?n.trigger("cancel",{container:s,model:d}):s.data("kendoWindow").center().open(),t},_fieldsDependencies:function(e){return{nameDdlDs:this.options.target.dataSource.data().filter((t=>t.id!==e.id)).map((e=>({text:e.title,value:e.id}))),typeDs:[{value:0,text:"Finish-Finish"},{value:1,text:"Finish-Start"},{value:2,text:"Start-Finish"},{value:3,text:"Start-Start"}]}},_fieldsGeneral:function(){var e,t,n,a=this,o=this.options,d=o.target.dataSource,s=o.messages.editor,l=this.task,c=l.fields,p=this.plannedEditors?s.actualStart:s.start,u=this.plannedEditors?s.actualEnd:s.end,m=[{field:"title",title:s.title,colSpan:4}];return this.plannedEditors&&(m.push({field:"plannedStart",title:s.plannedStart,colSpan:2,editor:"DateTimePicker",validation:c.plannedStart.validation,editorOptions:{componentType:"modern"}}),m.push({field:"plannedEnd",title:s.plannedEnd,colSpan:2,editor:"DateTimePicker",validation:c.plannedEnd.validation,editorOptions:{componentType:"modern"}})),e=d.data(),(t=d.taskAllChildren(l)).push(l),n=e.filter((e=>!t.some((t=>t.id===e.id)))),m.push({field:"start",title:p,colSpan:2,editor:"DateTimePicker",validation:c.start.validation,editorOptions:{componentType:"modern"}}),m.push({field:"end",title:u,colSpan:2,editor:"DateTimePicker",validation:c.start.validation,editorOptions:{componentType:"modern"}}),m.push({field:"percentComplete",title:s.percentComplete,format:"p0",colSpan:1,hint:s.percentCompleteHint}),m.push({field:"parentId",title:s.parent,colSpan:4,editor:"DropDownList",editorOptions:{optionLabel:s.parentOptionLabel,filter:"contains",dataSource:n,enable:n.length>0,dataValueField:"id",dataTextField:"title",valuePrimitive:!0,template:({title:e,start:t,end:n})=>`<span>${e} ${i.toString(t,"d")}-${i.toString(n,"d")}</span>`}}),m=m.map((function(e){return e=r(!0,{label:e.title},e),!l.editable||l.editable(e.field)?e:r(!0,e,{editor:a._readonlyEditor.bind(a)})}))},_fieldsOther:function(e){var t=this,i=this.task;return e=Object.keys(e).map((function(n){var a=e[n];return a=r(!0,{field:n,label:a.title},a),!i.editable||i.editable(a.field)?a:r(!0,a,{editor:t._readonlyEditor.bind(t)})}))},_gridOptions:function(t,i,n,a){var o=this.options.messages;return this.dependencyData||(this.dependencyData={}),{dataSource:{data:this.dependencyData[i]=this.options.target.dependencies.view().filter((e=>e[n]===a)),schema:{model:{fields:{id:{from:"id"},[i]:{from:i,validation:{required:{message:o.editor.name+" is required"}}},type:{from:"type",validation:{required:!0},defaultValue:1}}}}},columns:[{selectable:!0,width:50},{field:i,title:o.editor.name,values:t.nameDdlDs},{field:"type",title:o.editor.dependencyType,values:t.typeDs,width:"9em"}],toolbar:[{name:"create",text:o.editor.addNew},{name:"remove",icon:"minus",text:o.editor.remove,click:t=>{var i=t.target.closest(".k-grid").getKendoGrid(),n=i.dataSource,a=i.select(),o=[];a&&a.length>0&&(a.each(((t,n)=>{o.push(i.dataItem(e(n)))})),o.map((e=>{n.remove(e)})))}}],editable:!0,sortable:!0,navigatable:!0,height:s,edit:function(){var t=e("[name=predecessorId], [name=successorId]");t.length&&t.data("kendoDropDownList").setOptions({filter:"contains"})}}},_initForm:function(){var t=this,i=t.task,n=t.container,a=t.options.resources,o=i.get(a.field),d=t.fields(),r=t._tabStripSource(d,o);return n.find(".k-gantt-edit-tabstrip").kendoTabStrip({dataTextField:"name",dataContentField:"content",dataSource:r,value:t.options.messages.editor.general,select:t=>{var i=t.sender,n=e(i.contentElement(i.select().index())),a=n.find(".k-grid").data("kendoGrid"),o=n.find(".k-form").data("kendoForm");(a&&a.editable&&a.editable.validatable&&!a.editable.validatable.validate()||o&&!o.validator.validate())&&t.preventDefault()}}),t._initGeneral(d.general,i),o&&(t.resourceEditor=a.editor(n.find(".k-gantt-resources"),i)),d.dependencies&&(n.find(".k-gantt-predecessors").kendoGrid(t._gridOptions(d.dependencies,"predecessorId","successorId",i.id)),n.find(".k-gantt-successors").kendoGrid(t._gridOptions(d.dependencies,"successorId","predecessorId",i.id))),d.other&&t._initOther(d.other,i),t.form.editable},_initGeneral:function(e,t){this.form=this.container.find(".k-gantt-form-default").kendoForm({layout:"grid",grid:{cols:4,gutter:{rows:0,cols:8}},items:e,formData:t,buttonsTemplate:()=>"",validatable:{validateOnBlur:!0}}).data("kendoForm")},_initOther:function(e,t){this.container.find(".k-gantt-form-other").kendoForm({items:e,formData:t,buttonsTemplate:()=>"",validatable:{validateOnBlur:!0}})},_readonlyEditor:function(e,t){var n=t.field,a="",o=this.options.target.dataSource;null!==t.model.get(n)&&((a=t.model.get(n))instanceof Date?a=i.toString(a,"g"):"percentComplete"===n?a=i.toString(a,t.format):"parentId"===n&&(a=o.get(a).title)),e.append("<span>"+a+"</span>")},_onCancel:function(){this.trigger("cancel",{container:this.container,model:this.task})},_onDelete:function(){this.trigger("remove",{container:this.container,model:this.task})},_onSave:function(){var t,i,n,a,o=this.task,d=[],r={},s=this.container,l=s.find(".k-gantt-predecessors").getKendoGrid(),c=s.find(".k-gantt-successors").getKendoGrid(),p={},u=[],m=[];if(l){if(n=this.dependencyData.successorId.concat(this.dependencyData.predecessorId),a=l.dataSource.view().toJSON().concat(c.dataSource.view().toJSON()),l&&l.editable&&l.editable.validatable&&!l.editable.validatable.validate()||c&&c.editable&&c.editable.validatable&&!c.editable.validatable.validate())return;a.map((e=>{i=n.find((t=>t.id===e.id)),i&&(i.dirty&&m.push(e),a=a.filter((t=>t.id!==e.id)),n=n.filter((t=>t.id!==e.id)))})),a.map((e=>{e.successorId?(e.predecessorId||(e.predecessorId=o.get("id")),u.push(e)):e.predecessorId&&(e.successorId||(e.successorId=o.get("id")),u.push(e))})),(u.length>0||n.length>0||m.length>0)&&(p.updateDependencies={destroyed:n,created:u,updated:m})}if(Object.values(this.fields()).map((e=>{Array.isArray(e)&&d.push(...e)})),!this.resourceEditor||this.resourceEditor.updateModel()){for(var h=0,f=d.length;h<f;h++)r[t=d[h].field]=o.get(t);this.trigger("save",e.extend({},p,{container:s,model:o,updateInfo:r}))}},_tabStripSource:function(e,t){var i=this.options.messages.editor,n=e.dependencies,a=[{name:i.general,content:"<div class='k-gantt-form-default'></div>"}];return t&&a.push({name:i.resources,content:"<div class='k-gantt-resources'></div>"}),n&&(a.push({name:i.predecessors,content:"<div class='k-gantt-predecessors'></div>"}),a.push({name:i.successors,content:"<div class='k-gantt-successors'></div>"})),e.other&&a.push({name:i.other,content:"<div class='k-gantt-form-other'></div>"}),a}}),h=o.extend({init:function(e,t){o.fn.init.call(this,e,t),this.wrapper=this.element,this.model=this.options.model,this.resourcesField=this.options.resourcesField,this._resourceGrid()},destroy:function(){this.grid=null,o.fn.destroy.call(this),this.element=this.wrapper=null},updateModel:function(){var e,i,n=[],a=this.grid,o=a.dataSource.data(),d=a.editable;if(d&&d.validatable&&!d.validatable.validate())return!1;for(var r=0,s=o.length;r<s;r++)i=(e=o[r]).get("value"),e.id!==t&&null!==i&&i>0&&n.push(o[r]);return this.model[this.resourcesField]=n,!0},_resourceGrid:function(){var e=this,n=this.options.messages,a=e.options,o=this.wrapper,d=a.resources;e.grid=new i.ui.Grid(o,{columns:[{selectable:!0,width:50},{field:"id",title:n.resourcesHeader,values:d},{field:"value",title:n.unitsHeader,template:function(e){var t=e.format||"p0",n=null!==e.value?e.value:"";return t?i.toString(n,t):n},width:120}],height:s,sortable:!0,editable:!0,filterable:!0,navigatable:!0,toolbar:[{name:"create",text:n.addNew},{name:"remove",icon:"minus",text:n.remove,click:()=>{var t=e.grid,i=t.dataSource,n=t.selectedKeyNames();n&&n.length>0&&n.map((e=>{i.remove(i.get(e))}))}}],dataSource:{data:this.model.resources,schema:{model:{id:"id",fields:{id:{from:"id",defaultValue:t,validation:{required:{message:n.resourcesHeader+" is required"}}},value:{from:"value",type:"number",defaultValue:1,validation:this.options.unitsValidation},format:{from:"format",type:"string"}}}}},edit:function(e){var t=e.container.find("select").data("kendoDropDownList"),i=e.model.id,n=a.model.resources.map((e=>e.id)).filter((e=>e!==i)).map((e=>({field:"value",operator:"neq",value:e})));t&&(t.dataSource.filter({logic:"and",filters:n}),t.setOptions({filter:"contains"}))}})}});i.gantt={PopupEditor:m,ResourceEditor:h}}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.gantt.editors.js.map
