(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lr="160",Vo=0,Ar=1,Wo=2,Ja=1,Qa=2,rn=3,Mn=0,Pt=1,qt=2,_n=0,ii=1,yi=2,Rr=3,Cr=4,Xo=5,Ln=100,qo=101,Yo=102,Lr=103,Pr=104,Ko=200,jo=201,Zo=202,$o=203,Qs=204,er=205,Jo=206,Qo=207,ec=208,tc=209,nc=210,ic=211,sc=212,rc=213,ac=214,oc=0,cc=1,lc=2,is=3,hc=4,uc=5,dc=6,fc=7,eo=0,pc=1,mc=2,vn=0,gc=1,_c=2,vc=3,to=4,xc=5,Mc=6,no=300,ri=301,ai=302,tr=303,nr=304,hs=306,Ti=1e3,Yt=1001,ir=1002,At=1003,Ir=1004,Ss=1005,Gt=1006,Sc=1007,wi=1008,xn=1009,Ec=1010,yc=1011,hr=1012,io=1013,mn=1014,gn=1015,bi=1016,so=1017,ro=1018,In=1020,Tc=1021,Kt=1023,wc=1024,bc=1025,Dn=1026,oi=1027,Ac=1028,ao=1029,Rc=1030,oo=1031,co=1033,Es=33776,ys=33777,Ts=33778,ws=33779,Dr=35840,Ur=35841,Nr=35842,Or=35843,lo=36196,Fr=37492,Br=37496,Gr=37808,zr=37809,kr=37810,Hr=37811,Vr=37812,Wr=37813,Xr=37814,qr=37815,Yr=37816,Kr=37817,jr=37818,Zr=37819,$r=37820,Jr=37821,bs=36492,Qr=36494,ea=36495,Cc=36283,ta=36284,na=36285,ia=36286,ho=3e3,Un=3001,Lc=3200,Pc=3201,uo=0,Ic=1,zt="",vt="srgb",cn="srgb-linear",ur="display-p3",us="display-p3-linear",ss="linear",tt="srgb",rs="rec709",as="p3",Fn=7680,sa=519,Dc=512,Uc=513,Nc=514,fo=515,Oc=516,Fc=517,Bc=518,Gc=519,ra=35044,aa="300 es",sr=1035,on=2e3,os=2001;class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let oa=1234567;const Mi=Math.PI/180,ci=180/Math.PI;function ui(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[s&255]+Mt[s>>8&255]+Mt[s>>16&255]+Mt[s>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function Rt(s,e,t){return Math.max(e,Math.min(t,s))}function dr(s,e){return(s%e+e)%e}function zc(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function kc(s,e,t){return s!==e?(t-s)/(e-s):0}function Si(s,e,t){return(1-t)*s+t*e}function Hc(s,e,t,n){return Si(s,e,1-Math.exp(-t*n))}function Vc(s,e=1){return e-Math.abs(dr(s,e*2)-e)}function Wc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Xc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function qc(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Yc(s,e){return s+Math.random()*(e-s)}function Kc(s){return s*(.5-Math.random())}function jc(s){s!==void 0&&(oa=s);let e=oa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zc(s){return s*Mi}function $c(s){return s*ci}function rr(s){return(s&s-1)===0&&s!==0}function Jc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cs(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Qc(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*d,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*d,a*l);break;case"ZXZ":s.set(c*d,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*m,a*l);break;case"YXY":s.set(c*m,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ei(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function wt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Bn={DEG2RAD:Mi,RAD2DEG:ci,generateUUID:ui,clamp:Rt,euclideanModulo:dr,mapLinear:zc,inverseLerp:kc,lerp:Si,damp:Hc,pingpong:Vc,smoothstep:Wc,smootherstep:Xc,randInt:qc,randFloat:Yc,randFloatSpread:Kc,seededRandom:jc,degToRad:Zc,radToDeg:$c,isPowerOfTwo:rr,ceilPowerOfTwo:Jc,floorPowerOfTwo:cs,setQuaternionFromProperEuler:Qc,normalize:wt,denormalize:ei};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,i,r,o,a,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=i[0],p=i[3],u=i[6],y=i[1],S=i[4],w=i[7],P=i[2],A=i[5],b=i[8];return r[0]=o*_+a*y+c*P,r[3]=o*p+a*S+c*A,r[6]=o*u+a*w+c*b,r[1]=l*_+h*y+d*P,r[4]=l*p+h*S+d*A,r[7]=l*u+h*w+d*b,r[2]=f*_+m*y+g*P,r[5]=f*p+m*S+g*A,r[8]=f*u+m*w+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,f=a*c-h*r,m=l*r-o*c,g=t*d+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(As.makeScale(e,t)),this}rotate(e){return this.premultiply(As.makeRotation(-e)),this}translate(e,t){return this.premultiply(As.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const As=new ke;function po(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ls(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function el(){const s=ls("canvas");return s.style.display="block",s}const ca={};function Ei(s){s in ca||(ca[s]=!0,console.warn(s))}const la=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ha=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ii={[cn]:{transfer:ss,primaries:rs,toReference:s=>s,fromReference:s=>s},[vt]:{transfer:tt,primaries:rs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[us]:{transfer:ss,primaries:as,toReference:s=>s.applyMatrix3(ha),fromReference:s=>s.applyMatrix3(la)},[ur]:{transfer:tt,primaries:as,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ha),fromReference:s=>s.applyMatrix3(la).convertLinearToSRGB()}},tl=new Set([cn,us]),je={enabled:!0,_workingColorSpace:cn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!tl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Ii[e].toReference,i=Ii[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ii[s].primaries},getTransfer:function(s){return s===zt?ss:Ii[s].transfer}};function si(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Gn;class mo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gn===void 0&&(Gn=ls("canvas")),Gn.width=e.width,Gn.height=e.height;const n=Gn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nl=0;class go{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nl++}),this.uuid=ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Cs(i[o].image)):r.push(Cs(i[o]))}else r=Cs(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Cs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?mo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let il=0;class It extends hi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=Yt,i=Yt,r=Gt,o=wi,a=Kt,c=xn,l=It.DEFAULT_ANISOTROPY,h=zt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:il++}),this.uuid=ui(),this.name="",this.source=new go(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ei("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Un?vt:zt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==no)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ti:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case ir:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ti:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case ir:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ei("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vt?Un:ho}set encoding(e){Ei("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Un?vt:zt}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=no;It.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],m=c[5],g=c[9],_=c[2],p=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,w=(m+1)/2,P=(u+1)/2,A=(h+f)/4,b=(d+_)/4,X=(g+p)/4;return S>w&&S>P?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=A/n,r=b/n):w>P?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=A/i,r=X/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=b/r,i=X/r),this.set(n,i,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-_)/y,this.z=(f-h)/y,this.w=Math.acos((l+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sl extends hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ei("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Un?vt:zt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new It(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new go(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends sl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _o extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ai{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==f||l!==m||h!==g){let p=1-a;const u=c*f+l*m+h*g+d*_,y=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const P=Math.sqrt(S),A=Math.atan2(P,u*y);p=Math.sin(p*A)/P,a=Math.sin(a*A)/P}const w=a*y;if(c=c*p+f*w,l=l*p+m*w,h=h*p+g*w,d=d*p+_*w,p===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=P,l*=P,h*=P,d*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*d+c*m-l*f,e[t+1]=c*g+h*f+l*d-a*m,e[t+2]=l*g+h*m+a*f-c*d,e[t+3]=h*g-a*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(r/2),f=c(n/2),m=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"YZX":this._x=f*h*d+l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d-f*m*g;break;case"XZY":this._x=f*h*d-l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ua.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ua.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=i+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ls.copy(this).projectOnVector(e),this.sub(Ls)}reflect(e){return this.sub(Ls.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ls=new L,ua=new Ai;class Sn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ht):Ht.fromBufferAttribute(r,o),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Di.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Di.copy(n.boundingBox)),Di.applyMatrix4(e.matrixWorld),this.union(Di)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mi),Ui.subVectors(this.max,mi),zn.subVectors(e.a,mi),kn.subVectors(e.b,mi),Hn.subVectors(e.c,mi),hn.subVectors(kn,zn),un.subVectors(Hn,kn),Tn.subVectors(zn,Hn);let t=[0,-hn.z,hn.y,0,-un.z,un.y,0,-Tn.z,Tn.y,hn.z,0,-hn.x,un.z,0,-un.x,Tn.z,0,-Tn.x,-hn.y,hn.x,0,-un.y,un.x,0,-Tn.y,Tn.x,0];return!Ps(t,zn,kn,Hn,Ui)||(t=[1,0,0,0,1,0,0,0,1],!Ps(t,zn,kn,Hn,Ui))?!1:(Ni.crossVectors(hn,un),t=[Ni.x,Ni.y,Ni.z],Ps(t,zn,kn,Hn,Ui))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ht).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qt=[new L,new L,new L,new L,new L,new L,new L,new L],Ht=new L,Di=new Sn,zn=new L,kn=new L,Hn=new L,hn=new L,un=new L,Tn=new L,mi=new L,Ui=new L,Ni=new L,wn=new L;function Ps(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){wn.fromArray(s,r);const a=i.x*Math.abs(wn.x)+i.y*Math.abs(wn.y)+i.z*Math.abs(wn.z),c=e.dot(wn),l=t.dot(wn),h=n.dot(wn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const al=new Sn,gi=new L,Is=new L;class ds{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):al.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gi.subVectors(e,this.center);const t=gi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(gi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Is.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gi.copy(e.center).add(Is)),this.expandByPoint(gi.copy(e.center).sub(Is))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const en=new L,Ds=new L,Oi=new L,dn=new L,Us=new L,Fi=new L,Ns=new L;class vo{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ds.copy(e).add(t).multiplyScalar(.5),Oi.copy(t).sub(e).normalize(),dn.copy(this.origin).sub(Ds);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Oi),a=dn.dot(this.direction),c=-dn.dot(Oi),l=dn.lengthSq(),h=Math.abs(1-o*o);let d,f,m,g;if(h>0)if(d=o*c-a,f=o*a-c,g=r*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,m=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ds).addScaledVector(Oi,f),m}intersectSphere(e,t){en.subVectors(e.center,this.origin);const n=en.dot(this.direction),i=en.dot(en)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,n,i,r){Us.subVectors(t,e),Fi.subVectors(n,e),Ns.crossVectors(Us,Fi);let o=this.direction.dot(Ns),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;dn.subVectors(this.origin,e);const c=a*this.direction.dot(Fi.crossVectors(dn,Fi));if(c<0)return null;const l=a*this.direction.dot(Us.cross(dn));if(l<0||c+l>o)return null;const h=-a*dn.dot(Ns);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,i,r,o,a,c,l,h,d,f,m,g,_,p){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,d,f,m,g,_,p)}set(e,t,n,i,r,o,a,c,l,h,d,f,m,g,_,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Vn.setFromMatrixColumn(e,0).length(),r=1/Vn.setFromMatrixColumn(e,1).length(),o=1/Vn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,m=o*d,g=a*h,_=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,m=c*d,g=l*h,_=l*d;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,m=c*d,g=l*h,_=l*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,m=o*d,g=a*h,_=a*d;t[0]=c*h,t[4]=g*l-m,t[8]=f*l+_,t[1]=c*d,t[5]=_*l+f,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+_,t[5]=o*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ol,e,cl)}lookAt(e,t,n){const i=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),fn.crossVectors(n,Ut),fn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),fn.crossVectors(n,Ut)),fn.normalize(),Bi.crossVectors(Ut,fn),i[0]=fn.x,i[4]=Bi.x,i[8]=Ut.x,i[1]=fn.y,i[5]=Bi.y,i[9]=Ut.y,i[2]=fn.z,i[6]=Bi.z,i[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],u=n[14],y=n[3],S=n[7],w=n[11],P=n[15],A=i[0],b=i[4],X=i[8],M=i[12],T=i[1],B=i[5],z=i[9],j=i[13],C=i[2],D=i[6],k=i[10],Y=i[14],H=i[3],W=i[7],q=i[11],te=i[15];return r[0]=o*A+a*T+c*C+l*H,r[4]=o*b+a*B+c*D+l*W,r[8]=o*X+a*z+c*k+l*q,r[12]=o*M+a*j+c*Y+l*te,r[1]=h*A+d*T+f*C+m*H,r[5]=h*b+d*B+f*D+m*W,r[9]=h*X+d*z+f*k+m*q,r[13]=h*M+d*j+f*Y+m*te,r[2]=g*A+_*T+p*C+u*H,r[6]=g*b+_*B+p*D+u*W,r[10]=g*X+_*z+p*k+u*q,r[14]=g*M+_*j+p*Y+u*te,r[3]=y*A+S*T+w*C+P*H,r[7]=y*b+S*B+w*D+P*W,r[11]=y*X+S*z+w*k+P*q,r[15]=y*M+S*j+w*Y+P*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],u=e[15];return g*(+r*c*d-i*l*d-r*a*f+n*l*f+i*a*m-n*c*m)+_*(+t*c*m-t*l*f+r*o*f-i*o*m+i*l*h-r*c*h)+p*(+t*l*d-t*a*m-r*o*d+n*o*m+r*a*h-n*l*h)+u*(-i*a*h-t*c*d+t*a*f+i*o*d-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],u=e[15],y=d*p*l-_*f*l+_*c*m-a*p*m-d*c*u+a*f*u,S=g*f*l-h*p*l-g*c*m+o*p*m+h*c*u-o*f*u,w=h*_*l-g*d*l+g*a*m-o*_*m-h*a*u+o*d*u,P=g*d*c-h*_*c-g*a*f+o*_*f+h*a*p-o*d*p,A=t*y+n*S+i*w+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=y*b,e[1]=(_*f*r-d*p*r-_*i*m+n*p*m+d*i*u-n*f*u)*b,e[2]=(a*p*r-_*c*r+_*i*l-n*p*l-a*i*u+n*c*u)*b,e[3]=(d*c*r-a*f*r-d*i*l+n*f*l+a*i*m-n*c*m)*b,e[4]=S*b,e[5]=(h*p*r-g*f*r+g*i*m-t*p*m-h*i*u+t*f*u)*b,e[6]=(g*c*r-o*p*r-g*i*l+t*p*l+o*i*u-t*c*u)*b,e[7]=(o*f*r-h*c*r+h*i*l-t*f*l-o*i*m+t*c*m)*b,e[8]=w*b,e[9]=(g*d*r-h*_*r-g*n*m+t*_*m+h*n*u-t*d*u)*b,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*u+t*a*u)*b,e[11]=(h*a*r-o*d*r-h*n*l+t*d*l+o*n*m-t*a*m)*b,e[12]=P*b,e[13]=(h*_*i-g*d*i+g*n*f-t*_*f-h*n*p+t*d*p)*b,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*p-t*a*p)*b,e[15]=(o*d*i-h*a*i+h*n*c-t*d*c-o*n*f+t*a*f)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,f=r*l,m=r*h,g=r*d,_=o*h,p=o*d,u=a*d,y=c*l,S=c*h,w=c*d,P=n.x,A=n.y,b=n.z;return i[0]=(1-(_+u))*P,i[1]=(m+w)*P,i[2]=(g-S)*P,i[3]=0,i[4]=(m-w)*A,i[5]=(1-(f+u))*A,i[6]=(p+y)*A,i[7]=0,i[8]=(g+S)*b,i[9]=(p-y)*b,i[10]=(1-(f+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Vn.set(i[0],i[1],i[2]).length();const o=Vn.set(i[4],i[5],i[6]).length(),a=Vn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Vt.copy(this);const l=1/r,h=1/o,d=1/a;return Vt.elements[0]*=l,Vt.elements[1]*=l,Vt.elements[2]*=l,Vt.elements[4]*=h,Vt.elements[5]*=h,Vt.elements[6]*=h,Vt.elements[8]*=d,Vt.elements[9]*=d,Vt.elements[10]*=d,t.setFromRotationMatrix(Vt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=on){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let m,g;if(a===on)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===os)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=on){const c=this.elements,l=1/(t-e),h=1/(n-i),d=1/(o-r),f=(t+e)*l,m=(n+i)*h;let g,_;if(a===on)g=(o+r)*d,_=-2*d;else if(a===os)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vn=new L,Vt=new lt,ol=new L(0,0,0),cl=new L(1,1,1),fn=new L,Bi=new L,Ut=new L,da=new lt,fa=new Ai;class fs{constructor(e=0,t=0,n=0,i=fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return da.makeRotationFromQuaternion(e),this.setFromRotationMatrix(da,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fa.setFromEuler(this),this.setFromQuaternion(fa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fs.DEFAULT_ORDER="XYZ";class xo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ll=0;const pa=new L,Wn=new Ai,tn=new lt,Gi=new L,_i=new L,hl=new L,ul=new Ai,ma=new L(1,0,0),ga=new L(0,1,0),_a=new L(0,0,1),dl={type:"added"},fl={type:"removed"};class ut extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ll++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new L,t=new fs,n=new Ai,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new lt},normalMatrix:{value:new ke}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.multiply(Wn),this}rotateOnWorldAxis(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.premultiply(Wn),this}rotateX(e){return this.rotateOnAxis(ma,e)}rotateY(e){return this.rotateOnAxis(ga,e)}rotateZ(e){return this.rotateOnAxis(_a,e)}translateOnAxis(e,t){return pa.copy(e).applyQuaternion(this.quaternion),this.position.add(pa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ma,e)}translateY(e){return this.translateOnAxis(ga,e)}translateZ(e){return this.translateOnAxis(_a,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gi.copy(e):Gi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(_i,Gi,this.up):tn.lookAt(Gi,_i,this.up),this.quaternion.setFromRotationMatrix(tn),i&&(tn.extractRotation(i.matrixWorld),Wn.setFromRotationMatrix(tn),this.quaternion.premultiply(Wn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(dl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,e,hl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,ul,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ut.DEFAULT_UP=new L(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wt=new L,nn=new L,Os=new L,sn=new L,Xn=new L,qn=new L,va=new L,Fs=new L,Bs=new L,Gs=new L;let zi=!1;class Xt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wt.subVectors(e,t),i.cross(Wt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Wt.subVectors(i,t),nn.subVectors(n,t),Os.subVectors(e,t);const o=Wt.dot(Wt),a=Wt.dot(nn),c=Wt.dot(Os),l=nn.dot(nn),h=nn.dot(Os),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getUV(e,t,n,i,r,o,a,c){return zi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zi=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,sn.x),c.addScaledVector(o,sn.y),c.addScaledVector(a,sn.z),c)}static isFrontFacing(e,t,n,i){return Wt.subVectors(n,t),nn.subVectors(e,t),Wt.cross(nn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Wt.cross(nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return zi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zi=!0),Xt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Xt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Xn.subVectors(i,n),qn.subVectors(r,n),Fs.subVectors(e,n);const c=Xn.dot(Fs),l=qn.dot(Fs);if(c<=0&&l<=0)return t.copy(n);Bs.subVectors(e,i);const h=Xn.dot(Bs),d=qn.dot(Bs);if(h>=0&&d<=h)return t.copy(i);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Xn,o);Gs.subVectors(e,r);const m=Xn.dot(Gs),g=qn.dot(Gs);if(g>=0&&m<=g)return t.copy(r);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(qn,a);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return va.subVectors(r,i),a=(d-h)/(d-h+(m-g)),t.copy(i).addScaledVector(va,a);const u=1/(p+_+f);return o=_*u,a=f*u,t.copy(n).addScaledVector(Xn,o).addScaledVector(qn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pn={h:0,s:0,l:0},ki={h:0,s:0,l:0};function zs(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=dr(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=zs(o,r,e+1/3),this.g=zs(o,r,e),this.b=zs(o,r,e-1/3)}return je.toWorkingColorSpace(this,i),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const n=Mo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return je.fromWorkingColorSpace(St.copy(this),e),Math.round(Rt(St.r*255,0,255))*65536+Math.round(Rt(St.g*255,0,255))*256+Math.round(Rt(St.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(St.copy(this),t);const n=St.r,i=St.g,r=St.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=vt){je.fromWorkingColorSpace(St.copy(this),e);const t=St.r,n=St.g,i=St.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(pn),this.setHSL(pn.h+e,pn.s+t,pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pn),e.getHSL(ki);const n=Si(pn.h,ki.h,t),i=Si(pn.s,ki.s,t),r=Si(pn.l,ki.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new Ve;Ve.NAMES=Mo;let pl=0;class di extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pl++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=ii,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qs,this.blendDst=er,this.blendEquation=Ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fn,this.stencilZFail=Fn,this.stencilZPass=Fn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qs&&(n.blendSrc=this.blendSrc),this.blendDst!==er&&(n.blendDst=this.blendDst),this.blendEquation!==Ln&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $e extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new L,Hi=new We;class Ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ra,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hi.fromBufferAttribute(this,t),Hi.applyMatrix3(e),this.setXY(t,Hi.x,Hi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ra&&(e.usage=this.usage),e}}class So extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Eo extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ml=0;const Bt=new lt,ks=new ut,Yn=new L,Nt=new Sn,vi=new Sn,_t=new L;class Lt extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ml++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(po(e)?Eo:So)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return ks.lookAt(e),ks.updateMatrix(),this.applyMatrix4(ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yn).negate(),this.translate(Yn.x,Yn.y,Yn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Nt.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];vi.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Nt.min,vi.min),Nt.expandByPoint(_t),_t.addVectors(Nt.max,vi.max),Nt.expandByPoint(_t)):(Nt.expandByPoint(vi.min),Nt.expandByPoint(vi.max))}Nt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)_t.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(_t));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)_t.fromBufferAttribute(a,l),c&&(Yn.fromBufferAttribute(e,l),_t.add(Yn)),i=Math.max(i,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<a;T++)l[T]=new L,h[T]=new L;const d=new L,f=new L,m=new L,g=new We,_=new We,p=new We,u=new L,y=new L;function S(T,B,z){d.fromArray(i,T*3),f.fromArray(i,B*3),m.fromArray(i,z*3),g.fromArray(o,T*2),_.fromArray(o,B*2),p.fromArray(o,z*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);const j=1/(_.x*p.y-p.x*_.y);isFinite(j)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(j),y.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(j),l[T].add(u),l[B].add(u),l[z].add(u),h[T].add(y),h[B].add(y),h[z].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let T=0,B=w.length;T<B;++T){const z=w[T],j=z.start,C=z.count;for(let D=j,k=j+C;D<k;D+=3)S(n[D+0],n[D+1],n[D+2])}const P=new L,A=new L,b=new L,X=new L;function M(T){b.fromArray(r,T*3),X.copy(b);const B=l[T];P.copy(B),P.sub(b.multiplyScalar(b.dot(B))).normalize(),A.crossVectors(X,B);const j=A.dot(h[T])<0?-1:1;c[T*4]=P.x,c[T*4+1]=P.y,c[T*4+2]=P.z,c[T*4+3]=j}for(let T=0,B=w.length;T<B;++T){const z=w[T],j=z.start,C=z.count;for(let D=j,k=j+C;D<k;D+=3)M(n[D+0]),M(n[D+1]),M(n[D+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,d=new L;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,f=new l.constructor(c.length*h);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let u=0;u<h;u++)f[g++]=l[m++]}return new Ot(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const f=l[h],m=e(f,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xa=new lt,bn=new vo,Vi=new ds,Ma=new L,Kn=new L,jn=new L,Zn=new L,Hs=new L,Wi=new L,Xi=new We,qi=new We,Yi=new We,Sa=new L,Ea=new L,ya=new L,Ki=new L,ji=new L;class K extends ut{constructor(e=new Lt,t=new $e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Wi.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(Hs.fromBufferAttribute(d,e),o?Wi.addScaledVector(Hs,h):Wi.addScaledVector(Hs.sub(t),h))}t.add(Wi)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vi.copy(n.boundingSphere),Vi.applyMatrix4(r),bn.copy(e.ray).recast(e.near),!(Vi.containsPoint(bn.origin)===!1&&(bn.intersectSphere(Vi,Ma)===null||bn.origin.distanceToSquared(Ma)>(e.far-e.near)**2))&&(xa.copy(r).invert(),bn.copy(e.ray).applyMatrix4(xa),!(n.boundingBox!==null&&bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=o[p.materialIndex],y=Math.max(p.start,m.start),S=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let w=y,P=S;w<P;w+=3){const A=a.getX(w),b=a.getX(w+1),X=a.getX(w+2);i=Zi(this,u,e,n,l,h,d,A,b,X),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const y=a.getX(p),S=a.getX(p+1),w=a.getX(p+2);i=Zi(this,o,e,n,l,h,d,y,S,w),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=o[p.materialIndex],y=Math.max(p.start,m.start),S=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let w=y,P=S;w<P;w+=3){const A=w,b=w+1,X=w+2;i=Zi(this,u,e,n,l,h,d,A,b,X),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const y=p,S=p+1,w=p+2;i=Zi(this,o,e,n,l,h,d,y,S,w),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function gl(s,e,t,n,i,r,o,a){let c;if(e.side===Pt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Mn,a),c===null)return null;ji.copy(a),ji.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ji);return l<t.near||l>t.far?null:{distance:l,point:ji.clone(),object:s}}function Zi(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Kn),s.getVertexPosition(c,jn),s.getVertexPosition(l,Zn);const h=gl(s,e,t,n,Kn,jn,Zn,Ki);if(h){i&&(Xi.fromBufferAttribute(i,a),qi.fromBufferAttribute(i,c),Yi.fromBufferAttribute(i,l),h.uv=Xt.getInterpolation(Ki,Kn,jn,Zn,Xi,qi,Yi,new We)),r&&(Xi.fromBufferAttribute(r,a),qi.fromBufferAttribute(r,c),Yi.fromBufferAttribute(r,l),h.uv1=Xt.getInterpolation(Ki,Kn,jn,Zn,Xi,qi,Yi,new We),h.uv2=h.uv1),o&&(Sa.fromBufferAttribute(o,a),Ea.fromBufferAttribute(o,c),ya.fromBufferAttribute(o,l),h.normal=Xt.getInterpolation(Ki,Kn,jn,Zn,Sa,Ea,ya,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new L,materialIndex:0};Xt.getNormal(Kn,jn,Zn,d.normal),h.face=d}return h}class ce extends Lt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(d,2));function g(_,p,u,y,S,w,P,A,b,X,M){const T=w/b,B=P/X,z=w/2,j=P/2,C=A/2,D=b+1,k=X+1;let Y=0,H=0;const W=new L;for(let q=0;q<k;q++){const te=q*B-j;for(let ne=0;ne<D;ne++){const V=ne*T-z;W[_]=V*y,W[p]=te*S,W[u]=C,l.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[u]=A>0?1:-1,h.push(W.x,W.y,W.z),d.push(ne/b),d.push(1-q/X),Y+=1}}for(let q=0;q<X;q++)for(let te=0;te<b;te++){const ne=f+te+D*q,V=f+te+D*(q+1),Z=f+(te+1)+D*(q+1),le=f+(te+1)+D*q;c.push(ne,V,le),c.push(V,Z,le),H+=6}a.addGroup(m,H,M),m+=H,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ce(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function li(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bt(s){const e={};for(let t=0;t<s.length;t++){const n=li(s[t]);for(const i in n)e[i]=n[i]}return e}function _l(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function yo(s){return s.getRenderTarget()===null?s.outputColorSpace:je.workingColorSpace}const vl={clone:li,merge:bt};var xl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ml=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xl,this.fragmentShader=Ml,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=li(e.uniforms),this.uniformsGroups=_l(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class To extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=on}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ct extends To{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ci*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ci*2*Math.atan(Math.tan(Mi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $n=-90,Jn=1;class Sl extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ct($n,Jn,e,t);i.layers=this.layers,this.add(i);const r=new Ct($n,Jn,e,t);r.layers=this.layers,this.add(r);const o=new Ct($n,Jn,e,t);o.layers=this.layers,this.add(o);const a=new Ct($n,Jn,e,t);a.layers=this.layers,this.add(a);const c=new Ct($n,Jn,e,t);c.layers=this.layers,this.add(c);const l=new Ct($n,Jn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===on)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===os)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class wo extends It{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ri,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class El extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ei("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Un?vt:zt),this.texture=new wo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ce(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:_n});r.uniforms.tEquirect.value=t;const o=new K(i,r),a=t.minFilter;return t.minFilter===wi&&(t.minFilter=Gt),new Sl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Vs=new L,yl=new L,Tl=new ke;class Rn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Vs.subVectors(n,t).cross(yl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tl.getNormalMatrix(e),i=this.coplanarPoint(Vs).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const An=new ds,$i=new L;class fr{constructor(e=new Rn,t=new Rn,n=new Rn,i=new Rn,r=new Rn,o=new Rn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=on){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],f=i[7],m=i[8],g=i[9],_=i[10],p=i[11],u=i[12],y=i[13],S=i[14],w=i[15];if(n[0].setComponents(c-r,f-l,p-m,w-u).normalize(),n[1].setComponents(c+r,f+l,p+m,w+u).normalize(),n[2].setComponents(c+o,f+h,p+g,w+y).normalize(),n[3].setComponents(c-o,f-h,p-g,w-y).normalize(),n[4].setComponents(c-a,f-d,p-_,w-S).normalize(),t===on)n[5].setComponents(c+a,f+d,p+_,w+S).normalize();else if(t===os)n[5].setComponents(a,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),An.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),An.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(An)}intersectsSprite(e){return An.center.set(0,0,0),An.radius=.7071067811865476,An.applyMatrix4(e.matrixWorld),this.intersectsSphere(An)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if($i.x=i.normal.x>0?e.max.x:e.min.x,$i.y=i.normal.y>0?e.max.y:e.min.y,$i.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint($i)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bo(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function wl(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,f=l.usage,m=d.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,d,f),l.onUploadCallback();let _;if(d instanceof Float32Array)_=s.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=s.SHORT;else if(d instanceof Uint32Array)_=s.UNSIGNED_INT;else if(d instanceof Int32Array)_=s.INT;else if(d instanceof Int8Array)_=s.BYTE;else if(d instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,d){const f=h.array,m=h._updateRange,g=h.updateRanges;if(s.bindBuffer(d,l),m.count===-1&&g.length===0&&s.bufferSubData(d,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const u=g[_];t?s.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):s.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,i(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,h),d.version=l.version}}return{get:o,remove:a,update:c}}class ps extends Lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=e/a,f=t/c,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){const y=u*f-o;for(let S=0;S<l;S++){const w=S*d-r;g.push(w,-y,0),_.push(0,0,1),p.push(S/a),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let y=0;y<a;y++){const S=y+l*u,w=y+l*(u+1),P=y+1+l*(u+1),A=y+1+l*u;m.push(S,w,A),m.push(w,P,A)}this.setIndex(m),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.width,e.height,e.widthSegments,e.heightSegments)}}var bl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Al=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ll=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Pl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Il=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ul=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ol=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bl=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Hl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ql=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Kl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jl=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$l=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ql=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,th=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ih=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,sh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ah=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ch=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ph=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_h=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Th=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ah=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ch=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ph=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ih=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Dh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Oh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Hh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Vh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$h=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,su=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ru=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,au=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ou=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,cu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,du=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_u=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Su=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ru=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Iu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Du=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Uu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ou=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ku=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ku=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ju=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$u=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ju=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ed=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,td=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,id=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:bl,alphahash_pars_fragment:Al,alphamap_fragment:Rl,alphamap_pars_fragment:Cl,alphatest_fragment:Ll,alphatest_pars_fragment:Pl,aomap_fragment:Il,aomap_pars_fragment:Dl,batching_pars_vertex:Ul,batching_vertex:Nl,begin_vertex:Ol,beginnormal_vertex:Fl,bsdfs:Bl,iridescence_fragment:Gl,bumpmap_pars_fragment:zl,clipping_planes_fragment:kl,clipping_planes_pars_fragment:Hl,clipping_planes_pars_vertex:Vl,clipping_planes_vertex:Wl,color_fragment:Xl,color_pars_fragment:ql,color_pars_vertex:Yl,color_vertex:Kl,common:jl,cube_uv_reflection_fragment:Zl,defaultnormal_vertex:$l,displacementmap_pars_vertex:Jl,displacementmap_vertex:Ql,emissivemap_fragment:eh,emissivemap_pars_fragment:th,colorspace_fragment:nh,colorspace_pars_fragment:ih,envmap_fragment:sh,envmap_common_pars_fragment:rh,envmap_pars_fragment:ah,envmap_pars_vertex:oh,envmap_physical_pars_fragment:xh,envmap_vertex:ch,fog_vertex:lh,fog_pars_vertex:hh,fog_fragment:uh,fog_pars_fragment:dh,gradientmap_pars_fragment:fh,lightmap_fragment:ph,lightmap_pars_fragment:mh,lights_lambert_fragment:gh,lights_lambert_pars_fragment:_h,lights_pars_begin:vh,lights_toon_fragment:Mh,lights_toon_pars_fragment:Sh,lights_phong_fragment:Eh,lights_phong_pars_fragment:yh,lights_physical_fragment:Th,lights_physical_pars_fragment:wh,lights_fragment_begin:bh,lights_fragment_maps:Ah,lights_fragment_end:Rh,logdepthbuf_fragment:Ch,logdepthbuf_pars_fragment:Lh,logdepthbuf_pars_vertex:Ph,logdepthbuf_vertex:Ih,map_fragment:Dh,map_pars_fragment:Uh,map_particle_fragment:Nh,map_particle_pars_fragment:Oh,metalnessmap_fragment:Fh,metalnessmap_pars_fragment:Bh,morphcolor_vertex:Gh,morphnormal_vertex:zh,morphtarget_pars_vertex:kh,morphtarget_vertex:Hh,normal_fragment_begin:Vh,normal_fragment_maps:Wh,normal_pars_fragment:Xh,normal_pars_vertex:qh,normal_vertex:Yh,normalmap_pars_fragment:Kh,clearcoat_normal_fragment_begin:jh,clearcoat_normal_fragment_maps:Zh,clearcoat_pars_fragment:$h,iridescence_pars_fragment:Jh,opaque_fragment:Qh,packing:eu,premultiplied_alpha_fragment:tu,project_vertex:nu,dithering_fragment:iu,dithering_pars_fragment:su,roughnessmap_fragment:ru,roughnessmap_pars_fragment:au,shadowmap_pars_fragment:ou,shadowmap_pars_vertex:cu,shadowmap_vertex:lu,shadowmask_pars_fragment:hu,skinbase_vertex:uu,skinning_pars_vertex:du,skinning_vertex:fu,skinnormal_vertex:pu,specularmap_fragment:mu,specularmap_pars_fragment:gu,tonemapping_fragment:_u,tonemapping_pars_fragment:vu,transmission_fragment:xu,transmission_pars_fragment:Mu,uv_pars_fragment:Su,uv_pars_vertex:Eu,uv_vertex:yu,worldpos_vertex:Tu,background_vert:wu,background_frag:bu,backgroundCube_vert:Au,backgroundCube_frag:Ru,cube_vert:Cu,cube_frag:Lu,depth_vert:Pu,depth_frag:Iu,distanceRGBA_vert:Du,distanceRGBA_frag:Uu,equirect_vert:Nu,equirect_frag:Ou,linedashed_vert:Fu,linedashed_frag:Bu,meshbasic_vert:Gu,meshbasic_frag:zu,meshlambert_vert:ku,meshlambert_frag:Hu,meshmatcap_vert:Vu,meshmatcap_frag:Wu,meshnormal_vert:Xu,meshnormal_frag:qu,meshphong_vert:Yu,meshphong_frag:Ku,meshphysical_vert:ju,meshphysical_frag:Zu,meshtoon_vert:$u,meshtoon_frag:Ju,points_vert:Qu,points_frag:ed,shadow_vert:td,shadow_frag:nd,sprite_vert:id,sprite_frag:sd},se={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Zt={basic:{uniforms:bt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:bt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:bt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:bt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:bt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:bt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:bt([se.points,se.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:bt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:bt([se.common,se.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:bt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:bt([se.sprite,se.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:bt([se.common,se.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:bt([se.lights,se.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Zt.physical={uniforms:bt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Ji={r:0,b:0,g:0};function rd(s,e,t,n,i,r,o){const a=new Ve(0);let c=r===!0?0:1,l,h,d=null,f=0,m=null;function g(p,u){let y=!1,S=u.isScene===!0?u.background:null;S&&S.isTexture&&(S=(u.backgroundBlurriness>0?t:e).get(S)),S===null?_(a,c):S&&S.isColor&&(_(S,1),y=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),S&&(S.isCubeTexture||S.mapping===hs)?(h===void 0&&(h=new K(new ce(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:li(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=je.getTransfer(S.colorSpace)!==tt,(d!==S||f!==S.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,d=S,f=S.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new K(new ps(2,2),new On({name:"BackgroundMaterial",uniforms:li(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=je.getTransfer(S.colorSpace)!==tt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,d=S,f=S.version,m=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,u){p.getRGB(Ji,yo(s)),n.buffers.color.setClear(Ji.r,Ji.g,Ji.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),c=u,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(a,c)},render:g}}function ad(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null);let l=c,h=!1;function d(C,D,k,Y,H){let W=!1;if(o){const q=_(Y,k,D);l!==q&&(l=q,m(l.object)),W=u(C,Y,k,H),W&&y(C,Y,k,H)}else{const q=D.wireframe===!0;(l.geometry!==Y.id||l.program!==k.id||l.wireframe!==q)&&(l.geometry=Y.id,l.program=k.id,l.wireframe=q,W=!0)}H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,X(C,D,k,Y),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(C){return n.isWebGL2?s.bindVertexArray(C):r.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?s.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function _(C,D,k){const Y=k.wireframe===!0;let H=a[C.id];H===void 0&&(H={},a[C.id]=H);let W=H[D.id];W===void 0&&(W={},H[D.id]=W);let q=W[Y];return q===void 0&&(q=p(f()),W[Y]=q),q}function p(C){const D=[],k=[],Y=[];for(let H=0;H<i;H++)D[H]=0,k[H]=0,Y[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:Y,object:C,attributes:{},index:null}}function u(C,D,k,Y){const H=l.attributes,W=D.attributes;let q=0;const te=k.getAttributes();for(const ne in te)if(te[ne].location>=0){const Z=H[ne];let le=W[ne];if(le===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),Z===void 0||Z.attribute!==le||le&&Z.data!==le.data)return!0;q++}return l.attributesNum!==q||l.index!==Y}function y(C,D,k,Y){const H={},W=D.attributes;let q=0;const te=k.getAttributes();for(const ne in te)if(te[ne].location>=0){let Z=W[ne];Z===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(Z=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(Z=C.instanceColor));const le={};le.attribute=Z,Z&&Z.data&&(le.data=Z.data),H[ne]=le,q++}l.attributes=H,l.attributesNum=q,l.index=Y}function S(){const C=l.newAttributes;for(let D=0,k=C.length;D<k;D++)C[D]=0}function w(C){P(C,0)}function P(C,D){const k=l.newAttributes,Y=l.enabledAttributes,H=l.attributeDivisors;k[C]=1,Y[C]===0&&(s.enableVertexAttribArray(C),Y[C]=1),H[C]!==D&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,D),H[C]=D)}function A(){const C=l.newAttributes,D=l.enabledAttributes;for(let k=0,Y=D.length;k<Y;k++)D[k]!==C[k]&&(s.disableVertexAttribArray(k),D[k]=0)}function b(C,D,k,Y,H,W,q){q===!0?s.vertexAttribIPointer(C,D,k,H,W):s.vertexAttribPointer(C,D,k,Y,H,W)}function X(C,D,k,Y){if(n.isWebGL2===!1&&(C.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const H=Y.attributes,W=k.getAttributes(),q=D.defaultAttributeValues;for(const te in W){const ne=W[te];if(ne.location>=0){let V=H[te];if(V===void 0&&(te==="instanceMatrix"&&C.instanceMatrix&&(V=C.instanceMatrix),te==="instanceColor"&&C.instanceColor&&(V=C.instanceColor)),V!==void 0){const Z=V.normalized,le=V.itemSize,_e=t.get(V);if(_e===void 0)continue;const ge=_e.buffer,Pe=_e.type,De=_e.bytesPerElement,we=n.isWebGL2===!0&&(Pe===s.INT||Pe===s.UNSIGNED_INT||V.gpuType===io);if(V.isInterleavedBufferAttribute){const Xe=V.data,U=Xe.stride,Et=V.offset;if(Xe.isInstancedInterleavedBuffer){for(let Me=0;Me<ne.locationSize;Me++)P(ne.location+Me,Xe.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let Me=0;Me<ne.locationSize;Me++)w(ne.location+Me);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let Me=0;Me<ne.locationSize;Me++)b(ne.location+Me,le/ne.locationSize,Pe,Z,U*De,(Et+le/ne.locationSize*Me)*De,we)}else{if(V.isInstancedBufferAttribute){for(let Xe=0;Xe<ne.locationSize;Xe++)P(ne.location+Xe,V.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Xe=0;Xe<ne.locationSize;Xe++)w(ne.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let Xe=0;Xe<ne.locationSize;Xe++)b(ne.location+Xe,le/ne.locationSize,Pe,Z,le*De,le/ne.locationSize*Xe*De,we)}}else if(q!==void 0){const Z=q[te];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(ne.location,Z);break;case 3:s.vertexAttrib3fv(ne.location,Z);break;case 4:s.vertexAttrib4fv(ne.location,Z);break;default:s.vertexAttrib1fv(ne.location,Z)}}}}A()}function M(){z();for(const C in a){const D=a[C];for(const k in D){const Y=D[k];for(const H in Y)g(Y[H].object),delete Y[H];delete D[k]}delete a[C]}}function T(C){if(a[C.id]===void 0)return;const D=a[C.id];for(const k in D){const Y=D[k];for(const H in Y)g(Y[H].object),delete Y[H];delete D[k]}delete a[C.id]}function B(C){for(const D in a){const k=a[D];if(k[C.id]===void 0)continue;const Y=k[C.id];for(const H in Y)g(Y[H].object),delete Y[H];delete k[C.id]}}function z(){j(),h=!0,l!==c&&(l=c,m(l.object))}function j(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:z,resetDefaultState:j,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:B,initAttributes:S,enableAttribute:w,disableUnusedAttributes:A}}function od(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,d){s.drawArrays(r,h,d),t.update(d,r,1)}function c(h,d,f){if(f===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,d,f),t.update(d,r,f)}function l(h,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function cd(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),u=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,w=o||e.has("OES_texture_float"),P=S&&w,A=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:y,vertexTextures:S,floatFragmentTextures:w,floatVertexTextures:P,maxSamples:A}}function ld(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Rn,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||i;return i=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=s.get(d);if(!i||g===null||g.length===0||r&&!p)r?h(null):l();else{const y=r?0:n,S=y*4;let w=u.clippingState||null;c.value=w,w=h(g,f,S,m);for(let P=0;P!==S;++P)w[P]=t[P];u.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const u=m+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<u)&&(p=new Float32Array(u));for(let S=0,w=m;S!==_;++S,w+=4)o.copy(d[S]).applyMatrix4(y,a),o.normal.toArray(p,w),p[w+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function hd(s){let e=new WeakMap;function t(o,a){return a===tr?o.mapping=ri:a===nr&&(o.mapping=ai),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===tr||a===nr)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new El(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ao extends To{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ti=4,Ta=[.125,.215,.35,.446,.526,.582],Pn=20,Ws=new Ao,wa=new Ve;let Xs=null,qs=0,Ys=0;const Cn=(1+Math.sqrt(5))/2,Qn=1/Cn,ba=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Cn,Qn),new L(0,Cn,-Qn),new L(Qn,0,Cn),new L(-Qn,0,Cn),new L(Cn,Qn,0),new L(-Cn,Qn,0)];class Aa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Xs=this._renderer.getRenderTarget(),qs=this._renderer.getActiveCubeFace(),Ys=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=La(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ca(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xs,qs,Ys),e.scissorTest=!1,Qi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ri||e.mapping===ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xs=this._renderer.getRenderTarget(),qs=this._renderer.getActiveCubeFace(),Ys=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:bi,format:Kt,colorSpace:cn,depthBuffer:!1},i=Ra(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ra(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ud(r)),this._blurMaterial=dd(r,e,t)}return i}_compileMaterial(e){const t=new K(this._lodPlanes[0],e);this._renderer.compile(t,Ws)}_sceneToCubeUV(e,t,n,i){const a=new Ct(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(wa),h.toneMapping=vn,h.autoClear=!1;const m=new $e({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),g=new K(new ce,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(wa),_=!0);for(let u=0;u<6;u++){const y=u%3;y===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):y===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));const S=this._cubeSize;Qi(i,y*S,u>2?S:0,S,S),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ri||e.mapping===ai;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=La()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ca());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new K(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Qi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ws)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ba[(i-1)%ba.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new K(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Pn-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Pn;p>Pn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pn}`);const u=[];let y=0;for(let b=0;b<Pn;++b){const X=b/_,M=Math.exp(-X*X/2);u.push(M),b===0?y+=M:b<p&&(y+=2*M)}for(let b=0;b<u.length;b++)u[b]=u[b]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const w=this._sizeLods[i],P=3*w*(i>S-ti?i-S+ti:0),A=4*(this._cubeSize-w);Qi(t,P,A,3*w,2*w),c.setRenderTarget(t),c.render(d,Ws)}}function ud(s){const e=[],t=[],n=[];let i=s;const r=s-ti+1+Ta.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-ti?c=Ta[o-s+ti-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,y=new Float32Array(_*g*m),S=new Float32Array(p*g*m),w=new Float32Array(u*g*m);for(let A=0;A<m;A++){const b=A%3*2/3-1,X=A>2?0:-1,M=[b,X,0,b+2/3,X,0,b+2/3,X+1,0,b,X,0,b+2/3,X+1,0,b,X+1,0];y.set(M,_*g*A),S.set(f,p*g*A);const T=[A,A,A,A,A,A];w.set(T,u*g*A)}const P=new Lt;P.setAttribute("position",new Ot(y,_)),P.setAttribute("uv",new Ot(S,p)),P.setAttribute("faceIndex",new Ot(w,u)),e.push(P),i>ti&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ra(s,e,t){const n=new Nn(s,e,t);return n.texture.mapping=hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function dd(s,e,t){const n=new Float32Array(Pn),i=new L(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Ca(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function La(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function pr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fd(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===tr||c===nr,h=c===ri||c===ai;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Aa(s)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Aa(s));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function pd(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function md(s,e,t,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)e.update(_[p],s.ARRAY_BUFFER)}}function l(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let S=0,w=y.length;S<w;S+=3){const P=y[S+0],A=y[S+1],b=y[S+2];f.push(P,A,A,b,b,P)}}else if(g!==void 0){const y=g.array;_=g.version;for(let S=0,w=y.length/3-1;S<w;S+=3){const P=S+0,A=S+1,b=S+2;f.push(P,A,A,b,b,P)}}else return;const p=new(po(f)?Eo:So)(f,1);p.version=_;const u=r.get(d);u&&e.remove(u),r.set(d,p)}function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function gd(s,e,t,n){const i=n.isWebGL2;let r;function o(m){r=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,g){s.drawElements(r,g,a,m*c),t.update(g,r,1)}function d(m,g,_){if(_===0)return;let p,u;if(i)p=s,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,g,a,m*c,_),t.update(g,r,_)}function f(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/c,g[u]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let u=0;for(let y=0;y<_;y++)u+=g[y];t.update(u,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function _d(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function vd(s,e){return s[0]-e[0]}function xd(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Md(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new nt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(h);if(p===void 0||p.count!==_){let D=function(){j.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var m=D;p!==void 0&&p.texture.dispose();const S=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],X=h.morphAttributes.color||[];let M=0;S===!0&&(M=1),w===!0&&(M=2),P===!0&&(M=3);let T=h.attributes.position.count*M,B=1;T>e.maxTextureSize&&(B=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const z=new Float32Array(T*B*4*_),j=new _o(z,T,B,_);j.type=gn,j.needsUpdate=!0;const C=M*4;for(let k=0;k<_;k++){const Y=A[k],H=b[k],W=X[k],q=T*B*4*k;for(let te=0;te<Y.count;te++){const ne=te*C;S===!0&&(o.fromBufferAttribute(Y,te),z[q+ne+0]=o.x,z[q+ne+1]=o.y,z[q+ne+2]=o.z,z[q+ne+3]=0),w===!0&&(o.fromBufferAttribute(H,te),z[q+ne+4]=o.x,z[q+ne+5]=o.y,z[q+ne+6]=o.z,z[q+ne+7]=0),P===!0&&(o.fromBufferAttribute(W,te),z[q+ne+8]=o.x,z[q+ne+9]=o.y,z[q+ne+10]=o.z,z[q+ne+11]=W.itemSize===4?o.w:1)}}p={count:_,texture:j,size:new We(T,B)},r.set(h,p),h.addEventListener("dispose",D)}let u=0;for(let S=0;S<f.length;S++)u+=f[S];const y=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(s,"morphTargetBaseInfluence",y),d.getUniforms().setValue(s,"morphTargetInfluences",f),d.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let w=0;w<g;w++)_[w]=[w,0];n[h.id]=_}for(let w=0;w<g;w++){const P=_[w];P[0]=w,P[1]=f[w]}_.sort(xd);for(let w=0;w<8;w++)w<g&&_[w][1]?(a[w][0]=_[w][0],a[w][1]=_[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(vd);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let y=0;for(let w=0;w<8;w++){const P=a[w],A=P[0],b=P[1];A!==Number.MAX_SAFE_INTEGER&&b?(p&&h.getAttribute("morphTarget"+w)!==p[A]&&h.setAttribute("morphTarget"+w,p[A]),u&&h.getAttribute("morphNormal"+w)!==u[A]&&h.setAttribute("morphNormal"+w,u[A]),i[w]=b,y+=b):(p&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),u&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),i[w]=0)}const S=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(s,"morphTargetBaseInfluence",S),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Sd(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Ro extends It{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:Dn,h!==Dn&&h!==oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Dn&&(n=mn),n===void 0&&h===oi&&(n=In),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:At,this.minFilter=c!==void 0?c:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Co=new It,Lo=new Ro(1,1);Lo.compareFunction=fo;const Po=new _o,Io=new rl,Do=new wo,Pa=[],Ia=[],Da=new Float32Array(16),Ua=new Float32Array(9),Na=new Float32Array(4);function fi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Pa[i];if(r===void 0&&(r=new Float32Array(i),Pa[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ms(s,e){let t=Ia[e];t===void 0&&(t=new Int32Array(e),Ia[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ed(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function yd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2fv(this.addr,e),pt(t,e)}}function Td(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;s.uniform3fv(this.addr,e),pt(t,e)}}function wd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4fv(this.addr,e),pt(t,e)}}function bd(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Na.set(n),s.uniformMatrix2fv(this.addr,!1,Na),pt(t,n)}}function Ad(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Ua.set(n),s.uniformMatrix3fv(this.addr,!1,Ua),pt(t,n)}}function Rd(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Da.set(n),s.uniformMatrix4fv(this.addr,!1,Da),pt(t,n)}}function Cd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ld(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2iv(this.addr,e),pt(t,e)}}function Pd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;s.uniform3iv(this.addr,e),pt(t,e)}}function Id(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4iv(this.addr,e),pt(t,e)}}function Dd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ud(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2uiv(this.addr,e),pt(t,e)}}function Nd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;s.uniform3uiv(this.addr,e),pt(t,e)}}function Od(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4uiv(this.addr,e),pt(t,e)}}function Fd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Lo:Co;t.setTexture2D(e||r,i)}function Bd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Io,i)}function Gd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Do,i)}function zd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Po,i)}function kd(s){switch(s){case 5126:return Ed;case 35664:return yd;case 35665:return Td;case 35666:return wd;case 35674:return bd;case 35675:return Ad;case 35676:return Rd;case 5124:case 35670:return Cd;case 35667:case 35671:return Ld;case 35668:case 35672:return Pd;case 35669:case 35673:return Id;case 5125:return Dd;case 36294:return Ud;case 36295:return Nd;case 36296:return Od;case 35678:case 36198:case 36298:case 36306:case 35682:return Fd;case 35679:case 36299:case 36307:return Bd;case 35680:case 36300:case 36308:case 36293:return Gd;case 36289:case 36303:case 36311:case 36292:return zd}}function Hd(s,e){s.uniform1fv(this.addr,e)}function Vd(s,e){const t=fi(e,this.size,2);s.uniform2fv(this.addr,t)}function Wd(s,e){const t=fi(e,this.size,3);s.uniform3fv(this.addr,t)}function Xd(s,e){const t=fi(e,this.size,4);s.uniform4fv(this.addr,t)}function qd(s,e){const t=fi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Yd(s,e){const t=fi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Kd(s,e){const t=fi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function jd(s,e){s.uniform1iv(this.addr,e)}function Zd(s,e){s.uniform2iv(this.addr,e)}function $d(s,e){s.uniform3iv(this.addr,e)}function Jd(s,e){s.uniform4iv(this.addr,e)}function Qd(s,e){s.uniform1uiv(this.addr,e)}function ef(s,e){s.uniform2uiv(this.addr,e)}function tf(s,e){s.uniform3uiv(this.addr,e)}function nf(s,e){s.uniform4uiv(this.addr,e)}function sf(s,e,t){const n=this.cache,i=e.length,r=ms(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Co,r[o])}function rf(s,e,t){const n=this.cache,i=e.length,r=ms(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Io,r[o])}function af(s,e,t){const n=this.cache,i=e.length,r=ms(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Do,r[o])}function of(s,e,t){const n=this.cache,i=e.length,r=ms(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Po,r[o])}function cf(s){switch(s){case 5126:return Hd;case 35664:return Vd;case 35665:return Wd;case 35666:return Xd;case 35674:return qd;case 35675:return Yd;case 35676:return Kd;case 5124:case 35670:return jd;case 35667:case 35671:return Zd;case 35668:case 35672:return $d;case 35669:case 35673:return Jd;case 5125:return Qd;case 36294:return ef;case 36295:return tf;case 36296:return nf;case 35678:case 36198:case 36298:case 36306:case 35682:return sf;case 35679:case 36299:case 36307:return rf;case 35680:case 36300:case 36308:case 36293:return af;case 36289:case 36303:case 36311:case 36292:return of}}class lf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kd(t.type)}}class hf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cf(t.type)}}class uf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ks=/(\w+)(\])?(\[|\.)?/g;function Oa(s,e){s.seq.push(e),s.map[e.id]=e}function df(s,e,t){const n=s.name,i=n.length;for(Ks.lastIndex=0;;){const r=Ks.exec(n),o=Ks.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Oa(t,l===void 0?new lf(a,s,e):new hf(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new uf(a),Oa(t,d)),t=d}}}class ns{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);df(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Fa(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const ff=37297;let pf=0;function mf(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function gf(s){const e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(s);let n;switch(e===t?n="":e===as&&t===rs?n="LinearDisplayP3ToLinearSRGB":e===rs&&t===as&&(n="LinearSRGBToLinearDisplayP3"),s){case cn:case us:return[n,"LinearTransferOETF"];case vt:case ur:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ba(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+mf(s.getShaderSource(e),o)}else return i}function _f(s,e){const t=gf(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function vf(s,e){let t;switch(e){case gc:t="Linear";break;case _c:t="Reinhard";break;case vc:t="OptimizedCineon";break;case to:t="ACESFilmic";break;case Mc:t="AgX";break;case xc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ni).join(`
`)}function Mf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ni).join(`
`)}function Sf(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ef(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ni(s){return s!==""}function Ga(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function za(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ar(s){return s.replace(yf,wf)}const Tf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function wf(s,e){let t=Ne[e];if(t===void 0){const n=Tf.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ar(t)}const bf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ka(s){return s.replace(bf,Af)}function Af(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ha(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rf(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ja?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Qa?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===rn&&(e="SHADOWMAP_TYPE_VSM"),e}function Cf(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ri:case ai:e="ENVMAP_TYPE_CUBE";break;case hs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lf(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ai:e="ENVMAP_MODE_REFRACTION";break}return e}function Pf(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case eo:e="ENVMAP_BLENDING_MULTIPLY";break;case pc:e="ENVMAP_BLENDING_MIX";break;case mc:e="ENVMAP_BLENDING_ADD";break}return e}function If(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Df(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Rf(t),l=Cf(t),h=Lf(t),d=Pf(t),f=If(t),m=t.isWebGL2?"":xf(t),g=Mf(t),_=Sf(r),p=i.createProgram();let u,y,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ni).join(`
`),u.length>0&&(u+=`
`),y=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ni).join(`
`),y.length>0&&(y+=`
`)):(u=[Ha(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ni).join(`
`),y=[m,Ha(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==vn?vf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,_f("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ni).join(`
`)),o=ar(o),o=Ga(o,t),o=za(o,t),a=ar(a),a=Ga(a,t),a=za(a,t),o=ka(o),a=ka(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===aa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===aa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const w=S+u+o,P=S+y+a,A=Fa(i,i.VERTEX_SHADER,w),b=Fa(i,i.FRAGMENT_SHADER,P);i.attachShader(p,A),i.attachShader(p,b),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function X(z){if(s.debug.checkShaderErrors){const j=i.getProgramInfoLog(p).trim(),C=i.getShaderInfoLog(A).trim(),D=i.getShaderInfoLog(b).trim();let k=!0,Y=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,A,b);else{const H=Ba(i,A,"vertex"),W=Ba(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+H+`
`+W)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(C===""||D==="")&&(Y=!1);Y&&(z.diagnostics={runnable:k,programLog:j,vertexShader:{log:C,prefix:u},fragmentShader:{log:D,prefix:y}})}i.deleteShader(A),i.deleteShader(b),M=new ns(i,p),T=Ef(i,p)}let M;this.getUniforms=function(){return M===void 0&&X(this),M};let T;this.getAttributes=function(){return T===void 0&&X(this),T};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=i.getProgramParameter(p,ff)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pf++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=b,this}let Uf=0;class Nf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Of(e),t.set(e,n)),n}}class Of{constructor(e){this.id=Uf++,this.code=e,this.usedTimes=0}}function Ff(s,e,t,n,i,r,o){const a=new xo,c=new Nf,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,T,B,z,j){const C=z.fog,D=j.geometry,k=M.isMeshStandardMaterial?z.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||k),H=Y&&Y.mapping===hs?Y.image.height:null,W=g[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const q=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,te=q!==void 0?q.length:0;let ne=0;D.morphAttributes.position!==void 0&&(ne=1),D.morphAttributes.normal!==void 0&&(ne=2),D.morphAttributes.color!==void 0&&(ne=3);let V,Z,le,_e;if(W){const yt=Zt[W];V=yt.vertexShader,Z=yt.fragmentShader}else V=M.vertexShader,Z=M.fragmentShader,c.update(M),le=c.getVertexShaderID(M),_e=c.getFragmentShaderID(M);const ge=s.getRenderTarget(),Pe=j.isInstancedMesh===!0,De=j.isBatchedMesh===!0,we=!!M.map,Xe=!!M.matcap,U=!!Y,Et=!!M.aoMap,Me=!!M.lightMap,Ce=!!M.bumpMap,fe=!!M.normalMap,it=!!M.displacementMap,Oe=!!M.emissiveMap,E=!!M.metalnessMap,v=!!M.roughnessMap,O=M.anisotropy>0,Q=M.clearcoat>0,J=M.iridescence>0,ee=M.sheen>0,pe=M.transmission>0,oe=O&&!!M.anisotropyMap,ue=Q&&!!M.clearcoatMap,Te=Q&&!!M.clearcoatNormalMap,Fe=Q&&!!M.clearcoatRoughnessMap,$=J&&!!M.iridescenceMap,Ke=J&&!!M.iridescenceThicknessMap,He=ee&&!!M.sheenColorMap,Re=ee&&!!M.sheenRoughnessMap,xe=!!M.specularMap,de=!!M.specularColorMap,Ue=!!M.specularIntensityMap,Ye=pe&&!!M.transmissionMap,rt=pe&&!!M.thicknessMap,Ge=!!M.gradientMap,ie=!!M.alphaMap,R=M.alphaTest>0,re=!!M.alphaHash,ae=!!M.extensions,be=!!D.attributes.uv1,Se=!!D.attributes.uv2,Je=!!D.attributes.uv3;let Qe=vn;return M.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Qe=s.toneMapping),{isWebGL2:h,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:V,fragmentShader:Z,defines:M.defines,customVertexShaderID:le,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:De,instancing:Pe,instancingColor:Pe&&j.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:cn,map:we,matcap:Xe,envMap:U,envMapMode:U&&Y.mapping,envMapCubeUVHeight:H,aoMap:Et,lightMap:Me,bumpMap:Ce,normalMap:fe,displacementMap:f&&it,emissiveMap:Oe,normalMapObjectSpace:fe&&M.normalMapType===Ic,normalMapTangentSpace:fe&&M.normalMapType===uo,metalnessMap:E,roughnessMap:v,anisotropy:O,anisotropyMap:oe,clearcoat:Q,clearcoatMap:ue,clearcoatNormalMap:Te,clearcoatRoughnessMap:Fe,iridescence:J,iridescenceMap:$,iridescenceThicknessMap:Ke,sheen:ee,sheenColorMap:He,sheenRoughnessMap:Re,specularMap:xe,specularColorMap:de,specularIntensityMap:Ue,transmission:pe,transmissionMap:Ye,thicknessMap:rt,gradientMap:Ge,opaque:M.transparent===!1&&M.blending===ii,alphaMap:ie,alphaTest:R,alphaHash:re,combine:M.combine,mapUv:we&&_(M.map.channel),aoMapUv:Et&&_(M.aoMap.channel),lightMapUv:Me&&_(M.lightMap.channel),bumpMapUv:Ce&&_(M.bumpMap.channel),normalMapUv:fe&&_(M.normalMap.channel),displacementMapUv:it&&_(M.displacementMap.channel),emissiveMapUv:Oe&&_(M.emissiveMap.channel),metalnessMapUv:E&&_(M.metalnessMap.channel),roughnessMapUv:v&&_(M.roughnessMap.channel),anisotropyMapUv:oe&&_(M.anisotropyMap.channel),clearcoatMapUv:ue&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Te&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:He&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(M.sheenRoughnessMap.channel),specularMapUv:xe&&_(M.specularMap.channel),specularColorMapUv:de&&_(M.specularColorMap.channel),specularIntensityMapUv:Ue&&_(M.specularIntensityMap.channel),transmissionMapUv:Ye&&_(M.transmissionMap.channel),thicknessMapUv:rt&&_(M.thicknessMap.channel),alphaMapUv:ie&&_(M.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(fe||O),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:Se,vertexUv3s:Je,pointsUvs:j.isPoints===!0&&!!D.attributes.uv&&(we||ie),fog:!!C,useFog:M.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ne,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Qe,useLegacyLights:s._useLegacyLights,decodeVideoTexture:we&&M.map.isVideoTexture===!0&&je.getTransfer(M.map.colorSpace)===tt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===qt,flipSided:M.side===Pt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ae&&M.extensions.derivatives===!0,extensionFragDepth:ae&&M.extensions.fragDepth===!0,extensionDrawBuffers:ae&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)T.push(B),T.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(y(T,M),S(T,M),T.push(s.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function y(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function S(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function w(M){const T=g[M.type];let B;if(T){const z=Zt[T];B=vl.clone(z.uniforms)}else B=M.uniforms;return B}function P(M,T){let B;for(let z=0,j=l.length;z<j;z++){const C=l[z];if(C.cacheKey===T){B=C,++B.usedTimes;break}}return B===void 0&&(B=new Df(s,T,M,r),l.push(B)),B}function A(M){if(--M.usedTimes===0){const T=l.indexOf(M);l[T]=l[l.length-1],l.pop(),M.destroy()}}function b(M){c.remove(M)}function X(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:w,acquireProgram:P,releaseProgram:A,releaseShaderCache:b,programs:l,dispose:X}}function Bf(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Gf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Va(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wa(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,m,g,_,p){let u=s[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},s[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),e++,u}function a(d,f,m,g,_,p){const u=o(d,f,m,g,_,p);m.transmission>0?n.push(u):m.transparent===!0?i.push(u):t.push(u)}function c(d,f,m,g,_,p){const u=o(d,f,m,g,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?i.unshift(u):t.unshift(u)}function l(d,f){t.length>1&&t.sort(d||Gf),n.length>1&&n.sort(f||Va),i.length>1&&i.sort(f||Va)}function h(){for(let d=e,f=s.length;d<f;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function zf(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Wa,s.set(n,[o])):i>=r.length?(o=new Wa,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function kf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ve};break;case"SpotLight":t={position:new L,direction:new L,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function Hf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Vf=0;function Wf(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Xf(s,e){const t=new kf,n=Hf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);const r=new L,o=new lt,a=new lt;function c(h,d){let f=0,m=0,g=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let _=0,p=0,u=0,y=0,S=0,w=0,P=0,A=0,b=0,X=0,M=0;h.sort(Wf);const T=d===!0?Math.PI:1;for(let z=0,j=h.length;z<j;z++){const C=h[z],D=C.color,k=C.intensity,Y=C.distance,H=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=D.r*k*T,m+=D.g*k*T,g+=D.b*k*T;else if(C.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(C.sh.coefficients[W],k);M++}else if(C.isDirectionalLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity*T),C.castShadow){const q=C.shadow,te=n.get(C);te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,i.directionalShadow[_]=te,i.directionalShadowMap[_]=H,i.directionalShadowMatrix[_]=C.shadow.matrix,w++}i.directional[_]=W,_++}else if(C.isSpotLight){const W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(D).multiplyScalar(k*T),W.distance=Y,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,i.spot[u]=W;const q=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,q.updateMatrices(C),C.castShadow&&X++),i.spotLightMatrix[u]=q.matrix,C.castShadow){const te=n.get(C);te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,i.spotShadow[u]=te,i.spotShadowMap[u]=H,A++}u++}else if(C.isRectAreaLight){const W=t.get(C);W.color.copy(D).multiplyScalar(k),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),i.rectArea[y]=W,y++}else if(C.isPointLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity*T),W.distance=C.distance,W.decay=C.decay,C.castShadow){const q=C.shadow,te=n.get(C);te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,te.shadowCameraNear=q.camera.near,te.shadowCameraFar=q.camera.far,i.pointShadow[p]=te,i.pointShadowMap[p]=H,i.pointShadowMatrix[p]=C.shadow.matrix,P++}i.point[p]=W,p++}else if(C.isHemisphereLight){const W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(k*T),W.groundColor.copy(C.groundColor).multiplyScalar(k*T),i.hemi[S]=W,S++}}y>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const B=i.hash;(B.directionalLength!==_||B.pointLength!==p||B.spotLength!==u||B.rectAreaLength!==y||B.hemiLength!==S||B.numDirectionalShadows!==w||B.numPointShadows!==P||B.numSpotShadows!==A||B.numSpotMaps!==b||B.numLightProbes!==M)&&(i.directional.length=_,i.spot.length=u,i.rectArea.length=y,i.point.length=p,i.hemi.length=S,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=A+b-X,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=X,i.numLightProbes=M,B.directionalLength=_,B.pointLength=p,B.spotLength=u,B.rectAreaLength=y,B.hemiLength=S,B.numDirectionalShadows=w,B.numPointShadows=P,B.numSpotShadows=A,B.numSpotMaps=b,B.numLightProbes=M,i.version=Vf++)}function l(h,d){let f=0,m=0,g=0,_=0,p=0;const u=d.matrixWorldInverse;for(let y=0,S=h.length;y<S;y++){const w=h[y];if(w.isDirectionalLight){const P=i.directional[f];P.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(u),f++}else if(w.isSpotLight){const P=i.spot[g];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(u),P.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(u),g++}else if(w.isRectAreaLight){const P=i.rectArea[_];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(u),a.identity(),o.copy(w.matrixWorld),o.premultiply(u),a.extractRotation(o),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){const P=i.point[m];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(u),m++}else if(w.isHemisphereLight){const P=i.hemi[p];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(u),p++}}}return{setup:c,setupView:l,state:i}}function Xa(s,e){const t=new Xf(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function qf(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new Xa(s,e),t.set(r,[c])):o>=a.length?(c=new Xa(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Yf extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kf extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $f(s,e,t){let n=new fr;const i=new We,r=new We,o=new nt,a=new Yf({depthPacking:Pc}),c=new Kf,l={},h=t.maxTextureSize,d={[Mn]:Pt,[Pt]:Mn,[qt]:qt},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:jf,fragmentShader:Zf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new K(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ja;let u=this.type;this.render=function(A,b,X){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const M=s.getRenderTarget(),T=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),z=s.state;z.setBlending(_n),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const j=u!==rn&&this.type===rn,C=u===rn&&this.type!==rn;for(let D=0,k=A.length;D<k;D++){const Y=A[D],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const W=H.getFrameExtents();if(i.multiply(W),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,H.mapSize.y=r.y)),H.map===null||j===!0||C===!0){const te=this.type!==rn?{minFilter:At,magFilter:At}:{};H.map!==null&&H.map.dispose(),H.map=new Nn(i.x,i.y,te),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const q=H.getViewportCount();for(let te=0;te<q;te++){const ne=H.getViewport(te);o.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),z.viewport(o),H.updateMatrices(Y,te),n=H.getFrustum(),w(b,X,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===rn&&y(H,X),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,s.setRenderTarget(M,T,B)};function y(A,b){const X=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Nn(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(b,null,X,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(b,null,X,m,_,null)}function S(A,b,X,M){let T=null;const B=X.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(B!==void 0)T=B;else if(T=X.isPointLight===!0?c:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const z=T.uuid,j=b.uuid;let C=l[z];C===void 0&&(C={},l[z]=C);let D=C[j];D===void 0&&(D=T.clone(),C[j]=D,b.addEventListener("dispose",P)),T=D}if(T.visible=b.visible,T.wireframe=b.wireframe,M===rn?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:d[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,X.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const z=s.properties.get(T);z.light=X}return T}function w(A,b,X,M,T){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===rn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld);const j=e.update(A),C=A.material;if(Array.isArray(C)){const D=j.groups;for(let k=0,Y=D.length;k<Y;k++){const H=D[k],W=C[H.materialIndex];if(W&&W.visible){const q=S(A,W,M,T);A.onBeforeShadow(s,A,b,X,j,q,H),s.renderBufferDirect(X,null,j,q,A,H),A.onAfterShadow(s,A,b,X,j,q,H)}}}else if(C.visible){const D=S(A,C,M,T);A.onBeforeShadow(s,A,b,X,j,D,null),s.renderBufferDirect(X,null,j,D,A,null),A.onAfterShadow(s,A,b,X,j,D,null)}}const z=A.children;for(let j=0,C=z.length;j<C;j++)w(z[j],b,X,M,T)}function P(A){A.target.removeEventListener("dispose",P);for(const X in l){const M=l[X],T=A.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function Jf(s,e,t){const n=t.isWebGL2;function i(){let R=!1;const re=new nt;let ae=null;const be=new nt(0,0,0,0);return{setMask:function(Se){ae!==Se&&!R&&(s.colorMask(Se,Se,Se,Se),ae=Se)},setLocked:function(Se){R=Se},setClear:function(Se,Je,Qe,mt,yt){yt===!0&&(Se*=mt,Je*=mt,Qe*=mt),re.set(Se,Je,Qe,mt),be.equals(re)===!1&&(s.clearColor(Se,Je,Qe,mt),be.copy(re))},reset:function(){R=!1,ae=null,be.set(-1,0,0,0)}}}function r(){let R=!1,re=null,ae=null,be=null;return{setTest:function(Se){Se?De(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(Se){re!==Se&&!R&&(s.depthMask(Se),re=Se)},setFunc:function(Se){if(ae!==Se){switch(Se){case oc:s.depthFunc(s.NEVER);break;case cc:s.depthFunc(s.ALWAYS);break;case lc:s.depthFunc(s.LESS);break;case is:s.depthFunc(s.LEQUAL);break;case hc:s.depthFunc(s.EQUAL);break;case uc:s.depthFunc(s.GEQUAL);break;case dc:s.depthFunc(s.GREATER);break;case fc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ae=Se}},setLocked:function(Se){R=Se},setClear:function(Se){be!==Se&&(s.clearDepth(Se),be=Se)},reset:function(){R=!1,re=null,ae=null,be=null}}}function o(){let R=!1,re=null,ae=null,be=null,Se=null,Je=null,Qe=null,mt=null,yt=null;return{setTest:function(et){R||(et?De(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(et){re!==et&&!R&&(s.stencilMask(et),re=et)},setFunc:function(et,Tt,jt){(ae!==et||be!==Tt||Se!==jt)&&(s.stencilFunc(et,Tt,jt),ae=et,be=Tt,Se=jt)},setOp:function(et,Tt,jt){(Je!==et||Qe!==Tt||mt!==jt)&&(s.stencilOp(et,Tt,jt),Je=et,Qe=Tt,mt=jt)},setLocked:function(et){R=et},setClear:function(et){yt!==et&&(s.clearStencil(et),yt=et)},reset:function(){R=!1,re=null,ae=null,be=null,Se=null,Je=null,Qe=null,mt=null,yt=null}}}const a=new i,c=new r,l=new o,h=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,u=!1,y=null,S=null,w=null,P=null,A=null,b=null,X=null,M=new Ve(0,0,0),T=0,B=!1,z=null,j=null,C=null,D=null,k=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,W=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=W>=1):q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=W>=2);let te=null,ne={};const V=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),le=new nt().fromArray(V),_e=new nt().fromArray(Z);function ge(R,re,ae,be){const Se=new Uint8Array(4),Je=s.createTexture();s.bindTexture(R,Je),s.texParameteri(R,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(R,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qe=0;Qe<ae;Qe++)n&&(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)?s.texImage3D(re,0,s.RGBA,1,1,be,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(re+Qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return Je}const Pe={};Pe[s.TEXTURE_2D]=ge(s.TEXTURE_2D,s.TEXTURE_2D,1),Pe[s.TEXTURE_CUBE_MAP]=ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pe[s.TEXTURE_2D_ARRAY]=ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Pe[s.TEXTURE_3D]=ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),De(s.DEPTH_TEST),c.setFunc(is),Oe(!1),E(Ar),De(s.CULL_FACE),fe(_n);function De(R){f[R]!==!0&&(s.enable(R),f[R]=!0)}function we(R){f[R]!==!1&&(s.disable(R),f[R]=!1)}function Xe(R,re){return m[R]!==re?(s.bindFramebuffer(R,re),m[R]=re,n&&(R===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=re),R===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=re)),!0):!1}function U(R,re){let ae=_,be=!1;if(R)if(ae=g.get(re),ae===void 0&&(ae=[],g.set(re,ae)),R.isWebGLMultipleRenderTargets){const Se=R.texture;if(ae.length!==Se.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Je=0,Qe=Se.length;Je<Qe;Je++)ae[Je]=s.COLOR_ATTACHMENT0+Je;ae.length=Se.length,be=!0}}else ae[0]!==s.COLOR_ATTACHMENT0&&(ae[0]=s.COLOR_ATTACHMENT0,be=!0);else ae[0]!==s.BACK&&(ae[0]=s.BACK,be=!0);be&&(t.isWebGL2?s.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Et(R){return p!==R?(s.useProgram(R),p=R,!0):!1}const Me={[Ln]:s.FUNC_ADD,[qo]:s.FUNC_SUBTRACT,[Yo]:s.FUNC_REVERSE_SUBTRACT};if(n)Me[Lr]=s.MIN,Me[Pr]=s.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(Me[Lr]=R.MIN_EXT,Me[Pr]=R.MAX_EXT)}const Ce={[Ko]:s.ZERO,[jo]:s.ONE,[Zo]:s.SRC_COLOR,[Qs]:s.SRC_ALPHA,[nc]:s.SRC_ALPHA_SATURATE,[ec]:s.DST_COLOR,[Jo]:s.DST_ALPHA,[$o]:s.ONE_MINUS_SRC_COLOR,[er]:s.ONE_MINUS_SRC_ALPHA,[tc]:s.ONE_MINUS_DST_COLOR,[Qo]:s.ONE_MINUS_DST_ALPHA,[ic]:s.CONSTANT_COLOR,[sc]:s.ONE_MINUS_CONSTANT_COLOR,[rc]:s.CONSTANT_ALPHA,[ac]:s.ONE_MINUS_CONSTANT_ALPHA};function fe(R,re,ae,be,Se,Je,Qe,mt,yt,et){if(R===_n){u===!0&&(we(s.BLEND),u=!1);return}if(u===!1&&(De(s.BLEND),u=!0),R!==Xo){if(R!==y||et!==B){if((S!==Ln||A!==Ln)&&(s.blendEquation(s.FUNC_ADD),S=Ln,A=Ln),et)switch(R){case ii:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yi:s.blendFunc(s.ONE,s.ONE);break;case Rr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ii:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Rr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}w=null,P=null,b=null,X=null,M.set(0,0,0),T=0,y=R,B=et}return}Se=Se||re,Je=Je||ae,Qe=Qe||be,(re!==S||Se!==A)&&(s.blendEquationSeparate(Me[re],Me[Se]),S=re,A=Se),(ae!==w||be!==P||Je!==b||Qe!==X)&&(s.blendFuncSeparate(Ce[ae],Ce[be],Ce[Je],Ce[Qe]),w=ae,P=be,b=Je,X=Qe),(mt.equals(M)===!1||yt!==T)&&(s.blendColor(mt.r,mt.g,mt.b,yt),M.copy(mt),T=yt),y=R,B=!1}function it(R,re){R.side===qt?we(s.CULL_FACE):De(s.CULL_FACE);let ae=R.side===Pt;re&&(ae=!ae),Oe(ae),R.blending===ii&&R.transparent===!1?fe(_n):fe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),a.setMask(R.colorWrite);const be=R.stencilWrite;l.setTest(be),be&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),O(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?De(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(R){z!==R&&(R?s.frontFace(s.CW):s.frontFace(s.CCW),z=R)}function E(R){R!==Vo?(De(s.CULL_FACE),R!==j&&(R===Ar?s.cullFace(s.BACK):R===Wo?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),j=R}function v(R){R!==C&&(H&&s.lineWidth(R),C=R)}function O(R,re,ae){R?(De(s.POLYGON_OFFSET_FILL),(D!==re||k!==ae)&&(s.polygonOffset(re,ae),D=re,k=ae)):we(s.POLYGON_OFFSET_FILL)}function Q(R){R?De(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function J(R){R===void 0&&(R=s.TEXTURE0+Y-1),te!==R&&(s.activeTexture(R),te=R)}function ee(R,re,ae){ae===void 0&&(te===null?ae=s.TEXTURE0+Y-1:ae=te);let be=ne[ae];be===void 0&&(be={type:void 0,texture:void 0},ne[ae]=be),(be.type!==R||be.texture!==re)&&(te!==ae&&(s.activeTexture(ae),te=ae),s.bindTexture(R,re||Pe[R]),be.type=R,be.texture=re)}function pe(){const R=ne[te];R!==void 0&&R.type!==void 0&&(s.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function oe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{s.compressedTexImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Te(){try{s.texSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Fe(){try{s.texSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ke(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function He(){try{s.texStorage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Re(){try{s.texStorage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(){try{s.texImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{s.texImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ue(R){le.equals(R)===!1&&(s.scissor(R.x,R.y,R.z,R.w),le.copy(R))}function Ye(R){_e.equals(R)===!1&&(s.viewport(R.x,R.y,R.z,R.w),_e.copy(R))}function rt(R,re){let ae=d.get(re);ae===void 0&&(ae=new WeakMap,d.set(re,ae));let be=ae.get(R);be===void 0&&(be=s.getUniformBlockIndex(re,R.name),ae.set(R,be))}function Ge(R,re){const be=d.get(re).get(R);h.get(re)!==be&&(s.uniformBlockBinding(re,be,R.__bindingPointIndex),h.set(re,be))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},te=null,ne={},m={},g=new WeakMap,_=[],p=null,u=!1,y=null,S=null,w=null,P=null,A=null,b=null,X=null,M=new Ve(0,0,0),T=0,B=!1,z=null,j=null,C=null,D=null,k=null,le.set(0,0,s.canvas.width,s.canvas.height),_e.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:De,disable:we,bindFramebuffer:Xe,drawBuffers:U,useProgram:Et,setBlending:fe,setMaterial:it,setFlipSided:Oe,setCullFace:E,setLineWidth:v,setPolygonOffset:O,setScissorTest:Q,activeTexture:J,bindTexture:ee,unbindTexture:pe,compressedTexImage2D:oe,compressedTexImage3D:ue,texImage2D:xe,texImage3D:de,updateUBOMapping:rt,uniformBlockBinding:Ge,texStorage2D:He,texStorage3D:Re,texSubImage2D:Te,texSubImage3D:Fe,compressedTexSubImage2D:$,compressedTexSubImage3D:Ke,scissor:Ue,viewport:Ye,reset:ie}}function Qf(s,e,t,n,i,r,o){const a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return m?new OffscreenCanvas(E,v):ls("canvas")}function _(E,v,O,Q){let J=1;if((E.width>Q||E.height>Q)&&(J=Q/Math.max(E.width,E.height)),J<1||v===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ee=v?cs:Math.floor,pe=ee(J*E.width),oe=ee(J*E.height);d===void 0&&(d=g(pe,oe));const ue=O?g(pe,oe):d;return ue.width=pe,ue.height=oe,ue.getContext("2d").drawImage(E,0,0,pe,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+pe+"x"+oe+")."),ue}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function p(E){return rr(E.width)&&rr(E.height)}function u(E){return a?!1:E.wrapS!==Yt||E.wrapT!==Yt||E.minFilter!==At&&E.minFilter!==Gt}function y(E,v){return E.generateMipmaps&&v&&E.minFilter!==At&&E.minFilter!==Gt}function S(E){s.generateMipmap(E)}function w(E,v,O,Q,J=!1){if(a===!1)return v;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ee=v;if(v===s.RED&&(O===s.FLOAT&&(ee=s.R32F),O===s.HALF_FLOAT&&(ee=s.R16F),O===s.UNSIGNED_BYTE&&(ee=s.R8)),v===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(ee=s.R8UI),O===s.UNSIGNED_SHORT&&(ee=s.R16UI),O===s.UNSIGNED_INT&&(ee=s.R32UI),O===s.BYTE&&(ee=s.R8I),O===s.SHORT&&(ee=s.R16I),O===s.INT&&(ee=s.R32I)),v===s.RG&&(O===s.FLOAT&&(ee=s.RG32F),O===s.HALF_FLOAT&&(ee=s.RG16F),O===s.UNSIGNED_BYTE&&(ee=s.RG8)),v===s.RGBA){const pe=J?ss:je.getTransfer(Q);O===s.FLOAT&&(ee=s.RGBA32F),O===s.HALF_FLOAT&&(ee=s.RGBA16F),O===s.UNSIGNED_BYTE&&(ee=pe===tt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function P(E,v,O){return y(E,O)===!0||E.isFramebufferTexture&&E.minFilter!==At&&E.minFilter!==Gt?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function A(E){return E===At||E===Ir||E===Ss?s.NEAREST:s.LINEAR}function b(E){const v=E.target;v.removeEventListener("dispose",b),M(v),v.isVideoTexture&&h.delete(v)}function X(E){const v=E.target;v.removeEventListener("dispose",X),B(v)}function M(E){const v=n.get(E);if(v.__webglInit===void 0)return;const O=E.source,Q=f.get(O);if(Q){const J=Q[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(E),Object.keys(Q).length===0&&f.delete(O)}n.remove(E)}function T(E){const v=n.get(E);s.deleteTexture(v.__webglTexture);const O=E.source,Q=f.get(O);delete Q[v.__cacheKey],o.memory.textures--}function B(E){const v=E.texture,O=n.get(E),Q=n.get(v);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(O.__webglFramebuffer[J]))for(let ee=0;ee<O.__webglFramebuffer[J].length;ee++)s.deleteFramebuffer(O.__webglFramebuffer[J][ee]);else s.deleteFramebuffer(O.__webglFramebuffer[J]);O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer[J])}else{if(Array.isArray(O.__webglFramebuffer))for(let J=0;J<O.__webglFramebuffer.length;J++)s.deleteFramebuffer(O.__webglFramebuffer[J]);else s.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&s.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let J=0;J<O.__webglColorRenderbuffer.length;J++)O.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(O.__webglColorRenderbuffer[J]);O.__webglDepthRenderbuffer&&s.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let J=0,ee=v.length;J<ee;J++){const pe=n.get(v[J]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(v[J])}n.remove(v),n.remove(E)}let z=0;function j(){z=0}function C(){const E=z;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),z+=1,E}function D(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function k(E,v){const O=n.get(E);if(E.isVideoTexture&&it(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(O,E,v);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+v)}function Y(E,v){const O=n.get(E);if(E.version>0&&O.__version!==E.version){le(O,E,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+v)}function H(E,v){const O=n.get(E);if(E.version>0&&O.__version!==E.version){le(O,E,v);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+v)}function W(E,v){const O=n.get(E);if(E.version>0&&O.__version!==E.version){_e(O,E,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+v)}const q={[Ti]:s.REPEAT,[Yt]:s.CLAMP_TO_EDGE,[ir]:s.MIRRORED_REPEAT},te={[At]:s.NEAREST,[Ir]:s.NEAREST_MIPMAP_NEAREST,[Ss]:s.NEAREST_MIPMAP_LINEAR,[Gt]:s.LINEAR,[Sc]:s.LINEAR_MIPMAP_NEAREST,[wi]:s.LINEAR_MIPMAP_LINEAR},ne={[Dc]:s.NEVER,[Gc]:s.ALWAYS,[Uc]:s.LESS,[fo]:s.LEQUAL,[Nc]:s.EQUAL,[Bc]:s.GEQUAL,[Oc]:s.GREATER,[Fc]:s.NOTEQUAL};function V(E,v,O){if(O?(s.texParameteri(E,s.TEXTURE_WRAP_S,q[v.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,q[v.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,q[v.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,te[v.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,te[v.minFilter])):(s.texParameteri(E,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(E,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(v.wrapS!==Yt||v.wrapT!==Yt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,s.TEXTURE_MAG_FILTER,A(v.magFilter)),s.texParameteri(E,s.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==At&&v.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,ne[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===At||v.minFilter!==Ss&&v.minFilter!==wi||v.type===gn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===bi&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(s.texParameterf(E,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Z(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",b));const Q=v.source;let J=f.get(Q);J===void 0&&(J={},f.set(Q,J));const ee=D(v);if(ee!==E.__cacheKey){J[ee]===void 0&&(J[ee]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),J[ee].usedTimes++;const pe=J[E.__cacheKey];pe!==void 0&&(J[E.__cacheKey].usedTimes--,pe.usedTimes===0&&T(v)),E.__cacheKey=ee,E.__webglTexture=J[ee].texture}return O}function le(E,v,O){let Q=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=s.TEXTURE_3D);const J=Z(E,v),ee=v.source;t.bindTexture(Q,E.__webglTexture,s.TEXTURE0+O);const pe=n.get(ee);if(ee.version!==pe.__version||J===!0){t.activeTexture(s.TEXTURE0+O);const oe=je.getPrimaries(je.workingColorSpace),ue=v.colorSpace===zt?null:je.getPrimaries(v.colorSpace),Te=v.colorSpace===zt||oe===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Fe=u(v)&&p(v.image)===!1;let $=_(v.image,Fe,!1,i.maxTextureSize);$=Oe(v,$);const Ke=p($)||a,He=r.convert(v.format,v.colorSpace);let Re=r.convert(v.type),xe=w(v.internalFormat,He,Re,v.colorSpace,v.isVideoTexture);V(Q,v,Ke);let de;const Ue=v.mipmaps,Ye=a&&v.isVideoTexture!==!0&&xe!==lo,rt=pe.__version===void 0||J===!0,Ge=P(v,$,Ke);if(v.isDepthTexture)xe=s.DEPTH_COMPONENT,a?v.type===gn?xe=s.DEPTH_COMPONENT32F:v.type===mn?xe=s.DEPTH_COMPONENT24:v.type===In?xe=s.DEPTH24_STENCIL8:xe=s.DEPTH_COMPONENT16:v.type===gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Dn&&xe===s.DEPTH_COMPONENT&&v.type!==hr&&v.type!==mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=mn,Re=r.convert(v.type)),v.format===oi&&xe===s.DEPTH_COMPONENT&&(xe=s.DEPTH_STENCIL,v.type!==In&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=In,Re=r.convert(v.type))),rt&&(Ye?t.texStorage2D(s.TEXTURE_2D,1,xe,$.width,$.height):t.texImage2D(s.TEXTURE_2D,0,xe,$.width,$.height,0,He,Re,null));else if(v.isDataTexture)if(Ue.length>0&&Ke){Ye&&rt&&t.texStorage2D(s.TEXTURE_2D,Ge,xe,Ue[0].width,Ue[0].height);for(let ie=0,R=Ue.length;ie<R;ie++)de=Ue[ie],Ye?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,de.width,de.height,He,Re,de.data):t.texImage2D(s.TEXTURE_2D,ie,xe,de.width,de.height,0,He,Re,de.data);v.generateMipmaps=!1}else Ye?(rt&&t.texStorage2D(s.TEXTURE_2D,Ge,xe,$.width,$.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,$.width,$.height,He,Re,$.data)):t.texImage2D(s.TEXTURE_2D,0,xe,$.width,$.height,0,He,Re,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ye&&rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,xe,Ue[0].width,Ue[0].height,$.depth);for(let ie=0,R=Ue.length;ie<R;ie++)de=Ue[ie],v.format!==Kt?He!==null?Ye?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,$.depth,He,de.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,xe,de.width,de.height,$.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,$.depth,He,Re,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,xe,de.width,de.height,$.depth,0,He,Re,de.data)}else{Ye&&rt&&t.texStorage2D(s.TEXTURE_2D,Ge,xe,Ue[0].width,Ue[0].height);for(let ie=0,R=Ue.length;ie<R;ie++)de=Ue[ie],v.format!==Kt?He!==null?Ye?t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,de.width,de.height,He,de.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,xe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,de.width,de.height,He,Re,de.data):t.texImage2D(s.TEXTURE_2D,ie,xe,de.width,de.height,0,He,Re,de.data)}else if(v.isDataArrayTexture)Ye?(rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,xe,$.width,$.height,$.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,He,Re,$.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,xe,$.width,$.height,$.depth,0,He,Re,$.data);else if(v.isData3DTexture)Ye?(rt&&t.texStorage3D(s.TEXTURE_3D,Ge,xe,$.width,$.height,$.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,He,Re,$.data)):t.texImage3D(s.TEXTURE_3D,0,xe,$.width,$.height,$.depth,0,He,Re,$.data);else if(v.isFramebufferTexture){if(rt)if(Ye)t.texStorage2D(s.TEXTURE_2D,Ge,xe,$.width,$.height);else{let ie=$.width,R=$.height;for(let re=0;re<Ge;re++)t.texImage2D(s.TEXTURE_2D,re,xe,ie,R,0,He,Re,null),ie>>=1,R>>=1}}else if(Ue.length>0&&Ke){Ye&&rt&&t.texStorage2D(s.TEXTURE_2D,Ge,xe,Ue[0].width,Ue[0].height);for(let ie=0,R=Ue.length;ie<R;ie++)de=Ue[ie],Ye?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,He,Re,de):t.texImage2D(s.TEXTURE_2D,ie,xe,He,Re,de);v.generateMipmaps=!1}else Ye?(rt&&t.texStorage2D(s.TEXTURE_2D,Ge,xe,$.width,$.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,He,Re,$)):t.texImage2D(s.TEXTURE_2D,0,xe,He,Re,$);y(v,Ke)&&S(Q),pe.__version=ee.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function _e(E,v,O){if(v.image.length!==6)return;const Q=Z(E,v),J=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+O);const ee=n.get(J);if(J.version!==ee.__version||Q===!0){t.activeTexture(s.TEXTURE0+O);const pe=je.getPrimaries(je.workingColorSpace),oe=v.colorSpace===zt?null:je.getPrimaries(v.colorSpace),ue=v.colorSpace===zt||pe===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Te=v.isCompressedTexture||v.image[0].isCompressedTexture,Fe=v.image[0]&&v.image[0].isDataTexture,$=[];for(let ie=0;ie<6;ie++)!Te&&!Fe?$[ie]=_(v.image[ie],!1,!0,i.maxCubemapSize):$[ie]=Fe?v.image[ie].image:v.image[ie],$[ie]=Oe(v,$[ie]);const Ke=$[0],He=p(Ke)||a,Re=r.convert(v.format,v.colorSpace),xe=r.convert(v.type),de=w(v.internalFormat,Re,xe,v.colorSpace),Ue=a&&v.isVideoTexture!==!0,Ye=ee.__version===void 0||Q===!0;let rt=P(v,Ke,He);V(s.TEXTURE_CUBE_MAP,v,He);let Ge;if(Te){Ue&&Ye&&t.texStorage2D(s.TEXTURE_CUBE_MAP,rt,de,Ke.width,Ke.height);for(let ie=0;ie<6;ie++){Ge=$[ie].mipmaps;for(let R=0;R<Ge.length;R++){const re=Ge[R];v.format!==Kt?Re!==null?Ue?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R,0,0,re.width,re.height,Re,re.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R,de,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R,0,0,re.width,re.height,Re,xe,re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R,de,re.width,re.height,0,Re,xe,re.data)}}}else{Ge=v.mipmaps,Ue&&Ye&&(Ge.length>0&&rt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,rt,de,$[0].width,$[0].height));for(let ie=0;ie<6;ie++)if(Fe){Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,$[ie].width,$[ie].height,Re,xe,$[ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,de,$[ie].width,$[ie].height,0,Re,xe,$[ie].data);for(let R=0;R<Ge.length;R++){const ae=Ge[R].image[ie].image;Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R+1,0,0,ae.width,ae.height,Re,xe,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R+1,de,ae.width,ae.height,0,Re,xe,ae.data)}}else{Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Re,xe,$[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,de,Re,xe,$[ie]);for(let R=0;R<Ge.length;R++){const re=Ge[R];Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R+1,0,0,Re,xe,re.image[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R+1,de,Re,xe,re.image[ie])}}}y(v,He)&&S(s.TEXTURE_CUBE_MAP),ee.__version=J.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ge(E,v,O,Q,J,ee){const pe=r.convert(O.format,O.colorSpace),oe=r.convert(O.type),ue=w(O.internalFormat,pe,oe,O.colorSpace);if(!n.get(v).__hasExternalTextures){const Fe=Math.max(1,v.width>>ee),$=Math.max(1,v.height>>ee);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,ee,ue,Fe,$,v.depth,0,pe,oe,null):t.texImage2D(J,ee,ue,Fe,$,0,pe,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),fe(v)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,J,n.get(O).__webglTexture,0,Ce(v)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,J,n.get(O).__webglTexture,ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(E,v,O){if(s.bindRenderbuffer(s.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let Q=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(O||fe(v)){const J=v.depthTexture;J&&J.isDepthTexture&&(J.type===gn?Q=s.DEPTH_COMPONENT32F:J.type===mn&&(Q=s.DEPTH_COMPONENT24));const ee=Ce(v);fe(v)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,Q,v.width,v.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,Q,v.width,v.height)}else s.renderbufferStorage(s.RENDERBUFFER,Q,v.width,v.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){const Q=Ce(v);O&&fe(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,v.width,v.height):fe(v)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,E)}else{const Q=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let J=0;J<Q.length;J++){const ee=Q[J],pe=r.convert(ee.format,ee.colorSpace),oe=r.convert(ee.type),ue=w(ee.internalFormat,pe,oe,ee.colorSpace),Te=Ce(v);O&&fe(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,ue,v.width,v.height):fe(v)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,ue,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ue,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function De(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),k(v.depthTexture,0);const Q=n.get(v.depthTexture).__webglTexture,J=Ce(v);if(v.depthTexture.format===Dn)fe(v)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(v.depthTexture.format===oi)fe(v)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function we(E){const v=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");De(v.__webglFramebuffer,E)}else if(O){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]=s.createRenderbuffer(),Pe(v.__webglDepthbuffer[Q],E,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),Pe(v.__webglDepthbuffer,E,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(E,v,O){const Q=n.get(E);v!==void 0&&ge(Q.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&we(E)}function U(E){const v=E.texture,O=n.get(E),Q=n.get(v);E.addEventListener("dispose",X),E.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=v.version,o.memory.textures++);const J=E.isWebGLCubeRenderTarget===!0,ee=E.isWebGLMultipleRenderTargets===!0,pe=p(E)||a;if(J){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let ue=0;ue<v.mipmaps.length;ue++)O.__webglFramebuffer[oe][ue]=s.createFramebuffer()}else O.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)O.__webglFramebuffer[oe]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(ee)if(i.drawBuffers){const oe=E.texture;for(let ue=0,Te=oe.length;ue<Te;ue++){const Fe=n.get(oe[ue]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&fe(E)===!1){const oe=ee?v:[v];O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ue=0;ue<oe.length;ue++){const Te=oe[ue];O.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ue]);const Fe=r.convert(Te.format,Te.colorSpace),$=r.convert(Te.type),Ke=w(Te.internalFormat,Fe,$,Te.colorSpace,E.isXRRenderTarget===!0),He=Ce(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,He,Ke,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,O.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Pe(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),V(s.TEXTURE_CUBE_MAP,v,pe);for(let oe=0;oe<6;oe++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)ge(O.__webglFramebuffer[oe][ue],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else ge(O.__webglFramebuffer[oe],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);y(v,pe)&&S(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const oe=E.texture;for(let ue=0,Te=oe.length;ue<Te;ue++){const Fe=oe[ue],$=n.get(Fe);t.bindTexture(s.TEXTURE_2D,$.__webglTexture),V(s.TEXTURE_2D,Fe,pe),ge(O.__webglFramebuffer,E,Fe,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),y(Fe,pe)&&S(s.TEXTURE_2D)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?oe=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,Q.__webglTexture),V(oe,v,pe),a&&v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)ge(O.__webglFramebuffer[ue],E,v,s.COLOR_ATTACHMENT0,oe,ue);else ge(O.__webglFramebuffer,E,v,s.COLOR_ATTACHMENT0,oe,0);y(v,pe)&&S(oe),t.unbindTexture()}E.depthBuffer&&we(E)}function Et(E){const v=p(E)||a,O=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0,J=O.length;Q<J;Q++){const ee=O[Q];if(y(ee,v)){const pe=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,oe=n.get(ee).__webglTexture;t.bindTexture(pe,oe),S(pe),t.unbindTexture()}}}function Me(E){if(a&&E.samples>0&&fe(E)===!1){const v=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],O=E.width,Q=E.height;let J=s.COLOR_BUFFER_BIT;const ee=[],pe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=n.get(E),ue=E.isWebGLMultipleRenderTargets===!0;if(ue)for(let Te=0;Te<v.length;Te++)t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Te=0;Te<v.length;Te++){ee.push(s.COLOR_ATTACHMENT0+Te),E.depthBuffer&&ee.push(pe);const Fe=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Fe===!1&&(E.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ue&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,oe.__webglColorRenderbuffer[Te]),Fe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[pe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[pe])),ue){const $=n.get(v[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$,0)}s.blitFramebuffer(0,0,O,Q,0,0,O,Q,J,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Te=0;Te<v.length;Te++){t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,oe.__webglColorRenderbuffer[Te]);const Fe=n.get(v[Te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,Fe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Ce(E){return Math.min(i.maxSamples,E.samples)}function fe(E){const v=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function it(E){const v=o.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function Oe(E,v){const O=E.colorSpace,Q=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===sr||O!==cn&&O!==zt&&(je.getTransfer(O)===tt?a===!1?e.has("EXT_sRGB")===!0&&Q===Kt?(E.format=sr,E.minFilter=Gt,E.generateMipmaps=!1):v=mo.sRGBToLinear(v):(Q!==Kt||J!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}this.allocateTextureUnit=C,this.resetTextureUnits=j,this.setTexture2D=k,this.setTexture2DArray=Y,this.setTexture3D=H,this.setTextureCube=W,this.rebindTextures=Xe,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=fe}function ep(s,e,t){const n=t.isWebGL2;function i(r,o=zt){let a;const c=je.getTransfer(o);if(r===xn)return s.UNSIGNED_BYTE;if(r===so)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ro)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Ec)return s.BYTE;if(r===yc)return s.SHORT;if(r===hr)return s.UNSIGNED_SHORT;if(r===io)return s.INT;if(r===mn)return s.UNSIGNED_INT;if(r===gn)return s.FLOAT;if(r===bi)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Tc)return s.ALPHA;if(r===Kt)return s.RGBA;if(r===wc)return s.LUMINANCE;if(r===bc)return s.LUMINANCE_ALPHA;if(r===Dn)return s.DEPTH_COMPONENT;if(r===oi)return s.DEPTH_STENCIL;if(r===sr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ac)return s.RED;if(r===ao)return s.RED_INTEGER;if(r===Rc)return s.RG;if(r===oo)return s.RG_INTEGER;if(r===co)return s.RGBA_INTEGER;if(r===Es||r===ys||r===Ts||r===ws)if(c===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Es)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ys)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ts)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Es)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ys)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ts)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ws)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dr||r===Ur||r===Nr||r===Or)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Dr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ur)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Or)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lo)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Fr||r===Br)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Fr)return c===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Br)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gr||r===zr||r===kr||r===Hr||r===Vr||r===Wr||r===Xr||r===qr||r===Yr||r===Kr||r===jr||r===Zr||r===$r||r===Jr)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Gr)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zr)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kr)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hr)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vr)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wr)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xr)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qr)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yr)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kr)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jr)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zr)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$r)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jr)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bs||r===Qr||r===ea)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===bs)return c===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ea)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Cc||r===ta||r===na||r===ia)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===bs)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ta)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===na)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ia)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===In?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class tp extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ze extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const np={type:"move"};class js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),u=this._getHandJoint(l,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(np)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ip extends hi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,f=null,m=null,g=null;const _=t.getContextAttributes();let p=null,u=null;const y=[],S=[],w=new We;let P=null;const A=new Ct;A.layers.enable(1),A.viewport=new nt;const b=new Ct;b.layers.enable(2),b.viewport=new nt;const X=[A,b],M=new tp;M.layers.enable(1),M.layers.enable(2);let T=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=y[V];return Z===void 0&&(Z=new js,y[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=y[V];return Z===void 0&&(Z=new js,y[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=y[V];return Z===void 0&&(Z=new js,y[V]=Z),Z.getHandSpace()};function z(V){const Z=S.indexOf(V.inputSource);if(Z===-1)return;const le=y[Z];le!==void 0&&(le.update(V.inputSource,V.frame,l||o),le.dispatchEvent({type:V.type,data:V.inputSource}))}function j(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",C);for(let V=0;V<y.length;V++){const Z=S[V];Z!==null&&(S[V]=null,y[V].disconnect(Z))}T=null,B=null,e.setRenderTarget(p),m=null,f=null,d=null,i=null,u=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",j),i.addEventListener("inputsourceschange",C),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Nn(m.framebufferWidth,m.framebufferHeight,{format:Kt,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,le=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?oi:Dn,le=_.stencil?In:mn);const ge={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(ge),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new Nn(f.textureWidth,f.textureHeight,{format:Kt,type:xn,depthTexture:new Ro(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Pe=e.properties.get(u);Pe.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function C(V){for(let Z=0;Z<V.removed.length;Z++){const le=V.removed[Z],_e=S.indexOf(le);_e>=0&&(S[_e]=null,y[_e].disconnect(le))}for(let Z=0;Z<V.added.length;Z++){const le=V.added[Z];let _e=S.indexOf(le);if(_e===-1){for(let Pe=0;Pe<y.length;Pe++)if(Pe>=S.length){S.push(le),_e=Pe;break}else if(S[Pe]===null){S[Pe]=le,_e=Pe;break}if(_e===-1)break}const ge=y[_e];ge&&ge.connect(le)}}const D=new L,k=new L;function Y(V,Z,le){D.setFromMatrixPosition(Z.matrixWorld),k.setFromMatrixPosition(le.matrixWorld);const _e=D.distanceTo(k),ge=Z.projectionMatrix.elements,Pe=le.projectionMatrix.elements,De=ge[14]/(ge[10]-1),we=ge[14]/(ge[10]+1),Xe=(ge[9]+1)/ge[5],U=(ge[9]-1)/ge[5],Et=(ge[8]-1)/ge[0],Me=(Pe[8]+1)/Pe[0],Ce=De*Et,fe=De*Me,it=_e/(-Et+Me),Oe=it*-Et;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Oe),V.translateZ(it),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const E=De+it,v=we+it,O=Ce-Oe,Q=fe+(_e-Oe),J=Xe*we/v*E,ee=U*we/v*E;V.projectionMatrix.makePerspective(O,Q,J,ee,E,v),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function H(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;M.near=b.near=A.near=V.near,M.far=b.far=A.far=V.far,(T!==M.near||B!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,B=M.far);const Z=V.parent,le=M.cameras;H(M,Z);for(let _e=0;_e<le.length;_e++)H(le[_e],Z);le.length===2?Y(M,A,b):M.projectionMatrix.copy(A.projectionMatrix),W(V,M,Z)};function W(V,Z,le){le===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(le.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ci*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let q=null;function te(V,Z){if(h=Z.getViewerPose(l||o),g=Z,h!==null){const le=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let _e=!1;le.length!==M.cameras.length&&(M.cameras.length=0,_e=!0);for(let ge=0;ge<le.length;ge++){const Pe=le[ge];let De=null;if(m!==null)De=m.getViewport(Pe);else{const Xe=d.getViewSubImage(f,Pe);De=Xe.viewport,ge===0&&(e.setRenderTargetTextures(u,Xe.colorTexture,f.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(u))}let we=X[ge];we===void 0&&(we=new Ct,we.layers.enable(ge),we.viewport=new nt,X[ge]=we),we.matrix.fromArray(Pe.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Pe.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(De.x,De.y,De.width,De.height),ge===0&&(M.matrix.copy(we.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_e===!0&&M.cameras.push(we)}}for(let le=0;le<y.length;le++){const _e=S[le],ge=y[le];_e!==null&&ge!==void 0&&ge.update(_e,Z,l||o)}q&&q(V,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const ne=new bo;ne.setAnimationLoop(te),this.setAnimationLoop=function(V){q=V},this.dispose=function(){}}}function sp(s,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,yo(s)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function i(p,u,y,S,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,w)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?c(p,u,y,S):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Pt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Pt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const y=e.get(u).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const S=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*S,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,y,S){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*y,p.scale.value=S*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,y){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Pt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const y=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rp(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,S){const w=S.program;n.uniformBlockBinding(y,w)}function l(y,S){let w=i[y.id];w===void 0&&(g(y),w=h(y),i[y.id]=w,y.addEventListener("dispose",p));const P=S.program;n.updateUBOMapping(y,P);const A=e.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function h(y){const S=d();y.__bindingPointIndex=S;const w=s.createBuffer(),P=y.__size,A=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,P,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,w),w}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=i[y.id],w=y.uniforms,P=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let A=0,b=w.length;A<b;A++){const X=Array.isArray(w[A])?w[A]:[w[A]];for(let M=0,T=X.length;M<T;M++){const B=X[M];if(m(B,A,M,P)===!0){const z=B.__offset,j=Array.isArray(B.value)?B.value:[B.value];let C=0;for(let D=0;D<j.length;D++){const k=j[D],Y=_(k);typeof k=="number"||typeof k=="boolean"?(B.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,z+C,B.__data)):k.isMatrix3?(B.__data[0]=k.elements[0],B.__data[1]=k.elements[1],B.__data[2]=k.elements[2],B.__data[3]=0,B.__data[4]=k.elements[3],B.__data[5]=k.elements[4],B.__data[6]=k.elements[5],B.__data[7]=0,B.__data[8]=k.elements[6],B.__data[9]=k.elements[7],B.__data[10]=k.elements[8],B.__data[11]=0):(k.toArray(B.__data,C),C+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(y,S,w,P){const A=y.value,b=S+"_"+w;if(P[b]===void 0)return typeof A=="number"||typeof A=="boolean"?P[b]=A:P[b]=A.clone(),!0;{const X=P[b];if(typeof A=="number"||typeof A=="boolean"){if(X!==A)return P[b]=A,!0}else if(X.equals(A)===!1)return X.copy(A),!0}return!1}function g(y){const S=y.uniforms;let w=0;const P=16;for(let b=0,X=S.length;b<X;b++){const M=Array.isArray(S[b])?S[b]:[S[b]];for(let T=0,B=M.length;T<B;T++){const z=M[T],j=Array.isArray(z.value)?z.value:[z.value];for(let C=0,D=j.length;C<D;C++){const k=j[C],Y=_(k),H=w%P;H!==0&&P-H<Y.boundary&&(w+=P-H),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=w,w+=Y.storage}}}const A=w%P;return A>0&&(w+=P-A),y.__size=w,y.__cache={},this}function _(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function p(y){const S=y.target;S.removeEventListener("dispose",p);const w=o.indexOf(S.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function u(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:u}}class mr{constructor(e={}){const{canvas:t=el(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const u=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this._useLegacyLights=!1,this.toneMapping=vn,this.toneMappingExposure=1;const S=this;let w=!1,P=0,A=0,b=null,X=-1,M=null;const T=new nt,B=new nt;let z=null;const j=new Ve(0);let C=0,D=t.width,k=t.height,Y=1,H=null,W=null;const q=new nt(0,0,D,k),te=new nt(0,0,D,k);let ne=!1;const V=new fr;let Z=!1,le=!1,_e=null;const ge=new lt,Pe=new We,De=new L,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return b===null?Y:1}let U=n;function Et(x,I){for(let F=0;F<x.length;F++){const G=x[F],N=t.getContext(G,I);if(N!==null)return N}return null}try{const x={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lr}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",re,!1),U===null){const I=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&I.shift(),U=Et(I,x),U===null)throw Et(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Me,Ce,fe,it,Oe,E,v,O,Q,J,ee,pe,oe,ue,Te,Fe,$,Ke,He,Re,xe,de,Ue,Ye;function rt(){Me=new pd(U),Ce=new cd(U,Me,e),Me.init(Ce),de=new ep(U,Me,Ce),fe=new Jf(U,Me,Ce),it=new _d(U),Oe=new Bf,E=new Qf(U,Me,fe,Oe,Ce,de,it),v=new hd(S),O=new fd(S),Q=new wl(U,Ce),Ue=new ad(U,Me,Q,Ce),J=new md(U,Q,it,Ue),ee=new Sd(U,J,Q,it),He=new Md(U,Ce,E),Fe=new ld(Oe),pe=new Ff(S,v,O,Me,Ce,Ue,Fe),oe=new sp(S,Oe),ue=new zf,Te=new qf(Me,Ce),Ke=new rd(S,v,O,fe,ee,f,c),$=new $f(S,ee,Ce),Ye=new rp(U,it,Ce,fe),Re=new od(U,Me,it,Ce),xe=new gd(U,Me,it,Ce),it.programs=pe.programs,S.capabilities=Ce,S.extensions=Me,S.properties=Oe,S.renderLists=ue,S.shadowMap=$,S.state=fe,S.info=it}rt();const Ge=new ip(S,U);this.xr=Ge,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const x=Me.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Me.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(x){x!==void 0&&(Y=x,this.setSize(D,k,!1))},this.getSize=function(x){return x.set(D,k)},this.setSize=function(x,I,F=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=x,k=I,t.width=Math.floor(x*Y),t.height=Math.floor(I*Y),F===!0&&(t.style.width=x+"px",t.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(D*Y,k*Y).floor()},this.setDrawingBufferSize=function(x,I,F){D=x,k=I,Y=F,t.width=Math.floor(x*F),t.height=Math.floor(I*F),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(T)},this.getViewport=function(x){return x.copy(q)},this.setViewport=function(x,I,F,G){x.isVector4?q.set(x.x,x.y,x.z,x.w):q.set(x,I,F,G),fe.viewport(T.copy(q).multiplyScalar(Y).floor())},this.getScissor=function(x){return x.copy(te)},this.setScissor=function(x,I,F,G){x.isVector4?te.set(x.x,x.y,x.z,x.w):te.set(x,I,F,G),fe.scissor(B.copy(te).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(x){fe.setScissorTest(ne=x)},this.setOpaqueSort=function(x){H=x},this.setTransparentSort=function(x){W=x},this.getClearColor=function(x){return x.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(x=!0,I=!0,F=!0){let G=0;if(x){let N=!1;if(b!==null){const he=b.texture.format;N=he===co||he===oo||he===ao}if(N){const he=b.texture.type,me=he===xn||he===mn||he===hr||he===In||he===so||he===ro,ye=Ke.getClearColor(),Ae=Ke.getClearAlpha(),Be=ye.r,Le=ye.g,Ie=ye.b;me?(m[0]=Be,m[1]=Le,m[2]=Ie,m[3]=Ae,U.clearBufferuiv(U.COLOR,0,m)):(g[0]=Be,g[1]=Le,g[2]=Ie,g[3]=Ae,U.clearBufferiv(U.COLOR,0,g))}else G|=U.COLOR_BUFFER_BIT}I&&(G|=U.DEPTH_BUFFER_BIT),F&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ue.dispose(),Te.dispose(),Oe.dispose(),v.dispose(),O.dispose(),ee.dispose(),Ue.dispose(),Ye.dispose(),pe.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",yt),Ge.removeEventListener("sessionend",et),_e&&(_e.dispose(),_e=null),Tt.stop()};function ie(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const x=it.autoReset,I=$.enabled,F=$.autoUpdate,G=$.needsUpdate,N=$.type;rt(),it.autoReset=x,$.enabled=I,$.autoUpdate=F,$.needsUpdate=G,$.type=N}function re(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ae(x){const I=x.target;I.removeEventListener("dispose",ae),be(I)}function be(x){Se(x),Oe.remove(x)}function Se(x){const I=Oe.get(x).programs;I!==void 0&&(I.forEach(function(F){pe.releaseProgram(F)}),x.isShaderMaterial&&pe.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,F,G,N,he){I===null&&(I=we);const me=N.isMesh&&N.matrixWorld.determinant()<0,ye=Go(x,I,F,G,N);fe.setMaterial(G,me);let Ae=F.index,Be=1;if(G.wireframe===!0){if(Ae=J.getWireframeAttribute(F),Ae===void 0)return;Be=2}const Le=F.drawRange,Ie=F.attributes.position;let ot=Le.start*Be,Dt=(Le.start+Le.count)*Be;he!==null&&(ot=Math.max(ot,he.start*Be),Dt=Math.min(Dt,(he.start+he.count)*Be)),Ae!==null?(ot=Math.max(ot,0),Dt=Math.min(Dt,Ae.count)):Ie!=null&&(ot=Math.max(ot,0),Dt=Math.min(Dt,Ie.count));const gt=Dt-ot;if(gt<0||gt===1/0)return;Ue.setup(N,G,ye,F,Ae);let Jt,st=Re;if(Ae!==null&&(Jt=Q.get(Ae),st=xe,st.setIndex(Jt)),N.isMesh)G.wireframe===!0?(fe.setLineWidth(G.wireframeLinewidth*Xe()),st.setMode(U.LINES)):st.setMode(U.TRIANGLES);else if(N.isLine){let ze=G.linewidth;ze===void 0&&(ze=1),fe.setLineWidth(ze*Xe()),N.isLineSegments?st.setMode(U.LINES):N.isLineLoop?st.setMode(U.LINE_LOOP):st.setMode(U.LINE_STRIP)}else N.isPoints?st.setMode(U.POINTS):N.isSprite&&st.setMode(U.TRIANGLES);if(N.isBatchedMesh)st.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)st.renderInstances(ot,gt,N.count);else if(F.isInstancedBufferGeometry){const ze=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,_s=Math.min(F.instanceCount,ze);st.renderInstances(ot,gt,_s)}else st.render(ot,gt)};function Je(x,I,F){x.transparent===!0&&x.side===qt&&x.forceSinglePass===!1?(x.side=Pt,x.needsUpdate=!0,Pi(x,I,F),x.side=Mn,x.needsUpdate=!0,Pi(x,I,F),x.side=qt):Pi(x,I,F)}this.compile=function(x,I,F=null){F===null&&(F=x),p=Te.get(F),p.init(),y.push(p),F.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),x!==F&&x.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(S._useLegacyLights);const G=new Set;return x.traverse(function(N){const he=N.material;if(he)if(Array.isArray(he))for(let me=0;me<he.length;me++){const ye=he[me];Je(ye,F,N),G.add(ye)}else Je(he,F,N),G.add(he)}),y.pop(),p=null,G},this.compileAsync=function(x,I,F=null){const G=this.compile(x,I,F);return new Promise(N=>{function he(){if(G.forEach(function(me){Oe.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){N(x);return}setTimeout(he,10)}Me.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Qe=null;function mt(x){Qe&&Qe(x)}function yt(){Tt.stop()}function et(){Tt.start()}const Tt=new bo;Tt.setAnimationLoop(mt),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(x){Qe=x,Ge.setAnimationLoop(x),x===null?Tt.stop():Tt.start()},Ge.addEventListener("sessionstart",yt),Ge.addEventListener("sessionend",et),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(I),I=Ge.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,I,b),p=Te.get(x,y.length),p.init(),y.push(p),ge.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),V.setFromProjectionMatrix(ge),le=this.localClippingEnabled,Z=Fe.init(this.clippingPlanes,le),_=ue.get(x,u.length),_.init(),u.push(_),jt(x,I,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(H,W),this.info.render.frame++,Z===!0&&Fe.beginShadows();const F=p.state.shadowsArray;if($.render(F,x,I),Z===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ke.render(_,x),p.setupLights(S._useLegacyLights),I.isArrayCamera){const G=I.cameras;for(let N=0,he=G.length;N<he;N++){const me=G[N];Sr(_,x,me,me.viewport)}}else Sr(_,x,I);b!==null&&(E.updateMultisampleRenderTarget(b),E.updateRenderTargetMipmap(b)),x.isScene===!0&&x.onAfterRender(S,x,I),Ue.resetDefaultState(),X=-1,M=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function jt(x,I,F,G){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||V.intersectsSprite(x)){G&&De.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ge);const me=ee.update(x),ye=x.material;ye.visible&&_.push(x,me,ye,F,De.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||V.intersectsObject(x))){const me=ee.update(x),ye=x.material;if(G&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),De.copy(x.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),De.copy(me.boundingSphere.center)),De.applyMatrix4(x.matrixWorld).applyMatrix4(ge)),Array.isArray(ye)){const Ae=me.groups;for(let Be=0,Le=Ae.length;Be<Le;Be++){const Ie=Ae[Be],ot=ye[Ie.materialIndex];ot&&ot.visible&&_.push(x,me,ot,F,De.z,Ie)}}else ye.visible&&_.push(x,me,ye,F,De.z,null)}}const he=x.children;for(let me=0,ye=he.length;me<ye;me++)jt(he[me],I,F,G)}function Sr(x,I,F,G){const N=x.opaque,he=x.transmissive,me=x.transparent;p.setupLightsView(F),Z===!0&&Fe.setGlobalState(S.clippingPlanes,F),he.length>0&&Bo(N,he,I,F),G&&fe.viewport(T.copy(G)),N.length>0&&Li(N,I,F),he.length>0&&Li(he,I,F),me.length>0&&Li(me,I,F),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Bo(x,I,F,G){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const he=Ce.isWebGL2;_e===null&&(_e=new Nn(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?bi:xn,minFilter:wi,samples:he?4:0})),S.getDrawingBufferSize(Pe),he?_e.setSize(Pe.x,Pe.y):_e.setSize(cs(Pe.x),cs(Pe.y));const me=S.getRenderTarget();S.setRenderTarget(_e),S.getClearColor(j),C=S.getClearAlpha(),C<1&&S.setClearColor(16777215,.5),S.clear();const ye=S.toneMapping;S.toneMapping=vn,Li(x,F,G),E.updateMultisampleRenderTarget(_e),E.updateRenderTargetMipmap(_e);let Ae=!1;for(let Be=0,Le=I.length;Be<Le;Be++){const Ie=I[Be],ot=Ie.object,Dt=Ie.geometry,gt=Ie.material,Jt=Ie.group;if(gt.side===qt&&ot.layers.test(G.layers)){const st=gt.side;gt.side=Pt,gt.needsUpdate=!0,Er(ot,F,G,Dt,gt,Jt),gt.side=st,gt.needsUpdate=!0,Ae=!0}}Ae===!0&&(E.updateMultisampleRenderTarget(_e),E.updateRenderTargetMipmap(_e)),S.setRenderTarget(me),S.setClearColor(j,C),S.toneMapping=ye}function Li(x,I,F){const G=I.isScene===!0?I.overrideMaterial:null;for(let N=0,he=x.length;N<he;N++){const me=x[N],ye=me.object,Ae=me.geometry,Be=G===null?me.material:G,Le=me.group;ye.layers.test(F.layers)&&Er(ye,I,F,Ae,Be,Le)}}function Er(x,I,F,G,N,he){x.onBeforeRender(S,I,F,G,N,he),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(S,I,F,G,x,he),N.transparent===!0&&N.side===qt&&N.forceSinglePass===!1?(N.side=Pt,N.needsUpdate=!0,S.renderBufferDirect(F,I,G,N,x,he),N.side=Mn,N.needsUpdate=!0,S.renderBufferDirect(F,I,G,N,x,he),N.side=qt):S.renderBufferDirect(F,I,G,N,x,he),x.onAfterRender(S,I,F,G,N,he)}function Pi(x,I,F){I.isScene!==!0&&(I=we);const G=Oe.get(x),N=p.state.lights,he=p.state.shadowsArray,me=N.state.version,ye=pe.getParameters(x,N.state,he,I,F),Ae=pe.getProgramCacheKey(ye);let Be=G.programs;G.environment=x.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(x.isMeshStandardMaterial?O:v).get(x.envMap||G.environment),Be===void 0&&(x.addEventListener("dispose",ae),Be=new Map,G.programs=Be);let Le=Be.get(Ae);if(Le!==void 0){if(G.currentProgram===Le&&G.lightsStateVersion===me)return Tr(x,ye),Le}else ye.uniforms=pe.getUniforms(x),x.onBuild(F,ye,S),x.onBeforeCompile(ye,S),Le=pe.acquireProgram(ye,Ae),Be.set(Ae,Le),G.uniforms=ye.uniforms;const Ie=G.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ie.clippingPlanes=Fe.uniform),Tr(x,ye),G.needsLights=ko(x),G.lightsStateVersion=me,G.needsLights&&(Ie.ambientLightColor.value=N.state.ambient,Ie.lightProbe.value=N.state.probe,Ie.directionalLights.value=N.state.directional,Ie.directionalLightShadows.value=N.state.directionalShadow,Ie.spotLights.value=N.state.spot,Ie.spotLightShadows.value=N.state.spotShadow,Ie.rectAreaLights.value=N.state.rectArea,Ie.ltc_1.value=N.state.rectAreaLTC1,Ie.ltc_2.value=N.state.rectAreaLTC2,Ie.pointLights.value=N.state.point,Ie.pointLightShadows.value=N.state.pointShadow,Ie.hemisphereLights.value=N.state.hemi,Ie.directionalShadowMap.value=N.state.directionalShadowMap,Ie.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ie.spotShadowMap.value=N.state.spotShadowMap,Ie.spotLightMatrix.value=N.state.spotLightMatrix,Ie.spotLightMap.value=N.state.spotLightMap,Ie.pointShadowMap.value=N.state.pointShadowMap,Ie.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Le,G.uniformsList=null,Le}function yr(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=ns.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function Tr(x,I){const F=Oe.get(x);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function Go(x,I,F,G,N){I.isScene!==!0&&(I=we),E.resetTextureUnits();const he=I.fog,me=G.isMeshStandardMaterial?I.environment:null,ye=b===null?S.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:cn,Ae=(G.isMeshStandardMaterial?O:v).get(G.envMap||me),Be=G.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Le=!!F.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ie=!!F.morphAttributes.position,ot=!!F.morphAttributes.normal,Dt=!!F.morphAttributes.color;let gt=vn;G.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(gt=S.toneMapping);const Jt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,st=Jt!==void 0?Jt.length:0,ze=Oe.get(G),_s=p.state.lights;if(Z===!0&&(le===!0||x!==M)){const Ft=x===M&&G.id===X;Fe.setState(G,x,Ft)}let at=!1;G.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==_s.state.version||ze.outputColorSpace!==ye||N.isBatchedMesh&&ze.batching===!1||!N.isBatchedMesh&&ze.batching===!0||N.isInstancedMesh&&ze.instancing===!1||!N.isInstancedMesh&&ze.instancing===!0||N.isSkinnedMesh&&ze.skinning===!1||!N.isSkinnedMesh&&ze.skinning===!0||N.isInstancedMesh&&ze.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ze.instancingColor===!1&&N.instanceColor!==null||ze.envMap!==Ae||G.fog===!0&&ze.fog!==he||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Fe.numPlanes||ze.numIntersection!==Fe.numIntersection)||ze.vertexAlphas!==Be||ze.vertexTangents!==Le||ze.morphTargets!==Ie||ze.morphNormals!==ot||ze.morphColors!==Dt||ze.toneMapping!==gt||Ce.isWebGL2===!0&&ze.morphTargetsCount!==st)&&(at=!0):(at=!0,ze.__version=G.version);let En=ze.currentProgram;at===!0&&(En=Pi(G,I,N));let wr=!1,pi=!1,vs=!1;const xt=En.getUniforms(),yn=ze.uniforms;if(fe.useProgram(En.program)&&(wr=!0,pi=!0,vs=!0),G.id!==X&&(X=G.id,pi=!0),wr||M!==x){xt.setValue(U,"projectionMatrix",x.projectionMatrix),xt.setValue(U,"viewMatrix",x.matrixWorldInverse);const Ft=xt.map.cameraPosition;Ft!==void 0&&Ft.setValue(U,De.setFromMatrixPosition(x.matrixWorld)),Ce.logarithmicDepthBuffer&&xt.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xt.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,pi=!0,vs=!0)}if(N.isSkinnedMesh){xt.setOptional(U,N,"bindMatrix"),xt.setOptional(U,N,"bindMatrixInverse");const Ft=N.skeleton;Ft&&(Ce.floatVertexTextures?(Ft.boneTexture===null&&Ft.computeBoneTexture(),xt.setValue(U,"boneTexture",Ft.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(xt.setOptional(U,N,"batchingTexture"),xt.setValue(U,"batchingTexture",N._matricesTexture,E));const xs=F.morphAttributes;if((xs.position!==void 0||xs.normal!==void 0||xs.color!==void 0&&Ce.isWebGL2===!0)&&He.update(N,F,En),(pi||ze.receiveShadow!==N.receiveShadow)&&(ze.receiveShadow=N.receiveShadow,xt.setValue(U,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(yn.envMap.value=Ae,yn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),pi&&(xt.setValue(U,"toneMappingExposure",S.toneMappingExposure),ze.needsLights&&zo(yn,vs),he&&G.fog===!0&&oe.refreshFogUniforms(yn,he),oe.refreshMaterialUniforms(yn,G,Y,k,_e),ns.upload(U,yr(ze),yn,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ns.upload(U,yr(ze),yn,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xt.setValue(U,"center",N.center),xt.setValue(U,"modelViewMatrix",N.modelViewMatrix),xt.setValue(U,"normalMatrix",N.normalMatrix),xt.setValue(U,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ft=G.uniformsGroups;for(let Ms=0,Ho=Ft.length;Ms<Ho;Ms++)if(Ce.isWebGL2){const br=Ft[Ms];Ye.update(br,En),Ye.bind(br,En)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return En}function zo(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function ko(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(x,I,F){Oe.get(x.texture).__webglTexture=I,Oe.get(x.depthTexture).__webglTexture=F;const G=Oe.get(x);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=F===void 0,G.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,I){const F=Oe.get(x);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,F=0){b=x,P=I,A=F;let G=!0,N=null,he=!1,me=!1;if(x){const Ae=Oe.get(x);Ae.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(U.FRAMEBUFFER,null),G=!1):Ae.__webglFramebuffer===void 0?E.setupRenderTarget(x):Ae.__hasExternalTextures&&E.rebindTextures(x,Oe.get(x.texture).__webglTexture,Oe.get(x.depthTexture).__webglTexture);const Be=x.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(me=!0);const Le=Oe.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Le[I])?N=Le[I][F]:N=Le[I],he=!0):Ce.isWebGL2&&x.samples>0&&E.useMultisampledRTT(x)===!1?N=Oe.get(x).__webglMultisampledFramebuffer:Array.isArray(Le)?N=Le[F]:N=Le,T.copy(x.viewport),B.copy(x.scissor),z=x.scissorTest}else T.copy(q).multiplyScalar(Y).floor(),B.copy(te).multiplyScalar(Y).floor(),z=ne;if(fe.bindFramebuffer(U.FRAMEBUFFER,N)&&Ce.drawBuffers&&G&&fe.drawBuffers(x,N),fe.viewport(T),fe.scissor(B),fe.setScissorTest(z),he){const Ae=Oe.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ae.__webglTexture,F)}else if(me){const Ae=Oe.get(x.texture),Be=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ae.__webglTexture,F||0,Be)}X=-1},this.readRenderTargetPixels=function(x,I,F,G,N,he,me){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Oe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye){fe.bindFramebuffer(U.FRAMEBUFFER,ye);try{const Ae=x.texture,Be=Ae.format,Le=Ae.type;if(Be!==Kt&&de.convert(Be)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Le===bi&&(Me.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Le!==xn&&de.convert(Le)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===gn&&(Ce.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-G&&F>=0&&F<=x.height-N&&U.readPixels(I,F,G,N,de.convert(Be),de.convert(Le),he)}finally{const Ae=b!==null?Oe.get(b).__webglFramebuffer:null;fe.bindFramebuffer(U.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(x,I,F=0){const G=Math.pow(2,-F),N=Math.floor(I.image.width*G),he=Math.floor(I.image.height*G);E.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,x.x,x.y,N,he),fe.unbindTexture()},this.copyTextureToTexture=function(x,I,F,G=0){const N=I.image.width,he=I.image.height,me=de.convert(F.format),ye=de.convert(F.type);E.setTexture2D(F,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment),I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,G,x.x,x.y,N,he,me,ye,I.image.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,G,x.x,x.y,I.mipmaps[0].width,I.mipmaps[0].height,me,I.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,G,x.x,x.y,me,ye,I.image),G===0&&F.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(x,I,F,G,N=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=x.max.x-x.min.x+1,me=x.max.y-x.min.y+1,ye=x.max.z-x.min.z+1,Ae=de.convert(G.format),Be=de.convert(G.type);let Le;if(G.isData3DTexture)E.setTexture3D(G,0),Le=U.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)E.setTexture2DArray(G,0),Le=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);const Ie=U.getParameter(U.UNPACK_ROW_LENGTH),ot=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Dt=U.getParameter(U.UNPACK_SKIP_PIXELS),gt=U.getParameter(U.UNPACK_SKIP_ROWS),Jt=U.getParameter(U.UNPACK_SKIP_IMAGES),st=F.isCompressedTexture?F.mipmaps[N]:F.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,st.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,x.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,x.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,x.min.z),F.isDataTexture||F.isData3DTexture?U.texSubImage3D(Le,N,I.x,I.y,I.z,he,me,ye,Ae,Be,st.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Le,N,I.x,I.y,I.z,he,me,ye,Ae,st.data)):U.texSubImage3D(Le,N,I.x,I.y,I.z,he,me,ye,Ae,Be,st),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ie),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ot),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Dt),U.pixelStorei(U.UNPACK_SKIP_ROWS,gt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Jt),N===0&&G.generateMipmaps&&U.generateMipmap(Le),fe.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?E.setTextureCube(x,0):x.isData3DTexture?E.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?E.setTexture2DArray(x,0):E.setTexture2D(x,0),fe.unbindTexture()},this.resetState=function(){P=0,A=0,b=null,fe.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ur?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===us?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vt?Un:ho}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Un?vt:cn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ap extends mr{}ap.prototype.isWebGL1Renderer=!0;class gr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new gr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Uo extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class gs extends di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qa=new lt,or=new vo,es=new ds,ts=new L;class _r extends ut{constructor(e=new Lt,t=new gs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(i),es.radius+=r,e.ray.intersectsSphere(es)===!1)return;qa.copy(i).invert(),or.copy(e.ray).applyMatrix4(qa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const p=l.getX(g);ts.fromBufferAttribute(d,p),Ya(ts,p,c,i,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=f,_=m;g<_;g++)ts.fromBufferAttribute(d,g),Ya(ts,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ya(s,e,t,n,i,r,o){const a=or.distanceSqToPoint(s);if(a<t){const c=new L;or.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Ka extends It{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ln extends Lt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],m=[];let g=0;const _=[],p=n/2;let u=0;y(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(m,2));function y(){const w=new L,P=new L;let A=0;const b=(t-e)/n;for(let X=0;X<=r;X++){const M=[],T=X/r,B=T*(t-e)+e;for(let z=0;z<=i;z++){const j=z/i,C=j*c+a,D=Math.sin(C),k=Math.cos(C);P.x=B*D,P.y=-T*n+p,P.z=B*k,d.push(P.x,P.y,P.z),w.set(D,b,k).normalize(),f.push(w.x,w.y,w.z),m.push(j,1-T),M.push(g++)}_.push(M)}for(let X=0;X<i;X++)for(let M=0;M<r;M++){const T=_[M][X],B=_[M+1][X],z=_[M+1][X+1],j=_[M][X+1];h.push(T,B,j),h.push(B,z,j),A+=6}l.addGroup(u,A,0),u+=A}function S(w){const P=g,A=new We,b=new L;let X=0;const M=w===!0?e:t,T=w===!0?1:-1;for(let z=1;z<=i;z++)d.push(0,p*T,0),f.push(0,T,0),m.push(.5,.5),g++;const B=g;for(let z=0;z<=i;z++){const C=z/i*c+a,D=Math.cos(C),k=Math.sin(C);b.x=M*k,b.y=p*T,b.z=M*D,d.push(b.x,b.y,b.z),f.push(0,T,0),A.x=D*.5+.5,A.y=k*.5*T+.5,m.push(A.x,A.y),g++}for(let z=0;z<i;z++){const j=P+z,C=B+z;w===!0?h.push(C,C+1,j):h.push(C+1,C,j),X+=3}l.addGroup(u,X,w===!0?1:2),u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ri extends ln{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ri(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vr extends Lt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let d=e;const f=(t-e)/i,m=new L,g=new We;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){const u=r+p/n*o;m.x=d*Math.cos(u),m.y=d*Math.sin(u),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}d+=f}for(let _=0;_<i;_++){const p=_*(n+1);for(let u=0;u<n;u++){const y=u+p,S=y,w=y+n+1,P=y+n+2,A=y+1;a.push(S,w,A),a.push(w,P,A)}}this.setIndex(a),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class $t extends Lt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new L,f=new L,m=[],g=[],_=[],p=[];for(let u=0;u<=n;u++){const y=[],S=u/n;let w=0;u===0&&o===0?w=.5/t:u===n&&c===Math.PI&&(w=-.5/t);for(let P=0;P<=t;P++){const A=P/t;d.x=-e*Math.cos(i+A*r)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(i+A*r)*Math.sin(o+S*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(A+w,1-S),y.push(l++)}h.push(y)}for(let u=0;u<n;u++)for(let y=0;y<t;y++){const S=h[u][y+1],w=h[u][y],P=h[u+1][y],A=h[u+1][y+1];(u!==0||o>0)&&m.push(S,w,A),(u!==n-1||c<Math.PI)&&m.push(w,P,A)}this.setIndex(m),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xr extends Lt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new L,d=new L,f=new L;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const _=g/i*r,p=m/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(_),d.y=(e+t*Math.cos(p))*Math.sin(_),d.z=t*Math.sin(p),a.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const _=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,u=(i+1)*(m-1)+g,y=(i+1)*m+g;o.push(_,p,y),o.push(p,u,y)}this.setIndex(o),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ee extends di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uo,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ci extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class op extends Ci{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Zs=new lt,ja=new L,Za=new L;class Mr{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ja.setFromMatrixPosition(e.matrixWorld),t.position.copy(ja),Za.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Za),t.updateMatrixWorld(),Zs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cp extends Mr{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ci*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class lp extends Ci{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new cp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const $a=new lt,xi=new L,$s=new L;class hp extends Mr{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xi.setFromMatrixPosition(e.matrixWorld),n.position.copy(xi),$s.copy(n.position),$s.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($s),n.updateMatrixWorld(),i.makeTranslation(-xi.x,-xi.y,-xi.z),$a.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a)}}class Js extends Ci{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new hp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class up extends Mr{constructor(){super(new Ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class No extends Ci{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new up}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Oo extends Ci{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lr);class dp{constructor(e){this.container=e,this.scene=new Uo,this.quality="HIGH",this.scene.background=new Ve(793408),this.scene.fog=new gr(991826,.005),this.camera=new Ct(60,window.innerWidth/window.innerHeight,.1,350),this.renderer=new mr({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Qa,this.renderer.toneMapping=to,this.renderer.toneMappingExposure=1.45,this.container.appendChild(this.renderer.domElement),this.initLights(),window.addEventListener("resize",()=>this.onWindowResize())}initLights(){this.ambientLight=new Oo(4878245,2.2),this.scene.add(this.ambientLight),this.hemiLight=new op(62463,7940298,1.8),this.scene.add(this.hemiLight),this.dirLight=new No(16777215,2.5),this.dirLight.position.set(25,45,-20),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=1,this.dirLight.shadow.camera.far=150;const e=40;this.dirLight.shadow.camera.left=-e,this.dirLight.shadow.camera.right=e,this.dirLight.shadow.camera.top=e,this.dirLight.shadow.camera.bottom=-e,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight),this.cyanPointLight=new Js(62463,4,80),this.cyanPointLight.position.set(0,6,15),this.scene.add(this.cyanPointLight),this.pinkPointLight=new Js(16711807,3.5,80),this.pinkPointLight.position.set(-12,10,30),this.scene.add(this.pinkPointLight),this.goldPointLight=new Js(16766720,3.5,80),this.goldPointLight.position.set(12,10,30),this.scene.add(this.goldPointLight)}setQuality(e){this.quality=e,e==="LOW"?(this.renderer.shadowMap.enabled=!1,this.renderer.setPixelRatio(1),this.scene.fog.density=.004):e==="MEDIUM"?(this.renderer.shadowMap.enabled=!0,this.dirLight.shadow.mapSize.width=1024,this.dirLight.shadow.mapSize.height=1024,this.renderer.setPixelRatio(1.25),this.scene.fog.density=.005):(this.renderer.shadowMap.enabled=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene.fog.density=.005)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}render(){this.renderer.render(this.scene,this.camera)}}class fp{constructor(e){this.camera=e,this.camera.up.set(0,1,0),this.baseOffset=new L(0,3.2,-7.5),this.lookOffset=new L(0,1.8,12),this.currentPos=new L(0,3.2,-7.5),this.currentLookAt=new L(0,1.8,12),this.shakeIntensity=0,this.shakeDecay=5}triggerShake(e=.5){this.shakeIntensity=Math.max(this.shakeIntensity,e)}updateMenuCamera(e,t){const n=new L(0,3.2,e.z-8),i=new L(0,1.8,e.z+22);this.currentPos.lerp(n,.1),this.currentLookAt.lerp(i,.1),this.camera.up.set(0,1,0),this.camera.position.copy(this.currentPos),this.camera.lookAt(this.currentLookAt)}update(e,t,n,i){const r=e.x*.65,o=Math.max(e.y+3.2,3.2),a=e.z+this.baseOffset.z,c=new L(r,o,a),l=new L(e.x*.4,e.y+this.lookOffset.y,e.z+this.lookOffset.z);if(this.shakeIntensity>0){const d=(Math.random()-.5)*this.shakeIntensity,f=(Math.random()-.5)*this.shakeIntensity;c.x+=d,c.y+=f,this.shakeIntensity=Math.max(0,this.shakeIntensity-this.shakeDecay*i)}const h=1-Math.exp(-12*i);this.currentPos.lerp(c,h),this.currentLookAt.lerp(l,h),this.camera.up.set(0,1,0),this.camera.position.copy(this.currentPos),this.camera.lookAt(this.currentLookAt)}}class pp{constructor(){this.ctx=null,this.isMuted=!1,this.volumes={master:.9,music:.4,train:.7,voice:.9,sfx:.6,ambience:.3},this.masterGain=null,this.musicGain=null,this.trainGain=null,this.sfxGain=null,this.ambienceGain=null,this.isPlayingMusic=!1,this.musicInterval=null,this.stepCount=0}init(){if(this.ctx)return;const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.volumes.master,this.masterGain.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this.volumes.music,this.musicGain.connect(this.masterGain),this.trainGain=this.ctx.createGain(),this.trainGain.gain.value=this.volumes.train,this.trainGain.connect(this.masterGain),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=this.volumes.sfx,this.sfxGain.connect(this.masterGain),this.ambienceGain=this.ctx.createGain(),this.ambienceGain.gain.value=this.volumes.ambience,this.ambienceGain.connect(this.masterGain),this.startAmbience())}resumeCtx(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(e,t){this.volumes[e]=t,this.ctx&&(e==="master"&&this.masterGain?this.masterGain.gain.value=t:e==="music"&&this.musicGain?this.musicGain.gain.value=t:e==="train"&&this.trainGain?this.trainGain.gain.value=t:e==="sfx"&&this.sfxGain?this.sfxGain.gain.value=t:e==="ambience"&&this.ambienceGain&&(this.ambienceGain.gain.value=t))}toggleMute(e){this.isMuted=e,this.masterGain&&(this.masterGain.gain.value=e?0:this.volumes.master)}playSpatialTrainHorn(e,t){if(this.isMuted||!this.ctx)return;this.resumeCtx();let n;this.ctx.createStereoPanner?(n=this.ctx.createStereoPanner(),n.pan.setValueAtTime(e/3,this.ctx.currentTime)):n=this.ctx.createGain();const i=this.ctx.createOscillator(),r=this.ctx.createOscillator(),o=this.ctx.createGain();i.type="sawtooth",r.type="sawtooth",i.frequency.setValueAtTime(293.66,this.ctx.currentTime),r.frequency.setValueAtTime(349.23,this.ctx.currentTime),o.gain.setValueAtTime(.3,this.ctx.currentTime),o.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.6),i.connect(o),r.connect(o),o.connect(n),n.connect(this.trainGain),i.start(),r.start(),i.stop(this.ctx.currentTime+.6),r.stop(this.ctx.currentTime+.6)}playJump(){if(this.isMuted||!this.ctx)return;this.resumeCtx();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(150,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(450,this.ctx.currentTime+.18),t.gain.setValueAtTime(.4,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.2),e.connect(t),t.connect(this.sfxGain),e.start(),e.stop(this.ctx.currentTime+.2)}playSlide(){if(this.isMuted||!this.ctx)return;this.resumeCtx();const e=this.ctx.sampleRate*.15,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let a=0;a<e;a++)n[a]=Math.random()*2-1;const i=this.ctx.createBufferSource();i.buffer=t;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(1200,this.ctx.currentTime),r.frequency.linearRampToValueAtTime(300,this.ctx.currentTime+.15);const o=this.ctx.createGain();o.gain.setValueAtTime(.5,this.ctx.currentTime),o.gain.linearRampToValueAtTime(.01,this.ctx.currentTime+.15),i.connect(r),r.connect(o),o.connect(this.sfxGain),i.start()}playCoin(){if(this.isMuted||!this.ctx)return;this.resumeCtx();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(987.77,this.ctx.currentTime),e.frequency.setValueAtTime(1318.51,this.ctx.currentTime+.06),t.gain.setValueAtTime(.3,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.18),e.connect(t),t.connect(this.sfxGain),e.start(),e.stop(this.ctx.currentTime+.18)}playPowerup(){if(this.isMuted||!this.ctx)return;this.resumeCtx(),[523.25,659.25,783.99,1046.5].forEach((t,n)=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(t,this.ctx.currentTime+n*.05),r.gain.setValueAtTime(.3,this.ctx.currentTime+n*.05),r.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+n*.05+.15),i.connect(r),r.connect(this.sfxGain),i.start(this.ctx.currentTime+n*.05),i.stop(this.ctx.currentTime+n*.05+.15)})}playCrash(){if(this.isMuted||!this.ctx)return;this.resumeCtx();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(120,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(30,this.ctx.currentTime+.4),t.gain.setValueAtTime(.8,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.4),e.connect(t),t.connect(this.sfxGain),e.start(),e.stop(this.ctx.currentTime+.4)}playCountdown(e){if(this.isMuted||!this.ctx)return;this.resumeCtx();const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine";const i=e===0?880:440;t.frequency.setValueAtTime(i,this.ctx.currentTime),n.gain.setValueAtTime(.4,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+(e===0?.35:.2)),t.connect(n),n.connect(this.sfxGain),t.start(),t.stop(this.ctx.currentTime+(e===0?.35:.2))}playClick(){if(this.isMuted||!this.ctx)return;this.resumeCtx();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(600,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(200,this.ctx.currentTime+.05),t.gain.setValueAtTime(.3,this.ctx.currentTime),t.gain.linearRampToValueAtTime(.01,this.ctx.currentTime+.05),e.connect(t),t.connect(this.sfxGain),e.start(),e.stop(this.ctx.currentTime+.05)}startAmbience(){if(!this.ctx)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(55,this.ctx.currentTime),t.gain.setValueAtTime(.05,this.ctx.currentTime),e.connect(t),t.connect(this.ambienceGain),e.start()}startMusic(){if(this.isPlayingMusic)return;this.init(),this.resumeCtx(),this.isPlayingMusic=!0;const e=[110,110,130.81,146.83,110,110,98,110],t=[440,523.25,659.25,587.33,659.25,783.99,659.25,523.25];this.musicInterval=setInterval(()=>{if(!this.isPlayingMusic||!this.ctx||this.isMuted)return;const n=this.stepCount%16,i=e[n%8];if(n%4===0){const a=this.ctx.createOscillator(),c=this.ctx.createGain();a.frequency.setValueAtTime(140,this.ctx.currentTime),a.frequency.exponentialRampToValueAtTime(35,this.ctx.currentTime+.08),c.gain.setValueAtTime(.4,this.ctx.currentTime),c.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.08),a.connect(c),c.connect(this.musicGain),a.start(),a.stop(this.ctx.currentTime+.08)}const r=this.ctx.createOscillator(),o=this.ctx.createGain();if(r.type="sawtooth",r.frequency.setValueAtTime(i/2,this.ctx.currentTime),o.gain.setValueAtTime(.15,this.ctx.currentTime),o.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.1),r.connect(o),o.connect(this.musicGain),r.start(),r.stop(this.ctx.currentTime+.1),n%2===0&&Math.random()>.2){const a=this.ctx.createOscillator(),c=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(t[n/2%8],this.ctx.currentTime),c.gain.setValueAtTime(.08,this.ctx.currentTime),c.gain.exponentialRampToValueAtTime(.005,this.ctx.currentTime+.15),a.connect(c),c.connect(this.musicGain),a.start(),a.stop(this.ctx.currentTime+.15)}this.stepCount++},125)}stopMusic(){this.isPlayingMusic=!1,this.musicInterval&&(clearInterval(this.musicInterval),this.musicInterval=null)}}const ve=new pp;class Fo{constructor(e){this.scene=e,this.characterType="BOY",this.lane=0,this.laneWidth=2.5,this.targetX=0,this.position=new L(0,0,0),this.velocity=new L,this.gravity=-36,this.jumpForce=13.5,this.superJumpForce=22,this.isGrounded=!0,this.isJumping=!1,this.isSliding=!1,this.slideTimer=0,this.slideDuration=.8,this.isRocketFlying=!1,this.rocketTargetY=8.5,this.box=new Sn,this.width=1,this.height=1.8,this.depth=.8,this.animTime=0,this.landingEffectTimer=0,this.compressionScale=1,this.shieldActive=!1,this.magnetActive=!1,this.speedActive=!1,this.doubleScoreActive=!1,this.superJumpActive=!1,this.rocketActive=!1,this.mesh=new Ze,this.buildCharacterMesh(this.characterType),this.buildPowerUpAuras(),this.initLandingParticles(),this.scene.add(this.mesh)}initLandingParticles(){const t=new Lt,n=new Float32Array(24*3);t.setAttribute("position",new Ot(n,3));const i=new gs({color:62463,size:.4,transparent:!0,opacity:.85,blending:yi});this.landingParticles=new _r(t,i),this.landingParticles.visible=!1,this.scene.add(this.landingParticles)}triggerLandingDust(){if(!this.landingParticles)return;this.landingParticles.position.copy(this.position);const e=this.landingParticles.geometry.attributes.position,t=e.array;for(let n=0;n<t.length/3;n++)t[n*3]=(Math.random()-.5)*2.2,t[n*3+1]=Math.random()*.5,t[n*3+2]=(Math.random()-.5)*2.2;e.needsUpdate=!0,this.landingParticles.visible=!0,this.landingEffectTimer=.3,this.compressionScale=.75}setCharacterType(e){this.characterType=e,this.scene.remove(this.mesh),this.mesh=new Ze,this.buildCharacterMesh(e),this.buildPowerUpAuras(),this.scene.add(this.mesh)}buildCharacterMesh(e){if(this.characterGroup=new Ze,e==="ROBOT"){const i=new Ee({color:8952240,metalness:.9,roughness:.2}),r=new $e({color:62463}),o=new $e({color:16711807}),a=new K(new ce(.65,.85,.4),i);a.position.y=1.1,this.characterGroup.add(a),this.coreReactor=new K(new $t(.12,12,12),r),this.coreReactor.position.set(0,1.25,.22),this.characterGroup.add(this.coreReactor),this.headGroup=new Ze,this.headGroup.position.set(0,1.75,0);const c=new K(new ce(.4,.4,.4),i);this.headGroup.add(c);const l=new K(new ce(.32,.1,.42),o);l.position.set(0,.05,.02),this.headGroup.add(l),this.characterGroup.add(this.headGroup),this.leftArmPivot=this.createPivot(-.42,1.4,i),this.rightArmPivot=this.createPivot(.42,1.4,i),this.leftLegPivot=this.createPivot(-.2,.7,i),this.rightLegPivot=this.createPivot(.2,.7,i),this.characterGroup.add(this.leftArmPivot,this.rightArmPivot,this.leftLegPivot,this.rightLegPivot)}else if(e==="POLICE"){const i=new Ee({color:14723200,roughness:.5}),r=new Ee({color:1122884,roughness:.5}),o=new Ee({color:660520,roughness:.4}),a=new Ee({color:16766720,metalness:.9,roughness:.1}),c=new $e({color:329748}),l=new K(new ce(.7,.82,.4),o);l.position.y=1.1,this.characterGroup.add(l);const h=new K(new ce(.12,.15,.42),a);h.position.set(-.18,1.3,.02),this.characterGroup.add(h),this.headGroup=new Ze,this.headGroup.position.set(0,1.7,0);const d=new K(new ce(.42,.45,.42),i);this.headGroup.add(d);const f=new K(new ce(.46,.15,.48),r);f.position.set(0,.22,0),this.headGroup.add(f);const m=new K(new ce(.36,.1,.44),c);m.position.set(0,.04,.02),this.headGroup.add(m),this.characterGroup.add(this.headGroup),this.leftArmPivot=this.createPivot(-.44,1.4,r),this.rightArmPivot=this.createPivot(.44,1.4,r),this.leftLegPivot=this.createPivot(-.2,.7,r),this.rightLegPivot=this.createPivot(.2,.7,r),this.characterGroup.add(this.leftArmPivot,this.rightArmPivot,this.leftLegPivot,this.rightLegPivot)}else if(e==="GIRL"){const i=new Ee({color:15911072,roughness:.5}),r=new Ee({color:6693376,roughness:.8}),o=new Ee({color:16711807,roughness:.4}),a=new Ee({color:1115436,roughness:.6}),c=new Ee({color:62463,roughness:.3}),l=new K(new ce(.6,.75,.36),o);l.position.y=1.05,this.characterGroup.add(l),this.headGroup=new Ze,this.headGroup.position.set(0,1.65,0);const h=new K(new ce(.38,.4,.38),i);this.headGroup.add(h);const d=new K(new ce(.42,.2,.42),r);d.position.set(0,.2,-.02),this.headGroup.add(d),this.ponytail=new K(new ln(.08,.12,.4),r),this.ponytail.position.set(0,.1,-.28),this.ponytail.rotation.x=.4,this.headGroup.add(this.ponytail),this.characterGroup.add(this.headGroup),this.leftArmPivot=this.createPivot(-.38,1.35,o),this.rightArmPivot=this.createPivot(.38,1.35,o),this.leftLegPivot=this.createPivot(-.16,.68,a,c),this.rightLegPivot=this.createPivot(.16,.68,a,c),this.characterGroup.add(this.leftArmPivot,this.rightArmPivot,this.leftLegPivot,this.rightLegPivot)}else if(e==="ALIEN"){const i=new Ee({color:65416,roughness:.2,metalness:.8}),r=new Ee({color:1122884,roughness:.4}),o=new $e({color:62463}),a=new K(new ce(.5,.8,.35),r);a.position.y=1.1,this.characterGroup.add(a),this.headGroup=new Ze,this.headGroup.position.set(0,1.7,0);const c=new K(new $t(.32,12,12),i);this.headGroup.add(c);const l=new K(new $t(.08,8,8),o);l.position.set(-.12,.05,.28);const h=new K(new $t(.08,8,8),o);h.position.set(.12,.05,.28),this.headGroup.add(l,h),this.characterGroup.add(this.headGroup),this.leftArmPivot=this.createPivot(-.35,1.4,r),this.rightArmPivot=this.createPivot(.35,1.4,r),this.leftLegPivot=this.createPivot(-.15,.7,r),this.rightLegPivot=this.createPivot(.15,.7,r),this.characterGroup.add(this.leftArmPivot,this.rightArmPivot,this.leftLegPivot,this.rightLegPivot)}else if(e==="DOG"||e==="CAT"){const i=e==="DOG",r=new Ee({color:i?13935475:4869737,roughness:.8}),o=new $e({color:i?16711765:62463}),a=new K(new ce(.45,.45,.8),r);a.position.y=.5,this.characterGroup.add(a);const c=new K(new ce(.47,.08,.47),o);c.position.set(0,.52,-.25),this.characterGroup.add(c),this.headGroup=new Ze,this.headGroup.position.set(0,.75,.35);const l=new K(new ce(.35,.35,.35),r);this.headGroup.add(l);const h=i?new ce(.1,.2,.1):new Ri(.1,.25,4),d=new K(h,r);d.position.set(-.15,.25,0);const f=new K(h,r);f.position.set(.15,.25,0),this.headGroup.add(d,f),this.tail=new K(new ln(.04,.06,.4),r),this.tail.position.set(0,.6,-.45),this.tail.rotation.x=-Math.PI/4,this.characterGroup.add(this.tail),this.characterGroup.add(this.headGroup),this.leftArmPivot=this.createLegPivot(-.18,.4,.25,r),this.rightArmPivot=this.createLegPivot(.18,.4,.25,r),this.leftLegPivot=this.createLegPivot(-.18,.4,-.25,r),this.rightLegPivot=this.createLegPivot(.18,.4,-.25,r),this.characterGroup.add(this.leftArmPivot,this.rightArmPivot,this.leftLegPivot,this.rightLegPivot)}else{const i=new Ee({color:14723200,roughness:.5}),r=new Ee({color:62463,roughness:.3}),o=new Ee({color:1712696,roughness:.7}),a=new Ee({color:16711807,roughness:.4}),c=new K(new ce(.7,.8,.4),r);c.position.y=1.1,this.characterGroup.add(c),this.headGroup=new Ze,this.headGroup.position.set(0,1.7,0);const l=new K(new ce(.42,.45,.42),i);this.headGroup.add(l),this.characterGroup.add(this.headGroup),this.leftArmPivot=this.createPivot(-.45,1.4,r),this.rightArmPivot=this.createPivot(.45,1.4,r),this.leftLegPivot=this.createPivot(-.2,.7,o,a),this.rightLegPivot=this.createPivot(.2,.7,o,a),this.characterGroup.add(this.leftArmPivot,this.rightArmPivot,this.leftLegPivot,this.rightLegPivot)}const t=new ce(1.2,.25,2.2),n=new Ee({color:16763904,metalness:.9,emissive:8930304});this.rocketBoard=new K(t,n),this.rocketBoard.position.set(0,-.15,0),this.rocketBoard.visible=!1,this.characterGroup.add(this.rocketBoard),this.mesh.add(this.characterGroup)}createPivot(e,t,n,i=null){const r=new Ze;r.position.set(e,t,0);const o=new K(new ce(.2,.7,.2),n);if(o.position.y=-.35,r.add(o),i){const a=new K(new ce(.24,.18,.36),i);a.position.set(0,-.65,.08),r.add(a)}return r}createLegPivot(e,t,n,i){const r=new Ze;r.position.set(e,t,n);const o=new K(new ce(.14,.4,.14),i);return o.position.y=-.2,r.add(o),r}buildPowerUpAuras(){const e=new $t(1.4,16,16),t=new $e({color:62463,transparent:!0,opacity:.4,wireframe:!0});this.shieldMesh=new K(e,t),this.shieldMesh.position.y=1,this.shieldMesh.visible=!1,this.mesh.add(this.shieldMesh)}moveLeft(){this.lane>-1&&(this.lane--,this.targetX=this.lane*this.laneWidth,ve.playSlide())}moveRight(){this.lane<1&&(this.lane++,this.targetX=this.lane*this.laneWidth,ve.playSlide())}jump(){if(this.isGrounded&&!this.isSliding&&!this.isRocketFlying){this.isJumping=!0,this.isGrounded=!1;const e=this.superJumpActive?this.superJumpForce:this.jumpForce;this.velocity.y=e,this.characterType==="DOG"||this.characterType==="CAT"?ve.playClick():ve.playJump()}}slide(){this.isGrounded&&!this.isSliding&&!this.isRocketFlying?(this.isSliding=!0,this.slideTimer=this.slideDuration,ve.playSlide()):this.isJumping&&(this.velocity.y=-25)}setRocketFlight(e){this.isRocketFlying=e,this.rocketBoard.visible=e}update(e,t){const n=t/12*12;this.animTime+=e*n,this.position.x=Bn.lerp(this.position.x,this.targetX,.28);const i=this.targetX-this.position.x;this.mesh.rotation.z=Bn.lerp(this.mesh.rotation.z,-i*.16,.2),this.mesh.rotation.y=Bn.lerp(this.mesh.rotation.y,i*.08,.2),this.isRocketFlying?(this.position.y=Bn.lerp(this.position.y,this.rocketTargetY,.1),this.isGrounded=!1):this.isGrounded||(this.velocity.y+=this.gravity*e,this.position.y+=this.velocity.y*e,this.position.y<=0&&(this.position.y=0,this.velocity.y=0,this.isGrounded=!0,this.isJumping=!1,this.triggerLandingDust())),this.isSliding&&(this.slideTimer-=e,this.slideTimer<=0&&(this.isSliding=!1)),this.landingEffectTimer>0&&(this.landingEffectTimer-=e,this.landingEffectTimer<=0&&this.landingParticles&&(this.landingParticles.visible=!1)),this.compressionScale<1&&(this.compressionScale=Bn.lerp(this.compressionScale,1,.15)),this.mesh.position.copy(this.position),this.mesh.scale.set(1,this.compressionScale,1),this.updateAnimations(t),this.updateHitbox()}updateAnimations(e){if(this.coreReactor&&this.coreReactor.scale.setScalar(1+Math.sin(this.animTime*4)*.2),this.isRocketFlying){this.characterGroup.rotation.x=-.18,this.leftArmPivot.rotation.x=-Math.PI/4,this.rightArmPivot.rotation.x=-Math.PI/4;return}if(this.isSliding)this.characterGroup.position.y=-.42,this.characterGroup.rotation.x=-Math.PI/3,this.leftArmPivot.rotation.x=-Math.PI/2,this.rightArmPivot.rotation.x=-Math.PI/2,this.leftLegPivot.rotation.x=Math.PI/4,this.rightLegPivot.rotation.x=Math.PI/4;else if(this.isJumping)this.characterGroup.position.y=0,this.characterGroup.rotation.x=Bn.clamp(-this.velocity.y*.035,-.45,.45),this.leftArmPivot.rotation.x=-Math.PI/2,this.rightArmPivot.rotation.x=-Math.PI/2,this.leftLegPivot.rotation.x=-.5,this.rightLegPivot.rotation.x=.5;else{const t=Math.abs(Math.sin(this.animTime*2))*.08;this.characterGroup.position.y=t,this.characterGroup.rotation.x=.06;const n=Math.sin(this.animTime)*.85;this.leftArmPivot.rotation.x=n,this.rightArmPivot.rotation.x=-n,this.leftLegPivot.rotation.x=-n,this.rightLegPivot.rotation.x=n,this.ponytail&&(this.ponytail.rotation.z=Math.sin(this.animTime)*.15),this.tail&&(this.tail.rotation.y=Math.sin(this.animTime*2)*.3)}}updateHitbox(){const e=this.isSliding?.45:.9,t=this.isSliding?.9:this.height;this.box.setFromCenterAndSize(new L(this.position.x,this.position.y+e,this.position.z),new L(this.width,t,this.depth))}setPowerupVisual(e,t){e==="SHIELD"||e==="SAFETY_BUBBLE"?(this.shieldActive=t,this.shieldMesh.visible=t):e==="JUMP_SHOES"||e==="JUMP"?this.superJumpActive=t:e==="AIR_ROCKET"&&this.setRocketFlight(t)}reset(){this.lane=0,this.targetX=0,this.position.set(0,0,0),this.velocity.set(0,0,0),this.isGrounded=!0,this.isJumping=!1,this.isSliding=!1,this.isRocketFlying=!1,this.rocketBoard.visible=!1,this.compressionScale=1,this.landingParticles&&(this.landingParticles.visible=!1)}}class mp{constructor(e){this.scene=e,this.chunkLength=60,this.visibleChunks=6,this.chunks=[],this.railGeo=new ce(.14,.16,this.chunkLength),this.sleeperGeo=new ce(2.1,.1,.3),this.ballastGeo=new ce(10,.4,this.chunkLength),this.catenaryPoleGeo=new ln(.16,.22,9.5,8),this.catenaryBeamGeo=new ce(12.5,.25,.25),this.railMat=new Ee({color:62463,metalness:.9,roughness:.1,emissive:26282,emissiveIntensity:.5}),this.sleeperMat=new Ee({color:3810584,roughness:.8}),this.ballastMat=new Ee({color:1449523,roughness:.9}),this.poleMat=new Ee({color:62463,metalness:.7,emissive:35020,emissiveIntensity:.4}),this.lanes=[-2.5,0,2.5],this.spawnZ=0,this.initTracks()}initTracks(){for(let e=0;e<this.visibleChunks;e++)this.createChunk(e*this.chunkLength)}createChunk(e){const t=new Ze;t.position.z=e;const n=new K(this.ballastGeo,this.ballastMat);n.position.set(0,-.2,0),n.receiveShadow=!0,t.add(n),this.lanes.forEach(i=>{const r=new K(this.railGeo,this.railMat);r.position.set(i-.7,.08,0),r.receiveShadow=!0,t.add(r);const o=new K(this.railGeo,this.railMat);o.position.set(i+.7,.08,0),o.receiveShadow=!0,t.add(o);for(let a=-this.chunkLength/2;a<this.chunkLength/2;a+=2.2){const c=new K(this.sleeperGeo,this.sleeperMat);c.position.set(i,.02,a),c.receiveShadow=!0,t.add(c)}});for(let i=-this.chunkLength/2+15;i<this.chunkLength/2;i+=35){const r=new Ze;r.position.set(0,0,i);const o=new K(this.catenaryPoleGeo,this.poleMat);o.position.set(-6,4.75,0),r.add(o);const a=new K(this.catenaryPoleGeo,this.poleMat);a.position.set(6,4.75,0),r.add(a);const c=new K(this.catenaryBeamGeo,this.poleMat);c.position.set(0,9.2,0),r.add(c);const l=new $t(.35,12,12),h=new K(l,new $e({color:65416}));h.position.set(-2.5,8.7,0),r.add(h);const d=new K(l,new $e({color:16711807}));d.position.set(2.5,8.7,0),r.add(d),t.add(r)}this.scene.add(t),this.chunks.push(t),this.spawnZ=e+this.chunkLength}update(e){if(this.chunks.length>0){const t=this.chunks[0];t.position.z<e-30&&(this.scene.remove(t),this.chunks.shift(),this.createChunk(this.spawnZ))}}reset(){this.chunks.forEach(e=>this.scene.remove(e)),this.chunks=[],this.spawnZ=0,this.initTracks()}}class gp{constructor(e){this.scene=e,this.cityModules=[],this.moduleLength=120,this.spawnZ=0,this.currentMap="NIGHT_METRO",this.buildingTextureCyan=this.createWindowTexture("#0a2048","#00f3ff","#ffcc00"),this.buildingTexturePink=this.createWindowTexture("#280838","#ff007f","#00ff88"),this.billboardTextures={DAY_METRO:this.createBillboardTexture("NEXORA METRO","SPEED • POWER • FUTURE","#00f3ff","#ff007f"),NIGHT_METRO:this.createBillboardTexture("CYBER NIGHTS","NEON CITY METROPOLIS","#ff007f","#00f3ff"),MUMBAI_METRO:this.createBillboardTexture("MUMBAI LOCAL","SUBURBAN EXPRESS RAIL","#ffd700","#ff007f"),CHENNAI_METRO:this.createBillboardTexture("CHENNAI CONNECT","SOUTH METRO POWER","#00ff88","#0066ff"),DHANBAD_RAIL:this.createBillboardTexture("DHANBAD COAL EX","HEAVY INDUSTRIAL RAIL","#ff6600","#00f3ff")},this.initMoonAndSky(),this.initMoonlightTrain();for(let t=0;t<4;t++)this.createCityModule(t*this.moduleLength)}createWindowTexture(e,t,n){const i=document.createElement("canvas");i.width=256,i.height=512;const r=i.getContext("2d");r.fillStyle=e,r.fillRect(0,0,256,512);const o=8,a=16,c=18,l=20,h=12,d=10;for(let m=0;m<a;m++)for(let g=0;g<o;g++){const _=g*(c+h)+10,p=m*(l+d)+15;Math.random()>.3?(r.fillStyle=Math.random()>.5?t:n,r.shadowColor=r.fillStyle,r.shadowBlur=8,r.fillRect(_,p,c,l)):(r.fillStyle="#050a18",r.shadowBlur=0,r.fillRect(_,p,c,l))}const f=new Ka(i);return f.wrapS=Ti,f.wrapT=Ti,f.repeat.set(1,2),f}createBillboardTexture(e,t,n,i){const r=document.createElement("canvas");r.width=512,r.height=256;const o=r.getContext("2d"),a=o.createLinearGradient(0,0,512,256);return a.addColorStop(0,"#0d1b40"),a.addColorStop(1,"#280c48"),o.fillStyle=a,o.fillRect(0,0,512,256),o.strokeStyle=n,o.lineWidth=10,o.shadowColor=n,o.shadowBlur=20,o.strokeRect(15,15,482,226),o.fillStyle="#ffffff",o.font="900 44px sans-serif",o.textAlign="center",o.shadowColor=n,o.shadowBlur=20,o.fillText(e,256,110),o.fillStyle=i,o.font="700 24px sans-serif",o.shadowColor=i,o.shadowBlur=15,o.fillText(t,256,175),new Ka(r)}initMoonAndSky(){this.skyGroup=new Ze;const e=new $t(18,24,24),t=new $e({color:16777215});this.moonMesh=new K(e,t),this.moonMesh.position.set(0,70,210),this.skyGroup.add(this.moonMesh);const n=new vr(18.5,36,32),i=new $e({color:62463,side:qt,transparent:!0,opacity:.5,blending:yi}),r=new K(n,i);r.position.set(0,70,209),this.skyGroup.add(r),this.scene.add(this.skyGroup)}initMoonlightTrain(){this.moonTrainGroup=new Ze,this.moonTrainGroup.position.set(-180,65,205);const e=new ce(38,4.5,3),t=new $e({color:62463}),n=new K(e,t);this.moonTrainGroup.add(n);const i=new ce(35,1.4,3.1),r=new $e({color:16711807}),o=new K(i,r);this.moonTrainGroup.add(o),this.scene.add(this.moonTrainGroup)}setMap(e){this.currentMap=e,this.reset()}createCityModule(e){const t=new Ze;t.position.z=e;const n=new Ee({map:this.buildingTextureCyan,emissiveMap:this.buildingTextureCyan,emissive:35020,emissiveIntensity:.6,roughness:.4}),i=new Ee({map:this.buildingTexturePink,emissiveMap:this.buildingTexturePink,emissive:13369446,emissiveIntensity:.6,roughness:.4}),r=new Ee({color:1715540,roughness:.4,metalness:.6}),o=new ce(6,1.2,this.moduleLength),a=new K(o,r);a.position.set(-24,14,0),t.add(a);const c=new ce(6.2,.3,this.moduleLength),l=new K(c,new $e({color:62463}));l.position.set(-24,13.3,0),t.add(l);for(let h=-this.moduleLength/2+20;h<this.moduleLength/2;h+=40){const d=new K(new ln(1.2,1.5,14,8),r);d.position.set(-24,7,h),t.add(d)}for(let h=-this.moduleLength/2+15;h<this.moduleLength/2;h+=30){const d=Math.random()>.5,f=d?n:i,m=Math.random()*32+26,g=new K(new ce(16,m,22),f);g.position.set(-28,m/2,h),t.add(g);const _=new K(new ce(16.4,.8,22.4),new $e({color:d?62463:16711807}));_.position.set(-28,m+.4,h),t.add(_);const p=this.billboardTextures[this.currentMap]||this.billboardTextures.NIGHT_METRO,u=new K(new ps(16,8),new $e({map:p,side:qt}));u.position.set(-19,18,h),u.rotation.y=Math.PI/2,t.add(u);const y=Math.random()*35+26,S=new K(new ce(16,y,22),d?i:n);S.position.set(28,y/2,h),t.add(S);const w=new K(new ce(16.4,.8,22.4),new $e({color:d?16711807:62463}));w.position.set(28,y+.4,h),t.add(w)}this.scene.add(t),this.cityModules.push(t),this.spawnZ=e+this.moduleLength}update(e,t){if(this.skyGroup&&(this.skyGroup.position.z=e),this.moonTrainGroup&&(this.moonTrainGroup.position.z=e+205,this.moonTrainGroup.position.x+=t*25,this.moonTrainGroup.position.x>180&&(this.moonTrainGroup.position.x=-180)),this.cityModules.length>0){const n=this.cityModules[0];n.position.z<e-60&&(this.scene.remove(n),this.cityModules.shift(),this.createCityModule(this.spawnZ))}}reset(){this.cityModules.forEach(e=>this.scene.remove(e)),this.cityModules=[],this.spawnZ=0;for(let e=0;e<4;e++)this.createCityModule(e*this.moduleLength)}}class _p{constructor(e){this.scene=e,this.mode="CLEAR",this.initRainParticles()}initRainParticles(){const t=new Lt,n=new Float32Array(600*3);for(let r=0;r<600;r++)n[r*3]=(Math.random()-.5)*60,n[r*3+1]=Math.random()*25+5,n[r*3+2]=Math.random()*120;t.setAttribute("position",new Ot(n,3));const i=new gs({color:8965375,size:.25,transparent:!0,opacity:.65});this.rainMesh=new _r(t,i),this.rainMesh.visible=!1,this.scene.add(this.rainMesh)}setMode(e){this.mode=e,e==="RAIN"?(this.rainMesh.visible=!0,this.scene.fog&&(this.scene.fog.density=.018)):e==="FOG"?(this.rainMesh.visible=!1,this.scene.fog&&(this.scene.fog.density=.025)):e==="CLOUDY"?(this.rainMesh.visible=!1,this.scene.fog&&(this.scene.fog.density=.015)):(this.rainMesh.visible=!1,this.scene.fog&&(this.scene.fog.density=.01))}update(e,t){if(this.mode==="RAIN"&&this.rainMesh){this.rainMesh.position.z=e-20;const n=this.rainMesh.geometry.attributes.position,i=n.array;for(let r=0;r<i.length/3;r++)i[r*3+1]-=t*35,i[r*3+1]<0&&(i[r*3+1]=25);n.needsUpdate=!0}}}class vp{constructor(e){this.scene=e,this.policeUnits=[],this.headGeo=new ce(.38,.4,.38),this.capGeo=new ce(.42,.15,.46),this.bodyGeo=new ce(.65,.75,.38),this.armGeo=new ce(.18,.65,.18),this.legGeo=new ce(.22,.7,.22),this.skinMat=new Ee({color:13145704,roughness:.6}),this.uniformMat=new Ee({color:1318970,roughness:.5}),this.vestMat=new $e({color:16763904}),this.pantsMat=new Ee({color:791588,roughness:.7}),this.capMat=new Ee({color:1318970,roughness:.4}),this.badgeMat=new $e({color:62463})}spawnPolice(e,t,n="STANDING"){const i=new Ze;i.position.set(e,0,t);const r=new K(this.bodyGeo,this.uniformMat);r.position.y=1.05,r.castShadow=!0,i.add(r);const o=new ce(.67,.5,.4),a=new K(o,this.vestMat);a.position.y=1.1,i.add(a);const c=new ce(.12,.15,.42),l=new K(c,this.badgeMat);l.position.set(.18,1.15,0),i.add(l);const h=new K(this.headGeo,this.skinMat);h.position.y=1.6,i.add(h);const d=new K(this.capGeo,this.capMat);d.position.set(0,1.82,.04),i.add(d);const f=new ce(.42,.04,.18),m=new K(f,this.capMat);m.position.set(0,1.76,.24),i.add(m);const g=new Ze;g.position.set(-.42,1.35,0);const _=new K(this.armGeo,this.uniformMat);_.position.y=-.3,g.add(_),i.add(g);const p=new Ze;p.position.set(.42,1.35,0);const u=new K(this.armGeo,this.uniformMat);u.position.y=-.3,p.add(u),i.add(p);const y=new K(this.legGeo,this.pantsMat);y.position.set(-.18,.35,0),i.add(y);const S=new K(this.legGeo,this.pantsMat);S.position.set(.18,.35,0),i.add(S);const w={mesh:i,leftArmPivot:g,rightArmPivot:p,type:n,animTimer:Math.random()*10};return this.scene.add(i),this.policeUnits.push(w),w}update(e,t){for(let n=this.policeUnits.length-1;n>=0;n--){const i=this.policeUnits[n];i.animTimer+=t*3,i.type==="DIRECTING_TRAFFIC"?(i.leftArmPivot.rotation.z=Math.PI/3+Math.sin(i.animTimer)*.3,i.rightArmPivot.rotation.x=Math.sin(i.animTimer*2)*.5):i.type==="WALKING"?(i.mesh.position.z+=Math.sin(i.animTimer*.5)*.05,i.leftArmPivot.rotation.x=Math.sin(i.animTimer)*.4,i.rightArmPivot.rotation.x=-Math.sin(i.animTimer)*.4):i.mesh.position.y=Math.sin(i.animTimer*.5)*.03,i.mesh.position.z<e.z-25&&(this.scene.remove(i.mesh),this.policeUnits.splice(n,1))}}reset(){this.policeUnits.forEach(e=>this.scene.remove(e.mesh)),this.policeUnits=[]}}class xp{constructor(e){this.scene=e,this.lobbyGroup=new Ze,this.lobbyGroup.position.set(0,0,-500),this.lobbyGroup.visible=!1,this.buildLobbyArchitecture(),this.scene.add(this.lobbyGroup)}buildLobbyArchitecture(){const e=new Ee({color:660008,roughness:.6}),t=new Ee({color:62463,transparent:!0,opacity:.3}),n=new $e({color:62463}),i=new $e({color:16711807}),r=new Ee({color:16766720,metalness:.8}),o=new ce(40,.4,40),a=new K(o,e);a.position.y=-.2,this.lobbyGroup.add(a);const c=new ce(40,.4,40),l=new K(c,e);l.position.y=12,this.lobbyGroup.add(l);const h=new ce(38,12,.4),d=new K(h,t);d.position.set(0,6,19.8),this.lobbyGroup.add(d);const f=new Ze;f.position.set(0,8.5,-15);const m=new ce(18,4.5,.4),g=new K(m,e);f.add(g);const _=new ce(17.2,3.8,.42),p=new $e({color:331302}),u=new K(_,p);f.add(u);const y=new ce(16,.6,.45),S=new K(y,n);S.position.y=1,f.add(S);const w=new K(y,i);w.position.y=-.4,f.add(w),this.lobbyGroup.add(f);for(let B=-10;B<=10;B+=5){const z=new ce(1.2,1.4,3),j=new K(z,e);j.position.set(B,.7,5);const C=new ce(1.24,.1,3.04),D=new K(C,n);D.position.y=1.35,j.add(D),this.lobbyGroup.add(j)}const P=new ce(3.5,.5,16),A=new K(P,e);A.position.set(-15,3.5,-5),A.rotation.x=-Math.PI/6,this.lobbyGroup.add(A);const b=new K(P,e);b.position.set(15,3.5,-5),b.rotation.x=-Math.PI/6,this.lobbyGroup.add(b);for(let B of[-8,8]){const z=new ce(4,.6,1),j=new K(z,r);j.position.set(B,.3,-5),this.lobbyGroup.add(j)}const X=new Ee({color:16711807}),M=new Ee({color:62463}),T=new Ee({color:16763904});for(let B=0;B<6;B++){const z=new ce(.5,1.7,.4),j=B%3===0?X:B%3===1?M:T,C=new K(z,j),D=(Math.random()-.5)*24,k=(Math.random()-.5)*20;C.position.set(D,.85,k),this.lobbyGroup.add(C)}}showLobby(e){this.lobbyGroup.visible=e}}class Mp{constructor(e){this.scene=e,this.trains=[],this.lanes=[-2.5,0,2.5],this.metroBodyGeo=new ce(2.3,3.2,16),this.cargoBodyGeo=new ce(2.4,3.4,18),this.expressBodyGeo=new ce(2.2,3,20),this.metroMat=new Ee({color:26367,metalness:.7,roughness:.3}),this.cargoMat=new Ee({color:9059092,metalness:.4,roughness:.8}),this.expressMat=new Ee({color:14739181,metalness:.9,roughness:.1}),this.windowMat=new $e({color:62463,transparent:!0,opacity:.7}),this.headlightMat=new $e({color:16777215}),this.darkMat=new Ee({color:1119778,roughness:.5})}createTrain(e,t,n,i=!1,r=0){const o=new Ze,a=this.lanes[t];o.position.set(a,0,n);let c;if(e==="METRO"){c=new K(this.metroBodyGeo,this.metroMat),c.position.y=1.7,c.castShadow=!0,c.receiveShadow=!0;const p=new ce(2.34,1,14),u=new K(p,this.windowMat);u.position.y=1.8,o.add(u);const y=new ce(2.36,.4,8),S=new $e({color:62463}),w=new K(y,S);w.position.y=3.1,o.add(w)}else if(e==="CARGO"){c=new K(this.cargoBodyGeo,this.cargoMat),c.position.y=1.8,c.castShadow=!0,c.receiveShadow=!0;for(let p=-7;p<=7;p+=2){const u=new ce(2.46,3.42,.2),y=new K(u,this.darkMat);y.position.y=1.8,y.position.z=p,o.add(y)}}else{c=new K(this.expressBodyGeo,this.expressMat),c.position.y=1.6,c.castShadow=!0,c.receiveShadow=!0;const p=new Ri(1.1,3,4),u=new K(p,this.expressMat);u.rotation.x=-Math.PI/2,u.position.set(0,1.6,-11),o.add(u)}o.add(c);const l=new $t(.25,8,8),h=new K(l,this.headlightMat);h.position.set(-.7,1.2,-8.05),o.add(h);const d=new K(l,this.headlightMat);d.position.set(.7,1.2,-8.05),o.add(d);const f=new lp(16777215,3,30,Math.PI/6,.5);f.position.set(0,1.5,-8),f.target.position.set(a,0,-30),o.add(f),o.add(f.target);const m=e==="EXPRESS"?20:e==="CARGO"?18:16,g=new Sn,_={mesh:o,type:e,lane:t,isMoving:i,speed:r,box:g,width:2.2,height:3.2,depth:m,hornPlayed:!1};return this.scene.add(o),this.trains.push(_),_}update(e,t,n){for(let i=this.trains.length-1;i>=0;i--){const r=this.trains[i];if(r.isMoving){r.mesh.position.z-=(n+r.speed)*t;const o=r.mesh.position.z-e.z;o>10&&o<35&&!r.hornPlayed&&(ve.playTrainHorn(),r.hornPlayed=!0)}r.box.setFromCenterAndSize(new L(r.mesh.position.x,1.6,r.mesh.position.z),new L(r.width,r.height,r.depth)),r.mesh.position.z<e.z-25&&(this.scene.remove(r.mesh),this.trains.splice(i,1))}}reset(){this.trains.forEach(e=>this.scene.remove(e.mesh)),this.trains=[]}}class Sp{constructor(e){this.scene=e,this.obstacles=[],this.lanes=[-2.5,0,2.5],this.lowBarrierGeo=new ce(2.2,.8,.4),this.highBarrierGeo=new ce(2.4,.6,.4),this.postGeo=new ln(.1,.1,3.2,8),this.coneGeo=new Ri(.35,.8,8),this.barrierMat=new Ee({color:16711765,roughness:.5}),this.stripeMat=new $e({color:16763904}),this.postMat=new Ee({color:3359846,roughness:.7}),this.coneMat=new Ee({color:16737792,roughness:.4})}createObstacle(e,t,n){const i=new Ze,r=this.lanes[t];i.position.set(r,0,n);let o=2,a=1,c=.5,l=.5;if(e==="LOW_BARRIER"){const f=new K(this.lowBarrierGeo,this.barrierMat);f.position.y=.4,f.castShadow=!0,i.add(f);const m=new ce(2.22,.2,.42),g=new K(m,this.stripeMat);g.position.y=.5,i.add(g),o=2.2,a=.8,l=.4}else if(e==="HIGH_BARRIER"){const f=new K(this.highBarrierGeo,this.barrierMat);f.position.y=1.8,f.castShadow=!0,i.add(f);const m=new K(this.postGeo,this.postMat);m.position.set(-1.1,1.2,0),i.add(m);const g=new K(this.postGeo,this.postMat);g.position.set(1.1,1.2,0),i.add(g);const _=new ce(1.6,.3,.42),p=new K(_,this.stripeMat);p.position.y=1.8,i.add(p),o=2.4,a=1.2,l=1.9}else if(e==="CONES"){for(let f=-.6;f<=.6;f+=.6){const m=new K(this.coneGeo,this.coneMat);m.position.set(f,.4,0),m.castShadow=!0,i.add(m)}o=1.8,a=.8,l=.4}const h=new Sn,d={mesh:i,type:e,lane:t,box:h,width:o,height:a,depth:c,centerY:l};return this.scene.add(i),this.obstacles.push(d),d}update(e){for(let t=this.obstacles.length-1;t>=0;t--){const n=this.obstacles[t];n.box.setFromCenterAndSize(new L(n.mesh.position.x,n.centerY,n.mesh.position.z),new L(n.width,n.height,n.depth)),n.mesh.position.z<e.z-20&&(this.scene.remove(n.mesh),this.obstacles.splice(t,1))}}reset(){this.obstacles.forEach(e=>this.scene.remove(e.mesh)),this.obstacles=[]}}class Ep{constructor(e){this.scene=e,this.coins=[],this.lanes=[-2.5,0,2.5],this.coinGeo=new ln(.4,.4,.08,16),this.coinMat=new Ee({color:16766720,metalness:.9,roughness:.1,emissive:11175936,emissiveIntensity:.3}),this.initParticlePool()}initParticlePool(){const t=new Lt,n=new Float32Array(50*3);t.setAttribute("position",new Ot(n,3));const i=new gs({color:16766720,size:.3,transparent:!0,opacity:.9,blending:yi});this.sparkles=new _r(t,i),this.sparkles.visible=!1,this.scene.add(this.sparkles),this.sparkleTimer=0}triggerSparkles(e){this.sparkles.position.copy(e);const t=this.sparkles.geometry.attributes.position,n=t.array;for(let i=0;i<n.length/3;i++)n[i*3]=(Math.random()-.5)*1.5,n[i*3+1]=(Math.random()-.5)*1.5,n[i*3+2]=(Math.random()-.5)*1.5;t.needsUpdate=!0,this.sparkles.visible=!0,this.sparkleTimer=.3}spawnCoin(e,t,n){const i=new K(this.coinGeo,this.coinMat);i.rotation.x=Math.PI/2,i.position.set(this.lanes[e],t,n);const r={mesh:i,lane:e,isCollected:!1};this.scene.add(i),this.coins.push(r)}spawnPattern(e,t,n){if(e==="SKY_FLIGHT")for(let i=0;i<15;i+=2.2){const r=Math.floor(Math.random()*3);this.spawnCoin(r,8.5,n+i)}else if(e==="LINE")for(let i=0;i<10;i+=2)this.spawnCoin(t,.8,n+i);else if(e==="ARCH")[.8,1.4,2,2.2,2,1.4,.8].forEach((r,o)=>{this.spawnCoin(t,r,n+o*1.8)});else if(e==="ZIGZAG"){let i=t;for(let r=0;r<9;r+=2.2)this.spawnCoin(i,.8,n+r),i=i===0?Math.random()>.5?1:-1:0}}update(e,t,n){this.sparkleTimer>0&&(this.sparkleTimer-=n,this.sparkleTimer<=0&&(this.sparkles.visible=!1));const i=14;let r=0;for(let o=this.coins.length-1;o>=0;o--){const a=this.coins[o];if(a.mesh.rotation.z+=n*4,t&&a.mesh.position.distanceTo(e)<i&&a.mesh.position.lerp(new L(e.x,e.y+.9,e.z),10*n),a.mesh.position.distanceTo(new L(e.x,e.y+.9,e.z))<1.3&&!a.isCollected){a.isCollected=!0,ve.playCoin(),this.triggerSparkles(a.mesh.position.clone()),this.scene.remove(a.mesh),this.coins.splice(o,1),r++;continue}a.mesh.position.z<e.z-15&&(this.scene.remove(a.mesh),this.coins.splice(o,1))}return r}reset(){this.coins.forEach(e=>this.scene.remove(e.mesh)),this.coins=[],this.sparkles&&(this.sparkles.visible=!1)}}class yp{constructor(){this.enabled=!0,this.mode="HINDI",this.synth=window.speechSynthesis||null,this.volume=.9,this.lines={HINDI:{START:"Team ready hai. Track ko dhyan se observe karo.",POLICE:"Rukiye! Aage railway track par danger hai.",DETECTIVE:"Kuch suspicious movement hai. Evidence collect karo.",COIN:"Coin mil gaya!",TRAIN:"Savdhaan! Train aa rahi hai!",JUMP:"Upar se niklo!",SLIDE:"Neeche se nikal jao!",ROCKET:"Rocket boost activate!",BUBBLE:"Safety shield activate ho gaya.",DOUBLE:"Ab har coin double milega!",MISSION:"Shabash! Mission successfully complete.",MAP_UNLOCK:"Naya city map unlock ho gaya!",GAMEOVER:"Run khatam ho gaya. Dobara try karo.",RECORD:"Wah! Naya high score!",LEVEL_UP:"Excellent! Tumhara level badh gaya.",POLICE_INVESTIGATION:"Team, area ko secure karo aur clues search karo.",MYSTERY_MISSION:"Humein is mystery ka solution dhoondhna hai.",FINAL_MISSION:"Nexora Team, ye sabse important mission hai. Ready?",CONTINUE:"Ek aur chance lena hai?"},ENGLISH:{START:"Team ready. Observe the track carefully.",POLICE:"Halt! Danger ahead on the railway track.",DETECTIVE:"Suspicious movement detected. Gather evidence.",COIN:"Coin acquired!",TRAIN:"Caution! Train approaching!",JUMP:"Leap over!",SLIDE:"Slide under!",ROCKET:"Rocket boost activated!",BUBBLE:"Safety shield deployed.",DOUBLE:"Double coin multiplier active!",MISSION:"Excellent! Mission successfully completed.",MAP_UNLOCK:"New city map unlocked!",GAMEOVER:"Run ended. Try again.",RECORD:"Awesome! New high score!",LEVEL_UP:"Level upgraded. Fantastic work.",POLICE_INVESTIGATION:"Team, secure the perimeter and search for clues.",MYSTERY_MISSION:"We must solve this mystery.",FINAL_MISSION:"Nexora Team, this is the final mission. Ready?",CONTINUE:"Use a revive token to continue?"}},this.hindiVoice=null,this.englishVoice=null,this.initVoices()}initVoices(){if(!this.synth)return;const e=()=>{const t=this.synth.getVoices();this.hindiVoice=t.find(n=>n.lang.includes("hi")||n.lang.includes("HI"))||null,this.englishVoice=t.find(n=>n.lang.includes("en"))||null};e(),this.synth.onvoiceschanged!==void 0&&(this.synth.onvoiceschanged=e)}speak(e){if(!this.enabled||!this.synth)return;let t="",n=!1;if(this.mode==="HINDI_ENGLISH"?(t=this.lines.HINDI[e]||"",n=!0):this.mode==="ENGLISH"?(t=this.lines.ENGLISH[e]||this.lines.HINDI[e]||"",n=!1):(t=this.lines.HINDI[e]||"",n=!0),!!t)try{this.synth.cancel();const i=new SpeechSynthesisUtterance(t);i.rate=1.1,i.pitch=1.05,i.volume=this.volume,n&&this.hindiVoice?(i.voice=this.hindiVoice,i.lang="hi-IN"):this.englishVoice&&(i.voice=this.englishVoice,i.lang="en-US"),this.synth.speak(i)}catch(i){console.warn("Voice synthesis error:",i)}}setVolume(e){this.volume=e}setMode(e){this.mode=e}setEnabled(e){this.enabled=e,!e&&this.synth&&this.synth.cancel()}}const kt=new yp;class Tp{constructor(e){this.scene=e,this.powerups=[],this.lanes=[-2.5,0,2.5],this.boxGeo=new ce(.9,.9,.9),this.materials={AIR_ROCKET:new Ee({color:16724736,metalness:.9,emissive:16720384}),JUMP_SHOES:new Ee({color:65416,metalness:.8,emissive:43588}),DOUBLE_COIN:new Ee({color:16766720,metalness:.9,emissive:11175936}),SAFETY_BUBBLE:new Ee({color:26367,metalness:.8,emissive:13226}),MAGNET:new Ee({color:7940298,metalness:.8,emissive:4460936}),SPEED_BOOST:new Ee({color:62463,metalness:.8,emissive:43724})},this.activePowerups={AIR_ROCKET:0,JUMP_SHOES:0,DOUBLE_COIN:0,SAFETY_BUBBLE:0,MAGNET:0,SPEED_BOOST:0},this.durations={AIR_ROCKET:8,JUMP_SHOES:10,DOUBLE_COIN:12,SAFETY_BUBBLE:1,MAGNET:12,SPEED_BOOST:6},this.bubbleHealth=0}spawnPowerUp(e,t,n){const i=new Ze;i.position.set(this.lanes[t],1.2,n);const r=this.materials[e]||this.materials.MAGNET,o=new K(this.boxGeo,r);o.castShadow=!0,i.add(o);const a=new xr(.85,.06,8,24),c=new $e({color:r.color}),l=new K(a,c);i.add(l);const h={mesh:i,ring:l,type:e,lane:t};this.scene.add(i),this.powerups.push(h)}update(e,t,n){for(let i=this.powerups.length-1;i>=0;i--){const r=this.powerups[i];if(r.mesh.rotation.y+=n*3,r.ring.rotation.x+=n*4,r.mesh.position.distanceTo(new L(e.x,e.y+.9,e.z))<1.4){this.activatePowerUp(r.type,t),ve.playPowerup(),this.scene.remove(r.mesh),this.powerups.splice(i,1);continue}r.mesh.position.z<e.z-15&&(this.scene.remove(r.mesh),this.powerups.splice(i,1))}Object.keys(this.activePowerups).forEach(i=>{this.activePowerups[i]>0&&(this.activePowerups[i]-=n,this.activePowerups[i]<=0&&(this.activePowerups[i]=0,t.setPowerupVisual(i,!1)))})}activatePowerUp(e,t){this.activePowerups[e]=this.durations[e],t.setPowerupVisual(e,!0),e==="AIR_ROCKET"?kt.speak("ROCKET"):e==="DOUBLE_COIN"?kt.speak("DOUBLE"):e==="SAFETY_BUBBLE"?(this.bubbleHealth=2,kt.speak("BUBBLE")):kt.speak("POWERUP")}isActive(e){return this.activePowerups[e]>0}consumeProtection(e){return this.activePowerups.SAFETY_BUBBLE>0&&this.bubbleHealth>0?(this.bubbleHealth--,this.bubbleHealth<=0&&(this.activePowerups.SAFETY_BUBBLE=0,e.setPowerupVisual("SAFETY_BUBBLE",!1)),ve.playPowerup(),!0):!1}reset(e){this.powerups.forEach(t=>this.scene.remove(t.mesh)),this.powerups=[],this.bubbleHealth=0,Object.keys(this.activePowerups).forEach(t=>{this.activePowerups[t]=0,e&&e.setPowerupVisual(t,!1)})}}class wp{constructor(){this.listeners={},this.touchStartX=0,this.touchStartY=0,this.touchEndX=0,this.touchEndY=0,this.minSwipeDistance=30,this.initKeyboard(),this.initTouchSwipes(),this.initOnScreenButtons()}on(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)}emit(e){this.listeners[e]&&this.listeners[e].forEach(t=>t())}initKeyboard(){window.addEventListener("keydown",e=>{switch(e.code){case"ArrowLeft":case"KeyA":this.emit("left");break;case"ArrowRight":case"KeyD":this.emit("right");break;case"ArrowUp":case"KeyW":case"Space":this.emit("jump");break;case"ArrowDown":case"KeyS":this.emit("slide");break;case"KeyP":case"Escape":this.emit("pause");break}})}initTouchSwipes(){window.addEventListener("touchstart",e=>{e.touches.length>0&&(this.touchStartX=e.touches[0].clientX,this.touchStartY=e.touches[0].clientY)},{passive:!0}),window.addEventListener("touchend",e=>{e.changedTouches.length>0&&(this.touchEndX=e.changedTouches[0].clientX,this.touchEndY=e.changedTouches[0].clientY,this.handleSwipe())},{passive:!0})}handleSwipe(){const e=this.touchEndX-this.touchStartX,t=this.touchEndY-this.touchStartY,n=Math.abs(e),i=Math.abs(t);Math.max(n,i)>this.minSwipeDistance&&(n>i?e>0?this.emit("right"):this.emit("left"):t<0?this.emit("jump"):this.emit("slide"))}initOnScreenButtons(){document.addEventListener("DOMContentLoaded",()=>{this.bindTouchButton("touch-btn-left","left"),this.bindTouchButton("touch-btn-right","right"),this.bindTouchButton("touch-btn-up","jump"),this.bindTouchButton("touch-btn-down","slide")}),this.bindTouchButton("touch-btn-left","left"),this.bindTouchButton("touch-btn-right","right"),this.bindTouchButton("touch-btn-up","jump"),this.bindTouchButton("touch-btn-down","slide")}bindTouchButton(e,t){const n=document.getElementById(e);if(!n)return;const i=r=>{r.preventDefault(),r.stopPropagation(),this.emit(t)};n.addEventListener("touchstart",i,{passive:!1}),n.addEventListener("mousedown",i)}}class bp{constructor(){this.score=0,this.distance=0,this.coins=0,this.highScore=this.loadHighScore(),this.bestDistance=this.loadBestDistance()}loadHighScore(){return parseInt(localStorage.getItem("NEXORA_HIGH_SCORE")||"0",10)}loadBestDistance(){return parseInt(localStorage.getItem("NEXORA_BEST_DISTANCE")||"0",10)}saveHighScore(){return this.score>this.highScore?(this.highScore=this.score,localStorage.setItem("NEXORA_HIGH_SCORE",this.highScore.toString()),!0):!1}saveBestDistance(){this.distance>this.bestDistance&&(this.bestDistance=this.distance,localStorage.setItem("NEXORA_BEST_DISTANCE",this.bestDistance.toString()))}addDistance(e,t=!1){this.distance+=e;const n=t?2:1;this.score+=Math.floor(e*10*n)}addCoins(e=1,t=!1){this.coins+=e;const n=t?2:1;this.score+=50*e*n}reset(){this.score=0,this.distance=0,this.coins=0}}class Ap{constructor(){this.totalCoins=parseInt(localStorage.getItem("nexora_coins")||"0",10),this.highScore=parseInt(localStorage.getItem("nexora_highscore")||"0",10),this.bestDistance=parseInt(localStorage.getItem("nexora_bestdist")||"0",10),this.selectedCharacter=localStorage.getItem("nexora_char")||"BOY",this.selectedMap=localStorage.getItem("nexora_map")||"NIGHT_METRO";const e=localStorage.getItem("nexora_unlocked_chars");this.unlockedCharacters=e?JSON.parse(e):["BOY"];const t=localStorage.getItem("nexora_unlocked_maps");this.unlockedMaps=t?JSON.parse(t):["NIGHT_METRO","DAY_METRO","DYNAMIC_DAY_NIGHT","MUMBAI_METRO","CHENNAI_METRO","DHANBAD_RAIL"],this.level=parseInt(localStorage.getItem("nexora_lvl")||"1",10),this.xp=parseInt(localStorage.getItem("nexora_xp")||"0",10),this.xpToNextLevel=this.level*500,this.reviveTokens=parseInt(localStorage.getItem("nexora_revive_tokens")||"3",10),this.loginStreak=parseInt(localStorage.getItem("nexora_streak")||"1",10),this.lastLoginDate=localStorage.getItem("nexora_last_login")||"",this.loginClaimedToday=this.checkClaimedToday()}checkClaimedToday(){const e=new Date().toDateString();return this.lastLoginDate===e}save(){localStorage.setItem("nexora_coins",this.totalCoins.toString()),localStorage.setItem("nexora_highscore",this.highScore.toString()),localStorage.setItem("nexora_bestdist",this.bestDistance.toString()),localStorage.setItem("nexora_char",this.selectedCharacter),localStorage.setItem("nexora_map",this.selectedMap),localStorage.setItem("nexora_unlocked_chars",JSON.stringify(this.unlockedCharacters)),localStorage.setItem("nexora_unlocked_maps",JSON.stringify(this.unlockedMaps)),localStorage.setItem("nexora_lvl",this.level.toString()),localStorage.setItem("nexora_xp",this.xp.toString()),localStorage.setItem("nexora_revive_tokens",this.reviveTokens.toString()),localStorage.setItem("nexora_streak",this.loginStreak.toString()),localStorage.setItem("nexora_last_login",this.lastLoginDate)}addCoins(e){this.totalCoins+=e,this.save()}useReviveToken(){return this.reviveTokens>0?(this.reviveTokens--,this.save(),!0):!1}addReviveToken(e=1){this.reviveTokens+=e,this.save()}addXp(e){for(this.xp+=e;this.xp>=this.xpToNextLevel;)this.xp-=this.xpToNextLevel,this.level++,this.xpToNextLevel=this.level*500,this.addReviveToken(1);this.save()}unlockCharacter(e,t){return this.totalCoins>=t&&!this.unlockedCharacters.includes(e)?(this.totalCoins-=t,this.unlockedCharacters.push(e),this.save(),!0):!1}claimDailyReward(){if(this.loginClaimedToday)return null;const e=new Date().toDateString();this.lastLoginDate=e,this.loginClaimedToday=!0;let t={coins:0,tokens:0};switch(this.loginStreak){case 1:t.coins=100;break;case 2:t.coins=250;break;case 3:t.tokens=1;break;case 4:t.coins=500;break;case 5:t.coins=800;break;case 6:t.coins=1e3;break;case 7:t.coins=2e3,t.tokens=2;break}return this.addCoins(t.coins),t.tokens>0&&this.addReviveToken(t.tokens),this.loginStreak=this.loginStreak%7+1,this.save(),t}}const qe=new Ap;class Rp{constructor(){this.dailyMissions=[{id:"d_coins",desc:"Collect 100 Coins",target:100,current:0,rewardCoins:150,rewardXp:200,claimed:!1},{id:"d_dist",desc:"Run 1 KM in total",target:1e3,current:0,rewardCoins:200,rewardXp:250,claimed:!1},{id:"d_jumps",desc:"Jump 20 obstacles",target:20,current:0,rewardCoins:100,rewardXp:150,claimed:!1},{id:"d_trains",desc:"Pass 30 trains safely",target:30,current:0,rewardCoins:150,rewardXp:200,claimed:!1},{id:"d_powerups",desc:"Collect 3 Power-Ups",target:3,current:0,rewardCoins:120,rewardXp:180,claimed:!1},{id:"d_rocket",desc:"Use Rocket Boost once",target:1,current:0,rewardCoins:150,rewardXp:200,claimed:!1},{id:"d_bubble",desc:"Use Safety Bubble once",target:1,current:0,rewardCoins:150,rewardXp:200,claimed:!1},{id:"d_cleanrun",desc:"Run 500m without collision",target:500,current:0,rewardCoins:250,rewardXp:300,claimed:!1}],this.weeklyMissions=[{id:"w_dist",desc:"Run 10 KM in total",target:1e4,current:0,rewardCoins:1e3,rewardXp:1500,claimed:!1},{id:"w_coins",desc:"Collect 2,000 Coins",target:2e3,current:0,rewardCoins:800,rewardXp:1200,claimed:!1},{id:"w_runs",desc:"Complete 10 Metro Runs",target:10,current:0,rewardCoins:500,rewardXp:800,claimed:!1},{id:"w_unlock",desc:"Unlock 1 new Character",target:1,current:0,rewardCoins:1e3,rewardXp:1e3,claimed:!1},{id:"w_maps",desc:"Complete 5 Map Challenges",target:5,current:0,rewardCoins:1200,rewardXp:1500,claimed:!1}],this.load()}load(){try{const e=localStorage.getItem("NEXORA_MISSIONS_V2");if(e){const t=JSON.parse(e);t.daily&&t.daily.forEach(n=>{const i=this.dailyMissions.find(r=>r.id===n.id);i&&(i.current=n.current||0,i.claimed=n.claimed||!1)}),t.weekly&&t.weekly.forEach(n=>{const i=this.weeklyMissions.find(r=>r.id===n.id);i&&(i.current=n.current||0,i.claimed=n.claimed||!1)})}}catch(e){console.warn("Failed to load missions data",e)}}save(){try{const e={daily:this.dailyMissions.map(t=>({id:t.id,current:t.current,claimed:t.claimed})),weekly:this.weeklyMissions.map(t=>({id:t.id,current:t.current,claimed:t.claimed}))};localStorage.setItem("NEXORA_MISSIONS_V2",JSON.stringify(e))}catch(e){console.warn("Failed to save missions data",e)}}updateProgress(e,t=1){const n=i=>{!i.claimed&&i.current<i.target&&(i.current=Math.min(i.target,i.current+t),i.current>=i.target&&kt.speak("MISSION"))};if(e==="coins"){const i=this.dailyMissions.find(o=>o.id==="d_coins"),r=this.weeklyMissions.find(o=>o.id==="w_coins");i&&n(i),r&&n(r)}else if(e==="distance"){const i=this.dailyMissions.find(a=>a.id==="d_dist"),r=this.dailyMissions.find(a=>a.id==="d_cleanrun"),o=this.weeklyMissions.find(a=>a.id==="w_dist");i&&n(i),r&&n(r),o&&n(o)}else if(e==="jump"){const i=this.dailyMissions.find(r=>r.id==="d_jumps");i&&n(i)}else if(e==="train"){const i=this.dailyMissions.find(r=>r.id==="d_trains");i&&n(i)}else if(e==="powerup"){const i=this.dailyMissions.find(r=>r.id==="d_powerups");i&&n(i)}else if(e==="rocket"){const i=this.dailyMissions.find(r=>r.id==="d_rocket");i&&n(i)}else if(e==="bubble"){const i=this.dailyMissions.find(r=>r.id==="d_bubble");i&&n(i)}else if(e==="run_complete"){const i=this.weeklyMissions.find(o=>o.id==="w_runs"),r=this.weeklyMissions.find(o=>o.id==="w_maps");i&&n(i),r&&n(r)}else if(e==="char_unlock"){const i=this.weeklyMissions.find(r=>r.id==="w_unlock");i&&n(i)}this.save()}claimMission(e){const n=[...this.dailyMissions,...this.weeklyMissions].find(i=>i.id===e);return n&&!n.claimed&&n.current>=n.target?(n.claimed=!0,qe.addCoins(n.rewardCoins),qe.addXp(n.rewardXp),ve.playPowerup(),this.save(),!0):!1}}const an=new Rp;class Cp{constructor(){this.achievements=[{id:"first_run",title:"FIRST RUN",desc:"Complete your first metro run",icon:"🏃",unlocked:!1},{id:"coin_master",title:"COIN MASTER",desc:"Collect 1,000 coins in total",icon:"🪙",unlocked:!1},{id:"sky_runner",title:"SKY RUNNER",desc:"Fly with Rocket Boost",icon:"🚀",unlocked:!1},{id:"high_jumper",title:"HIGH JUMPER",desc:"Perform 100 jumps",icon:"👟",unlocked:!1},{id:"metro_master",title:"METRO MASTER",desc:"Complete 10 metro runs",icon:"🚇",unlocked:!1},{id:"city_explorer",title:"CITY EXPLORER",desc:"Unlock three city maps",icon:"🏙️",unlocked:!1},{id:"nexora_champion",title:"NEXORA CHAMPION",desc:"Reach Player Level 50",icon:"🏆",unlocked:!1}],this.jumpsCount=0,this.runsCount=0,this.load()}load(){try{const e=localStorage.getItem("NEXORA_ACHIEVEMENTS_V2");if(e){const t=JSON.parse(e);this.jumpsCount=t.jumpsCount||0,this.runsCount=t.runsCount||0,t.unlocked&&t.unlocked.forEach(n=>{const i=this.achievements.find(r=>r.id===n);i&&(i.unlocked=!0)})}}catch(e){console.warn("Failed to load achievements",e)}}save(){try{const e={jumpsCount:this.jumpsCount,runsCount:this.runsCount,unlocked:this.achievements.filter(t=>t.unlocked).map(t=>t.id)};localStorage.setItem("NEXORA_ACHIEVEMENTS_V2",JSON.stringify(e))}catch(e){console.warn("Failed to save achievements",e)}}trigger(e){const t=this.achievements.find(n=>n.id===e);t&&!t.unlocked&&(t.unlocked=!0,qe.addXp(500),qe.addCoins(300),ve.playPowerup(),this.save())}checkStats(){this.runsCount++,this.trigger("first_run"),this.runsCount>=10&&this.trigger("metro_master"),qe.totalCoins>=1e3&&this.trigger("coin_master"),qe.unlockedMaps.length>=3&&this.trigger("city_explorer"),qe.level>=50&&this.trigger("nexora_champion"),this.save()}addJump(){this.jumpsCount++,this.jumpsCount>=100&&this.trigger("high_jumper"),this.save()}}const cr=new Cp;class Lp{constructor(e){this.container=e,this.scene=new Uo,this.camera=new Ct(50,1,.1,50),this.camera.position.set(0,1.2,3.2),this.renderer=new mr({antialias:!0,alpha:!0}),this.renderer.setSize(240,240),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.container.appendChild(this.renderer.domElement),this.ambientLight=new Oo(16777215,1.8),this.scene.add(this.ambientLight),this.dirLight=new No(62463,2),this.dirLight.position.set(5,10,5),this.scene.add(this.dirLight),this.player=new Fo(this.scene),this.player.position.set(0,0,0),this.isRunning=!1,this.rotationAngle=0}setCharacter(e){this.player.setCharacterType(e),this.player.position.set(0,0,0)}start(){this.isRunning||(this.isRunning=!0,this.loop())}stop(){this.isRunning=!1}loop(){this.isRunning&&(requestAnimationFrame(()=>this.loop()),this.rotationAngle+=.015,this.player.mesh&&(this.player.mesh.rotation.y=Math.sin(this.rotationAngle*.5)*.4,this.player.animTime+=.03,this.player.updateAnimations(10)),this.renderer.render(this.scene,this.camera))}}class Pp{constructor(e){this.game=e,this.screenLoading=document.getElementById("screen-loading"),this.screenWelcome=document.getElementById("screen-welcome"),this.screenCharacters=document.getElementById("screen-characters"),this.screenMaps=document.getElementById("screen-maps"),this.screenMissions=document.getElementById("screen-missions"),this.screenRewards=document.getElementById("screen-rewards"),this.screenAchievements=document.getElementById("screen-achievements"),this.screenCountdown=document.getElementById("screen-countdown"),this.screenHUD=document.getElementById("screen-hud"),this.modalPause=document.getElementById("modal-pause"),this.modalRevive=document.getElementById("modal-revive"),this.modalGameOver=document.getElementById("modal-gameover"),this.modalSettings=document.getElementById("modal-settings"),this.hudScoreVal=document.getElementById("hud-score-val"),this.hudDistanceVal=document.getElementById("hud-distance-val"),this.hudCoinsVal=document.getElementById("hud-coins-val"),this.hudPowerupsList=document.getElementById("hud-powerups-list"),this.countdownNum=document.getElementById("countdown-number"),this.countdownSub=document.getElementById("countdown-subtext");const t=document.getElementById("char-preview-container");this.charPreview=t?new Lp(t):null,this.initListeners(),this.updateProfileBadge()}initListeners(){var t,n,i,r,o,a,c,l,h,d,f,m,g,_,p,u,y,S,w,P,A,b,X,M,T,B,z,j,C,D,k,Y;(t=document.getElementById("btn-nav-start"))==null||t.addEventListener("click",()=>{ve.playClick(),kt.speak("START"),this.game.startCountdownFlow()}),(n=document.getElementById("btn-nav-chars"))==null||n.addEventListener("click",()=>{ve.playClick(),this.openCharacterScreen()}),(i=document.getElementById("btn-nav-maps"))==null||i.addEventListener("click",()=>{ve.playClick(),this.openMapScreen()}),(r=document.getElementById("btn-nav-missions"))==null||r.addEventListener("click",()=>{ve.playClick(),this.openMissionsScreen()}),(o=document.getElementById("btn-nav-rewards"))==null||o.addEventListener("click",()=>{ve.playClick(),this.openRewardsScreen()}),(a=document.getElementById("btn-nav-achievements"))==null||a.addEventListener("click",()=>{ve.playClick(),this.openAchievementsScreen()}),(c=document.getElementById("btn-nav-settings"))==null||c.addEventListener("click",()=>{ve.playClick(),this.showModal(this.modalSettings)}),(l=document.getElementById("btn-close-chars"))==null||l.addEventListener("click",()=>{ve.playClick(),this.charPreview&&this.charPreview.stop(),this.showScreen(this.screenWelcome)}),(h=document.getElementById("btn-close-maps"))==null||h.addEventListener("click",()=>{ve.playClick(),this.showScreen(this.screenWelcome)}),(d=document.getElementById("btn-close-missions"))==null||d.addEventListener("click",()=>{ve.playClick(),this.showScreen(this.screenWelcome)}),(f=document.getElementById("btn-close-rewards"))==null||f.addEventListener("click",()=>{ve.playClick(),this.showScreen(this.screenWelcome)}),(m=document.getElementById("btn-close-achievements"))==null||m.addEventListener("click",()=>{ve.playClick(),this.showScreen(this.screenWelcome)}),(g=document.getElementById("btn-hud-pause"))==null||g.addEventListener("click",()=>{ve.playClick(),this.game.pauseGame()}),(_=document.getElementById("btn-hud-sound"))==null||_.addEventListener("click",()=>{ve.playClick(),ve.toggleMute(!ve.isMuted),document.getElementById("btn-hud-sound").innerHTML=ve.isMuted?"🔇":"🔊"}),(p=document.getElementById("btn-pause-resume"))==null||p.addEventListener("click",()=>{ve.playClick(),this.game.resumeGame()}),(u=document.getElementById("btn-pause-restart"))==null||u.addEventListener("click",()=>{ve.playClick(),this.game.startCountdownFlow()}),(y=document.getElementById("btn-pause-settings"))==null||y.addEventListener("click",()=>{ve.playClick(),this.showModal(this.modalSettings)}),(S=document.getElementById("btn-pause-main"))==null||S.addEventListener("click",()=>{ve.playClick(),this.showScreen(this.screenWelcome)}),(w=document.getElementById("btn-revive-yes"))==null||w.addEventListener("click",()=>{ve.playClick(),qe.useReviveToken()?(this.hideModal(this.modalRevive),this.game.revivePlayer()):(alert("No Revive Tokens available! Earn more from Daily Login & Missions."),this.hideModal(this.modalRevive),this.game.enterGameOverLobby())}),(P=document.getElementById("btn-revive-no"))==null||P.addEventListener("click",()=>{ve.playClick(),this.hideModal(this.modalRevive),this.game.enterGameOverLobby()}),(A=document.getElementById("btn-go-again"))==null||A.addEventListener("click",()=>{ve.playClick(),this.game.startCountdownFlow()}),(b=document.getElementById("btn-go-missions"))==null||b.addEventListener("click",()=>{ve.playClick(),this.openMissionsScreen()}),(X=document.getElementById("btn-go-rewards"))==null||X.addEventListener("click",()=>{ve.playClick(),this.openRewardsScreen()}),(M=document.getElementById("btn-go-main"))==null||M.addEventListener("click",()=>{ve.playClick(),this.showScreen(this.screenWelcome)}),(T=document.getElementById("btn-close-settings"))==null||T.addEventListener("click",()=>{ve.playClick(),this.hideModal(this.modalSettings)}),(B=document.getElementById("setting-voice-mode"))==null||B.addEventListener("change",H=>{kt.setMode(H.target.value)}),(z=document.getElementById("setting-mute-all"))==null||z.addEventListener("change",H=>{ve.toggleMute(H.target.checked)}),["master","music","train","voice","sfx","ambience"].forEach(H=>{var W;(W=document.getElementById(`vol-${H}`))==null||W.addEventListener("input",q=>{ve.setVolume(H,parseFloat(q.target.value)),H==="voice"&&kt.setVolume(parseFloat(q.target.value))})}),document.querySelectorAll(".char-card").forEach(H=>{H.addEventListener("click",()=>{const W=H.getAttribute("data-char");document.querySelectorAll(".char-card").forEach(q=>q.classList.remove("active")),H.classList.add("active"),this.charPreview&&this.charPreview.setCharacter(W),document.getElementById("preview-char-name").textContent=W})}),(j=document.getElementById("btn-select-character"))==null||j.addEventListener("click",()=>{const H=document.querySelector(".char-card.active");if(H){const W=H.getAttribute("data-char");if(qe.unlockedCharacters.includes(W))qe.selectedCharacter=W,this.game.player.setCharacterType(W),ve.playPowerup(),this.charPreview&&this.charPreview.stop(),this.showScreen(this.screenWelcome);else{const q={GIRL:200,ALIEN:500,DOG:800,CAT:1200,ROBOT:1500,POLICE:2e3};qe.unlockCharacter(W,q[W]||0)?(an.updateProgress("char_unlock"),this.openCharacterScreen()):alert(`Need ${q[W]} Coins to unlock ${W}!`)}}}),document.querySelectorAll(".map-card").forEach(H=>{H.addEventListener("click",()=>{H.getAttribute("data-map"),document.querySelectorAll(".map-card").forEach(W=>W.classList.remove("active")),H.classList.add("active")})}),(C=document.getElementById("btn-select-map"))==null||C.addEventListener("click",()=>{const H=document.querySelector(".map-card.active");if(H){const W=H.getAttribute("data-map");qe.unlockedMaps.includes(W)&&(qe.selectedMap=W,this.game.cityGenerator.setMap(W),ve.playPowerup(),this.showScreen(this.screenWelcome))}}),(D=document.getElementById("tab-daily"))==null||D.addEventListener("click",()=>{document.getElementById("tab-daily").classList.add("active"),document.getElementById("tab-weekly").classList.remove("active"),this.renderMissions("daily")}),(k=document.getElementById("tab-weekly"))==null||k.addEventListener("click",()=>{document.getElementById("tab-weekly").classList.add("active"),document.getElementById("tab-daily").classList.remove("active"),this.renderMissions("weekly")}),(Y=document.getElementById("btn-claim-daily"))==null||Y.addEventListener("click",()=>{qe.claimDailyReward()&&(ve.playPowerup(),this.updateProfileBadge(),this.openRewardsScreen())})}showScreen(e){[this.screenLoading,this.screenWelcome,this.screenCharacters,this.screenMaps,this.screenMissions,this.screenRewards,this.screenAchievements,this.screenCountdown,this.screenHUD].forEach(t=>{t&&(t.classList.add("hidden"),t.classList.remove("active"))}),this.closeAllModals(),e&&(e.classList.remove("hidden"),e.classList.add("active")),this.updateProfileBadge()}showModal(e){e&&e.classList.remove("hidden")}hideModal(e){e&&e.classList.add("hidden")}closeAllModals(){[this.modalPause,this.modalRevive,this.modalGameOver,this.modalSettings].forEach(e=>{e&&e.classList.add("hidden")})}updateProfileBadge(){const e=document.getElementById("welcome-lvl-badge"),t=document.getElementById("welcome-xp-fill"),n=document.getElementById("welcome-coins-val");if(e&&(e.textContent=`LVL ${qe.level}`),t){const i=Math.min(100,qe.xp/qe.xpToNextLevel*100);t.style.width=`${i}%`}n&&(n.textContent=qe.totalCoins.toLocaleString())}showReviveModal(){const e=document.getElementById("revive-token-val");e&&(e.textContent=`${qe.reviveTokens} 🛡️`),kt.speak("CONTINUE"),this.showModal(this.modalRevive)}openCharacterScreen(){this.showScreen(this.screenCharacters),this.charPreview&&(this.charPreview.setCharacter(qe.selectedCharacter),this.charPreview.start()),["GIRL","ALIEN","DOG","CAT","ROBOT","POLICE"].forEach(t=>{const n=document.getElementById(`tag-char-${t}`);n&&qe.unlockedCharacters.includes(t)&&(n.className="status-tag unlocked",n.textContent="UNLOCKED")})}openMapScreen(){this.showScreen(this.screenMaps),["NIGHT_METRO","DAY_METRO","DYNAMIC_DAY_NIGHT","MUMBAI_METRO","CHENNAI_METRO","DHANBAD_RAIL"].forEach(t=>{const n=document.getElementById(`tag-map-${t}`);n&&qe.unlockedMaps.includes(t)&&(n.className="status-tag unlocked",n.textContent="UNLOCKED")})}openMissionsScreen(){this.showScreen(this.screenMissions),this.renderMissions("daily")}renderMissions(e){const t=document.getElementById("missions-list-container");if(!t)return;t.innerHTML="",(e==="daily"?an.dailyMissions:an.weeklyMissions).forEach(i=>{const r=Math.min(100,i.current/i.target*100),o=i.current>=i.target,a=document.createElement("div");a.className="mission-tile",a.innerHTML=`
        <div class="mission-info">
          <span class="mission-desc">${i.desc}</span>
          <div class="m-progress-bar">
            <div class="m-progress-fill" style="width: ${r}%"></div>
          </div>
          <span style="font-size: 0.8rem; color: #8a99ad;">${i.current} / ${i.target}</span>
        </div>
        <button class="btn-secondary" style="width: auto; padding: 6px 14px;" ${i.claimed?"disabled":""}>
          ${i.claimed?"CLAIMED":o?"CLAIM":`+${i.rewardCoins} 🪙`}
        </button>
      `;const c=a.querySelector("button");o&&!i.claimed&&(c.className="btn-primary",c.addEventListener("click",()=>{an.claimMission(i.id)&&(this.updateProfileBadge(),this.renderMissions(e))})),t.appendChild(a)})}openRewardsScreen(){this.showScreen(this.screenRewards);for(let t=1;t<=7;t++){const n=document.getElementById(`day-tile-${t}`);n&&(t<qe.loginStreak?n.style.opacity="0.5":t===qe.loginStreak&&n.classList.add("highlight"))}const e=document.getElementById("btn-claim-daily");e&&(e.disabled=qe.loginClaimedToday,e.textContent=qe.loginClaimedToday?"CLAIMED TODAY":"CLAIM DAILY REWARD")}openAchievementsScreen(){this.showScreen(this.screenAchievements);const e=document.getElementById("achievements-list-container");e&&(e.innerHTML="",cr.achievements.forEach(t=>{const n=document.createElement("div");n.className=`achieve-card ${t.unlocked?"unlocked":""}`,n.innerHTML=`
        <span class="achieve-icon">${t.icon}</span>
        <div class="achieve-info">
          <h4>${t.title}</h4>
          <p>${t.desc}</p>
        </div>
      `,e.appendChild(n)}))}updateLoadingProgress(e,t){const n=document.getElementById("loading-progress-fill"),i=document.getElementById("loading-status-text"),r=document.getElementById("loading-percentage");n&&(n.style.width=`${e}%`),i&&(i.textContent=t),r&&(r.textContent=`${Math.floor(e)}%`)}updateCountdown(e,t){this.countdownNum&&(this.countdownNum.textContent=e,this.countdownNum.style.animation="none",this.countdownNum.offsetHeight,this.countdownNum.style.animation="countdownPulse 0.8s ease-out infinite"),this.countdownSub&&(this.countdownSub.textContent=t)}updateHUD(e,t,n){this.hudScoreVal&&(this.hudScoreVal.textContent=e.toLocaleString()),this.hudDistanceVal&&(this.hudDistanceVal.textContent=t>=1e3?`${(t/1e3).toFixed(2)} KM`:`${Math.floor(t)} m`),this.hudCoinsVal&&(this.hudCoinsVal.textContent=n.toString())}updatePowerUpBadges(e,t){if(!this.hudPowerupsList)return;this.hudPowerupsList.innerHTML="";const n={AIR_ROCKET:{name:"ROCKET BOOST",icon:"🚀"},JUMP_SHOES:{name:"SUPER JUMP",icon:"👟"},DOUBLE_COIN:{name:"2X COINS",icon:"💎"},SAFETY_BUBBLE:{name:"SAFETY BUBBLE",icon:"🛡️"},MAGNET:{name:"MAGNET",icon:"🧲"},SPEED_BOOST:{name:"BOOST",icon:"⚡"}};Object.keys(e).forEach(i=>{const r=e[i];if(r>0){const o=n[i]||{name:i,icon:"⚡"},a=t[i]||10,c=Math.max(0,r/a*100),l=document.createElement("div");l.className="powerup-badge",l.innerHTML=`
          <span class="powerup-icon">${o.icon}</span>
          <div class="powerup-info">
            <span class="powerup-name">${o.name}</span>
            <div class="powerup-timer-bar">
              <div class="powerup-timer-fill" style="width: ${c}%"></div>
            </div>
          </div>
        `,this.hudPowerupsList.appendChild(l)}})}showGameOverLobby(e,t,n,i,r,o){document.getElementById("go-score").textContent=e.toLocaleString(),document.getElementById("go-distance").textContent=t>=1e3?`${(t/1e3).toFixed(2)} KM`:`${Math.floor(t)} m`,document.getElementById("go-coins").textContent=n.toString(),document.getElementById("go-xp").textContent=`+${o} XP`;const a=document.getElementById("high-score-banner");a&&(r?a.classList.remove("hidden"):a.classList.add("hidden")),this.showModal(this.modalGameOver)}}const ct={LOADING:"LOADING",WELCOME:"WELCOME",COUNTDOWN:"COUNTDOWN",RUNNING:"RUNNING",PAUSED:"PAUSED",REVIVE:"REVIVE",GAMEOVER_LOBBY:"GAMEOVER_LOBBY"};class Ip{constructor(e){this.container=e,this.state=ct.LOADING,this.appRenderer=new dp(e),this.cameraManager=new fp(this.appRenderer.camera),this.player=new Fo(this.appRenderer.scene),this.trackManager=new mp(this.appRenderer.scene),this.cityGenerator=new gp(this.appRenderer.scene),this.weatherSystem=new _p(this.appRenderer.scene),this.policeNPCManager=new vp(this.appRenderer.scene),this.stationLobbyManager=new xp(this.appRenderer.scene),this.trainManager=new Mp(this.appRenderer.scene),this.obstacleManager=new Sp(this.appRenderer.scene),this.coinManager=new Ep(this.appRenderer.scene),this.powerUpManager=new Tp(this.appRenderer.scene),this.scoreManager=new bp,this.input=new wp,this.ui=new Pp(this),this.baseSpeed=16,this.currentSpeed=this.baseSpeed,this.maxSpeed=32,this.nextSpawnZ=40,this.lastTime=0,this.invulnerableTimer=0,this.initInputBindings(),this.startLoadingFlow(),requestAnimationFrame(t=>this.loop(t))}initInputBindings(){this.input.on("left",()=>{this.state===ct.RUNNING&&this.player.moveLeft()}),this.input.on("right",()=>{this.state===ct.RUNNING&&this.player.moveRight()}),this.input.on("jump",()=>{this.state===ct.RUNNING&&(this.player.jump(),an.updateProgress("jump"),cr.addJump())}),this.input.on("slide",()=>{this.state===ct.RUNNING&&this.player.slide()}),this.input.on("pause",()=>{this.state===ct.RUNNING?this.pauseGame():this.state===ct.PAUSED&&this.resumeGame()})}startLoadingFlow(){this.state=ct.LOADING,this.ui.showScreen(this.ui.screenLoading);let e=0;const t=setInterval(()=>{e+=Math.random()*15+10,e>=100?(e=100,clearInterval(t),this.ui.updateLoadingProgress(100,"Metro Cities Ready!"),setTimeout(()=>{this.state=ct.WELCOME,this.ui.showScreen(this.ui.screenWelcome),ve.startMusic()},500)):this.ui.updateLoadingProgress(e,"Preparing Metro Cities…")},100)}startCountdownFlow(){this.stationLobbyManager.showLobby(!1),this.resetGameData(),this.state=ct.COUNTDOWN,this.ui.showScreen(this.ui.screenCountdown);let e=3;this.ui.updateCountdown("3","GET READY"),ve.playCountdown(3);const t=setInterval(()=>{e--,e===2?(this.ui.updateCountdown("2","SET YOUR PACER"),ve.playCountdown(2)):e===1?(this.ui.updateCountdown("1","ENGAGE METRO RUN"),ve.playCountdown(1)):e===0?(this.ui.updateCountdown("RUN!","METRO RUNNER"),ve.playCountdown(0),kt.speak("START")):(clearInterval(t),this.state=ct.RUNNING,this.ui.showScreen(this.ui.screenHUD))},700)}pauseGame(){this.state===ct.RUNNING&&(this.state=ct.PAUSED,this.ui.showModal(this.ui.modalPause),document.getElementById("pause-score").textContent=this.scoreManager.score.toLocaleString(),document.getElementById("pause-distance").textContent=`${Math.floor(this.scoreManager.distance)} m`)}resumeGame(){this.state===ct.PAUSED&&(this.ui.hideModal(this.ui.modalPause),this.state=ct.RUNNING)}onCollisionHit(){ve.playCrash(),this.cameraManager.triggerShake(1.2),this.state=ct.REVIVE,this.ui.showReviveModal()}revivePlayer(){this.state=ct.RUNNING,this.invulnerableTimer=3,this.powerUpManager.activatePowerUp("SAFETY_BUBBLE",this.player),this.ui.showScreen(this.ui.screenHUD)}enterGameOverLobby(){this.state=ct.GAMEOVER_LOBBY,kt.speak("GAMEOVER"),this.stationLobbyManager.showLobby(!0),this.player.position.set(0,0,-500),this.player.velocity.set(0,0,0),this.player.isGrounded=!0,qe.addCoins(this.scoreManager.coins);const e=Math.floor(this.scoreManager.distance*.5)+this.scoreManager.coins*5;qe.addXp(e),an.updateProgress("run_complete"),cr.checkStats(),this.scoreManager.saveBestDistance();const t=this.scoreManager.saveHighScore();t&&kt.speak("RECORD"),this.ui.showGameOverLobby(this.scoreManager.score,this.scoreManager.distance,this.scoreManager.coins,this.scoreManager.highScore,t,e)}resetGameData(){this.player.setCharacterType(qe.selectedCharacter),this.player.reset(),this.trackManager.reset(),this.cityGenerator.setMap(qe.selectedMap),this.cityGenerator.reset(),this.policeNPCManager.reset(),this.trainManager.reset(),this.obstacleManager.reset(),this.powerUpManager.reset(this.player),this.coinManager.reset(),this.scoreManager.reset(),this.currentSpeed=this.baseSpeed,this.nextSpawnZ=40,this.invulnerableTimer=0}spawnAhead(e){if(this.nextSpawnZ<e+120){const t=this.nextSpawnZ,n=Math.random(),i=Math.floor(Math.random()*3);if(Math.random()<.25){const r=Math.random()>.5?"DIRECTING_TRAFFIC":"WALKING";this.policeNPCManager.spawnPolice(i===0?-4.5:4.5,t,r)}if(this.powerUpManager.isActive("AIR_ROCKET"))this.coinManager.spawnPattern("SKY_FLIGHT",i,t);else if(n<.35){const r=["METRO","CARGO","EXPRESS"],o=r[Math.floor(Math.random()*r.length)],a=Math.random()>.5,c=a?Math.random()*8+6:0,l=this.trainManager.createTrain(o,i,t+20,a,c);ve.playSpatialTrainHorn(l.mesh.position.x,l.mesh.position.z),an.updateProgress("train");const h=(i+1)%3;this.coinManager.spawnPattern("LINE",h,t)}else if(n<.7){const r=Math.random()>.5?"LOW_BARRIER":"HIGH_BARRIER";this.obstacleManager.createObstacle(r,i,t),r==="LOW_BARRIER"?this.coinManager.spawnPattern("ARCH",i,t-2):this.coinManager.spawnPattern("LINE",i,t-2)}else if(this.coinManager.spawnPattern("ZIGZAG",i,t),Math.random()>.3){const r=["AIR_ROCKET","JUMP_SHOES","DOUBLE_COIN","SAFETY_BUBBLE","MAGNET","SPEED_BOOST"],o=r[Math.floor(Math.random()*r.length)];this.powerUpManager.spawnPowerUp(o,(i+2)%3,t+10)}this.nextSpawnZ+=Math.random()*25+28}}loop(e){requestAnimationFrame(n=>this.loop(n));const t=Math.min((e-this.lastTime)/1e3,.1);this.lastTime=e,this.state===ct.RUNNING?(this.updateRunning(t),this.cameraManager.update(this.player.position,this.player.lane,this.player.isJumping,t)):this.state===ct.WELCOME||this.state===ct.LOADING?(this.player.animTime+=t*2,this.player.updateAnimations(8),this.cityGenerator.update(this.player.position.z,t),this.weatherSystem.update(this.player.position.z,t),this.cameraManager.updateMenuCamera(this.player.position,t)):this.cameraManager.update(this.player.position,this.player.lane,this.player.isJumping,t),this.appRenderer.render()}updateRunning(e){const t=this.powerUpManager.isActive("AIR_ROCKET"),n=this.powerUpManager.isActive("SPEED_BOOST"),i=t?1.8:n?1.6:1,r=this.currentSpeed*i,o=r*e;this.player.position.z+=o,this.currentSpeed<this.maxSpeed&&(this.currentSpeed+=e*.15),this.player.update(e,r),this.trackManager.update(this.player.position.z),this.cityGenerator.update(this.player.position.z,e),this.weatherSystem.update(this.player.position.z,e),this.policeNPCManager.update(this.player.position,e),this.spawnAhead(this.player.position.z),this.trainManager.update(this.player.position,e,r),this.obstacleManager.update(this.player.position);const a=this.powerUpManager.isActive("MAGNET"),c=this.coinManager.update(this.player.position,a,e),l=this.powerUpManager.isActive("DOUBLE_COIN");c>0&&(this.scoreManager.addCoins(c,l),an.updateProgress("coins",c)),this.powerUpManager.update(this.player.position,this.player,e),this.scoreManager.addDistance(o,l),an.updateProgress("distance",Math.floor(o)),this.invulnerableTimer>0&&(this.invulnerableTimer-=e),this.invulnerableTimer<=0&&!t&&!n&&this.checkCollisions(),this.ui.updateHUD(this.scoreManager.score,this.scoreManager.distance,this.scoreManager.coins),this.ui.updatePowerUpBadges(this.powerUpManager.activePowerups,this.powerUpManager.durations)}checkCollisions(){const e=this.player.box;for(const t of this.obstacleManager.obstacles)if(e.intersectsBox(t.box)){this.handleHit();return}for(const t of this.trainManager.trains)if(e.intersectsBox(t.box)){this.handleHit();return}}handleHit(){this.powerUpManager.consumeProtection(this.player)?(this.invulnerableTimer=1.2,this.cameraManager.triggerShake(.8),ve.playCrash()):this.onCollisionHit()}}window.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("canvas-container");s&&(window.game=new Ip(s))});
