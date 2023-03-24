import React from 'react';
import { useState, useEffect} from 'react';

const Drum = (delivery) => {
    const [playing, setPlaying] = useState(false);
    
    const playNow = () => {
        setPlaying(true);

        new Audio(delivery.sound).play();

        setTimeout(() => {
            setPlaying(false);
        }, 150);
    };

    useEffect(() => {
        document.addEventListener('keydown', (ev) => {
            if (ev.key.toLowerCase() === delivery.letter.toLowerCase()) {
                playNow();
            }
        });
    }, []);

    return (
        <div className={`drum ${playing ? "playing":""}`} onClick={playNow}>
            <div className="key">
                {delivery.letter}<br />
                <span className='span-text'>{delivery.naam}</span>
            </div>
        </div>
    )
}

export default Drum;