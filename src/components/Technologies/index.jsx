import srs from '../../assets/images/logo/srs.png';
import js from '../../assets/images/techs/js.png';
import python from '../../assets/images/techs/python.png';
import java from '../../assets/images/techs/java.png';
import react from '../../assets/images/techs/react.png';
import nodejs from '../../assets/images/techs/nodejs.png';
import docker from '../../assets/images/techs/docker.png';
import mongodb from '../../assets/images/techs/mongo.png';
import aws from '../../assets/images/techs/aws.png';
import ai from '../../assets/images/techs/ai.png';
import './index.css';

const Technologies = () => {

    const createStars = (count) => {
        const stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(<div className="star" key={i}></div>);
        }
        return stars;
    };

    return (
        <div className='overflow-hidden'>
            <div className='tech-section'>
                <div className="star-container">
                    {createStars(300)}
                </div>
                <div className="system">
                    <div className="system__orbit system__orbit--sun bg-yellow-400 p-3">
                        <img src={srs} alt="SRSolution" className="system__icon" />
                    </div>

                    <div className="system__orbit system__orbit--mercury">
                        <div className="system__planet system__planet--mercury">
                            <img src={js} alt="Java" />
                        </div>
                    </div>
                    <div className="system__orbit system__orbit--venus">
                        <div className="system__planet system__planet--venus">
                            <img src={python} alt="Python" />
                        </div>
                    </div>
                    <div className="system__orbit system__orbit--earth">
                        <div className="system__planet system__planet--earth">
                            <img src={java} alt="Java" />
                        </div>
                    </div>
                    <div className="system__orbit system__orbit--mars">
                        <div className="system__planet system__planet--mars">
                            <img src={react} alt="React Js" />
                        </div>
                    </div>
                    <div className="system__orbit system__orbit--jupiter">
                        <div className="system__planet system__planet--jupiter">
                            <img src={mongodb} alt="Mongo Database" />
                        </div>
                    </div>
                    <div className="system__orbit system__orbit--saturn">
                        <div className="system__planet system__planet--saturn">
                            <img src={nodejs} alt="Node JS" />
                        </div>
                    </div>
                    <div className="system__orbit system__orbit--uranus">
                        <div className="system__planet system__planet--uranus">
                            <img src={docker} alt="Docker" />
                        </div>
                    </div>
                    <div className="system__orbit system__orbit--neptune">
                        <div className="system__planet system__planet--neptune">
                            <img src={aws} alt="Neptune" />
                        </div>
                    </div>
                    <div className="system__orbit system__orbit--pluto">
                        <div className="system__planet system__planet--pluto">
                            <img src={ai} alt="Pluto" />
                        </div>
                    </div>
                </div>
                <div className='absolute h-full w-full top-0 left-0 flex content-start items-start z-0'>
                    <div className='w-full p-5 mt-2 md:mt-4 opacity-20'>
                        <h1 className='text-6xl md:text-7xl lg:text-9xl text-yellow-100 uppercase text-left  font-bold opacity-0 animate-pulse'>Techs</h1>
                        <h2 className='text-4xl md:text-6xl lg:text-8xl text-gray-400 uppercase text-left  font-bold opacity-0 animate-pulse'>We're using . . .</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies