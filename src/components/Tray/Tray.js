import React, { useState } from 'react';
import Drum from '../Drum/Drum';

function Tray() {
    const [sounds, setSounds] = useState([
        {
			name: "boom",
			sound: "./sounds/boom.wav",
			key: "A",
		},
		{
			name: "clap",
			sound: "./sounds/clap.wav",
			key: "S",
		},
		{
			name: "hihat",
			sound: "./sounds/hihat.wav",
			key: "D",
		},
		{
			name: "kick",
			sound: "./sounds/kick.wav",
			key: "F",
		},
		{
			name: "openhat",
			sound: "./sounds/openhat.wav",
			key: "G",
		},
		{
			name: "ride",
			sound: "./sounds/ride.wav",
			key: "H",
		},
		{
			name: "snare",
			sound: "./sounds/snare.wav",
			key: "J",
		},
		{
			name: "tink",
			sound: "./sounds/tink.wav",
			key: "K",
		},
		{
			name: "tom",
			sound: "./sounds/tom.wav",
			key: "L",
		}
    ]);

    return (
    	<div className="drums">
			{
                sounds.map((sound, i) => (
				    <Drum key={i} letter={sound.key} sound={sound.sound} naam={sound.name}></Drum>
			    ))
            }
		</div>
    )
}

export default Tray;