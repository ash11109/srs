import React from 'react'
import './index.css';
import logoSRS from './../../assets/Images/srs/logo.png'

const Technologies = () => {

    const createStars = (count) => {
        const stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(<div className="star" key={i}></div>);
        }
        return stars;
    };

    return (
        <div className='techContainer mt-5'>
            <div className="star-container">
                {createStars(300)}
            </div>
            <div className="container h-full z-10">
                <div className="sun flex items-center"><h1 className='text-center w-full text-bold'><img src={logoSRS} alt="" className='p-4'/></h1></div>
                <div className="mercury-orbit">
                    <div className="mercury"></div>
                </div>
                <div className="venus-orbit">
                    <div className="venus"></div>
                </div>
                <div className="earth-orbit">
                    <div className="earth"></div>
                </div>
                <div className="mars-orbit">
                    <div className="mars"></div>
                </div>
                <div className="jupiter-orbit">
                    <div className="jupiter flex items-center"></div>
                </div>
                <div className="saturn-orbit">
                    <div className="saturn"></div>
                </div>
                <div className="uranus-orbit">
                    <div className="uranus"></div>
                </div>
                <div className="neptune-orbit">
                    <div className="neptune"></div>
                </div>
                <div className="pluto-orbit">
                    <div className="pluto"></div>
                </div>
            </div>
            <div className='absolute h-full w-full top-0 left-0 flex content-start items-start z-0'>
                <div className='w-full p-5 mt-4'>
                    <h1 className='text-4xl md:text-7xl lg:text-9xl text-gray-400 uppercase text-left  font-bold opacity-10'>Techs</h1>
                    <h2 className='text-4xl md:text-7xl lg:text-9xl text-gray-400 uppercase text-left  font-bold opacity-10'>We're using . . .</h2>
                </div>
            </div>
        </div>
    )
}

export default Technologies