"use strict";(self.webpackChunktanner_pletzke=self.webpackChunktanner_pletzke||[]).push([[296],{5505:function(e,t,r){function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.r(t),r.d(t,{default:function(){return o}})},1715:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return f.default}}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=b(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=a?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(o,i,c):o[i]=e[i]}o.default=e,r&&r.set(e,o);return o}(r(7294)),a=g(r(5697)),i=g(r(3935)),c=g(r(5505)),l=r(3061),s=r(6040),u=r(55),f=g(r(6607)),d=g(r(7070)),p=["axis","bounds","children","defaultPosition","defaultClassName","defaultClassNameDragging","defaultClassNameDragged","position","positionOffset","scale"];function g(e){return e&&e.__esModule?e:{default:e}}function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(b=function(e){return e?r:t})(e)}function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=x(e);if(t){var o=x(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return P(this,r)}}function P(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return I(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(u,e);var t,r,n,a=O(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),E(I(t=a.call(this,e)),"onDragStart",(function(e,r){if((0,d.default)("Draggable: onDragStart: %j",r),!1===t.props.onStart(e,(0,s.createDraggableData)(I(t),r)))return!1;t.setState({dragging:!0,dragged:!0})})),E(I(t),"onDrag",(function(e,r){if(!t.state.dragging)return!1;(0,d.default)("Draggable: onDrag: %j",r);var n=(0,s.createDraggableData)(I(t),r),o={x:n.x,y:n.y};if(t.props.bounds){var a=o.x,i=o.y;o.x+=t.state.slackX,o.y+=t.state.slackY;var c=j((0,s.getBoundPosition)(I(t),o.x,o.y),2),l=c[0],u=c[1];o.x=l,o.y=u,o.slackX=t.state.slackX+(a-o.x),o.slackY=t.state.slackY+(i-o.y),n.x=o.x,n.y=o.y,n.deltaX=o.x-t.state.x,n.deltaY=o.y-t.state.y}if(!1===t.props.onDrag(e,n))return!1;t.setState(o)})),E(I(t),"onDragStop",(function(e,r){if(!t.state.dragging)return!1;if(!1===t.props.onStop(e,(0,s.createDraggableData)(I(t),r)))return!1;(0,d.default)("Draggable: onDragStop: %j",r);var n={dragging:!1,slackX:0,slackY:0};if(Boolean(t.props.position)){var o=t.props.position,a=o.x,i=o.y;n.x=a,n.y=i}t.setState(n)})),t.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,prevPropsPosition:v({},e.position),slackX:0,slackY:0,isElementSVG:!1},!e.position||e.onDrag||e.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."),t}return t=u,n=[{key:"getDerivedStateFromProps",value:function(e,t){var r=e.position,n=t.prevPropsPosition;return!r||n&&r.x===n.x&&r.y===n.y?null:((0,d.default)("Draggable: getDerivedStateFromProps %j",{position:r,prevPropsPosition:n}),{x:r.x,y:r.y,prevPropsPosition:v({},r)})}}],(r=[{key:"componentDidMount",value:function(){void 0!==window.SVGElement&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"findDOMNode",value:function(){var e,t,r;return null!==(e=null===(t=this.props)||void 0===t||null===(r=t.nodeRef)||void 0===r?void 0:r.current)&&void 0!==e?e:i.default.findDOMNode(this)}},{key:"render",value:function(){var e,t=this.props,r=(t.axis,t.bounds,t.children),n=t.defaultPosition,a=t.defaultClassName,i=t.defaultClassNameDragging,u=t.defaultClassNameDragged,d=t.position,g=t.positionOffset,b=(t.scale,y(t,p)),h={},j=null,S=!Boolean(d)||this.state.dragging,w=d||n,D={x:(0,s.canDragX)(this)&&S?this.state.x:w.x,y:(0,s.canDragY)(this)&&S?this.state.y:w.y};this.state.isElementSVG?j=(0,l.createSVGTransform)(D,g):h=(0,l.createCSSTransform)(D,g);var O=(0,c.default)(r.props.className||"",a,(E(e={},i,this.state.dragging),E(e,u,this.state.dragged),e));return o.createElement(f.default,m({},b,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),o.cloneElement(o.Children.only(r),{className:O,style:v(v({},r.props.style),h),transform:j}))}}])&&w(t.prototype,r),n&&w(t,n),u}(o.Component);t.default=M,E(M,"displayName","Draggable"),E(M,"propTypes",v(v({},f.default.propTypes),{},{axis:a.default.oneOf(["both","x","y","none"]),bounds:a.default.oneOfType([a.default.shape({left:a.default.number,right:a.default.number,top:a.default.number,bottom:a.default.number}),a.default.string,a.default.oneOf([!1])]),defaultClassName:a.default.string,defaultClassNameDragging:a.default.string,defaultClassNameDragged:a.default.string,defaultPosition:a.default.shape({x:a.default.number,y:a.default.number}),positionOffset:a.default.shape({x:a.default.oneOfType([a.default.number,a.default.string]),y:a.default.oneOfType([a.default.number,a.default.string])}),position:a.default.shape({x:a.default.number,y:a.default.number}),className:u.dontSetMe,style:u.dontSetMe,transform:u.dontSetMe})),E(M,"defaultProps",v(v({},f.default.defaultProps),{},{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1}))},6607:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=a?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(o,i,c):o[i]=e[i]}o.default=e,r&&r.set(e,o);return o}(r(7294)),a=f(r(5697)),i=f(r(3935)),c=r(3061),l=r(6040),s=r(55),u=f(r(7070));function f(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=S(e);if(t){var o=S(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}function v(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var D={start:"touchstart",move:"touchmove",stop:"touchend"},O={start:"mousedown",move:"mousemove",stop:"mouseup"},P=O,I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(s,e);var t,r,n,a=h(s);function s(){var e;b(this,s);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return w(j(e=a.call.apply(a,[this].concat(r))),"state",{dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null}),w(j(e),"mounted",!1),w(j(e),"handleDragStart",(function(t){if(e.props.onMouseDown(t),!e.props.allowAnyClick&&"number"==typeof t.button&&0!==t.button)return!1;var r=e.findDOMNode();if(!r||!r.ownerDocument||!r.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");var n=r.ownerDocument;if(!(e.props.disabled||!(t.target instanceof n.defaultView.Node)||e.props.handle&&!(0,c.matchesSelectorAndParentsTo)(t.target,e.props.handle,r)||e.props.cancel&&(0,c.matchesSelectorAndParentsTo)(t.target,e.props.cancel,r))){"touchstart"===t.type&&t.preventDefault();var o=(0,c.getTouchIdentifier)(t);e.setState({touchIdentifier:o});var a=(0,l.getControlPosition)(t,o,j(e));if(null!=a){var i=a.x,s=a.y,f=(0,l.createCoreData)(j(e),i,s);(0,u.default)("DraggableCore: handleDragStart: %j",f),(0,u.default)("calling",e.props.onStart),!1!==e.props.onStart(t,f)&&!1!==e.mounted&&(e.props.enableUserSelectHack&&(0,c.addUserSelectStyles)(n),e.setState({dragging:!0,lastX:i,lastY:s}),(0,c.addEvent)(n,P.move,e.handleDrag),(0,c.addEvent)(n,P.stop,e.handleDragStop))}}})),w(j(e),"handleDrag",(function(t){var r=(0,l.getControlPosition)(t,e.state.touchIdentifier,j(e));if(null!=r){var n=r.x,o=r.y;if(Array.isArray(e.props.grid)){var a=n-e.state.lastX,i=o-e.state.lastY,c=p((0,l.snapToGrid)(e.props.grid,a,i),2);if(a=c[0],i=c[1],!a&&!i)return;n=e.state.lastX+a,o=e.state.lastY+i}var s=(0,l.createCoreData)(j(e),n,o);if((0,u.default)("DraggableCore: handleDrag: %j",s),!1!==e.props.onDrag(t,s)&&!1!==e.mounted)e.setState({lastX:n,lastY:o});else try{e.handleDragStop(new MouseEvent("mouseup"))}catch(d){var f=document.createEvent("MouseEvents");f.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.handleDragStop(f)}}})),w(j(e),"handleDragStop",(function(t){if(e.state.dragging){var r=(0,l.getControlPosition)(t,e.state.touchIdentifier,j(e));if(null!=r){var n=r.x,o=r.y,a=(0,l.createCoreData)(j(e),n,o);if(!1===e.props.onStop(t,a)||!1===e.mounted)return!1;var i=e.findDOMNode();i&&e.props.enableUserSelectHack&&(0,c.removeUserSelectStyles)(i.ownerDocument),(0,u.default)("DraggableCore: handleDragStop: %j",a),e.setState({dragging:!1,lastX:NaN,lastY:NaN}),i&&((0,u.default)("DraggableCore: Removing handlers"),(0,c.removeEvent)(i.ownerDocument,P.move,e.handleDrag),(0,c.removeEvent)(i.ownerDocument,P.stop,e.handleDragStop))}}})),w(j(e),"onMouseDown",(function(t){return P=O,e.handleDragStart(t)})),w(j(e),"onMouseUp",(function(t){return P=O,e.handleDragStop(t)})),w(j(e),"onTouchStart",(function(t){return P=D,e.handleDragStart(t)})),w(j(e),"onTouchEnd",(function(t){return P=D,e.handleDragStop(t)})),e}return t=s,(r=[{key:"componentDidMount",value:function(){this.mounted=!0;var e=this.findDOMNode();e&&(0,c.addEvent)(e,D.start,this.onTouchStart,{passive:!1})}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var e=this.findDOMNode();if(e){var t=e.ownerDocument;(0,c.removeEvent)(t,O.move,this.handleDrag),(0,c.removeEvent)(t,D.move,this.handleDrag),(0,c.removeEvent)(t,O.stop,this.handleDragStop),(0,c.removeEvent)(t,D.stop,this.handleDragStop),(0,c.removeEvent)(e,D.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,c.removeUserSelectStyles)(t)}}},{key:"findDOMNode",value:function(){var e,t,r;return null!==(e=null===(t=this.props)||void 0===t||null===(r=t.nodeRef)||void 0===r?void 0:r.current)&&void 0!==e?e:i.default.findDOMNode(this)}},{key:"render",value:function(){return o.cloneElement(o.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}])&&m(t.prototype,r),n&&m(t,n),s}(o.Component);t.default=I,w(I,"displayName","DraggableCore"),w(I,"propTypes",{allowAnyClick:a.default.bool,disabled:a.default.bool,enableUserSelectHack:a.default.bool,offsetParent:function(e,t){if(e[t]&&1!==e[t].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:a.default.arrayOf(a.default.number),handle:a.default.string,cancel:a.default.string,nodeRef:a.default.object,onStart:a.default.func,onDrag:a.default.func,onStop:a.default.func,onMouseDown:a.default.func,scale:a.default.number,className:s.dontSetMe,style:s.dontSetMe,transform:s.dontSetMe}),w(I,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1})},2625:function(e,t,r){var n=r(1715),o=n.default,a=n.DraggableCore;e.exports=o,e.exports.default=o,e.exports.DraggableCore=a},3061:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.matchesSelector=f,t.matchesSelectorAndParentsTo=function(e,t,r){var n=e;do{if(f(n,t))return!0;if(n===r)return!1;n=n.parentNode}while(n);return!1},t.addEvent=function(e,t,r,n){if(!e)return;var o=l({capture:!0},n);e.addEventListener?e.addEventListener(t,r,o):e.attachEvent?e.attachEvent("on"+t,r):e["on"+t]=r},t.removeEvent=function(e,t,r,n){if(!e)return;var o=l({capture:!0},n);e.removeEventListener?e.removeEventListener(t,r,o):e.detachEvent?e.detachEvent("on"+t,r):e["on"+t]=null},t.outerHeight=function(e){var t=e.clientHeight,r=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,o.int)(r.borderTopWidth),t+=(0,o.int)(r.borderBottomWidth)},t.outerWidth=function(e){var t=e.clientWidth,r=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,o.int)(r.borderLeftWidth),t+=(0,o.int)(r.borderRightWidth)},t.innerHeight=function(e){var t=e.clientHeight,r=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,o.int)(r.paddingTop),t-=(0,o.int)(r.paddingBottom)},t.innerWidth=function(e){var t=e.clientWidth,r=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,o.int)(r.paddingLeft),t-=(0,o.int)(r.paddingRight)},t.offsetXYFromParent=function(e,t,r){var n=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),o=(e.clientX+t.scrollLeft-n.left)/r,a=(e.clientY+t.scrollTop-n.top)/r;return{x:o,y:a}},t.createCSSTransform=function(e,t){var r=d(e,t,"px");return s({},(0,a.browserPrefixToKey)("transform",a.default),r)},t.createSVGTransform=function(e,t){return d(e,t,"")},t.getTranslation=d,t.getTouch=function(e,t){return e.targetTouches&&(0,o.findInArray)(e.targetTouches,(function(e){return t===e.identifier}))||e.changedTouches&&(0,o.findInArray)(e.changedTouches,(function(e){return t===e.identifier}))},t.getTouchIdentifier=function(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier},t.addUserSelectStyles=function(e){if(!e)return;var t=e.getElementById("react-draggable-style-el");t||((t=e.createElement("style")).type="text/css",t.id="react-draggable-style-el",t.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",t.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",e.getElementsByTagName("head")[0].appendChild(t));e.body&&p(e.body,"react-draggable-transparent-selection")},t.removeUserSelectStyles=function(e){if(!e)return;try{if(e.body&&g(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{var t=(e.defaultView||window).getSelection();t&&"Caret"!==t.type&&t.removeAllRanges()}}catch(r){}},t.addClassName=p,t.removeClassName=g;var o=r(55),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var l=a?Object.getOwnPropertyDescriptor(e,c):null;l&&(l.get||l.set)?Object.defineProperty(o,c,l):o[c]=e[c]}o.default=e,r&&r.set(e,o);return o}(r(2635));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u="";function f(e,t){return u||(u=(0,o.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(t){return(0,o.isFunction)(e[t])}))),!!(0,o.isFunction)(e[u])&&e[u](t)}function d(e,t,r){var n=e.x,o=e.y,a="translate(".concat(n).concat(r,",").concat(o).concat(r,")");if(t){var i="".concat("string"==typeof t.x?t.x:t.x+r),c="".concat("string"==typeof t.y?t.y:t.y+r);a="translate(".concat(i,", ").concat(c,")")+a}return a}function p(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function g(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}},2635:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getPrefix=n,t.browserPrefixToKey=o,t.browserPrefixToStyle=function(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e},t.default=void 0;var r=["Moz","Webkit","O","ms"];function n(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"==typeof window)return"";var a=null===(e=window.document)||void 0===e||null===(t=e.documentElement)||void 0===t?void 0:t.style;if(!a)return"";if(n in a)return"";for(var i=0;i<r.length;i++)if(o(n,r[i])in a)return r[i];return""}function o(e,t){return t?"".concat(t).concat(function(e){for(var t="",r=!0,n=0;n<e.length;n++)r?(t+=e[n].toUpperCase(),r=!1):"-"===e[n]?r=!0:t+=e[n];return t}(e)):e}var a=n();t.default=a},7070:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){0}},6040:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.getBoundPosition=function(e,t,r){if(!e.props.bounds)return[t,r];var i=e.props.bounds;i="string"==typeof i?i:function(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}(i);var c=a(e);if("string"==typeof i){var l,s=c.ownerDocument,u=s.defaultView;if(!((l="parent"===i?c.parentNode:s.querySelector(i))instanceof u.HTMLElement))throw new Error('Bounds selector "'+i+'" could not find an element.');var f=l,d=u.getComputedStyle(c),p=u.getComputedStyle(f);i={left:-c.offsetLeft+(0,n.int)(p.paddingLeft)+(0,n.int)(d.marginLeft),top:-c.offsetTop+(0,n.int)(p.paddingTop)+(0,n.int)(d.marginTop),right:(0,o.innerWidth)(f)-(0,o.outerWidth)(c)-c.offsetLeft+(0,n.int)(p.paddingRight)-(0,n.int)(d.marginRight),bottom:(0,o.innerHeight)(f)-(0,o.outerHeight)(c)-c.offsetTop+(0,n.int)(p.paddingBottom)-(0,n.int)(d.marginBottom)}}(0,n.isNum)(i.right)&&(t=Math.min(t,i.right));(0,n.isNum)(i.bottom)&&(r=Math.min(r,i.bottom));(0,n.isNum)(i.left)&&(t=Math.max(t,i.left));(0,n.isNum)(i.top)&&(r=Math.max(r,i.top));return[t,r]},t.snapToGrid=function(e,t,r){var n=Math.round(t/e[0])*e[0],o=Math.round(r/e[1])*e[1];return[n,o]},t.canDragX=function(e){return"both"===e.props.axis||"x"===e.props.axis},t.canDragY=function(e){return"both"===e.props.axis||"y"===e.props.axis},t.getControlPosition=function(e,t,r){var n="number"==typeof t?(0,o.getTouch)(e,t):null;if("number"==typeof t&&!n)return null;var i=a(r),c=r.props.offsetParent||i.offsetParent||i.ownerDocument.body;return(0,o.offsetXYFromParent)(n||e,c,r.props.scale)},t.createCoreData=function(e,t,r){var o=e.state,i=!(0,n.isNum)(o.lastX),c=a(e);return i?{node:c,deltaX:0,deltaY:0,lastX:t,lastY:r,x:t,y:r}:{node:c,deltaX:t-o.lastX,deltaY:r-o.lastY,lastX:o.lastX,lastY:o.lastY,x:t,y:r}},t.createDraggableData=function(e,t){var r=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/r,y:e.state.y+t.deltaY/r,deltaX:t.deltaX/r,deltaY:t.deltaY/r,lastX:e.state.x,lastY:e.state.y}};var n=r(55),o=r(3061);function a(e){var t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}},55:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.findInArray=function(e,t){for(var r=0,n=e.length;r<n;r++)if(t.apply(t,[e[r],r,e]))return e[r]},t.isFunction=function(e){return"function"==typeof e||"[object Function]"===Object.prototype.toString.call(e)},t.isNum=function(e){return"number"==typeof e&&!isNaN(e)},t.int=function(e){return parseInt(e,10)},t.dontSetMe=function(e,t,r){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(r," - do not set this, set it on the child."))}},1930:function(e,t,r){r.r(t),r.d(t,{default:function(){return De}});var n=r(7294),o=r(2625),a=r.n(o),i=function(e){var t=e.projectPhotos.map((function(e,t){return n.createElement("img",{src:e.src,height:400,width:400,alt:"",key:t,id:t})}));return n.createElement("div",null,n.createElement("h1",null,"This is carousel"),t)},c=r(4529),l=r.p+"static/000049790002-77e0d07757cd6320c6bc207bb59f4266.jpg",s=r.p+"static/000049790003-ca29d1bf031b874c18e24c1424101ab6.jpg",u=r.p+"static/000049790004-d813c61c0214e96ab4cb94c5d6b0830d.jpg",f=r.p+"static/000049790005-d691cbf29da8325f3fb02b04a048bff4.jpg",d=r.p+"static/000049790006-5f2d29d7e6b840de91e1b188cf0da698.jpg",p=r.p+"static/000049790007-248bc5da189998ba4609cfefa115dbc4.jpg",g=r.p+"static/000049790008-347d6e49e5f6f09c6e9398c6e16a462c.jpg",b=r.p+"static/000049790009-e429ab9458c99cada925e9b5af9d809d.jpg",m=r.p+"static/000049790010-c164575b1511da1aa416e4251c844d77.jpg",y=r.p+"static/000049790011-a6d5d32ec2572a13b884e233ecc92f37.jpg",h=r.p+"static/000049790012-f23991027671b5980e48828144376fa2.jpg",v=r.p+"static/000049790013-c2053b8e29b70583ffb9dca6ec2c2328.jpg",j=r.p+"static/000049790014-7d5217bd311b2982e541bd1cc1784fd5.jpg",S=r.p+"static/000049790015-3fe6e954c6717b876365e344e4205d8f.jpg",w=r.p+"static/000049790016-188915ccb783a1cad4d91353b2a44d67.jpg",D=r.p+"static/000049790017-462fb4a28096f3c8ec940220fe83c07a.jpg",O=r.p+"static/000049790018-20a3b3d3ec56e26d462081814bfad4ed.jpg",P=r.p+"static/000049790019-dd01a4c619358381d32e401691b4665b.jpg",I=r.p+"static/000049790020-84e92e205a61f31593caeaa2dbccaba1.jpg",x=r.p+"static/000049790021-4c6440773a610ef394c47f4cd1559e7c.jpg",E=r.p+"static/000049790022-3ceab26dce5b3e237c1998dcd0be0d38.jpg",M=r.p+"static/000049790023-f3c1b87764a5450a0c2a3ea0437c6542.jpg",T=r.p+"static/000049790024-e53fca06abc2156ddd7fb3fad8505423.jpg",N=r.p+"static/000049790025-f22303b624a3172659fc7f2da8730a1b.jpg",C=r.p+"static/000049790026-0558718f899035711eece4b33d82b23d.jpg",k=r.p+"static/000049790027-cf131ecae338068d5ddb824617c6106b.jpg",F=r.p+"static/000049790028-132debbb36b708180866f7723576f457.jpg",_=r.p+"static/000049790029-250627d149775f5d1146650073920908.jpg",A=r.p+"static/000049790030-9d067d581544a0d011b24712bcbbca13.jpg",X=r.p+"static/000049790031-a95532f0a0df807d1ad71c561aebaea4.jpg",Y=r.p+"static/000049790032-0958ddb1c5db865df699a17ba2b2dbbc.jpg",R=r.p+"static/000049790033-14fe3960dc4169051914ecb68eee752e.jpg",W=r.p+"static/000049790034-01092201388b99ae45ad9b6bcca61f11.jpg",L=r.p+"static/000049790035-f450465a10f96ae29d7ba33a046e7e5a.jpg",U=r.p+"static/000049790036-b9f969fa0a4cff4431838ebdfa8c6716.jpg",B=r.p+"static/000054910001-9e0279d74d9022b94ba7788279e6b408.jpg",H=r.p+"static/000054910002-95923ba92189c08dd5f86f8fa71f9bbd.jpg",V=r.p+"static/000054910003-889057f273faf5131208ee77918f1375.jpg",G=r.p+"static/000054910004-8805ba09ee8298964979227ccf5650e3.jpg",z=r.p+"static/000054910005-7015fa01c838205166eff4e7f3715e03.jpg",K=r.p+"static/000054910006-6e0da24f132091d9985ea7937fb67834.jpg",Z=r.p+"static/000054910007-1b70a1fd85aced1cadca4847c83f8b73.jpg",$=r.p+"static/000054910008-058e3b0ff17c59c557d929eb1b4d09a5.jpg",q=r.p+"static/000054910009-aeac37980aeb6719dce6a720c04d8583.jpg",J=r.p+"static/000054910010-32d6ec225b489ea1ce19f056e870ccd1.jpg",Q=r.p+"static/000054910011-9f5b5e50a3cd6ac6b809fb816c694554.jpg",ee=r.p+"static/000054910012-863aa7ad30189baa9f1e6f781d34b090.jpg",te=r.p+"static/000054910013-d71d1d7ee076f8a7081c854be1796ba4.jpg",re=r.p+"static/000054910014-173e86e8f93f66eaeb80efbe66bd2617.jpg",ne=r.p+"static/000054910015-d38062abb13c69577e2bce47a290b9f3.jpg",oe=r.p+"static/000054910016-1aaeb8e536114f317a15a13c88a702e9.jpg",ae=r.p+"static/000054910017-03934c99fbae8084c0805a89d7f16b4f.jpg",ie=r.p+"static/000054910018-c3d19767fc38907b29183cccf3d7f3f5.jpg",ce=r.p+"static/000054910019-4d15b1da0cce94e4158b97a4c8466d4a.jpg",le=r.p+"static/000054910020-5af1ce03d20336868a3d91d9dc23c3aa.jpg",se=r.p+"static/000054910021-439604d3243ed8ed2e9e9622d526e86e.jpg",ue=r.p+"static/000054910022-ffa780a27ea00ddae722d27bfbb2f201.jpg",fe=r.p+"static/000054910023-5afeb42ffc3d64d5ff1b02eb3880e7fe.jpg",de=r.p+"static/000054910024-1ee0b8177363cfcd69136e276a21f088.jpg",pe=r.p+"static/000054910025-3edad2c58d20749fafcbbb2885680a33.jpg",ge=r.p+"static/000054910026-b20c068f2382901b6ac6e0c74c1dcaed.jpg",be=r.p+"static/000054910027-ed616e0d0dbea8486dde33d640b6c313.jpg",me=r.p+"static/000054910028-6d1b6245029c2091137d3f58374f2698.jpg",ye=r.p+"static/000054910029-37467e173ba7ff760838b5771ddb8cee.jpg",he=r.p+"static/000054910030-ef6999a55173ae8f148cfd3262275b63.jpg",ve=r.p+"static/000054910031-0dd57cc5617d5e1e0efdc3eaf68ce660.jpg",je=r.p+"static/000054910032-d0fae7ffb060188bd7b846065400d1a6.jpg",Se=r.p+"static/000054910033-f12b7a9eb6bf90fd29fd66ec4916bc5b.jpg",we=r.p+"static/000054910034-a21c131e4dbb72e470e0191583e9d507.jpg",De=function(){var e=[{src:c.Z,title:"Image title",project:"Series1"},{src:l,title:"Image title",project:"Series1"},{src:s,title:"Image title",project:"Series1"},{src:u,title:"Image title",project:"Series1"},{src:f,title:"Image title",project:"Series1"},{src:d,title:"Image title",project:"Series1"},{src:p,title:"Image title",project:"Series1"},{src:g,title:"Image title",project:"Series1"},{src:b,title:"Image title",project:"Series1"},{src:m,title:"Image title",project:"Series1"},{src:y,title:"Image title",project:"Series2"},{src:h,title:"Image title",project:"Series2"},{src:v,title:"Image title",project:"Series2"},{src:j,title:"Image title",project:"Series2"},{src:S,title:"Image title",project:"Series2"},{src:w,title:"Image title",project:"Series2"},{src:D,title:"Image title",project:"Series2"},{src:O,title:"Image title",project:"Series2"},{src:P,title:"Image title",project:"Series2"},{src:I,title:"Image title",project:"Series2"},{src:x,title:"Image title",project:"Series2"},{src:E,title:"Image title",project:"Series2"},{src:M,title:"Image title",project:"Series2"},{src:T,title:"Image title",project:"Series2"},{src:N,title:"Image title",project:"Series2"},{src:C,title:"Image title",project:"Series2"},{src:k,title:"Image title",project:"Series2"},{src:F,title:"Image title",project:"Series2"},{src:_,title:"Image title",project:"Series2"},{src:A,title:"Image title",project:"Series2"},{src:X,title:"Image title",project:"Series2"},{src:Y,title:"Image title",project:"Series2"},{src:R,title:"Image title",project:"Series2"},{src:W,title:"Image title",project:"Series2"},{src:L,title:"Image title",project:"Series2"},{src:U,title:"Image title",project:"Series2"},{src:B,title:"Image title",project:"Folder 00005491"},{src:H,title:"Image title",project:"Folder 00005491"},{src:V,title:"Image title",project:"Folder 00005491"},{src:G,title:"Image title",project:"Folder 00005491"},{src:z,title:"Image title",project:"Folder 00005491"},{src:K,title:"Image title",project:"Folder 00005491"},{src:Z,title:"Image title",project:"Folder 00005491"},{src:$,title:"Image title",project:"Folder 00005491"},{src:q,title:"Image title",project:"Folder 00005491"},{src:J,title:"Image title",project:"Folder 00005491"},{src:Q,title:"Image title",project:"Folder 00005491"},{src:ee,title:"Image title",project:"Folder 00005491"},{src:te,title:"Image title",project:"Folder 00005491"},{src:re,title:"Image title",project:"Folder 00005491"},{src:ne,title:"Image title",project:"Folder 00005491"},{src:oe,title:"Image title",project:"Folder 00005491"},{src:ae,title:"Image title",project:"Folder 00005491"},{src:ie,title:"Image title",project:"Folder 00005491"},{src:ce,title:"Image title",project:"Folder 00005491"},{src:le,title:"Image title",project:"Folder 00005491"},{src:se,title:"Image title",project:"Folder 00005491"},{src:ue,title:"Image title",project:"Folder 00005491"},{src:fe,title:"Image title",project:"Folder 00005491"},{src:de,title:"Image title",project:"Folder 00005491"},{src:pe,title:"Image title",project:"Folder 00005491"},{src:ge,title:"Image title",project:"Folder 00005491"},{src:be,title:"Image title",project:"Folder 00005491"},{src:me,title:"Image title",project:"Folder 00005491"},{src:ye,title:"Image title",project:"Folder 00005491"},{src:he,title:"Image title",project:"Folder 00005491"},{src:ve,title:"Image title",project:"Folder 00005491"},{src:je,title:"Image title",project:"Folder 00005491"},{src:Se,title:"Image title",project:"Folder 00005491"},{src:we,title:"Image title",project:"Folder 00005491"}],t=(0,n.useState)("Series1"),r=t[0];t[1];(0,n.useEffect)((function(){var e=document.getElementsByClassName("image-placement"),t=window.innerHeight,r=window.innerWidth;function n(e,t){return Math.random()*(t-e)+e}for(var o=0;o<e.length;o++){var a=e[o],i=n(0,t),c=n(0,r);a.style.top=i+"px",a.style.left=c+"px",a.style.position="absolute"}}),[]);var o=(0,n.useRef)(null),De=(0,n.useState)({x:0,y:0}),Oe=(De[0],De[1]),Pe=(0,n.useState)(!1),Ie=Pe[0],xe=Pe[1],Ee=function(){xe(!0),console.log("starting drag")},Me=function(){xe(!1),console.log("stopping drag")},Te=e.map((function(e,t){return n.createElement(a(),{nodeRef:o,onDrag:function(e,t){return function(e){Oe({x:e.x,y:e.y})}(t)},onStart:Ee,onStop:Me},n.createElement("div",{ref:o,className:"draggable"},n.createElement("img",{src:e.src,draggable:"false",className:"image-placement",width:"auto",height:200,key:t,id:t,style:{cursor:Ie?"grabbing":"grab"}})))})),Ne=e.filter((function(e){if(e.project===r)return e}));return n.createElement("div",null,n.createElement("div",{className:"photos-landing-container"},n.createElement("h1",null,"Photos Landing"),Te),n.createElement("div",{className:"photos-project-container"},n.createElement(i,{projectPhotos:Ne})))}},4529:function(e,t,r){t.Z=r.p+"static/000049790001-d22cce284095bbf6806005849c90ff81.jpg"}}]);
//# sourceMappingURL=component---src-pages-photos-js-376bc8ecd8acfef12101.js.map