(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{253:function(e,t,n){e.exports=n(254)},254:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n(4),r=n(9),i=n(16),d=n(8),l=n(15),c=n(122),s=n.n(c),h=n(229),p=n.n(h),u=n(230),m=n.n(u),f=(n(261),n(298)),v=["o","g"],g=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={model:null,preview:"",predictions:[]},n.onDrop=function(e,t,a){n.setState({preview:e[0].preview||a[0]})},n.cropToCanvas=function(e,t,n){var a=e.naturalWidth,o=e.naturalHeight;n.clearRect(0,0,n.canvas.width,n.canvas.height),n.fillStyle="#000000",n.fillRect(0,0,t.width,t.height);var r=Math.min(t.width/e.naturalWidth,t.height/e.naturalHeight),i=Math.round(a*r),d=Math.round(o*r);n.drawImage(e,0,0,a,o,(t.width-i)/2,(t.height-d)/2,i,d)},n.onImageChange=function(e){var t=document.getElementById("canvas"),o=t.getContext("2d");n.cropToCanvas(e.target,t,o);var r=n.state.model.inputs[0].shape.slice(1,3),i=Object(a.a)(r,2),d=i[0],l=i[1],c=f.tidy(function(){return f.image.resizeBilinear(f.browser.fromPixels(t),[d,l]).div(255).expandDims(0)});n.state.model.executeAsync(c).then(function(e){var n="9px sans-serif";o.font=n,o.textBaseline="top";var r,i=Object(a.a)(e,4),d=i[0],l=i[1],c=i[2],s=i[3],h=d.dataSync(),p=l.dataSync(),u=c.dataSync(),m=s.dataSync()[0];for(f.dispose(e),r=0;r<m;++r){var g=h.slice(4*r,4*(r+1)),w=Object(a.a)(g,4),C=w[0],x=w[1],T=w[2],y=w[3];C*=t.width,T*=t.width,x*=t.height;var N=T-C,b=(y*=t.height)-x,j=v[u[r]],E=p[r].toFixed(2);o.strokeStyle="#00FFFF00",o.lineWidth=4,o.strokeRect(C,x,N,b),o.fillStyle="#f0f8ff10";var S=o.measureText(j+":"+E).width,D=parseInt(n,10);o.fillRect(C,x,S+4,D+4)}var I=0,M=0;for(r=0;r<m;++r){var O=h.slice(4*r,4*(r+1)),R=Object(a.a)(O,3),k=R[0],F=R[1];k*=t.width,F*=t.height;var z=v[u[r]],B=p[r].toFixed(2);o.fillStyle="#000000",o.fillText(z+":"+B,k,F),0===u[r]?I=1+I:I+=0,1===u[r]?M=1+M:M+=0}var W=(M/(I+M)*100-3.2499)/.7229;if(W>=100)var A=100;else A=W<=-4.49564?0:W<=-3.11233?1:W<=-1.72901?2:W<=-.34569?3:W<=1.037626?4:W>-2.420943&&W<=133.8361?W+3.2499:100;W=W>50.83705?"40\uff05\u8d85":W<-3.11233?"\uff11\uff05\u672a\u6e80":W<2.420943?"\uff15\uff05\u672a\u6e80":Math.round(W+3.2499);for(var H=String(W),J=document.getElementById("tbl"),L=0;L<J.rows.length;L++)for(var G=0;G<J.rows[L].cells.length;G++);if(1===L){var P=J.insertRow(-1),_=document.createElement("th"),q=document.createTextNode(L);_.appendChild(q),P.appendChild(_);var K=P.insertCell(1),Q=document.createTextNode(M);K.appendChild(Q);var U=P.insertCell(2),V=document.createTextNode(H);U.appendChild(V);var X=Math.round(A),Y=P.insertCell(3),Z=document.createTextNode(X);Y.appendChild(Z)}else if(2===L){P=J.insertRow(-1),_=document.createElement("th"),q=document.createTextNode(L),_.appendChild(q),P.appendChild(_),K=P.insertCell(1),Q=document.createTextNode(M),K.appendChild(Q),U=P.insertCell(2),V=document.createTextNode(H),U.appendChild(V);var $=J.rows[J.rows.length-2],ee=parseInt($.cells[3].innerText),te=ee+A,ne=te/L,ae=Math.round(ne);Y=P.insertCell(3),Z=document.createTextNode(ae),Y.appendChild(Z)}else L>2&&(P=J.insertRow(-1),_=document.createElement("th"),q=document.createTextNode(L),_.appendChild(q),P.appendChild(_),K=P.insertCell(1),Q=document.createTextNode(M),K.appendChild(Q),U=P.insertCell(2),V=document.createTextNode(H),U.appendChild(V),$=J.rows[J.rows.length-2],ne=((te=(ee=parseInt($.cells[3].innerText))*(L-1))+A)/L,ae=Math.round(ne),Y=P.insertCell(3),Z=document.createTextNode(ae),Y.appendChild(Z))})},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.loadGraphModel("web_model/model.json").then(function(t){e.setState({model:t})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"Dropzone-page"},this.state.model?s.a.createElement(m.a,{className:"Dropzone",accept:"image/jpeg, image/png, .jpg, .jpeg, .png",multiple:!1,onDrop:this.onDrop},this.state.preview?s.a.createElement("img",{alt:"upload preview",onLoad:this.onImageChange,className:"Dropzone-img",src:this.state.preview}):"Choose or drop a file.",s.a.createElement("canvas",{id:"canvas",width:"640",height:"640"})):s.a.createElement("div",{className:"Dropzone"},"Loading model..."))}}]),t}(s.a.Component),w=document.getElementById("root");p.a.render(s.a.createElement(g,null),w)},261:function(e,t,n){},267:function(e,t){},268:function(e,t){},276:function(e,t){},286:function(e,t){},287:function(e,t){},288:function(e,t){},289:function(e,t){},297:function(e,t){}},[[253,2,1]]]);
//# sourceMappingURL=main.40cdd969.chunk.js.map