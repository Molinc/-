"use strict";(self["webpackChunkmoire"]=self["webpackChunkmoire"]||[]).push([[202],{4826:function(t,o,e){e.d(o,{Z:function(){return s}});e(7658);var i=e(1103);function s(t,o){const e=[];return t.forEach((t=>{let s;s=t.gallery?.length&&t.gallery[0].file?.url?t.gallery:[{file:{url:i}}];let n=!0;const r=t.color.id===o;let l=0;s.forEach((o=>{e.push({id:`${t.color.id}/${l}-${o.file.url}`,color:t.id,colorId:t.color.id,photo:o.file.url,isCurrent:r&&n,colorCurrent:r}),n=!1,l++}))})),e}},2374:function(t,o,e){e.d(o,{Z:function(){return m}});var i=e(6252),s=e(9963);const n={class:"form__counter"},r=(0,i._)("svg",{width:"12",height:"12",fill:"currentColor"},[(0,i._)("use",{"xlink:href":"#icon-minus"})],-1),l=[r],c=(0,i._)("svg",{width:"12",height:"12",fill:"currentColor"},[(0,i._)("use",{"xlink:href":"#icon-plus"})],-1),u=[c];function a(t,o,e,r,c,a){return(0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("button",{type:"button","aria-label":"Убрать один товар",onClick:o[0]||(o[0]=(...t)=>a.decrease&&a.decrease(...t))},l),(0,i.wy)((0,i._)("input",{name:"count",id:"count","onUpdate:modelValue":o[1]||(o[1]=t=>c.count=t),onInput:o[2]||(o[2]=(...t)=>a.update&&a.update(...t))},null,544),[[s.nr,c.count,void 0,{number:!0}]]),(0,i._)("button",{type:"button","aria-label":"Добавить один товар",onClick:o[3]||(o[3]=(...t)=>a.increase&&a.increase(...t))},u)])}var d={name:"BaseCounter",props:["amount","minVal"],emits:["update:amount"],data(){return{count:1}},computed:{minValue(){return parseInt(this.minVal,10)||0}},methods:{checkValue(t){return t&&parseInt(t,10)?Math.max(t,this.minValue):this.minValue},update(){this.count=this.checkValue(this.count),this.onChange()},increase(){this.count=this.checkValue(this.count+1),this.onChange()},decrease(){this.count=this.checkValue(this.count-1),this.onChange()},onChange(){this.$emit("update:amount",this.count)}},watch:{amount(){this.amount!==this.count&&(this.count=this.amount)}},mounted(){this.count=this.amount}},p=e(3744);const h=(0,p.Z)(d,[["render",a]]);var m=h},8202:function(t,o,e){e.r(o),e.d(o,{default:function(){return U}});var i=e(6252),s=e(3577);const n={class:"item-popup"},r={class:"item item-popup__content"},l={class:"item-popup__params"},c={class:"item__code"},u={class:"item__title item-popup__title"},a={class:"item__row item__row--center"},d={key:0,class:"item__price item-popup__price"},p={class:"item__row"};function h(t,o,e,h,m,_){const g=(0,i.up)("SpinnerSpring"),f=(0,i.up)("ProductViewPhotos"),b=(0,i.up)("BaseCounter"),w=(0,i.up)("ColorsSelect"),v=(0,i.up)("SizesSelect"),C=(0,i.up)("Popup");return(0,i.wg)(),(0,i.j4)(C,{title:_.product.title,"submit-button-title":"В корзину",onCancel:_.cancelAddingToCart,onSubmit:_.addToCart},{default:(0,i.w5)((()=>[(0,i._)("section",n,[(0,i.Wm)(g,{class:"item-popup__spinner",visible:m.productLoading,size:"medium"},null,8,["visible"]),(0,i._)("section",r,[(0,i.Wm)(f,{class:"item-popup__photos",photos:_.photos,"photo-id":m.photo,"onUpdate:photoId":o[0]||(o[0]=t=>m.photo=t),title:_.product.title,"gallery-visible":!1,"main-photo-height":"100%"},null,8,["photos","photo-id","title"]),(0,i._)("div",l,[(0,i._)("span",c,"Артикул: "+(0,s.zw)(_.product.id),1),(0,i._)("h2",u,(0,s.zw)(_.product.title),1),(0,i._)("div",a,[(0,i.Wm)(b,{"min-val":"1",amount:m.amount,"onUpdate:amount":o[1]||(o[1]=t=>m.amount=t)},null,8,["amount"]),m.productLoading?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("b",d,(0,s.zw)(t.numberFormat(_.product.price))+" ₽",1))]),(0,i._)("div",p,[(0,i.Wm)(w,{colors:_.product.colors,color:m.color,"onUpdate:color":o[2]||(o[2]=t=>m.color=t)},null,8,["colors","color"]),(0,i.Wm)(v,{sizes:_.product.sizes,size:m.size,"onUpdate:size":o[3]||(o[3]=t=>m.size=t)},null,8,["sizes","size"])])])])])])),_:1},8,["title","onCancel","onSubmit"])}const m={class:"popup",ref:"popup"},_={class:"popup__wrapper"},g={class:"popup__header"},f=(0,i._)("span",null,"Выбор параметров товара",-1),b=(0,i._)("i",{class:"material-icons"},"close",-1),w=[b],v={class:"popup__content"},C={class:"popup__footer"};function y(t,o,e,n,r,l){return(0,i.wg)(),(0,i.j4)(i.lR,{to:"#teleport-target"},[(0,i._)("div",m,[(0,i._)("div",_,[(0,i._)("div",g,[f,(0,i._)("span",{class:"popup__header-close",title:"Закрыть",onClick:o[0]||(o[0]=(...t)=>l.cancel&&l.cancel(...t))},w)]),(0,i._)("div",v,[(0,i.WI)(t.$slots,"default")]),(0,i._)("div",C,[(0,i._)("button",{class:"button button--second popup__btn popup__btn--close",onClick:o[1]||(o[1]=(...t)=>l.cancel&&l.cancel(...t))}," Закрыть "),(0,i._)("button",{class:"button button--primery popup__btn popup__btn--submit",onClick:o[2]||(o[2]=(...t)=>l.submit&&l.submit(...t))},(0,s.zw)(e.submitButtonTitle||"ОК"),1)])])],512)])}var z={name:"ProductItemPopup",props:["title","submitButtonTitle"],emits:["submit","cancel"],methods:{stopScrolling(){document.body.style.paddingRight=window.innerWidth-document.documentElement.clientWidth+"px",document.body.style.overflow="hidden"},startScrolling(){document.body.style.overflow="auto",document.body.style.paddingRight="null"},cancel(){this.startScrolling(),this.$emit("cancel")},submit(){this.startScrolling(),this.$emit("submit")}},mounted(){const t=this;t.stopScrolling(),document.addEventListener("click",(o=>{o.target===t.$refs["popup"]&&t.cancel()}))}},k=e(3744);const P=(0,k.Z)(z,[["render",y]]);var I=P,S=e(8455),V=e(510),Z=e(2374),D=e(9088),L=e(1502),T=e(4693),$=e(4826),W=e(3448),N=e(1445),x={name:"PopupProductView",props:["productId","colorId"],emits:["cancelled","added:productToCart"],data(){return{color:null,size:null,photo:null,amount:1,productData:null,productLoading:!1,productLoadingFailed:!1,productLoadingErrorCode:null}},computed:{product(){return this.productData?{...this.productData}:{}},photos(){return this.product?.colors?.length?(0,$.Z)(this.product.colors,this.colorId):[]},productGallery(){if(!this.product?.colors?.length)return[];const t=this.product.colors.find((t=>t.id===this.color));return t&&t.gallery?.length?t.gallery:[]},getColorId(){if(!this.product?.colors?.length)return"";const t=this.product.colors.find((t=>t.id===this.color));return t?.color.id}},methods:{cancelAddingToCart(){this.$emit("cancelled")},addToCart(){const t={productId:this.product?.id,colorId:this.getColorId,sizeId:this.size,quantity:this.amount};this.$emit("added:productToCart",t)},startLoading(){this.productLoading=!0,this.productLoadingFailed=!1,clearTimeout(this.loadProductTimer)},stopLoading(){this.productLoading=!1},loadProduct(){this.startLoading(),this.loadProductTimer=setTimeout((()=>{(0,W.I0)(this.productId).then((t=>{this.productData=t.data})).catch((t=>{this.productLoadingErrorCode=t.response.status,this.productLoadingFailed=!0,this.addNotification({text:N.R0.find((o=>o.code==t.response.status))?.caption??t.response.statusText,type:"error"})})).finally((()=>this.stopLoading()))}),0)}},watch:{product(){this.color=this.colorId||this.product.colors[0].id,this.size=this.product.sizes[0].id},productId(){this.loadProduct()},color(){const t=this.photos.filter((t=>t.color===this.color));t?.length&&(t.map((t=>t.id)).includes(this.photo)||(this.photo=t[0].id))},photo(){const t=this.photos.find((t=>t.id===this.photo))?.color;t&&t!==this.color&&(this.color=t)}},components:{Popup:I,SpinnerSpring:S.Z,ProductViewPhotos:V.Z,BaseCounter:Z.Z,ColorsSelect:D.Z,SizesSelect:L.Z},mixins:[T.ZP],mounted(){this.loadProduct()}};const H=(0,k.Z)(x,[["render",h]]);var U=H},510:function(t,o,e){e.d(o,{Z:function(){return g}});var i=e(6252),s=e(3577),n=e(9963);const r={class:"item__pics pics"},l=["src","alt"],c={key:0,class:"pics__list"},u=["onClick"],a=["src","alt"];function d(t,o,e,d,p,h){return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",{class:"pics__wrapper",style:(0,s.j5)({height:e.mainPhotoHeight})},[(0,i._)("img",{src:h.photo,alt:e.title||"Фото",class:"pics__main",style:(0,s.j5)({height:e.mainPhotoHeight})},null,12,l)],4),h.showGallery?((0,i.wg)(),(0,i.iD)("ul",c,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.photos,(t=>((0,i.wg)(),(0,i.iD)("li",{class:"pics__item",key:t.id},[(0,i._)("a",{href:"#",class:(0,s.C_)(["pics__link",{"pics__link--current":t.isCurrent}]),onClick:(0,n.iM)((o=>h.changeProductImage(t.id)),["prevent"])},[(0,i._)("img",{src:t.photo,alt:e.title},null,8,a)],10,u)])))),128))])):(0,i.kq)("",!0)])}var p=e(1103),h={name:"ProductViewPhotos",props:["photos","photoId","title","galleryVisible","mainPhotoWidth","mainPhotoHeight"],emits:["update:photoId"],computed:{photo:{get(){return this.photos.find((t=>t.id===this.photoId))?.photo||p},set(t){this.$emit("update:photoId",t)}},showGallery(){return this.galleryVisible??!0},getMainPhotoSizes(){let t=Number(this.mainPhotoWidth);Number.isNaN(t)&&(t=570);let o=Number(this.mainPhotoHeight);return Number.isNaN(o)&&(o=570),{width:t,height:o}}},methods:{changeProductImage(t){this.photo=t}}},m=e(3744);const _=(0,m.Z)(h,[["render",d]]);var g=_},9088:function(t,o,e){e.d(o,{Z:function(){return g}});var i=e(6252),s=e(9963),n=e(3577);const r={class:"form__block"},l=(0,i._)("legend",{class:"form__legend"},"Цвет",-1),c={class:"colors colors--black"},u={class:"colors__label"},a=["value"],d=["title"];function p(t,o,e,p,h,m){return(0,i.wg)(),(0,i.iD)("fieldset",r,[l,(0,i._)("ul",c,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.colors,(t=>((0,i.wg)(),(0,i.iD)("li",{class:"colors__item",key:t.id},[(0,i._)("label",u,[(0,i.wy)((0,i._)("input",{class:"colors__radio sr-only",type:"radio",name:"color-item",value:t.id,"onUpdate:modelValue":o[0]||(o[0]=t=>m.currentColor=t)},null,8,a),[[s.G2,m.currentColor]]),(0,i._)("span",{class:"colors__value",style:(0,n.j5)({"background-color":t.color.code}),title:t.title},null,12,d)])])))),128))])])}var h={name:"ColorsSelect",props:["colors","color"],emits:["update:color"],computed:{currentColor:{get(){return this.color},set(t){this.$emit("update:color",t)}}}},m=e(3744);const _=(0,m.Z)(h,[["render",p]]);var g=_},1502:function(t,o,e){e.d(o,{Z:function(){return m}});var i=e(6252),s=e(3577),n=e(9963);const r={class:"form__block"},l=(0,i._)("legend",{class:"form__legend"},"Размер",-1),c={class:"form__label form__label--small form__label--select"},u=["value"];function a(t,o,e,a,d,p){return(0,i.wg)(),(0,i.iD)("fieldset",r,[l,(0,i._)("label",c,[(0,i.wy)((0,i._)("select",{class:"form__select",name:"size","onUpdate:modelValue":o[0]||(o[0]=t=>p.currentSize=t)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.sizes,(t=>((0,i.wg)(),(0,i.iD)("option",{key:t.id,value:t.id},(0,s.zw)(t.title),9,u)))),128))],512),[[n.bM,p.currentSize]])])])}var d={name:"SizesSelect",props:["sizes","size"],emits:["update:size"],computed:{currentSize:{get(){return this.size},set(t){this.$emit("update:size",t)}}}},p=e(3744);const h=(0,p.Z)(d,[["render",a]]);var m=h}}]);
//# sourceMappingURL=202.99e37fc1.js.map