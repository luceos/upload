module.exports=function(t){var o={};function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)e.d(n,r,function(o){return t[o]}.bind(null,r));return n},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=19)}([function(t,o){t.exports=flarum.core.compat.app},function(t,o){t.exports=flarum.core.compat.extend},function(t,o,e){"use strict";function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.d(o,"a",(function(){return n}))},,function(t,o,e){"use strict";function n(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o}e.d(o,"a",(function(){return n}))},function(t,o){t.exports=flarum.core.compat.Component},function(t,o,e){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,o){return!o||"object"!==n(o)&&"function"!=typeof o?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):o}e.d(o,"a",(function(){return r}))},function(t,o){t.exports=flarum.core.compat["components/TextEditor"]},,,,function(t,o){t.exports=flarum.core.compat["components/Post"]},function(t,o){t.exports=flarum.core.compat["helpers/icon"]},function(t,o){t.exports=flarum.core.compat["components/LoadingIndicator"]},,,,,,function(t,o,e){"use strict";e.r(o);var n=e(0),r=e.n(n),i=e(1),a=e(11),s=e.n(a),u=e(7),p=e.n(u),f=(e(6),e(2),e(4)),l=e(5),d=e.n(l),c=e(12),h=e.n(c),b=e(13),g=e.n(b);var v=function(t){Object(f.a)(e,t);var o;o=e;function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.init=function(){this.textAreaObj=null,this.uploading=m.prop(!1)},n.view=function(){var t=this.uploading()?r.a.translator.trans("fof-upload.forum.states.loading"):r.a.translator.trans("fof-upload.forum.buttons.attach");return m(".Button.hasIcon.fof-upload-button.Button--icon",{className:this.uploading()?"uploading":""},[this.uploading()?g.a.component({size:"tiny",className:"LoadingIndicator--inline Button-icon"}):h()("fas fa-file-upload",{className:"Button-icon"}),m("span.Button-label",t),m("form",[m("input",{type:"file",multiple:!0,onchange:this.process.bind(this)})])])},n.process=function(t){var o=this.$("input").prop("files");this.uploadFiles(o)},n.uploadFiles=function(t){this.uploading(!0),m.redraw();for(var o=new FormData,e=0;e<t.length;e++)o.append("files[]",t[e]);return r.a.request({method:"POST",url:r.a.forum.attribute("apiUrl")+"/fof/upload",serialize:function(t){return t},data:o}).then(this.success.bind(this),this.failure.bind(this))},n.failure=function(t){alert(r.a.translator.trans("fof-upload.forum.states.error"))},n.success=function(t){var o=this;t.forEach((function(t){o.textAreaObj.insertAtCursor(t+"\n")})),void 0!==this.textAreaObj.props.preview&&this.textAreaObj.props.preview(),setTimeout((function(){o.$("form")[0].reset(),o.uploading(!1),m.redraw()}),1e3)},e}(d.a),y=function(){function t(t,o){this.uploadButton=t,this.composerElement=o,this.handlers={},this.supportsFileDragging()&&(this.composerElement.addEventListener("dragover",this.handlers.in=this.in.bind(this)),this.composerElement.addEventListener("dragleave",this.handlers.out=this.out.bind(this)),this.composerElement.addEventListener("dragend",this.handlers.out),this.composerElement.addEventListener("drop",this.handlers.dropping=this.dropping.bind(this)),this.isDropping=this.over=!1)}var o=t.prototype;return o.supportsFileDragging=function(){var t=document.createElement("div");return("draggable"in t||"ondragstart"in t&&"ondrop"in t)&&"FormData"in window&&"FileReader"in window},o.unload=function(){this.handlers.in&&(this.composerElement.removeEventListener("dragover",this.handlers.in),this.composerElement.removeEventListener("dragleave",this.handlers.out),this.composerElement.removeEventListener("dragend",this.handlers.out),this.composerElement.removeEventListener("drop",this.handlers.dropping))},o.isNotFile=function(t){if(t.dataTransfer.items)for(var o=0;o<t.dataTransfer.items.length;o++)if("file"!==t.dataTransfer.items[o].kind)return!0;return!1},o.in=function(t){this.isNotFile(t)||(t.preventDefault(),this.over||(this.composerElement.classList.add("fof-upload-dragging"),this.over=!0))},o.out=function(t){this.isNotFile(t)||(t.preventDefault(),this.over&&(this.composerElement.classList.remove("fof-upload-dragging"),this.over=!1))},o.dropping=function(t){var o=this;this.isNotFile(t)||(t.preventDefault(),this.isDropping||(this.isDropping=!0,this.composerElement.classList.add("fof-upload-dropping"),this.uploadButton.uploadFiles(t.dataTransfer.files).then((function(){o.composerElement.classList.remove("fof-upload-dropping"),o.isDropping=!1}))))},t}(),x=function(){function t(t,o){this.uploadButton=t,o.addEventListener("paste",this.paste.bind(this))}return t.prototype.paste=function(t){if(t.clipboardData&&t.clipboardData.items){for(var o=t.clipboardData.items,e=[],n=0;n<o.length;n++)-1!==o[n].type.indexOf("image")&&e.push(o[n].getAsFile());e.length>0&&(t.preventDefault(),this.uploadButton.uploadFiles(e))}},t}();r.a.initializers.add("fof-upload",(function(){Object(i.extend)(p.a.prototype,"init",(function(){r.a.forum.attribute("fof-upload.canUpload")&&(this.fofUploadButton=new v,this.fofUploadButton.textAreaObj=this)})),Object(i.extend)(p.a.prototype,"controlItems",(function(t){r.a.forum.attribute("fof-upload.canUpload")&&t.add("fof-upload",this.fofUploadButton.render())})),Object(i.extend)(p.a.prototype,"config",(function(t,o,e){if(!o&&r.a.forum.attribute("fof-upload.canUpload")){var n=new y(this.fofUploadButton,this.$().parents(".Composer")[0]),a=function(){n.unload()};e.onunload?Object(i.extend)(e,"onunload",a):e.onunload=a}})),Object(i.extend)(p.a.prototype,"configTextarea",(function(t,o,e){e||r.a.forum.attribute("fof-upload.canUpload")&&new x(this.fofUploadButton,o)})),Object(i.extend)(s.a.prototype,"config",(function(t){var o=this;t||this.$("[data-fof-upload-download-uuid]").unbind("click").on("click",(function(t){if(t.preventDefault(),t.stopPropagation(),r.a.forum.attribute("fof-upload.canDownload")){var e=r.a.forum.attribute("apiUrl")+"/fof/download";e+="/"+t.currentTarget.dataset.fofUploadDownloadUuid,e+="/"+o.props.post.id(),e+="/"+r.a.session.csrfToken,window.open(e)}else alert(r.a.translator.trans("fof-upload.forum.states.unauthorized"))}))}))}))}]);
//# sourceMappingURL=forum.js.map