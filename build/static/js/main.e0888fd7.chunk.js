(window.webpackJsonpreact_clicky_game=window.webpackJsonpreact_clicky_game||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/batman_1.3abb3ad4.jpg"},function(e,t,a){e.exports=a.p+"static/media/blackpanther_1.830795db.jpg"},function(e,t,a){e.exports=a.p+"static/media/captain_america1.488da7fc.jpg"},function(e,t,a){e.exports=a.p+"static/media/captain_america2.6d54c873.jpg"},function(e,t,a){e.exports=a.p+"static/media/captain_america3.e2907ebb.png"},function(e,t,a){e.exports=a.p+"static/media/captain_america4.f3ab549a.jpg"},function(e,t,a){e.exports=a.p+"static/media/hulk_1.a543ce95.jpg"},function(e,t,a){e.exports=a.p+"static/media/ironman_1.7500594d.png"},function(e,t,a){e.exports=a.p+"static/media/ironman_2.549819ce.jpg"},function(e,t,a){e.exports=a.p+"static/media/ironman_3.a187d551.jpg"},function(e,t,a){e.exports=a.p+"static/media/ironman_4.77752f34.jpg"},function(e,t,a){e.exports=a.p+"static/media/spiderman_1.0384648b.jpg"},function(e,t,a){e.exports=a.p+"static/media/spiderman_2.1171630c.jpg"},function(e,t,a){e.exports=a.p+"static/media/thore_1.cf4cc845.jpg"},,,function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),i=a.n(r),s=a(4),o=a(5),l=a(21),u=a(6),m=a(1),p=a(22),h=(a(28),function(e){return c.a.createElement("div",{className:"navbar "},c.a.createElement("div",null,"Clicky Game"),c.a.createElement("div",{className:e.navMsgColor},e.navMessage),c.a.createElement("div",null,"Score: ",e.score," ",c.a.createElement("span",{className:"pipe"},"|")," High Score: ",e.highScore))}),f=(a(29),a(30),function(e){return c.a.createElement("div",{className:"card",onClick:function(t){return e.clickEvent(t.target.src)}},c.a.createElement("img",{className:"card-img-top card-height",src:e.name,alt:""}))}),d=function(e){return c.a.createElement("div",{className:e.shake?"container d-flex flex-wrap justify-content-center shake":"container d-flex flex-wrap justify-content-center"},e.characters.map((function(t,a){return c.a.createElement(f,{name:t,key:a,clickEvent:e.clickEvent})})))},g=(a(31),function(){return c.a.createElement("div",{className:"footer text-center"},"Trevor Johnson")}),v=(a(32),function(){return c.a.createElement("div",{className:"banner text-center d-flex align-items-center justify-content-center"},c.a.createElement("p",{className:"m-0"},"Click on an image to earn points, but don't click on any more than once!"))}),k=a(7),C=a.n(k),E=a(8),b=a.n(E),x=a(9),j=a.n(x),y=a(10),_=a.n(y),w=a(11),M=a.n(w),S=a(12),N=a.n(S),O=a(13),A=a.n(O),J=a(14),G=a.n(J),I=a(15),T=a.n(I),B=a(16),H=a.n(B),Y=a(17),q=a.n(Y),z=a(18),D=a.n(z),F=a(19),K=a.n(F),L=a(20),P=a.n(L),Q=[C.a,b.a,j.a,_.a,M.a,N.a,A.a,G.a,T.a,H.a,q.a,D.a,K.a,P.a],R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={score:0,highScore:0,navMsgColor:"",navMessage:"Click an image to begin!",allCharacters:a.shuffleArray(),wasClicked:[],shake:!1},a.clickEvent=a.checkClicked.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"shuffleArray",value:function(){for(var e=Q.slice(),t=[];e.length>0;)t.push(e.splice(Math.floor(Math.random()*e.length),1)[0]);return t}},{key:"checkClicked",value:function(e){var t=this,a=this.state.wasClicked.slice(),n=this.shuffleArray(),c=this.state.score,r=this.state.highScore;if(this.state.wasClicked.includes(e)||(c===r?(c++,r++):c++,a.push(e)),this.state.wasClicked.includes(e)){return this.setState({score:0,highScore:r,navMsgColor:"incorrect",navMessage:"Incorrect guess!",allCharacters:n,wasClicked:[],shake:!0})}return this.setState({score:c,highScore:r,navMsgColor:"correct",navMessage:"You Guessed Correctly!",allCharacters:n,wasClicked:a,shake:!1}),setTimeout((function(){return t.setState({navMsgColor:""})}),500)}},{key:"render",value:function(){var e=this.state;return c.a.createElement("div",null,c.a.createElement(h,{score:e.score,highScore:e.highScore,navMessage:e.navMessage,navMsgColor:e.navMsgColor}),c.a.createElement(v,null),c.a.createElement(d,{shake:e.shake,characters:e.allCharacters,clickEvent:this.clickEvent}),c.a.createElement(g,null))}}]),t}(n.Component);a(33);i.a.render(c.a.createElement(R,null),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.e0888fd7.chunk.js.map