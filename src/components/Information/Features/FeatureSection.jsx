import React from 'react';
import Features from './Features';
import { Novedades } from '../../../data/Novedades';

const FeatureSection = () => {
    return (
        <div>
                    <h2 className="pb-2 border-bottom ">NOVEDADES</h2>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        {
                            Novedades.map((item, index) => (
                                <Features key={index} item={item} />
                            ))
                        }
                    </div>
        </div>
    );
};

export default FeatureSection;