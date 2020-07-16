import React from 'react';
import '../style.css';

export function Ground1() {
    return (
        <>
            <img id='rook-down' src={require("../images/w_rook_small.png")} alt="rook_small" />
            <img id='rook-up' src={require("../images/w_rook_upright_small.png")} alt="rook_upright_small" />
            <img id='knight' src={require("../images/r_knight_small.png")} alt="knight_small" />
            <img id='tree2' src={require("../images/palm2_small.png")} alt="palm tree2" />
            <img id='tree1' src={require("../images/palm1_small.png")} alt="palm tree1" />
        </>
    );
}