"use strict";var precacheConfig=[["/fncmacaroon/fncmacaroon.github.io/index.html","212988c563b00ed717f63445bf9cd9e9"],["/fncmacaroon/fncmacaroon.github.io/static/css/main.cf63685b.css","19371b4a12e77f3949406f1d73eae813"],["/fncmacaroon/fncmacaroon.github.io/static/js/main.6f29ad43.js","21e097b1d257f7c97289570d1f328f02"],["/fncmacaroon/fncmacaroon.github.io/static/media/Airfryer.92c6366b.PNG","92c6366b675f88c8a095311b3ae19447"],["/fncmacaroon/fncmacaroon.github.io/static/media/Airpods.9a7eae84.PNG","9a7eae84c4f673d8673daf2136028bad"],["/fncmacaroon/fncmacaroon.github.io/static/media/Imac.17384e4c.PNG","17384e4ccd6899dc3b117573b345eb2e"],["/fncmacaroon/fncmacaroon.github.io/static/media/Ipad.a4c4b0b3.PNG","a4c4b0b3c7233b14a6dfaf50f060fd30"],["/fncmacaroon/fncmacaroon.github.io/static/media/Laptop.3ff3a144.PNG","3ff3a144db4d8e93764b8c09528dcb68"],["/fncmacaroon/fncmacaroon.github.io/static/media/TV.e92b4d9e.PNG","e92b4d9edd03168625bbe86923fd4fd8"],["/fncmacaroon/fncmacaroon.github.io/static/media/Xbox.b026dd28.PNG","b026dd28a7ad2dd3428fcef09497be77"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(n){return n.redirected?("body"in n?Promise.resolve(n.body):n.blob()).then(function(e){return new Response(e,{headers:n.headers,status:n.status,statusText:n.statusText})}):Promise.resolve(n)},createCacheKey=function(e,n,t,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(n){return t.every(function(e){return!e.test(n[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),r=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var e=new Request(n,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+n+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(n,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(n){return n.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return n.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(n){if("GET"===n.request.method){var e,t=stripIgnoredUrlParameters(n.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),e=urlsToCacheKeys.has(t));var r="/fncmacaroon/fncmacaroon.github.io/index.html";!e&&"navigate"===n.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],n.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&n.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',n.request.url,e),fetch(n.request)}))}});