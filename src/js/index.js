$(document).ready(function(){function e(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))}function t(e){$("#movie-"+e).get(0).play(),null==Z[e-1]&&(Z[e-1]=setInterval(function(){var t=$("#movie-"+e).get(0).currentTime,a=t/$("#movie-"+e).get(0).duration*100;a>.6&&$('.video-play[data-target="'+e+'"]').css("opacity",0),Math.floor(t/5)>ee&&(ee=Math.floor(t/5)),$("#progress-bar-"+e).css("width",a+"%")},600))}function a(e){$("#movie-"+e).get(0).pause(),$('.video-play[data-target="'+e+'"]').css("opacity",1),Z[e-1]&&(clearInterval(Z[e-1]),Z[e-1]=null)}function s(e){$("#movie-"+e).get(0).currentTime=0,$("#movie-"+e).get(0).play(),$(".progress-bar").css("width",0),clearInterval(Z[e-1]),Z[e-1]=setInterval(function(){var t=$("#movie-"+e).get(0).currentTime/$("#movie-"+e).get(0).duration*100;$("#progress-bar-"+e).css("width",t+"%")},600)}function r(e){1==$("#movie-"+e).get(0).muted?($("#movie-"+e).get(0).muted=!1,$('.volume[data-target="'+e+'"]').removeClass("fa-volume-off").addClass("fa-volume-up"),$('.volume-text[data-target="'+e+'"]').text("點按關聲音")):($("#movie-"+e).get(0).muted=!0,$('.volume[data-target="'+e+'"]').removeClass("fa-volume-up").addClass("fa-volume-off"),$('.volume-text[data-target="'+e+'"]').text("點按開聲音"))}function o(){$("#music-main")[0].muted=!1,$("#music-door")[0].muted=!1,$("#music-door")[0].volume=.6,$("#music-walk")[0].muted=!1,$("#music-walk")[0].volume=.6,$("#music-cooking")[0].muted=!1,$("#music-cooking")[0].volume=.6,$("#music-driving")[0].muted=!1,$("#music-driving")[0].volume=.3,$("#music-camera")[0].muted=!1,$("#music-camera")[0].volume=.3,$("#music-switch")[0].muted=!1,$("#music-switch")[0].volume=.6,$("#music-stroll")[0].muted=!1,$("#music-stroll")[0].volume=.3,$("#music-street")[0].muted=!1,$("#music-street")[0].volume=.6}function c(){$("#music-main")[0].muted=!0,$("#music-door")[0].muted=!0,$("#music-walk")[0].muted=!0,$("#music-cooking")[0].muted=!0,$("#music-driving")[0].muted=!0,$("#music-camera")[0].muted=!0,$("#music-switch")[0].muted=!0,$("#music-stroll")[0].muted=!0,$("#music-street")[0].muted=!0}function n(){clearInterval(T),clearInterval(q),clearInterval(B),clearInterval(L),clearInterval(P),clearInterval(j),clearInterval(D),clearInterval(O),clearInterval(X),clearInterval(F),clearInterval(M),clearInterval(z),clearInterval(V),clearInterval(W),clearInterval(H),clearInterval(K),clearInterval(N),clearInterval(G),$("#music-door")[0].pause(),$("#music-walk")[0].pause(),$("#music-cooking")[0].pause(),$("#music-driving")[0].pause(),$("#music-camera")[0].pause(),$("#music-switch")[0].pause(),$("#music-stroll")[0].pause(),$("#music-street")[0].pause()}function i(){setTimeout(function(){$(window).scrollTop(0)},888)}function l(){Ue==Ye-1?clearInterval(T):23==Ue?($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0),Ue++):13==Ue?($(".stage-2-words").css({opacity:1}),Ue++):8==Ue?($("#music-door")[0].play(),Ue++):Ue++,et=Ue*Qe,ge.clearRect(tt,at,Je+10,Qe+10),ge.imageSmoothingEnabled=!1,ge.globalAlpha=1,ge.drawImage(st,Ze,et,Je,Qe,tt,at,Je,Qe)}function g(){ct==nt-1?(clearInterval(S),ge.clearRect(0,0,le.width,le.height),$("#section-4").css({transition:"1s"})):13==ct?($("#stage-2").css({transform:"translateX(-100px)",opacity:0}),ct++):ct++,lt=ct*ot,ge.clearRect(gt,mt,rt,ot),ge.drawImage(dt,it,lt,rt,ot,gt,mt,rt,ot)}function m(){ht=++ht%wt,ut=ht*$t,de.clearRect(ft,yt,pt,$t),de.drawImage(At,vt,ut,pt,$t,ft,yt,pt,$t),re>=1024?ft<550?(de.clearRect(ft,yt,pt,$t),clearInterval(q),B=setInterval(d,83)):(ft<625&&(de.globalAlpha-=.05),ft<800&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)),ft-=5):ft<150?(de.clearRect(ft,yt,pt,$t),clearInterval(q),B=setInterval(d,83)):(ft>150&&ft<200&&(de.globalAlpha-=.05),ft<300&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)),ft-=4)}function d(){kt=++kt%Rt,_t=kt*bt,de.clearRect(Ct,Tt,It,bt),de.drawImage(St,xt,_t,It,bt,Ct,Tt,It,bt),re>=1024?Ct>650?(de.clearRect(Ct,Tt,It,bt),clearInterval(B),$("#music-walk")[0].pause()):(Ct<590?de.globalAlpha+=.3:Ct>590&&Ct<600?de.globalAlpha=1:Ct>620&&(de.globalAlpha-=.05),Ct+=3):Ct>270?(de.clearRect(Ct,Tt,It,bt),clearInterval(B),$("#music-walk")[0].pause()):(Ct>150&&Ct<190?de.globalAlpha+=.3:Ct>190&&Ct<220?de.globalAlpha=1:Ct>220&&Ct<270&&(de.globalAlpha-=.05),Ct+=2)}function p(){Lt=++Lt%Pt,Dt=Lt*Et,we.clearRect(Ot,Xt,Bt+10,Et+10),we.drawImage(Mt,jt,Dt,Bt,Et,Ot,Xt,Bt,Et),15==++Ft&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0))}function h(){Wt=++Wt%Ht,Nt=Wt*Vt,ue.clearRect(Gt,Jt,zt+10,Vt+10),ue.drawImage(Ut,Kt,Nt,zt,Vt,Gt,Jt,zt,Vt),32==++Qt?($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)):22==Qt&&$(".stage-5-words h2").css({opacity:"1"})}function w(){ea=++ea%ta,sa=ea*Zt,ye.clearRect(ra,oa,Yt+10,Zt+10),ye.drawImage(na,aa,sa,Yt,Zt,ra,oa,Yt,Zt),29==ca?clearInterval(W):22==ca?(ca++,$("#stage-6").css({opacity:"0",transform:"translate(0, -100%)"}),ca++):ca++}function v(){ma=++ma%da,$a=ma*la,Ie.clearRect(ha,wa,ia+10,la+10),Ie.drawImage(ua,pa,$a,ia,la,ha,wa,ia,la),27==va?(clearInterval(H),$("#stage-6_3, #stage-6_3_bg").css({opacity:"1",transform:"translate(0, 0)"}),G=setInterval(y,125)):24==va?($("#stage-6_1").css({opacity:"0",transform:"translate(0, -100%)"}),va++):va++}function u(){Aa=++Aa%Ia,ka=Aa*ya,ke.clearRect(Ra,xa,fa+10,ya+10),ke.drawImage(Ca,ba,ka,fa,ya,Ra,xa,fa,ya),30==_a?(clearInterval(K),$("#stage-6_4").css({opacity:"1",transform:"translate(0, 0)"}),setTimeout(function(){$(".stage-6-words p").eq(1).css({opacity:"1",transform:"translate(0, 0px)"})},888),setTimeout(function(){$(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)},1888),N=setInterval(f,83)):27==_a?($(".stage-6-words p").eq(0).css({opacity:"0",transform:"translate(0, -50px)"}),$("#music-camera")[0].pause(),_a++):26==_a?($("#stage-6_2").css({opacity:"0",transform:"translate(0, -100%)"}),_a++):_a++}function f(){qa=++qa%Ba,La=qa*Sa,xe.clearRect(Pa,ja,Ta,Sa),xe.drawImage(Da,Ea,La,Ta,Sa,Pa,ja,Ta,Sa)}function y(){Ma=++Ma%za,Wa=Ma*Fa,Se.clearRect(Ha,Ka,Xa,Fa),Se.drawImage(Na,Va,Wa,Xa,Fa,Ha,Ka,Xa,Fa)}function A(){Ua=++Ua%Ya,es=Ua*Qa,Be.clearRect(ts,as,Ja+10,Qa+10),Be.drawImage(ss,Za,es,Ja,Qa,ts,as,Ja,Qa),Be.font="14px Arial",Ua>4&&(re>=1024?Be.fillText("爸爸進房間囉",250,282):Be.fillText("爸爸進房間囉",175,282),23==Ua?$("#music-switch")[0].play(0):Ua==Ya-1&&(clearInterval(L),$(".downArrow").css({display:"block",color:"white"}),$.fn.fullpage.setAllowScrolling(!0)))}function I(){cs=++cs%ns,ls=cs*os,Le.clearRect(gs,ms,rs,os),Le.drawImage(ds,is,ls,rs,os,gs,ms,rs,os),cs==ns-1?clearInterval(P):18==cs?($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)):4==cs&&$(".stage-8-words h2").css({transform:"translate(0, 0)",opacity:"1"})}function b(){hs=++hs%ws,us=hs*$s,je.clearRect(fs,ys,ps+10,$s+10),je.drawImage(Is,vs,us,ps,$s,fs,ys,ps,$s),14==++As&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0))}function k(){Cs=++Cs%Ts,qs=Cs*_s,Fe.clearRect(Bs,Es,xs+10,_s+10),Fe.drawImage(Ls,Ss,qs,xs,_s,Bs,Es,xs,_s),48==++ks&&Rs<2?(M=setInterval(R,125),ks=0,$(".thanks").eq(Rs).css({opacity:"1",transform:"translateX(0)"})):36==ks?$(".stage-10-words p").css({opacity:0}):6==ks?$(".stage-10-words p").eq(0).css({opacity:1,transform:"translate(0, 0)"}):14==ks?$(".stage-10-words p").eq(1).css({opacity:1,transform:"translate(0, 0)"}):16==ks?1==Rs&&(M=setInterval(R,125),ks=0,$(".thanks").eq(Rs).css({opacity:"1",transform:"translateX(0)"})):22==ks?$(".stage-10-words p").eq(2).css({opacity:1,transform:"translate(0, 0)"}):2==ks&&$("#music-stroll")[0].play()}function R(){$("#music-stroll")[0].pause(),Fs=++Ds*js,Fe.clearRect(Ms,zs,Ps+10,js+10),Fe.drawImage(Vs,Xs,Fs,Ps,js,Ms,zs,Ps,js),clearInterval(F),Ds==Os-1&&0==Rs?(clearInterval(M),Ds=0,$(".stage-10-words").css({opacity:0,tranistion:"translate(0, -50px)"}),F=setInterval(k,125),$(".thanks").eq(Rs).css({opacity:"0",transform:"translateX(-10%)"}),$(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0),Rs++):23==Ds&&1==Rs?(clearInterval(M),$(".downArrow").css({display:"block",color:"black"})):Ds==Os-1&&1==Rs&&clearInterval(M)}function x(){Ks=++Ks%Ns,Js=Ks*Hs,ze.clearRect(Qs,Us,Ws+10,Hs+10),ze.drawImage(Ys,Gs,Js,Ws,Hs,Qs,Us,Ws,Hs)}function _(){tr=++tr%ar,rr=tr*er,We.clearRect(or,cr,Zs+10,er+10),We.drawImage(nr,sr,rr,Zs,er,or,cr,Zs,er)}function C(){mr=++mr%dr,$r=mr*gr,Ge.clearRect(hr,wr,lr+10,gr+10),Ge.drawImage(vr,pr,$r,lr,gr,hr,wr,lr,gr),mr==dr-1?clearInterval(X):20==mr&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0))}var T,S,q,B,E,L,P,j,D,O,X,F,M,z,V,W,H,K,N,G,J,Q,U=10,Y=1==e()?"Mob":"PC",Z=[],ee=[null],te=window.navigator.userAgent,ae=!!te.match(/iPad/i)||!!te.match(/iPhone/i),se=!!te.match(/WebKit/i);ae&&se&&te.match(/CriOS/i);ver=function(){if(/iP(hone|od|ad)/.test(navigator.platform)){var e=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3]||0,10)]}}(),console.log(typeOf.ver);var re=$(window).width(),oe=$(window).height(),ce=$("body").height()-oe,ne=re>=768?"6px":"4px",ie=$("title").text();$("a").click(function(){ga("send",{hitType:"event",eventCategory:"超連結點擊",eventAction:"click",eventLabel:"["+Y+"] ["+ie+"] ["+$(this).attr("href")+"]"})}),$("#scroll-down").click(function(){ga("send",{hitType:"event",eventCategory:"ham bar",eventAction:"click",eventLabel:"["+Y+"] ["+ie+"] [scroll down]"})}),$(".line-share").click(function(t){ga("send",{hitType:"event",eventCategory:"Line Share",eventAction:"click",eventLabel:"["+Y+"] ["+ie+"] [line share]"}),e()?window.location.href="//line.me/R/msg/text/?"+ie+"%0D%0A%0D%0A"+$('meta[property="og:description"]').attr("content")+"%0D%0A%0D%0A"+window.location.href:window.open("https://lineit.line.me/share/ui?url="+window.location.href)}),function(){if(1==ae){var e=navigator.userAgent||navigator.vendor||window.opera;return e.indexOf("FBAN")>-1||e.indexOf("FBAV")>-1}return!1}()&&(iOSVersion(11)?($(".downArrow").css({bottom:"158px"}),$(".skip").css({bottom:"158px"}),$(".whiteP").css({"line-height":"1.5"}),$(".intro").css({"margin-top":"-25%"})):($(".downArrow").css({bottom:"143px"}),$(".skip").css({bottom:"143px"}),$(".whiteP").css({"line-height":"1.2"}),$(".intro").css({"margin-top":"-15%"})),$(".section").css({"margin-top":"-6%"}),$(".fixed_pic").css({"margin-top":"-128px"}),window.addEventListener("resize",function(){$(window).scrollTop()<$(".content").eq(0).offset().top&&i()})),$(".voice-state img").on("click",function(){var e=$(this).attr("src");$(this).removeClass("blink"),"src/image/off.png"==e?($(this).attr("src","src/image/on.png"),$("#music-main")[0].play(),o(),Q>$(".content").eq(0).offset().top?ga("send",{hitType:"event",eventCategory:"閱讀時開聲音",eventAction:"click",eventLabel:"閱讀時開聲音"}):ga("send",{hitType:"event",eventCategory:"開聲音",eventAction:"click",eventLabel:"開聲音"})):($(this).attr("src","src/image/off.png"),c(),ga("send",{hitType:"event",eventCategory:"關聲音",eventAction:"click",eventLabel:"關聲音"}))}),$(window).on("scroll",function(){for(var e=(Q=$(window).scrollTop())/ce*100;U<=Math.floor(e);U+=10)ga("send",{hitType:"event",eventCategory:"read",eventAction:"scroll",eventLabel:"["+Y+"] ["+ie+"] [page read "+U+"%]"});Q>oe?($("#indicator").css("opacity",1),$("#head").css("top",ne)):($("#indicator").css("opacity",0),$("#head").css("top","0")),$("#indicator-bar").css("width",Q/ce*100+"%"),Q>$(".content").eq(0).offset().top-.07*oe&&Q<$(".content").eq(0).offset().top&&($("#head").removeClass("Bgc-TP"),$("#indicator").addClass("mainColor")),Q>$(".section").eq(0).offset().top&&$(".downArrow").css({display:"none"}),Q>$("#movie-1").offset().top-.5*oe&&Q<$("#movie-1").offset().top+.5*oe&&t(1),(Q>$("#movie-1").offset().top+.2*oe||Q<$("#movie-1").offset().top-.8*oe)&&a(1)}),re>=1024?($("#stage-1").attr("src","src/image/animate-sprite/stage-1PC.mp4"),$("#movie-1").attr("controls","true")):$("#stage-1").attr("src","src/image/animate-sprite/stage-1Mob.mp4"),$('.volume[data-target="1"]').click(function(){r(1)}),$('.replay[data-target="1"]').click(function(){s(1)}),$("#movie-1").click(function(){$("#movie-1")[0].paused?t(1):a(1)});var le=document.getElementById("stage-2"),ge=le.getContext("2d");le.width=375,le.height=667;var me=document.getElementById("stage-3"),de=me.getContext("2d"),pe=document.getElementById("stage-3_1"),$e=pe.getContext("2d");re>=1024&&(me.width=880,me.height=495,pe.width=880,pe.height=495),re>=768&&re<1023&&(me.width=810,me.height=1166,pe.width=810,pe.height=1166),re<768&&(me.width=375,me.height=667,pe.width=375,pe.height=667);var he=document.getElementById("stage-4"),we=he.getContext("2d");he.width=375,he.height=667;var ve=document.getElementById("stage-5"),ue=ve.getContext("2d");ve.width=375,ve.height=667;var fe=document.getElementById("stage-6"),ye=fe.getContext("2d");fe.width=375,fe.height=667;var Ae=document.getElementById("stage-6_1"),Ie=Ae.getContext("2d");Ae.width=375,Ae.height=667;var be=document.getElementById("stage-6_2"),ke=be.getContext("2d");be.width=375,be.height=667;var Re=document.getElementById("stage-6_3"),xe=Re.getContext("2d");Re.width=375,Re.height=667;var _e=document.getElementById("stage-6_3_bg"),Ce=_e.getContext("2d");_e.width=375,_e.height=667;var Te=document.getElementById("stage-6_4"),Se=Te.getContext("2d");Te.width=375,Te.height=667;var qe=document.getElementById("stage-7"),Be=qe.getContext("2d");re>=1024?(qe.width=520,qe.height=667):(qe.width=375,qe.height=667);var Ee=document.getElementById("stage-8"),Le=Ee.getContext("2d");Ee.width=375,Ee.height=667;var Pe=document.getElementById("stage-9"),je=Pe.getContext("2d");Pe.width=375,Pe.height=667;var De=document.getElementById("stage-9_bg"),Oe=De.getContext("2d");De.width=375,De.height=667;var Xe=document.getElementById("stage-10"),Fe=Xe.getContext("2d");Xe.width=375,Xe.height=667;var Me=document.getElementById("stage-11"),ze=Me.getContext("2d");Me.width=375,Me.height=667;var Ve=document.getElementById("stage-11_1"),We=Ve.getContext("2d");Ve.width=375,Ve.height=667;var He=document.getElementById("stage-11_2"),Ke=He.getContext("2d");He.width=375,He.height=667;var Ne=document.getElementById("stage-12"),Ge=Ne.getContext("2d");Ne.width=375,Ne.height=667;var Je=375,Qe=667,Ue=0,Ye=25,Ze=0,et=0,tt=0,at=0,st=new Image,rt=375,ot=667,ct=0,nt=25,it=0,lt=0,gt=0,mt=0,dt=new Image,pt=75,$t=112,ht=0,wt=36,vt=0,ut=0,ft=0,yt=0;re>=1024?(ft=880,yt=425):(ft=390,yt=575);var At=new Image;de.transform(.7,0,0,.7,0,0);var It=39,bt=55,kt=0,Rt=36,xt=0,_t=0,Ct=0,Tt=0;re>=1024?(Ct=560,Tt=417):(Ct=180,Tt=565);var St=new Image,qt=new Image,Bt=375,Et=667,Lt=0,Pt=24,jt=0,Dt=0,Ot=80,Xt=200,Ft=0,Mt=new Image;we.transform(.8,0,0,.8,0,0);var zt=375,Vt=667,Wt=0,Ht=24,Kt=0,Nt=0,Gt=0,Jt=0,Qt=0,Ut=new Image,Yt=213,Zt=291,ea=0,ta=24,aa=0,sa=0,ra=130,oa=50,ca=0,na=new Image,ia=140,la=329,ma=0,da=24,pa=0,$a=0,ha=50,wa=240,va=0,ua=new Image,fa=269,ya=398,Aa=0,Ia=24,ba=0,ka=0,Ra=90,xa=170,_a=0,Ca=new Image,Ta=128,Sa=221,qa=0,Ba=36,Ea=0,La=0,Pa=140,ja=310,Da=new Image,Oa=new Image,Xa=124,Fa=177,Ma=0,za=24,Va=0,Wa=0,Ha=70,Ka=290,Na=new Image,Ga=new Image,Ja=0;Ja=re>=1024?520:375;var Qa=667,Ua=0,Ya=32,Za=0,es=0,ts=0,as=20,ss=new Image,rs=375,os=667,cs=0,ns=24,is=0,ls=0,gs=0,ms=0,ds=new Image,ps=166,$s=148,hs=0,ws=25,vs=0,us=0,fs=120,ys=200,As=0,Is=new Image,bs=new Image;Oe.transform(.85,0,0,.85,0,0);var ks=0,Rs=0,xs=168,_s=290,Cs=0,Ts=24,Ss=0,qs=0,Bs=0,Es=250,Ls=new Image,Ps=145,js=287,Ds=0,Os=32,Xs=0,Fs=0,Ms=0,zs=250,Vs=new Image,Ws=375,Hs=667,Ks=0,Ns=24,Gs=0,Js=0,Qs=0,Us=0,Ys=new Image,Zs=375,er=667,tr=0,ar=24,sr=0,rr=0,or=0,cr=0,nr=new Image,ir=new Image,lr=375,gr=667,mr=0,dr=36,pr=0,$r=0,hr=0,wr=0,vr=new Image;$(".fullpage").fullpage({navigation:!0,recordHistory:!1,scrollingSpeed:777,lazyLoading:!0,afterLoad:function(e,t){J=t,$.fn.fullpage.setAllowScrolling(!1),$("#section-"+t).css({opacity:"1","z-index":50}),$("#head").addClass("Bgc-TP"),bar_witdh=t/($(".fullpage").children().length-1)*100,$("#indicator-bar").css("width",bar_witdh+"%"),$("#indicator").removeClass("mainColor"),ga("send",{hitType:"event",eventCategory:"插畫(15張)",eventAction:"scroll",eventLabel:"看到第"+t+"張"}),1==t&&($("#stage-1")[0].play(),$(".fixed_pic").css("opacity","1"),$.fn.fullpage.setAutoScrolling(!0),$.fn.fullpage.setAllowScrolling(!0),$.fn.fullpage.setFitToSection(!0),$.fn.fullpage.setScrollingSpeed(777),null!==localStorage.getItem("udn-readed")?$(".skip").css({display:"block"}):$(".downArrow").css({display:"block",color:"white"})),2==t&&(st.src="src/image/animate-sprite/stage-2-start.jpg",dt.src="src/image/animate-sprite/stage-2-end.jpg",At.src="src/image/animate-sprite/stage-3-walk1.png",St.src="src/image/animate-sprite/stage-3-walkback.png",qt.src="src/image/animate-sprite/stage-3-bg.png",$(".page-black").eq(0).css({transform:"translate(0, 0)"}),$(".downArrow").css({display:"block",color:"white"}),"src/image/off.png"==$(".voice-state img").attr("src")&&$(".voice-state img").addClass("blink"),$.fn.fullpage.setAllowScrolling(!0)),3==t&&(Mt.src="src/image/animate-sprite/stage-4-kitchen.jpg",na.src="src/image/animate-sprite/stage-6-foodInfo.png",ua.src="src/image/animate-sprite/stage-6-foodSafe.png",Ca.src="src/image/animate-sprite/stage-6-speech.png",Oa.src="src/image/animate-sprite/stage-6-lab-bg.png",Ga.src="src/image/animate-sprite/stage-6-lab-bg2.png",$(".voice-state img").removeClass("blink"),$(".page-black").eq(0).removeAttr("style"),$(".page-black").eq(1).css({transform:"translate(0, 0)"}),$(".downArrow").css({display:"block",color:"white"}),$.fn.fullpage.setAllowScrolling(!0)),4==t&&(Ut.src="src/image/animate-sprite/stage-5-car.jpg",Da.src="src/image/animate-sprite/stage-6-doctor.png",Na.src="src/image/animate-sprite/stage-6-cpu.png",bs.src="src/image/animate-sprite/stage-9-bg.png",ir.src="src/image/animate-sprite/stage-11-bg.png",$(".page-black").eq(1).removeAttr("style"),$("#stage-2").css({transform:"translateX(0)",opacity:"1"}),T=setInterval(l,100)),5==t&&(ss.src=re>=1024?"src/image/animate-sprite/stage-7-roomW.jpg":"src/image/animate-sprite/stage-7-room.jpg",ge.clearRect(0,0,le.width,le.height),Ue=0,ct=0,$("#stage-2").removeAttr("style"),$(".stage-2-words").removeAttr("style"),$(".stage-3-words").css({transform:"translate(0, 15%)",opacity:"1"}),$("#music-walk")[0].play(),re>=1024&&$e.drawImage(qt,0,0,810,369,35,126,810,369),re>=768&&re<1023&&($e.drawImage(qt,0,0,810,369,0,600,810,369),console.log("pad tree")),re<768&&$e.drawImage(qt,0,0,810,369,-230,230,810,369),q=setInterval(m,83),$.fn.fullpage.setScrollingSpeed(1777)),6==t&&(ds.src="src/image/animate-sprite/stage-8-bed.jpg",de.clearRect(0,0,me.width,me.height),de.globalAlpha=1,re>=1024?(ft=880,Ct=560):(ft=390,Ct=180),$(".stage-3-words").removeAttr("style"),$(".stage-4-words p").css({transform:"translate(0, 0)",opacity:"1"}),$("#stage-4").css({transform:"translate(0, 0)",opacity:"1"}),$("#music-cooking")[0].play(),V=setInterval(p,125)),7==t&&(Is.src="src/image/animate-sprite/stage-9-smoke.png",Ls.src="src/image/animate-sprite/stage-10-stroll.png",Vs.src="src/image/animate-sprite/stage-10-wave.png",we.clearRect(0,0,he.width,he.height),Ft=0,$(".stage-4-words p").removeAttr("style"),$("#stage-4").removeAttr("style"),$("#stage-5").css({transform:"translate(0, 0)",opacity:"1"}),$(".stage-5-words p").css({opacity:"1"}),$("#music-driving")[0].play(),E=setInterval(h,125)),8==t&&(Ys.src="src/image/animate-sprite/stage-11-man.jpg",nr.src="src/image/animate-sprite/stage-11-woman.jpg",vr.src="src/image/animate-sprite/stage-12-wash.jpg",Qt=0,ue.clearRect(0,0,ve.width,ve.height),clearInterval(E),$("#stage-5").removeAttr("style"),$(".stage-5-words p").removeAttr("style"),$(".stage-5-words h2").removeAttr("style"),ye.drawImage(na,aa,sa,Yt,Zt,ra,oa,Yt,Zt),Ie.drawImage(ua,pa,$a,ia,la,ha,wa,ia,la),ke.drawImage(Ca,ba,ka,fa,ya,Ra,xa,fa,ya),Ce.drawImage(Oa,0,0,360,395,75,150,360,395),Se.drawImage(Ga,0,0,124,208,0,459,124,208),$("#stage-6").css({opacity:"1",transform:"translate(0, 0)"}),setTimeout(function(){$("#stage-6_1").css({opacity:"1",transform:"translate(0, 0)"})},222),setTimeout(function(){$("#stage-6_2").css({opacity:"1",transform:"translate(0, 0)"})},555),setTimeout(function(){$("#music-camera")[0].play(),W=setInterval(w,83),H=setInterval(v,83),K=setInterval(u,83)},1433),setTimeout(function(){$(".stage-6-words p").eq(0).css({opacity:"1",transform:"translate(0, 0)"})},1666)),9==t&&(ye.clearRect(0,0,fe.width,fe.height),Ie.clearRect(0,0,Ae.width,Ae.height),ke.clearRect(0,0,be.width,be.height),xe.clearRect(0,0,Re.width,Re.height),Se.clearRect(0,0,Te.width,Te.height),$("#stage-6").removeAttr("style"),$("#stage-6_1").removeAttr("style"),$("#stage-6_2").removeAttr("style"),$("#stage-6_3").removeAttr("style"),$("#stage-6_3_bg").removeAttr("style"),$("#stage-6_4").removeAttr("style"),$(".stage-6-words p").eq(0).removeAttr("style"),$(".stage-6-words p").eq(1).removeAttr("style"),ca=0,va=0,_a=0,L=setInterval(A,125),$("#stage-7").css({opacity:"1"})),10==t&&(Be.clearRect(0,0,qe.width,qe.height),$("#stage-7").removeAttr("style"),$(".stage-7-words").removeAttr("style"),$(".stage-8-words p").eq(0).css({opacity:"1",transform:"translate(0, 0)"}),setTimeout(function(){$("#stage-8").css({opacity:"1",transform:"translate(0, 0)"}),P=setInterval(I,125)},777)),11==t&&(cs=0,$(".stage-8-words p").removeAttr("style"),$(".stage-8-words h2").removeAttr("style"),$("#stage-8").removeAttr("style"),Le.clearRect(0,0,Ee.width,Ee.height),$(".stage-9-words p").css({opacity:"1",transform:"translate(0, 0)"}),Oe.drawImage(bs,0,0,413,416,12,250,413,416),j=setInterval(b,125),setTimeout(function(){$("#stage-9, #stage-9_bg").css({opacity:"1",transform:"translate(0, 0)"})},1222)),12==t&&(As=0,je.clearRect(0,0,Pe.width,Pe.height),Oe.clearRect(0,0,De.width+100,De.height+100),$(".stage-9-words p").removeAttr("style"),$("#stage-9").removeAttr("style"),$("#stage-9_bg").removeAttr("style"),$("#music-street")[0].play(),F=setInterval(k,125)),13==t&&(ks=0,Rs=0,Ds=0,Fe.clearRect(0,0,Xe.width,Xe.height),$(".thanks").removeAttr("style"),$(".stage-10-words").removeAttr("style"),$(".stage-10-words p").removeAttr("style"),$(".stage-11-words p").css({opacity:"1"}),Ke.drawImage(ir,0,0,302,322,36,180,302,322),D=setInterval(x,125),setTimeout(function(){$("#stage-11").css({opacity:"0"}),clearInterval(D),O=setInterval(_,125)},2e3),setTimeout(function(){$("#stage-11_1").css({opacity:"0"}),clearInterval(O)},4500),setTimeout(function(){$(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)},4666)),14==t&&(ze.clearRect(0,0,Me.width,Me.height),We.clearRect(0,0,Ve.width,Ve.height),$("#stage-11").removeAttr("style"),$("#stage-11_1").removeAttr("style"),$(".stage-11-words p").removeAttr("style"),$(".stage-12-words p").eq(0).css({opacity:1}),setTimeout(function(){$(".stage-12-words p").eq(1).css({opacity:1}),$("#stage-12").css({opacity:1}),X=setInterval(C,125)},1e3),setTimeout(function(){$(".stage-12-words p").eq(2).css({opacity:1})},2e3)),15==t&&(Ge.clearRect(0,0,Ne.width,Ne.height),mr=0,$(".stage-12-words p").removeAttr("style"),$("#stage-12").removeAttr("style"),$(".stage-13").eq(0).css({opacity:"1"}),$(".stage-13-words").css({transform:"translate(0, -20%)",opacity:1}),$.fn.fullpage.setAutoScrolling(!1),$.fn.fullpage.setFitToSection(!1),$("html, body").css({"overflow-x":"hidden",height:"initail"}),setTimeout(function(){$(".stage-13").eq(1).css({opacity:"1"}),$(".stage-13-words h2").css({opacity:"1"}),$(window).scrollTop()<$(".content").eq(0).offset().top&&$(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)},1666),setTimeout(function(){$(".stage-13").eq(2).css({opacity:"1"})},3333),localStorage.setItem("udn-readed","readed"))},onLeave:function(e,t,a){n(),$(".downArrow").css({display:"none"}),$(".skip").css({display:"none"}),$("#section-"+e).css({opacity:0,"z-index":0}),"up"==a&&ga("send",{hitType:"event",eventCategory:"動畫回上一頁",eventAction:"scroll",eventLabel:"第幾"+e+"張,回頭看"}),1!=$("#indicator").css("opacity")&&($("#indicator").css({opacity:1}),$("#indicator-bar").css("width","0")),1==e&&$(".fixed_pic").css("opacity","1"),2==e&&"up"==a&&$(".voice-state img").removeClass("blink"),4==e&&("up"==a?(Ue=0,ct=0,ge.clearRect(0,0,le.width,le.height),$(".stage-2-words").removeAttr("style"),$("#stage-2").removeAttr("style")):($("#section-4").css({transition:"3s"}),S=setInterval(g,100),$.fn.fullpage.setScrollingSpeed(2333))),5==e&&"up"==a&&(de.clearRect(0,0,me.width,me.height),de.globalAlpha=1,re>=1280?(ft=880,Ct=560):(ft=390,Ct=180),$(".stage-3-words").removeAttr("style")),6==e&&"up"==a&&(Ft=0,we.clearRect(Ot,Xt,he.width,he.height),$(".stage-4-words p").removeAttr("style"),$("#stage-4").removeAttr("style")),7==e&&("up"==a?(Qt=0,clearInterval(E),ue.clearRect(0,0,ve.width,ve.height),$("#stage-5").removeAttr("style"),$(".stage-5-words p").removeAttr("style"),$(".stage-5-words h2").removeAttr("style")):$("#stage-5").css({transform:"translate(75%, 20%)",opacity:"0"})),8==e&&("up"==a?(ye.clearRect(0,0,fe.width,fe.height),Ie.clearRect(0,0,Ae.width,Ae.height),ke.clearRect(0,0,be.width,be.height),xe.clearRect(0,0,Re.width,Re.height),Se.clearRect(0,0,Te.width,Te.height),$("#stage-6").removeAttr("style"),$("#stage-6_1").removeAttr("style"),$("#stage-6_2").removeAttr("style"),$("#stage-6_3").removeAttr("style"),$("#stage-6_3_bg").removeAttr("style"),$("#stage-6_4").removeAttr("style"),$(".stage-6-words p").eq(0).removeAttr("style"),$(".stage-6-words p").eq(1).removeAttr("style"),ca=0,va=0,_a=0):($("#section-8").css({transition:"3s"}),$("#stage-6_3, #stage-6_3_bg").css({opacity:"0",transform:"translate(0, -130px)"}),$(".stage-6-words p").eq(1).css({opacity:"0",transform:"translate(0, -70px)"}),setTimeout(function(){$("#stage-6_4").css({opacity:"0",transform:"translate(0, -140px)"})},111))),9==e&&"up"==a&&(Be.clearRect(0,0,qe.width,qe.height),$("#stage-7").removeAttr("style"),$(".stage-7-words").removeAttr("style")),10==e&&"up"==a&&(cs=0,Le.clearRect(0,0,Ee.width,Ee.height),$(".stage-8-words p").removeAttr("style"),$(".stage-8-words h2").removeAttr("style"),$("#stage-8").removeAttr("style")),11==e&&"up"==a&&(As=0,je.clearRect(0,0,Pe.width,Pe.height),Oe.clearRect(0,0,De.width+300,De.height+300),$(".stage-9-words p").removeAttr("style"),$("#stage-9").removeAttr("style"),$("#stage-9_bg").removeAttr("style")),12==e&&("up"==a?(ks=0,Rs=0,Ds=0,Fe.clearRect(0,0,Xe.width,Xe.height),$(".thanks").removeAttr("style"),$(".stage-10-words").removeAttr("style"),$(".stage-10-words p").removeAttr("style")):(1==Rs&&Ds>22&&(M=setInterval(R,125)),$(".thanks").eq(Rs).css({opacity:"0",transform:"translateX(-10%)"}))),13==e&&"up"==a&&(ze.clearRect(0,0,Me.width,Me.height),We.clearRect(0,0,Ve.width,Ve.height),$("#stage-11").removeAttr("style"),$("#stage-11_1").removeAttr("style"),$(".stage-11-words p").removeAttr("style")),14==e&&"up"==a&&(mr=0,Ge.clearRect(0,0,Ne.width,Ne.height),$(".stage-12-words p").removeAttr("style"),$("#stage-12").removeAttr("style")),15==e&&"up"==a&&($(".stage-13-words h2").removeAttr("style"),$(".stage-13-words p").removeAttr("style"),$(".stage-13").removeAttr("style")),3==t&&$(".fixed_pic").css("opacity","1"),4==t&&$(".fixed_pic").css("opacity","0")}}),$(".downArrow").click(function(e){e.preventDefault(),$.fn.fullpage.moveSectionDown(),ga("send",{hitType:"event",eventCategory:"下一頁",eventAction:"click",eventLabel:"第幾"+J+"點了下一頁箭頭"}),15==J&&$("html, body").animate({scrollTop:$(".content").eq(0).offset().top},888)}),$(".skip").click(function(e){e.preventDefault(),$.fn.fullpage.setAutoScrolling(!1),$.fn.fullpage.setFitToSection(!1),$("html, body").animate({scrollTop:$(".content").eq(0).offset().top},888),ga("send",{hitType:"event",eventCategory:"skip",eventAction:"click",eventLabel:"點擊跳過動畫(skip)"}),$(this).css({display:"none"}),$(".fixed_pic").css({opacity:0})})});