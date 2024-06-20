import React, { useState, useRef } from 'react' 
import CustomHook from './CustomHook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Contacts() {
const [listcontacts] = useState([
  {
    title: 'Phone Number',
    value: '+91 8490047718',
    info: '+91 8490047718',
    icon: faPhone
  },{
    title: 'Email',
    value: 'jaynptl21@gmail.com',
    info: 'jaynptl21@gmail.com',
    icon: faMailBulk
  },{
    title: 'LinkedIn',
    value: 'https://www.linkedin.com/in/jay-patel-21024d/',
    info: 'Jay Patel',
    icon: faLinkedin
  },{
    title: 'Github',
    value: 'https://github.com/jay02124',
    info: 'jay02124',
    icon: faGithub
  },
{
    title: 'LeetCode',
    value: 'https://leetcode.com/u/jaynptl21/',
    info: 'jaynptl21',
    icon: faCode
  }
])
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);

  return (
    <section className='contacts' ref={scrollTab}>

       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
       </div>
       
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis quae veniam amet nesciunt voluptatibus quis consectetur consequatur quisquam harum.
       </div>
       
       <div className="list"  ref={(el) => el && divs.current.push(el)}>
        {
          listcontacts.map((value, key) => (
            <div className='item' key={key}>
              
              <h3><a href={value.value} target='_blank'><FontAwesomeIcon icon={value.icon}/></a> {value.title}</h3>
              <div>{value.info}</div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Contacts
