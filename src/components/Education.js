import React, { useState, useRef } from 'react' 
import CustomHook from './CustomHook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faUniversity } from '@fortawesome/free-solid-svg-icons';
function Education() {
const [listeducation] = useState([
  {
    institute: 'Bai Ava Bai High School, Valsad',
    marks: 'SSC- 77.33%  in 2017 ',
    link:'https://schools.org.in/valsad/24250100122/bai-avabai-high-school.html#google_vignette',
    icon: faSchool
  },{
    institute: 'Bai Ava Bai High School, Valsad',
    marks: 'HSC- 88.31%  in 2019 ',
    link:'https://schools.org.in/valsad/24250100122/bai-avabai-high-school.html#google_vignette',
    icon: faSchool
  },{
    institute: 'The Maharaja Sayajirao University of Baroda',
    marks: ' Aggregate - 67.54% ',
    link:'https://msub.digitaluniversity.ac/',
    icon: faUniversity
  }
])
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);

  return (
    <section className='education' ref={scrollTab}>

       <div className="title" ref={(el) => el && divs.current.push(el)}>
        My Education
       </div>
       
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        This section contains information about my Education and 
       </div>
       
       <div className="list"  ref={(el) => el && divs.current.push(el)}>
        {
          listeducation.map((value, key) => (
            <div className='item' key={key}>
              
              <h3><a href={value.link} target='_blank'><FontAwesomeIcon icon={value.icon}/></a> {value.institute}</h3>
              <div>{value.marks}</div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Education
