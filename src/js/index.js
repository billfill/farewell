$(document).ready(function(){function e(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))}function t(){$("#music-main")[0].muted=!1,$("#music-door")[0].muted=!1,$("#music-door")[0].volume=.6,$("#music-walk")[0].muted=!1,$("#music-walk")[0].volume=.6,$("#music-cooking")[0].muted=!1,$("#music-cooking")[0].volume=.6,$("#music-driving")[0].muted=!1,$("#music-driving")[0].volume=.3,$("#music-camera")[0].muted=!1,$("#music-camera")[0].volume=.3,$("#music-switch")[0].muted=!1,$("#music-switch")[0].volume=.6,$("#music-stroll")[0].muted=!1,$("#music-stroll")[0].volume=.3,$("#music-street")[0].muted=!1,$("#music-street")[0].volume=.6}function a(){$("#music-main")[0].muted=!0,$("#music-door")[0].muted=!0,$("#music-walk")[0].muted=!0,$("#music-cooking")[0].muted=!0,$("#music-driving")[0].muted=!0,$("#music-camera")[0].muted=!0,$("#music-switch")[0].muted=!0,$("#music-stroll")[0].muted=!0,$("#music-street")[0].muted=!0}function s(){clearInterval(R),clearInterval(x),clearInterval(C),clearInterval(S),clearInterval(q),clearInterval(B),clearInterval(E),clearInterval(L),clearInterval(j),clearInterval(P),clearInterval(D),clearInterval(X),clearInterval(F),clearInterval(z),clearInterval(O),clearInterval(M),clearInterval(W),clearInterval(H),$("#music-door")[0].pause(),$("#music-walk")[0].pause(),$("#music-cooking")[0].pause(),$("#music-driving")[0].pause(),$("#music-camera")[0].pause(),$("#music-switch")[0].pause(),$("#music-stroll")[0].pause(),$("#music-street")[0].pause()}function r(){setTimeout(function(){$(window).scrollTop(0)},888)}function o(){Ke==Ne-1?clearInterval(R):23==Ke?($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0),Ke++):13==Ke?($(".stage-2-words").css({opacity:1}),Ke++):8==Ke?($("#music-door")[0].play(),Ke++):Ke++,Ge=Ke*He,re.clearRect(Je,Qe,We+10,He+10),re.imageSmoothingEnabled=!1,re.globalAlpha=1,re.drawImage(Ue,Ve,Ge,We,He,Je,Qe,We,He)}function c(){et==tt-1?(clearInterval(_),re.clearRect(0,0,se.width,se.height),$("#section-4").css({transition:"1s"})):13==et?($("#stage-2").css({transform:"translateX(-100px)",opacity:0}),et++):et++,st=et*Ze,re.clearRect(rt,ot,Ye,Ze),re.drawImage(ct,at,st,Ye,Ze,rt,ot,Ye,Ze)}function n(){it=++it%gt,dt=it*lt,ce.clearRect(pt,$t,nt,lt),ce.drawImage(wt,mt,dt,nt,lt,pt,$t,nt,lt),Y>=1024?pt<550?(ce.clearRect(pt,$t,nt,lt),clearInterval(x),C=setInterval(l,83)):(pt<625&&(ce.globalAlpha-=.05),pt<800&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)),pt-=5):pt<150?(ce.clearRect(pt,$t,nt,lt),clearInterval(x),C=setInterval(l,83)):(pt>150&&pt<200&&(ce.globalAlpha-=.05),pt<300&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)),pt-=4)}function l(){ut=++ut%yt,At=ut*vt,ce.clearRect(It,bt,ht,vt),ce.drawImage(kt,ft,At,ht,vt,It,bt,ht,vt),Y>=1024?It>650?(ce.clearRect(It,bt,ht,vt),clearInterval(C),$("#music-walk")[0].pause()):(It<590?ce.globalAlpha+=.3:It>590&&It<600?ce.globalAlpha=1:It>620&&(ce.globalAlpha-=.05),It+=3):It>270?(ce.clearRect(It,bt,ht,vt),clearInterval(C),$("#music-walk")[0].pause()):(It>150&&It<190?ce.globalAlpha+=.3:It>190&&It<220?ce.globalAlpha=1:It>220&&It<270&&(ce.globalAlpha-=.05),It+=2)}function i(){Ct=++Ct%Tt,qt=Ct*xt,ge.clearRect(Bt,Et,_t+10,xt+10),ge.drawImage(jt,St,qt,_t,xt,Bt,Et,_t,xt),15==++Lt&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0))}function g(){Xt=++Xt%Ft,Ot=Xt*Dt,de.clearRect(Mt,Wt,Pt+10,Dt+10),de.drawImage(Kt,zt,Ot,Pt,Dt,Mt,Wt,Pt,Dt),32==++Ht?($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)):22==Ht&&$(".stage-5-words h2").css({opacity:"1"})}function m(){Gt=++Gt%Jt,Ut=Gt*Vt,$e.clearRect(Yt,Zt,Nt+10,Vt+10),$e.drawImage(ta,Qt,Ut,Nt,Vt,Yt,Zt,Nt,Vt),29==ea?clearInterval(z):22==ea?(ea++,$("#stage-6").css({opacity:"0",transform:"translate(0, -100%)"}),ea++):ea++}function d(){ra=++ra%oa,na=ra*sa,he.clearRect(la,ia,aa+10,sa+10),he.drawImage(da,ca,na,aa,sa,la,ia,aa,sa),27==ma?(clearInterval(O),$("#stage-6_3, #stage-6_3_bg").css({opacity:"1",transform:"translate(0, 0)"}),H=setInterval(h,125)):24==ma?($("#stage-6_1").css({opacity:"0",transform:"translate(0, -100%)"}),ma++):ma++}function p(){wa=++wa%ha,ua=wa*$a,ue.clearRect(ya,fa,pa+10,$a+10),ue.drawImage(Ia,va,ua,pa,$a,ya,fa,pa,$a),30==Aa?(clearInterval(M),$("#stage-6_4").css({opacity:"1",transform:"translate(0, 0)"}),setTimeout(function(){$(".stage-6-words p").eq(1).css({opacity:"1",transform:"translate(0, 0px)"})},888),setTimeout(function(){$(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)},1888),W=setInterval(w,83)):27==Aa?($(".stage-6-words p").eq(0).css({opacity:"0",transform:"translate(0, -50px)"}),$("#music-camera")[0].pause(),Aa++):26==Aa?($("#stage-6_2").css({opacity:"0",transform:"translate(0, -100%)"}),Aa++):Aa++}function w(){Ra=++Ra%_a,Ca=Ra*ka,fe.clearRect(Ta,Sa,ba,ka),fe.drawImage(qa,xa,Ca,ba,ka,Ta,Sa,ba,ka)}function h(){ja=++ja%Pa,Xa=ja*La,ke.clearRect(Fa,za,Ea,La),ke.drawImage(Oa,Da,Xa,Ea,La,Fa,za,Ea,La)}function v(){Ka=++Ka%Na,Ga=Ka*Ha,_e.clearRect(Ja,Qa,Wa+10,Ha+10),_e.drawImage(Ua,Va,Ga,Wa,Ha,Ja,Qa,Wa,Ha),_e.font="14px Arial",Ka>4&&(Y>=1024?_e.fillText("爸爸進房間囉",250,282):_e.fillText("爸爸進房間囉",175,282),23==Ka?$("#music-switch")[0].play(0):Ka==Na-1&&(clearInterval(S),$(".downArrow").css({display:"block",color:"white"}),$.fn.fullpage.setAllowScrolling(!0)))}function u(){es=++es%ts,ss=es*Za,Ce.clearRect(rs,os,Ya,Za),Ce.drawImage(cs,as,ss,Ya,Za,rs,os,Ya,Za),es==ts-1?clearInterval(q):18==es?($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)):4==es&&$(".stage-8-words h2").css({transform:"translate(0, 0)",opacity:"1"})}function y(){is=++is%gs,ds=is*ls,Se.clearRect(ps,$s,ns+10,ls+10),Se.drawImage(hs,ms,ds,ns,ls,ps,$s,ns,ls),14==++ws&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0))}function f(){Is=++Is%bs,Rs=Is*As,Le.clearRect(_s,xs,fs+10,As+10),Le.drawImage(Cs,ks,Rs,fs,As,_s,xs,fs,As),48==++us&&ys<2?(D=setInterval(A,125),us=0,$(".thanks").eq(ys).css({opacity:"1",transform:"translateX(0)"})):36==us?$(".stage-10-words p").css({opacity:0}):6==us?$(".stage-10-words p").eq(0).css({opacity:1,transform:"translate(0, 0)"}):14==us?$(".stage-10-words p").eq(1).css({opacity:1,transform:"translate(0, 0)"}):16==us?1==ys&&(D=setInterval(A,125),us=0,$(".thanks").eq(ys).css({opacity:"1",transform:"translateX(0)"})):22==us?$(".stage-10-words p").eq(2).css({opacity:1,transform:"translate(0, 0)"}):2==us&&$("#music-stroll")[0].play()}function A(){$("#music-stroll")[0].pause(),Ls=++qs*Ss,Le.clearRect(js,Ps,Ts+10,Ss+10),Le.drawImage(Ds,Es,Ls,Ts,Ss,js,Ps,Ts,Ss),clearInterval(P),qs==Bs-1&&0==ys?(clearInterval(D),qs=0,$(".stage-10-words").css({opacity:0,tranistion:"translate(0, -50px)"}),P=setInterval(f,125),$(".thanks").eq(ys).css({opacity:"0",transform:"translateX(-10%)"}),$(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0),ys++):23==qs&&1==ys?(clearInterval(D),$(".downArrow").css({display:"block",color:"black"})):qs==Bs-1&&1==ys&&clearInterval(D)}function I(){zs=++zs%Os,Ws=zs*Fs,Pe.clearRect(Hs,Ks,Xs+10,Fs+10),Pe.drawImage(Ns,Ms,Ws,Xs,Fs,Hs,Ks,Xs,Fs)}function b(){Js=++Js%Qs,Ys=Js*Gs,Xe.clearRect(Zs,er,Vs+10,Gs+10),Xe.drawImage(tr,Us,Ys,Vs,Gs,Zs,er,Vs,Gs)}function k(){or=++or%cr,lr=or*rr,Me.clearRect(ir,gr,sr+10,rr+10),Me.drawImage(mr,nr,lr,sr,rr,ir,gr,sr,rr),or==cr-1?clearInterval(j):20==or&&($(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0))}var R,_,x,C,T,S,q,B,E,L,j,P,D,X,F,z,O,M,W,H,K,N,V=10,G=1==e()?"Mob":"PC",J=window.navigator.userAgent,Q=!!J.match(/iPad/i)||!!J.match(/iPhone/i),U=!!J.match(/WebKit/i),Y=(Q&&U&&J.match(/CriOS/i),$(window).width()),Z=$(window).height(),ee=$("body").height()-Z,te=Y>=768?"6px":"4px",ae=$("title").text();$("a").click(function(){ga("send",{hitType:"event",eventCategory:"超連結點擊",eventAction:"click",eventLabel:"["+G+"] ["+ae+"] ["+$(this).attr("href")+"]"})}),$("#scroll-down").click(function(){ga("send",{hitType:"event",eventCategory:"ham bar",eventAction:"click",eventLabel:"["+G+"] ["+ae+"] [scroll down]"})}),$(".line-share").click(function(t){ga("send",{hitType:"event",eventCategory:"Line Share",eventAction:"click",eventLabel:"["+G+"] ["+ae+"] [line share]"}),e()?window.location.href="//line.me/R/msg/text/?"+ae+"%0D%0A%0D%0A"+$('meta[property="og:description"]').attr("content")+"%0D%0A%0D%0A"+window.location.href:window.open("https://lineit.line.me/share/ui?url="+window.location.href)}),function(){var e=navigator.userAgent||navigator.vendor||window.opera;return e.indexOf("FBAN")>-1||e.indexOf("FBAV")>-1}()&&($(".downArrow").css({bottom:"20vh"}),$(".skip").css({bottom:"20vh"}),$(".section").css({"margin-top":"-5%"}),window.addEventListener("resize",function(){$(window).scrollTop()<$(".content").eq(0).offset().top&&r()})),$(".voice-state img").on("click",function(){var e=$(this).attr("src");$(this).removeClass("blink"),"src/image/off.png"==e?($(this).attr("src","src/image/on.png"),$("#music-main")[0].play(),t(),N>$(".content").eq(0).offset().top?ga("send",{hitType:"event",eventCategory:"閱讀時開聲音",eventAction:"click",eventLabel:"閱讀時開聲音"}):ga("send",{hitType:"event",eventCategory:"開聲音",eventAction:"click",eventLabel:"開聲音"})):($(this).attr("src","src/image/off.png"),a(),ga("send",{hitType:"event",eventCategory:"關聲音",eventAction:"click",eventLabel:"關聲音"}))}),$(window).on("scroll",function(){for(var e=(N=$(window).scrollTop())/ee*100;V<=Math.floor(e);V+=10)ga("send",{hitType:"event",eventCategory:"read",eventAction:"scroll",eventLabel:"["+G+"] ["+ae+"] [page read "+V+"%]"});N>Z?($("#indicator").css("opacity",1),$("#head").css("top",te)):($("#indicator").css("opacity",0),$("#head").css("top","0")),$("#indicator-bar").css("width",N/ee*100+"%"),N>$(".content").eq(0).offset().top-.07*Z&&N<$(".content").eq(0).offset().top&&($("#head").removeClass("Bgc-TP"),$("#indicator").addClass("mainColor")),N>$(".section").eq(0).offset().top&&$(".downArrow").css({display:"none"})}),Y>=1024?$("#stage-1").attr("src","src/image/animate-sprite/stage-1PC.mp4"):$("#stage-1").attr("src","src/image/animate-sprite/stage-1Mob.mp4");var se=document.getElementById("stage-2"),re=se.getContext("2d");se.width=375,se.height=667;var oe=document.getElementById("stage-3"),ce=oe.getContext("2d"),ne=document.getElementById("stage-3_1"),le=ne.getContext("2d");Y>=1024?(oe.width=880,oe.height=495,ne.width=880,ne.height=495):(oe.width=375,oe.height=667,ne.width=375,ne.height=667);var ie=document.getElementById("stage-4"),ge=ie.getContext("2d");ie.width=375,ie.height=667;var me=document.getElementById("stage-5"),de=me.getContext("2d");me.width=375,me.height=667;var pe=document.getElementById("stage-6"),$e=pe.getContext("2d");pe.width=375,pe.height=667;var we=document.getElementById("stage-6_1"),he=we.getContext("2d");we.width=375,we.height=667;var ve=document.getElementById("stage-6_2"),ue=ve.getContext("2d");ve.width=375,ve.height=667;var ye=document.getElementById("stage-6_3"),fe=ye.getContext("2d");ye.width=375,ye.height=667;var Ae=document.getElementById("stage-6_3_bg"),Ie=Ae.getContext("2d");Ae.width=375,Ae.height=667;var be=document.getElementById("stage-6_4"),ke=be.getContext("2d");be.width=375,be.height=667;var Re=document.getElementById("stage-7"),_e=Re.getContext("2d");Y>=1024?(Re.width=520,Re.height=667):(Re.width=375,Re.height=667);var xe=document.getElementById("stage-8"),Ce=xe.getContext("2d");xe.width=375,xe.height=667;var Te=document.getElementById("stage-9"),Se=Te.getContext("2d");Te.width=375,Te.height=667;var qe=document.getElementById("stage-9_bg"),Be=qe.getContext("2d");qe.width=375,qe.height=667;var Ee=document.getElementById("stage-10"),Le=Ee.getContext("2d");Ee.width=375,Ee.height=667;var je=document.getElementById("stage-11"),Pe=je.getContext("2d");je.width=375,je.height=667;var De=document.getElementById("stage-11_1"),Xe=De.getContext("2d");De.width=375,De.height=667;var Fe=document.getElementById("stage-11_2"),ze=Fe.getContext("2d");Fe.width=375,Fe.height=667;var Oe=document.getElementById("stage-12"),Me=Oe.getContext("2d");Oe.width=375,Oe.height=667;var We=375,He=667,Ke=0,Ne=25,Ve=0,Ge=0,Je=0,Qe=0,Ue=new Image,Ye=375,Ze=667,et=0,tt=25,at=0,st=0,rt=0,ot=0,ct=new Image,nt=75,lt=112,it=0,gt=36,mt=0,dt=0,pt=0,$t=0;Y>=1024?(pt=880,$t=425):(pt=390,$t=575);var wt=new Image;ce.transform(.7,0,0,.7,0,0);var ht=39,vt=55,ut=0,yt=36,ft=0,At=0,It=0,bt=0;Y>=1024?(It=560,bt=417):(It=180,bt=565);var kt=new Image,Rt=new Image,_t=375,xt=667,Ct=0,Tt=24,St=0,qt=0,Bt=80,Et=200,Lt=0,jt=new Image;ge.transform(.8,0,0,.8,0,0);var Pt=375,Dt=667,Xt=0,Ft=24,zt=0,Ot=0,Mt=0,Wt=0,Ht=0,Kt=new Image,Nt=213,Vt=291,Gt=0,Jt=24,Qt=0,Ut=0,Yt=130,Zt=50,ea=0,ta=new Image,aa=140,sa=329,ra=0,oa=24,ca=0,na=0,la=50,ia=240,ma=0,da=new Image,pa=269,$a=398,wa=0,ha=24,va=0,ua=0,ya=90,fa=170,Aa=0,Ia=new Image,ba=128,ka=221,Ra=0,_a=36,xa=0,Ca=0,Ta=140,Sa=310,qa=new Image,Ba=new Image,Ea=124,La=177,ja=0,Pa=24,Da=0,Xa=0,Fa=70,za=290,Oa=new Image,Ma=new Image,Wa=0;Wa=Y>=1024?520:375;var Ha=667,Ka=0,Na=32,Va=0,Ga=0,Ja=0,Qa=20,Ua=new Image,Ya=375,Za=667,es=0,ts=24,as=0,ss=0,rs=0,os=0,cs=new Image,ns=166,ls=148,is=0,gs=25,ms=0,ds=0,ps=120,$s=200,ws=0,hs=new Image,vs=new Image;Be.transform(.85,0,0,.85,0,0);var us=0,ys=0,fs=168,As=290,Is=0,bs=24,ks=0,Rs=0,_s=0,xs=250,Cs=new Image,Ts=145,Ss=287,qs=0,Bs=32,Es=0,Ls=0,js=0,Ps=250,Ds=new Image,Xs=375,Fs=667,zs=0,Os=24,Ms=0,Ws=0,Hs=0,Ks=0,Ns=new Image,Vs=375,Gs=667,Js=0,Qs=24,Us=0,Ys=0,Zs=0,er=0,tr=new Image,ar=new Image,sr=375,rr=667,or=0,cr=36,nr=0,lr=0,ir=0,gr=0,mr=new Image;$(".fullpage").fullpage({navigation:!0,recordHistory:!1,scrollingSpeed:777,lazyLoading:!0,afterLoad:function(e,t){K=t,$.fn.fullpage.setAllowScrolling(!1),$("#section-"+t).css({opacity:"1","z-index":50}),$("#head").addClass("Bgc-TP"),bar_witdh=t/($(".fullpage").children().length-1)*100,$("#indicator-bar").css("width",bar_witdh+"%"),$("#indicator").removeClass("mainColor"),ga("send",{hitType:"event",eventCategory:"插畫(15張)",eventAction:"scroll",eventLabel:"看到第"+t+"張"}),1==t&&($("#stage-1")[0].play(),$(".fixed_pic").css("opacity","1"),$.fn.fullpage.setAutoScrolling(!0),$.fn.fullpage.setAllowScrolling(!0),$.fn.fullpage.setFitToSection(!0),$.fn.fullpage.setScrollingSpeed(777),null!==localStorage.getItem("udn-readed")?$(".skip").css({display:"block"}):$(".downArrow").css({display:"block",color:"white"})),2==t&&(Ue.src="src/image/animate-sprite/stage-2-start.jpg",ct.src="src/image/animate-sprite/stage-2-end.jpg",wt.src="src/image/animate-sprite/stage-3-walk1.png",kt.src="src/image/animate-sprite/stage-3-walkback.png",Rt.src="src/image/animate-sprite/stage-3-bg.png",$(".page-black").eq(0).css({transform:"translate(0, 0)"}),$(".downArrow").css({display:"block",color:"white"}),"src/image/off.png"==$(".voice-state img").attr("src")&&$(".voice-state img").addClass("blink"),$.fn.fullpage.setAllowScrolling(!0)),3==t&&(jt.src="src/image/animate-sprite/stage-4-kitchen.jpg",ta.src="src/image/animate-sprite/stage-6-foodInfo.png",da.src="src/image/animate-sprite/stage-6-foodSafe.png",Ia.src="src/image/animate-sprite/stage-6-speech.png",Ba.src="src/image/animate-sprite/stage-6-lab-bg.png",Ma.src="src/image/animate-sprite/stage-6-lab-bg2.png",$(".voice-state img").removeClass("blink"),$(".page-black").eq(0).removeAttr("style"),$(".page-black").eq(1).css({transform:"translate(0, 0)"}),$(".downArrow").css({display:"block",color:"white"}),$.fn.fullpage.setAllowScrolling(!0)),4==t&&(Kt.src="src/image/animate-sprite/stage-5-car.jpg",qa.src="src/image/animate-sprite/stage-6-doctor.png",Oa.src="src/image/animate-sprite/stage-6-cpu.png",vs.src="src/image/animate-sprite/stage-9-bg.png",ar.src="src/image/animate-sprite/stage-11-bg.png",$(".page-black").eq(1).removeAttr("style"),$("#stage-2").css({transform:"translateX(0)",opacity:"1"}),R=setInterval(o,100)),5==t&&(Ua.src=Y>=1024?"src/image/animate-sprite/stage-7-roomW.jpg":"src/image/animate-sprite/stage-7-room.jpg",re.clearRect(0,0,se.width,se.height),Ke=0,et=0,$("#stage-2").removeAttr("style"),$(".stage-2-words").removeAttr("style"),$(".stage-3-words").css({transform:"translate(0, 15%)",opacity:"1"}),$("#music-walk")[0].play(),Y>=1024?le.drawImage(Rt,0,0,810,369,35,126,810,369):le.drawImage(Rt,0,0,810,369,-230,230,810,369),x=setInterval(n,83),$.fn.fullpage.setScrollingSpeed(1777)),6==t&&(cs.src="src/image/animate-sprite/stage-8-bed.jpg",ce.clearRect(0,0,oe.width,oe.height),ce.globalAlpha=1,Y>=1024?(pt=880,It=560):(pt=390,It=180),$(".stage-3-words").removeAttr("style"),$(".stage-4-words p").css({transform:"translate(0, 0)",opacity:"1"}),$("#stage-4").css({transform:"translate(0, 0)",opacity:"1"}),$("#music-cooking")[0].play(),F=setInterval(i,125)),7==t&&(hs.src="src/image/animate-sprite/stage-9-smoke.png",Cs.src="src/image/animate-sprite/stage-10-stroll.png",Ds.src="src/image/animate-sprite/stage-10-wave.png",ge.clearRect(0,0,ie.width,ie.height),Lt=0,$(".stage-4-words p").removeAttr("style"),$("#stage-4").removeAttr("style"),$("#stage-5").css({transform:"translate(0, 0)",opacity:"1"}),$(".stage-5-words p").css({opacity:"1"}),$("#music-driving")[0].play(),T=setInterval(g,125)),8==t&&(Ns.src="src/image/animate-sprite/stage-11-man.jpg",tr.src="src/image/animate-sprite/stage-11-woman.jpg",mr.src="src/image/animate-sprite/stage-12-wash.jpg",Ht=0,de.clearRect(0,0,me.width,me.height),clearInterval(T),$("#stage-5").removeAttr("style"),$(".stage-5-words p").removeAttr("style"),$(".stage-5-words h2").removeAttr("style"),$e.drawImage(ta,Qt,Ut,Nt,Vt,Yt,Zt,Nt,Vt),he.drawImage(da,ca,na,aa,sa,la,ia,aa,sa),ue.drawImage(Ia,va,ua,pa,$a,ya,fa,pa,$a),Ie.drawImage(Ba,0,0,360,395,75,150,360,395),ke.drawImage(Ma,0,0,124,208,0,459,124,208),$("#stage-6").css({opacity:"1",transform:"translate(0, 0)"}),setTimeout(function(){$("#stage-6_1").css({opacity:"1",transform:"translate(0, 0)"})},222),setTimeout(function(){$("#stage-6_2").css({opacity:"1",transform:"translate(0, 0)"})},555),setTimeout(function(){$("#music-camera")[0].play(),z=setInterval(m,83),O=setInterval(d,83),M=setInterval(p,83)},1433),setTimeout(function(){$(".stage-6-words p").eq(0).css({opacity:"1",transform:"translate(0, 0)"})},1666)),9==t&&($e.clearRect(0,0,pe.width,pe.height),he.clearRect(0,0,we.width,we.height),ue.clearRect(0,0,ve.width,ve.height),fe.clearRect(0,0,ye.width,ye.height),ke.clearRect(0,0,be.width,be.height),$("#stage-6").removeAttr("style"),$("#stage-6_1").removeAttr("style"),$("#stage-6_2").removeAttr("style"),$("#stage-6_3").removeAttr("style"),$("#stage-6_3_bg").removeAttr("style"),$("#stage-6_4").removeAttr("style"),$(".stage-6-words p").eq(0).removeAttr("style"),$(".stage-6-words p").eq(1).removeAttr("style"),ea=0,ma=0,Aa=0,S=setInterval(v,125),$("#stage-7").css({opacity:"1"})),10==t&&(_e.clearRect(0,0,Re.width,Re.height),$("#stage-7").removeAttr("style"),$(".stage-7-words").removeAttr("style"),$(".stage-8-words p").eq(0).css({opacity:"1",transform:"translate(0, 0)"}),setTimeout(function(){$("#stage-8").css({opacity:"1",transform:"translate(0, 0)"}),q=setInterval(u,125)},777)),11==t&&(es=0,$(".stage-8-words p").removeAttr("style"),$(".stage-8-words h2").removeAttr("style"),$("#stage-8").removeAttr("style"),Ce.clearRect(0,0,xe.width,xe.height),$(".stage-9-words p").css({opacity:"1",transform:"translate(0, 0)"}),Be.drawImage(vs,0,0,413,416,12,250,413,416),B=setInterval(y,125),setTimeout(function(){$("#stage-9, #stage-9_bg").css({opacity:"1",transform:"translate(0, 0)"})},1222)),12==t&&(ws=0,Se.clearRect(0,0,Te.width,Te.height),Be.clearRect(0,0,qe.width+100,qe.height+100),$(".stage-9-words p").removeAttr("style"),$("#stage-9").removeAttr("style"),$("#stage-9_bg").removeAttr("style"),$("#music-street")[0].play(),P=setInterval(f,125)),13==t&&(us=0,ys=0,qs=0,Le.clearRect(0,0,Ee.width,Ee.height),$(".thanks").removeAttr("style"),$(".stage-10-words").removeAttr("style"),$(".stage-10-words p").removeAttr("style"),$(".stage-11-words p").eq(0).css({opacity:"1"}),ze.drawImage(ar,0,0,302,322,36,180,302,322),E=setInterval(I,125),setTimeout(function(){$("#stage-11").css({opacity:"0"}),$(".stage-11-words p").eq(1).css({opacity:"1"}),clearInterval(E),L=setInterval(b,125)},2e3),setTimeout(function(){$("#stage-11_1").css({opacity:"0"}),$(".stage-11-words p").eq(2).css({opacity:"1"}),clearInterval(L)},4500),setTimeout(function(){$(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)},4666)),14==t&&(Pe.clearRect(0,0,je.width,je.height),Xe.clearRect(0,0,De.width,De.height),$("#stage-11").removeAttr("style"),$("#stage-11_1").removeAttr("style"),$(".stage-11-words p").removeAttr("style"),$(".stage-12-words p").eq(0).css({opacity:1}),setTimeout(function(){$(".stage-12-words p").eq(1).css({opacity:1}),$("#stage-12").css({opacity:1}),j=setInterval(k,125)},1e3),setTimeout(function(){$(".stage-12-words p").eq(2).css({opacity:1})},2e3)),15==t&&(Me.clearRect(0,0,Oe.width,Oe.height),or=0,$(".stage-12-words p").removeAttr("style"),$("#stage-12").removeAttr("style"),$(".stage-13").eq(0).css({opacity:"1"}),$(".stage-13-words").css({transform:"translate(0, -20%)",opacity:1}),$.fn.fullpage.setAutoScrolling(!1),$.fn.fullpage.setFitToSection(!1),$("html, body").css({"overflow-x":"hidden",height:"initail"}),setTimeout(function(){$(".stage-13").eq(1).css({opacity:"1"}),$(".stage-13-words h2").css({opacity:"1"}),$(window).scrollTop()<$(".content").eq(0).offset().top&&$(".downArrow").css({display:"block",color:"black"}),$.fn.fullpage.setAllowScrolling(!0)},1666),setTimeout(function(){$(".stage-13").eq(2).css({opacity:"1"})},3333),localStorage.setItem("udn-readed","readed"))},onLeave:function(e,t,a){s(),$(".downArrow").css({display:"none"}),$(".skip").css({display:"none"}),$("#section-"+e).css({opacity:0,"z-index":0}),"up"==a&&ga("send",{hitType:"event",eventCategory:"動畫回上一頁",eventAction:"scroll",eventLabel:"第幾"+e+"張,回頭看"}),1!=$("#indicator").css("opacity")&&($("#indicator").css({opacity:1}),$("#indicator-bar").css("width","0")),1==e&&$(".fixed_pic").css("opacity","1"),2==e&&"up"==a&&$(".voice-state img").removeClass("blink"),4==e&&("up"==a?(Ke=0,et=0,re.clearRect(0,0,se.width,se.height),$(".stage-2-words").removeAttr("style"),$("#stage-2").removeAttr("style")):($("#section-4").css({transition:"3s"}),_=setInterval(c,100),$.fn.fullpage.setScrollingSpeed(2333))),5==e&&"up"==a&&(ce.clearRect(0,0,oe.width,oe.height),ce.globalAlpha=1,Y>=1280?(pt=880,It=560):(pt=390,It=180),$(".stage-3-words").removeAttr("style")),6==e&&"up"==a&&(Lt=0,ge.clearRect(Bt,Et,ie.width,ie.height),$(".stage-4-words p").removeAttr("style"),$("#stage-4").removeAttr("style")),7==e&&("up"==a?(Ht=0,clearInterval(T),de.clearRect(0,0,me.width,me.height),$("#stage-5").removeAttr("style"),$(".stage-5-words p").removeAttr("style"),$(".stage-5-words h2").removeAttr("style")):$("#stage-5").css({transform:"translate(75%, 20%)",opacity:"0"})),8==e&&("up"==a?($e.clearRect(0,0,pe.width,pe.height),he.clearRect(0,0,we.width,we.height),ue.clearRect(0,0,ve.width,ve.height),fe.clearRect(0,0,ye.width,ye.height),ke.clearRect(0,0,be.width,be.height),$("#stage-6").removeAttr("style"),$("#stage-6_1").removeAttr("style"),$("#stage-6_2").removeAttr("style"),$("#stage-6_3").removeAttr("style"),$("#stage-6_3_bg").removeAttr("style"),$("#stage-6_4").removeAttr("style"),$(".stage-6-words p").eq(0).removeAttr("style"),$(".stage-6-words p").eq(1).removeAttr("style"),ea=0,ma=0,Aa=0):($("#section-8").css({transition:"3s"}),$("#stage-6_3, #stage-6_3_bg").css({opacity:"0",transform:"translate(0, -130px)"}),$(".stage-6-words p").eq(1).css({opacity:"0",transform:"translate(0, -70px)"}),setTimeout(function(){$("#stage-6_4").css({opacity:"0",transform:"translate(0, -140px)"})},111))),9==e&&"up"==a&&(_e.clearRect(0,0,Re.width,Re.height),$("#stage-7").removeAttr("style"),$(".stage-7-words").removeAttr("style")),10==e&&"up"==a&&(es=0,Ce.clearRect(0,0,xe.width,xe.height),$(".stage-8-words p").removeAttr("style"),$(".stage-8-words h2").removeAttr("style"),$("#stage-8").removeAttr("style")),11==e&&"up"==a&&(ws=0,Se.clearRect(0,0,Te.width,Te.height),Be.clearRect(0,0,qe.width+300,qe.height+300),$(".stage-9-words p").removeAttr("style"),$("#stage-9").removeAttr("style"),$("#stage-9_bg").removeAttr("style")),12==e&&("up"==a?(us=0,ys=0,qs=0,Le.clearRect(0,0,Ee.width,Ee.height),$(".thanks").removeAttr("style"),$(".stage-10-words").removeAttr("style"),$(".stage-10-words p").removeAttr("style")):(1==ys&&qs>22&&(D=setInterval(A,125)),$(".thanks").eq(ys).css({opacity:"0",transform:"translateX(-10%)"}))),13==e&&"up"==a&&(Pe.clearRect(0,0,je.width,je.height),Xe.clearRect(0,0,De.width,De.height),$("#stage-11").removeAttr("style"),$("#stage-11_1").removeAttr("style"),$(".stage-11-words p").removeAttr("style")),14==e&&"up"==a&&(or=0,Me.clearRect(0,0,Oe.width,Oe.height),$(".stage-12-words p").removeAttr("style"),$("#stage-12").removeAttr("style")),15==e&&"up"==a&&($(".stage-13-words h2").removeAttr("style"),$(".stage-13-words p").removeAttr("style"),$(".stage-13").removeAttr("style")),3==t&&$(".fixed_pic").css("opacity","1"),4==t&&$(".fixed_pic").css("opacity","0")}}),$(".downArrow").click(function(e){e.preventDefault(),$.fn.fullpage.moveSectionDown(),ga("send",{hitType:"event",eventCategory:"下一頁",eventAction:"click",eventLabel:"第幾"+K+"點了下一頁箭頭"}),15==K&&$("html, body").animate({scrollTop:$(".content").eq(0).offset().top},888)}),$(".skip").click(function(e){e.preventDefault(),$.fn.fullpage.setAutoScrolling(!1),$.fn.fullpage.setFitToSection(!1),$("html, body").animate({scrollTop:$(".content").eq(0).offset().top},888),ga("send",{hitType:"event",eventCategory:"skip",eventAction:"click",eventLabel:"點擊跳過動畫(skip)"}),$(this).css({display:"none"}),$(".fixed_pic").css({opacity:0})})});