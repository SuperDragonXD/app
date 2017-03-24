var adonis = adonis || {};
adonis.ENABLE_SLOT_CACHE = true;
/* loader-6.0.6 */!function e(n,t,i){function o(a,s){if(!t[a]){if(!n[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(r)return r(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var d=t[a]={exports:{}};n[a][0].call(d.exports,function(e){var t=n[a][1][e];return o(t?t:e)},d,d.exports,e,n,t,i)}return t[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(e,n,t){e(23);var i=e(7);i.run()},{23:23,7:7}],2:[function(e,n,t){var i=e(3);n.exports=i},{3:3}],3:[function(e,n,t){n.exports={REAL_STUN_HOST:"stun.xpanama.net:3478",TURNSIGNAL_HOST:"ts.p.xpanama.net:7000",STUNGUN_HOST:"sg.p.xpanama.net:3480",SERVER_CANDIDATE:"candidate:827648026 1 udp 2122194687 SERVER_IP SERVER_PORT typ host generation 0",REPORTING_URL:"https://lb.statsevent.com/stats",REPORTING_RATE:.01,LOG_LEVEL:"error",REPORT_ERRORS:!0,MANIFEST_URL:"https://sri.jsintegrity.com/manifest.json",MANIFEST_EXPIRATION_TIME:86400,AD_MARKER:"adonis-marker"}},{}],4:[function(e,n,t){function i(){if(s.isExpiredNow(localStorage.adonisClientManifestExpiry))return null;var e=null;try{e=JSON.parse(localStorage.adonisClientManifest)}catch(n){}return e}function o(e,n){localStorage.adonisClientManifest=JSON.stringify(e),localStorage.adonisClientManifestExpiry=(new Date).getTime()/1e3+n}function r(e,n){var t=new XMLHttpRequest;t.open("GET",a.MANIFEST_URL+"?v="+e,!0),t.onload=function(){var e={},i=!1;if(200===t.status)try{e=JSON.parse(t.responseText)}catch(o){e={}}else i=!0;n(e,i)},t.onerror=function(){n({},!0)};try{t.send(null)}catch(i){n({},!0)}}var a=e(2),s=e(6);n.exports={cacheAdonisManifest:o,getCachedAdonisManifest:i,fetchAdonisManifest:r}},{2:2,6:6}],5:[function(e,n,t){function i(e){var n=new XMLHttpRequest,t=[l.REPORTING_URL,e].join("");n.open("GET",t,!0),n.send()}function o(e){i("/adonis_error?e="+e.toString())}function r(){return null!=window.ADONIS_BOOTSTRAP_STATS?window.ADONIS_BOOTSTRAP_STATS===!0:Math.random()<l.REPORTING_RATE}function a(e,n){if(s(e),r()){var t={website:window.location.hostname,key:e};null!=n&&(t.quantity=n),i(["/adonis_event/?event=",JSON.stringify(t)].join(""))}}function s(e){var n={key:e,time_ms:Math.round(window.performance.now()),website:window.location.hostname};u.push(n)}function c(){d.defineReadOnlyProperty("adonisBootstrapTiming",u)}var l=e(2),d=e(6),u=[];n.exports={reportError:o,reportEvent:a,saveTiming:c,shouldReport:r}},{2:2,6:6}],6:[function(e,n,t){function i(e,n){Object.defineProperty(window,e,{value:n,writable:!1})}function o(e,n){return!n||Number(n)<=e}function r(e){var n=(new Date).getTime()/1e3;return o(n,e)}var a=function(){var e=window.navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(firefox)[ \/]([\w.]+)/.exec(e);if(null!==n){var t=n[1],i=n[2],o=parseInt(i.split(".")[0]);if("chrome"===t&&o>=41||"firefox"===t&&o>=37)return!0}return!1},s=function(e){"loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e)};n.exports={isSupportedBrowser:a,defineReadOnlyProperty:i,ready:s,isExpired:o,isExpiredNow:r}},{}],7:[function(e,n,t){function i(e,n){return{host:"assets",path:e,headers:n}}function o(e,n,t){d.reportEvent("bootstrap.runclientscript"),d.saveTiming(),u.defineReadOnlyProperty("adonisConn",n),u.defineReadOnlyProperty("adonisConfig",l);var i=new Blob([e],{type:"text/javascript"}),o=URL.createObjectURL(i),a=p.getCachedAdonisManifest();return a&&a.hasOwnProperty(t)?void r(o,a[t],!1):void p.fetchAdonisManifest(t,function(e,n){p.cacheAdonisManifest(e,f),r(o,e[t],n)})}function r(e,n,t){if(t||n){var i=document.createElement("script");i.src=e,n&&(i.integrity=n),document.head.appendChild(i)}}function a(){}function s(){if(d.reportEvent("bootstrap.pageview"),u.isSupportedBrowser()){if(d.reportEvent("bootstrap.supported"),u.ready(function(){var e=document.querySelectorAll("["+h+"]");d.reportEvent("bootstrap.admarker",e.length)}),l.DEVELOPER_MODE){console.log("Developer mode is enabled. Fetching adonis client from:",l.ADONIS_CLIENT_FETCH_URL),localStorage.adonisClientVersion="6.0.0";var e=document.createElement("script");return e.src=l.ADONIS_CLIENT_FETCH_URL,void document.head.appendChild(e)}var n="undefined"!=typeof Storage;if(n){d.reportEvent("bootstrap.enabled");var t=localStorage.adonisCacheExpiry,r=localStorage.adonisCacheSrc,a=localStorage.adonisClientVersion,s=(new Date).getTime()/1e3;if(!u.isExpired(s,t)&&a&&r)d.reportEvent("bootstrap.cached"),o(r,null,localStorage.adonisClientVersion);else{d.reportEvent("bootstrap.expired");var p=new c(l.SERVER_CANDIDATE,l.REAL_STUN_HOST,l.TURNSIGNAL_HOST,l.STUNGUN_HOST,g);l.PANAMA_CLIENT&&l.PANAMA_CLIENT.SKIP_IP_LEAK_CHECK&&(p.skipIpLeakCheck=l.PANAMA_CLIENT.SKIP_IP_LEAK_CHECK),l.PANAMA_CLIENT&&l.PANAMA_CLIENT.CANDIDATE_WHITELISTED_IP&&(p.candidateWhitelistedIp=l.PANAMA_CLIENT.CANDIDATE_WHITELISTED_IP),p.setLogLevel(l.LOG_LEVEL),p.on("open",function(){d.reportEvent("bootstrap.panama_opened");var e=i("client",{adonis_client_api:"6.0.0"});p.request(e,function(e,n,t){if(d.reportEvent("bootstrap.client_fetched."+t),n){if(n["cache-control"]){var i=Number(n["cache-control"].split("=")[1]),a=s+i;localStorage.adonisCacheExpiry=a}n["adonis-client-version"]&&(localStorage.adonisClientVersion=n["adonis-client-version"])}304===t?o(r,p,localStorage.adonisClientVersion):200===t?(localStorage.adonisCacheSrc=e,o(e,p,localStorage.adonisClientVersion)):g(e)})}),d.reportEvent("bootstrap.panama_opening"),p.open()}}}}var c=e(8),l=e(2),d=e(5),u=e(6),p=e(4),f=l.MANIFEST_EXPIRATION_TIME||0;window.adonisHash=window.location.hash;l.LOG_LEVEL=window.adonisHash.indexOf("adonis-logging")!==-1?"debug":l.LOG_LEVEL;var h=l.AD_MARKER||"adonis-marker";window.adonisConn=void 0,window.adonisConfig=l,window.adonisBootstrapTiming=void 0;var g=l.REPORT_ERRORS?d.reportError:a;n.exports={runClientScript:o,insertScriptTag:r,run:s}},{2:2,4:4,5:5,6:6,8:8}],8:[function(e,n,t){function i(e,n,t,i,o){this.realStunHost=n,this.turnSignalHost=t,this.stunGunHost=i,this.serverCandidate=e,this.nodePeerPort=null,this.nodePeerIp=null,this.localCandidates=[],this.sentDataToTurn=!1,this.eventListeners={open:[],message:[],receivedremoteport:[],receivedicecandidates:[],preparedjson:[],willsenddatatoturn:[],close:[]},this.ips={},this.requests={},this.isOpen=!1,o&&(this.handleError=o),this.timingEvents=[],this.skipIpLeakCheck=!1,this.candidateWhitelistedIp=null}function o(){var e=this,n={iceServers:[{url:"stun:"+this.stunGunHost,urls:["stun:"+this.stunGunHost],username:"test",credential:"test"}]};m.info("Connecting to stungun server : "+this.stunGunHost);var t=this.stunGunPeerConnection=new C(n);t.createDataChannel(""),t.createOffer(function(n){t.setLocalDescription(n,function(){e.addTimingEvent("requestingServerIp",performance.now()-e.estConnectionStart)},function(){})},function(){}),t.onicecandidate=function(n){if(null!==n.candidate){var i=n.candidate.candidate;if(m.debug("onicecandidate: "+i),e.skipIpLeakCheck||e.checkCandidateIpLeak(i),g.isServerReflexive(i)&&!g.isIPv6(i)){t.close();var o=g.matchNodePeerIpAndPort(i);if(null!==o){e.addTimingEvent("serverIpReceived",performance.now()-e.estConnectionStart),e.nodePeerIp=o[1],e.nodePeerPort=o[2],m.info("ip and port to connect on: "+e.nodePeerIp+":"+e.nodePeerPort);var r=e.serverCandidate.replace(/SERVER_PORT/g,e.nodePeerPort);r=r.replace(/SERVER_IP/g,e.nodePeerIp),m.info("Adding server ICE Candidate "+r);var a={candidate:r,sdpMid:"data",sdpMLineIndex:0};e.peerConnection.addIceCandidate(new y(a),h,e.handleError),e.triggerEvent("receivedremoteport"),e.remoteCandidateReceived=!0,d.call(e)}}}}}function r(){var e=this.peerConnection=new C({iceServers:[{url:"stun:"+this.realStunHost,urls:["stun:"+this.realStunHost]}]}),n=this;this.peerConnection.onicecandidate=function(e){if(null!==e.candidate){var t=e.candidate.candidate;m.info("RECEVIED LOCAL CANDIDATE "+t),n.skipIpLeakCheck||n.checkCandidateIpLeak(t);var i=g.isServerReflexive(t);n.candidateWhitelistedIp&&(i=t.indexOf(n.candidateWhitelistedIp)&&!g.isServerReflexive(t)),i&&!g.isIPv6(t)&&(n.addTimingEvent("iceCandidate",performance.now()-n.estConnectionStart),n.localCandidates.push(t),n.localCandidateReceived=!0,d.call(n))}},this.peerConnection.ondatachannel=function(e){n.dataChannel=e.channel,n.turnSignalPeerConnection.close(),m.info("ondatachannel",n.dataChannel.label,n.dataChannel.readyState),n.dataChannel.binaryType="arraybuffer",n.dataChannel.onopen=function(){n.isOpen=!0,m.info("onopen");var e=performance.now(),t=e-n.estConnectionStart;n.addTimingEvent("dataChannelOpen",t);var i={host:"test"};n.request(i,function(){var t=performance.now()-e;n.addTimingEvent("msgRoundTrip",t),clearTimeout(n.connectionTimeout),setTimeout(function(){n.close()},T)}),m.info("TIMING:total "+t),m.info("onopen"),n.triggerEvent("open"),n.messageSendStartTime=performance.now()},n.dataChannel.onmessage=function(e){var t=e.data;m.info("Received response chunk",t),n.triggerEvent("message",t);try{var i=v.handleChunk(t)}catch(o){return void m.error("Failed to process chunked response: ",o)}i&&(m.info("Received complete response. Handling it"),a.call(n,i.id,i.http))},n.dataChannel.onclose=function(){m.info("onClose"),n.triggerEvent("close")},n.dataChannel.onerror=n.handleError},this.peerConnection.onsignalingstatechange=function(){m.info("signaling state change: ",e.iceConnectionState)},this.peerConnection.oniceconnectionstatechange=function(){var t=performance.now();m.info("ice connection state change: ",e.iceConnectionState,"after ",t-n.estConnectionStart,"millis")},this.peerConnection.onicegatheringstatechange=function(){m.info("ice gathering state change: ",e.iceConnectionState)},s.call(this)}function a(e,n){var t=n.headers;t&&t["set-cookie"]&&(document.cookie=t["set-cookie"]);var i=this.requests[e];i(n.body,n.headers,n.status),delete this.requests[e]}function s(){var e={type:"offer",sdp:"v=0\r\no=- 7745999191240241858 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=msid-semantic: WMS\r\nm=application 9 DTLS/SCTP 5000\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:3qmHhNXjf0LEoY5G\r\na=ice-pwd:D9uox96QDNbrCdbN9WUlLAJu\r\na=ice-options:google-ice\r\na=fingerprint:sha-1 8E:5A:C4:E7:A7:53:E8:C1:39:19:59:47:4F:4C:E8:54:F7:38:DF:A2\r\na=setup:actpass\r\na=mid:data\r\na=sctpmap:5000 webrtc-datachannel 1024\r\n"};m.info("SETTING HARD CODED offer data : "+e.sdp);var n=new S(e);this.peerConnection.setRemoteDescription(n,c.bind(this),this.handleError),c.bind(this)}function c(){this.peerConnection.createAnswer(l.bind(this),this.handleError),this.iceCandidateStartTime=performance.now()}function l(e){this.answer=e,this.peerConnection.setLocalDescription(new S(e),u.bind(this),this.handleError),this.localDescriptionSet=!0,d.call(this)}function d(){!this.sentDataToTurn&&this.remoteCandidateReceived&&this.localCandidateReceived&&this.localDescriptionSet&&(m.debug("sending data to TURN"),p.call(this),this.sentDataToTurn=!0)}function u(){m.info("Sending answer"),this.addTimingEvent("setLocalDesc",performance.now()-this.estConnectionStart)}function p(){this.triggerEvent("receivedicecandidates");var e=performance.now();m.info("TIMING:ice_candidates "+(e-this.iceCandidateStartTime));var n=/a=ice-ufrag:[ -z]*/,t=/a=ice-pwd:[ -z]*/,i=/a=fingerprint:[A-z0-9\-]* [0-F:]*/,o=/o=-?\S* [0-9]+ [0-9] IN IP4 [0-9\.]+/,r=performance.now();m.info("Before matching regexes"+(r-this.estConnectionStart)),m.info(this.answer.sdp);var a=this.answer.sdp.match(n),s=this.answer.sdp.match(t),c=this.answer.sdp.match(i),l=this.answer.sdp.match(o);m.info("UFRAG:"+a),m.info("PWD:"+s),m.info("FINGERPRINT:"+c),m.info("O=:"+l);var d=[this.localCandidates];d.push(a[0]),d.push(s[0]),d.push(c[0]),d.push(l[0]);var u=new Uint8Array(8);window.crypto.getRandomValues(u);var p=String.fromCharCode.apply(null,u);d.push(p),d.push(this.nodePeerIp),d.push(this.nodePeerPort),this.triggerEvent("preparedjson",d);var h=performance.now();m.info("After matching regexes"+(h-this.estConnectionStart));var g=performance.now();m.info("Before jsonifying candidates"+(g-this.estConnectionStart));var v=JSON.stringify(d),w=performance.now();m.info("After jsonifying candidates"+(w-this.estConnectionStart)),f.call(this,v)}function f(e){this.triggerEvent("willsenddatatoturn",e);var n=performance.now()-this.estConnectionStart;this.addTimingEvent("turnPrep",n),m.debug("Sending data to turn @ "+this.turnSignalHost+" after "+n+" millis");var t={iceServers:[{url:"turn:"+this.turnSignalHost,urls:["turn:"+this.turnSignalHost],username:e,credential:"x"}]};this.turnSignalPeerConnection=new C(t),this.turnSignalPeerConnection.createDataChannel("");var i=this;this.turnSignalPeerConnection.createOffer(function(e){var n=performance.now(),t=n-i.estConnectionStart;i.addTimingEvent("turnSend",t),m.info("Fake offer generated which should trigger TURN request after "+(n-i.estConnectionStart)+" millis"),i.turnSignalPeerConnection.setLocalDescription(e,function(){},function(){})},function(){})}function h(){m.info("Successfully added ICE candidate")}const g=e(21),v=e(22),w=e(17);w.enable();const m=w("panama-client");var C=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,S=window.RTCSessionDescription||window.mozRTCSessionDescription||window.webkitRTCSessionDescription,y=window.RTCIceCandidate||window.mozRTCIceCandidate||window.webkitRTCIceCandidate,E=15e3,T=3e5;i.prototype.handleError=function(){},i.prototype.getTimingEvents=function(){return this.timingEvents},i.prototype.addTimingEvent=function(e,n){var t={name:"t_"+e,timing:n};this.timingEvents.push(t)},i.prototype.open=function(){var e=this;this.connectionTimeout=setTimeout(function(){e.close()},E),this.estConnectionStart=performance.now(),setTimeout(function(){m.debug("v8Lag is : "+(performance.now()-e.estConnectionStart)),e.addTimingEvent("v8Lag",performance.now()-e.estConnectionStart)},1),o.call(this),r.call(this)},i.prototype.send=function(e){m.info("sending message",e),this.dataChannel.send(e)},i.prototype.request=function(e,n){var t=v.buildRequest(e),i=v.buildTerminator(t.id);this.requests[t.id]=n,this.send(JSON.stringify(t)),this.send(JSON.stringify(i))},i.prototype.close=function(){this.dataChannel&&(this.dataChannel.close(),this.dataChannel=null),this.peerConnection&&"closed"!==this.peerConnection.signalingState&&(console.log("Closed PC"),this.peerConnection.close()),this.stunGunPeerConnection&&"closed"!==this.stunGunPeerConnection.signalingState&&(console.log("Closed Stungun PC"),this.stunGunPeerConnection.close()),this.turnSignalPeerConnection&&"closed"!==this.turnSignalPeerConnection.signalingState&&(console.log("Closed Turnsignal PC"),this.turnSignalPeerConnection.close())},i.prototype.on=function(e,n){e in this.eventListeners&&this.eventListeners[e].push(n)},i.prototype.triggerEvent=function(e){if(e in this.eventListeners){var n=Array.prototype.slice.call(arguments,1);this.eventListeners[e].forEach(function(e){e.apply(this,n)})}},i.prototype.setLogLevel=function(e){w.suggest.clear().deny("panama-client",e)},i.prototype.checkCandidateIpLeak=function(e){if(!g.isIPv6(e)&&e.indexOf("typ host")!==-1){var n=g.extractCandidateIp(e);n&&(this.ips[n]=!0,Object.keys(this.ips).length>=2&&(m.info("Multiple private IPs detected. Closing the connection."),this.close()))}},window.PanamaClient=i,n.exports=i},{17:17,21:21,22:22}],9:[function(e,n,t){function i(){this.enabled=!0,this.defaultResult=!0,this.clear()}function o(e,n){return e.n.test?e.n.test(n):e.n==n}var r=e(11),a={debug:1,info:2,warn:3,error:4};r.mixin(i),i.prototype.allow=function(e,n){return this._white.push({n:e,l:a[n]}),this},i.prototype.deny=function(e,n){return this._black.push({n:e,l:a[n]}),this},i.prototype.clear=function(){return this._white=[],this._black=[],this},i.prototype.test=function(e,n){var t,i=Math.max(this._white.length,this._black.length);for(t=0;t<i;t++){if(this._white[t]&&o(this._white[t],e)&&a[n]>=this._white[t].l)return!0;if(this._black[t]&&o(this._black[t],e)&&a[n]<this._black[t].l)return!1}return this.defaultResult},i.prototype.write=function(e,n,t){if(!this.enabled||this.test(e,n))return this.emit("item",e,n,t)},n.exports=i},{11:11}],10:[function(e,n,t){var i=e(11),o=e(9),r=new i,a=Array.prototype.slice;t=n.exports=function(e){var n=function(){return r.write(e,void 0,a.call(arguments)),n};return n.debug=function(){return r.write(e,"debug",a.call(arguments)),n},n.info=function(){return r.write(e,"info",a.call(arguments)),n},n.warn=function(){return r.write(e,"warn",a.call(arguments)),n},n.error=function(){return r.write(e,"error",a.call(arguments)),n},n.log=n.debug,n.suggest=t.suggest,n.format=r.format,n},t.defaultBackend=t.defaultFormatter=null,t.pipe=function(e){return r.pipe(e)},t.end=t.unpipe=t.disable=function(e){return r.unpipe(e)},t.Transform=i,t.Filter=o,t.suggest=new o,t.enable=function(){return t.defaultFormatter?r.pipe(t.suggest).pipe(t.defaultFormatter).pipe(t.defaultBackend):r.pipe(t.suggest).pipe(t.defaultBackend)}},{11:11,9:9}],11:[function(e,n,t){function i(){}var o=e(20);o.mixin(i),i.prototype.write=function(e,n,t){this.emit("item",e,n,t)},i.prototype.end=function(){this.emit("end"),this.removeAllListeners()},i.prototype.pipe=function(e){function n(){e.write.apply(e,Array.prototype.slice.call(arguments))}function t(){!e._isStdio&&e.end()}var i=this;return i.emit("unpipe",e),e.emit("pipe",i),i.on("item",n),i.on("end",t),i.when("unpipe",function(o){var r=o===e||"undefined"==typeof o;return r&&(i.removeListener("item",n),i.removeListener("end",t),e.emit("unpipe")),r}),e},i.prototype.unpipe=function(e){return this.emit("unpipe",e),this},i.prototype.format=function(e){throw new Error(["Warning: .format() is deprecated in Minilog v2! Use .pipe() instead. For example:","var Minilog = require('minilog');","Minilog","  .pipe(Minilog.backends.console.formatClean)","  .pipe(Minilog.backends.console);"].join("\n"))},i.mixin=function(e){var n,t=i.prototype;for(n in t)t.hasOwnProperty(n)&&(e.prototype[n]=t[n])},n.exports=i},{20:20}],12:[function(e,n,t){var i=e(11),o=[],r=new i;r.write=function(e,n,t){o.push([e,n,t])},r.get=function(){return o},r.empty=function(){o=[]},n.exports=r},{11:11}],13:[function(e,n,t){var i=e(11),o=/\n+$/,r=new i;r.write=function(e,n,t){var i=t.length-1;if("undefined"!=typeof console&&console.log){if(console.log.apply)return console.log.apply(console,[e,n].concat(t));if(JSON&&JSON.stringify){t[i]&&"string"==typeof t[i]&&(t[i]=t[i].replace(o,""));try{for(i=0;i<t.length;i++)t[i]=JSON.stringify(t[i])}catch(r){}console.log(t.join(" "))}}},r.formatters=["color","minilog"],r.color=e(14),r.minilog=e(15),n.exports=r},{11:11,14:14,15:15}],14:[function(e,n,t){var i=e(11),o=e(16),r={debug:["cyan"],info:["purple"],warn:["yellow",!0],error:["red",!0]},a=new i;a.write=function(e,n,t){var i=console.log;console[n]&&console[n].apply&&(i=console[n],i.apply(console,["%c"+e+" %c"+n,o("gray"),o.apply(o,r[n])].concat(t)))},a.pipe=function(){},n.exports=a},{11:11,16:16}],15:[function(e,n,t){var i=e(11),o=e(16),r={debug:["gray"],info:["purple"],warn:["yellow",!0],error:["red",!0]},a=new i;a.write=function(e,n,t){var i=console.log;"debug"!=n&&console[n]&&(i=console[n]);var a=0;if("info"!=n){for(;a<t.length&&"string"==typeof t[a];a++);i.apply(console,["%c"+e+" "+t.slice(0,a).join(" "),o.apply(o,r[n])].concat(t.slice(a)))}else i.apply(console,["%c"+e,o.apply(o,r[n])].concat(t))},a.pipe=function(){},n.exports=a},{11:11,16:16}],16:[function(e,n,t){function i(e,n){return n?"color: #fff; background: "+o[e]+";":"color: "+o[e]+";"}var o={black:"#000",red:"#c23621",green:"#25bc26",yellow:"#bbbb00",blue:"#492ee1",magenta:"#d338d3",cyan:"#33bbc8",gray:"#808080",purple:"#708"};n.exports=i},{}],17:[function(e,n,t){var i=e(10),o=i.enable,r=i.disable,a="undefined"!=typeof navigator&&/chrome/i.test(navigator.userAgent),s=e(13);if(i.defaultBackend=a?s.minilog:s,"undefined"!=typeof window){try{i.enable(JSON.parse(window.localStorage.minilogSettings))}catch(c){}if(window.location&&window.location.search){var l=RegExp("[?&]minilog=([^&]*)").exec(window.location.search);l&&i.enable(decodeURIComponent(l[1]))}}i.enable=function(){o.call(i,!0);try{window.localStorage.minilogSettings=JSON.stringify(!0)}catch(e){}return this},i.disable=function(){r.call(i);try{delete window.localStorage.minilogSettings}catch(e){}return this},t=n.exports=i,t.backends={array:e(12),browser:i.defaultBackend,localStorage:e(19),jQuery:e(18)}},{10:10,12:12,13:13,18:18,19:19}],18:[function(e,n,t){function i(e){this.url=e.url||"",this.cache=[],this.timer=null,this.interval=e.interval||3e4,this.enabled=!0,this.jQuery=window.jQuery,this.extras={}}var o=e(11),r=(new Date).valueOf().toString(36);o.mixin(i),i.prototype.write=function(e,n,t){this.timer||this.init(),this.cache.push([e,n].concat(t))},i.prototype.init=function(){if(this.enabled&&this.jQuery){var e=this;this.timer=setTimeout(function(){var n,t,i=[],o=e.url;if(0==e.cache.length)return e.init();for(n=0;n<e.cache.length;n++)try{JSON.stringify(e.cache[n]),i.push(e.cache[n])}catch(a){}e.jQuery.isEmptyObject(e.extras)?(t=JSON.stringify({logs:i}),o=e.url+"?client_id="+r):t=JSON.stringify(e.jQuery.extend({logs:i},e.extras)),e.jQuery.ajax(o,{type:"POST",cache:!1,processData:!1,data:t,contentType:"application/json",timeout:1e4}).success(function(n,t,i){n.interval&&(e.interval=Math.max(1e3,n.interval))}).error(function(){e.interval=3e4}).always(function(){e.init()}),e.cache=[]},this.interval)}},i.prototype.end=function(){},i.jQueryWait=function(e){return"undefined"!=typeof window&&(window.jQuery||window.$)?e(window.jQuery||window.$):void("undefined"!=typeof window&&setTimeout(function(){i.jQueryWait(e)},200))},n.exports=i},{11:11}],19:[function(e,n,t){var i=e(11),o=!1,r=new i;r.write=function(e,n,t){if("undefined"!=typeof window&&"undefined"!=typeof JSON&&JSON.stringify&&JSON.parse)try{o||(o=window.localStorage.minilog?JSON.parse(window.localStorage.minilog):[]),o.push([(new Date).toString(),e,n,t]),window.localStorage.minilog=JSON.stringify(o)}catch(i){}},n.exports=r},{11:11}],20:[function(e,n,t){function i(){this._events={}}i.prototype={on:function(e,n){this._events||(this._events={});var t=this._events;return(t[e]||(t[e]=[])).push(n),this},removeListener:function(e,n){var t,i=this._events[e]||[];for(t=i.length-1;t>=0&&i[t];t--)i[t]!==n&&i[t].cb!==n||i.splice(t,1)},removeAllListeners:function(e){e?this._events[e]&&(this._events[e]=[]):this._events={}},emit:function(e){this._events||(this._events={});var n,t=Array.prototype.slice.call(arguments,1),i=this._events[e]||[];for(n=i.length-1;n>=0&&i[n];n--)i[n].apply(this,t);return this},when:function(e,n){return this.once(e,n,!0)},once:function(e,n,t){function i(){t||this.removeListener(e,i),n.apply(this,arguments)&&t&&this.removeListener(e,i)}return n?(i.cb=n,this.on(e,i),this):this}},i.mixin=function(e){var n,t=i.prototype;for(n in t)t.hasOwnProperty(n)&&(e.prototype[n]=t[n])},n.exports=i},{}],21:[function(e,n,t){n.exports.getPortNoFromCandidate=function(e){var n=/([0-9]+) ([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}) ([0-9]+)/.exec(e)||[];return n[3]||null},n.exports.isServerReflexive=function(e){return e.indexOf("srflx")!==-1},n.exports.isIPv6=function(e){return/([0-9a-fA-F]){1,4}(:([0-9a-fA-F]){1,4}){7}/.test(e)},n.exports.extractCandidateIp=function(e){var n=/[0-9]+ ([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}) [0-9]+/.exec(e);return n&&n.length>1?n[1]:null},n.exports.matchNodePeerIpAndPort=function(e){return e.match(/candidate:[0-9]+ [0-9]+ udp [0-9]+ ([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}) ([0-9]*)/i)}},{}],22:[function(e,n,t){function i(){return Math.floor(99999*Math.random()+1)}function o(e){var n=i().toString(),t={id:n,version:l,http:e};return t}function r(e){var n={id:e,version:l,http:"TERMINATOR"};return n}function a(e){var n=null;try{n=JSON.parse(d+e)}catch(t){d+=e}return n&&(d=""),n}function s(e){if(!e.http||!e.id)throw new Error("Fields `id` and `http` are mandatory.");var n=e.id;if("TERMINATOR"===e.http){if(!u[n])return null;var t=u[n];return u[n]=null,t}return u[n]?u[n].http.body+=e.http.body:u[n]=e,null}function c(e){var n=a(e);if(!n)return null;var t=s(n);return t}var l="1.0",d="",u={};n.exports={buildRequest:o,buildTerminator:r,handleChunk:c,accumulateJSON:a,accumulateResponse:s}},{}],23:[function(e,n,t){function i(e){"performance"in e||(e.performance={});var n=e.performance;e.performance.now=n.now||n.mozNow||n.msNow||n.oNow||n.webkitNow||Date.now||function(){return(new Date).getTime()}}i(self)},{}]},{},[1]);