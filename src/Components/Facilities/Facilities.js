import React from 'react';
import './Facilities.css';
import facilities03 from '../../images/facilities/facilities (3).png';
import facilities05 from '../../images/facilities/facilities (5).png';
import facilities06 from '../../images/facilities/facilities (6).png';
import facilities07 from '../../images/facilities/facilities (7).png';
import facilities08 from '../../images/facilities/facilities (8).png';
import facilities10 from '../../images/facilities/facilities (10).png';

const Facilities = () => {
    return (
        <div className="section_design facilities">
            <div className="container">
                <h4 className="section_title">Facilities</h4>
                <div className="row mt-5 all_facilities">
                    <div className="col-md-2 facilities_image">
                        <img src={facilities03} alt="facilities03" className="all_facilities_image"></img>
                    </div>
                    <div className="col-md-2 facilities_image">
                        <img src={facilities08} alt="facilities11" className="all_facilities_image"></img>
                    </div>
                    <div className="col-md-2 facilities_image">
                        <img src={facilities05} alt="facilities05" className="all_facilities_image"></img>
                    </div>
                    <div className="col-md-2 facilities_image">
                        <img src={facilities10} alt="facilities10" className="all_facilities_image"></img>
                    </div>
                    <div className="col-md-2 facilities_image">
                        <img src={facilities07} alt="facilities11" className="all_facilities_image"></img>
                    </div>
                    <div className="col-md-2 facilities_image">
                        <img src={facilities06} alt="facilities11" className="all_facilities_image"></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;