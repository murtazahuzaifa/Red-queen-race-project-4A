import React from 'react';
import '../style.css';

export function AliceQueenSprite({ animate }) {

    return (
        <img ref={animate} src={require("../images/alice-queen-sprite.png")} alt="alice-queen-sprite" />
    );
}