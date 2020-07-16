// getting elements
let alice_queen = document.querySelector("#alice-queen-sprite");

// setting frame and duration
let alice_queen_frame = [
    { transform: 'translateY(0)' },
    { transform: 'translateY(-100%)' }
];
let alice_queen_time = {
    easing: 'steps(7, end)',
    direction: "reverse",
    // easing: 'ease-in-out',
    duration: 600,
    playbackRate: 1,
    iterations: Infinity,
};

// animating elements
alice_queen.animate(alice_queen_frame, alice_queen_time);