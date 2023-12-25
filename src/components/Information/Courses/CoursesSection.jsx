import React from 'react';
import { Temario } from '../../../data/Temario';
import Courses from './Courses';

const CoursesSection = () => {
    return (
        <div>
            <h2 className="pb-2 border-bottom pt-5 ">CURSOS</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    {
                        Temario.map((item,index)=>(
                            <Courses key={index} item={item}/>
                        ))
                    }
                
            </div>
        </div>
    );
};

export default CoursesSection;