import React, { useEffect, useState } from 'react';
//import React, { useEffect, useRef } from '@astrojs/react';
// import axios from 'axios';
import { motion } from 'framer-motion';
import Header from '../components/Header.jsx';
// import { useInView } from 'react-intersection-observer';
// import { JSDOM } from 'jsdom';
import '../assets/fonts.css';

//import gsap from "gsap";
//import { useGSAP } from "@gsap/react";





// SHINING LIGHT

/*function SlideInRight({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("show");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{
                type: 'spring',
                mass: 0.1,
                delay: 0.6
            }}
            variants={{
                hidden: { opacity: 0, x: 0 },
                show: {
                    opacity: 1,
                    x: 0
                }
            }}
        >
            {children}
        </motion.div>
    );
}*/


    /*const response = await fetch('http://calapi.inadiutorium.cz/api/v0/en/calendars/default/today')

    const data = await response.json();
    const day = data.celebrations;

    const titles = day.map(celebration => celebration.title);
    console.log(data);


    const searchQuery = titles.join(' ');
    const searchLink = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(searchQuery)}`;


// DO NOT DELETE THIS CODE IT PARTLY WORKS

    const googleResponse = await fetch(searchLink);
    const googleHtml = await googleResponse.text();

    const dom = new JSDOM(googleHtml);


    const imageElements = dom.window.document.querySelectorAll('img');
    const urls = Array.from(imageElements).map(img => img.getAttribute('src'));

    console.log('results', searchLink);

    console.log('image url', urls);


const roseResponse = await fetch('https://the-rosary-api.vercel.app/v1/today');
const roseData = await roseResponse.json();
const rosary = roseData.map(celebration => celebration.mystery);
const rosaryDown = roseData.map(celebration => celebration.mp3Link);


console.log('Rosary: ',roseData);
console.log('Rosary: ',rosary);
console.log('Rosary: ',rosaryDown);

*/


/*function SlideInRight({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("show");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{
                type: 'spring',
                mass: 0.1,
                delay: 0.6
            }}
            variants={{
                hidden: { opacity: 0, x: 100 },
                show: {
                    opacity: 1,
                    x: 160
                }
            }}
        >
            {children}
        </motion.div>
    );
}*/


export default function Celebration(props) {
    const [titles, setTitles] = useState([]);
    const [rosary, setRosaries] = useState([]);
    const [rosaryDown, setRosaryDowns] = useState([]);
    useEffect(() => {
        async function fetchData() {
            /*try {
                const response = await fetch('http://calapi.inadiutorium.cz/api/v0/en/calendars/default/today')

                const data = await response.json();
                const day = data.celebrations;

                const titles = day.map(celebration => celebration.title);
                console.log(data);
                console.log(titles);
                setTitles(titles);


                const searchQuery = titles.join(' ');
                const searchLink = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(searchQuery)}`;


// DO NOT DELETE THIS CODE IT PARTLY WORKS

                const googleResponse = await fetch(searchLink);
                const googleHtml = await googleResponse.text();

                const dom = new JSDOM(googleHtml);


                const imageElements = dom.window.document.querySelectorAll('img');
                const urls = Array.from(imageElements).map(img => img.getAttribute('src'));

                console.log('results', searchLink);

                console.log('image url', urls);*/

                try {
                    const response = await fetch('http://calapi.inadiutorium.cz/api/v0/en/calendars/default/today');
                    const data = await response.json();
                    const day = data.celebrations;
                    console.log(data);
                    const titles = day.map(celebration => celebration.title);
                    setTitles(titles);
                    console.log(titles);

                    const searchQuery = titles.join(' ');
                    const searchLink = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(searchQuery)}`;

                    const googleResponse = await fetch(searchLink);
                    const googleHtml = await googleResponse.text();
                    const dom = new JSDOM(googleHtml);
                    const imageElements = dom.window.document.querySelectorAll('img');
                    const urls = Array.from(imageElements).map(img => img.getAttribute('src'));

                    console.log('Google search results link:', searchLink);
                    console.log('Image URLs:', urls);

                    const roseResponse = await fetch('https://the-rosary-api.vercel.app/v1/today');
                    const roseData = await roseResponse.json();
                    const rosary = roseData.map(celebration => celebration.mystery);
                    const rosaryDown = roseData.map(celebration => celebration.mp3Link);

                    setRosaries(rosary);
                    setRosaryDowns(rosaryDown);

                    console.log('Rosary Data:', roseData);
                    console.log('Rosary:', rosary);
                    console.log('Rosary MP3 Links:', rosaryDown);
                } catch (error) {
                    console.error('Error fetching data:', error.message);
                }
            }

            fetchData();
        }, []);


    return (
        <main className="">
            {props.children}

            <div className="h-screen bg-no-repeat bg-cover bg-center m-0"
                 style={{backgroundImage: `url('/images/jesus.jpeg')`}}></div>
                <Header />
                <motion.h1 animate={{ x: 100 }} className="absolute box top-60 left-5 font-OnestB text-8xl text-white">
                    Shining Bright
                </motion.h1>
            <div className="absolute h-96 w-screen bg-black blur-3xl bottom-0"></div>
            <p className="absolute top-96 left-5 font-OnestB text-white">
                "Shining Light" is your go-to destination for enriching your Catholic faith journey.
                Dive into a wealth of articles, reflections, prayers, and multimedia content designed
                to inspire and deepen your understanding of Catholic teachings.
                Join our inclusive online community for meaningful dialogue, personal growth,
                and spiritual nourishment. Discover the path to a brighter,
                more meaningful relationship with your faith at "Shining Light.".</p>

        <div className="relative">
            <h2 className="font-OnestB text-2xl mt-30 mb-2">Day</h2>
            <div className="flex">
                <p className="font-Onest italic mb-5">{titles.join(', ')}</p>
                {/*<img className=" w-1/3 rounded-lg" src={urls[3]} alt="First Image"/>*/}
        </div>
    </div>
    <div className="text-center">
        <h1 className="font-black text-4xl mt-30 mb-2">Rosary</h1>
        <p className="italic text-2xl">{rosary.join(', ')} Mysteries</p>
        <audio controls>
            <source src={rosaryDown} type="audio/mpeg"/>
        </audio>
    </div>

        </main>

)
}

// };

;