import React from 'react';
import '../style.css';

export function Ground3() {
    return (
        <>
            <img id='pawn' src={require("../images/r_pawn_upright_small.png")} alt="pawn_upright_small" />
            <img id='tree3' src={require("../images/palm3_small.png")} alt="palm tree3" />
            <img id='g-knight' src={require("../images/r_knight_small.png")} alt="knight_small" />
        </>
    );
}