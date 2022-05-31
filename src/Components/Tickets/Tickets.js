import React, { useState } from 'react';
import './Tickets.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from 'date-fns/addDays';
import { Link } from 'react-router-dom';
import Options from './Options';
import ticket from '../../images/tickets/04.png';

const Tickets = () => {

    const [data, setData] = useState({
        from: "",
        to: "",
        date: ""
    });


    const [startDate, setStartDate] = useState(null);

    const dhanmondi = ["Dhanmondi", "Sobhanbag", "Shyamoli Square", "Technical Mor", "Majar Road Gabtoli", "Konabari Bus Stop", "Eastern Housing Rup Nogor", "Birulia Bus Stand", "Daffodil Smart City"];

    const uttara = ["Uttara - Rajlokkhi", "House building", "Grand Zomzom Tower", "Diyabari Bridge", "Beribadh", "Birulia", "Khagan", "Daffodil Smart City"];

    const tongiCollegeGate = ["Tongi College Gate Bus Stand", "Kamar Para", "Dhour", "Daffodil Smart City"];

    let route = "";

    if (dhanmondi.includes(data.from) && dhanmondi.includes(data.to)) {
        route = "Dhanmondi";
    }
    else if (uttara.includes(data.from) && uttara.includes(data.to)) {
        route = "Uttara";
    }
    else if (tongiCollegeGate.includes(data.from) && tongiCollegeGate.includes(data.to)) {
        route = "Tongi College Gate";
    }

    const handleChange = (e) => {
        const searchType = e.target.value;

        if (searchType === "departure") {
            setSelectTo(false);
            setSelectFrom(true);
        }
        else if (searchType === "return") {
            setSelectTo(true);
            setSelectFrom(false);
        };

        setData({
            ...data,
            from: "",
            to: ""
        });

        setWarning(false);
    }

    const [selectFrom, setSelectFrom] = useState(false);

    const [selectTo, setSelectTo] = useState(false);

    const [journeyType, setJourneyType] = useState(false);

    const [warning, setWarning] = useState(true);


    return (
        <div className="section_design ticket">
            <div className="container">
                <h4 className='section_title'>Get Ticket</h4>
                <div className="row">
                    <div className="col-md-4 search_title">
                            <img src={ticket} alt="ticket"></img>
                    </div>
                        <div className="col-md-8 search_area">
                                <h6 className="search_question">Where do you want to go?</h6>
                            <nav className="nav">
                                <div className="search__type">
                                    <label>Departure</label>
                                    <input type="radio" name="search_type" value="departure" onChange={handleChange} onClick={() => setJourneyType(true)} />
                                </div>

                                <div className="search__type">
                                    <input type="radio" name="search_type" value="return" onChange={handleChange} onClick={() => setJourneyType(true)} />
                                    <label>Return</label>
                                </div>
                            </nav>


                            {
                                warning &&
                                <p className="search_warning">please select the type of ticket you want first!</p>
                            }

                            {
                                journeyType && <form className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label">FROM</label>
                                        {
                                            selectTo ?
                                                <select onChange={e => setData({ ...data, from: e.target.value })} className="form-select">
                                                    <option selected="" disabled="" value="">Select...</option>
                                                    <option selected="">Daffodil Smart City</option>
                                                </select>
                                                :
                                                <select onChange={e => setData({ ...data, from: e.target.value })} className="form-select">
                                                    <Options />
                                                </select>
                                        }
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">TO</label>
                                        {
                                            selectFrom ?
                                                <select onChange={e => setData({ ...data, to: e.target.value })} className="form-select">
                                                    <option selected="" disabled="" value="">Select...</option>
                                                    <option>Daffodil Smart City</option>
                                                </select>
                                                :
                                                <select onChange={e => setData({ ...data, to: e.target.value })} className="form-select">
                                                    <Options />
                                                </select>
                                        }
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">DATE</label>

                                        <DatePicker className="form-select"
                                            selected={startDate}
                                            onChange={(e) => setStartDate(e)}
                                            minDate={new Date()}
                                            maxDate={addDays(new Date(), 4)}
                                            dateFormat="MMMM d, yyyy"
                                            placeholderText="June 11, 2022"
                                        />

                                    </div>
                                    <div className="col-md-6">
                                        <Link to="/searchResult">
                                            <input type="button" className="submit_button" value="SEARCH" />
                                        </Link>
                                    </div>
                                </form>
                            }
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Tickets;
