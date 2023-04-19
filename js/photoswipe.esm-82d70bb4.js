var t=Object.defineProperty,i=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=Math.pow,o=(i,e,s)=>e in i?t(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,a=(t,n)=>{for(var a in n||(n={}))e.call(n,a)&&o(t,a,n[a]);if(i)for(var a of i(n))s.call(n,a)&&o(t,a,n[a]);return t};
/*!
  * PhotoSwipe 5.3.6 - https://photoswipe.com
  * (c) 2023 Dmytro Semenov
  */
function r(t,i,e){const s=document.createElement(i);return t&&(s.className=t),e&&e.appendChild(s),s}function h(t,i){return t.x=i.x,t.y=i.y,void 0!==i.id&&(t.id=i.id),t}function l(t){t.x=Math.round(t.x),t.y=Math.round(t.y)}function p(t,i){const e=Math.abs(t.x-i.x),s=Math.abs(t.y-i.y);return Math.sqrt(e*e+s*s)}function d(t,i){return t.x===i.x&&t.y===i.y}function c(t,i,e){return Math.min(Math.max(t,i),e)}function m(t,i,e){let s=`translate3d(${t}px,${i||0}px,0)`;return void 0!==e&&(s+=` scale3d(${e},${e},1)`),s}function u(t,i,e,s){t.style.transform=m(i,e,s)}const _="cubic-bezier(.4,0,.22,1)";function v(t,i,e,s){t.style.transition=i?`${i} ${e}ms ${s||_}`:"none"}function g(t,i,e){t.style.width="number"==typeof i?`${i}px`:i,t.style.height="number"==typeof e?`${e}px`:e}const y="idle",f="loading",w="loaded",x="error";function P(){return!(!navigator.vendor||!navigator.vendor.match(/apple/i))}let S=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>{S=!0}}))}catch(ut){}class b{constructor(){this._pool=[]}
/**
   * Adds event listeners
   *
   * @param {PoolItem['target']} target
   * @param {PoolItem['type']} type Can be multiple, separated by space.
   * @param {PoolItem['listener']} listener
   * @param {PoolItem['passive']} [passive]
   */add(t,i,e,s){this._toggleListener(t,i,e,s)}
/**
   * Removes event listeners
   *
   * @param {PoolItem['target']} target
   * @param {PoolItem['type']} type
   * @param {PoolItem['listener']} listener
   * @param {PoolItem['passive']} [passive]
   */remove(t,i,e,s){this._toggleListener(t,i,e,s,!0)}
/**
   * Removes all bound events
   */removeAll(){this._pool.forEach((t=>{this._toggleListener(t.target,t.type,t.listener,t.passive,!0,!0)})),this._pool=[]}
/**
   * Adds or removes event
   *
   * @private
   * @param {PoolItem['target']} target
   * @param {PoolItem['type']} type
   * @param {PoolItem['listener']} listener
   * @param {PoolItem['passive']} [passive]
   * @param {boolean} [unbind] Whether the event should be added or removed
   * @param {boolean} [skipPool] Whether events pool should be skipped
   */_toggleListener(t,i,e,s,n,o){if(!t)return;const a=n?"removeEventListener":"addEventListener";i.split(" ").forEach((i=>{if(i){o||(n?this._pool=this._pool.filter((s=>s.type!==i||s.listener!==e||s.target!==t)):this._pool.push({target:t,type:i,listener:e,passive:s}));const r=!!S&&{passive:s||!1};t[a](i,e,r)}}))}}function z(t,i){if(t.getViewportSizeFn){const e=t.getViewportSizeFn(t,i);if(e)return e}return{x:document.documentElement.clientWidth,
// TODO: height on mobile is very incosistent due to toolbar
// find a way to improve this
// document.documentElement.clientHeight - doesn't seem to work well
y:window.innerHeight}}function C(t,i,e,s,n){let o=0;if(i.paddingFn)o=i.paddingFn(e,s,n)[t];else if(i.padding)o=i.padding[t];else{const e="padding"+t[0].toUpperCase()+t.slice(1);i[e]&&(o=i[e])}return Number(o)||0}function I(t,i,e,s){return{x:i.x-C("left",t,i,e,s)-C("right",t,i,e,s),y:i.y-C("top",t,i,e,s)-C("bottom",t,i,e,s)}}class L{
/**
   * @param {Slide} slide
   */
constructor(t){this.slide=t,this.currZoomLevel=1,this.center=/** @type {Point} */
{x:0,y:0},this.max=/** @type {Point} */
{x:0,y:0},this.min=/** @type {Point} */
{x:0,y:0}}
/**
   * _getItemBounds
   *
   * @param {number} currZoomLevel
   */update(t){this.currZoomLevel=t,this.slide.width?(this._updateAxis("x"),this._updateAxis("y"),this.slide.pswp.dispatch("calcBounds",{slide:this.slide})):this.reset()}
/**
   * _calculateItemBoundsForAxis
   *
   * @param {Axis} axis
   */_updateAxis(t){const{pswp:i}=this.slide,e=this.slide["x"===t?"width":"height"]*this.currZoomLevel,s=C("x"===t?"left":"top",i.options,i.viewportSize,this.slide.data,this.slide.index),n=this.slide.panAreaSize[t];this.center[t]=Math.round((n-e)/2)+s,this.max[t]=e>n?Math.round(n-e)+s:this.center[t],this.min[t]=e>n?s:this.center[t]}
// _getZeroBounds
reset(){this.center.x=0,this.center.y=0,this.max.x=0,this.max.y=0,this.min.x=0,this.min.y=0}
/**
   * Correct pan position if it's beyond the bounds
   *
   * @param {Axis} axis x or y
   * @param {number} panOffset
   * @returns {number}
   */correctPan(t,i){return c(i,this.max[t],this.min[t])}}class A{
/**
   * @param {PhotoSwipeOptions} options PhotoSwipe options
   * @param {SlideData} itemData Slide data
   * @param {number} index Slide index
   * @param {PhotoSwipe} [pswp] PhotoSwipe instance, can be undefined if not initialized yet
   */
constructor(t,i,e,s){this.pswp=s,this.options=t,this.itemData=i,this.index=e,this.panAreaSize=null,this.elementSize=null,this.fit=1,this.fill=1,this.vFill=1,this.initial=1,this.secondary=1,this.max=1,this.min=1}
/**
   * Calculate initial, secondary and maximum zoom level for the specified slide.
   *
   * It should be called when either image or viewport size changes.
   *
   * @param {number} maxWidth
   * @param {number} maxHeight
   * @param {Point} panAreaSize
   */update(t,i,e){const s={x:t,y:i};this.elementSize=s,this.panAreaSize=e;const n=e.x/s.x,o=e.y/s.y;this.fit=Math.min(1,n<o?n:o),this.fill=Math.min(1,n>o?n:o),this.vFill=Math.min(1,o),this.initial=this._getInitial(),this.secondary=this._getSecondary(),this.max=Math.max(this.initial,this.secondary,this._getMax()),this.min=Math.min(this.fit,this.initial,this.secondary),this.pswp&&this.pswp.dispatch("zoomLevelsUpdate",{zoomLevels:this,slideData:this.itemData})}
/**
   * Parses user-defined zoom option.
   *
   * @private
   * @param {'initial' | 'secondary' | 'max'} optionPrefix Zoom level option prefix (initial, secondary, max)
   * @returns { number | undefined }
   */_parseZoomLevelOption(t){const i=
/** @type {'initialZoomLevel' | 'secondaryZoomLevel' | 'maxZoomLevel'} */t+"ZoomLevel",e=this.options[i];if(e)return"function"==typeof e?e(this):"fill"===e?this.fill:"fit"===e?this.fit:Number(e)}
/**
   * Get zoom level to which image will be zoomed after double-tap gesture,
   * or when user clicks on zoom icon,
   * or mouse-click on image itself.
   * If you return 1 image will be zoomed to its original size.
   *
   * @private
   * @return {number}
   */_getSecondary(){let t=this._parseZoomLevelOption("secondary");return t||(t=Math.min(1,3*this.fit),this.elementSize&&t*this.elementSize.x>4e3&&(t=4e3/this.elementSize.x),t)}
/**
   * Get initial image zoom level.
   *
   * @private
   * @return {number}
   */_getInitial(){return this._parseZoomLevelOption("initial")||this.fit}
/**
   * Maximum zoom level when user zooms
   * via zoom/pinch gesture,
   * via cmd/ctrl-wheel or via trackpad.
   *
   * @private
   * @return {number}
   */_getMax(){return this._parseZoomLevelOption("max")||Math.max(1,4*this.fit)}}class T{
/**
   * @param {SlideData} data
   * @param {number} index
   * @param {PhotoSwipe} pswp
   */
constructor(t,i,e){this.data=t,this.index=i,this.pswp=e,this.isActive=i===e.currIndex,this.currentResolution=0,this.panAreaSize={x:0,y:0},this.pan={x:0,y:0},this.isFirstSlide=this.isActive&&!e.opener.isOpen,this.zoomLevels=new A(e.options,t,i,e),this.pswp.dispatch("gettingData",{slide:this,data:this.data,index:i}),this.content=this.pswp.contentLoader.getContentBySlide(this),this.container=r("pswp__zoom-wrap","div"),this.holderElement=null,this.currZoomLevel=1,this.width=this.content.width,this.height=this.content.height,this.heavyAppended=!1,this.bounds=new L(this),this.prevDisplayedWidth=-1,this.prevDisplayedHeight=-1,this.pswp.dispatch("slideInit",{slide:this})}
/**
   * If this slide is active/current/visible
   *
   * @param {boolean} isActive
   */setIsActive(t){t&&!this.isActive?this.activate():!t&&this.isActive&&this.deactivate()}
/**
   * Appends slide content to DOM
   *
   * @param {HTMLElement} holderElement
   */append(t){this.holderElement=t,this.container.style.transformOrigin="0 0",this.data&&(this.calculateSize(),this.load(),this.updateContentSize(),this.appendHeavy(),this.holderElement.appendChild(this.container),this.zoomAndPanToInitial(),this.pswp.dispatch("firstZoomPan",{slide:this}),this.applyCurrentZoomPan(),this.pswp.dispatch("afterSetContent",{slide:this}),this.isActive&&this.activate())}load(){this.content.load(!1),this.pswp.dispatch("slideLoad",{slide:this})}
/**
   * Append "heavy" DOM elements
   *
   * This may depend on a type of slide,
   * but generally these are large images.
   */appendHeavy(){const{pswp:t}=this;!this.heavyAppended&&t.opener.isOpen&&!t.mainScroll.isShifted()&&(this.isActive,1)&&(this.pswp.dispatch("appendHeavy",{slide:this}).defaultPrevented||(this.heavyAppended=!0,this.content.append(),this.pswp.dispatch("appendHeavyContent",{slide:this})))}
/**
   * Triggered when this slide is active (selected).
   *
   * If it's part of opening/closing transition -
   * activate() will trigger after the transition is ended.
   */activate(){this.isActive=!0,this.appendHeavy(),this.content.activate(),this.pswp.dispatch("slideActivate",{slide:this})}
/**
   * Triggered when this slide becomes inactive.
   *
   * Slide can become inactive only after it was active.
   */deactivate(){this.isActive=!1,this.content.deactivate(),this.currZoomLevel!==this.zoomLevels.initial&&this.calculateSize(),this.currentResolution=0,this.zoomAndPanToInitial(),this.applyCurrentZoomPan(),this.updateContentSize(),this.pswp.dispatch("slideDeactivate",{slide:this})}
/**
   * The slide should destroy itself, it will never be used again.
   * (unbind all events and destroy internal components)
   */destroy(){this.content.hasSlide=!1,this.content.remove(),this.container.remove(),this.pswp.dispatch("slideDestroy",{slide:this})}resize(){this.currZoomLevel!==this.zoomLevels.initial&&this.isActive?(this.calculateSize(),this.bounds.update(this.currZoomLevel),this.panTo(this.pan.x,this.pan.y)):(this.calculateSize(),this.currentResolution=0,this.zoomAndPanToInitial(),this.applyCurrentZoomPan(),this.updateContentSize())}
/**
   * Apply size to current slide content,
   * based on the current resolution and scale.
   *
   * @param {boolean} [force] if size should be updated even if dimensions weren't changed
   */updateContentSize(t){const i=this.currentResolution||this.zoomLevels.initial;if(!i)return;const e=Math.round(this.width*i)||this.pswp.viewportSize.x,s=Math.round(this.height*i)||this.pswp.viewportSize.y;(this.sizeChanged(e,s)||t)&&this.content.setDisplayedSize(e,s)}
/**
   * @param {number} width
   * @param {number} height
   */sizeChanged(t,i){return(t!==this.prevDisplayedWidth||i!==this.prevDisplayedHeight)&&(this.prevDisplayedWidth=t,this.prevDisplayedHeight=i,!0)}
/** @returns {HTMLImageElement | HTMLDivElement | null | undefined} */getPlaceholderElement(){var t;return null==(t=this.content.placeholder)?void 0:t.element}
/**
   * Zoom current slide image to...
   *
   * @param {number} destZoomLevel Destination zoom level.
   * @param {Point} [centerPoint]
   * Transform origin center point, or false if viewport center should be used.
   * @param {number | false} [transitionDuration] Transition duration, may be set to 0.
   * @param {boolean} [ignoreBounds] Minimum and maximum zoom levels will be ignored.
   */zoomTo(t,i,e,s){const{pswp:n}=this;if(!this.isZoomable()||n.mainScroll.isShifted())return;n.dispatch("beforeZoomTo",{destZoomLevel:t,centerPoint:i,transitionDuration:e}),n.animations.stopAllPan();const o=this.currZoomLevel;s||(t=c(t,this.zoomLevels.min,this.zoomLevels.max)),this.setZoomLevel(t),this.pan.x=this.calculateZoomToPanOffset("x",i,o),this.pan.y=this.calculateZoomToPanOffset("y",i,o),l(this.pan);const a=()=>{this._setResolution(t),this.applyCurrentZoomPan()};e?n.animations.startTransition({isPan:!0,name:"zoomTo",target:this.container,transform:this.getCurrentTransform(),onComplete:a,duration:e,easing:n.options.easing}):a()}
/**
   * @param {Point} [centerPoint]
   */toggleZoom(t){this.zoomTo(this.currZoomLevel===this.zoomLevels.initial?this.zoomLevels.secondary:this.zoomLevels.initial,t,this.pswp.options.zoomAnimationDuration)}
/**
   * Updates zoom level property and recalculates new pan bounds,
   * unlike zoomTo it does not apply transform (use applyCurrentZoomPan)
   *
   * @param {number} currZoomLevel
   */setZoomLevel(t){this.currZoomLevel=t,this.bounds.update(this.currZoomLevel)}
/**
   * Get pan position after zoom at a given `point`.
   *
   * Always call setZoomLevel(newZoomLevel) beforehand to recalculate
   * pan bounds according to the new zoom level.
   *
   * @param {'x' | 'y'} axis
   * @param {Point} [point]
   * point based on which zoom is performed, usually refers to the current mouse position,
   * if false - viewport center will be used.
   * @param {number} [prevZoomLevel] Zoom level before new zoom was applied.
   * @returns {number}
   */calculateZoomToPanOffset(t,i,e){if(0===this.bounds.max[t]-this.bounds.min[t])return this.bounds.center[t];i||(i=this.pswp.getViewportCenterPoint()),e||(e=this.zoomLevels.initial);const s=this.currZoomLevel/e;return this.bounds.correctPan(t,(this.pan[t]-i[t])*s+i[t])}
/**
   * Apply pan and keep it within bounds.
   *
   * @param {number} panX
   * @param {number} panY
   */panTo(t,i){this.pan.x=this.bounds.correctPan("x",t),this.pan.y=this.bounds.correctPan("y",i),this.applyCurrentZoomPan()}
/**
   * If the slide in the current state can be panned by the user
   * @returns {boolean}
   */isPannable(){return Boolean(this.width)&&this.currZoomLevel>this.zoomLevels.fit}
/**
   * If the slide can be zoomed
   * @returns {boolean}
   */isZoomable(){return Boolean(this.width)&&this.content.isZoomable()}
/**
   * Apply transform and scale based on
   * the current pan position (this.pan) and zoom level (this.currZoomLevel)
   */applyCurrentZoomPan(){this._applyZoomTransform(this.pan.x,this.pan.y,this.currZoomLevel),this===this.pswp.currSlide&&this.pswp.dispatch("zoomPanUpdate",{slide:this})}zoomAndPanToInitial(){this.currZoomLevel=this.zoomLevels.initial,this.bounds.update(this.currZoomLevel),h(this.pan,this.bounds.center),this.pswp.dispatch("initialZoomPan",{slide:this})}
/**
   * Set translate and scale based on current resolution
   *
   * @param {number} x
   * @param {number} y
   * @param {number} zoom
   * @private
   */_applyZoomTransform(t,i,e){e/=this.currentResolution||this.zoomLevels.initial,u(this.container,t,i,e)}calculateSize(){const{pswp:t}=this;h(this.panAreaSize,I(t.options,t.viewportSize,this.data,this.index)),this.zoomLevels.update(this.width,this.height,this.panAreaSize),t.dispatch("calcSlideSize",{slide:this})}
/** @returns {string} */getCurrentTransform(){const t=this.currZoomLevel/(this.currentResolution||this.zoomLevels.initial);return m(this.pan.x,this.pan.y,t)}
/**
   * Set resolution and re-render the image.
   *
   * For example, if the real image size is 2000x1500,
   * and resolution is 0.5 - it will be rendered as 1000x750.
   *
   * Image with zoom level 2 and resolution 0.5 is
   * the same as image with zoom level 1 and resolution 1.
   *
   * Used to optimize animations and make
   * sure that browser renders image in the highest quality.
   * Also used by responsive images to load the correct one.
   *
   * @param {number} newResolution
   */_setResolution(t){t!==this.currentResolution&&(this.currentResolution=t,this.updateContentSize(),this.pswp.dispatch("resolutionChanged"))}}class Z{
/**
   * @param {Gestures} gestures
   */
constructor(t){this.gestures=t,this.pswp=t.pswp,this.startPan={x:0,y:0}}start(){this.pswp.currSlide&&h(this.startPan,this.pswp.currSlide.pan),this.pswp.animations.stopAll()}change(){const{p1:t,prevP1:i,dragAxis:e}=this.gestures,{currSlide:s}=this.pswp;if("y"===e&&this.pswp.options.closeOnVerticalDrag&&s&&s.currZoomLevel<=s.zoomLevels.fit&&!this.gestures.isMultitouch){const e=s.pan.y+(t.y-i.y);if(!this.pswp.dispatch("verticalDrag",{panY:e}).defaultPrevented){this._setPanWithFriction("y",e,.6);const t=1-Math.abs(this._getVerticalDragRatio(s.pan.y));this.pswp.applyBgOpacity(t),s.applyCurrentZoomPan()}}else{this._panOrMoveMainScroll("x")||(this._panOrMoveMainScroll("y"),s&&(l(s.pan),s.applyCurrentZoomPan()))}}end(){const{velocity:t}=this.gestures,{mainScroll:i,currSlide:e}=this.pswp;let s=0;if(this.pswp.animations.stopAll(),i.isShifted()){const e=(i.x-i.getCurrSlideX())/this.pswp.viewportSize.x;t.x<-.5&&e<0||t.x<.1&&e<-.5?(s=1,t.x=Math.min(t.x,0)):(t.x>.5&&e>0||t.x>-.1&&e>.5)&&(s=-1,t.x=Math.max(t.x,0)),i.moveIndexBy(s,!0,t.x)}e&&e.currZoomLevel>e.zoomLevels.max||this.gestures.isMultitouch?this.gestures.zoomLevels.correctZoomPan(!0):(this._finishPanGestureForAxis("x"),this._finishPanGestureForAxis("y"))}
/**
   * @private
   * @param {'x' | 'y'} axis
   */_finishPanGestureForAxis(t){const{velocity:i}=this.gestures,{currSlide:e}=this.pswp;if(!e)return;const{pan:s,bounds:n}=e,o=s[t],a=this.pswp.bgOpacity<1&&"y"===t,r=o+function(t,i){return t*i/(1-i)}(i[t],.995);if(a){const t=this._getVerticalDragRatio(o),i=this._getVerticalDragRatio(r);if(t<0&&i<-.4||t>0&&i>.4)return void this.pswp.close()}const h=n.correctPan(t,r);if(o===h)return;const l=h===r?1:.82,p=this.pswp.bgOpacity,d=h-o;this.pswp.animations.startSpring({name:"panGesture"+t,isPan:!0,start:o,end:h,velocity:i[t],dampingRatio:l,onUpdate:i=>{if(a&&this.pswp.bgOpacity<1){const t=1-(h-i)/d;this.pswp.applyBgOpacity(c(p+(1-p)*t,0,1))}s[t]=Math.floor(i),e.applyCurrentZoomPan()}})}
/**
   * Update position of the main scroll,
   * or/and update pan position of the current slide.
   *
   * Should return true if it changes (or can change) main scroll.
   *
   * @private
   * @param {'x' | 'y'} axis
   * @returns {boolean}
   */_panOrMoveMainScroll(t){const{p1:i,dragAxis:e,prevP1:s,isMultitouch:n}=this.gestures,{currSlide:o,mainScroll:a}=this.pswp,r=i[t]-s[t],h=a.x+r;if(!r||!o)return!1;if("x"===t&&!o.isPannable()&&!n)return a.moveTo(h,!0),!0;const{bounds:l}=o,p=o.pan[t]+r;if(this.pswp.options.allowPanToNext&&"x"===e&&"x"===t&&!n){const i=a.getCurrSlideX(),e=a.x-i,s=r>0,n=!s;if(p>l.min[t]&&s){if(l.min[t]<=this.startPan[t])return a.moveTo(h,!0),!0;this._setPanWithFriction(t,p)}else if(p<l.max[t]&&n){if(this.startPan[t]<=l.max[t])return a.moveTo(h,!0),!0;this._setPanWithFriction(t,p)}else if(0!==e){if(e>0)return a.moveTo(Math.max(h,i),!0),!0;if(e<0)return a.moveTo(Math.min(h,i),!0),!0}else this._setPanWithFriction(t,p)}else"y"===t&&(a.isShifted()||l.min.y===l.max.y)||this._setPanWithFriction(t,p);return!1}
// If we move above - the ratio is negative
// If we move below the ratio is positive
/**
   * Relation between pan Y position and third of viewport height.
   *
   * When we are at initial position (center bounds) - the ratio is 0,
   * if position is shifted upwards - the ratio is negative,
   * if position is shifted downwards - the ratio is positive.
   *
   * @private
   * @param {number} panY The current pan Y position.
   * @returns {number}
   */
_getVerticalDragRatio(t){var i,e;return(t-(null!=(e=null==(i=this.pswp.currSlide)?void 0:i.bounds.center.y)?e:0))/(this.pswp.viewportSize.y/3)}
/**
   * Set pan position of the current slide.
   * Apply friction if the position is beyond the pan bounds,
   * or if custom friction is defined.
   *
   * @private
   * @param {'x' | 'y'} axis
   * @param {number} potentialPan
   * @param {number} [customFriction] (0.1 - 1)
   */_setPanWithFriction(t,i,e){const{currSlide:s}=this.pswp;if(!s)return;const{pan:n,bounds:o}=s;if(o.correctPan(t,i)!==i||e){const s=Math.round(i-n[t]);n[t]+=s*(e||.35)}else n[t]=i}}function O(t,i,e){return t.x=(i.x+e.x)/2,t.y=(i.y+e.y)/2,t}class D{
/**
   * @param {Gestures} gestures
   */
constructor(t){this.gestures=t,this._startPan={x:0,y:0},this._startZoomPoint={x:0,y:0},this._zoomPoint={x:0,y:0},this._wasOverFitZoomLevel=!1,this._startZoomLevel=1}start(){const{currSlide:t}=this.gestures.pswp;t&&(this._startZoomLevel=t.currZoomLevel,h(this._startPan,t.pan)),this.gestures.pswp.animations.stopAllPan(),this._wasOverFitZoomLevel=!1}change(){const{p1:t,startP1:i,p2:e,startP2:s,pswp:n}=this.gestures,{currSlide:o}=n;if(!o)return;const a=o.zoomLevels.min,r=o.zoomLevels.max;if(!o.isZoomable()||n.mainScroll.isShifted())return;O(this._startZoomPoint,i,s),O(this._zoomPoint,t,e);let h=1/p(i,s)*p(t,e)*this._startZoomLevel;if(h>o.zoomLevels.initial+o.zoomLevels.initial/15&&(this._wasOverFitZoomLevel=!0),h<a)if(n.options.pinchToClose&&!this._wasOverFitZoomLevel&&this._startZoomLevel<=o.zoomLevels.initial){const t=1-(a-h)/(a/1.2);n.dispatch("pinchClose",{bgOpacity:t}).defaultPrevented||n.applyBgOpacity(t)}else h=a-.15*(a-h);else h>r&&(h=r+.05*(h-r));o.pan.x=this._calculatePanForZoomLevel("x",h),o.pan.y=this._calculatePanForZoomLevel("y",h),o.setZoomLevel(h),o.applyCurrentZoomPan()}end(){const{pswp:t}=this.gestures,{currSlide:i}=t;(!i||i.currZoomLevel<i.zoomLevels.initial)&&!this._wasOverFitZoomLevel&&t.options.pinchToClose?t.close():this.correctZoomPan()}
/**
   * @private
   * @param {'x' | 'y'} axis
   * @param {number} currZoomLevel
   * @returns {number}
   */_calculatePanForZoomLevel(t,i){const e=i/this._startZoomLevel;return this._zoomPoint[t]-(this._startZoomPoint[t]-this._startPan[t])*e}
/**
   * Correct currZoomLevel and pan if they are
   * beyond minimum or maximum values.
   * With animation.
   *
   * @param {boolean} [ignoreGesture]
   * Wether gesture coordinates should be ignored when calculating destination pan position.
   */correctZoomPan(t){const{pswp:i}=this.gestures,{currSlide:e}=i;if(!(null==e?void 0:e.isZoomable()))return;0===this._zoomPoint.x&&(t=!0);const s=e.currZoomLevel;let n,o=!0;s<e.zoomLevels.initial?n=e.zoomLevels.initial:s>e.zoomLevels.max?n=e.zoomLevels.max:(o=!1,n=s);const a=i.bgOpacity,r=i.bgOpacity<1,l=h({x:0,y:0},e.pan);let p=h({x:0,y:0},l);t&&(this._zoomPoint.x=0,this._zoomPoint.y=0,this._startZoomPoint.x=0,this._startZoomPoint.y=0,this._startZoomLevel=s,h(this._startPan,l)),o&&(p={x:this._calculatePanForZoomLevel("x",n),y:this._calculatePanForZoomLevel("y",n)}),e.setZoomLevel(n),p={x:e.bounds.correctPan("x",p.x),y:e.bounds.correctPan("y",p.y)},e.setZoomLevel(s);const m=!d(p,l);if(!m&&!o&&!r)return e._setResolution(n),void e.applyCurrentZoomPan();i.animations.stopAllPan(),i.animations.startSpring({isPan:!0,start:0,end:1e3,velocity:0,dampingRatio:1,naturalFrequency:40,onUpdate:t=>{if(t/=1e3,m||o){if(m&&(e.pan.x=l.x+(p.x-l.x)*t,e.pan.y=l.y+(p.y-l.y)*t),o){const i=s+(n-s)*t;e.setZoomLevel(i)}e.applyCurrentZoomPan()}r&&i.bgOpacity<1&&i.applyBgOpacity(c(a+(1-a)*t,0,1))},onComplete:()=>{e._setResolution(n),e.applyCurrentZoomPan()}})}}function E(t){return!!/** @type {HTMLElement} */
t.target.closest(".pswp__container")}class M{
/**
   * @param {Gestures} gestures
   */
constructor(t){this.gestures=t}
/**
   * @param {Point} point
   * @param {PointerEvent} originalEvent
   */click(t,i){const e=
/** @type {HTMLElement} */i.target.classList,s=e.contains("pswp__img"),n=e.contains("pswp__item")||e.contains("pswp__zoom-wrap");s?this._doClickOrTapAction("imageClick",t,i):n&&this._doClickOrTapAction("bgClick",t,i)}
/**
   * @param {Point} point
   * @param {PointerEvent} originalEvent
   */tap(t,i){E(i)&&this._doClickOrTapAction("tap",t,i)}
/**
   * @param {Point} point
   * @param {PointerEvent} originalEvent
   */doubleTap(t,i){E(i)&&this._doClickOrTapAction("doubleTap",t,i)}
/**
   * @private
   * @param {Actions} actionName
   * @param {Point} point
   * @param {PointerEvent} originalEvent
   */_doClickOrTapAction(t,i,e){var s;const{pswp:n}=this.gestures,{currSlide:o}=n,a=
/** @type {AddPostfix<Actions, 'Action'>} */t+"Action",r=n.options[a];if(!n.dispatch(a,{point:i,originalEvent:e}).defaultPrevented)if("function"!=typeof r)switch(r){case"close":case"next":n[r]();break;case"zoom":null==o||o.toggleZoom(i);break;case"zoom-or-close":(null==o?void 0:o.isZoomable())&&o.zoomLevels.secondary!==o.zoomLevels.initial?o.toggleZoom(i):n.options.clickToCloseNonZoomable&&n.close();break;case"toggle-controls":null==(s=this.gestures.pswp.element)||s.classList.toggle("pswp--ui-visible")}else r.call(n,i,e)}}class F{
/**
   * @param {PhotoSwipe} pswp
   */
constructor(t){this.pswp=t,this.dragAxis=null,this.p1={x:0,y:0},this.p2={x:0,y:0},this.prevP1={x:0,y:0},this.prevP2={x:0,y:0},this.startP1={x:0,y:0},this.startP2={x:0,y:0},this.velocity={x:0,y:0},this._lastStartP1={x:0,y:0},this._intervalP1={x:0,y:0},this._numActivePoints=0,this._ongoingPointers=[],this._touchEventEnabled="ontouchstart"in window,this._pointerEventEnabled=!!window.PointerEvent,this.supportsTouch=this._touchEventEnabled||this._pointerEventEnabled&&navigator.maxTouchPoints>1,this._numActivePoints=0,this._intervalTime=0,this._velocityCalculated=!1,this.isMultitouch=!1,this.isDragging=!1,this.isZooming=!1,this.raf=null,this._tapTimer=null,this.supportsTouch||(t.options.allowPanToNext=!1),this.drag=new Z(this),this.zoomLevels=new D(this),this.tapHandler=new M(this),t.on("bindEvents",(()=>{t.events.add(t.scrollWrap,"click",
/** @type EventListener */
this._onClick.bind(this)),this._pointerEventEnabled?this._bindEvents("pointer","down","up","cancel"):this._touchEventEnabled?(this._bindEvents("touch","start","end","cancel"),t.scrollWrap&&(t.scrollWrap.ontouchmove=()=>{},t.scrollWrap.ontouchend=()=>{})):this._bindEvents("mouse","down","up")}))}
/**
   * @private
   * @param {'mouse' | 'touch' | 'pointer'} pref
   * @param {'down' | 'start'} down
   * @param {'up' | 'end'} up
   * @param {'cancel'} [cancel]
   */_bindEvents(t,i,e,s){const{pswp:n}=this,{events:o}=n,a=s?t+s:"";o.add(n.scrollWrap,t+i,
/** @type EventListener */
this.onPointerDown.bind(this)),o.add(window,t+"move",
/** @type EventListener */
this.onPointerMove.bind(this)),o.add(window,t+e,
/** @type EventListener */
this.onPointerUp.bind(this)),a&&o.add(n.scrollWrap,a,
/** @type EventListener */
this.onPointerUp.bind(this))}
/**
   * @param {PointerEvent} e
   */onPointerDown(t){const i="mousedown"===t.type||"mouse"===t.pointerType;if(i&&t.button>0)return;const{pswp:e}=this;e.opener.isOpen?e.dispatch("pointerDown",{originalEvent:t}).defaultPrevented||(i&&(e.mouseDetected(),this._preventPointerEventBehaviour(t)),e.animations.stopAll(),this._updatePoints(t,"down"),1===this._numActivePoints&&(this.dragAxis=null,h(this.startP1,this.p1)),this._numActivePoints>1?(this._clearTapTimer(),this.isMultitouch=!0):this.isMultitouch=!1):t.preventDefault()}
/**
   * @param {PointerEvent} e
   */onPointerMove(t){t.preventDefault(),this._numActivePoints&&(this._updatePoints(t,"move"),this.pswp.dispatch("pointerMove",{originalEvent:t}).defaultPrevented||(1!==this._numActivePoints||this.isDragging?this._numActivePoints>1&&!this.isZooming&&(this._finishDrag(),this.isZooming=!0,this._updateStartPoints(),this.zoomLevels.start(),this._rafStopLoop(),this._rafRenderLoop()):(this.dragAxis||this._calculateDragDirection(),this.dragAxis&&!this.isDragging&&(this.isZooming&&(this.isZooming=!1,this.zoomLevels.end()),this.isDragging=!0,this._clearTapTimer(),this._updateStartPoints(),this._intervalTime=Date.now(),this._velocityCalculated=!1,h(this._intervalP1,this.p1),this.velocity.x=0,this.velocity.y=0,this.drag.start(),this._rafStopLoop(),this._rafRenderLoop()))))}
/**
   * @private
   */_finishDrag(){this.isDragging&&(this.isDragging=!1,this._velocityCalculated||this._updateVelocity(!0),this.drag.end(),this.dragAxis=null)}
/**
   * @param {PointerEvent} e
   */onPointerUp(t){this._numActivePoints&&(this._updatePoints(t,"up"),this.pswp.dispatch("pointerUp",{originalEvent:t}).defaultPrevented||(0===this._numActivePoints&&(this._rafStopLoop(),this.isDragging?this._finishDrag():this.isZooming||this.isMultitouch||this._finishTap(t)),this._numActivePoints<2&&this.isZooming&&(this.isZooming=!1,this.zoomLevels.end(),1===this._numActivePoints&&(this.dragAxis=null,this._updateStartPoints()))))}
/**
   * @private
   */_rafRenderLoop(){(this.isDragging||this.isZooming)&&(this._updateVelocity(),this.isDragging?d(this.p1,this.prevP1)||this.drag.change():d(this.p1,this.prevP1)&&d(this.p2,this.prevP2)||this.zoomLevels.change(),this._updatePrevPoints(),this.raf=requestAnimationFrame(this._rafRenderLoop.bind(this)))}
/**
   * Update velocity at 50ms interval
   *
   * @private
   * @param {boolean} [force]
   */_updateVelocity(t){const i=Date.now(),e=i-this._intervalTime;e<50&&!t||(this.velocity.x=this._getVelocity("x",e),this.velocity.y=this._getVelocity("y",e),this._intervalTime=i,h(this._intervalP1,this.p1),this._velocityCalculated=!0)}
/**
   * @private
   * @param {PointerEvent} e
   */_finishTap(t){const{mainScroll:i}=this.pswp;if(i.isShifted())return void i.moveIndexBy(0,!0);if(t.type.indexOf("cancel")>0)return;if("mouseup"===t.type||"mouse"===t.pointerType)return void this.tapHandler.click(this.startP1,t);const e=this.pswp.options.doubleTapAction?300:0;this._tapTimer?(this._clearTapTimer(),p(this._lastStartP1,this.startP1)<25&&this.tapHandler.doubleTap(this.startP1,t)):(h(this._lastStartP1,this.startP1),this._tapTimer=setTimeout((()=>{this.tapHandler.tap(this.startP1,t),this._clearTapTimer()}),e))}
/**
   * @private
   */_clearTapTimer(){this._tapTimer&&(clearTimeout(this._tapTimer),this._tapTimer=null)}
/**
   * Get velocity for axis
   *
   * @private
   * @param {'x' | 'y'} axis
   * @param {number} duration
   * @returns {number}
   */_getVelocity(t,i){const e=this.p1[t]-this._intervalP1[t];return Math.abs(e)>1&&i>5?e/i:0}
/**
   * @private
   */_rafStopLoop(){this.raf&&(cancelAnimationFrame(this.raf),this.raf=null)}
/**
   * @private
   * @param {PointerEvent} e
   */_preventPointerEventBehaviour(t){t.preventDefault()}
/**
   * Parses and normalizes points from the touch, mouse or pointer event.
   * Updates p1 and p2.
   *
   * @private
   * @param {PointerEvent | TouchEvent} e
   * @param {'up' | 'down' | 'move'} pointerType Normalized pointer type
   */_updatePoints(t,i){if(this._pointerEventEnabled){const e=
/** @type {PointerEvent} */t,s=this._ongoingPointers.findIndex((t=>t.id===e.pointerId));"up"===i&&s>-1?this._ongoingPointers.splice(s,1):"down"===i&&-1===s?this._ongoingPointers.push(this._convertEventPosToPoint(e,{x:0,y:0})):s>-1&&this._convertEventPosToPoint(e,this._ongoingPointers[s]),this._numActivePoints=this._ongoingPointers.length,this._numActivePoints>0&&h(this.p1,this._ongoingPointers[0]),this._numActivePoints>1&&h(this.p2,this._ongoingPointers[1])}else{const e=
/** @type {TouchEvent} */t;this._numActivePoints=0,e.type.indexOf("touch")>-1?e.touches&&e.touches.length>0&&(this._convertEventPosToPoint(e.touches[0],this.p1),this._numActivePoints++,e.touches.length>1&&(this._convertEventPosToPoint(e.touches[1],this.p2),this._numActivePoints++)):(this._convertEventPosToPoint(
/** @type {PointerEvent} */
t,this.p1),"up"===i?this._numActivePoints=0:this._numActivePoints++)}}
/** update points that were used during previous rAF tick
   * @private
   */_updatePrevPoints(){h(this.prevP1,this.p1),h(this.prevP2,this.p2)}
/** update points at the start of gesture
   * @private
   */_updateStartPoints(){h(this.startP1,this.p1),h(this.startP2,this.p2),this._updatePrevPoints()}
/** @private */_calculateDragDirection(){if(this.pswp.mainScroll.isShifted())this.dragAxis="x";else{const t=Math.abs(this.p1.x-this.startP1.x)-Math.abs(this.p1.y-this.startP1.y);if(0!==t){const i=t>0?"x":"y";Math.abs(this.p1[i]-this.startP1[i])>=10&&(this.dragAxis=i)}}}
/**
   * Converts touch, pointer or mouse event
   * to PhotoSwipe point.
   *
   * @private
   * @param {Touch | PointerEvent} e
   * @param {Point} p
   * @returns {Point}
   */_convertEventPosToPoint(t,i){return i.x=t.pageX-this.pswp.offset.x,i.y=t.pageY-this.pswp.offset.y,"pointerId"in t?i.id=t.pointerId:void 0!==t.identifier&&(i.id=t.identifier),i}
/**
   * @private
   * @param {PointerEvent} e
   */_onClick(t){this.pswp.mainScroll.isShifted()&&(t.preventDefault(),t.stopPropagation())}}class B{
/**
   * @param {PhotoSwipe} pswp
   */
constructor(t){this.pswp=t,this.x=0,this.slideWidth=0,this._currPositionIndex=0,this._prevPositionIndex=0,this._containerShiftIndex=-1,this.itemHolders=[]}
/**
   * Position the scroller and slide containers
   * according to viewport size.
   *
   * @param {boolean} [resizeSlides] Whether slides content should resized
   */resize(t){const{pswp:i}=this,e=Math.round(i.viewportSize.x+i.viewportSize.x*i.options.spacing),s=e!==this.slideWidth;s&&(this.slideWidth=e,this.moveTo(this.getCurrSlideX())),this.itemHolders.forEach(((i,e)=>{s&&u(i.el,(e+this._containerShiftIndex)*this.slideWidth),t&&i.slide&&i.slide.resize()}))}
/**
   * Reset X position of the main scroller to zero
   */resetPosition(){this._currPositionIndex=0,this._prevPositionIndex=0,this.slideWidth=0,this._containerShiftIndex=-1}
/**
   * Create and append array of three items
   * that hold data about slides in DOM
   */appendHolders(){this.itemHolders=[];for(let t=0;t<3;t++){const i=r("pswp__item","div",this.pswp.container);i.setAttribute("role","group"),i.setAttribute("aria-roledescription","slide"),i.setAttribute("aria-hidden","true"),i.style.display=1===t?"block":"none",this.itemHolders.push({el:i})}}
/**
   * Whether the main scroll can be horizontally swiped to the next or previous slide.
   * @returns {boolean}
   */canBeSwiped(){return this.pswp.getNumItems()>1}
/**
   * Move main scroll by X amount of slides.
   * For example:
   *   `-1` will move to the previous slide,
   *    `0` will reset the scroll position of the current slide,
   *    `3` will move three slides forward
   *
   * If loop option is enabled - index will be automatically looped too,
   * (for example `-1` will move to the last slide of the gallery).
   *
   * @param {number} diff
   * @param {boolean} [animate]
   * @param {number} [velocityX]
   * @returns {boolean} whether index was changed or not
   */moveIndexBy(t,i,e){const{pswp:s}=this;let n=s.potentialIndex+t;const o=s.getNumItems();if(s.canLoop()){n=s.getLoopedIndex(n);const i=(t+o)%o;t=i<=o/2?i:i-o}else n<0?n=0:n>=o&&(n=o-1),t=n-s.potentialIndex;s.potentialIndex=n,this._currPositionIndex-=t,s.animations.stopMainScroll();const a=this.getCurrSlideX();if(i){s.animations.startSpring({isMainScroll:!0,start:this.x,end:a,velocity:e||0,naturalFrequency:30,dampingRatio:1,
//0.7,
onUpdate:t=>{this.moveTo(t)},onComplete:()=>{this.updateCurrItem(),s.appendHeavy()}});let t=s.potentialIndex-s.currIndex;if(s.canLoop()){const i=(t+o)%o;t=i<=o/2?i:i-o}Math.abs(t)>1&&this.updateCurrItem()}else this.moveTo(a),this.updateCurrItem();return Boolean(t)}
/**
   * X position of the main scroll for the current slide
   * (ignores position during dragging)
   * @returns {number}
   */getCurrSlideX(){return this.slideWidth*this._currPositionIndex}
/**
   * Whether scroll position is shifted.
   * For example, it will return true if the scroll is being dragged or animated.
   * @returns {boolean}
   */isShifted(){return this.x!==this.getCurrSlideX()}
/**
   * Update slides X positions and set their content
   */updateCurrItem(){var t;const{pswp:i}=this,e=this._prevPositionIndex-this._currPositionIndex;if(!e)return;this._prevPositionIndex=this._currPositionIndex,i.currIndex=i.potentialIndex;let s,n=Math.abs(e);n>=3&&(this._containerShiftIndex+=e+(e>0?-3:3),n=3);for(let o=0;o<n;o++)e>0?(s=this.itemHolders.shift(),s&&(this.itemHolders[2]=s,this._containerShiftIndex++,u(s.el,(this._containerShiftIndex+2)*this.slideWidth),i.setContent(s,i.currIndex-n+o+2))):(s=this.itemHolders.pop(),s&&(this.itemHolders.unshift(s),this._containerShiftIndex--,u(s.el,this._containerShiftIndex*this.slideWidth),i.setContent(s,i.currIndex+n-o-2)));Math.abs(this._containerShiftIndex)>50&&!this.isShifted()&&(this.resetPosition(),this.resize()),i.animations.stopAllPan(),this.itemHolders.forEach(((t,i)=>{t.slide&&t.slide.setIsActive(1===i)})),i.currSlide=null==(t=this.itemHolders[1])?void 0:t.slide,i.contentLoader.updateLazy(e),i.currSlide&&i.currSlide.applyCurrentZoomPan(),i.dispatch("change")}
/**
   * Move the X position of the main scroll container
   *
   * @param {number} x
   * @param {boolean} [dragging]
   */moveTo(t,i){if(!this.pswp.canLoop()&&i){let i=(this.slideWidth*this._currPositionIndex-t)/this.slideWidth;i+=this.pswp.currIndex;const e=Math.round(t-this.x);(i<0&&e>0||i>=this.pswp.getNumItems()-1&&e<0)&&(t=this.x+.35*e)}this.x=t,this.pswp.container&&u(this.pswp.container,t),this.pswp.dispatch("moveMainScroll",{x:t,dragging:null!=i&&i})}}const R={Escape:27,z:90,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Tab:9},H=(t,i)=>i?t:R[t];class k{
/**
   * @param {PhotoSwipe} pswp
   */
constructor(t){this.pswp=t,this._wasFocused=!1,t.on("bindEvents",(()=>{t.options.initialPointerPos||this._focusRoot(),t.events.add(document,"focusin",
/** @type EventListener */
this._onFocusIn.bind(this)),t.events.add(document,"keydown",
/** @type EventListener */
this._onKeyDown.bind(this))}));const i=
/** @type {HTMLElement} */document.activeElement;t.on("destroy",(()=>{t.options.returnFocus&&i&&this._wasFocused&&i.focus()}))}
/** @private */_focusRoot(){!this._wasFocused&&this.pswp.element&&(this.pswp.element.focus(),this._wasFocused=!0)}
/**
   * @private
   * @param {KeyboardEvent} e
   */_onKeyDown(t){const{pswp:i}=this;if(i.dispatch("keydown",{originalEvent:t}).defaultPrevented)return;if(function(t){return"button"in t&&1===t.button||t.ctrlKey||t.metaKey||t.altKey||t.shiftKey}(t))return;let e,s,n=!1;const o="key"in t;switch(o?t.key:t.keyCode){case H("Escape",o):i.options.escKey&&(e="close");break;case H("z",o):e="toggleZoom";break;case H("ArrowLeft",o):s="x";break;case H("ArrowUp",o):s="y";break;case H("ArrowRight",o):s="x",n=!0;break;case H("ArrowDown",o):n=!0,s="y";break;case H("Tab",o):this._focusRoot()}if(s){t.preventDefault();const{currSlide:o}=i;i.options.arrowKeys&&"x"===s&&i.getNumItems()>1?e=n?"next":"prev":o&&o.currZoomLevel>o.zoomLevels.fit&&(o.pan[s]+=n?-80:80,o.panTo(o.pan.x,o.pan.y))}e&&(t.preventDefault(),i[e]())}
/**
   * Trap focus inside photoswipe
   *
   * @private
   * @param {FocusEvent} e
   */_onFocusIn(t){const{template:i}=this.pswp;i&&document!==t.target&&i!==t.target&&!i.contains(
/** @type {Node} */
t.target)&&i.focus()}}const W="cubic-bezier(.4,0,.22,1)";class N{
/**
   * onComplete can be unpredictable, be careful about current state
   *
   * @param {CssAnimationProps} props
   */
constructor(t){var i;this.props=t;const{target:e,onComplete:s,transform:n,onFinish:o=(()=>{}),duration:a=333,easing:r=W}=t;this.onFinish=o;const h=n?"transform":"opacity",l=null!=(i=t[h])?i:"";this._target=e,this._onComplete=s,this._finished=!1,this._onTransitionEnd=this._onTransitionEnd.bind(this),this._helperTimeout=setTimeout((()=>{v(e,h,a,r),this._helperTimeout=setTimeout((()=>{e.addEventListener("transitionend",this._onTransitionEnd,!1),e.addEventListener("transitioncancel",this._onTransitionEnd,!1),this._helperTimeout=setTimeout((()=>{this._finalizeAnimation()}),a+500),e.style[h]=l}),30)}),0)}
/**
   * @private
   * @param {TransitionEvent} e
   */_onTransitionEnd(t){t.target===this._target&&this._finalizeAnimation()}
/**
   * @private
   */_finalizeAnimation(){this._finished||(this._finished=!0,this.onFinish(),this._onComplete&&this._onComplete())}
// Destroy is called automatically onFinish
destroy(){this._helperTimeout&&clearTimeout(this._helperTimeout),v(this._target),this._target.removeEventListener("transitionend",this._onTransitionEnd,!1),this._target.removeEventListener("transitioncancel",this._onTransitionEnd,!1),this._finished||this._finalizeAnimation()}}class V{
/**
   * @param {number} initialVelocity Initial velocity, px per ms.
   *
   * @param {number} [dampingRatio]
   * Determines how bouncy animation will be.
   * From 0 to 1, 0 - always overshoot, 1 - do not overshoot.
   * "overshoot" refers to part of animation that
   * goes beyond the final value.
   *
   * @param {number} [naturalFrequency]
   * Determines how fast animation will slow down.
   * The higher value - the stiffer the transition will be,
   * and the faster it will slow down.
   * Recommended value from 10 to 50
   */
constructor(t,i,e){this.velocity=1e3*t,this._dampingRatio=i||.75,this._naturalFrequency=e||12,this._dampedFrequency=this._naturalFrequency,this._dampingRatio<1&&(this._dampedFrequency*=Math.sqrt(1-this._dampingRatio*this._dampingRatio))}
/**
   * @param {number} deltaPosition Difference between current and end position of the animation
   * @param {number} deltaTime Frame duration in milliseconds
   *
   * @returns {number} Displacement, relative to the end position.
   */easeFrame(t,i){let e,s=0;i/=1e3;const o=n(Math.E,-this._dampingRatio*this._naturalFrequency*i);if(1===this._dampingRatio)e=this.velocity+this._naturalFrequency*t,s=(t+e*i)*o,this.velocity=s*-this._naturalFrequency+e*o;else if(this._dampingRatio<1){e=1/this._dampedFrequency*(this._dampingRatio*this._naturalFrequency*t+this.velocity);const n=Math.cos(this._dampedFrequency*i),a=Math.sin(this._dampedFrequency*i);s=o*(t*n+e*a),this.velocity=s*-this._naturalFrequency*this._dampingRatio+o*(-this._dampedFrequency*t*a+this._dampedFrequency*e*n)}return s}}class q{
/**
   * @param {SpringAnimationProps} props
   */
constructor(t){this.props=t,this._raf=0;const{start:i,end:e,velocity:s,onUpdate:n,onComplete:o,onFinish:a=(()=>{}),dampingRatio:r,naturalFrequency:h}=t;this.onFinish=a;const l=new V(s,r,h);let p=Date.now(),d=i-e;const c=()=>{this._raf&&(d=l.easeFrame(d,Date.now()-p),Math.abs(d)<1&&Math.abs(l.velocity)<50?(n(e),o&&o(),this.onFinish()):(p=Date.now(),n(d+e),this._raf=requestAnimationFrame(c)))};this._raf=requestAnimationFrame(c)}
// Destroy is called automatically onFinish
destroy(){this._raf>=0&&cancelAnimationFrame(this._raf),this._raf=0}}class U{constructor(){this.activeAnimations=[]}
/**
   * @param {SpringAnimationProps} props
   */startSpring(t){this._start(t,!0)}
/**
   * @param {CssAnimationProps} props
   */startTransition(t){this._start(t)}
/**
   * @private
   * @param {AnimationProps} props
   * @param {boolean} [isSpring]
   * @returns {Animation}
   */_start(t,i){const e=i?new q(
/** @type SpringAnimationProps */
t):new N(
/** @type CssAnimationProps */
t);return this.activeAnimations.push(e),e.onFinish=()=>this.stop(e),e}
/**
   * @param {Animation} animation
   */stop(t){t.destroy();const i=this.activeAnimations.indexOf(t);i>-1&&this.activeAnimations.splice(i,1)}stopAll(){this.activeAnimations.forEach((t=>{t.destroy()})),this.activeAnimations=[]}
/**
   * Stop all pan or zoom transitions
   */stopAllPan(){this.activeAnimations=this.activeAnimations.filter((t=>!t.props.isPan||(t.destroy(),!1)))}stopMainScroll(){this.activeAnimations=this.activeAnimations.filter((t=>!t.props.isMainScroll||(t.destroy(),!1)))}
/**
   * Returns true if main scroll transition is running
   */
// isMainScrollRunning() {
//   return this.activeAnimations.some((animation) => {
//     return animation.props.isMainScroll;
//   });
// }
/**
   * Returns true if any pan or zoom transition is running
   */
isPanRunning(){return this.activeAnimations.some((t=>t.props.isPan))}}class G{
/**
   * @param {PhotoSwipe} pswp
   */
constructor(t){this.pswp=t,t.events.add(t.element,"wheel",
/** @type EventListener */
this._onWheel.bind(this))}
/**
   * @private
   * @param {WheelEvent} e
   */_onWheel(t){t.preventDefault();const{currSlide:i}=this.pswp;let{deltaX:e,deltaY:s}=t;if(i&&!this.pswp.dispatch("wheel",{originalEvent:t}).defaultPrevented)if(t.ctrlKey||this.pswp.options.wheelToZoom){if(i.isZoomable()){let e=-s;1===t.deltaMode?e*=.05:e*=t.deltaMode?1:.002,e=n(2,e);const o=i.currZoomLevel*e;i.zoomTo(o,{x:t.clientX,y:t.clientY})}}else i.isPannable()&&(1===t.deltaMode&&(e*=18,s*=18),i.panTo(i.pan.x-e,i.pan.y-s))}}class K{
/**
   * @param {PhotoSwipe} pswp
   * @param {UIElementData} data
   */
constructor(t,i){const e=i.name||i.className;let s=i.html;if(!1===t.options[e])return;"string"==typeof t.options[e+"SVG"]&&(s=t.options[e+"SVG"]),t.dispatch("uiElementCreate",{data:i});let n="";i.isButton?(n+="pswp__button ",n+=i.className||`pswp__button--${i.name}`):n+=i.className||`pswp__${i.name}`;let o=i.isButton?i.tagName||"button":i.tagName||"div";o=/** @type {keyof HTMLElementTagNameMap} */
o.toLowerCase();const a=r(n,o);if(i.isButton){"button"===o&&(a.type="button");let{title:s}=i;const{ariaLabel:n}=i;"string"==typeof t.options[e+"Title"]&&(s=t.options[e+"Title"]),s&&(a.title=s);const r=n||s;r&&a.setAttribute("aria-label",r)}a.innerHTML=function(t){if("string"==typeof t)return t;if(!t||!t.isCustomSVG)return"";const i=t;let e='<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 %d %d" width="%d" height="%d">';return e=e.split("%d").join(
/** @type {string} */
i.size||32),i.outlineID&&(e+='<use class="pswp__icn-shadow" xlink:href="#'+i.outlineID+'"/>'),e+=i.inner,e+="</svg>",e}(s),i.onInit&&i.onInit(a,t),i.onClick&&(a.onclick=e=>{"string"==typeof i.onClick?t[i.onClick]():"function"==typeof i.onClick&&i.onClick(e,a,t)});const h=i.appendTo||"bar";let l=t.element;"bar"===h?(t.topBar||(t.topBar=r("pswp__top-bar pswp__hide-on-close","div",t.scrollWrap)),l=t.topBar):(a.classList.add("pswp__hide-on-close"),"wrapper"===h&&(l=t.scrollWrap)),null==l||l.appendChild(t.applyFilters("uiElement",a,i))}}function $(t,i,e){t.classList.add("pswp__button--arrow"),t.setAttribute("aria-controls","pswp__items"),i.on("change",(()=>{i.options.loop||(t.disabled=e?!(i.currIndex<i.getNumItems()-1):!(i.currIndex>0))}))}const X={name:"arrowPrev",className:"pswp__button--arrow--prev",title:"Previous",order:10,isButton:!0,appendTo:"wrapper",html:{isCustomSVG:!0,size:60,inner:'<path d="M29 43l-3 3-16-16 16-16 3 3-13 13 13 13z" id="pswp__icn-arrow"/>',outlineID:"pswp__icn-arrow"},onClick:"prev",onInit:$},j={name:"arrowNext",className:"pswp__button--arrow--next",title:"Next",order:11,isButton:!0,appendTo:"wrapper",html:{isCustomSVG:!0,size:60,inner:'<use xlink:href="#pswp__icn-arrow"/>',outlineID:"pswp__icn-arrow"},onClick:"next",onInit:(t,i)=>{$(t,i,!0)}},Y={name:"close",title:"Close",order:20,isButton:!0,html:{isCustomSVG:!0,inner:'<path d="M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z" id="pswp__icn-close"/>',outlineID:"pswp__icn-close"},onClick:"close"},J={name:"zoom",title:"Zoom",order:10,isButton:!0,html:{isCustomSVG:!0,
// eslint-disable-next-line max-len
inner:'<path d="M17.426 19.926a6 6 0 1 1 1.5-1.5L23 22.5 21.5 24l-4.074-4.074z" id="pswp__icn-zoom"/><path fill="currentColor" class="pswp__zoom-icn-bar-h" d="M11 16v-2h6v2z"/><path fill="currentColor" class="pswp__zoom-icn-bar-v" d="M13 12h2v6h-2z"/>',outlineID:"pswp__icn-zoom"},onClick:"toggleZoom"},Q={name:"preloader",appendTo:"bar",order:7,html:{isCustomSVG:!0,
// eslint-disable-next-line max-len
inner:'<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2 16a5.2 5.2 0 1 1-5.2-5.2V8a8 8 0 1 0 8 8h-2.8Z" id="pswp__icn-loading"/>',outlineID:"pswp__icn-loading"},onInit:(t,i)=>{let e,s=null;const n=i=>{var s,n;e!==i&&(e=i,s="active",n=i,t.classList.toggle("pswp__preloader--"+s,n))},o=()=>{var t;if(!(null==(t=i.currSlide)?void 0:t.content.isLoading()))return n(!1),void(s&&(clearTimeout(s),s=null));s||(s=setTimeout((()=>{var t;n(Boolean(null==(t=i.currSlide)?void 0:t.content.isLoading())),s=null}),i.options.preloaderDelay))};i.on("change",o),i.on("loadComplete",(t=>{i.currSlide===t.slide&&o()})),i.ui&&(i.ui.updatePreloaderVisibility=o)}},tt={name:"counter",order:5,onInit:(t,i)=>{i.on("change",(()=>{t.innerText=i.currIndex+1+i.options.indexIndicatorSep+i.getNumItems()}))}};function it(t,i){t.classList.toggle("pswp--zoomed-in",i)}class et{
/**
   * @param {PhotoSwipe} pswp
   */
constructor(t){this.pswp=t,this.isRegistered=!1,this.uiElementsData=[],this.items=[],this.updatePreloaderVisibility=()=>{},this._lastUpdatedZoomLevel=void 0}init(){const{pswp:t}=this;this.isRegistered=!1,this.uiElementsData=[Y,X,j,J,Q,tt],t.dispatch("uiRegister"),this.uiElementsData.sort(((t,i)=>(t.order||0)-(i.order||0))),this.items=[],this.isRegistered=!0,this.uiElementsData.forEach((t=>{this.registerElement(t)})),t.on("change",(()=>{var i;null==(i=t.element)||i.classList.toggle("pswp--one-slide",1===t.getNumItems())})),t.on("zoomPanUpdate",(()=>this._onZoomPanUpdate()))}
/**
   * @param {UIElementData} elementData
   */registerElement(t){this.isRegistered?this.items.push(new K(this.pswp,t)):this.uiElementsData.push(t)}
/**
   * Fired each time zoom or pan position is changed.
   * Update classes that control visibility of zoom button and cursor icon.
   *
   * @private
   */_onZoomPanUpdate(){const{template:t,currSlide:i,options:e}=this.pswp;if(this.pswp.opener.isClosing||!t||!i)return;let{currZoomLevel:s}=i;if(this.pswp.opener.isOpen||(s=i.zoomLevels.initial),s===this._lastUpdatedZoomLevel)return;this._lastUpdatedZoomLevel=s;const n=i.zoomLevels.initial-i.zoomLevels.secondary;if(Math.abs(n)<.01||!i.isZoomable())return it(t,!1),void t.classList.remove("pswp--zoom-allowed");t.classList.add("pswp--zoom-allowed");it(t,(s===i.zoomLevels.initial?i.zoomLevels.secondary:i.zoomLevels.initial)<=s),"zoom"!==e.imageClickAction&&"zoom-or-close"!==e.imageClickAction||t.classList.add("pswp--click-to-zoom")}}class st{
/**
   * @param {T} type
   * @param {PhotoSwipeEventsMap[T]} [details]
   */
constructor(t,i){this.type=t,this.defaultPrevented=!1,i&&Object.assign(this,i)}preventDefault(){this.defaultPrevented=!0}}class nt{constructor(){this._listeners={},this._filters={},this.pswp=void 0,this.options=void 0}
/**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {PhotoSwipeFiltersMap[T]} fn
   * @param {number} priority
   */addFilter(t,i,e=100){var s,n,o;this._filters[t]||(this._filters[t]=[]),null==(s=this._filters[t])||s.push({fn:i,priority:e}),null==(n=this._filters[t])||n.sort(((t,i)=>t.priority-i.priority)),null==(o=this.pswp)||o.addFilter(t,i,e)}
/**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {PhotoSwipeFiltersMap[T]} fn
   */removeFilter(t,i){this._filters[t]&&(this._filters[t]=this._filters[t].filter((t=>t.fn!==i))),this.pswp&&this.pswp.removeFilter(t,i)}
/**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {Parameters<PhotoSwipeFiltersMap[T]>} args
   * @returns {Parameters<PhotoSwipeFiltersMap[T]>[0]}
   */applyFilters(t,...i){var e;return null==(e=this._filters[t])||e.forEach((t=>{i[0]=t.fn.apply(this,i)})),i[0]}
/**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {EventCallback<T>} fn
   */on(t,i){var e,s;this._listeners[t]||(this._listeners[t]=[]),null==(e=this._listeners[t])||e.push(i),null==(s=this.pswp)||s.on(t,i)}
/**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {EventCallback<T>} fn
   */off(t,i){var e;this._listeners[t]&&(this._listeners[t]=this._listeners[t].filter((t=>i!==t))),null==(e=this.pswp)||e.off(t,i)}
/**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {PhotoSwipeEventsMap[T]} [details]
   * @returns {AugmentedEvent<T>}
   */dispatch(t,i){var e;if(this.pswp)return this.pswp.dispatch(t,i);const s=
/** @type {AugmentedEvent<T>} */new st(t,i);return null==(e=this._listeners[t])||e.forEach((t=>{t.call(this,s)})),s}}class ot{
/**
   * @param {string | false} imageSrc
   * @param {HTMLElement} container
   */
constructor(t,i){if(this.element=r("pswp__img pswp__img--placeholder",t?"img":"div",i),t){const i=
/** @type {HTMLImageElement} */this.element;i.decoding="async",i.alt="",i.src=t,i.setAttribute("role","presentation")}this.element.setAttribute("aria-hidden","true")}
/**
   * @param {number} width
   * @param {number} height
   */setDisplayedSize(t,i){this.element&&("IMG"===this.element.tagName?(g(this.element,250,"auto"),this.element.style.transformOrigin="0 0",this.element.style.transform=m(0,0,t/250)):g(this.element,t,i))}destroy(){var t;(null==(t=this.element)?void 0:t.parentNode)&&this.element.remove(),this.element=null}}class at{
/**
   * @param {SlideData} itemData Slide data
   * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox instance
   * @param {number} index
   */
constructor(t,i,e){this.instance=i,this.data=t,this.index=e,this.element=void 0,this.placeholder=void 0,this.slide=void 0,this.displayedImageWidth=0,this.displayedImageHeight=0,this.width=Number(this.data.w)||Number(this.data.width)||0,this.height=Number(this.data.h)||Number(this.data.height)||0,this.isAttached=!1,this.hasSlide=!1,this.isDecoding=!1,this.state=y,this.data.type?this.type=this.data.type:this.data.src?this.type="image":this.type="html",this.instance.dispatch("contentInit",{content:this})}removePlaceholder(){this.placeholder&&!this.keepPlaceholder()&&setTimeout((()=>{this.placeholder&&(this.placeholder.destroy(),this.placeholder=void 0)}),1e3)}
/**
   * Preload content
   *
   * @param {boolean} isLazy
   * @param {boolean} [reload]
   */load(t,i){if(this.slide&&this.usePlaceholder())if(this.placeholder){const t=this.placeholder.element;t&&!t.parentElement&&this.slide.container.prepend(t)}else{const t=this.instance.applyFilters("placeholderSrc",
// use  image-based placeholder only for the first slide,
// as rendering (even small stretched thumbnail) is an expensive operation
!(!this.data.msrc||!this.slide.isFirstSlide)&&this.data.msrc,this);this.placeholder=new ot(t,this.slide.container)}this.element&&!i||this.instance.dispatch("contentLoad",{content:this,isLazy:t}).defaultPrevented||(this.isImageContent()?(this.element=r("pswp__img","img"),this.displayedImageWidth&&this.loadImage(t)):(this.element=r("pswp__content","div"),this.element.innerHTML=this.data.html||""),i&&this.slide&&this.slide.updateContentSize(!0))}
/**
   * Preload image
   *
   * @param {boolean} isLazy
   */loadImage(t){var i,e;if(!this.isImageContent()||!this.element||this.instance.dispatch("contentLoadImage",{content:this,isLazy:t}).defaultPrevented)return;const s=
/** @type HTMLImageElement */this.element;this.updateSrcsetSizes(),this.data.srcset&&(s.srcset=this.data.srcset),s.src=null!=(i=this.data.src)?i:"",s.alt=null!=(e=this.data.alt)?e:"",this.state=f,s.complete?this.onLoaded():(s.onload=()=>{this.onLoaded()},s.onerror=()=>{this.onError()})}
/**
   * Assign slide to content
   *
   * @param {Slide} slide
   */setSlide(t){this.slide=t,this.hasSlide=!0,this.instance=t.pswp}
/**
   * Content load success handler
   */onLoaded(){this.state=w,this.slide&&this.element&&(this.instance.dispatch("loadComplete",{slide:this.slide,content:this}),this.slide.isActive&&this.slide.heavyAppended&&!this.element.parentNode&&(this.append(),this.slide.updateContentSize(!0)),this.state!==w&&this.state!==x||this.removePlaceholder())}
/**
   * Content load error handler
   */onError(){this.state=x,this.slide&&(this.displayError(),this.instance.dispatch("loadComplete",{slide:this.slide,isError:!0,content:this}),this.instance.dispatch("loadError",{slide:this.slide,content:this}))}
/**
   * @returns {Boolean} If the content is currently loading
   */isLoading(){return this.instance.applyFilters("isContentLoading",this.state===f,this)}
/**
   * @returns {Boolean} If the content is in error state
   */isError(){return this.state===x}
/**
   * @returns {boolean} If the content is image
   */isImageContent(){return"image"===this.type}
/**
   * Update content size
   *
   * @param {Number} width
   * @param {Number} height
   */setDisplayedSize(t,i){if(this.element&&(this.placeholder&&this.placeholder.setDisplayedSize(t,i),!this.instance.dispatch("contentResize",{content:this,width:t,height:i}).defaultPrevented&&(g(this.element,t,i),this.isImageContent()&&!this.isError()))){const e=!this.displayedImageWidth&&t;this.displayedImageWidth=t,this.displayedImageHeight=i,e?this.loadImage(!1):this.updateSrcsetSizes(),this.slide&&this.instance.dispatch("imageSizeChange",{slide:this.slide,width:t,height:i,content:this})}}
/**
   * @returns {boolean} If the content can be zoomed
   */isZoomable(){return this.instance.applyFilters("isContentZoomable",this.isImageContent()&&this.state!==x,this)}
/**
   * Update image srcset sizes attribute based on width and height
   */updateSrcsetSizes(){if(!this.isImageContent()||!this.element||!this.data.srcset)return;const t=
/** @type HTMLImageElement */this.element,i=this.instance.applyFilters("srcsetSizesWidth",this.displayedImageWidth,this);(!t.dataset.largestUsedSize||i>parseInt(t.dataset.largestUsedSize,10))&&(t.sizes=i+"px",t.dataset.largestUsedSize=String(i))}
/**
   * @returns {boolean} If content should use a placeholder (from msrc by default)
   */usePlaceholder(){return this.instance.applyFilters("useContentPlaceholder",this.isImageContent(),this)}
/**
   * Preload content with lazy-loading param
   */lazyLoad(){this.instance.dispatch("contentLazyLoad",{content:this}).defaultPrevented||this.load(!0)}
/**
   * @returns {boolean} If placeholder should be kept after content is loaded
   */keepPlaceholder(){return this.instance.applyFilters("isKeepingPlaceholder",this.isLoading(),this)}
/**
   * Destroy the content
   */destroy(){this.hasSlide=!1,this.slide=void 0,this.instance.dispatch("contentDestroy",{content:this}).defaultPrevented||(this.remove(),this.placeholder&&(this.placeholder.destroy(),this.placeholder=void 0),this.isImageContent()&&this.element&&(this.element.onload=null,this.element.onerror=null,this.element=void 0))}
/**
   * Display error message
   */displayError(){var t,i;if(this.slide){let e=r("pswp__error-msg","div");e.innerText=null!=(i=null==(t=this.instance.options)?void 0:t.errorMsg)?i:"",e=/** @type {HTMLDivElement} */
this.instance.applyFilters("contentErrorElement",e,this),this.element=r("pswp__content pswp__error-msg-container","div"),this.element.appendChild(e),this.slide.container.innerText="",this.slide.container.appendChild(this.element),this.slide.updateContentSize(!0),this.removePlaceholder()}}
/**
   * Append the content
   */append(){if(this.isAttached||!this.element)return;if(this.isAttached=!0,this.state===x)return void this.displayError();if(this.instance.dispatch("contentAppend",{content:this}).defaultPrevented)return;const t="decode"in this.element;this.isImageContent()?t&&this.slide&&(!this.slide.isActive||P())?(this.isDecoding=!0,this.element.decode().catch((()=>{})).finally((()=>{this.isDecoding=!1,this.appendImage()}))):this.appendImage():this.slide&&!this.element.parentNode&&this.slide.container.appendChild(this.element)}
/**
   * Activate the slide,
   * active slide is generally the current one,
   * meaning the user can see it.
   */activate(){!this.instance.dispatch("contentActivate",{content:this}).defaultPrevented&&this.slide&&(this.isImageContent()&&this.isDecoding&&!P()?this.appendImage():this.isError()&&this.load(!1,!0),this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","false"))}
/**
   * Deactivate the content
   */deactivate(){this.instance.dispatch("contentDeactivate",{content:this}),this.slide&&this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","true")}
/**
   * Remove the content from DOM
   */remove(){this.isAttached=!1,this.instance.dispatch("contentRemove",{content:this}).defaultPrevented||(this.element&&this.element.parentNode&&this.element.remove(),this.placeholder&&this.placeholder.element&&this.placeholder.element.remove())}
/**
   * Append the image content to slide container
   */appendImage(){this.isAttached&&(this.instance.dispatch("contentAppendImage",{content:this}).defaultPrevented||(this.slide&&this.element&&!this.element.parentNode&&this.slide.container.appendChild(this.element),this.state!==w&&this.state!==x||this.removePlaceholder()))}}function rt(t,i,e){const s=i.createContentFromData(t,e);let n;const{options:o}=i;if(o){let a;n=new A(o,t,-1),a=i.pswp?i.pswp.viewportSize:z(o,i);const r=I(o,a,t,e);n.update(s.width,s.height,r)}return s.lazyLoad(),n&&s.setDisplayedSize(Math.ceil(s.width*n.initial),Math.ceil(s.height*n.initial)),s}class ht{
/**
   * @param {PhotoSwipe} pswp
   */
constructor(t){this.pswp=t,this.limit=Math.max(t.options.preload[0]+t.options.preload[1]+1,5),this._cachedItems=[]}
/**
   * Lazy load nearby slides based on `preload` option.
   *
   * @param {number} [diff] Difference between slide indexes that was changed recently, or 0.
   */updateLazy(t){const{pswp:i}=this;if(i.dispatch("lazyLoad").defaultPrevented)return;const{preload:e}=i.options,s=void 0===t||t>=0;let n;for(n=0;n<=e[1];n++)this.loadSlideByIndex(i.currIndex+(s?n:-n));for(n=1;n<=e[0];n++)this.loadSlideByIndex(i.currIndex+(s?-n:n))}
/**
   * @param {number} initialIndex
   */loadSlideByIndex(t){const i=this.pswp.getLoopedIndex(t);let e=this.getContentByIndex(i);e||(e=function(t,i){const e=i.getItemData(t);if(!i.dispatch("lazyLoadSlide",{index:t,itemData:e}).defaultPrevented)return rt(e,i,t)}(i,this.pswp),e&&this.addToCache(e))}
/**
   * @param {Slide} slide
   * @returns {Content}
   */getContentBySlide(t){let i=this.getContentByIndex(t.index);return i||(i=this.pswp.createContentFromData(t.data,t.index),this.addToCache(i)),i.setSlide(t),i}
/**
   * @param {Content} content
   */addToCache(t){if(this.removeByIndex(t.index),this._cachedItems.push(t),this._cachedItems.length>this.limit){const t=this._cachedItems.findIndex((t=>!t.isAttached&&!t.hasSlide));if(-1!==t){this._cachedItems.splice(t,1)[0].destroy()}}}
/**
   * Removes an image from cache, does not destroy() it, just removes.
   *
   * @param {number} index
   */removeByIndex(t){const i=this._cachedItems.findIndex((i=>i.index===t));-1!==i&&this._cachedItems.splice(i,1)}
/**
   * @param {number} index
   * @returns {Content | undefined}
   */getContentByIndex(t){return this._cachedItems.find((i=>i.index===t))}destroy(){this._cachedItems.forEach((t=>t.destroy())),this._cachedItems=[]}}class lt extends nt{
/**
   * Get total number of slides
   *
   * @returns {number}
   */
getNumItems(){var t;let i=0;const e=null==(t=this.options)?void 0:t.dataSource;e&&"length"in e?i=e.length:e&&"gallery"in e&&(e.items||(e.items=this._getGalleryDOMElements(e.gallery)),e.items&&(i=e.items.length));const s=this.dispatch("numItems",{dataSource:e,numItems:i});return this.applyFilters("numItems",s.numItems,e)}
/**
   * @param {SlideData} slideData
   * @param {number} index
   * @returns {Content}
   */createContentFromData(t,i){return new at(t,this,i)}
/**
   * Get item data by index.
   *
   * "item data" should contain normalized information that PhotoSwipe needs to generate a slide.
   * For example, it may contain properties like
   * `src`, `srcset`, `w`, `h`, which will be used to generate a slide with image.
   *
   * @param {number} index
   * @returns {SlideData}
   */getItemData(t){var i;const e=null==(i=this.options)?void 0:i.dataSource;let s={};Array.isArray(e)?s=e[t]:e&&"gallery"in e&&(e.items||(e.items=this._getGalleryDOMElements(e.gallery)),s=e.items[t]);let n=s;n instanceof Element&&(n=this._domElementToItemData(n));const o=this.dispatch("itemData",{itemData:n||{},index:t});return this.applyFilters("itemData",o.itemData,t)}
/**
   * Get array of gallery DOM elements,
   * based on childSelector and gallery element.
   *
   * @param {HTMLElement} galleryElement
   * @returns {HTMLElement[]}
   */_getGalleryDOMElements(t){var i,e;return(null==(i=this.options)?void 0:i.children)||(null==(e=this.options)?void 0:e.childSelector)?function(t,i,e=document){let s=[];if(t instanceof Element)s=[t];else if(t instanceof NodeList||Array.isArray(t))s=Array.from(t);else{const n="string"==typeof t?t:i;n&&(s=Array.from(e.querySelectorAll(n)))}return s}(this.options.children,this.options.childSelector,t)||[]:[t]}
/**
   * Converts DOM element to item data object.
   *
   * @param {HTMLElement} element DOM element
   * @returns {SlideData}
   */_domElementToItemData(t){var i;const e={element:t},s=
/** @type {HTMLAnchorElement} */"A"===t.tagName?t:t.querySelector("a");if(s){e.src=s.dataset.pswpSrc||s.href,s.dataset.pswpSrcset&&(e.srcset=s.dataset.pswpSrcset),e.width=s.dataset.pswpWidth?parseInt(s.dataset.pswpWidth,10):0,e.height=s.dataset.pswpHeight?parseInt(s.dataset.pswpHeight,10):0,e.w=e.width,e.h=e.height,s.dataset.pswpType&&(e.type=s.dataset.pswpType);const n=t.querySelector("img");n&&(e.msrc=n.currentSrc||n.src,e.alt=null!=(i=n.getAttribute("alt"))?i:""),(s.dataset.pswpCropped||s.dataset.cropped)&&(e.thumbCropped=!0)}return this.applyFilters("domItemData",e,t,s)}
/**
   * Lazy-load by slide data
   *
   * @param {SlideData} itemData Data about the slide
   * @param {number} index
   * @returns {Content} Image that is being decoded or false.
   */lazyLoadData(t,i){return rt(t,this,i)}}const pt=.003;class dt{
/**
   * @param {PhotoSwipe} pswp
   */
constructor(t){this.pswp=t,this.isClosed=!0,this.isOpen=!1,this.isClosing=!1,this.isOpening=!1,this._duration=void 0,this._useAnimation=!1,this._croppedZoom=!1,this._animateRootOpacity=!1,this._animateBgOpacity=!1,this._placeholder=void 0,this._opacityElement=void 0,this._cropContainer1=void 0,this._cropContainer2=void 0,this._thumbBounds=void 0,this._prepareOpen=this._prepareOpen.bind(this),t.on("firstZoomPan",this._prepareOpen)}open(){this._prepareOpen(),this._start()}close(){if(this.isClosed||this.isClosing||this.isOpening)return;const t=this.pswp.currSlide;this.isOpen=!1,this.isOpening=!1,this.isClosing=!0,this._duration=this.pswp.options.hideAnimationDuration,t&&t.currZoomLevel*t.width>=this.pswp.options.maxWidthToAnimate&&(this._duration=0),this._applyStartProps(),setTimeout((()=>{this._start()}),this._croppedZoom?30:0)}
/** @private */_prepareOpen(){if(this.pswp.off("firstZoomPan",this._prepareOpen),!this.isOpening){const t=this.pswp.currSlide;this.isOpening=!0,this.isClosing=!1,this._duration=this.pswp.options.showAnimationDuration,t&&t.zoomLevels.initial*t.width>=this.pswp.options.maxWidthToAnimate&&(this._duration=0),this._applyStartProps()}}
/** @private */_applyStartProps(){var t,i;const{pswp:e}=this,s=this.pswp.currSlide,{options:n}=e;if("fade"===n.showHideAnimationType?(n.showHideOpacity=!0,this._thumbBounds=void 0):"none"===n.showHideAnimationType?(n.showHideOpacity=!1,this._duration=0,this._thumbBounds=void 0):this.isOpening&&e._initialThumbBounds?this._thumbBounds=e._initialThumbBounds:this._thumbBounds=this.pswp.getThumbBounds(),this._placeholder=null==s?void 0:s.getPlaceholderElement(),e.animations.stopAll(),this._useAnimation=Boolean(this._duration&&this._duration>50),this._animateZoom=Boolean(this._thumbBounds)&&(null==s?void 0:s.content.usePlaceholder())&&(!this.isClosing||!e.mainScroll.isShifted()),this._animateZoom?this._animateRootOpacity=null!=(t=n.showHideOpacity)&&t:(this._animateRootOpacity=!0,this.isOpening&&s&&(s.zoomAndPanToInitial(),s.applyCurrentZoomPan())),this._animateBgOpacity=!this._animateRootOpacity&&this.pswp.options.bgOpacity>pt,this._opacityElement=this._animateRootOpacity?e.element:e.bg,!this._useAnimation)return this._duration=0,this._animateZoom=!1,this._animateBgOpacity=!1,this._animateRootOpacity=!0,void(this.isOpening&&(e.element&&(e.element.style.opacity=String(pt)),e.applyBgOpacity(1)));this._animateZoom&&this._thumbBounds&&this._thumbBounds.innerRect?(this._croppedZoom=!0,this._cropContainer1=this.pswp.container,this._cropContainer2=null==(i=this.pswp.currSlide)?void 0:i.holderElement,e.container&&(e.container.style.overflow="hidden",e.container.style.width=e.viewportSize.x+"px")):this._croppedZoom=!1,this.isOpening?(this._animateRootOpacity?(e.element&&(e.element.style.opacity=String(pt)),e.applyBgOpacity(1)):(this._animateBgOpacity&&e.bg&&(e.bg.style.opacity=String(pt)),e.element&&(e.element.style.opacity="1")),this._animateZoom&&(this._setClosedStateZoomPan(),this._placeholder&&(this._placeholder.style.willChange="transform",this._placeholder.style.opacity=String(pt)))):this.isClosing&&(e.mainScroll.itemHolders[0]&&(e.mainScroll.itemHolders[0].el.style.display="none"),e.mainScroll.itemHolders[2]&&(e.mainScroll.itemHolders[2].el.style.display="none"),this._croppedZoom&&0!==e.mainScroll.x&&(e.mainScroll.resetPosition(),e.mainScroll.resize()))}
/** @private */_start(){this.isOpening&&this._useAnimation&&this._placeholder&&"IMG"===this._placeholder.tagName?new Promise((t=>{let i=!1,e=!0;var s;(s=
/** @type {HTMLImageElement} */
this._placeholder,"decode"in s?s.decode().catch((()=>{})):s.complete?Promise.resolve(s):new Promise(((t,i)=>{s.onload=()=>t(s),s.onerror=i}))).finally((()=>{i=!0,e||t(!0)})),setTimeout((()=>{e=!1,i&&t(!0)}),50),setTimeout(t,250)})).finally((()=>this._initiate())):this._initiate()}
/** @private */_initiate(){var t,i;null==(t=this.pswp.element)||t.style.setProperty("--pswp-transition-duration",this._duration+"ms"),this.pswp.dispatch(this.isOpening?"openingAnimationStart":"closingAnimationStart"),this.pswp.dispatch(
/** @type {'initialZoomIn' | 'initialZoomOut'} */
"initialZoom"+(this.isOpening?"In":"Out")),null==(i=this.pswp.element)||i.classList.toggle("pswp--ui-visible",this.isOpening),this.isOpening?(this._placeholder&&(this._placeholder.style.opacity="1"),this._animateToOpenState()):this.isClosing&&this._animateToClosedState(),this._useAnimation||this._onAnimationComplete()}
/** @private */_onAnimationComplete(){var t;const{pswp:i}=this;this.isOpen=this.isOpening,this.isClosed=this.isClosing,this.isOpening=!1,this.isClosing=!1,i.dispatch(this.isOpen?"openingAnimationEnd":"closingAnimationEnd"),i.dispatch(
/** @type {'initialZoomInEnd' | 'initialZoomOutEnd'} */
"initialZoom"+(this.isOpen?"InEnd":"OutEnd")),this.isClosed?i.destroy():this.isOpen&&(this._animateZoom&&i.container&&(i.container.style.overflow="visible",i.container.style.width="100%"),null==(t=i.currSlide)||t.applyCurrentZoomPan())}
/** @private */_animateToOpenState(){const{pswp:t}=this;this._animateZoom&&(this._croppedZoom&&this._cropContainer1&&this._cropContainer2&&(this._animateTo(this._cropContainer1,"transform","translate3d(0,0,0)"),this._animateTo(this._cropContainer2,"transform","none")),t.currSlide&&(t.currSlide.zoomAndPanToInitial(),this._animateTo(t.currSlide.container,"transform",t.currSlide.getCurrentTransform()))),this._animateBgOpacity&&t.bg&&this._animateTo(t.bg,"opacity",String(t.options.bgOpacity)),this._animateRootOpacity&&t.element&&this._animateTo(t.element,"opacity","1")}
/** @private */_animateToClosedState(){const{pswp:t}=this;this._animateZoom&&this._setClosedStateZoomPan(!0),this._animateBgOpacity&&t.bgOpacity>.01&&t.bg&&this._animateTo(t.bg,"opacity","0"),this._animateRootOpacity&&t.element&&this._animateTo(t.element,"opacity","0")}
/**
   * @private
   * @param {boolean} [animate]
   */_setClosedStateZoomPan(t){if(!this._thumbBounds)return;const{pswp:i}=this,{innerRect:e}=this._thumbBounds,{currSlide:s,viewportSize:n}=i;if(this._croppedZoom&&e&&this._cropContainer1&&this._cropContainer2){const i=-n.x+(this._thumbBounds.x-e.x)+e.w,s=-n.y+(this._thumbBounds.y-e.y)+e.h,o=n.x-e.w,a=n.y-e.h;t?(this._animateTo(this._cropContainer1,"transform",m(i,s)),this._animateTo(this._cropContainer2,"transform",m(o,a))):(u(this._cropContainer1,i,s),u(this._cropContainer2,o,a))}s&&(h(s.pan,e||this._thumbBounds),s.currZoomLevel=this._thumbBounds.w/s.width,t?this._animateTo(s.container,"transform",s.getCurrentTransform()):s.applyCurrentZoomPan())}
/**
   * @private
   * @param {HTMLElement} target
   * @param {'transform' | 'opacity'} prop
   * @param {string} propValue
   */_animateTo(t,i,e){if(!this._duration)return void(t.style[i]=e);const{animations:s}=this.pswp,n={duration:this._duration,easing:this.pswp.options.easing,onComplete:()=>{s.activeAnimations.length||this._onAnimationComplete()},target:t};n[i]=e,s.startTransition(n)}}const ct={allowPanToNext:!0,spacing:.1,loop:!0,pinchToClose:!0,closeOnVerticalDrag:!0,hideAnimationDuration:333,showAnimationDuration:333,zoomAnimationDuration:333,escKey:!0,arrowKeys:!0,returnFocus:!0,maxWidthToAnimate:4e3,clickToCloseNonZoomable:!0,imageClickAction:"zoom-or-close",bgClickAction:"close",tapAction:"toggle-controls",doubleTapAction:"zoom",indexIndicatorSep:" / ",preloaderDelay:2e3,bgOpacity:.8,index:0,errorMsg:"The image cannot be loaded",preload:[1,2],easing:"cubic-bezier(.4,0,.22,1)"};class mt extends lt{
/**
   * @param {PhotoSwipeOptions} [options]
   */
constructor(t){super(),this.options=this._prepareOptions(t||{}),this.offset={x:0,y:0},this._prevViewportSize={x:0,y:0},this.viewportSize={x:0,y:0},this.bgOpacity=1,this.currIndex=0,this.potentialIndex=0,this.isOpen=!1,this.isDestroying=!1,this.hasMouse=!1,this._initialItemData={},this._initialThumbBounds=void 0,this.topBar=void 0,this.element=void 0,this.template=void 0,this.container=void 0,this.scrollWrap=void 0,this.currSlide=void 0,this.events=new b,this.animations=new U,this.mainScroll=new B(this),this.gestures=new F(this),this.opener=new dt(this),this.keyboard=new k(this),this.contentLoader=new ht(this)}
/** @returns {boolean} */init(){if(this.isOpen||this.isDestroying)return!1;this.isOpen=!0,this.dispatch("init"),this.dispatch("beforeOpen"),this._createMainStructure();let t="pswp--open";return this.gestures.supportsTouch&&(t+=" pswp--touch"),this.options.mainClass&&(t+=" "+this.options.mainClass),this.element&&(this.element.className+=" "+t),this.currIndex=this.options.index||0,this.potentialIndex=this.currIndex,this.dispatch("firstUpdate"),this.scrollWheel=new G(this),(Number.isNaN(this.currIndex)||this.currIndex<0||this.currIndex>=this.getNumItems())&&(this.currIndex=0),this.gestures.supportsTouch||this.mouseDetected(),this.updateSize(),this.offset.y=window.pageYOffset,this._initialItemData=this.getItemData(this.currIndex),this.dispatch("gettingData",{index:this.currIndex,data:this._initialItemData,slide:void 0}),this._initialThumbBounds=this.getThumbBounds(),this.dispatch("initialLayout"),this.on("openingAnimationEnd",(()=>{const{itemHolders:t}=this.mainScroll;t[0]&&(t[0].el.style.display="block",this.setContent(t[0],this.currIndex-1)),t[2]&&(t[2].el.style.display="block",this.setContent(t[2],this.currIndex+1)),this.appendHeavy(),this.contentLoader.updateLazy(),this.events.add(window,"resize",this._handlePageResize.bind(this)),this.events.add(window,"scroll",this._updatePageScrollOffset.bind(this)),this.dispatch("bindEvents")})),this.mainScroll.itemHolders[1]&&this.setContent(this.mainScroll.itemHolders[1],this.currIndex),this.dispatch("change"),this.opener.open(),this.dispatch("afterInit"),!0}
/**
   * Get looped slide index
   * (for example, -1 will return the last slide)
   *
   * @param {number} index
   * @returns {number}
   */getLoopedIndex(t){const i=this.getNumItems();return this.options.loop&&(t>i-1&&(t-=i),t<0&&(t+=i)),c(t,0,i-1)}appendHeavy(){this.mainScroll.itemHolders.forEach((t=>{var i;null==(i=t.slide)||i.appendHeavy()}))}
/**
   * Change the slide
   * @param {number} index New index
   */goTo(t){this.mainScroll.moveIndexBy(this.getLoopedIndex(t)-this.potentialIndex)}
/**
   * Go to the next slide.
   */next(){this.goTo(this.potentialIndex+1)}
/**
   * Go to the previous slide.
   */prev(){this.goTo(this.potentialIndex-1)}
/**
   * @see slide/slide.js zoomTo
   *
   * @param {Parameters<Slide['zoomTo']>} args
   */zoomTo(...t){var i;null==(i=this.currSlide)||i.zoomTo(...t)}
/**
   * @see slide/slide.js toggleZoom
   */toggleZoom(){var t;null==(t=this.currSlide)||t.toggleZoom()}
/**
   * Close the gallery.
   * After closing transition ends - destroy it
   */close(){this.opener.isOpen&&!this.isDestroying&&(this.isDestroying=!0,this.dispatch("close"),this.events.removeAll(),this.opener.close())}
/**
   * Destroys the gallery:
   * - instantly closes the gallery
   * - unbinds events,
   * - cleans intervals and timeouts
   * - removes elements from DOM
   */destroy(){var t;if(!this.isDestroying)return this.options.showHideAnimationType="none",void this.close();this.dispatch("destroy"),this._listeners={},this.scrollWrap&&(this.scrollWrap.ontouchmove=null,this.scrollWrap.ontouchend=null),null==(t=this.element)||t.remove(),this.mainScroll.itemHolders.forEach((t=>{var i;null==(i=t.slide)||i.destroy()})),this.contentLoader.destroy(),this.events.removeAll()}
/**
   * Refresh/reload content of a slide by its index
   *
   * @param {number} slideIndex
   */refreshSlideContent(t){this.contentLoader.removeByIndex(t),this.mainScroll.itemHolders.forEach(((i,e)=>{var s,n,o;let a=(null!=(n=null==(s=this.currSlide)?void 0:s.index)?n:0)-1+e;this.canLoop()&&(a=this.getLoopedIndex(a)),a===t&&(this.setContent(i,t,!0),1===e&&(this.currSlide=i.slide,null==(o=i.slide)||o.setIsActive(!0)))})),this.dispatch("change")}
/**
   * Set slide content
   *
   * @param {ItemHolder} holder mainScroll.itemHolders array item
   * @param {number} index Slide index
   * @param {boolean} [force] If content should be set even if index wasn't changed
   */setContent(t,i,e){if(this.canLoop()&&(i=this.getLoopedIndex(i)),t.slide){if(t.slide.index===i&&!e)return;t.slide.destroy(),t.slide=void 0}if(!this.canLoop()&&(i<0||i>=this.getNumItems()))return;const s=this.getItemData(i);t.slide=new T(s,i,this),i===this.currIndex&&(this.currSlide=t.slide),t.slide.append(t.el)}
/** @returns {Point} */getViewportCenterPoint(){return{x:this.viewportSize.x/2,y:this.viewportSize.y/2}}
/**
   * Update size of all elements.
   * Executed on init and on page resize.
   *
   * @param {boolean} [force] Update size even if size of viewport was not changed.
   */updateSize(t){if(this.isDestroying)return;const i=z(this.options,this);!t&&d(i,this._prevViewportSize)||(h(this._prevViewportSize,i),this.dispatch("beforeResize"),h(this.viewportSize,this._prevViewportSize),this._updatePageScrollOffset(),this.dispatch("viewportSize"),this.mainScroll.resize(this.opener.isOpen),!this.hasMouse&&window.matchMedia("(any-hover: hover)").matches&&this.mouseDetected(),this.dispatch("resize"))}
/**
   * @param {number} opacity
   */applyBgOpacity(t){this.bgOpacity=Math.max(t,0),this.bg&&(this.bg.style.opacity=String(this.bgOpacity*this.options.bgOpacity))}
/**
   * Whether mouse is detected
   */mouseDetected(){var t;this.hasMouse||(this.hasMouse=!0,null==(t=this.element)||t.classList.add("pswp--has_mouse"))}
/**
   * Page resize event handler
   *
   * @private
   */_handlePageResize(){this.updateSize(),/iPhone|iPad|iPod/i.test(window.navigator.userAgent)&&setTimeout((()=>{this.updateSize()}),500)}
/**
   * Page scroll offset is used
   * to get correct coordinates
   * relative to PhotoSwipe viewport.
   *
   * @private
   */_updatePageScrollOffset(){this.setScrollOffset(0,window.pageYOffset)}
/**
   * @param {number} x
   * @param {number} y
   */setScrollOffset(t,i){this.offset.x=t,this.offset.y=i,this.dispatch("updateScrollOffset")}
/**
   * Create main HTML structure of PhotoSwipe,
   * and add it to DOM
   *
   * @private
   */_createMainStructure(){this.element=r("pswp","div"),this.element.setAttribute("tabindex","-1"),this.element.setAttribute("role","dialog"),this.template=this.element,this.bg=r("pswp__bg","div",this.element),this.scrollWrap=r("pswp__scroll-wrap","section",this.element),this.container=r("pswp__container","div",this.scrollWrap),this.scrollWrap.setAttribute("aria-roledescription","carousel"),this.container.setAttribute("aria-live","off"),this.container.setAttribute("id","pswp__items"),this.mainScroll.appendHolders(),this.ui=new et(this),this.ui.init(),(this.options.appendToEl||document.body).appendChild(this.element)}
/**
   * Get position and dimensions of small thumbnail
   *   {x:,y:,w:}
   *
   * Height is optional (calculated based on the large image)
   *
   * @returns {Bounds | undefined}
   */getThumbBounds(){return function(t,i,e){const s=e.dispatch("thumbBounds",{index:t,itemData:i,instance:e});if(s.thumbBounds)return s.thumbBounds;const{element:n}=i;let o,a;if(n&&!1!==e.options.thumbSelector){const t=e.options.thumbSelector||"img";a=n.matches(t)?n:
/** @type {HTMLElement | null} */n.querySelector(t)}return a=e.applyFilters("thumbEl",a,i,t),a&&(o=i.thumbCropped?function(t,i,e){const s=t.getBoundingClientRect(),n=s.width/i,o=s.height/e,a=n>o?n:o,r=(s.width-i*a)/2,h=(s.height-e*a)/2,l={x:s.left+r,y:s.top+h,w:i*a};return l.innerRect={w:s.width,h:s.height,x:r,y:h},l}(a,i.width||i.w||0,i.height||i.h||0):function(t){const i=t.getBoundingClientRect();return{x:i.left,y:i.top,w:i.width}}(a)),e.applyFilters("thumbBounds",o,i,t)}(this.currIndex,this.currSlide?this.currSlide.data:this._initialItemData,this)}
/**
   * If the PhotoSwipe can have continuous loop
   * @returns Boolean
   */canLoop(){return this.options.loop&&this.getNumItems()>2}
/**
   * @private
   * @param {PhotoSwipeOptions} options
   * @returns {PreparedPhotoSwipeOptions}
   */_prepareOptions(t){return window.matchMedia("(prefers-reduced-motion), (update: slow)").matches&&(t.showHideAnimationType="none",t.zoomAnimationDuration=0),a(a({},ct),t)}}export{mt as default};
