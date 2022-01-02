function orientationChangeHandler(e) {
    disableScrollOrSwipe(),
    setTimeout(function() {
        $(window).trigger("resize")
    },
    500)
}
function enableScrollOrSwipe() {
    canScrollOrSwipe = !0
}
function disableScrollOrSwipe() {
    canScrollOrSwipe = !1
}
function initVariablesAfterShowContainer() {
  
}
function resetVariables() {
    pageVerticalPosition = 0
}

function resetFunctions() {
  
    
}
function initTouchEvents() {
    document.addEventListener("touchstart", handleStart, !1),
    document.addEventListener("touchmove", handleMove, !1),
    document.addEventListener("touchend", handleEnd, !1)
}
function handleStart(e) {
    touchStartX = e.targetTouches[0].pageX,
    pageVerticalPositionOnTouch = pageVerticalPosition
}
function handleMove(e) {
    
    touchCurrentX = e.targetTouches[0].pageX,
    1 == canScrollOrSwipe && (detectPageVerticalPosition(), runTheseFunctionsAfterScrollOrSwipe())
}
function handleEnd(e) {
    e.preventDefault(),
    touchEndX = e.changedTouches[0].pageX
}
function runTheseFunctionsAfterScrollOrSwipe() {
    orientvaish(),
    moveLayers(),
    deviceFunctionScrollSwipe(),
    printScrollSwipeText()
}
function deviceFunctionScrollSwipe() {
    "computer" != deviceName && "vertical" == layersMovement && positionHorizontalLayersToHaveSameRightPosition()
}
function showContainer() {
    containerDiv.setAttribute("class", "")
}
function shiftUpHorizontalLayersAfterEverythingLoaded() {
    for (var e = 0; e < layerHorizontalArray.length; e++) $(layerHorizontalArray[e]).stop().animate({
        top: "0px"
    },
    1e3,
    function() {
        finishShiftUpHorizontalLayersAfterEverythingLoaded()
    })
}
function finishShiftUpHorizontalLayersAfterEverythingLoaded() {
    1 == canFinishShiftUpHorizontalLayersAfterEverythingLoaded && (canFinishShiftUpHorizontalLayersAfterEverythingLoaded = !1, isPreloadShiftUpAnimationFinish = !0, makePageScrollable(), shiftDownvaishContainer())
}
function shiftDownvaishContainer() {
    $(vaishContainerDiv).stop().animate({
        bottom: "20%"
    },
    500,
    function() {
        setvaishStaticFrame()
    }),
    "internet explorer" == browserName && browserVersion <= 8
}
function makePageScrollable() {
    contentDiv.setAttribute("class", ""),
    enableScrollOrSwipe()
}
function setFrontLayerVerticalHeight() {
    layerVerticalArray[layerVerticalArray.length - 1].style.height = 2 * containerDiv.offsetHeight + bannersContainerDiv.offsetHeight + gapBetweenContactCloudAndBannersContainer + "px"
}
function setBannersContainerVerticalPosition() {
    bannersContainerDiv.style.bottom = containerDiv.offsetHeight + "px"
}
function setPageHeight() {
    pageDiv.style.height = layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth + "px"
}
function setLayerSpeed() {
    for (; layerHorizontalSpeedArray.length > 0;) layerHorizontalSpeedArray.pop();
    for (; layerVerticalSpeedArray.length > 0;) layerVerticalSpeedArray.pop();
    for (var e = 0; e < layerHorizontalArray.length; e++) {
        var t = (layerHorizontalArray[e].offsetWidth - containerDiv.offsetWidth) / (layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth);
        layerHorizontalSpeedArray.push(t)
    }
    for (var e = 0; e < layerVerticalArray.length; e++) {
        var i = (layerVerticalArray[e].offsetHeight - containerDiv.offsetHeight) / (layerVerticalArray[layerVerticalArray.length - 1].offsetHeight - containerDiv.offsetHeight);
        layerVerticalSpeedArray.push(i)
    }
}
function detectPageVerticalPosition() {
    previousPageVerticalPosition = pageVerticalPosition,
    "computer" == deviceName ? pageVerticalPosition = "internet explorer" == browserName ? document.documentElement.scrollTop: pageYOffset: (pageVerticalPosition = pageVerticalPositionOnTouch + (touchStartX - touchCurrentX), 0 > pageVerticalPosition && (pageVerticalPosition = 0), pageVerticalPosition > pageDiv.offsetHeight - containerDiv.offsetHeight && (pageVerticalPosition = pageDiv.offsetHeight - containerDiv.offsetHeight)),
    deltaPageVerticalPosition = pageVerticalPosition - previousPageVerticalPosition,
    0 >= pageVerticalPosition && (resetVariables(), resetFunctions())
}
function moveLayers() {
    if (setLayersMovement(), "horizontal" == layersMovement) {
        for (var e = 0; e < layerHorizontalArray.length; e++) layerHorizontalArray[e].style.left = -1 * layerHorizontalSpeedArray[e] * pageVerticalPosition + "px";
        positionLayerHorizontalToBottom(),
        positionVerticalLayersHorizontally()
    }
    if ("vertical" == layersMovement) {
        for (var e = 0; e < layerVerticalArray.length; e++) layerVerticalArray[e].style.bottom = -1 * layerVerticalSpeedArray[e] * (pageVerticalPosition - (layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth)) + "px";
        positionVerticalLayersAtLeftMost(),
        positionHorizontalLayersToHaveSameRightPosition(),
        positionHorizontalLayersVertically(),
        clearShiftvaishFrameTimer()
        }
    "not moving 1" == layersMovement && (positionVerticalLayersAtLeftMost(), positionVerticalLayersToHaveSameTopPosition(), positionHorizontalLayersAtBottomMost(), positionHorizontalLayersToHaveSameRightPosition()),
    "not moving 2" == layersMovement && (positionVerticalLayersAtLeftMost(), positionVerticalLayersToHaveSameTopPosition(), positionHorizontalLayersAtBottomMost(), positionHorizontalLayersToHaveSameRightPosition())
}
function positionVerticalLayersAtLeftMost() {
    for (var e = 0; e < layerVerticalArray.length; e++) layerVerticalArray[e].style.left = "0px"
}
function positionHorizontalLayersToHaveSameRightPosition() {
    for (var e = 0; e < layerHorizontalArray.length; e++) layerHorizontalArray[e].style.left = containerDiv.offsetWidth - layerHorizontalArray[e].offsetWidth + "px"
}
function positionHorizontalLayersVertically() {
    for (var e = 0; e < layerHorizontalArray.length; e++) layerHorizontalArray[e].style.top = layerVerticalArray[layerVerticalArray.length - 1].offsetTop + layerVerticalArray[layerVerticalArray.length - 1].offsetHeight - containerDiv.offsetHeight + "px"
}
function positionHorizontalLayersAtBottomMost() {
    for (var e = 0; e < layerHorizontalArray.length; e++) layerHorizontalArray[e].style.top = layerVerticalArray[layerVerticalArray.length - 1].offsetHeight - containerDiv.offsetHeight + "px"
}
function setvaishLeftAndRightEdge() {
    var e = 65;
    vaishRightEdge = .5 * (containerDiv.offsetWidth + vaishDiv.offsetWidth) - e,
    vaishLeftEdge = .5 * (containerDiv.offsetWidth - vaishDiv.offsetWidth) + e
}
function positionVerticalLayersToHaveSameTopPosition() {
    for (var e = 0; e < layerVerticalArray.length; e++) layerVerticalArray[e].style.bottom = containerDiv.offsetHeight - layerVerticalArray[e].offsetHeight + "px"
}
function positionVerticalLayersBottomToHorizontalLayersBottom() {
    for (var e = 0; e < layerVerticalArray.length; e++) layerVerticalArray[e].style.bottom = -1 * layerHorizontalArray[e].offsetTop + "px"
}


function setShiftUpLayerHorizontalDistance() {
    shiftUpLayerHorizontalDistance = .75 * containerDiv.offsetHeight
}
function shiftUpLayerHorizontal() {
    setShiftUpLayerHorizontalDistance(),
    clearShiftUpDownLayerHorizontalTimer(),
    shiftUpLayerHorizontalTimer = setInterval(function() {
        moveUpLayerHorizontal()
    },
    shiftUpDownLayerHorizontalInterval),
    disableIsvaishJumpingAndFalling()
}
function moveUpLayerHorizontal() {
    if ("horizontal" == layersMovement) {
        for (var e = 0; e < layerHorizontalArray.length; e++) {
            var t = layerHorizontalArray[e].offsetTop - shiftUpDownLayerHorizontalIncrement; - shiftUpLayerHorizontalDistance >= t ? (t = -shiftUpLayerHorizontalDistance, layerHorizontalArray[e].style.top = t + "px", clearInterval(shiftUpLayerHorizontalTimer)) : layerHorizontalArray[e].style.top = t + "px",
            vaishContainerDiv.offsetTop > sea1Div.offsetTop + layerHorizontalArray[layerHorizontalArray.length - 1].offsetTop && (isvaishBelowSeaLevel = !0)
        }
        positionVerticalLayersBottomToHorizontalLayersBottom()
    } else clearInterval(shiftUpLayerHorizontalTimer),
    positionHorizontalLayersAtBottomMost(),
    positionHorizontalLayersToHaveSameRightPosition(),
    isvaishBelowSeaLevel = !1
}
function shiftDownLayerHorizontal() {
    clearShiftUpDownLayerHorizontalTimer(),
    shiftDownLayerHorizontalTimer = setInterval(function() {
        moveDownLayerHorizontal()
    },
    shiftUpDownLayerHorizontalInterval)
}
function moveDownLayerHorizontal() {
    if ("horizontal" == layersMovement) {
        for (var e = 0; e < layerHorizontalArray.length; e++) {
            var t = layerHorizontalArray[e].offsetTop + shiftUpDownLayerHorizontalIncrement;
            t >= 0 ? (t = 0, layerHorizontalArray[e].style.top = t + "px", clearInterval(shiftDownLayerHorizontalTimer)) : layerHorizontalArray[e].style.top = t + "px",
            vaishContainerDiv.offsetTop < sea1Div.offsetTop + layerHorizontalArray[layerHorizontalArray.length - 1].offsetTop && (isvaishBelowSeaLevel = !1)
        }
        positionVerticalLayersBottomToHorizontalLayersBottom()
    } else clearInterval(shiftDownLayerHorizontalTimer),
    positionHorizontalLayersAtBottomMost(),
    positionHorizontalLayersToHaveSameRightPosition(),
    isvaishBelowSeaLevel = !1
}
function clearShiftUpDownLayerHorizontalTimer() {
    clearInterval(shiftUpLayerHorizontalTimer),
    clearInterval(shiftDownLayerHorizontalTimer)
}
function shiftvaishToGroundLevel() {
    $(vaishContainerDiv).stop().animate({
        bottom: containerDiv.offsetHeight - groundAndGrassContainer1Div.offsetTop + "px"
    },
    300,
    function() {})
}

function positionLayerHorizontalToTop() {
  
}
function positionLayerHorizontalToBottom() {
    
}


function setvaishStaticFrame() {
    vaishFramesDiv.style.left = "0px"
}
function disableIsvaishJumpingAndFalling() {
    isvaishJumping = !1,
    isvaishFalling = !1
}

function positionVerticalLayersHorizontally() {
    for (var e = 0; e < layerVerticalArray.length; e++) layerVerticalArray[e].style.left = layerHorizontalArray[e].offsetLeft + layerHorizontalArray[e].offsetWidth - containerDiv.offsetWidth + "px"
}
function positionBalloonAndvaishContainerHorizontally() {
    var e = pageVerticalPosition * layerHorizontalSpeedArray[layerHorizontalSpeedArray.length - 1] - (layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth),
    t = 250,
    i = 50;
    vaishMaxHorizontalDistance = .5 * containerDiv.offsetWidth + t;
    var n = .5 * containerDiv.offsetWidth + e;
    n >= vaishMaxHorizontalDistance && (n = vaishMaxHorizontalDistance);
    var a = .5 * containerDiv.offsetWidth + i,
    o = .5 * (containerDiv.offsetWidth - balloonDiv.offsetWidth) + e;
    o >= a && (o = a),
    "vertical" == layersMovement ? (balloonDiv.style.left = o + "px", vaishContainerDiv.style.left = n + "px") : "not moving 1" == layersMovement || "not moving 2" == layersMovement ? (vaishContainerDiv.style.left = n + pageVerticalPosition - (pageDiv.offsetHeight - containerDiv.offsetHeight - distanceBetweenvaishAndBalloon) + "px", balloonDiv.style.left = o + "px") : (balloonDiv.style.left = layerHorizontalArray[layerHorizontalArray.length - 1].offsetLeft + layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - .5 * (containerDiv.offsetWidth + balloonDiv.offsetWidth) + "px", vaishContainerDiv.style.left = "50%")
}

function setLayersMovement() {
    layersMovement = pageVerticalPosition * layerHorizontalSpeedArray[layerHorizontalSpeedArray.length - 1] <= layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth ? "horizontal": pageVerticalPosition >= pageDiv.offsetHeight - containerDiv.offsetHeight - distanceBetweenvaishAndBalloon && pageVerticalPosition < pageDiv.offsetHeight - containerDiv.offsetHeight ? "not moving 1": pageVerticalPosition >= pageDiv.offsetHeight - containerDiv.offsetHeight ? "not moving 2": "vertical"
}
function orientvaish() {
    deltaPageVerticalPosition > 0 && (vaishFramesDiv.style.top = "0px", vaishEyesCloseDiv.style.left = "90px"),
    0 > deltaPageVerticalPosition && (vaishFramesDiv.style.top = "-200px", vaishEyesCloseDiv.style.left = "55px")
}
function storeDivs() {
    for (var e = document.getElementsByTagName("div"), t = 0; t < e.length; t++)"fish" == e[t].getAttribute("class") && fishArray.push(e[t]),
   
    "skill" == e[t].getAttribute("class") && skillArray.push(e[t]),
    "building" == e[t].getAttribute("class") && buildingArray.push(e[t]),
   "layer-horizontal" == e[t].getAttribute("class") && layerHorizontalArray.push(e[t]),
    "layer-vertical" == e[t].getAttribute("class") && layerVerticalArray.push(e[t]),
    "firework" == e[t].getAttribute("class") && fireworkArray.push(e[t])
}

function positionskills() {
    for (var e = 0; e < skillArray.length; e++) 1 == canAnimateskillInformation ? skillArray[e].style.top = "100%": skillArray[e].style.top = skillTargetTopObjectArray[e].offsetTop + "px"
}


function positionBuildings() {
    for (var e = 0; e < buildingArray.length; e++) buildingArray[e].style.left = buildingEarlyPositionArray[e] + "px"
}


function setAllNbaCounter() {
    nbaBoardsCounter = 0,
    nbaPlayerCounter = 0
}


function enableAnimatevaishRunSwim() {
    canAnimatevaishRunSwim = !0
}
function disableAnimatevaishRunSwim() {
    canAnimatevaishRunSwim = !1
}



function positionSplashContainer() {
    splashContainerDiv.style.left = .5 * (containerDiv.offsetWidth - splashContainerDiv.offsetWidth) + "px"
}
function positionvaishContainerVertically() {
    1 == isPreloadShiftUpAnimationFinish && ($(vaishContainerDiv).stop(!0, !1), setvaishStaticFrame(), 1 == isvaishSwimming ? positionvaishAtSeaFloorLevel() : (checkElevationNumberBelowvaish(), null != elevationNumberBelowvaish ? vaishContainerDiv.style.bottom = containerDiv.offsetHeight - elevationArray[elevationNumberBelowvaish].offsetTop + "px": positionvaishAtGroundLevel()))
}
function positionvaishAtGroundLevel() {
    vaishContainerDiv.style.bottom = .2 * containerDiv.offsetHeight + "px"
}
function checkElevationNumberBelowvaish() {
    for (var e = 0; e < elevationArray.length; e++) {
        if (pageVerticalPosition < elevationArray[e].offsetLeft + elevationArray[e].offsetWidth - vaishLeftEdge && pageVerticalPosition > elevationArray[e].offsetLeft - vaishRightEdge) {
            elevationNumberBelowvaish = e;
            break
        }
        elevationNumberBelowvaish = null
    }
}


function printResizeText() {}
function printScrollSwipeText() {}
var contentDiv = document.getElementById("content"),
pageDiv = document.getElementById("page"),
vaishContainerDiv = document.getElementById("vaish-container"),
vaishDiv = document.getElementById("vaish"),
vaishFramesDiv = document.getElementById("vaish-slides"),
vaishEyesCloseDiv = document.getElementById("vaish-eyes-close"),
blinkvaishEyesTimer,
bannersContainerDiv = document.getElementById("banners-container"),
isPreloadShiftUpAnimationFinish = !1,
canFinishShiftUpHorizontalLayersAfterEverythingLoaded = !0,
splashContainerDiv = document.getElementById("splash-container"),

groundAndGrassContainer1Div = document.getElementById("ground-and-grass-container-1"),
elevation1Div = document.getElementById("elevation-1"),
elevation2Div = document.getElementById("elevation-2"),
layerHorizontalArray = new Array,
layerVerticalArray = new Array,
gapBetweenContactCloudAndBannersContainer = 400,
layerHorizontalSpeedArray = new Array,
layerVerticalSpeedArray = new Array,


about1ContainerDiv = document.getElementById("skills-container"),
skillLine1Div = document.getElementById("skill-line-1"),
skillLine2Div = document.getElementById("skill-line-2"),
skillArray = new Array,
skillTargetTopObjectArray = new Array;
skillTargetTopObjectArray.push(skillLine1Div, skillLine1Div, skillLine2Div, skillLine2Div);
var canAnimateskillInformation, about2ContainerDiv = document.getElementById("buildings-container"),
buildingTargetLeft1 = 0,
buildingTargetLeft2 = 305,
buildingTargetLeft3 = 710,
buildingEarlyPosition1 = 795,
buildingEarlyPosition2 = 1100,
buildingEarlyPosition3 = 1505,
buildingArray = new Array,
buildingTargetLeftArray = new Array;
buildingTargetLeftArray.push(buildingTargetLeft1, buildingTargetLeft2, buildingTargetLeft3);
var buildingEarlyPositionArray = new Array;
buildingEarlyPositionArray.push(buildingEarlyPosition1, buildingEarlyPosition2, buildingEarlyPosition3);
var buildingLegArray = new Array,
canAnimateBuildingInformation, buildingCounter = 0,

experience1ContainerDiv = document.getElementById("experience-1-container"),
experience2ContainerDiv = document.getElementById("experience-2-container"),
experience3ContainerDiv = document.getElementById("experience-3-container"),
experienceTextContainerArray = new Array,


skill1ContainerDiv = document.getElementById("skill-1-container"),


numberOfFishInEachRowArray = new Array;
var skill2ContainerDiv = document.getElementById("skill-2-container"),
numberOfCrabInEachRowArray = new Array;
var skill3ContainerDiv = document.getElementById("skill-3-container"),

numberOfTurtleInEachRowArray = new Array;

var pageVerticalPosition = 0,
pageVerticalPositionOnTouch = 0,
previousPageVerticalPosition = 0,
deltaPageVerticalPosition = 0,

swimUpHeight, layersMovement, elevationArray = new Array,
elevationNumberBelowvaish = null,
vaishRightEdge, vaishLeftEdge,
vaishMaxHorizontalDistance, counter = 0,
switcher = 1,
vaishStaticFrame = 0,
vaishStartRunFrame = 1,
vaishStopRunFrame = 2,

vaishOneFrameWidth = 200,
shiftvaishFrameTimeInterval = 200,
canAnimatevaishRunSwim, vaishStartFrame, vaishStopFrame, shiftvaishFrameTimer, pageVerticalPositionWhenAnimatevaish1, pageVerticalPositionWhenAnimatevaish2, minimumVerticalDistanceToTriggervaishSwimDownFrame = 100,

about3ContainerDiv = document.getElementById("nba-container"),

fireworkArray = new Array,
fireworkSvgArray = new Array,
cArray = new Array,
canDrawManyFireworks = !0;


var landInformationContainerArray = new Array;
landInformationContainerArray.push(about1ContainerDiv, about2ContainerDiv, about3ContainerDiv);
var seaInformationContainerArray = new Array;
seaInformationContainerArray.push(skill1ContainerDiv, skill2ContainerDiv, skill3ContainerDiv);

var canScrollOrSwipe;
disableScrollOrSwipe(),
$(window).on("beforeunload",
function() {
    $(window).scrollTop(0)
}),

window.onload = function() {
    "computer" != deviceName && initTouchEvents(),
    storeDivs(),
    setFrontLayerVerticalHeight(),
    setBannersContainerVerticalPosition(),
    shiftUpPreloader(),
    showContainer(),
    initVariablesAfterShowContainer(),
    shiftUpHorizontalLayersAfterEverythingLoaded(),
    disableAnimatevaishRunSwim(),
    setPageHeight(),
    setLayerSpeed(),
    positionVerticalLayersHorizontally(),
    resetFunctions(),
    positionSplashContainer(),
    setvaishLeftAndRightEdge()
},
window.onscroll = function(e) {
    1 == canScrollOrSwipe && (detectPageVerticalPosition(), runTheseFunctionsAfterScrollOrSwipe())
},
window.onresize = function(e) {
    setFrontLayerVerticalHeight(),
    setBannersContainerVerticalPosition(),
    setPageHeight(),
    detectPageVerticalPosition(),
    orientvaish(),
    setLayerSpeed(),
    moveLayers(),
    setvaishLeftAndRightEdge(),
    positionSplashContainer(),
    positionskills(),
    enableScrollOrSwipe(),
    printResizeText()
},
$(window).on("orientationchange", orientationChangeHandler);