import React, {useCallback } from 'react';
import { Ground1 } from './objects/Ground1';
import { AliceQueenSprite } from './objects/AliceQueenSprite';
import { Road } from './objects/Road';
import { Ground3 } from './objects/Ground3';
import useWebAnimations from "@wellyshen/use-web-animations";
import './style.css';

// animating key frame
const aliceQueen_timeframe = {
    keyframes: [
        { transform: 'translateY(0)' },
        { transform: 'translateY(-100%)' }
    ],
    timing: { easing: 'steps(7, end)', direction: "reverse", duration: 600, playbackRate: 1, iterations: Infinity, }
}
const ground1_timeframe = {
    // autoPlay: false,
    keyframes: [
        { transform: 'translateX(5300px)' },
        { transform: 'translateX(-6600px)' },
    ],
    timing: { duration: 36000, iterations: Infinity, },
}
const road_timeframe = {
    // autoPlay: false,
    keyframes: [
        { transform: 'translateX(6500px)' },
        { transform: 'translateX(-2000px)' },
    ],
    timing: { duration: 24000, iterations: Infinity, },
}
const ground3_timeframe = {
    // autoPlay: false,
    keyframes: [
        { transform: 'translateX(7000px)' },
        { transform: 'translateX(-3500px)' },
    ],
    timing: { duration: 12000, iterations: Infinity, },
}

function App() {

    const animG1 = useWebAnimations(ground1_timeframe);
    const animRoad = useWebAnimations(road_timeframe);
    const animG3 = useWebAnimations(ground3_timeframe);
    const animAliceQueen = useWebAnimations(aliceQueen_timeframe);

    const sceneries = [animG1, animRoad, animG3]

    const moveFast = () => {
        animAliceQueen.getAnimation().playbackRate *= 1.1;
        adjustPlayBack();
    }

    const adjustPlayBack = () => {
        if (animAliceQueen.getAnimation().playbackRate < .8) {
            sceneries.forEach(function (anim) {
                anim.getAnimation().playbackRate = animAliceQueen.getAnimation().playbackRate / 2 * -1;
            });
        } else if (animAliceQueen.getAnimation().playbackRate > 1.2) {
            sceneries.forEach(function (anim) {
                anim.getAnimation().playbackRate = animAliceQueen.getAnimation().playbackRate / 2;
            });
        } else {
            sceneries.forEach(function (anim) {
                anim.getAnimation().playbackRate = 0;
            });
        }
    }

    const callBack = ()=>{
        document.getAnimations().forEach((animation) => {
            // animation.reverse();
            const time = (animation.effect.getTiming().duration / 100) * 50;
            animation.currentTime = time;
        });

        setInterval(function () {
            /* Set decay */
            if (animAliceQueen.getAnimation().playbackRate > .4) {
                animAliceQueen.getAnimation().playbackRate *= .9;
            }
            adjustPlayBack();
        }, 3000);

        document.addEventListener('click', moveFast);
        document.addEventListener('touchstart', moveFast);
    }
    useCallback(callBack, [animAliceQueen])();
    return (
        <>
            <div id='front' ></div>
            <div id='scene' >
                <div id='sky' ></div>
                <div id='land'>
                    <div id="ground1" ref={animG1.ref} ><Ground1 /></div>
                    <div id='alice-queen-sprite' ><AliceQueenSprite animate={animAliceQueen.ref} /></div>
                    <div id="road" ref={animRoad.ref} ><Road /></div>
                    <div id="ground3" ref={animG3.ref} ><Ground3 /></div>
                </div>
            </div>
        </>
    );
}

export default App;