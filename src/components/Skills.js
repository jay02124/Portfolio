import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faMicrosoft, faPython, faNode } from '@fortawesome/free-brands-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'HTML',
    proficiency: '⚪⚪⚪⚪⚫',
    des:'',
    icon: faHtml5
  },
  {
    name: 'CSS',
    proficiency: '⚪⚪⚪⚪⚫',
    des:'',
    icon: faCss3
  },
  {
    name: 'Javascript',
    proficiency: '⚪⚪⚪⚪⚫',
    des:'',
    icon: faJs},
  {
    name: 'ReactJs',
    proficiency: '⚪⚪⚪⚪⚫',
    des:'',
    icon: faReact
  },
  {
    name: 'MS SQL Server',
    proficiency: '⚪⚪⚪⚪⚫',
    des:'',
    icon: faServer
  },
  {
    name: '.NET',
    proficiency: '⚪⚪⚪⚫⚫',
    des:'',
    icon: faMicrosoft
  },
  {
    name: 'Python',
    proficiency: '⚪⚪⚪⚫⚫',
    des:'',
    icon: faPython
  },
  {
    name: 'MongoDB',
    proficiency: '⚪⚪⚪⚫⚫',
    des:'',
    icon: faServer
  },
  {
    name: 'NodeJs',
    proficiency: '⚪⚪⚪⚫⚫',
    des:'',
    icon: faNode
  }

]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This are my Skillsets
       </div>
       <div className="proficiency" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
       </div>

       
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="proficiency">{value.proficiency}</div>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

