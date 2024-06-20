import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas, faLink } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Experience() {
const [listExperience] = useState([
  {
    name: 'FULLSTACK INTERN',
    des: 'This project has functionality like admin can add/delete/modify the technical staff and faculty staff and also can see the analytics of queries. Users can enter email and verify then they can make any query, then the support staff can either reply his query or forward to the respective staff assign to that saction and he can reply his query,user can also livetrack his query.',
    mission: 'Learn about AngularJS and .NET in the first 2 weeks through Training, them made a Fullstack Project from scratch',
    language: 'HTML5, CSS3, AngularJS, javaScript, BootStrap, MS SQL Server for database',
    images: '/Experience.PNG',
    link : 'https://drive.google.com/drive/folders/18hg-Rj2lHKuX9t3t5CxYHQK6hlVoVZlB?usp=drive_link'
  }
  

]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='experience' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        My Experience
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        This is project that i have made during the internship - Helpdesk
       </div>
       <div className="list">
        {
          listExperience.map((value, key) => (
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
                      <h4><a href={value.link} target="_">🔗Project link🔗</a></h4>
                        
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
export default Experience
