webpackJsonp([23],{RUZQ:function(t,i,e){e("Yig8"),e("dYvO")},Yig8:function(t,i,e){"use strict";(function(t){function o(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var s=e("aX1M"),a=(e.n(s),function(){function t(t,i){for(var e=0;e<i.length;e++){var o=i[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(i,e,o){return e&&t(i.prototype,e),o&&t(i,o),i}}());!function(i){var e=function(){function i(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=s.filename,n=s.previewImage,r=s.modalCrop,h=s.pickImageEl,p=s.uploadImageBtn,l=s.modalCropImg,c=s.exportWidth,d=void 0===c?200:c,u=s.exportHeight,g=void 0===u?200:u,m=s.cropBoxWidth,f=void 0===m?200:m,v=s.cropBoxHeight,w=void 0===v?200:v;o(this,i),this.onUploadImageBtnClick=this.onUploadImageBtnClick.bind(this),this.onModalHide=this.onModalHide.bind(this),this.onModalShow=this.onModalShow.bind(this),this.onPickImageClick=this.onPickImageClick.bind(this),this.fileInput=t(e),this.modalCropImg=_.isString(this.modalCropImg)?t(this.modalCropImg):this.modalCropImg,this.fileInput.attr("name",this.fileInput.attr("name")+"-trigger").attr("id",this.fileInput.attr("id")+"-trigger"),this.exportWidth=d,this.exportHeight=g,this.cropBoxWidth=f,this.cropBoxHeight=w,this.form=this.fileInput.parents("form"),this.filename=a,this.previewImage=n,this.modalCrop=r,this.pickImageEl=h,this.uploadImageBtn=p,this.modalCropImg=l,this.filename=this.getElement(a),this.previewImage=this.getElement(n),this.pickImageEl=this.getElement(h),this.modalCrop=_.isString(r)?t(r):r,this.uploadImageBtn=_.isString(p)?t(p):p,this.modalCropImg=_.isString(l)?t(l):l,this.cropActionsBtn=this.modalCrop.find("[data-method]"),this.bindEvents()}return a(i,[{key:"getElement",value:function(i){return t(i,this.form)}},{key:"bindEvents",value:function(){var t;return t=this,this.fileInput.on("change",function(i){return t.onFileInputChange(i,this)}),this.pickImageEl.on("click",this.onPickImageClick),this.modalCrop.on("shown.bs.modal",this.onModalShow),this.modalCrop.on("hidden.bs.modal",this.onModalHide),this.uploadImageBtn.on("click",this.onUploadImageBtnClick),this.cropActionsBtn.on("click",function(i){var e;return e=this,t.onActionBtnClick(e)}),this.croppedImageBlob=null}},{key:"onPickImageClick",value:function(){return this.fileInput.trigger("click")}},{key:"onModalShow",value:function(){var i;return i=this,this.modalCropImg.cropper({viewMode:1,center:!1,aspectRatio:1,modal:!0,scalable:!1,rotatable:!1,zoomable:!0,dragMode:"move",guides:!1,zoomOnTouch:!1,zoomOnWheel:!1,cropBoxMovable:!1,cropBoxResizable:!1,toggleDragModeOnDblclick:!1,built:function(){var e,o,s,a;return e=t(this),o=e.cropper("getContainerData"),a=i.cropBoxWidth,s=i.cropBoxHeight,e.cropper("setCropBoxData",{width:a,height:s,left:(o.width-a)/2,top:(o.height-s)/2})}})}},{key:"onModalHide",value:function(){return this.modalCropImg.attr("src","").cropper("destroy")}},{key:"onUploadImageBtnClick",value:function(t){return t.preventDefault(),this.setBlob(),this.setPreview(),this.modalCrop.modal("hide"),this.fileInput.val("")}},{key:"onActionBtnClick",value:function(i){var e;if(e=t(i).data(),this.modalCropImg.data("cropper")&&e.method)return this.modalCropImg.cropper(e.method,e.option)}},{key:"onFileInputChange",value:function(t,i){return this.readFile(i)}},{key:"readFile",value:function(t){var i,e;return i=this,e=new FileReader,e.onload=function(){return i.modalCropImg.attr("src",e.result),i.modalCrop.modal("show")},e.readAsDataURL(t.files[0])}},{key:"dataURLtoBlob",value:function(t){var i,e,o,s,a;for(e=atob(t.split(",")[1]),i=[],s=o=0,a=e.length;o<a;s=o+=1)e[s],i.push(e.charCodeAt(s));return new Blob([new Uint8Array(i)],{type:"image/png"})}},{key:"setPreview",value:function(){var t;return this.previewImage.attr("src",this.dataURL),t=this.fileInput.val().replace(/^.*[\\\/]/,""),this.filename.text(t)}},{key:"setBlob",value:function(){return this.dataURL=this.modalCropImg.cropper("getCroppedCanvas",{width:200,height:200}).toDataURL("image/png"),this.croppedImageBlob=this.dataURLtoBlob(this.dataURL)}},{key:"getBlob",value:function(){return this.croppedImageBlob}}]),i}();t.fn.glCrop=function(i){return this.each(function(){return t(this).data("glcrop",new e(this,i))})}}(window.gl||(window.gl={}))}).call(i,e("lwLq"))},aX1M:function(t,i,e){var o,s,a;/*!
 * Cropper v2.3.0
 * https://github.com/fengyuanchen/cropper
 *
 * Copyright (c) 2014-2016 Fengyuan Chen and contributors
 * Released under the MIT license
 *
 * Date: 2016-02-22T02:13:13.332Z
 */
!function(n){s=[e("lwLq")],o=n,void 0!==(a="function"==typeof o?o.apply(i,s):o)&&(t.exports=a)}(function(t){"use strict";function i(t){return"number"==typeof t&&!isNaN(t)}function e(t){return void 0===t}function o(t,e){var o=[];return i(e)&&o.push(e),o.slice.apply(t,o)}function s(t,i){var e=o(arguments,2);return function(){return t.apply(i,e.concat(o(arguments)))}}function a(t){var i=t.match(/^(https?:)\/\/([^\:\/\?#]+):?(\d*)/i);return i&&(i[1]!==x.protocol||i[2]!==x.hostname||i[3]!==x.port)}function n(t){var i="timestamp="+(new Date).getTime();return t+(-1===t.indexOf("?")?"?":"&")+i}function r(t){return t?' crossOrigin="'+t+'"':""}function h(t,i){var e;if(t.naturalWidth&&!U)return i(t.naturalWidth,t.naturalHeight);e=document.createElement("img"),e.onload=function(){i(this.width,this.height)},e.src=t.src}function p(t){var e=[],o=t.rotate,s=t.scaleX,a=t.scaleY;return i(o)&&e.push("rotate("+o+"deg)"),i(s)&&i(a)&&e.push("scale("+s+","+a+")"),e.length?e.join(" "):"none"}function l(t,i){var e,o,s=z(t.degree)%180,a=(s>90?180-s:s)*Math.PI/180,n=F(a),r=E(a),h=t.width,p=t.height,l=t.aspectRatio;return i?(e=h/(r+n/l),o=e/l):(e=h*r+p*n,o=h*n+p*r),{width:e,height:o}}function c(e,o){var s,a,n,r=t("<canvas>")[0],h=r.getContext("2d"),p=0,c=0,d=o.naturalWidth,u=o.naturalHeight,g=o.rotate,m=o.scaleX,f=o.scaleY,v=i(m)&&i(f)&&(1!==m||1!==f),w=i(g)&&0!==g,b=w||v,x=d*z(m||1),C=u*z(f||1);return v&&(s=x/2,a=C/2),w&&(n=l({width:x,height:C,degree:g}),x=n.width,C=n.height,s=x/2,a=C/2),r.width=x,r.height=C,b&&(p=-d/2,c=-u/2,h.save(),h.translate(s,a)),w&&h.rotate(g*Math.PI/180),v&&h.scale(m,f),h.drawImage(e,S(p),S(c),S(d),S(u)),b&&h.restore(),r}function d(i){var e=i.length,o=0,s=0;return e&&(t.each(i,function(t,i){o+=i.pageX,s+=i.pageY}),o/=e,s/=e),{pageX:o,pageY:s}}function u(t,i,e){var o,s="";for(o=i,e+=i;o<e;o++)s+=j(t.getUint8(o));return s}function g(t){var i,e,o,s,a,n,r,h,p,l,c=new k(t),d=c.byteLength;if(255===c.getUint8(0)&&216===c.getUint8(1))for(p=2;p<d;){if(255===c.getUint8(p)&&225===c.getUint8(p+1)){r=p;break}p++}if(r&&(e=r+4,o=r+10,"Exif"===u(c,e,4)&&(n=c.getUint16(o),((a=18761===n)||19789===n)&&42===c.getUint16(o+2,a)&&(s=c.getUint32(o+4,a))>=8&&(h=o+s))),h)for(d=c.getUint16(h,a),l=0;l<d;l++)if(p=h+12*l+2,274===c.getUint16(p,a)){p+=8,i=c.getUint16(p,a),U&&c.setUint16(p,1,a);break}return i}function m(t){var i,e=t.replace(T,""),o=atob(e),s=o.length,a=new B(s),n=new y(a);for(i=0;i<s;i++)n[i]=o.charCodeAt(i);return a}function f(t){var i,e=new y(t),o=e.length,s="";for(i=0;i<o;i++)s+=j(e[i]);return"data:image/jpeg;base64,"+D(s)}function v(i,e){this.$element=t(i),this.options=t.extend({},v.DEFAULTS,t.isPlainObject(e)&&e),this.isLoaded=!1,this.isBuilt=!1,this.isCompleted=!1,this.isRotated=!1,this.isCropped=!1,this.isDisabled=!1,this.isReplaced=!1,this.isLimited=!1,this.wheeling=!1,this.isImg=!1,this.originalUrl="",this.canvas=null,this.cropBox=null,this.init()}var w=t(window),b=t(document),x=window.location,C=window.navigator,B=window.ArrayBuffer,y=window.Uint8Array,k=window.DataView,D=window.btoa,$="cropper-hidden",I="mouseup touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel",M=/e|w|s|n|se|sw|ne|nw|all|crop|move|zoom/,L=/^data\:/,T=/^data\:([^\;]+)\;base64,/,Y=/^data\:image\/jpeg.*;base64,/,X=t.isFunction(t("<canvas>")[0].getContext),U=C&&/safari/i.test(C.userAgent)&&/apple computer/i.test(C.vendor),R=Number,W=Math.min,H=Math.max,z=Math.abs,F=Math.sin,E=Math.cos,O=Math.sqrt,P=Math.round,S=Math.floor,j=String.fromCharCode;v.prototype={constructor:v,init:function(){var t,i=this.$element;if(i.is("img")){if(this.isImg=!0,this.originalUrl=t=i.attr("src"),!t)return;t=i.prop("src")}else i.is("canvas")&&X&&(t=i[0].toDataURL());this.load(t)},trigger:function(i,e){var o=t.Event(i,e);return this.$element.trigger(o),o},load:function(i){var e,o,s=this.options,a=this.$element;if(i&&(a.one("build.cropper",s.build),!this.trigger("build.cropper").isDefaultPrevented())){if(this.url=i,this.image={},!s.checkOrientation||!B)return this.clone();if(e=t.proxy(this.read,this),L.test(i))return Y.test(i)?e(m(i)):this.clone();o=new XMLHttpRequest,o.onerror=o.onabort=t.proxy(function(){this.clone()},this),o.onload=function(){e(this.response)},o.open("get",i),o.responseType="arraybuffer",o.send()}},read:function(t){var i,e,o,s=this.options,a=g(t),n=this.image;if(a>1)switch(this.url=f(t),a){case 2:e=-1;break;case 3:i=-180;break;case 4:o=-1;break;case 5:i=90,o=-1;break;case 6:i=90;break;case 7:i=90,e=-1;break;case 8:i=-90}s.rotatable&&(n.rotate=i),s.scalable&&(n.scaleX=e,n.scaleY=o),this.clone()},clone:function(){var i,e,o=this.options,s=this.$element,h=this.url,p="";o.checkCrossOrigin&&a(h)&&(p=s.prop("crossOrigin"),p?i=h:(p="anonymous",i=n(h))),this.crossOrigin=p,this.crossOriginUrl=i,this.$clone=e=t("<img"+r(p)+' src="'+(i||h)+'">'),this.isImg?s[0].complete?this.start():s.one("load.cropper",t.proxy(this.start,this)):e.one("load.cropper",t.proxy(this.start,this)).one("error.cropper",t.proxy(this.stop,this)).addClass("cropper-hide").insertAfter(s)},start:function(){var i=this.$element,e=this.$clone;this.isImg||(e.off("error.cropper",this.stop),i=e),h(i[0],t.proxy(function(i,e){t.extend(this.image,{naturalWidth:i,naturalHeight:e,aspectRatio:i/e}),this.isLoaded=!0,this.build()},this))},stop:function(){this.$clone.remove(),this.$clone=null},build:function(){var i,e,o,s=this.options,a=this.$element,n=this.$clone;this.isLoaded&&(this.isBuilt&&this.unbuild(),this.$container=a.parent(),this.$cropper=i=t(v.TEMPLATE),this.$canvas=i.find(".cropper-canvas").append(n),this.$dragBox=i.find(".cropper-drag-box"),this.$cropBox=e=i.find(".cropper-crop-box"),this.$viewBox=i.find(".cropper-view-box"),this.$face=o=e.find(".cropper-face"),a.addClass($).after(i),this.isImg||n.removeClass("cropper-hide"),this.initPreview(),this.bind(),s.aspectRatio=H(0,s.aspectRatio)||NaN,s.viewMode=H(0,W(3,P(s.viewMode)))||0,s.autoCrop?(this.isCropped=!0,s.modal&&this.$dragBox.addClass("cropper-modal")):e.addClass($),s.guides||e.find(".cropper-dashed").addClass($),s.center||e.find(".cropper-center").addClass($),s.cropBoxMovable&&o.addClass("cropper-move").data("action","all"),s.highlight||o.addClass("cropper-invisible"),s.background&&i.addClass("cropper-bg"),s.cropBoxResizable||e.find(".cropper-line, .cropper-point").addClass($),this.setDragMode(s.dragMode),this.render(),this.isBuilt=!0,this.setData(s.data),a.one("built.cropper",s.built),setTimeout(t.proxy(function(){this.trigger("built.cropper"),this.isCompleted=!0},this),0))},unbuild:function(){this.isBuilt&&(this.isBuilt=!1,this.isCompleted=!1,this.initialImage=null,this.initialCanvas=null,this.initialCropBox=null,this.container=null,this.canvas=null,this.cropBox=null,this.unbind(),this.resetPreview(),this.$preview=null,this.$viewBox=null,this.$cropBox=null,this.$dragBox=null,this.$canvas=null,this.$container=null,this.$cropper.remove(),this.$cropper=null)},render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.isCropped&&this.renderCropBox()},initContainer:function(){var t=this.options,i=this.$element,e=this.$container,o=this.$cropper;o.addClass($),i.removeClass($),o.css(this.container={width:H(e.width(),R(t.minContainerWidth)||200),height:H(e.height(),R(t.minContainerHeight)||100)}),i.addClass($),o.removeClass($)},initCanvas:function(){var i,e=this.options.viewMode,o=this.container,s=o.width,a=o.height,n=this.image,r=n.naturalWidth,h=n.naturalHeight,p=90===z(n.rotate),l=p?h:r,c=p?r:h,d=l/c,u=s,g=a;a*d>s?3===e?u=a*d:g=s/d:3===e?g=s/d:u=a*d,i={naturalWidth:l,naturalHeight:c,aspectRatio:d,width:u,height:g},i.oldLeft=i.left=(s-u)/2,i.oldTop=i.top=(a-g)/2,this.canvas=i,this.isLimited=1===e||2===e,this.limitCanvas(!0,!0),this.initialImage=t.extend({},n),this.initialCanvas=t.extend({},i)},limitCanvas:function(t,i){var e,o,s,a,n=this.options,r=n.viewMode,h=this.container,p=h.width,l=h.height,c=this.canvas,d=c.aspectRatio,u=this.cropBox,g=this.isCropped&&u;t&&(e=R(n.minCanvasWidth)||0,o=R(n.minCanvasHeight)||0,r&&(r>1?(e=H(e,p),o=H(o,l),3===r&&(o*d>e?e=o*d:o=e/d)):e?e=H(e,g?u.width:0):o?o=H(o,g?u.height:0):g&&(e=u.width,o=u.height,o*d>e?e=o*d:o=e/d)),e&&o?o*d>e?o=e/d:e=o*d:e?o=e/d:o&&(e=o*d),c.minWidth=e,c.minHeight=o,c.maxWidth=1/0,c.maxHeight=1/0),i&&(r?(s=p-c.width,a=l-c.height,c.minLeft=W(0,s),c.minTop=W(0,a),c.maxLeft=H(0,s),c.maxTop=H(0,a),g&&this.isLimited&&(c.minLeft=W(u.left,u.left+u.width-c.width),c.minTop=W(u.top,u.top+u.height-c.height),c.maxLeft=u.left,c.maxTop=u.top,2===r&&(c.width>=p&&(c.minLeft=W(0,s),c.maxLeft=H(0,s)),c.height>=l&&(c.minTop=W(0,a),c.maxTop=H(0,a))))):(c.minLeft=-c.width,c.minTop=-c.height,c.maxLeft=p,c.maxTop=l))},renderCanvas:function(t){var i,e,o=this.canvas,s=this.image,a=s.rotate,n=s.naturalWidth,r=s.naturalHeight;this.isRotated&&(this.isRotated=!1,e=l({width:s.width,height:s.height,degree:a}),(i=e.width/e.height)!==o.aspectRatio&&(o.left-=(e.width-o.width)/2,o.top-=(e.height-o.height)/2,o.width=e.width,o.height=e.height,o.aspectRatio=i,o.naturalWidth=n,o.naturalHeight=r,a%180&&(e=l({width:n,height:r,degree:a}),o.naturalWidth=e.width,o.naturalHeight=e.height),this.limitCanvas(!0,!1))),(o.width>o.maxWidth||o.width<o.minWidth)&&(o.left=o.oldLeft),(o.height>o.maxHeight||o.height<o.minHeight)&&(o.top=o.oldTop),o.width=W(H(o.width,o.minWidth),o.maxWidth),o.height=W(H(o.height,o.minHeight),o.maxHeight),this.limitCanvas(!1,!0),o.oldLeft=o.left=W(H(o.left,o.minLeft),o.maxLeft),o.oldTop=o.top=W(H(o.top,o.minTop),o.maxTop),this.$canvas.css({width:o.width,height:o.height,left:o.left,top:o.top}),this.renderImage(),this.isCropped&&this.isLimited&&this.limitCropBox(!0,!0),t&&this.output()},renderImage:function(i){var e,o=this.canvas,s=this.image;s.rotate&&(e=l({width:o.width,height:o.height,degree:s.rotate,aspectRatio:s.aspectRatio},!0)),t.extend(s,e?{width:e.width,height:e.height,left:(o.width-e.width)/2,top:(o.height-e.height)/2}:{width:o.width,height:o.height,left:0,top:0}),this.$clone.css({width:s.width,height:s.height,marginLeft:s.left,marginTop:s.top,transform:p(s)}),i&&this.output()},initCropBox:function(){var i=this.options,e=this.canvas,o=i.aspectRatio,s=R(i.autoCropArea)||.8,a={width:e.width,height:e.height};o&&(e.height*o>e.width?a.height=a.width/o:a.width=a.height*o),this.cropBox=a,this.limitCropBox(!0,!0),a.width=W(H(a.width,a.minWidth),a.maxWidth),a.height=W(H(a.height,a.minHeight),a.maxHeight),a.width=H(a.minWidth,a.width*s),a.height=H(a.minHeight,a.height*s),a.oldLeft=a.left=e.left+(e.width-a.width)/2,a.oldTop=a.top=e.top+(e.height-a.height)/2,this.initialCropBox=t.extend({},a)},limitCropBox:function(t,i){var e,o,s,a,n=this.options,r=n.aspectRatio,h=this.container,p=h.width,l=h.height,c=this.canvas,d=this.cropBox,u=this.isLimited;t&&(e=R(n.minCropBoxWidth)||0,o=R(n.minCropBoxHeight)||0,e=W(e,p),o=W(o,l),s=W(p,u?c.width:p),a=W(l,u?c.height:l),r&&(e&&o?o*r>e?o=e/r:e=o*r:e?o=e/r:o&&(e=o*r),a*r>s?a=s/r:s=a*r),d.minWidth=W(e,s),d.minHeight=W(o,a),d.maxWidth=s,d.maxHeight=a),i&&(u?(d.minLeft=H(0,c.left),d.minTop=H(0,c.top),d.maxLeft=W(p,c.left+c.width)-d.width,d.maxTop=W(l,c.top+c.height)-d.height):(d.minLeft=0,d.minTop=0,d.maxLeft=p-d.width,d.maxTop=l-d.height))},renderCropBox:function(){var t=this.options,i=this.container,e=i.width,o=i.height,s=this.cropBox;(s.width>s.maxWidth||s.width<s.minWidth)&&(s.left=s.oldLeft),(s.height>s.maxHeight||s.height<s.minHeight)&&(s.top=s.oldTop),s.width=W(H(s.width,s.minWidth),s.maxWidth),s.height=W(H(s.height,s.minHeight),s.maxHeight),this.limitCropBox(!1,!0),s.oldLeft=s.left=W(H(s.left,s.minLeft),s.maxLeft),s.oldTop=s.top=W(H(s.top,s.minTop),s.maxTop),t.movable&&t.cropBoxMovable&&this.$face.data("action",s.width===e&&s.height===o?"move":"all"),this.$cropBox.css({width:s.width,height:s.height,left:s.left,top:s.top}),this.isCropped&&this.isLimited&&this.limitCanvas(!0,!0),this.isDisabled||this.output()},output:function(){this.preview(),this.isCompleted?this.trigger("crop.cropper",this.getData()):this.isBuilt||this.$element.one("built.cropper",t.proxy(function(){this.trigger("crop.cropper",this.getData())},this))},initPreview:function(){var i,e=r(this.crossOrigin),o=e?this.crossOriginUrl:this.url;this.$preview=t(this.options.preview),this.$clone2=i=t("<img"+e+' src="'+o+'">'),this.$viewBox.html(i),this.$preview.each(function(){var i=t(this);i.data("preview",{width:i.width(),height:i.height(),html:i.html()}),i.html("<img"+e+' src="'+o+'" style="display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;">')})},resetPreview:function(){this.$preview.each(function(){var i=t(this),e=i.data("preview");i.css({width:e.width,height:e.height}).html(e.html).removeData("preview")})},preview:function(){var i=this.image,e=this.canvas,o=this.cropBox,s=o.width,a=o.height,n=i.width,r=i.height,h=o.left-e.left-i.left,l=o.top-e.top-i.top;this.isCropped&&!this.isDisabled&&(this.$clone2.css({width:n,height:r,marginLeft:-h,marginTop:-l,transform:p(i)}),this.$preview.each(function(){var e=t(this),o=e.data("preview"),c=o.width,d=o.height,u=c,g=d,m=1;s&&(m=c/s,g=a*m),a&&g>d&&(m=d/a,u=s*m,g=d),e.css({width:u,height:g}).find("img").css({width:n*m,height:r*m,marginLeft:-h*m,marginTop:-l*m,transform:p(i)})}))},bind:function(){var i=this.options,e=this.$element,o=this.$cropper;t.isFunction(i.cropstart)&&e.on("cropstart.cropper",i.cropstart),t.isFunction(i.cropmove)&&e.on("cropmove.cropper",i.cropmove),t.isFunction(i.cropend)&&e.on("cropend.cropper",i.cropend),t.isFunction(i.crop)&&e.on("crop.cropper",i.crop),t.isFunction(i.zoom)&&e.on("zoom.cropper",i.zoom),o.on("mousedown touchstart pointerdown MSPointerDown",t.proxy(this.cropStart,this)),i.zoomable&&i.zoomOnWheel&&o.on("wheel mousewheel DOMMouseScroll",t.proxy(this.wheel,this)),i.toggleDragModeOnDblclick&&o.on("dblclick",t.proxy(this.dblclick,this)),b.on("mousemove touchmove pointermove MSPointerMove",this._cropMove=s(this.cropMove,this)).on(I,this._cropEnd=s(this.cropEnd,this)),i.responsive&&w.on("resize.cropper",this._resize=s(this.resize,this))},unbind:function(){var i=this.options,e=this.$element,o=this.$cropper;t.isFunction(i.cropstart)&&e.off("cropstart.cropper",i.cropstart),t.isFunction(i.cropmove)&&e.off("cropmove.cropper",i.cropmove),t.isFunction(i.cropend)&&e.off("cropend.cropper",i.cropend),t.isFunction(i.crop)&&e.off("crop.cropper",i.crop),t.isFunction(i.zoom)&&e.off("zoom.cropper",i.zoom),o.off("mousedown touchstart pointerdown MSPointerDown",this.cropStart),i.zoomable&&i.zoomOnWheel&&o.off("wheel mousewheel DOMMouseScroll",this.wheel),i.toggleDragModeOnDblclick&&o.off("dblclick",this.dblclick),b.off("mousemove touchmove pointermove MSPointerMove",this._cropMove).off(I,this._cropEnd),i.responsive&&w.off("resize.cropper",this._resize)},resize:function(){var i,e,o,s=this.options.restore,a=this.$container,n=this.container;!this.isDisabled&&n&&(1===(o=a.width()/n.width)&&a.height()===n.height||(s&&(i=this.getCanvasData(),e=this.getCropBoxData()),this.render(),s&&(this.setCanvasData(t.each(i,function(t,e){i[t]=e*o})),this.setCropBoxData(t.each(e,function(t,i){e[t]=i*o})))))},dblclick:function(){this.isDisabled||(this.$dragBox.hasClass("cropper-crop")?this.setDragMode("move"):this.setDragMode("crop"))},wheel:function(i){var e=i.originalEvent||i,o=R(this.options.wheelZoomRatio)||.1,s=1;this.isDisabled||(i.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(t.proxy(function(){this.wheeling=!1},this),50),e.deltaY?s=e.deltaY>0?1:-1:e.wheelDelta?s=-e.wheelDelta/120:e.detail&&(s=e.detail>0?1:-1),this.zoom(-s*o,i)))},cropStart:function(i){var e,o,s=this.options,a=i.originalEvent,n=a&&a.touches,r=i;if(!this.isDisabled){if(n){if((e=n.length)>1){if(!s.zoomable||!s.zoomOnTouch||2!==e)return;r=n[1],this.startX2=r.pageX,this.startY2=r.pageY,o="zoom"}r=n[0]}if(o=o||t(r.target).data("action"),M.test(o)){if(this.trigger("cropstart.cropper",{originalEvent:a,action:o}).isDefaultPrevented())return;i.preventDefault(),this.action=o,this.cropping=!1,this.startX=r.pageX||a&&a.pageX,this.startY=r.pageY||a&&a.pageY,"crop"===o&&(this.cropping=!0,this.$dragBox.addClass("cropper-modal"))}}},cropMove:function(t){var i,e=this.options,o=t.originalEvent,s=o&&o.touches,a=t,n=this.action;if(!this.isDisabled){if(s){if((i=s.length)>1){if(!e.zoomable||!e.zoomOnTouch||2!==i)return;a=s[1],this.endX2=a.pageX,this.endY2=a.pageY}a=s[0]}if(n){if(this.trigger("cropmove.cropper",{originalEvent:o,action:n}).isDefaultPrevented())return;t.preventDefault(),this.endX=a.pageX||o&&o.pageX,this.endY=a.pageY||o&&o.pageY,this.change(a.shiftKey,"zoom"===n?t:null)}}},cropEnd:function(t){var i=t.originalEvent,e=this.action;this.isDisabled||e&&(t.preventDefault(),this.cropping&&(this.cropping=!1,this.$dragBox.toggleClass("cropper-modal",this.isCropped&&this.options.modal)),this.action="",this.trigger("cropend.cropper",{originalEvent:i,action:e}))},change:function(t,i){var e,o,s=this.options,a=s.aspectRatio,n=this.action,r=this.container,h=this.canvas,p=this.cropBox,l=p.width,c=p.height,d=p.left,u=p.top,g=d+l,m=u+c,f=0,v=0,w=r.width,b=r.height,x=!0;switch(!a&&t&&(a=l&&c?l/c:1),this.limited&&(f=p.minLeft,v=p.minTop,w=f+W(r.width,h.left+h.width),b=v+W(r.height,h.top+h.height)),o={x:this.endX-this.startX,y:this.endY-this.startY},a&&(o.X=o.y*a,o.Y=o.x/a),n){case"all":d+=o.x,u+=o.y;break;case"e":if(o.x>=0&&(g>=w||a&&(u<=v||m>=b))){x=!1;break}l+=o.x,a&&(c=l/a,u-=o.Y/2),l<0&&(n="w",l=0);break;case"n":if(o.y<=0&&(u<=v||a&&(d<=f||g>=w))){x=!1;break}c-=o.y,u+=o.y,a&&(l=c*a,d+=o.X/2),c<0&&(n="s",c=0);break;case"w":if(o.x<=0&&(d<=f||a&&(u<=v||m>=b))){x=!1;break}l-=o.x,d+=o.x,a&&(c=l/a,u+=o.Y/2),l<0&&(n="e",l=0);break;case"s":if(o.y>=0&&(m>=b||a&&(d<=f||g>=w))){x=!1;break}c+=o.y,a&&(l=c*a,d-=o.X/2),c<0&&(n="n",c=0);break;case"ne":if(a){if(o.y<=0&&(u<=v||g>=w)){x=!1;break}c-=o.y,u+=o.y,l=c*a}else o.x>=0?g<w?l+=o.x:o.y<=0&&u<=v&&(x=!1):l+=o.x,o.y<=0?u>v&&(c-=o.y,u+=o.y):(c-=o.y,u+=o.y);l<0&&c<0?(n="sw",c=0,l=0):l<0?(n="nw",l=0):c<0&&(n="se",c=0);break;case"nw":if(a){if(o.y<=0&&(u<=v||d<=f)){x=!1;break}c-=o.y,u+=o.y,l=c*a,d+=o.X}else o.x<=0?d>f?(l-=o.x,d+=o.x):o.y<=0&&u<=v&&(x=!1):(l-=o.x,d+=o.x),o.y<=0?u>v&&(c-=o.y,u+=o.y):(c-=o.y,u+=o.y);l<0&&c<0?(n="se",c=0,l=0):l<0?(n="ne",l=0):c<0&&(n="sw",c=0);break;case"sw":if(a){if(o.x<=0&&(d<=f||m>=b)){x=!1;break}l-=o.x,d+=o.x,c=l/a}else o.x<=0?d>f?(l-=o.x,d+=o.x):o.y>=0&&m>=b&&(x=!1):(l-=o.x,d+=o.x),o.y>=0?m<b&&(c+=o.y):c+=o.y;l<0&&c<0?(n="ne",c=0,l=0):l<0?(n="se",l=0):c<0&&(n="nw",c=0);break;case"se":if(a){if(o.x>=0&&(g>=w||m>=b)){x=!1;break}l+=o.x,c=l/a}else o.x>=0?g<w?l+=o.x:o.y>=0&&m>=b&&(x=!1):l+=o.x,o.y>=0?m<b&&(c+=o.y):c+=o.y;l<0&&c<0?(n="nw",c=0,l=0):l<0?(n="sw",l=0):c<0&&(n="ne",c=0);break;case"move":this.move(o.x,o.y),x=!1;break;case"zoom":this.zoom(function(t,i,e,o){var s=O(t*t+i*i);return(O(e*e+o*o)-s)/s}(z(this.startX-this.startX2),z(this.startY-this.startY2),z(this.endX-this.endX2),z(this.endY-this.endY2)),i),this.startX2=this.endX2,this.startY2=this.endY2,x=!1;break;case"crop":if(!o.x||!o.y){x=!1;break}e=this.$cropper.offset(),d=this.startX-e.left,u=this.startY-e.top,l=p.minWidth,c=p.minHeight,o.x>0?n=o.y>0?"se":"ne":o.x<0&&(d-=l,n=o.y>0?"sw":"nw"),o.y<0&&(u-=c),this.isCropped||(this.$cropBox.removeClass($),this.isCropped=!0,this.limited&&this.limitCropBox(!0,!0))}x&&(p.width=l,p.height=c,p.left=d,p.top=u,this.action=n,this.renderCropBox()),this.startX=this.endX,this.startY=this.endY},crop:function(){this.isBuilt&&!this.isDisabled&&(this.isCropped||(this.isCropped=!0,this.limitCropBox(!0,!0),this.options.modal&&this.$dragBox.addClass("cropper-modal"),this.$cropBox.removeClass($)),this.setCropBoxData(this.initialCropBox))},reset:function(){this.isBuilt&&!this.isDisabled&&(this.image=t.extend({},this.initialImage),this.canvas=t.extend({},this.initialCanvas),this.cropBox=t.extend({},this.initialCropBox),this.renderCanvas(),this.isCropped&&this.renderCropBox())},clear:function(){this.isCropped&&!this.isDisabled&&(t.extend(this.cropBox,{left:0,top:0,width:0,height:0}),this.isCropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),this.$dragBox.removeClass("cropper-modal"),this.$cropBox.addClass($))},replace:function(t,i){!this.isDisabled&&t&&(this.isImg&&this.$element.attr("src",t),i?(this.url=t,this.$clone.attr("src",t),this.isBuilt&&this.$preview.find("img").add(this.$clone2).attr("src",t)):(this.isImg&&(this.isReplaced=!0),this.options.data=null,this.load(t)))},enable:function(){this.isBuilt&&(this.isDisabled=!1,this.$cropper.removeClass("cropper-disabled"))},disable:function(){this.isBuilt&&(this.isDisabled=!0,this.$cropper.addClass("cropper-disabled"))},destroy:function(){var t=this.$element;this.isLoaded?(this.isImg&&this.isReplaced&&t.attr("src",this.originalUrl),this.unbuild(),t.removeClass($)):this.isImg?t.off("load.cropper",this.start):this.$clone&&this.$clone.remove(),t.removeData("cropper")},move:function(t,i){var o=this.canvas;this.moveTo(e(t)?t:o.left+R(t),e(i)?i:o.top+R(i))},moveTo:function(t,o){var s=this.canvas,a=!1;e(o)&&(o=t),t=R(t),o=R(o),this.isBuilt&&!this.isDisabled&&this.options.movable&&(i(t)&&(s.left=t,a=!0),i(o)&&(s.top=o,a=!0),a&&this.renderCanvas(!0))},zoom:function(t,i){var e=this.canvas;t=R(t),t=t<0?1/(1-t):1+t,this.zoomTo(e.width*t/e.naturalWidth,i)},zoomTo:function(t,i){var e,o,s,a,n,r=this.options,h=this.canvas,p=h.width,l=h.height,c=h.naturalWidth,u=h.naturalHeight;if((t=R(t))>=0&&this.isBuilt&&!this.isDisabled&&r.zoomable){if(o=c*t,s=u*t,i&&(e=i.originalEvent),this.trigger("zoom.cropper",{originalEvent:e,oldRatio:p/c,ratio:o/c}).isDefaultPrevented())return;e?(a=this.$cropper.offset(),n=e.touches?d(e.touches):{pageX:i.pageX||e.pageX||0,pageY:i.pageY||e.pageY||0},h.left-=(o-p)*((n.pageX-a.left-h.left)/p),h.top-=(s-l)*((n.pageY-a.top-h.top)/l)):(h.left-=(o-p)/2,h.top-=(s-l)/2),h.width=o,h.height=s,this.renderCanvas(!0)}},rotate:function(t){this.rotateTo((this.image.rotate||0)+R(t))},rotateTo:function(t){t=R(t),i(t)&&this.isBuilt&&!this.isDisabled&&this.options.rotatable&&(this.image.rotate=t%360,this.isRotated=!0,this.renderCanvas(!0))},scale:function(t,o){var s=this.image,a=!1;e(o)&&(o=t),t=R(t),o=R(o),this.isBuilt&&!this.isDisabled&&this.options.scalable&&(i(t)&&(s.scaleX=t,a=!0),i(o)&&(s.scaleY=o,a=!0),a&&this.renderImage(!0))},scaleX:function(t){var e=this.image.scaleY;this.scale(t,i(e)?e:1)},scaleY:function(t){var e=this.image.scaleX;this.scale(i(e)?e:1,t)},getData:function(i){var e,o,s=this.options,a=this.image,n=this.canvas,r=this.cropBox;return this.isBuilt&&this.isCropped?(o={x:r.left-n.left,y:r.top-n.top,width:r.width,height:r.height},e=a.width/a.naturalWidth,t.each(o,function(t,s){s/=e,o[t]=i?P(s):s})):o={x:0,y:0,width:0,height:0},s.rotatable&&(o.rotate=a.rotate||0),s.scalable&&(o.scaleX=a.scaleX||1,o.scaleY=a.scaleY||1),o},setData:function(e){var o,s,a,n=this.options,r=this.image,h=this.canvas,p={};t.isFunction(e)&&(e=e.call(this.element)),this.isBuilt&&!this.isDisabled&&t.isPlainObject(e)&&(n.rotatable&&i(e.rotate)&&e.rotate!==r.rotate&&(r.rotate=e.rotate,this.isRotated=o=!0),n.scalable&&(i(e.scaleX)&&e.scaleX!==r.scaleX&&(r.scaleX=e.scaleX,s=!0),i(e.scaleY)&&e.scaleY!==r.scaleY&&(r.scaleY=e.scaleY,s=!0)),o?this.renderCanvas():s&&this.renderImage(),a=r.width/r.naturalWidth,i(e.x)&&(p.left=e.x*a+h.left),i(e.y)&&(p.top=e.y*a+h.top),i(e.width)&&(p.width=e.width*a),i(e.height)&&(p.height=e.height*a),this.setCropBoxData(p))},getContainerData:function(){return this.isBuilt?this.container:{}},getImageData:function(){return this.isLoaded?this.image:{}},getCanvasData:function(){var i=this.canvas,e={};return this.isBuilt&&t.each(["left","top","width","height","naturalWidth","naturalHeight"],function(t,o){e[o]=i[o]}),e},setCanvasData:function(e){var o=this.canvas,s=o.aspectRatio;t.isFunction(e)&&(e=e.call(this.$element)),this.isBuilt&&!this.isDisabled&&t.isPlainObject(e)&&(i(e.left)&&(o.left=e.left),i(e.top)&&(o.top=e.top),i(e.width)?(o.width=e.width,o.height=e.width/s):i(e.height)&&(o.height=e.height,o.width=e.height*s),this.renderCanvas(!0))},getCropBoxData:function(){var t,i=this.cropBox;return this.isBuilt&&this.isCropped&&(t={left:i.left,top:i.top,width:i.width,height:i.height}),t||{}},setCropBoxData:function(e){var o,s,a=this.cropBox,n=this.options.aspectRatio;t.isFunction(e)&&(e=e.call(this.$element)),this.isBuilt&&this.isCropped&&!this.isDisabled&&t.isPlainObject(e)&&(i(e.left)&&(a.left=e.left),i(e.top)&&(a.top=e.top),i(e.width)&&(o=!0,a.width=e.width),i(e.height)&&(s=!0,a.height=e.height),n&&(o?a.height=a.width/n:s&&(a.width=a.height*n)),this.renderCropBox())},getCroppedCanvas:function(i){var e,o,s,a,n,r,h,p,l,d,u;if(this.isBuilt&&this.isCropped&&X)return t.isPlainObject(i)||(i={}),u=this.getData(),e=u.width,o=u.height,p=e/o,t.isPlainObject(i)&&(n=i.width,r=i.height,n?(r=n/p,h=n/e):r&&(n=r*p,h=r/o)),s=S(n||e),a=S(r||o),l=t("<canvas>")[0],l.width=s,l.height=a,d=l.getContext("2d"),i.fillColor&&(d.fillStyle=i.fillColor,d.fillRect(0,0,s,a)),d.drawImage.apply(d,function(){var t,i,s,a,n,r,p=c(this.$clone[0],this.image),l=p.width,d=p.height,g=this.canvas,m=[p],f=u.x+g.naturalWidth*(z(u.scaleX||1)-1)/2,v=u.y+g.naturalHeight*(z(u.scaleY||1)-1)/2;return f<=-e||f>l?f=t=s=n=0:f<=0?(s=-f,f=0,t=n=W(l,e+f)):f<=l&&(s=0,t=n=W(e,l-f)),t<=0||v<=-o||v>d?v=i=a=r=0:v<=0?(a=-v,v=0,i=r=W(d,o+v)):v<=d&&(a=0,i=r=W(o,d-v)),m.push(S(f),S(v),S(t),S(i)),h&&(s*=h,a*=h,n*=h,r*=h),n>0&&r>0&&m.push(S(s),S(a),S(n),S(r)),m}.call(this)),l},setAspectRatio:function(t){var i=this.options;this.isDisabled||e(t)||(i.aspectRatio=H(0,t)||NaN,this.isBuilt&&(this.initCropBox(),this.isCropped&&this.renderCropBox()))},setDragMode:function(t){var i,e,o=this.options;this.isLoaded&&!this.isDisabled&&(i="crop"===t,e=o.movable&&"move"===t,t=i||e?t:"none",this.$dragBox.data("action",t).toggleClass("cropper-crop",i).toggleClass("cropper-move",e),o.cropBoxMovable||this.$face.data("action",t).toggleClass("cropper-crop",i).toggleClass("cropper-move",e))}},v.DEFAULTS={viewMode:0,dragMode:"crop",aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,build:null,built:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},v.setDefaults=function(i){t.extend(v.DEFAULTS,i)},v.TEMPLATE='<div class="cropper-container"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-action="e"></span><span class="cropper-line line-n" data-action="n"></span><span class="cropper-line line-w" data-action="w"></span><span class="cropper-line line-s" data-action="s"></span><span class="cropper-point point-e" data-action="e"></span><span class="cropper-point point-n" data-action="n"></span><span class="cropper-point point-w" data-action="w"></span><span class="cropper-point point-s" data-action="s"></span><span class="cropper-point point-ne" data-action="ne"></span><span class="cropper-point point-nw" data-action="nw"></span><span class="cropper-point point-sw" data-action="sw"></span><span class="cropper-point point-se" data-action="se"></span></div></div>',v.other=t.fn.cropper,t.fn.cropper=function(i){var s,a=o(arguments,1);return this.each(function(){var e,o,n=t(this),r=n.data("cropper");if(!r){if(/destroy/.test(i))return;e=t.extend({},n.data(),t.isPlainObject(i)&&i),n.data("cropper",r=new v(this,e))}"string"==typeof i&&t.isFunction(o=r[i])&&(s=o.apply(r,a))}),e(s)?this:s},t.fn.cropper.Constructor=v,t.fn.cropper.setDefaults=v.setDefaults,t.fn.cropper.noConflict=function(){return t.fn.cropper=v.other,this}})},dYvO:function(t,i,e){(function(t){function i(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var e=function(){function t(t,i){for(var e=0;e<i.length;e++){var o=i[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(i,e,o){return e&&t(i.prototype,e),o&&t(i,o),i}}();!function(o){var s=function(){function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=e.form;i(this,o),this.onSubmitForm=this.onSubmitForm.bind(this),this.form=s||t(".edit-user"),this.bindEvents(),this.initAvatarGlCrop()}return e(o,[{key:"initAvatarGlCrop",value:function(){var i={filename:".js-avatar-filename",previewImage:".avatar-image .avatar",modalCrop:".modal-profile-crop",pickImageEl:".js-choose-user-avatar-button",uploadImageBtn:".js-upload-user-avatar",modalCropImg:".modal-profile-crop-image"};this.avatarGlCrop=t(".js-user-avatar-input").glCrop(i).data("glcrop")}},{key:"bindEvents",value:function(){t(".js-preferences-form").on("change.preference","input[type=radio]",this.submitForm),t("#user_notification_email").on("change",this.submitForm),t("#user_notified_of_own_activity").on("change",this.submitForm),t(".update-username").on("ajax:before",this.beforeUpdateUsername),t(".update-username").on("ajax:complete",this.afterUpdateUsername),t(".update-notifications").on("ajax:success",this.onUpdateNotifs),this.form.on("submit",this.onSubmitForm)}},{key:"submitForm",value:function(){return t(this).parents("form").submit()}},{key:"onSubmitForm",value:function(t){return t.preventDefault(),this.saveForm()}},{key:"beforeUpdateUsername",value:function(){t(".loading-username",this).removeClass("hidden")}},{key:"afterUpdateUsername",value:function(){t(".loading-username",this).addClass("hidden"),t("button[type=submit]",this).enable()}},{key:"onUpdateNotifs",value:function(t,i){return i.saved?new Flash("Notification settings saved","notice"):new Flash("Failed to save new settings","alert")}},{key:"saveForm",value:function(){var i=this,e=new FormData(this.form[0]),o=this.avatarGlCrop.getBlob();return null!=o&&e.append("user[avatar]",o,"avatar.png"),t.ajax({url:this.form.attr("action"),type:this.form.attr("method"),data:e,dataType:"json",processData:!1,contentType:!1,success:function(t){return new Flash(t.message,"notice")},error:function(t){return new Flash(t.responseJSON.message,"alert")},complete:function(){return window.scrollTo(0,0),i.form.find(":input[disabled]").enable()}})}}]),o}();t(function(){if(t(document).on("input.ssh_key","#key_key",function(){var i=t("#key_title"),e=t(this).val().match(/^\S+ \S+ (.+)\n?$/);if(e&&e.length>1)return i.val(e[1]).change()}),"profiles"===o.utils.getPagePath())return new s})}(window.gl||(window.gl={}))}).call(i,e("lwLq"))}},["RUZQ"]);
//# sourceMappingURL=profile.56fab56f950907c5b67a.bundle.js.map