$(document).ready(function(){function e(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))}function t(e){$("#movie-"+e).get(0).play(),null==Z[e-1]&&(Z[e-1]=setInterval(function(){var t=$("#movie-"+e).get(0).currentTime,a=t/$("#movie-"+e).get(0).duration*100;a>.6&&$('.video-play[data-target="'+e+'"]').css("opacity",0),Math.floor(t/5)>ee&&(ee=Math.floor(t/5)),$("#progress-bar-"+e).css("width",a+"%")},600))}function a(e){$("#movie-"+e).get(0).pause(),$('.video-play[data-target="'+e+'"]').css("opacity",1),Z[e-1]&&(clearInterval(Z[e-1]),Z[e-1]=null)}function s(e){$("#movie-"+e).get(0).currentTime=0,$("#movie-"+e).get(0).play(),$(".progress-bar").css("width",0),clearInterval(Z[e-1]),Z[e-1]=setInterval(function(){var t=$("#movie-"+e).get(0).currentTime/$("#movie-"+e).get(0).duration*100;$("#progress-bar-"+e).css("width",t+"%")},600)}function r(e){1==$("#movie-"+e).get(0).muted?($("#movie-"+e).get(0).muted=!1,$('.volume[data-target="'+e+'"]').removeClass("fa-volume-off").addClass("fa-volume-up"),$('.volume-text[data-target="'+e+'"]').text("點按關聲音")):($("#movie-"+e).get(0).muted=!0,$('.volume[data-target="'+e+'"]').removeClass("fa-volume-up").addClass("fa-volume-off"),$('.volume-text[data-target="'+e+'"]').text("點按開聲音"))}function o(){$("#music-main")[0].muted=!1,$("#music-door")[0].muted=!1,$("#music-door")[0].volume=.6,$("#music-walk")[0].muted=!1,$("#music-walk")[0].volume=.6,$("#music-cooking")[0].muted=!1,$("#music-cooking")[0].volume=.6,$("#music-driving")[0].muted=!1,$("#music-driving")[0].volume=.3,$("#music-camera")[0].muted=!1,$("#music-camera")[0].volume=.3,$("#music-switch")[0].muted=!1,$("#music-switch")[0].volume=.6,$("#music-stroll")[0].muted=!1,$("#music-stroll")[0].volume=.3,$("#music-street")[0].muted=!1,$("#music-street")[0].volume=.6}function c(){$("#music-main")[0].muted=!0,$("#music-door")[0].muted=!0,$("#music-walk")[0].muted=!0,$("#music-cooking")[0].muted=!0,$("#music-driving")[0].muted=!0,$("#music-camera")[0].muted=!0,$("#music-switch")[0].muted=!0,$("#music-stroll")[0].muted=!0,$("#music-street")[0].muted=!0}function l(){clearInterval(T),clearInterval(q),clearInterval(B),clearInterval(L),clearInterval(P),clearInterval(j),clearInterval(D),clearInterval(X),clearInterval(F),clearInterval(M),clearInterval(O),clearInterval(z),clearInterval(W),clearInterval(V),clearInterval(H),clearInterval(K),clearInterval(N),clearInterval(G),$("#music-door")[0].pause(),$("#music-walk")[0].pause(),$("#music-cooking")[0].pause(),$("#music-driving")[0].pause(),$("#music-camera")[0].pause(),$("#music-switch")[0].pause(),$("#music-stroll")[0].pause(),$("#music-street")[0].pause()}function n(){setTimeout(function(){$(window).scrollTop(0)},888)}function i(){Ue==Ye-1?clearInterval(T):23==Ue?($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0),Ue++):13==Ue?($(".stage-2-words").css({opacity:1}),Ue++):8==Ue?($("#music-door")[0].play(),Ue++):Ue++,et=Ue*Qe,ge.clearRect(tt,at,Je+10,Qe+10),ge.imageSmoothingEnabled=!1,ge.globalAlpha=1,ge.drawImage(st,Ze,et,Je,Qe,tt,at,Je,Qe)}function g(){ct==lt-1?(clearInterval(S),ge.clearRect(0,0,ie.width,ie.height),$("#section-4").css({transition:"1s"})):13==ct?($("#stage-2").css({transform:"translateX(-100px)",opacity:0}),ct++):ct++,it=ct*ot,ge.clearRect(gt,mt,rt,ot),ge.drawImage(dt,nt,it,rt,ot,gt,mt,rt,ot)}function m(){wt=++wt%ht,ut=wt*$t,de.clearRect(ft,yt,pt,$t),de.drawImage(At,vt,ut,pt,$t,ft,yt,pt,$t),re>=1024?ft<550?(de.clearRect(ft,yt,pt,$t),clearInterval(q),B=setInterval(d,83)):(ft<625&&(de.globalAlpha-=.05),ft<800&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)),ft-=5):re>=768&&re<1024?(ft<350?(de.clearRect(ft,yt,pt,$t),clearInterval(q),B=setInterval(d,83)):(ft<400&&(de.globalAlpha-=.05),ft<500&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)),ft-=4),console.log("pad walk")):ft<150?(de.clearRect(ft,yt,pt,$t),clearInterval(q),B=setInterval(d,83)):(ft>150&&ft<200&&(de.globalAlpha-=.05),ft<300&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)),ft-=4)}function d(){kt=++kt%Rt,_t=kt*bt,de.clearRect(Ct,Tt,It,bt),de.drawImage(St,xt,_t,It,bt,Ct,Tt,It,bt),re>=1024?Ct>650?(de.clearRect(Ct,Tt,It,bt),clearInterval(B),$("#music-walk")[0].pause()):(Ct<590?de.globalAlpha+=.3:Ct>590&&Ct<600?de.globalAlpha=1:Ct>620&&(de.globalAlpha-=.05),Ct+=3):re>=768&&re<1024?Ct>420?(de.clearRect(Ct,Tt,It,bt),clearInterval(B),$("#music-walk")[0].pause()):(Ct>350&&Ct<360?de.globalAlpha+=.3:Ct>360&&Ct<280?de.globalAlpha=1:Ct>380&&Ct<420&&(de.globalAlpha-=.05),Ct+=2.5):Ct>270?(de.clearRect(Ct,Tt,It,bt),clearInterval(B),$("#music-walk")[0].pause()):(Ct>150&&Ct<190?de.globalAlpha+=.3:Ct>190&&Ct<220?de.globalAlpha=1:Ct>220&&Ct<270&&(de.globalAlpha-=.05),Ct+=2)}function p(){Pt=++Pt%jt,Xt=Pt*Lt,he.clearRect(Ft,Mt,Et+10,Lt+10),he.drawImage(zt,Dt,Xt,Et,Lt,Ft,Mt,Et,Lt),15==++Ot&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0))}function w(){Ht=++Ht%Kt,Gt=Ht*Vt,ue.clearRect(Jt,Qt,Wt+10,Vt+10),ue.drawImage(Yt,Nt,Gt,Wt,Vt,Jt,Qt,Wt,Vt),32==++Ut?($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)):22==Ut&&$(".stage-5-words h2").css({opacity:"1"})}function h(){ta=++ta%aa,ra=ta*ea,ye.clearRect(oa,ca,Zt+10,ea+10),ye.drawImage(na,sa,ra,Zt,ea,oa,ca,Zt,ea),29==la?clearInterval(V):22==la?(la++,$("#stage-6").css({opacity:"0",transform:"translate(0, -100%)"}),la++):la++}function v(){da=++da%pa,wa=da*ma,Ie.clearRect(ha,va,ia+10,ma+10),Ie.drawImage(fa,$a,wa,ia,ma,ha,va,ia,ma),27==ua?(clearInterval(H),$("#stage-6_3, #stage-6_3_bg").css({opacity:"1",transform:"translate(0, 0)"}),G=setInterval(y,125)):24==ua?($("#stage-6_1").css({opacity:"0",transform:"translate(0, -100%)"}),ua++):ua++}function u(){Ia=++Ia%ba,Ra=Ia*Aa,ke.clearRect(xa,_a,ya+10,Aa+10),ke.drawImage(Ta,ka,Ra,ya,Aa,xa,_a,ya,Aa),30==Ca?(clearInterval(K),$("#stage-6_4").css({opacity:"1",transform:"translate(0, 0)"}),setTimeout(function(){$(".stage-6-words p").eq(1).css({opacity:"1",transform:"translate(0, 0px)"})},888),setTimeout(function(){$(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)},1888),N=setInterval(f,83)):27==Ca?($(".stage-6-words p").eq(0).css({opacity:"0",transform:"translate(0, -50px)"}),$("#music-camera")[0].pause(),Ca++):26==Ca?($("#stage-6_2").css({opacity:"0",transform:"translate(0, -100%)"}),Ca++):Ca++}function f(){Ba=++Ba%Ea,Pa=Ba*qa,xe.clearRect(ja,Da,Sa,qa),xe.drawImage(Xa,La,Pa,Sa,qa,ja,Da,Sa,qa)}function y(){za=++za%Wa,Ha=za*Oa,Se.clearRect(Ka,Na,Ma,Oa),Se.drawImage(Ga,Va,Ha,Ma,Oa,Ka,Na,Ma,Oa)}function A(){Ya=++Ya%Za,ts=Ya*Ua,Be.clearRect(as,ss,Qa+10,Ua+10),Be.drawImage(rs,es,ts,Qa,Ua,as,ss,Qa,Ua),Be.font="14px Arial",Ya>4&&(re>=1024?Be.fillText("爸爸進房間囉",250,282):Be.fillText("爸爸進房間囉",175,282),23==Ya?$("#music-switch")[0].play(0):Ya==Za-1&&(clearInterval(L),$(".downArrow").css({display:"block",color:"white"}),$.fn.fullpage.setAllowScrolling(!0)))}function I(){ls=++ls%ns,gs=ls*cs,Le.clearRect(ms,ds,os,cs),Le.drawImage(ps,is,gs,os,cs,ms,ds,os,cs),ls==ns-1?clearInterval(P):18==ls?($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)):4==ls&&$(".stage-8-words h2").css({transform:"translate(0, 0)",opacity:"1"})}function b(){hs=++hs%vs,fs=hs*ws,je.clearRect(ys,As,$s+10,ws+10),je.drawImage(bs,us,fs,$s,ws,ys,As,$s,ws),14==++Is&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0))}function k(){Ts=++Ts%Ss,Bs=Ts*Cs,Me.clearRect(Es,Ls,_s+10,Cs+10),Me.drawImage(Ps,qs,Bs,_s,Cs,Es,Ls,_s,Cs),48==++Rs&&xs<2?(O=setInterval(R,125),Rs=0,$(".thanks").eq(xs).css({opacity:"1",transform:"translateX(0)"})):36==Rs?$(".stage-10-words p").css({opacity:0}):6==Rs?$(".stage-10-words p").eq(0).css({opacity:1,transform:"translate(0, 0)"}):14==Rs?$(".stage-10-words p").eq(1).css({opacity:1,transform:"translate(0, 0)"}):16==Rs?1==xs&&(O=setInterval(R,125),Rs=0,$(".thanks").eq(xs).css({opacity:"1",transform:"translateX(0)"})):22==Rs?$(".stage-10-words p").eq(2).css({opacity:1,transform:"translate(0, 0)"}):2==Rs&&$("#music-stroll")[0].play()}function R(){$("#music-stroll")[0].pause(),Os=++Xs*Ds,Me.clearRect(zs,Ws,js+10,Ds+10),Me.drawImage(Vs,Ms,Os,js,Ds,zs,Ws,js,Ds),clearInterval(M),Xs==Fs-1&&0==xs?(clearInterval(O),Xs=0,$(".stage-10-words").css({opacity:0,tranistion:"translate(0, -50px)"}),M=setInterval(k,125),$(".thanks").eq(xs).css({opacity:"0",transform:"translateX(-10%)"}),$(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0),xs++):23==Xs&&1==xs?(clearInterval(O),$(".downArrow").css({display:"block",color:"black"})):Xs==Fs-1&&1==xs&&clearInterval(O)}function x(){Ns=++Ns%Gs,Qs=Ns*Ks,ze.clearRect(Us,Ys,Hs+10,Ks+10),ze.drawImage(Zs,Js,Qs,Hs,Ks,Us,Ys,Hs,Ks)}function _(){ar=++ar%sr,or=ar*tr,Ve.clearRect(cr,lr,er+10,tr+10),Ve.drawImage(nr,rr,or,er,tr,cr,lr,er,tr)}function C(){dr=++dr%pr,wr=dr*mr,Ge.clearRect(hr,vr,gr+10,mr+10),Ge.drawImage(ur,$r,wr,gr,mr,hr,vr,gr,mr),dr==pr-1?clearInterval(F):20==dr&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0))}var T,S,q,B,E,L,P,j,D,X,F,M,O,z,W,V,H,K,N,G,J,Q,U=10,Y=1==e()?"Mob":"PC",Z=[],ee=[null],te=window.navigator.userAgent,ae=!!te.match(/iPad/i)||!!te.match(/iPhone/i),se=!!te.match(/WebKit/i);ae&&se&&te.match(/CriOS/i);ver=function(){if(/iP(hone|od|ad)/.test(navigator.platform)){var e=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3]||0,10)]}}();var re=$(window).width(),oe=$(window).height(),ce=$("body").height()-oe,le=re>=768?"6px":"4px",ne=$("title").text();$("a").click(function(){ga("send",{hitType:"event",eventCategory:"超連結點擊",eventAction:"click",eventLabel:"["+Y+"] ["+ne+"] ["+$(this).attr("href")+"]"})}),$("#scroll-down").click(function(){ga("send",{hitType:"event",eventCategory:"ham bar",eventAction:"click",eventLabel:"["+Y+"] ["+ne+"] [scroll down]"})}),$(".line-share").click(function(t){ga("send",{hitType:"event",eventCategory:"Line Share",eventAction:"click",eventLabel:"["+Y+"] ["+ne+"] [line share]"}),e()?window.location.href="//line.me/R/msg/text/?"+ne+"%0D%0A%0D%0A"+$('meta[property="og:description"]').attr("content")+"%0D%0A%0D%0A"+window.location.href:window.open("https://lineit.line.me/share/ui?url="+window.location.href)}),function(){if(1==ae){var e=navigator.userAgent||navigator.vendor||window.opera;return e.indexOf("FBAN")>-1||e.indexOf("FBAV")>-1}return!1}()&&(window.addEventListener("resize",function(){$(window).scrollTop()<$(".content").eq(0).offset().top&&n()}),11==ver[0]?($(".downArrow").css({bottom:"158px"}),$(".skip").css({bottom:"158px"}),$(".whiteP").css({"line-height":"1.5"}),$(".intro").css({"margin-top":"-25%"})):10==ver[0]&&($(".whiteP").css({"line-height":"1.2"}),$(".intro").css({"margin-top":"-15%"}),ver[1]<=2?($(".downArrow").css({bottom:"16px"}),$(".skip").css({bottom:"16px"})):($(".downArrow").css({bottom:"143px"}),$(".skip").css({bottom:"143px"}))),$(".stage-6-words p").eq(0).css({top:"30%",left:"-15%"}),$(".cover_Title").css({"padding-top":"15%"}),$(".section").css({"margin-top":"-6%"}),$(".fixed_pic").css({"margin-top":"-128px"})),$(".voice-state img").on("click",function(){var e=$(this).attr("src");$(this).removeClass("blink"),"src/image/off.png"==e?($(this).attr("src","src/image/on.png"),$("#music-main")[0].play(),o(),Q>$(".content").eq(0).offset().top?ga("send",{hitType:"event",eventCategory:"閱讀時開聲音",eventAction:"click",eventLabel:"閱讀時開聲音"}):ga("send",{hitType:"event",eventCategory:"開聲音",eventAction:"click",eventLabel:"開聲音"})):($(this).attr("src","src/image/off.png"),c(),ga("send",{hitType:"event",eventCategory:"關聲音",eventAction:"click",eventLabel:"關聲音"}))}),$(window).on("scroll",function(){for(var e=(Q=$(window).scrollTop())/ce*100;U<=Math.floor(e);U+=10)ga("send",{hitType:"event",eventCategory:"read",eventAction:"scroll",eventLabel:"["+Y+"] ["+ne+"] [page read "+U+"%]"});Q>oe?($("#indicator").css("opacity",1),$("#head").css("top",le)):($("#indicator").css("opacity",0),$("#head").css("top","0")),$("#indicator-bar").css("width",Q/ce*100+"%"),Q>$(".content").eq(0).offset().top-.07*oe&&Q<$(".content").eq(0).offset().top&&($("#head").removeClass("Bgc-TP"),$("#indicator").addClass("mainColor")),Q>$(".section").eq(0).offset().top&&$(".downArrow").css({display:"none"}),Q>$("#movie-1").offset().top-.5*oe&&Q<$("#movie-1").offset().top+.5*oe&&t(1),(Q>$("#movie-1").offset().top+.2*oe||Q<$("#movie-1").offset().top-.8*oe)&&a(1)}),re>=1024?($("#stage-1").attr("src","src/image/animate-sprite/stage-1PC.mp4"),$("#movie-1").attr("controls","true")):$("#stage-1").attr("src","src/image/animate-sprite/stage-1Mob.mp4"),$('.volume[data-target="1"]').click(function(){r(1)}),$('.replay[data-target="1"]').click(function(){s(1)}),$("#movie-1").click(function(){$("#movie-1")[0].paused?t(1):a(1)});var ie=document.getElementById("stage-2"),ge=ie.getContext("2d");ie.width=375,ie.height=667;var me=document.getElementById("stage-3"),de=me.getContext("2d"),pe=document.getElementById("stage-3_1"),$e=pe.getContext("2d");re>=1024&&(me.width=880,me.height=495,pe.width=880,pe.height=495),re>=768&&re<1023&&(me.width=578,me.height=820,pe.width=578,pe.height=820),re<768&&(me.width=375,me.height=667,pe.width=375,pe.height=667);var we=document.getElementById("stage-4"),he=we.getContext("2d");we.width=375,we.height=667;var ve=document.getElementById("stage-5"),ue=ve.getContext("2d");ve.width=375,ve.height=667;var fe=document.getElementById("stage-6"),ye=fe.getContext("2d");fe.width=375,fe.height=667;var Ae=document.getElementById("stage-6_1"),Ie=Ae.getContext("2d");Ae.width=375,Ae.height=667;var be=document.getElementById("stage-6_2"),ke=be.getContext("2d");be.width=375,be.height=667;var Re=document.getElementById("stage-6_3"),xe=Re.getContext("2d");Re.width=375,Re.height=667;var _e=document.getElementById("stage-6_3_bg"),Ce=_e.getContext("2d");_e.width=375,_e.height=667;var Te=document.getElementById("stage-6_4"),Se=Te.getContext("2d");Te.width=375,Te.height=667;var qe=document.getElementById("stage-7"),Be=qe.getContext("2d");re>=1024?(qe.width=520,qe.height=667):(qe.width=375,qe.height=667);var Ee=document.getElementById("stage-8"),Le=Ee.getContext("2d");Ee.width=375,Ee.height=667;var Pe=document.getElementById("stage-9"),je=Pe.getContext("2d");Pe.width=375,Pe.height=667;var De=document.getElementById("stage-9_bg"),Xe=De.getContext("2d");De.width=375,De.height=667;var Fe=document.getElementById("stage-10"),Me=Fe.getContext("2d");Fe.width=375,Fe.height=667;var Oe=document.getElementById("stage-11"),ze=Oe.getContext("2d");Oe.width=375,Oe.height=667;var We=document.getElementById("stage-11_1"),Ve=We.getContext("2d");We.width=375,We.height=667;var He=document.getElementById("stage-11_2"),Ke=He.getContext("2d");He.width=375,He.height=667;var Ne=document.getElementById("stage-12"),Ge=Ne.getContext("2d");Ne.width=375,Ne.height=667;var Je=375,Qe=667,Ue=0,Ye=25,Ze=0,et=0,tt=0,at=0,st=new Image,rt=375,ot=667,ct=0,lt=25,nt=0,it=0,gt=0,mt=0,dt=new Image,pt=75,$t=112,wt=0,ht=36,vt=0,ut=0,ft=0,yt=0;re>=1024?(ft=880,yt=425):re>=768&&re<1024?(ft=550,yt=660):(ft=390,yt=575);var At=new Image;de.transform(.7,0,0,.7,0,0);var It=39,bt=55,kt=0,Rt=36,xt=0,_t=0,Ct=0,Tt=0;re>=1024?(Ct=560,Tt=417):re>=768&&re<1024?(Ct=350,Tt=670):(Ct=180,Tt=565);var St=new Image,qt=new Image,Bt=new Image,Et=375,Lt=667,Pt=0,jt=24,Dt=0,Xt=0,Ft=80,Mt=200,Ot=0,zt=new Image;he.transform(.8,0,0,.8,0,0);var Wt=375,Vt=667,Ht=0,Kt=24,Nt=0,Gt=0,Jt=0,Qt=0,Ut=0,Yt=new Image,Zt=213,ea=291,ta=0,aa=24,sa=0,ra=0,oa=130,ca=50,la=0,na=new Image,ia=140,ma=329,da=0,pa=24,$a=0,wa=0,ha=50,va=240,ua=0,fa=new Image,ya=269,Aa=398,Ia=0,ba=24,ka=0,Ra=0,xa=90,_a=170,Ca=0,Ta=new Image,Sa=128,qa=221,Ba=0,Ea=36,La=0,Pa=0,ja=140,Da=310,Xa=new Image,Fa=new Image,Ma=124,Oa=177,za=0,Wa=24,Va=0,Ha=0,Ka=70,Na=290,Ga=new Image,Ja=new Image,Qa=0;Qa=re>=1024?520:375;var Ua=667,Ya=0,Za=32,es=0,ts=0,as=0,ss=20,rs=new Image,os=375,cs=667,ls=0,ns=24,is=0,gs=0,ms=0,ds=0,ps=new Image,$s=166,ws=148,hs=0,vs=25,us=0,fs=0,ys=120,As=200,Is=0,bs=new Image,ks=new Image;Xe.transform(.85,0,0,.85,0,0);var Rs=0,xs=0,_s=168,Cs=290,Ts=0,Ss=24,qs=0,Bs=0,Es=0,Ls=250,Ps=new Image,js=145,Ds=287,Xs=0,Fs=32,Ms=0,Os=0,zs=0,Ws=250,Vs=new Image,Hs=375,Ks=667,Ns=0,Gs=24,Js=0,Qs=0,Us=0,Ys=0,Zs=new Image,er=375,tr=667,ar=0,sr=24,rr=0,or=0,cr=0,lr=0,nr=new Image,ir=new Image,gr=375,mr=667,dr=0,pr=36,$r=0,wr=0,hr=0,vr=0,ur=new Image;$(".fullpage").fullpage({navigation:!0,recordHistory:!1,scrollingSpeed:777,lazyLoading:!0,afterLoad:function(e,t){J=t,$.fn.fullpage.setAllowScrolling(!1),$("#section-"+t).css({opacity:"1","z-index":50}),$("#head").addClass("Bgc-TP"),bar_witdh=t/($(".fullpage").children().length-1)*100,$("#indicator-bar").css("width",bar_witdh+"%"),$("#indicator").removeClass("mainColor"),ga("send",{hitType:"event",eventCategory:"插畫(15張)",eventAction:"scroll",eventLabel:"看到第"+t+"張"}),1==t&&($("#stage-1")[0].play(),$(".fixed_pic").css("opacity","1"),$.fn.fullpage.setAutoScrolling(!0),$.fn.fullpage.setAllowScrolling(!0),$.fn.fullpage.setFitToSection(!0),$.fn.fullpage.setScrollingSpeed(777),st.src="src/image/animate-sprite/stage-2-start.jpg",dt.src="src/image/animate-sprite/stage-2-end.jpg",null!==localStorage.getItem("udn-readed")?$(".skip").css({display:"block"}):$(".downArrow").css({display:"block",color:"white"})),2==t&&(At.src="src/image/animate-sprite/stage-3-walk1.png",St.src="src/image/animate-sprite/stage-3-walkback.png",qt.src="src/image/animate-sprite/stage-3-bg.png",Bt.src="src/image/animate-sprite/stage-3pod.png",$(".page-black").eq(0).css({transform:"translate(0, 0)"}),$(".downArrow").css({display:"block",color:"white"}),"src/image/off.png"==$(".voice-state img").attr("src")&&$(".voice-state img").addClass("blink"),$.fn.fullpage.setAllowScrolling(!0)),3==t&&(zt.src="src/image/animate-sprite/stage-4-kitchen.jpg",na.src="src/image/animate-sprite/stage-6-foodInfo.png",fa.src="src/image/animate-sprite/stage-6-foodSafe.png",Ta.src="src/image/animate-sprite/stage-6-speech.png",Fa.src="src/image/animate-sprite/stage-6-lab-bg.png",Ja.src="src/image/animate-sprite/stage-6-lab-bg2.png",$(".voice-state img").removeClass("blink"),$(".page-black").eq(0).removeAttr("style"),$(".page-black").eq(1).css({transform:"translate(0, 0)"}),$(".downArrow").css({display:"block",color:"white"}),$.fn.fullpage.setAllowScrolling(!0)),4==t&&(Yt.src="src/image/animate-sprite/stage-5-car.jpg",Xa.src="src/image/animate-sprite/stage-6-doctor.png",Ga.src="src/image/animate-sprite/stage-6-cpu.png",ks.src="src/image/animate-sprite/stage-9-bg.png",ir.src="src/image/animate-sprite/stage-11-bg.png",$(".page-black").eq(1).removeAttr("style"),$("#stage-2").css({transform:"translateX(0)",opacity:"1"}),T=setInterval(i,100)),5==t&&(rs.src=re>=1024?"src/image/animate-sprite/stage-7-roomW.jpg":"src/image/animate-sprite/stage-7-room.jpg",ge.clearRect(0,0,ie.width,ie.height),Ue=0,ct=0,$("#stage-2").removeAttr("style"),$(".stage-2-words").removeAttr("style"),$(".stage-3-words").css({transform:"translate(0, 15%)",opacity:"1"}),$("#music-walk")[0].play(),re>=1024&&$e.drawImage(qt,0,0,810,369,35,126,810,369),re>=768&&re<1023&&($e.drawImage(Bt,0,0,578,820,0,0,578,820),console.log("pad tree")),re<768&&$e.drawImage(qt,0,0,810,369,-230,230,810,369),q=setInterval(m,83),$.fn.fullpage.setScrollingSpeed(1777)),6==t&&(ps.src="src/image/animate-sprite/stage-8-bed.jpg",de.clearRect(0,0,me.width,me.height),de.globalAlpha=1,re>=1024?(ft=880,Ct=560):(ft=390,Ct=180),$(".stage-3-words").removeAttr("style"),$(".stage-4-words p").css({transform:"translate(0, 0)",opacity:"1"}),$("#stage-4").css({transform:"translate(0, 0)",opacity:"1"}),$("#music-cooking")[0].play(),W=setInterval(p,125)),7==t&&(bs.src="src/image/animate-sprite/stage-9-smoke.png",Ps.src="src/image/animate-sprite/stage-10-stroll.png",Vs.src="src/image/animate-sprite/stage-10-wave.png",he.clearRect(0,0,we.width,we.height),Ot=0,$(".stage-4-words p").removeAttr("style"),$("#stage-4").removeAttr("style"),$("#stage-5").css({transform:"translate(0, 0)",opacity:"1"}),$(".stage-5-words p").css({opacity:"1"}),$("#music-driving")[0].play(),E=setInterval(w,125)),8==t&&(Zs.src="src/image/animate-sprite/stage-11-man.jpg",nr.src="src/image/animate-sprite/stage-11-woman.jpg",ur.src="src/image/animate-sprite/stage-12-wash.jpg",Ut=0,ue.clearRect(0,0,ve.width,ve.height),clearInterval(E),$("#stage-5").removeAttr("style"),$(".stage-5-words p").removeAttr("style"),$(".stage-5-words h2").removeAttr("style"),ye.drawImage(na,sa,ra,Zt,ea,oa,ca,Zt,ea),Ie.drawImage(fa,$a,wa,ia,ma,ha,va,ia,ma),ke.drawImage(Ta,ka,Ra,ya,Aa,xa,_a,ya,Aa),Ce.drawImage(Fa,0,0,360,395,75,150,360,395),Se.drawImage(Ja,0,0,124,208,0,459,124,208),$("#stage-6").css({opacity:"1",transform:"translate(0, 0)"}),setTimeout(function(){$("#stage-6_1").css({opacity:"1",transform:"translate(0, 0)"})},222),setTimeout(function(){$("#stage-6_2").css({opacity:"1",transform:"translate(0, 0)"})},555),setTimeout(function(){$("#music-camera")[0].play(),V=setInterval(h,83),H=setInterval(v,83),K=setInterval(u,83)},1433),setTimeout(function(){$(".stage-6-words p").eq(0).css({opacity:"1",transform:"translate(0, 0)"})},1666)),9==t&&(ye.clearRect(0,0,fe.width,fe.height),Ie.clearRect(0,0,Ae.width,Ae.height),ke.clearRect(0,0,be.width,be.height),xe.clearRect(0,0,Re.width,Re.height),Se.clearRect(0,0,Te.width,Te.height),$("#stage-6").removeAttr("style"),$("#stage-6_1").removeAttr("style"),$("#stage-6_2").removeAttr("style"),$("#stage-6_3").removeAttr("style"),$("#stage-6_3_bg").removeAttr("style"),$("#stage-6_4").removeAttr("style"),$(".stage-6-words p").eq(0).removeAttr("style"),$(".stage-6-words p").eq(1).removeAttr("style"),la=0,ua=0,Ca=0,L=setInterval(A,125),$("#stage-7").css({opacity:"1"})),10==t&&(Be.clearRect(0,0,qe.width,qe.height),$("#stage-7").removeAttr("style"),$(".stage-7-words").removeAttr("style"),$(".stage-8-words p").eq(0).css({opacity:"1",transform:"translate(0, 0)"}),setTimeout(function(){$("#stage-8").css({opacity:"1",transform:"translate(0, 0)"}),P=setInterval(I,125)},777)),11==t&&(ls=0,$(".stage-8-words p").removeAttr("style"),$(".stage-8-words h2").removeAttr("style"),$("#stage-8").removeAttr("style"),Le.clearRect(0,0,Ee.width,Ee.height),$(".stage-9-words p").css({opacity:"1",transform:"translate(0, 0)"}),Xe.drawImage(ks,0,0,413,416,12,250,413,416),j=setInterval(b,125),setTimeout(function(){$("#stage-9, #stage-9_bg").css({opacity:"1",transform:"translate(0, 0)"})},1222)),12==t&&(Is=0,je.clearRect(0,0,Pe.width,Pe.height),Xe.clearRect(0,0,De.width+100,De.height+100),$(".stage-9-words p").removeAttr("style"),$("#stage-9").removeAttr("style"),$("#stage-9_bg").removeAttr("style"),$("#music-street")[0].play(),M=setInterval(k,125)),13==t&&(Rs=0,xs=0,Xs=0,Me.clearRect(0,0,Fe.width,Fe.height),$(".thanks").removeAttr("style"),$(".stage-10-words").removeAttr("style"),$(".stage-10-words p").removeAttr("style"),$(".stage-11-words p").css({opacity:"1"}),Ke.drawImage(ir,0,0,302,322,36,180,302,322),D=setInterval(x,125),setTimeout(function(){$("#stage-11").css({opacity:"0"}),clearInterval(D),X=setInterval(_,125)},2e3),setTimeout(function(){$("#stage-11_1").css({opacity:"0"}),clearInterval(X)},4500),setTimeout(function(){$(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)},4666)),14==t&&(ze.clearRect(0,0,Oe.width,Oe.height),Ve.clearRect(0,0,We.width,We.height),$("#stage-11").removeAttr("style"),$("#stage-11_1").removeAttr("style"),$(".stage-11-words p").removeAttr("style"),$(".stage-12-words p").eq(0).css({opacity:1}),setTimeout(function(){$(".stage-12-words p").eq(1).css({opacity:1}),$("#stage-12").css({opacity:1}),F=setInterval(C,125)},1e3),setTimeout(function(){$(".stage-12-words p").eq(2).css({opacity:1})},2e3)),15==t&&(Ge.clearRect(0,0,Ne.width,Ne.height),dr=0,$(".stage-12-words p").removeAttr("style"),$("#stage-12").removeAttr("style"),$(".stage-13").eq(0).css({opacity:"1"}),$(".stage-13-words").css({transform:"translate(0, -20%)",opacity:1}),$.fn.fullpage.setAutoScrolling(!1),$.fn.fullpage.setFitToSection(!1),$("html, body").css({"overflow-x":"hidden",height:"initail"}),setTimeout(function(){$(".stage-13").eq(1).css({opacity:"1"}),$(".stage-13-words h2").css({opacity:"1"}),$(window).scrollTop()<$(".content").eq(0).offset().top&&$(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)},1666),setTimeout(function(){$(".stage-13").eq(2).css({opacity:"1"})},3333),localStorage.setItem("udn-readed","readed"))},onLeave:function(e,t,a){l(),$(".downArrow").css({display:"none"}),$(".skip").css({display:"none"}),$("#section-"+e).css({opacity:0,"z-index":0}),"up"==a&&ga("send",{hitType:"event",eventCategory:"動畫回上一頁",eventAction:"scroll",eventLabel:"第幾"+e+"張,回頭看"}),1!=$("#indicator").css("opacity")&&($("#indicator").css({opacity:1}),$("#indicator-bar").css("width","0")),1==e&&$(".fixed_pic").css("opacity","1"),2==e&&"up"==a&&$(".voice-state img").removeClass("blink"),4==e&&("up"==a?(Ue=0,ct=0,ge.clearRect(0,0,ie.width,ie.height),$(".stage-2-words").removeAttr("style"),$("#stage-2").removeAttr("style")):($("#section-4").css({transition:"3s"}),S=setInterval(g,100),$.fn.fullpage.setScrollingSpeed(2333))),5==e&&"up"==a&&(de.clearRect(0,0,me.width,me.height),de.globalAlpha=1,re>=1280?(ft=880,Ct=560):(ft=390,Ct=180),$(".stage-3-words").removeAttr("style")),6==e&&"up"==a&&(Ot=0,he.clearRect(Ft,Mt,we.width,we.height),$(".stage-4-words p").removeAttr("style"),$("#stage-4").removeAttr("style")),7==e&&("up"==a?(Ut=0,clearInterval(E),ue.clearRect(0,0,ve.width,ve.height),$("#stage-5").removeAttr("style"),$(".stage-5-words p").removeAttr("style"),$(".stage-5-words h2").removeAttr("style")):$("#stage-5").css({transform:"translate(75%, 20%)",opacity:"0"})),8==e&&("up"==a?(ye.clearRect(0,0,fe.width,fe.height),Ie.clearRect(0,0,Ae.width,Ae.height),ke.clearRect(0,0,be.width,be.height),xe.clearRect(0,0,Re.width,Re.height),Se.clearRect(0,0,Te.width,Te.height),$("#stage-6").removeAttr("style"),$("#stage-6_1").removeAttr("style"),$("#stage-6_2").removeAttr("style"),$("#stage-6_3").removeAttr("style"),$("#stage-6_3_bg").removeAttr("style"),$("#stage-6_4").removeAttr("style"),$(".stage-6-words p").eq(0).removeAttr("style"),$(".stage-6-words p").eq(1).removeAttr("style"),la=0,ua=0,Ca=0):($("#section-8").css({transition:"3s"}),$("#stage-6_3, #stage-6_3_bg").css({opacity:"0",transform:"translate(0, -130px)"}),$(".stage-6-words p").eq(1).css({opacity:"0",transform:"translate(0, -70px)"}),setTimeout(function(){$("#stage-6_4").css({opacity:"0",transform:"translate(0, -140px)"})},111))),9==e&&"up"==a&&(Be.clearRect(0,0,qe.width,qe.height),$("#stage-7").removeAttr("style"),$(".stage-7-words").removeAttr("style")),10==e&&"up"==a&&(ls=0,Le.clearRect(0,0,Ee.width,Ee.height),$(".stage-8-words p").removeAttr("style"),$(".stage-8-words h2").removeAttr("style"),$("#stage-8").removeAttr("style")),11==e&&"up"==a&&(Is=0,je.clearRect(0,0,Pe.width,Pe.height),Xe.clearRect(0,0,De.width+300,De.height+300),$(".stage-9-words p").removeAttr("style"),$("#stage-9").removeAttr("style"),$("#stage-9_bg").removeAttr("style")),12==e&&("up"==a?(Rs=0,xs=0,Xs=0,Me.clearRect(0,0,Fe.width,Fe.height),$(".thanks").removeAttr("style"),$(".stage-10-words").removeAttr("style"),$(".stage-10-words p").removeAttr("style")):(1==xs&&Xs>22&&(O=setInterval(R,125)),$(".thanks").eq(xs).css({opacity:"0",transform:"translateX(-10%)"}))),13==e&&"up"==a&&(ze.clearRect(0,0,Oe.width,Oe.height),Ve.clearRect(0,0,We.width,We.height),$("#stage-11").removeAttr("style"),$("#stage-11_1").removeAttr("style"),$(".stage-11-words p").removeAttr("style")),14==e&&"up"==a&&(dr=0,Ge.clearRect(0,0,Ne.width,Ne.height),$(".stage-12-words p").removeAttr("style"),$("#stage-12").removeAttr("style")),15==e&&"up"==a&&($(".stage-13-words h2").removeAttr("style"),$(".stage-13-words p").removeAttr("style"),$(".stage-13").removeAttr("style")),3==t&&$(".fixed_pic").css("opacity","1"),4==t&&$(".fixed_pic").css("opacity","0")}}),$(".downArrow").click(function(e){e.preventDefault(),$.fn.fullpage.moveSectionDown(),ga("send",{hitType:"event",eventCategory:"下一頁",eventAction:"click",eventLabel:"第幾"+J+"點了下一頁箭頭"}),15==J&&$("html, body").animate({scrollTop:$(".content").eq(0).offset().top},888)}),$(".skip").click(function(e){e.preventDefault(),$.fn.fullpage.setAutoScrolling(!1),$.fn.fullpage.setFitToSection(!1),$("html, body").animate({scrollTop:$(".content").eq(0).offset().top},888),ga("send",{hitType:"event",eventCategory:"skip",eventAction:"click",eventLabel:"點擊跳過動畫(skip)"}),$(this).css({display:"none"}),$(".fixed_pic").css({opacity:0})})});