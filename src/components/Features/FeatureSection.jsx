import React from 'react';
import { Novedades } from '../../data/Novedades';
import Features from './Features';
const FeatureSection = () => {
    return (
        <div>
            <div className="px-4 py-5 " id="featured-3" style={{ backgroundColor: '#f7f8f9' }}>
                <div className='container'>
                    <h2 className="pb-2 border-bottom ">NOVEDADES</h2>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        {
                            Novedades.map((item, index) => (
                                <Features key={index} item={item} />
                            ))
                        }
                    </div>
                    <h2 className="pb-2 border-bottom pt-5 ">CURSOS</h2>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <div className="feature col ">
                            <h3 className="fs-2">Featured title</h3>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            <a href="#" className="text-info">
                                Call to action
                            </a>
                        </div>
                        <div className="feature col ">
                            <h3 className="fs-2">Featured title</h3>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            <a href="#" className="text-info">
                                Call to action
                            </a>
                        </div>
                        <div className="feature col ">
                            <h3 className="fs-2">Featured title</h3>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            <a href="#" className="text-info">
                                Call to action
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;