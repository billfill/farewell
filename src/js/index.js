$(document).ready(function(){function e(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))}function t(e){$("#movie-"+e).get(0).play(),null==ee[e-1]&&(ee[e-1]=setInterval(function(){var t=$("#movie-"+e).get(0).currentTime,a=t/$("#movie-"+e).get(0).duration*100;a>.6&&$('.video-play[data-target="'+e+'"]').css("opacity",0),Math.floor(t/5)>te&&(te=Math.floor(t/5)),$("#progress-bar-"+e).css("width",a+"%")},600))}function a(e){$("#movie-"+e).get(0).pause(),$('.video-play[data-target="'+e+'"]').css("opacity",1),ee[e-1]&&(clearInterval(ee[e-1]),ee[e-1]=null)}function s(e){$("#movie-"+e).get(0).currentTime=0,$("#movie-"+e).get(0).play(),$(".progress-bar").css("width",0),clearInterval(ee[e-1]),ee[e-1]=setInterval(function(){var t=$("#movie-"+e).get(0).currentTime/$("#movie-"+e).get(0).duration*100;$("#progress-bar-"+e).css("width",t+"%")},600)}function r(e){1==$("#movie-"+e).get(0).muted?($("#movie-"+e).get(0).muted=!1,$('.volume[data-target="'+e+'"]').removeClass("fa-volume-off").addClass("fa-volume-up"),$('.volume-text[data-target="'+e+'"]').text("點按關聲音")):($("#movie-"+e).get(0).muted=!0,$('.volume[data-target="'+e+'"]').removeClass("fa-volume-up").addClass("fa-volume-off"),$('.volume-text[data-target="'+e+'"]').text("點按開聲音"))}function o(){$("#music-main")[0].muted=!1,$("#music-door")[0].muted=!1,$("#music-door")[0].volume=.6,$("#music-walk")[0].muted=!1,$("#music-walk")[0].volume=.6,$("#music-cooking")[0].muted=!1,$("#music-cooking")[0].volume=.6,$("#music-driving")[0].muted=!1,$("#music-driving")[0].volume=.3,$("#music-camera")[0].muted=!1,$("#music-camera")[0].volume=.3,$("#music-switch")[0].muted=!1,$("#music-switch")[0].volume=.6,$("#music-stroll")[0].muted=!1,$("#music-stroll")[0].volume=.3,$("#music-street")[0].muted=!1,$("#music-street")[0].volume=.6}function c(){$("#music-main")[0].muted=!0,$("#music-door")[0].muted=!0,$("#music-walk")[0].muted=!0,$("#music-cooking")[0].muted=!0,$("#music-driving")[0].muted=!0,$("#music-camera")[0].muted=!0,$("#music-switch")[0].muted=!0,$("#music-stroll")[0].muted=!0,$("#music-street")[0].muted=!0}function l(){clearInterval(S),clearInterval(B),clearInterval(E),clearInterval(P),clearInterval(j),clearInterval(D),clearInterval(X),clearInterval(z),clearInterval(F),clearInterval(M),clearInterval(O),clearInterval(W),clearInterval(V),clearInterval(H),clearInterval(K),clearInterval(N),clearInterval(G),clearInterval(J),$("#music-door")[0].pause(),$("#music-walk")[0].pause(),$("#music-cooking")[0].pause(),$("#music-driving")[0].pause(),$("#music-camera")[0].pause(),$("#music-switch")[0].pause(),$("#music-stroll")[0].pause(),$("#music-street")[0].pause()}function n(){setTimeout(function(){$(window).scrollTop(0)},666)}function i(){Ye==Ze-1?clearInterval(S):23==Ye?($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0),Ye++):13==Ye?($(".stage-2-words").css({opacity:1}),Ye++):8==Ye?($("#music-door")[0].play(),Ye++):Ye++,tt=Ye*Ue,me.clearRect(at,st,Qe+10,Ue+10),me.imageSmoothingEnabled=!1,me.globalAlpha=1,me.drawImage(rt,et,tt,Qe,Ue,at,st,Qe,Ue)}function g(){lt==nt-1?(clearInterval(q),me.clearRect(0,0,ge.width,ge.height),$("#section-4").css({transition:"1s"})):13==lt?($("#stage-2").css({transform:"translateX(-100px)",opacity:0}),lt++):lt++,gt=lt*ct,me.clearRect(mt,dt,ot,ct),me.drawImage(pt,it,gt,ot,ct,mt,dt,ot,ct)}function m(){ht=++ht%vt,ft=ht*wt,pe.clearRect(yt,At,$t,wt),pe.drawImage(It,ut,ft,$t,wt,yt,At,$t,wt),oe>=1024?yt<550?(pe.clearRect(yt,At,$t,wt),clearInterval(B),E=setInterval(d,83)):(yt<625&&(pe.globalAlpha-=.05),yt<800&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)),yt-=5):oe>=768&&oe<1024?(yt<350?(pe.clearRect(yt,At,$t,wt),clearInterval(B),E=setInterval(d,83)):(yt<400&&(pe.globalAlpha-=.05),yt<500&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)),yt-=4),console.log("pad walk")):yt<150?(pe.clearRect(yt,At,$t,wt),clearInterval(B),E=setInterval(d,83)):(yt>150&&yt<200&&(pe.globalAlpha-=.05),yt<300&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)),yt-=4)}function d(){Rt=++Rt%xt,Ct=Rt*kt,pe.clearRect(Tt,St,bt,kt),pe.drawImage(qt,_t,Ct,bt,kt,Tt,St,bt,kt),oe>=1024?Tt>650?(pe.clearRect(Tt,St,bt,kt),clearInterval(E),$("#music-walk")[0].pause()):(Tt<590?pe.globalAlpha+=.3:Tt>590&&Tt<600?pe.globalAlpha=1:Tt>620&&(pe.globalAlpha-=.05),Tt+=3):oe>=768&&oe<1024?Tt>420?(pe.clearRect(Tt,St,bt,kt),clearInterval(E),$("#music-walk")[0].pause()):(Tt>350&&Tt<360?pe.globalAlpha+=.3:Tt>360&&Tt<280?pe.globalAlpha=1:Tt>380&&Tt<420&&(pe.globalAlpha-=.05),Tt+=2.5):Tt>270?(pe.clearRect(Tt,St,bt,kt),clearInterval(E),$("#music-walk")[0].pause()):(Tt>150&&Tt<190?pe.globalAlpha+=.3:Tt>190&&Tt<220?pe.globalAlpha=1:Tt>220&&Tt<270&&(pe.globalAlpha-=.05),Tt+=2)}function p(){jt=++jt%Dt,zt=jt*Pt,ve.clearRect(Ft,Mt,Lt+10,Pt+10),ve.drawImage(Wt,Xt,zt,Lt,Pt,Ft,Mt,Lt,Pt),15==++Ot&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0))}function w(){Kt=++Kt%Nt,Jt=Kt*Ht,fe.clearRect(Qt,Ut,Vt+10,Ht+10),fe.drawImage(Zt,Gt,Jt,Vt,Ht,Qt,Ut,Vt,Ht),32==++Yt?($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)):22==Yt&&$(".stage-5-words h2").css({opacity:"1"})}function h(){aa=++aa%sa,oa=aa*ta,Ae.clearRect(ca,la,ea+10,ta+10),Ae.drawImage(ia,ra,oa,ea,ta,ca,la,ea,ta),29==na?clearInterval(H):22==na?(na++,$("#stage-6").css({opacity:"0",transform:"translate(0, -100%)"}),na++):na++}function v(){pa=++pa%$a,ha=pa*da,be.clearRect(va,ua,ma+10,da+10),be.drawImage(ya,wa,ha,ma,da,va,ua,ma,da),27==fa?(clearInterval(K),$("#stage-6_3, #stage-6_3_bg").css({opacity:"1",transform:"translate(0, 0)"}),J=setInterval(y,125)):24==fa?($("#stage-6_1").css({opacity:"0",transform:"translate(0, -100%)"}),fa++):fa++}function u(){ba=++ba%ka,xa=ba*Ia,Re.clearRect(_a,Ca,Aa+10,Ia+10),Re.drawImage(Sa,Ra,xa,Aa,Ia,_a,Ca,Aa,Ia),30==Ta?(clearInterval(N),$("#stage-6_4").css({opacity:"1",transform:"translate(0, 0)"}),setTimeout(function(){$(".stage-6-words p").eq(1).css({opacity:"1",transform:"translate(0, 0px)"})},888),setTimeout(function(){$(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)},1888),G=setInterval(f,83)):27==Ta?($(".stage-6-words p").eq(0).css({opacity:"0",transform:"translate(0, -50px)"}),$("#music-camera")[0].pause(),Ta++):26==Ta?($("#stage-6_2").css({opacity:"0",transform:"translate(0, -100%)"}),Ta++):Ta++}function f(){Ea=++Ea%La,ja=Ea*Ba,_e.clearRect(Da,Xa,qa,Ba),_e.drawImage(za,Pa,ja,qa,Ba,Da,Xa,qa,Ba)}function y(){Wa=++Wa%Va,Ka=Wa*Oa,qe.clearRect(Na,Ga,Ma,Oa),qe.drawImage(Ja,Ha,Ka,Ma,Oa,Na,Ga,Ma,Oa)}function A(){Za=++Za%es,as=Za*Ya,Ee.clearRect(ss,rs,Ua+10,Ya+10),Ee.drawImage(os,ts,as,Ua,Ya,ss,rs,Ua,Ya),Ee.font="14px Arial",Za>4&&(oe>=1024?Ee.fillText("爸爸進房間囉",250,282):Ee.fillText("爸爸進房間囉",175,282),23==Za?$("#music-switch")[0].play(0):Za==es-1&&(clearInterval(P),$(".downArrow").css({display:"block",color:"white"}),$.fn.fullpage.setAllowScrolling(!0)))}function I(){ns=++ns%is,ms=ns*ls,Pe.clearRect(ds,ps,cs,ls),Pe.drawImage($s,gs,ms,cs,ls,ds,ps,cs,ls),ns==is-1?clearInterval(j):18==ns?($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)):4==ns&&$(".stage-8-words h2").css({transform:"translate(0, 0)",opacity:"1"})}function b(){vs=++vs%us,ys=vs*hs,De.clearRect(As,Is,ws+10,hs+10),De.drawImage(ks,fs,ys,ws,hs,As,Is,ws,hs),14==++bs&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0))}function k(){Ss=++Ss%qs,Es=Ss*Ts,Me.clearRect(Ls,Ps,Cs+10,Ts+10),Me.drawImage(js,Bs,Es,Cs,Ts,Ls,Ps,Cs,Ts),48==++xs&&_s<2?(O=setInterval(R,125),xs=0,$(".thanks").eq(_s).css({opacity:"1",transform:"translateX(0)"})):36==xs?$(".stage-10-words p").css({opacity:0}):6==xs?$(".stage-10-words p").eq(0).css({opacity:1,transform:"translate(0, 0)"}):14==xs?$(".stage-10-words p").eq(1).css({opacity:1,transform:"translate(0, 0)"}):16==xs?1==_s&&(O=setInterval(R,125),xs=0,$(".thanks").eq(_s).css({opacity:"1",transform:"translateX(0)"})):22==xs?$(".stage-10-words p").eq(2).css({opacity:1,transform:"translate(0, 0)"}):2==xs&&$("#music-stroll")[0].play()}function R(){$("#music-stroll")[0].pause(),Os=++zs*Xs,Me.clearRect(Ws,Vs,Ds+10,Xs+10),Me.drawImage(Hs,Ms,Os,Ds,Xs,Ws,Vs,Ds,Xs),clearInterval(M),zs==Fs-1&&0==_s?(clearInterval(O),zs=0,$(".stage-10-words").css({opacity:0,tranistion:"translate(0, -50px)"}),M=setInterval(k,125),$(".thanks").eq(_s).css({opacity:"0",transform:"translateX(-10%)"}),$(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0),_s++):23==zs&&1==_s?(clearInterval(O),$(".downArrow").css({display:"block",color:"black"})):zs==Fs-1&&1==_s&&clearInterval(O)}function _(){Gs=++Gs%Js,Us=Gs*Ns,We.clearRect(Ys,Zs,Ks+10,Ns+10),We.drawImage(er,Qs,Us,Ks,Ns,Ys,Zs,Ks,Ns)}function C(){sr=++sr%rr,cr=sr*ar,He.clearRect(lr,nr,tr+10,ar+10),He.drawImage(ir,or,cr,tr,ar,lr,nr,tr,ar)}function T(){pr=++pr%$r,hr=pr*dr,Je.clearRect(vr,ur,mr+10,dr+10),Je.drawImage(fr,wr,hr,mr,dr,vr,ur,mr,dr),pr==$r-1?clearInterval(F):20==pr&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0))}var S,q,B,E,L,P,j,D,X,z,F,M,O,W,V,H,K,N,G,J,Q,U,Y=10,Z=1==e()?"Mob":"PC",ee=[],te=[null],ae=window.navigator.userAgent,se=!!ae.match(/iPad/i)||!!ae.match(/iPhone/i),re=!!ae.match(/WebKit/i);se&&re&&ae.match(/CriOS/i);ver=function(){if(/iP(hone|od|ad)/.test(navigator.platform)){var e=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3]||0,10)]}}(),function(){if(1==se){var e=navigator.userAgent||navigator.vendor||window.opera;return e.indexOf("FBAN")>-1||e.indexOf("FBAV")>-1}return!1}()&&($(".stage-6-words p").eq(0).css({top:"15%",left:"-15%"}),$(".cover_Title").css({"padding-top":"15%"}),$(".section").css({"margin-top":"-6%"}),$(".fixed_pic").css({"margin-top":"-128px"}),window.addEventListener("resize",function(){1==Q&&(n(),alert("animeIndex: "+Q))}),$(window).resize(function(){$("span").text(x+=1)}),11==ver[0]?($(".downArrow").css({bottom:"158px"}),$(".skip").css({bottom:"158px"}),$(".whiteP").css({"line-height":"1.5"}),$(".intro").css({"margin-top":"-25%"})):10==ver[0]&&($(".whiteP").css({"line-height":"1.2"}),$(".intro").css({"margin-top":"-15%"}),ver[1]<=2?($(".downArrow").css({bottom:"16px"}),$(".skip").css({bottom:"16px"})):($(".downArrow").css({bottom:"143px"}),$(".skip").css({bottom:"143px"}))));var oe=$(window).width(),ce=$(window).height(),le=$("body").height()-ce,ne=oe>=768?"6px":"4px",ie=$("title").text();$("a").click(function(){ga("send",{hitType:"event",eventCategory:"超連結點擊",eventAction:"click",eventLabel:"["+Z+"] ["+ie+"] ["+$(this).attr("href")+"]"})}),$("#scroll-down").click(function(){ga("send",{hitType:"event",eventCategory:"ham bar",eventAction:"click",eventLabel:"["+Z+"] ["+ie+"] [scroll down]"})}),$(".line-share").click(function(t){ga("send",{hitType:"event",eventCategory:"Line Share",eventAction:"click",eventLabel:"["+Z+"] ["+ie+"] [line share]"}),e()?window.location.href="//line.me/R/msg/text/?"+ie+"%0D%0A%0D%0A"+$('meta[property="og:description"]').attr("content")+"%0D%0A%0D%0A"+window.location.href:window.open("https://lineit.line.me/share/ui?url="+window.location.href)}),$(".voice-state img").on("click",function(){var e=$(this).attr("src");$(this).removeClass("blink"),"src/image/off.png"==e?($(this).attr("src","src/image/on.png"),$("#music-main")[0].play(),o(),U>$(".content").eq(0).offset().top?ga("send",{hitType:"event",eventCategory:"閱讀時開聲音",eventAction:"click",eventLabel:"閱讀時開聲音"}):ga("send",{hitType:"event",eventCategory:"開聲音",eventAction:"click",eventLabel:"開聲音"})):($(this).attr("src","src/image/off.png"),c(),ga("send",{hitType:"event",eventCategory:"關聲音",eventAction:"click",eventLabel:"關聲音"}))}),$(window).on("scroll",function(){for(var e=(U=$(window).scrollTop())/le*100;Y<=Math.floor(e);Y+=10)ga("send",{hitType:"event",eventCategory:"read",eventAction:"scroll",eventLabel:"["+Z+"] ["+ie+"] [page read "+Y+"%]"});U>ce?($("#indicator").css("opacity",1),$("#head").css("top",ne)):($("#indicator").css("opacity",0),$("#head").css("top","0")),$("#indicator-bar").css("width",U/le*100+"%"),U>$(".content").eq(0).offset().top-.07*ce&&U<$(".content").eq(0).offset().top&&($("#head").removeClass("Bgc-TP"),$("#indicator").addClass("mainColor")),U>$(".section").eq(0).offset().top&&$(".downArrow").css({display:"none"}),U>$("#movie-1").offset().top-.5*ce&&U<$("#movie-1").offset().top+.5*ce&&t(1),(U>$("#movie-1").offset().top+.2*ce||U<$("#movie-1").offset().top-.8*ce)&&a(1)}),oe>=1024?($("#stage-1").attr("src","src/image/animate-sprite/stage-1PC.mp4"),$("#movie-1").attr("controls","true")):$("#stage-1").attr("src","src/image/animate-sprite/stage-1Mob.mp4"),$('.volume[data-target="1"]').click(function(){r(1)}),$('.replay[data-target="1"]').click(function(){s(1)}),$("#movie-1").click(function(){$("#movie-1")[0].paused?t(1):a(1)});var ge=document.getElementById("stage-2"),me=ge.getContext("2d");ge.width=375,ge.height=667;var de=document.getElementById("stage-3"),pe=de.getContext("2d"),$e=document.getElementById("stage-3_1"),we=$e.getContext("2d");oe>=1024&&(de.width=880,de.height=495,$e.width=880,$e.height=495),oe>=768&&oe<1023&&(de.width=578,de.height=820,$e.width=578,$e.height=820),oe<768&&(de.width=375,de.height=667,$e.width=375,$e.height=667);var he=document.getElementById("stage-4"),ve=he.getContext("2d");he.width=375,he.height=667;var ue=document.getElementById("stage-5"),fe=ue.getContext("2d");ue.width=375,ue.height=667;var ye=document.getElementById("stage-6"),Ae=ye.getContext("2d");ye.width=375,ye.height=667;var Ie=document.getElementById("stage-6_1"),be=Ie.getContext("2d");Ie.width=375,Ie.height=667;var ke=document.getElementById("stage-6_2"),Re=ke.getContext("2d");ke.width=375,ke.height=667;var xe=document.getElementById("stage-6_3"),_e=xe.getContext("2d");xe.width=375,xe.height=667;var Ce=document.getElementById("stage-6_3_bg"),Te=Ce.getContext("2d");Ce.width=375,Ce.height=667;var Se=document.getElementById("stage-6_4"),qe=Se.getContext("2d");Se.width=375,Se.height=667;var Be=document.getElementById("stage-7"),Ee=Be.getContext("2d");oe>=1024?(Be.width=520,Be.height=667):(Be.width=375,Be.height=667);var Le=document.getElementById("stage-8"),Pe=Le.getContext("2d");Le.width=375,Le.height=667;var je=document.getElementById("stage-9"),De=je.getContext("2d");je.width=375,je.height=667;var Xe=document.getElementById("stage-9_bg"),ze=Xe.getContext("2d");Xe.width=375,Xe.height=667;var Fe=document.getElementById("stage-10"),Me=Fe.getContext("2d");Fe.width=375,Fe.height=667;var Oe=document.getElementById("stage-11"),We=Oe.getContext("2d");Oe.width=375,Oe.height=667;var Ve=document.getElementById("stage-11_1"),He=Ve.getContext("2d");Ve.width=375,Ve.height=667;var Ke=document.getElementById("stage-11_2"),Ne=Ke.getContext("2d");Ke.width=375,Ke.height=667;var Ge=document.getElementById("stage-12"),Je=Ge.getContext("2d");Ge.width=375,Ge.height=667;var Qe=375,Ue=667,Ye=0,Ze=25,et=0,tt=0,at=0,st=0,rt=new Image,ot=375,ct=667,lt=0,nt=25,it=0,gt=0,mt=0,dt=0,pt=new Image,$t=75,wt=112,ht=0,vt=36,ut=0,ft=0,yt=0,At=0;oe>=1024?(yt=880,At=425):oe>=768&&oe<1024?(yt=550,At=660):(yt=390,At=575);var It=new Image;pe.transform(.7,0,0,.7,0,0);var bt=39,kt=55,Rt=0,xt=36,_t=0,Ct=0,Tt=0,St=0;oe>=1024?(Tt=560,St=417):oe>=768&&oe<1024?(Tt=350,St=670):(Tt=180,St=565);var qt=new Image,Bt=new Image,Et=new Image,Lt=375,Pt=667,jt=0,Dt=24,Xt=0,zt=0,Ft=80,Mt=200,Ot=0,Wt=new Image;ve.transform(.8,0,0,.8,0,0);var Vt=375,Ht=667,Kt=0,Nt=24,Gt=0,Jt=0,Qt=0,Ut=0,Yt=0,Zt=new Image,ea=213,ta=291,aa=0,sa=24,ra=0,oa=0,ca=130,la=50,na=0,ia=new Image,ma=140,da=329,pa=0,$a=24,wa=0,ha=0,va=50,ua=240,fa=0,ya=new Image,Aa=269,Ia=398,ba=0,ka=24,Ra=0,xa=0,_a=90,Ca=170,Ta=0,Sa=new Image,qa=128,Ba=221,Ea=0,La=36,Pa=0,ja=0,Da=140,Xa=310,za=new Image,Fa=new Image,Ma=124,Oa=177,Wa=0,Va=24,Ha=0,Ka=0,Na=70,Ga=290,Ja=new Image,Qa=new Image,Ua=0;Ua=oe>=1024?520:375;var Ya=667,Za=0,es=32,ts=0,as=0,ss=0,rs=20,os=new Image,cs=375,ls=667,ns=0,is=24,gs=0,ms=0,ds=0,ps=0,$s=new Image,ws=166,hs=148,vs=0,us=25,fs=0,ys=0,As=120,Is=200,bs=0,ks=new Image,Rs=new Image;ze.transform(.85,0,0,.85,0,0);var xs=0,_s=0,Cs=168,Ts=290,Ss=0,qs=24,Bs=0,Es=0,Ls=0,Ps=250,js=new Image,Ds=145,Xs=287,zs=0,Fs=32,Ms=0,Os=0,Ws=0,Vs=250,Hs=new Image,Ks=375,Ns=667,Gs=0,Js=24,Qs=0,Us=0,Ys=0,Zs=0,er=new Image,tr=375,ar=667,sr=0,rr=24,or=0,cr=0,lr=0,nr=0,ir=new Image,gr=new Image,mr=375,dr=667,pr=0,$r=36,wr=0,hr=0,vr=0,ur=0,fr=new Image;$(".fullpage").fullpage({navigation:!0,recordHistory:!1,scrollingSpeed:777,lazyLoading:!0,afterLoad:function(e,t){Q=t,console.log(Q),$.fn.fullpage.setAllowScrolling(!1),$("#section-"+t).css({opacity:"1","z-index":50}),$("#head").addClass("Bgc-TP"),bar_witdh=t/($(".fullpage").children().length-1)*100,$("#indicator-bar").css("width",bar_witdh+"%"),$("#indicator").removeClass("mainColor"),ga("send",{hitType:"event",eventCategory:"插畫(15張)",eventAction:"scroll",eventLabel:"看到第"+t+"張"}),1==t&&($("#stage-1")[0].play(),$(".fixed_pic").css("opacity","1"),$.fn.fullpage.setAutoScrolling(!0),$.fn.fullpage.setAllowScrolling(!0),$.fn.fullpage.setFitToSection(!0),$.fn.fullpage.setScrollingSpeed(777),rt.src="src/image/animate-sprite/stage-2-start.jpg",pt.src="src/image/animate-sprite/stage-2-end.jpg",null!==localStorage.getItem("udn-readed")?$(".skip").css({display:"block"}):$(".downArrow").css({display:"block",color:"white"})),2==t&&(It.src="src/image/animate-sprite/stage-3-walk1.png",qt.src="src/image/animate-sprite/stage-3-walkback.png",Bt.src="src/image/animate-sprite/stage-3-bg.png",Et.src="src/image/animate-sprite/stage-3pod.png",$(".page-black").eq(0).css({transform:"translate(0, 0)"}),$(".downArrow").css({display:"block",color:"white"}),"src/image/off.png"==$(".voice-state img").attr("src")&&$(".voice-state img").addClass("blink"),$.fn.fullpage.setAllowScrolling(!0)),3==t&&(Wt.src="src/image/animate-sprite/stage-4-kitchen.jpg",ia.src="src/image/animate-sprite/stage-6-foodInfo.png",ya.src="src/image/animate-sprite/stage-6-foodSafe.png",Sa.src="src/image/animate-sprite/stage-6-speech.png",Fa.src="src/image/animate-sprite/stage-6-lab-bg.png",Qa.src="src/image/animate-sprite/stage-6-lab-bg2.png",$(".voice-state img").removeClass("blink"),$(".page-black").eq(0).removeAttr("style"),$(".page-black").eq(1).css({transform:"translate(0, 0)"}),$(".downArrow").css({display:"block",color:"white"}),$.fn.fullpage.setAllowScrolling(!0)),4==t&&(Zt.src="src/image/animate-sprite/stage-5-car.jpg",za.src="src/image/animate-sprite/stage-6-doctor.png",Ja.src="src/image/animate-sprite/stage-6-cpu.png",Rs.src="src/image/animate-sprite/stage-9-bg.png",gr.src="src/image/animate-sprite/stage-11-bg.png",$(".page-black").eq(1).removeAttr("style"),$("#stage-2").css({transform:"translateX(0)",opacity:"1"}),S=setInterval(i,100)),5==t&&(os.src=oe>=1024?"src/image/animate-sprite/stage-7-roomW.jpg":"src/image/animate-sprite/stage-7-room.jpg",me.clearRect(0,0,ge.width,ge.height),Ye=0,lt=0,$("#stage-2").removeAttr("style"),$(".stage-2-words").removeAttr("style"),$(".stage-3-words").css({transform:"translate(0, 15%)",opacity:"1"}),$("#music-walk")[0].play(),oe>=1024&&we.drawImage(Bt,0,0,810,369,35,126,810,369),oe>=768&&oe<1023&&(we.drawImage(Et,0,0,578,820,0,0,578,820),console.log("pad tree")),oe<768&&we.drawImage(Bt,0,0,810,369,-230,230,810,369),B=setInterval(m,83),$.fn.fullpage.setScrollingSpeed(1777)),6==t&&($s.src="src/image/animate-sprite/stage-8-bed.jpg",pe.clearRect(0,0,de.width,de.height),pe.globalAlpha=1,oe>=1024?(yt=880,Tt=560):(yt=390,Tt=180),$(".stage-3-words").removeAttr("style"),$(".stage-4-words p").css({transform:"translate(0, 0)",opacity:"1"}),$("#stage-4").css({transform:"translate(0, 0)",opacity:"1"}),$("#music-cooking")[0].play(),V=setInterval(p,125)),7==t&&(ks.src="src/image/animate-sprite/stage-9-smoke.png",js.src="src/image/animate-sprite/stage-10-stroll.png",Hs.src="src/image/animate-sprite/stage-10-wave.png",ve.clearRect(0,0,he.width,he.height),Ot=0,$(".stage-4-words p").removeAttr("style"),$("#stage-4").removeAttr("style"),$("#stage-5").css({transform:"translate(0, 0)",opacity:"1"}),$(".stage-5-words p").css({opacity:"1"}),$("#music-driving")[0].play(),L=setInterval(w,125)),8==t&&(er.src="src/image/animate-sprite/stage-11-man.jpg",ir.src="src/image/animate-sprite/stage-11-woman.jpg",fr.src="src/image/animate-sprite/stage-12-wash.jpg",Yt=0,fe.clearRect(0,0,ue.width,ue.height),clearInterval(L),$("#stage-5").removeAttr("style"),$(".stage-5-words p").removeAttr("style"),$(".stage-5-words h2").removeAttr("style"),Ae.drawImage(ia,ra,oa,ea,ta,ca,la,ea,ta),be.drawImage(ya,wa,ha,ma,da,va,ua,ma,da),Re.drawImage(Sa,Ra,xa,Aa,Ia,_a,Ca,Aa,Ia),Te.drawImage(Fa,0,0,360,395,75,150,360,395),qe.drawImage(Qa,0,0,124,208,0,459,124,208),$("#stage-6").css({opacity:"1",transform:"translate(0, 0)"}),setTimeout(function(){$("#stage-6_1").css({opacity:"1",transform:"translate(0, 0)"})},222),setTimeout(function(){$("#stage-6_2").css({opacity:"1",transform:"translate(0, 0)"})},555),setTimeout(function(){$("#music-camera")[0].play(),H=setInterval(h,83),K=setInterval(v,83),N=setInterval(u,83)},1433),setTimeout(function(){$(".stage-6-words p").eq(0).css({opacity:"1",transform:"translate(0, 0)"})},1666)),9==t&&(Ae.clearRect(0,0,ye.width,ye.height),be.clearRect(0,0,Ie.width,Ie.height),Re.clearRect(0,0,ke.width,ke.height),_e.clearRect(0,0,xe.width,xe.height),qe.clearRect(0,0,Se.width,Se.height),$("#stage-6").removeAttr("style"),$("#stage-6_1").removeAttr("style"),$("#stage-6_2").removeAttr("style"),$("#stage-6_3").removeAttr("style"),$("#stage-6_3_bg").removeAttr("style"),$("#stage-6_4").removeAttr("style"),$(".stage-6-words p").eq(0).removeAttr("style"),$(".stage-6-words p").eq(1).removeAttr("style"),na=0,fa=0,Ta=0,P=setInterval(A,125),$("#stage-7").css({opacity:"1"})),10==t&&(Ee.clearRect(0,0,Be.width,Be.height),$("#stage-7").removeAttr("style"),$(".stage-7-words").removeAttr("style"),$(".stage-8-words p").eq(0).css({opacity:"1",transform:"translate(0, 0)"}),setTimeout(function(){$("#stage-8").css({opacity:"1",transform:"translate(0, 0)"}),j=setInterval(I,125)},777)),11==t&&(ns=0,$(".stage-8-words p").removeAttr("style"),$(".stage-8-words h2").removeAttr("style"),$("#stage-8").removeAttr("style"),Pe.clearRect(0,0,Le.width,Le.height),$(".stage-9-words p").css({opacity:"1",transform:"translate(0, 0)"}),ze.drawImage(Rs,0,0,413,416,12,250,413,416),D=setInterval(b,125),setTimeout(function(){$("#stage-9, #stage-9_bg").css({opacity:"1",transform:"translate(0, 0)"})},1222)),12==t&&(bs=0,De.clearRect(0,0,je.width,je.height),ze.clearRect(0,0,Xe.width+100,Xe.height+100),$(".stage-9-words p").removeAttr("style"),$("#stage-9").removeAttr("style"),$("#stage-9_bg").removeAttr("style"),$("#music-street")[0].play(),M=setInterval(k,125)),13==t&&(xs=0,_s=0,zs=0,Me.clearRect(0,0,Fe.width,Fe.height),$(".thanks").removeAttr("style"),$(".stage-10-words").removeAttr("style"),$(".stage-10-words p").removeAttr("style"),$(".stage-11-words p").css({opacity:"1"}),Ne.drawImage(gr,0,0,302,322,36,180,302,322),X=setInterval(_,125),setTimeout(function(){$("#stage-11").css({opacity:"0"}),clearInterval(X),z=setInterval(C,125)},2e3),setTimeout(function(){$("#stage-11_1").css({opacity:"0"}),clearInterval(z)},4500),setTimeout(function(){$(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)},4666)),14==t&&(We.clearRect(0,0,Oe.width,Oe.height),He.clearRect(0,0,Ve.width,Ve.height),$("#stage-11").removeAttr("style"),$("#stage-11_1").removeAttr("style"),$(".stage-11-words p").removeAttr("style"),$(".stage-12-words p").eq(0).css({opacity:1}),setTimeout(function(){$(".stage-12-words p").eq(1).css({opacity:1}),$("#stage-12").css({opacity:1}),F=setInterval(T,125)},1e3),setTimeout(function(){$(".stage-12-words p").eq(2).css({opacity:1})},2e3)),15==t&&(Je.clearRect(0,0,Ge.width,Ge.height),pr=0,$(".stage-12-words p").removeAttr("style"),$("#stage-12").removeAttr("style"),$(".stage-13").eq(0).css({opacity:"1"}),$(".stage-13-words").css({transform:"translate(0, -20%)",opacity:1}),$.fn.fullpage.setAutoScrolling(!1),$.fn.fullpage.setFitToSection(!1),$("html, body").css({"overflow-x":"hidden",height:"initail"}),setTimeout(function(){$(".stage-13").eq(1).css({opacity:"1"}),$(".stage-13-words h2").css({opacity:"1"}),$(window).scrollTop()<$(".content").eq(0).offset().top&&$(".downArrow").css({display:"block",color:"black"})},1666),setTimeout(function(){$(".stage-13").eq(2).css({opacity:"1"})},3333),localStorage.setItem("udn-readed","readed"))},onLeave:function(e,t,a){l(),$(".downArrow").css({display:"none"}),$(".skip").css({display:"none"}),$("#section-"+e).css({opacity:0,"z-index":0}),"up"==a&&ga("send",{hitType:"event",eventCategory:"動畫回上一頁",eventAction:"scroll",eventLabel:"第幾"+e+"張,回頭看"}),1!=$("#indicator").css("opacity")&&($("#indicator").css({opacity:1}),$("#indicator-bar").css("width","0")),1==e&&$(".fixed_pic").css("opacity","1"),2==e&&"up"==a&&$(".voice-state img").removeClass("blink"),4==e&&("up"==a?(Ye=0,lt=0,me.clearRect(0,0,ge.width,ge.height),$(".stage-2-words").removeAttr("style"),$("#stage-2").removeAttr("style")):($("#section-4").css({transition:"3s"}),q=setInterval(g,100),$.fn.fullpage.setScrollingSpeed(2333))),5==e&&"up"==a&&(pe.clearRect(0,0,de.width,de.height),pe.globalAlpha=1,oe>=1280?(yt=880,Tt=560):(yt=390,Tt=180),$(".stage-3-words").removeAttr("style")),6==e&&"up"==a&&(Ot=0,ve.clearRect(Ft,Mt,he.width,he.height),$(".stage-4-words p").removeAttr("style"),$("#stage-4").removeAttr("style")),7==e&&("up"==a?(Yt=0,clearInterval(L),fe.clearRect(0,0,ue.width,ue.height),$("#stage-5").removeAttr("style"),$(".stage-5-words p").removeAttr("style"),$(".stage-5-words h2").removeAttr("style")):$("#stage-5").css({transform:"translate(75%, 20%)",opacity:"0"})),8==e&&("up"==a?(Ae.clearRect(0,0,ye.width,ye.height),be.clearRect(0,0,Ie.width,Ie.height),Re.clearRect(0,0,ke.width,ke.height),_e.clearRect(0,0,xe.width,xe.height),qe.clearRect(0,0,Se.width,Se.height),$("#stage-6").removeAttr("style"),$("#stage-6_1").removeAttr("style"),$("#stage-6_2").removeAttr("style"),$("#stage-6_3").removeAttr("style"),$("#stage-6_3_bg").removeAttr("style"),$("#stage-6_4").removeAttr("style"),$(".stage-6-words p").eq(0).removeAttr("style"),$(".stage-6-words p").eq(1).removeAttr("style"),na=0,fa=0,Ta=0):($("#section-8").css({transition:"3s"}),$("#stage-6_3, #stage-6_3_bg").css({opacity:"0",transform:"translate(0, -130px)"}),$(".stage-6-words p").eq(1).css({opacity:"0",transform:"translate(0, -70px)"}),setTimeout(function(){$("#stage-6_4").css({opacity:"0",transform:"translate(0, -140px)"})},111))),9==e&&"up"==a&&(Ee.clearRect(0,0,Be.width,Be.height),$("#stage-7").removeAttr("style"),$(".stage-7-words").removeAttr("style")),10==e&&"up"==a&&(ns=0,Pe.clearRect(0,0,Le.width,Le.height),$(".stage-8-words p").removeAttr("style"),$(".stage-8-words h2").removeAttr("style"),$("#stage-8").removeAttr("style")),11==e&&"up"==a&&(bs=0,De.clearRect(0,0,je.width,je.height),ze.clearRect(0,0,Xe.width+300,Xe.height+300),$(".stage-9-words p").removeAttr("style"),$("#stage-9").removeAttr("style"),$("#stage-9_bg").removeAttr("style")),12==e&&("up"==a?(xs=0,_s=0,zs=0,Me.clearRect(0,0,Fe.width,Fe.height),$(".thanks").removeAttr("style"),$(".stage-10-words").removeAttr("style"),$(".stage-10-words p").removeAttr("style")):(1==_s&&zs>22&&(O=setInterval(R,125)),$(".thanks").eq(_s).css({opacity:"0",transform:"translateX(-10%)"}))),13==e&&"up"==a&&(We.clearRect(0,0,Oe.width,Oe.height),He.clearRect(0,0,Ve.width,Ve.height),$("#stage-11").removeAttr("style"),$("#stage-11_1").removeAttr("style"),$(".stage-11-words p").removeAttr("style")),14==e&&"up"==a&&(pr=0,Je.clearRect(0,0,Ge.width,Ge.height),$(".stage-12-words p").removeAttr("style"),$("#stage-12").removeAttr("style")),15==e&&"up"==a&&($(".stage-13-words h2").removeAttr("style"),$(".stage-13-words p").removeAttr("style"),$(".stage-13").removeAttr("style")),3==t&&$(".fixed_pic").css("opacity","1"),4==t&&$(".fixed_pic").css("opacity","0")}}),$(".downArrow").click(function(e){e.preventDefault(),$.fn.fullpage.moveSectionDown(),ga("send",{hitType:"event",eventCategory:"下一頁",eventAction:"click",eventLabel:"第幾"+Q+"點了下一頁箭頭"}),15==Q&&$("html, body").animate({scrollTop:$(".content").eq(0).offset().top},888)}),$(".skip").click(function(e){e.preventDefault(),$.fn.fullpage.setAutoScrolling(!1),$.fn.fullpage.setFitToSection(!1),$("html, body").animate({scrollTop:$(".content").eq(0).offset().top},888),ga("send",{hitType:"event",eventCategory:"skip",eventAction:"click",eventLabel:"直接看報導(skip)"}),$(this).css({display:"none"}),$(".fixed_pic").css({opacity:0})})});