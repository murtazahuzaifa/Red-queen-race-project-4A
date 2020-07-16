import React from 'react';
import '../style.css';

export function Road() {

    return (
        <>
            <img id='bush' src={require("../images/bush.png")} alt="bush" />
            <img id='rock' src={require("../images/rock.png")} alt="rock" />
        </>
    );
}