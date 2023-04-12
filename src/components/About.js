import React from 'react';
import Image from 'next/legacy/image';

import logo from '$/imgs/LogoDefault.svg';

class About extends React.Component {
    render() {
        return (
            <div className="w-full mt-16">
                <div className={`flex flex-col items-center`}>
                    <div className={`w-[464px] select-none mb-4`}>
                        <Image src={logo}
                            alt="Big shot logo"
                            layout="responsive"
                            draggable="false"
                        />
                    </div>

                    <h1 className={`font-blazma text-primary-500 text-[4rem] leading-[4rem] bg-p-black px-2 mb-7 select-none`}>[ WHO WE ARE ]</h1>

                    <p className="w-[1120px] font-glametrix text-3xl text-p-black whitespace-pre-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo lectus. Quisque sed sapien non mauris gravida varius et at magna. Quisque porta augue eget nunc ultricies, vitae maximus quam volutpat. In aliquam, lectus vel placerat mattis, lectus mi euismod nisl, vel tristique mauris metus sed enim. Ut eget turpis aliquam, iaculis justo sit amet, efficitur ex. Curabitur eget egestas nunc. Maecenas eleifend sapien dignissim hendrerit aliquam. Integer commodo magna at metus condimentum lacinia. Mauris placerat risus id tellus consectetur, in placerat leo malesuada. Maecenas vestibulum id arcu sit amet tristique. Praesent rutrum hendrerit efficitur. Sed bibendum massa eu rhoncus aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu dui magna. Curabitur urna urna, pulvinar in lacus in, volutpat porta lorem. Integer vitae odio vitae tortor imperdiet molestie.</p>
                </div>
            </div>
        );
    }
}

export default About;
