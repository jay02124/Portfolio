import React, { useState,useRef } from 'react' 
import CustomHook from './CustomHook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';


function Home() {
    const [listHome] = useState([
        {
          title: 'LinkedIn',
          value: 'https://www.linkedin.com/in/jay-patel-21024d/',
          icon: faLinkedin
        },{
          title: 'Github',
          value: 'https://github.com/jay02124',
          icon: faGithub
        },
      {
          title: 'LeetCode',
          value: 'https://leetcode.com/u/jaynptl21/',
          icon: faCode
        }
      ])
const divs = useRef([]);

const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span>Jay Patel</span>
            </div>
            <div className="des">
                {/* 30 */}
                Full-stack developer proficient in backend and frontend development, driven by a passion for learning and innovation. Skilled in creating meticulously crafted, fully functional code for diverse web platforms. Seeking an opportunity to recognizes my true potential and provides me with sufficient avenues for professional growth            </div>
            
            <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
            <div className="links"  ref={(el) => el && divs.current.push(el)}>
            {
                listHome.map((value, key) => (
                <div className='item' key={key}>
              
                    <h3><a href={value.value} target='_blank'><FontAwesomeIcon icon={value.icon}/></a> {value.title}</h3>
                    
                </div>
                ))

            }
            </div>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/AVTAR1.png" alt="" />
                <div className="info">
                    <div>Fullstack Developer</div>
                    <div>21/11</div>
                    <div>Male</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
