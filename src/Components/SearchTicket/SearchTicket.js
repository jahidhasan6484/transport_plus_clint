import React, { useRef, useState } from "react";
import './SearchTicket.css';
import Options from "./Options";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from 'date-fns/addDays';
import { useNavigate } from "react-router-dom";

const SearchTicket = () => {
    const navigate = useNavigate();

    const [selectType, setSelectType] = useState(false);
    const [warning, setWarning] = useState(true);
    const [journeyType, setJourneyType] = useState();
    const [departureType, setDepartureType] = useState(false);
    const [returnType, setReturnType] = useState(false);

    const [date, setDate] = useState(null);


    const handleChange = (e) => {
        const searchType = e.target.value;
        setJourneyType(searchType);

        if (searchType === "Departure") {
            setReturnType(false);
            setDepartureType(true);
        }
        else if (searchType === "Return") {
            setReturnType(true);
            setDepartureType(false);
        };

        setWarning(false);
    }

    const fromRef = useRef();
    const toRef = useRef();
    const timeRef = useRef();


    const handleSearchData = (e) => {
        const from = fromRef.current.value;
        const to = toRef.current.value;
        const time = timeRef.current.value;


        const dhanmondi = ["Dhanmondi", "Sobhanbag", "Shyamoli Square", "Technical Mor", "Majar Road Gabtoli", "Konabari Bus Stop", "Eastern Housing Rup Nogor", "Birulia Bus Stand", "Daffodil Smart City"];
        const uttara = ["Uttara - Rajlokkhi", "House building", "Grand Zomzom Tower", "Diyabari Bridge", "Beribadh", "Birulia", "Khagan", "Daffodil Smart City"];
        const tongiCollegeGate = ["Tongi College Gate Bus Stand", "Kamar Para", "Dhour", "Daffodil Smart City"];

        let route = "";

        if (dhanmondi.includes(from) && dhanmondi.includes(to)) {
            route = "Dhanmondi";
        }
        else if (uttara.includes(from) && uttara.includes(to)) {
            route = "Uttara";
        }
        else if (tongiCollegeGate.includes(from) && tongiCollegeGate.includes(to)) {
            route = "Tongi College Gate";
        }

        let dateFormate = '';

        if (date) {
            dateFormate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
            sessionStorage.setItem('date', dateFormate);
        }

        sessionStorage.setItem('from', from);
        sessionStorage.setItem('to', to);
        sessionStorage.setItem('route', route);
        sessionStorage.setItem('time', time);
        sessionStorage.setItem('journeyType', journeyType);

        navigate('/searchResult');
        e.preventDefault();
    }


    return (
        <div className="section_design searchTicket">
            <div className="container">
                <h4 className="section_title">Search Ticket</h4>

                <div>
                    <nav className="nav">
                        <div className="search__type">
                            <label>Departure</label>
                            <input type="radio" name="search_type" value="Departure" onChange={handleChange} onClick={() => setSelectType(true)} />
                        </div>

                        <div className="search__type">
                            <input type="radio" name="search_type" value="Return" onChange={handleChange} onClick={() => setSelectType(true)} />
                            <label>Return</label>
                        </div>

                    </nav>
                    {
                        warning &&
                        <p className="warning">please select the type of ticket you want first!</p>
                    }

                    {
                        selectType &&

                        <form onSubmit={handleSearchData}>

                            <div>
                                <label className="form-label">FROM</label>
                                {
                                    returnType ?
                                        <select ref={fromRef} className="form-select" required>
                                            <option selected="" >Daffodil Smart City</option>
                                        </select>
                                        :
                                        <select ref={fromRef} className="form-select" required>
                                            <Options />
                                        </select>
                                }
                            </div>


                            <div>
                                <label className="form-label">TO</label>
                                {
                                    departureType ?
                                        <select ref={toRef} className="form-select" required>
                                            <option selected="" >Daffodil Smart City</option>
                                        </select>
                                        :
                                        <select ref={toRef} className="form-select" required>
                                            <Options />
                                        </select>
                                }
                            </div>

                            <div>
                                <label className="form-label">DATE</label>

                                <DatePicker className="form-select"
                                    selected={date}
                                    onChange={(e) => setDate(e)}
                                    minDate={new Date()}
                                    maxDate={addDays(new Date(), 4)}
                                    dateFormat="MMMM d, yyyy"
                                    placeholderText="June 11, 2022"
                                    required
                                />

                            </div>

                            <div>
                                <label className="form-label">TIME</label>
                                <select ref={timeRef} className="form-select" required>
                                    <option selected="" disabled="" value="">Select...</option>
                                    <option>08:30 AM</option>
                                    <option>09:00 AM</option>
                                    <option>09:30 AM</option>
                                    <option>10:00 AM</option>
                                    <option>10:30 AM</option>
                                    <option>11:00 AM</option>
                                    <option>11:30 AM</option>
                                    <option>12:00 PM</option>
                                    <option>03:00 PM</option>
                                    <option>03:30 PM</option>
                                    <option>04:00 PM</option>
                                    <option>04:30 PM</option>
                                    <option>05:00 PM</option>
                                    <option>05:30 PM</option>
                                </select>
                            </div>

                            <div>
                                <input type="submit" value="Search" className='_button' />
                            </div>

                        </form>
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchTicket;