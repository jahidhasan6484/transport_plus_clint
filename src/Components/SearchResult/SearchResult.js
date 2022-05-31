import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchResult.css';

const SearchResult = () => {
    const [count, setCount] = useState("A3");
    return (
        <div className="section_design search_result">
            <div className="container">
                <h4 className="section_title">Your search result</h4>
                <nav>
                    <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                        <button className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="false" tabindex="-1">11:00 AM</button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" tabindex="-1">11:30 AM</button>
                        <button className="nav-link active" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="true">01:00 PM</button>
                    </div>
                </nav>

                <div className="tab-content" id="nav-tabContent">
                    <div className="row">
                        <div className="col ticket_count">
                            <p>Total</p>
                            <p>40</p>
                        </div>
                        <div className="col ticket_count">
                            <p>Booked</p>
                            <p>22</p>
                        </div>
                        <div className="col ticket_count">
                            <p>Avialable</p>
                            <p>18</p>
                        </div>
                        <div className="col ticket_count">
                            <p>Standing</p>
                            <p>10</p>
                        </div>
                    </div>
                </div>

                <div className="row ticket_ui">
                    <div className="col-md-8">
                        <div className="seat_status">
                            <p className="avialable_seat"> Avialable</p>
                            <p className="selected_seat"> Selected</p>
                            <p className="unavialable_seat"> Unavailable</p>
                        </div>
                        <div className="container">
                            <div className="seats">
                                <div>
                                    <div className="coloum_name">A</div>
                                    <div className="seat unavailable">A1</div>
                                    <div className="seat unavailable">A2</div>
                                    <div className="seat selected">A3</div>
                                    <div className="seat unavailable">A4</div>
                                    <div className="seat available">A5</div>
                                    <div className="seat available">A6</div>
                                    <div className="seat unavailable">A7</div>
                                    <div className="seat unavailable">A8</div>
                                    <div className="seat unavailable">A9</div>
                                    <div className="seat unavailable">A10</div>
                                </div>
                                <div>
                                    <div className="coloum_name">B</div>
                                    <div className="seat unavailable">B1</div>
                                    <div className="seat unavailable">B2</div>
                                    <div className="seat unavailable">B3</div>
                                    <div className="seat available">B4</div>
                                    <div className="seat available">B5</div>
                                    <div className="seat available">B6</div>
                                    <div className="seat unavailable">B7</div>
                                    <div className="seat unavailable">B8</div>
                                    <div className="seat unavailable">B9</div>
                                    <div className="seat unavailable">B10</div>
                                </div>

                                <div>
                                    <div className="coloum_name">CN</div>
                                    <div className="seat_number">1</div>
                                    <div className="seat_number">2</div>
                                    <div className="seat_number">3</div>
                                    <div className="seat_number">4</div>
                                    <div className="seat_number">5</div>
                                    <div className="seat_number">6</div>
                                    <div className="seat_number">7</div>
                                    <div className="seat_number">8</div>
                                    <div className="seat_number">9</div>
                                    <div className="seat_number">10</div>
                                </div>
                                <div>
                                    <div className="coloum_name">C</div>
                                    <div className="seat available">C1</div>
                                    <div className="seat available">C2</div>
                                    <div className="seat available">C3</div>
                                    <div className="seat available">C4</div>
                                    <div className="seat available">C5</div>
                                    <div className="seat available">C6</div>
                                    <div className="seat unavailable">C7</div>
                                    <div className="seat available" onClick={() => setCount("C8")}>C8</div>
                                    <div className="seat available" onClick={() => setCount("C9")}>C9</div>
                                    <div className="seat available" onClick={() => setCount("C10")}>C10</div>

                                </div>
                                <div>
                                    <div className="coloum_name">D</div>
                                    <div className="seat unavailable">D1</div>
                                    <div className="seat unavailable">D2</div>
                                    <div className="seat unavailable">D3</div>
                                    <div className="seat unavailable">D4</div>
                                    <div className="seat unavailable">D5</div>
                                    <div className="seat unavailable">D6</div>
                                    <div className="seat available">D7</div>
                                    <div className="seat available" onClick={() => setCount("D8")}>D8</div>
                                    <div className="seat available" onClick={() => setCount("D9")}>D9</div>
                                    <div className="seat available" onClick={() => setCount("D10")}>D10</div>
                                </div>
                            </div>
                            <button className="standing_ticket_button" onClick={() => setCount("Standing")}>Get a standing ticket</button>
                        </div>
                    </div>
                    <div className="col-md-4 pt-5">
                        <div className="ticket_details">
                            <p>Bus Name: </p>
                            <p>Rajanigandha</p>
                        </div>
                        <div className="ticket_details">
                            <p>Departure Time: </p>
                            <p>11:30 AM</p>
                        </div>
                        <div className="ticket_details">
                            <p>Departure Place: </p>
                            <p>Dhanmondi</p>
                        </div>
                        <div className="ticket_details">
                            <p>Your Seat: </p>
                            <p>{count}</p>
                        </div>
                        <div className="ticket_details">
                            <p>Price: </p>
                            <p>35 BDT</p>
                        </div>
                        <Link to="/payment">
                            <button className="submit_button">CONTINUE</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;