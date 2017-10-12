($(document).ready(function(){
    
    var SIDdrawDoor;
    var SIDdrawDoorBack;
    var SIDdrawShadow;
    var SIDdrawShadowBack;
    var SIDdrawWalk1;
    var SIDdrawWalkBack;
    var SIDdrawCar;
    var SIDdrawRoom;
    var SIDdrawBed;
    var SIDdrawSmoke;
    var SIDdrawMan;
    var SIDdrawWoman;
    var SIDdrawWash;
    var SIDdrawStroll;
    var SIDdrawWave;
    var SIDdrawStrollToFade;
    var SIDdrawKitchen;

    var scroll_now;
    var read_progress = 10;
    var isMob = detectmob();
    var platform = (isMob == true) ? 'Mob' : 'PC';
    var progress = []
    var movie_progress = [null]

    function detectmob() {
        if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ){
            return true;
        }
        else {
            return false;
        }
    }

    function moviePlay(id){
        $('#movie-' + id).get(0).play();
        if(progress[id - 1] == null){
            progress[id - 1] = setInterval(function(){
                var curTime = $('#movie-' + id).get(0).currentTime;
                var temp = curTime / $('#movie-' + id).get(0).duration * 100;
                if(temp > 0.6){
                    $('.video-play[data-target="' + id + '"]').css('opacity', 0);
                }
                if(Math.floor(curTime/5) > movie_progress){
                    movie_progress = Math.floor(curTime/5)
                }
                
                $('#progress-bar-' + id).css('width', temp + '%')
            }, 600)
        }
    }
        
    function moviePause(id){
        $('#movie-' + id).get(0).pause();
        $('.video-play[data-target="' + id + '"]').css('opacity', 1);
        if(progress[id-1]){
            clearInterval(progress[id-1])
            progress[id-1] = null;
        }
    }

    function movieReplay(id){
        $('#movie-' + id).get(0).currentTime = 0;
        $('#movie-' + id).get(0).play();
        $('.progress-bar').css('width', 0);
        clearInterval(progress[id - 1])
        progress[id - 1] = setInterval(function(){
            var temp = $('#movie-' + id).get(0).currentTime / $('#movie-' + id).get(0).duration * 100
            $('#progress-bar-' + id).css('width', temp + '%')
        }, 600)
    }

    function movieVolume(id){
        
        if($('#movie-' + id).get(0).muted == true){
            $('#movie-' + id).get(0).muted = false;
            $('.volume[data-target="' + id + '"]').removeClass('fa-volume-off').addClass('fa-volume-up')
            $('.volume-text[data-target="' + id + '"]').text('點按關聲音');
        }
        else{
            $('#movie-' + id).get(0).muted = true;
            $('.volume[data-target="' + id + '"]').removeClass('fa-volume-up').addClass('fa-volume-off')
            $('.volume-text[data-target="' + id + '"]').text('點按開聲音');
        }
    }

    let w = $(window).width()
    let h = $(window).height()
    let total_height = $('body').height() - h
    const headTop = (w >= 768) ? '6px' : '4px'
    var title = $('title').text();

    $('a').click(function(){
        ga("send", {
            "hitType": "event",
            "eventCategory": "超連結點擊",
            "eventAction": "click",
            "eventLabel": "[" + platform + "] [" + title + "] [" + $(this).attr('href') + "]"
        });
    });

    $('#scroll-down').click(function(){
        ga("send", {
            "hitType": "event",
            "eventCategory": "ham bar",
            "eventAction": "click",
            "eventLabel": "[" + platform + "] [" + title + "] [scroll down]"
        });			
    });

    $('.line-share').click(function(e){
        ga("send", {
            "hitType": "event",
            "eventCategory": "Line Share",
            "eventAction": "click",
            "eventLabel": "[" + platform + "] [" + title + "] [line share]"
        });
        if(detectmob()){
			//手機
			window.location.href="//line.me/R/msg/text/?" + title + "%0D%0A%0D%0A" + $('meta[property="og:description"]').attr('content') + "%0D%0A%0D%0A" + window.location.href;
		}else{
			window.open("https://lineit.line.me/share/ui?url="+window.location.href);
		}
    });

    $(".voice-state").on("click", function(){
        console.log("voice-state");
        $(".mute_bar").toggleClass('mute_bar-mute');
    });

    $(window).on('scroll', function(){

        scroll_now = $(window).scrollTop();

        var cur_scroll = scroll_now/total_height * 100;

        for(;read_progress<=Math.floor(cur_scroll);read_progress+=10){
            ga("send", {
                "hitType": "event",
                "eventCategory": "read",
                "eventAction": "scroll",
                "eventLabel": "[" + platform + "] [" + title + "] [page read " + read_progress + "%]"
            });
        }

        if(scroll_now > h){
            $('#indicator').css('opacity', 1)
            $('#head').css('top', headTop)
        }
        else{
            $('#indicator').css('opacity', 0)
            $('#head').css('top', '0')
        }

        $('#indicator-bar').css('width', scroll_now/total_height * 100 + '%');

    })
    $(".stage-2-words").click(function(){
        ctx_2.clearRect(0, 0, stage_2.width, stage_2.height);
        console.log("clear");
        console.log(ctx_2);
    })

    //Width and height for our canvas
    var canvasWidth = 375; 
    var canvasHeight = 667;

    //Getting the canvas 
    // 放在哪個ID的canvas    

    var stage_2 = document.getElementById("stage-2");
    var ctx_2 = stage_2.getContext("2d");
    stage_2.width = canvasWidth;
    stage_2.height = canvasHeight; 
    
    var stage_3 = document.getElementById("stage-3");
    var ctx_3 = stage_3.getContext("2d");
    stage_3.width = canvasWidth;
    stage_3.height = canvasHeight; 

    var stage_4 = document.getElementById("stage-4");
    var ctx_4 = stage_4.getContext("2d");
    stage_4.width = canvasWidth;
    stage_4.height = canvasHeight;     

    var stage_5 = document.getElementById("stage-5");
    var ctx_5 = stage_5.getContext("2d");
    stage_5.width = canvasWidth;
    stage_5.height = canvasHeight; 

    var stage_6 = document.getElementById("stage-6");
    var ctx_6 = stage_6.getContext("2d");
    stage_6.width = canvasWidth;
    stage_6.height = canvasHeight;     

    var stage_7 = document.getElementById("stage-7");
    var ctx_7 = stage_7.getContext("2d");
    stage_7.width = canvasWidth;
    stage_7.height = canvasHeight;    

    var stage_8 = document.getElementById("stage-8");
    var ctx_8 = stage_8.getContext("2d");
    stage_8.width = canvasWidth;
    stage_8.height = canvasHeight;  

    var stage_9 = document.getElementById("stage-9");
    var ctx_9 = stage_9.getContext("2d");
    stage_9.width = canvasWidth;
    stage_9.height = canvasHeight;

    var stage_10 = document.getElementById("stage-10");
    var ctx_10 = stage_10.getContext("2d");
    stage_10.width = canvasWidth;
    stage_10.height = canvasHeight;    

    var stage_11 = document.getElementById("stage-11");
    var ctx_11 = stage_11.getContext("2d");
    stage_11.width = canvasWidth;
    stage_11.height = canvasHeight;    

    var stage_11_1 = document.getElementById("stage-11_1");
    var ctx_11_1 = stage_11_1.getContext("2d");
    stage_11_1.width = canvasWidth;
    stage_11_1.height = canvasHeight;

    var stage_12 = document.getElementById("stage-12");
    var ctx_12 = stage_12.getContext("2d");
    stage_12.width = canvasWidth;
    stage_12.height = canvasHeight;       

    var doorWidth = 312; 
    var doorHeight = 487; 
    var doorCurFrame = 0; 
    var doorFrameCount = 20;
    var doorSrcX = 0; 
    var doorSrcY = 0; 
    var doorX=20;
    var doorY=100; 

    var door = new Image(); 
    door.src = "src/image/animate-sprite/stage-2-door.png";
    
    /////////////////srage-2
    
    function drawDoorTo(){
        //Updating the frame index 
        if(doorCurFrame == doorFrameCount -1){
            clearInterval(SIDdrawDoor);
            
        } else {
            doorCurFrame++
        }
        doorSrcY = doorCurFrame * doorHeight; 
        ctx_2.clearRect(doorX, doorY, doorWidth, doorHeight);
        ctx_2.imageSmoothingEnabled = false;
        ctx_2.globalAlpha = 1;
        ctx_2.drawImage(door,doorSrcX, doorSrcY, doorWidth, doorHeight, doorX, doorY, doorWidth, doorHeight); 
    }
    function drawDoorBack(){
        if(doorCurFrame !== 0){
            doorCurFrame --
        } else{
            clearInterval(SIDdrawDoorBack)
        }
        doorSrcY = doorCurFrame * doorHeight;
        ctx_2.globalAlpha = 1; 
        ctx_2.clearRect(doorX, doorY, 0, 0);
        ctx_2.drawImage(door,doorSrcX, doorSrcY, doorWidth, doorHeight, doorX, doorY, doorWidth, doorHeight); 
    }
    
    // shadow
    
    var shadowWidth = 145; 
    var shadowHeight = 251; 
    var shadowCurFrame = 0; 
    var shadowFrameCount = 8;
    var shadowSrcX = 0; 
    var shadowSrcY = 0; 
    var shadowX= 100;
    var shadowY= 335; 
    
    var shadow = new Image(); 
    shadow.src = "src/image/animate-sprite/stage-2-shadow.png";
    /////////////////
    
    function drawShadowTo(){
        //Updating the frame index 
        if(shadowCurFrame == shadowFrameCount -1){
            clearInterval(SIDdrawShadow)
        } else {
            shadowCurFrame = ++shadowCurFrame % shadowFrameCount; 
        }
        shadowSrcY = shadowCurFrame * shadowHeight; 
        ctx_2.clearRect(shadowX, shadowY, 0, 0);
        ctx_2.globalAlpha = 0.35;
        ctx_2.drawImage(shadow, shadowSrcX, shadowSrcY, shadowWidth, shadowHeight, shadowX, shadowY, shadowWidth, shadowHeight);  
    }
    function drawShadowBack(){
        //Updating the frame index 
         if(shadowCurFrame !== 0){
            shadowCurFrame --
        } else{
            clearInterval(SIDdrawShadowBack)
        }
        shadowSrcY = shadowCurFrame * shadowHeight; 
        ctx_2.clearRect(shadowX, shadowY, 0, 0);
        ctx_2.globalAlpha = 0.35;
        ctx_2.drawImage(shadow, shadowSrcX, shadowSrcY, shadowWidth, shadowHeight, shadowX, shadowY, shadowWidth, shadowHeight);  
    }    

//////srage-3

    var walk1Width = 75; 
    var walk1Height = 112; 
    var walk1CurFrame = 0; 
    var walk1FrameCount = 36;
    var walk1SrcX = 0; 
    var walk1SrcY = 0; 
    var walk1X = 300;
    var walk1Y= 340; 


    var walk1 = new Image(); 
    walk1.src = "src/image/animate-sprite/stage-3-walk1.png";

    function drawWalk1To(){
        //Updating the frame index 
        walk1CurFrame = ++walk1CurFrame % walk1FrameCount; 
        walk1SrcY = walk1CurFrame * walk1Height; 
        ctx_3.clearRect(walk1X, walk1Y, walk1Width+10, walk1Height+10);
        ctx_3.drawImage(walk1, walk1SrcX, walk1SrcY, walk1Width, walk1Height, walk1X, walk1Y, walk1Width, walk1Height);
        if(walk1X < 80){
            ctx_3.clearRect(0, 0, stage_3.width, stage_3.height);
            clearInterval(SIDdrawWalk1)
        } else {
            if( walk1X > 80 && walk1X < 130){
                ctx_3.globalAlpha -= 0.05;
            }
            walk1X -= 3
        }
    }

    var walkBackWidth = 39; 
    var walkBackHeight = 55; 
    var walkBackCurFrame = 0; 
    var walkBackFrameCount = 36;
    var walkBackSrcX = 0; 
    var walkBackSrcY = 0; 
    var walkBackX = 100;
    var walkBackY= 315; 


    var walkBack = new Image(); 
    walkBack.src = "src/image/animate-sprite/stage-3-walkback.png";

    function drawWalkBack(){
        //Updating the frame index 
        walkBackCurFrame = ++walkBackCurFrame % walkBackFrameCount; 
        walkBackSrcY = walkBackCurFrame * walkBackHeight; 
        ctx_3.clearRect(walkBackX, walkBackY, walkBackWidth+10, walkBackHeight+10);
        ctx_3.drawImage(walkBack, walkBackSrcX, walkBackSrcY, walkBackWidth, walkBackHeight, walkBackX, walkBackY, walkBackWidth, walkBackHeight);
        if(walkBackX > 250){
            ctx_3.clearRect(0, 0, stage_3.width, stage_3.height);
            clearInterval(SIDdrawWalkBack)
        } else {
            if( walkBackX > 100 && walkBackX < 110){
                ctx_3.globalAlpha += 0.3;
            } else if (walkBackX > 110 && walkBackX < 200){
                ctx_3.globalAlpha = 1;
            } else if (walkBackX > 200 && walkBackX < 250){
                ctx_3.globalAlpha -= 0.05;
            }
            walkBackX += 3
        }
    } 
// stage-4

    var kitchenWidth = 356; 
    var kitchenHeight = 470; 
    var kitchenCurFrame = 0; 
    var kitchenFrameCount = 36;
    var kitchenSrcX = 0; 
    var kitchenSrcY = 0; 
    var kitchenX = 90;
    var kitchenY= 270; 


    var kitchen = new Image(); 
    kitchen.src = "src/image/animate-sprite/stage-4-kitchen.png";
    ctx_4.transform(.8, 0, 0, .8, 0, 0);
    function drawKitchen(){
        //Updating the frame index 
        kitchenCurFrame = ++kitchenCurFrame % kitchenFrameCount; 
        kitchenSrcY = kitchenCurFrame * kitchenHeight; 
        
        ctx_4.clearRect(kitchenX, kitchenY, kitchenWidth+10, kitchenHeight+10);
        ctx_4.drawImage(kitchen, kitchenSrcX, kitchenSrcY, kitchenWidth, kitchenHeight, kitchenX, kitchenY, kitchenWidth, kitchenHeight);
    }
    console.log(ctx_4);
//////stage-5

    var carWidth = 375; 
    var carHeight = 310; 
    var carCurFrame = 0; 
    var carFrameCount = 24;
    var carSrcX = 0; 
    var carSrcY = 0; 
    var carX = 0;
    var carY= 178.5; 


    var car = new Image(); 
    car.src = "src/image/animate-sprite/stage-5-car.png";

    function drawCar(){
        //Updating the frame index 
        carCurFrame = ++carCurFrame % carFrameCount; 
        carSrcY = carCurFrame * carHeight; 
        ctx_5.clearRect(carX, carY, carWidth+10, carHeight+10);
        ctx_5.drawImage(car, carSrcX, carSrcY, carWidth, carHeight, carX, carY, carWidth, carHeight);
    }
// stage-6


/////stage-7

    var roomWidth = 375; 
    var roomHeight = 667; 
    var roomCurFrame = 0; 
    var roomFrameCount = 32;
    var roomSrcX = 0; 
    var roomSrcY = 0; 
    var roomX = 0;
    var roomY= 20; 

    var room = new Image(); 
    room.src = "src/image/animate-sprite/stage-7-room.png";

    function drawRoom(){
        //Updating the frame index 
        roomCurFrame = ++roomCurFrame % roomFrameCount; 
        roomSrcY = roomCurFrame * roomHeight; 
        ctx_7.clearRect(roomX, roomY, roomWidth+10, roomHeight+10);
        ctx_7.drawImage(room, roomSrcX, roomSrcY, roomWidth, roomHeight, roomX, roomY, roomWidth, roomHeight);
        if(roomCurFrame == roomFrameCount -1){
            clearInterval(SIDdrawRoom);
        }
    }    

//////stage-8

    var bedWidth = 352; 
    var bedHeight = 215; 
    var bedCurFrame = 0; 
    var bedFrameCount = 24;
    var bedSrcX = 0; 
    var bedSrcY = 0; 
    var bedX = 11.5;
    var bedY= 226; 

    var bed = new Image(); 
    bed.src = "src/image/animate-sprite/stage-8-bed.png";

    function drawBed(){
        //Updating the frame index 
        bedCurFrame = ++bedCurFrame % bedFrameCount; 
        bedSrcY = bedCurFrame * bedHeight; 
        ctx_8.clearRect(bedX, bedY, bedWidth+10, bedHeight+10);
        ctx_8.drawImage(bed, bedSrcX, bedSrcY, bedWidth, bedHeight, bedX, bedY, bedWidth, bedHeight);
        if(bedCurFrame == bedFrameCount -1){
            clearInterval(SIDdrawBed);
            console.log("stop bed")
        }
    }

// stage-9

    var smokeWidth = 132; 
    var smokeHeight = 162; 
    var smokeCurFrame = 0; 
    var smokeFrameCount = 29;
    var smokeSrcX = 0; 
    var smokeSrcY = 0; 
    var smokeX = 125;
    var smokeY= 190; 

    var smoke = new Image(); 
    smoke.src = "src/image/animate-sprite/stage-9-smoke.png";

    function drawSmoke(){
        //Updating the frame index 
        smokeCurFrame = ++smokeCurFrame % smokeFrameCount; 
        smokeSrcY = smokeCurFrame * smokeHeight; 
        ctx_9.clearRect(smokeX, smokeY, smokeWidth+10, smokeHeight+10);
        ctx_9.drawImage(smoke, smokeSrcX, smokeSrcY, smokeWidth, smokeHeight, smokeX, smokeY, smokeWidth, smokeHeight);
        console.log("smoke GO");
    }
// stage-10

    var toWave = 0;
    var thanksIndex = 0;
    var strollToFade = 1;

    var strollWidth = 168; 
    var strollHeight = 290; 
    var strollCurFrame = 0; 
    var strollFrameCount = 24;
    var strollSrcX = 0; 
    var strollSrcY = 0; 
    var strollX = 0;
    var strollY= 250; 

    var stroll= new Image(); 
    stroll.src = "src/image/animate-sprite/stage-10-stroll.png";

    function drawStroll(){
        //Updating the frame index 
        strollCurFrame = ++strollCurFrame % strollFrameCount; 
        strollSrcY = strollCurFrame * strollHeight; 
        ctx_10.clearRect(strollX, strollY, strollWidth+10, strollHeight+10);
        ctx_10.drawImage(stroll, strollSrcX, strollSrcY, strollWidth, strollHeight, strollX, strollY, strollWidth, strollHeight);
        toWave ++
        if(toWave == 32){
            SIDdrawWave = setInterval(drawWave, 125);
            toWave = 0;
            $(".thanks").eq(thanksIndex).css({
                "opacity": "1",
                "transform": "translateX(0)"
            })
        }
        console.log("stroll GO");
    }

    function drawStrollFade(){
        clearInterval(SIDdrawStroll);
        strollToFade -= 0.03;
        strollCurFrame = ++strollCurFrame % strollFrameCount; 
        strollSrcY = strollCurFrame * strollHeight; 
        ctx_10.clearRect(strollX, strollY, strollWidth+10, strollHeight+10);
        ctx_10.globalAlpha = strollToFade;
        ctx_10.drawImage(stroll, strollSrcX, strollSrcY, strollWidth, strollHeight, strollX, strollY, strollWidth, strollHeight);
        if(strollToFade < 0.01){
            clearInterval(SIDdrawStrollToFade);
        }
    };

    var waveWidth = 145; 
    var waveHeight = 287; 
    var waveCurFrame = 0; 
    var waveFrameCount = 32;
    var waveSrcX = 0; 
    var waveSrcY = 0; 
    var waveX = 0;
    var waveY= 250; 

    var wave= new Image(); 
    wave.src = "src/image/animate-sprite/stage-10-wave.png";

    function drawWave(){
        //Updating the frame index 
        waveCurFrame = ++waveCurFrame % waveFrameCount; 
        waveSrcY = waveCurFrame * waveHeight; 
        ctx_10.clearRect(waveX, waveY, waveWidth+10, waveHeight+10);
        ctx_10.drawImage(wave, waveSrcX, waveSrcY, waveWidth, waveHeight, waveX, waveY, waveWidth, waveHeight);
        console.log("wave GO");
        clearInterval(SIDdrawStroll);
        if(waveCurFrame == waveFrameCount -1){
            clearInterval(SIDdrawWave);
            SIDdrawStroll = setInterval(drawStroll, 125);
            $(".thanks").eq(thanksIndex).css({
                "opacity": "0",
                "transform": "translateX(-10%)",
            })
            if(thanksIndex < 1){
                thanksIndex++
            } else {
                SIDdrawStrollToFade = setInterval(drawStrollFade, 125);
            }
        }
    }

// stage-11

    var manWidth = 258; 
    var manHeight = 350; 
    var manCurFrame = 0; 
    var manFrameCount = 24;
    var manSrcX = 0; 
    var manSrcY = 0; 
    var manX = 58.5;
    var manY= 158.5; 

    var man = new Image(); 
    man.src = "src/image/animate-sprite/stage-11-man.png";

    function drawMan(){
        //Updating the frame index 
        manCurFrame = ++manCurFrame % manFrameCount; 
        manSrcY = manCurFrame * manHeight; 
        ctx_11.clearRect(manX, manY, manWidth+10, manHeight+10);
        ctx_11.drawImage(man, manSrcX, manSrcY, manWidth, manHeight, manX, manY, manWidth, manHeight);
        console.log("man GO");
    }

    var womanWidth = 237; 
    var womanHeight = 335; 
    var womanCurFrame = 0; 
    var womanFrameCount = 24;
    var womanSrcX = 0; 
    var womanSrcY = 0; 
    var womanX = 58.5;
    var womanY= 158.5; 

    var woman = new Image(); 
    woman.src = "src/image/animate-sprite/stage-11-woman.png";

    function drawWoman(){
        //Updating the frame index 
        womanCurFrame = ++womanCurFrame % womanFrameCount; 
        womanSrcY = womanCurFrame * womanHeight; 
        ctx_11_1.clearRect(womanX, womanY, womanWidth+10, womanHeight+10);
        ctx_11_1.drawImage(woman, womanSrcX, womanSrcY, womanWidth, womanHeight, womanX, womanY, womanWidth, womanHeight);
        console.log("woman GO");
    }

// stage-12

    var washWidth = 375; 
    var washHeight = 410; 
    var washCurFrame = 0; 
    var washFrameCount = 24;
    var washSrcX = 0; 
    var washSrcY = 0; 
    var washX = 0;
    var washY= 128.5; 

    var wash = new Image(); 
    wash.src = "src/image/animate-sprite/stage-12-wash.png";

    function drawWash(){
        //Updating the frame index 
        washCurFrame = ++washCurFrame % washFrameCount; 
        washSrcY = washCurFrame * washHeight; 
        ctx_12.clearRect(washX, washY, washWidth+10, washHeight+10);
        ctx_12.drawImage(wash, washSrcX, washSrcY, washWidth, washHeight, washX, washY, washWidth, washHeight);
        console.log("wash GO");
        if(washCurFrame == washFrameCount -1){
            clearInterval(SIDdrawWash);
            console.log("stop wash");
        }
    }

    $('.fullpage').fullpage({
        recordHistory: false,
        scrollingSpeed: 777,
        scrollBar: true,
        afterLoad: function(anchorLink, index){
            console.log("afterLoad:" + index)
            if(index == 1){
                $(".fixed_pic").css("opacity", "1");
                $.fn.fullpage.setAutoScrolling(true);
                $.fn.fullpage.setFitToSection(true);
            }
            if(index == 4){
                $("#stage-2").css({
                    "transform": "translateX(0)",
                    "opacity": "1",
                });
                setTimeout(function(){
                    SIDdrawDoor = setInterval(drawDoorTo, 125);
                }, 2500);
                setTimeout(function(){
                    SIDdrawShadow = setInterval(drawShadowTo, 83);
                }, 5500);
                setTimeout(function(){
                    $(".stage-2-words").css({
                        "opacity": "1",
                    })
                },6500)
                // $.fn.fullpage.setScrollingSpeed(5000);
            }
            if(index == 5){
                $("#stage-2").css({
                    "transfrom": "translateX(-100%)",
                })     
                ctx_2.clearRect(0, 0, stage_2.width, stage_2.height);

                SIDdrawWalk1 = setInterval(drawWalk1To, 83);
                setTimeout(function(){
                    SIDdrawWalkBack = setInterval(drawWalkBack, 83);  
                }, 7000);
                
            }
            if(index == 6){
                SIDdrawKitchen = setInterval(drawKitchen, 83);
            }
            if(index == 7){
                $("#stage-5").css({
                    "transform": "translate(0, 0)",
                    "opacity": "1",
                })                   

                // $.fn.fullpage.setAutoScrolling(false);
                // $.fn.fullpage.setFitToSection(false);
                SIDdrawCar = setInterval(drawCar, 125);

            }
            if(index == 9){
                console.log("switch off");
                SIDdrawRoom = setInterval(drawRoom, 125);
                $("#stage-7").css({
                    "opacity": "1",
                })
            }
            if(index == 10){
                console.log("bed");
                SIDdrawBed = setInterval(drawBed, 125);
            }
            if(index == 11){
                console.log("smoke");
                SIDdrawSmoke = setInterval(drawSmoke, 125);
            }
            if(index == 12){
                console.log("thanks");
                SIDdrawStroll = setInterval(drawStroll, 125);
                console.log(ctx_10)
            }
            if(index == 13){
                SIDdrawMan = setInterval(drawMan, 125);
                setTimeout(function(){
                    $("#stage-11").css({
                        "opacity": "0",
                    })
                    clearInterval(SIDdrawMan);
                    SIDdrawWoman = setInterval(drawWoman, 125);
                }, 2500);
                setTimeout(function(){
                    $("#stage-11_1").css({
                        "opacity": "0",
                    })
                    clearInterval(SIDdrawWoman);
                }, 6500)
            }
            if(index == 14){
                SIDdrawWash = setInterval(drawWash, 125);
            }
            if(index == 15){
                $(".stage-13").eq(0).css({
                    "opacity": "1",
                })
                setTimeout(function(){
                    $(".stage-13").eq(1).css({
                        "opacity": "1",
                    })
                }, 5000)
                setTimeout(function(){
                    $(".stage-13").eq(2).css({
                        "opacity": "1",
                    })
                },10000)
            }
        },
        onLeave: function(index, nextIndex, direction){
            console.log("onLeave:" + index, nextIndex, direction);
            if(index == 1){
                $(".fixed_pic").css("opacity", "1");
            }
            if(index == 2){

            }
            if(index == 4){                 
                setTimeout(function(){
                    SIDdrawDoorBack = setInterval(drawDoorBack, 125);
                }, 800);   
                SIDdrawShadowBack = setInterval(drawShadowBack, 83);
                $("#stage-2").css({
                    "opacity": "0",
                })   
            }
            if(index == 5){
                
                console.log("");
            }
            if(index == 7){
                $("#stage-5").css({
                    "transform": "translate(75%, 20%)",
                    "opacity": "0",
                })                  
            }
            if(index == 11){
                clearInterval(SIDdrawSmoke);
            }




            if(nextIndex == 3){
                $(".fixed_pic").css("opacity", "1");
            }
            if(nextIndex == 4){
                $(".fixed_pic").css("opacity", "0");
            }
        },
    });            
    
    

}));