import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas, faLink } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: 'Real-Estate website',
    des: "Learning to create a React application that fetches data through the Bayut API from RapidAPI. The project involves integrating the API to retrieve real estate data, such as rental homes and properties for sale, and displaying it within the application. This process will help you understand how to make API calls, handle responses, and present the data in a user-friendly manner within a React app.",
    mission: 'Learn ReactJS by creating a dynamic web application that fetches and displays data from the Bayut API via RapidAPI. This project covers React fundamentals and API integration.',
    language: 'HTML5, CSS3, React JS,javaScript',
    images: '/project1.PNG',
    link : 'https://real-estate-wine-two.vercel.app/'
  },
  {
    name: 'Recipe-Finder with React & TailwindCSS',
    des: 'A React application where you can search for recipes, view the results, and click to watch a YouTube video. You can also mark recipes as favorites, which will be displayed in the favorites tab.',
    mission: 'To practice front-end development with React and learn how to fetch data through APIs.',
    language: 'HTML5, CSS3, React JS, javaScript,...',
    images: '/project2.PNG',
    link : 'https://recipe-finder-pink.vercel.app/'
  },
  {
    name: 'FlappyBird Game using KaboomJS',
    des: 'Learning frontend development with React and using KaboomJS to make a game for the first time. KaboomJS has prebuilt functions for gravity, backgrounds, and collisions.',
    mission: 'To practice front-end development with React and learn to use the KaboomJS library for game design.',
    language: 'HTML5, CSS3, React JS, javaScript,KaboomJs,...',
    images: '/project3.PNG',
    link : 'https://github.com/jay02124/flappy-bird-master'
  },

]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This are my Projects
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        This are some projects that i have made for learning purposes
       </div>
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Mission</h4>
                        <div className="des">{value.mission}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Languages</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
                <div className="mission">
                  <div><FontAwesomeIcon icon={faLink} /></div>
                    <div>
                      <div className="des">
                      <h4><a href={value.link} target="_blank">🔗Project link🔗</a></h4>
                        
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects
