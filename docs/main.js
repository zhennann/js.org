(()=>{var r=window.location.search.slice(1).replace(/\.js$/,"");(function(e){if(r&&(e=document.getElementById(e))){let t=r;e.innerHTML=t,setTimeout(function(){window.top.location.href="https://js.org/?"+t},9999)}})("sd");(function(e){window.onload=()=>{if(e=document.getElementById(e)){let t=document.getElementById("_carbonads_projs");t||e.classList.add("blocked"),fetch(`/count/${t?"cad":"nocad"}`)}}})("cad");(function(e){if(!(e=document.getElementById(e)))return;let t=document.getElementsByTagName("head")[0],a="cb_"+Math.random().toString(36).substring(2,16),i=document.createElement("script");window[a]=s=>{e.innerHTML=((s.data.watchers||0)/1e3).toFixed(1)+"K"},i.src="https://api.github.com/repos/js-org/js.org?callback="+a,t.insertBefore(i,t.firstChild)})("ghstars");(function(e,t){if(!(e=document.getElementById(e)))return;r&&t.unshift(r.substring(0,8));let a=1e3/4,i=1,s=.2,u=3e3,c=1e3/16,h=1,g=.2,f=500,n=e.innerHTML,o=n.length,m=-1,l=()=>{o-- >0?(e.className="active",e.innerHTML=n.slice(0,o),setTimeout(l,c+c*o/n.length*h+c*g*Math.random())):(n=""+t[m=(m+1)%t.length],setTimeout(d,f))},d=()=>{o++<n.length?(e.innerHTML=n.slice(0,o),setTimeout(d,a+a*-o/n.length*i+a*s*Math.random())):(e.className="",setTimeout(l,u))};d()})("hermes",["your","domain","4free","user","learn","munich"]);})();