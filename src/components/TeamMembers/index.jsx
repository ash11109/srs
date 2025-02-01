import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import defaultTeamMember from '../../assets/images/team/user_default.png';
import './index.css';

const TeamMembers = () => {
    const teamMembers = [
        {
            name: 'Team Member A',
            role: 'Designation 1',
            image: defaultTeamMember,
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#'
            }
        },
        {
            name: 'Team Member B',
            role: 'Designation 2',
            image: defaultTeamMember,
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#'
            }
        },
        {
            name: 'Team Member C',
            role: 'Designation 3',
            image: defaultTeamMember,
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#'
            }
        },
        {
            name: 'Team Member D',
            role: 'Designation 4',
            image: defaultTeamMember,
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#'
            }
        }
    ];

    return (
        <section className="light py-14 md:py-24 bg-blue-50 flex content-center items-center min-h-screen">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-12 gap-6 items-center justify-between mb-10 md:mb-16 border-l-blue-950">
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <h2 className="text-[32px] font-bold leading-normal text-[#162b58]">
                            Meet Our <span className="text-[#3F65B7]">Team</span> <br />Heart of the Organization . . .
                        </h2>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
                        <p className="text-lg leading-[1.7] opacity-60 text-gray-700">
                            "Meet Our Team – the heart of Sysroot Solution Pvt Ltd! Our passionate experts drive innovation, turning challenges into cutting-edge solutions."
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center pt-10">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative h-80">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#3F65B7]/60 to-transparent flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex space-x-4">
                                        <a
                                            href={member.social.linkedin}
                                            className="text-white hover:text-blue-400 transition-colors duration-300"
                                        >
                                            <FaLinkedin size={24} />
                                        </a>
                                        <a
                                            href={member.social.twitter}
                                            className="text-white hover:text-blue-400 transition-colors duration-300"
                                        >
                                            <FaTwitter size={24} />
                                        </a>
                                        <a
                                            href={member.social.github}
                                            className="text-white hover:text-gray-400 transition-colors duration-300"
                                        >
                                            <FaGithub size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 py-2 px-4 bg-[#3F65B7]/70 backdrop-blur-sm group-hover:-bottom-20 duration-500">
                                <h3 className="text-xl font-bold text-blue-50">{member.name}</h3>
                                <p className="text-gray-200">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeamMembers