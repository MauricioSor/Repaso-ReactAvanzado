import React from 'react';
import FeatureSection from './Features/FeatureSection';
import CoursesSection from './Courses/CoursesSection';

const InformationSection = () => {
    return (
            <div className="px-4 py-5 container" id="featured-3" style={{ backgroundColor: '#f7f8f9' }}>
                <FeatureSection/>
                <CoursesSection/>
            </div>
    );
};

export default InformationSection;