import React from 'react';
import Image from 'next/legacy/image';

import lockupLight from '$/imgs/LockupLight.svg';

class Cover extends React.Component {
    render() {
        return (
            <div className="w-full h-screen bg-p-black flex flex-col justify-around items-center">
                <div className={`w-[672px] select-none`}>
                    <Image src={lockupLight}
                        alt="Big shot logo"
                        layout="responsive"
                        draggable="false"
                    />
                </div>

                <div class={`flex flex-col text-[4rem] leading-[5rem] text-white text-center font-blazma select-none`}>
                    <span>[NOW IS YOUR CHANCE TO BE]</span>
                    <span>[A]</span>
                    <span>[BIG SHOT!]</span>
                </div>
            </div>
        );
    }
}

export default Cover;
