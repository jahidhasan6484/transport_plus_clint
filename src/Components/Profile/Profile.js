import React, { useEffect, useState } from "react";
import './Profile.css';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import profilePhoto from '../../images/bg/profile.svg';

const Profile = () => {
    const [user] = useAuthState(auth);

    const [userTicket, setUserTicket] = useState([]);

    useEffect(() => {
        fetch('https://transport-plus-server.herokuapp.com/updateUserTicketCollection')
            .then(res => res.json())
            .then(data => {
                const filterResult =
                    data.filter(ticket =>
                        ticket.user === `${user.email}`
                    );
                setUserTicket(filterResult);
            });
    }, []);

    return (
        <div className="section">
            <div className="container" id="profile">
            <h4 className="section_title">আপনার <span className="highlight">প্রোফাইল</span></h4>

            <div className="row">
                <div className="col-md-12 profileImage">
                    <img src={profilePhoto} alt="profileImage"></img>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="info">
                        <p className="infoLabel">ইমেইল এড্রেস:</p>
                        <p className="infoData"> {user.email}</p>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="info">
                        <p className="infoLabel">রিসেন্ট টিকিট:</p>
                        {
                            userTicket.map((ticket, index) =>
                                <>
                                    <div className="infoData2">
                                        <p>{index+=1}</p>
                                        <p>{ticket.date}</p>
                                        <p>{ticket.busName}</p>
                                        <p>{ticket.seatName}</p>
                                    </div>
                                </>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
        </div>

    )
}

export default Profile;