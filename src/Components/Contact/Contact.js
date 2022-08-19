import React from "react";
import './Contact.css';
import contact from '../../images/bg/contact.gif';

const Contact = () => {
    return (
        <div className="section">
            <div className="container contact">
                <h4 className="section_title"><span className="highlight">কন্টাক্ট </span>করুন</h4>
                <div className="row">
                    <div className="col-md-12 contact_content">
                        <h3>মো: জাহিদ হাসান</h3>
                        <p>স্টুডেন্ট, কম্পিউটার সায়েন্স এন্ড ইঞ্জনিয়ারিং,</p>
                        <p>ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি।</p>
                    </div>
                    {/* <div className="col-md-6">
                        <img src={contact}></img>
                    </div> */}
                </div>

            </div>

        </div>
    )
}

export default Contact;
