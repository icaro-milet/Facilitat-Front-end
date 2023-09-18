/**
 * Kendo UI v2023.2.829 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.data.js";var __meta__={id:"data.signalr",name:"SignalR",category:"framework",depends:["data"],hidden:!0};!function(t){var e=window.kendo,r=e.isFunction;function n(t){return t&&r(t.done)&&r(t.fail)}function o(t){return t&&r(t.then)&&r(t.catch)}var i=e.data.RemoteTransport.extend({init:function(t){var r=t&&t.signalr?t.signalr:{},i=r.promise;if(!i)throw new Error('The "promise" option must be set.');if(!n(i)&&!o(i))throw new Error('The "promise" option must be a Promise.');this.promise=i;var a=r.hub;if(!a)throw new Error('The "hub" option must be set.');if("function"!=typeof a.on||"function"!=typeof a.invoke)throw new Error('The "hub" option is not a valid SignalR hub proxy.');this.hub=a,e.data.RemoteTransport.fn.init.call(this,t)},push:function(t){var e=this.options.signalr.client||{};e.create&&this.hub.on(e.create,t.pushCreate),e.update&&this.hub.on(e.update,t.pushUpdate),e.destroy&&this.hub.on(e.destroy,t.pushDestroy)},_crud:function(r,i){var a=this.hub,s=this.promise,u=this.options.signalr.server;if(!u||!u[i])throw new Error(e.format('The "server.{0}" option must be set.',i));var h=[u[i]],d=this.parameterMap(r.data,i);t.isEmptyObject(d)||h.push(d),n(s)?s.done((function(){a.invoke.apply(a,h).done(r.success).fail(r.error)})):o(s)&&s.then((function(){a.invoke.apply(a,h).then(r.success).catch(r.error)}))},read:function(t){this._crud(t,"read")},create:function(t){this._crud(t,"create")},update:function(t){this._crud(t,"update")},destroy:function(t){this._crud(t,"destroy")}});t.extend(!0,e.data,{transports:{signalr:i}})}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.data.signalr.js.map
