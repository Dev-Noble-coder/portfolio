import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import flink from '../../assets/flink.png';
import edu from '../../assets/edu.png';
import makemation from '../../assets/makemation.png';
import pension from '../../assets/pension.png';
import portfolio from '../../assets/portfolio.png';
import weather from '../../assets/weather.png';
import drumkit from '../../assets/drumkit.png';

const Project = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // Duration of the animation
            once: false,
            offset: 100,
            delay: 100,
        });
    }, []);

    return (
        <div className="bg-zinc-950 py-16 text-white">
            <div className="pl-3 sm:pl-20 lg:pl-24 pb-5">
                <p className="text-xl font-semibold pb-2">
                    <span>
                        <i className="bx bx-label text-[#FF014F]"></i>
                    </span>{' '}
                    My Projects
                </p>
                <p className="font-semibold">What I Have Done</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full px-4 sm:px-20 lg:px-24 gap-5">
                {[
                    { src: flink, alt: 'FLink', title: 'FLink Web App', description : 'This web app contains a full responsive landing page and a dashboard for those who signed up. The dashboard help farmers keep inventory, read blog messages by admins, send messages to each other and check the graphical representation of time.', stack : 'HTML, CSS, JavaScript, ReactJS, Tailwind CSS, Framer Motion, Firebase(Backend Authentications).' },
                    { src: portfolio, alt: 'Portfolio', title: 'UI-UX Portfolio', description : 'This website contains a responsive landing page that offers information about a the UiUx designer and also a contact us section to send messages. ', stack : 'HTML, CSS, JavaScript, Responsive Design.'},
                    { src: makemation, alt: 'Makemation', title: 'Make Mation Demo Website', description : 'This website contains a responsive landing page that offers information about a AI movie made by Toyosi Akerele Ogunsiji, premiering next year. ', stack : 'HTML, CSS, JavaScript, ReactJS, Tailwind CSS, Framer Motion, Responsive Design.' },
                    { src: pension, alt: 'Pension App', title: 'Pension Application Portal' , description : 'This web app portal contains a signup and login page for pension, when a user registers, their information is being stored in the database. A project I did during my internship. ', stack : 'HTML, CSS, JavaScript, Firebase(Database and Authentication) Responsive Design.' },
                    { src: weather, alt: 'Weather App', title: 'Weather App', description : 'This web app helps to get the weather details such as temperature in celsius, humidity and wind speed. I integrated weather API to get the details and it can catch and prevent errors made by users. A project I did during my internship. ', stack : 'HTML, CSS, JavaScript, Weather API Destop Design.'  },
                    { src: edu, alt: 'Education App', title: 'E-Learning Page' , description : 'This website conatins just the hero section of a landing page. I did it for practicing my coding skills during my internship. ', stack : 'HTML, CSS, JavaScript, Responsive Design.' },
                    { src: drumkit, alt: 'Drumkit App', title: 'Drum Kit Web App', description : 'This web app is a project that helped me to master DOM Manipulations in JavaScript. It makes sound once the user clicks on any of the drum kits. ', stack : 'HTML, CSS, JavaScript, Desktop Design.'  },
                ].map((project, index) => (
                    <div
                        key={index}
                        className="bg-zinc-800 flex flex-col rounded-md"
                        data-aos={index % 2 === 0 ? 'flip-left' : 'flip-up'}
                    >
                        <div className="w-full max-h-96 overflow-hidden rounded-t-md">
                          
                            <img
                                src={project.src}
                                alt={project.alt}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="p-3">
                            <p className="font-semibold pb-1">{project.title}</p>
                            <p className='text-sm pb-1'>{project.description}</p>
                            <p className='text-sm font-bold pb-1'>{project.stack}</p>
                            <div>
                                <p className='text-blue-400'>🔗<span className='underline'>Check It Out Here</span> </p>
                            </div>
                        </div>
                    </div>
               ))}
            </div>
        </div>
    );
};

export default Project;
