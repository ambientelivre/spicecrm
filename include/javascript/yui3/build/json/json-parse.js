/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.3.0
build: 3167
*/
YUI.add("json-parse",function(B){function K(Q){return(B.config.win||this||{})[Q];}var I=K("JSON"),J=K("eval"),L=(Object.prototype.toString.call(I)==="[object JSON]"&&I),E=!!L,O=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,M=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,D=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,F=/(?:^|:|,)(?:\s*\[)+/g,P=/[^\],:{}\s]/,N=function(Q){return"\\u"+("0000"+(+(Q.charCodeAt(0))).toString(16)).slice(-4);},C=function(S,Q){var R=function(X,V){var U,T,W=X[V];if(W&&typeof W==="object"){for(U in W){if(W.hasOwnProperty(U)){T=R(W,U);if(T===undefined){delete W[U];}else{W[U]=T;}}}}return Q.call(X,V,W);};return typeof Q==="function"?R({"":S},""):S;},G=function(R,Q){R=R.replace(O,N);if(!P.test(R.replace(M,"@").replace(D,"]").replace(F,""))){return C(J("("+R+")"),Q);}throw new SyntaxError("JSON.parse");};B.namespace("JSON").parse=function(R,Q){if(typeof R!=="string"){R+="";}return L&&B.JSON.useNativeParse?L.parse(R,Q):G(R,Q);};function A(R,Q){return R==="ok"?true:Q;}if(L){try{E=(L.parse('{"ok":false}',A)).ok;}catch(H){E=false;}}B.JSON.useNativeParse=E;},"3.3.0");