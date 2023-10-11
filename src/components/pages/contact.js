import React, { useState, useRef } from "react";
import "../styles/contact.css"
import emailjs from '@emailjs/browser';

function SuccessModal({ show, onClose }) {
    return (
        <div className={`modal fade-in ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Form Submitted Successfully!</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        We'll be in touch soon!
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Contact = () => {

    const [selectedOption, setSelectedOption] = useState("What type of photo session would you like to book with me?");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const updateSelectedOption = (optionText) => {
        setSelectedOption(optionText);
    }

    const form = useRef();

    const sendForm = (e) => {
        e.preventDefault();

        const nameInput = form.current.querySelector('input[name="name"]').value;
        const phoneInput = form.current.querySelector('input[name="phone"]').value;
        const emailInput = form.current.querySelector('input[name="email"]').value;
        const inquiryTypeInput = selectedOption;
        const messageInput = form.current.querySelector('textarea[name="message"]').value;

        if (!/^\d{3}-\d{3}-\d{4}$/.test(phoneInput) && !/^\d{10}$/.test(phoneInput)) {
            alert("Please enter a valid phone number in the format '555-555-5555' or '5555555555'.");
            e.preventDefault();
            return;
        }
        if (
            nameInput !== "" &&
            phoneInput !== "" &&
            emailInput !== "" &&
            inquiryTypeInput !== "What type of photo session would you like to book with me?" &&
            messageInput !== ""
        ) {
            console.log("Form submitted");
            setIsModalOpen(true);
            // emailjs.sendForm('service_dzeb4os', 'template_nnq7g1f', form.current, '9boZX1F3ht1F4VDmO')
            //     .then((result) => {
            //         console.log(result.text);
            //     }, (error) => {
            //         console.log(error.text);
            //     });
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="fade-in d-flex my-5 flex-column align-items-center">
            <h1 className="gloock">CONTACT ME</h1>
            <div className="d-flex flex-column allura col-xxl-4 col-xl-5 col-lg-6 col-md-7 col-sm-8 col-9 mb-3">
                <h3 className="ms-5">Please complete the form below</h3>
                <h3 className="me-5 align-self-end text-decoration-underline">I look forward to connecting with you!</h3>
            </div>
            <form ref={form} onSubmit={sendForm} className="fs-5 d-flex flex-column col-xxl-6 col-8 border border-light p-2 row g-1">
                <div className="mb-3">
                    <label className="form-label">NAME</label>
                    <input name="name" className="form-control" placeholder="Jane Doe" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">PHONE NUMBER</label>
                    <input name="phone" className="form-control" placeholder="555-555-5555" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">EMAIL ADDRESS</label>
                    <input name="email" type="email" id="email" className="form-control" placeholder="name@example.com" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">INSTAGRAM HANDLE</label>
                    <input name="instagram" className="form-control" placeholder="optional" />
                </div>
                <div className="col-12 mb-3">
                    <label className="form-label">TYPE OF INQUIRY</label>
                    <button name="inquiryType" type="button" id="selectedOption" className="col-12 btn btn-light text-start dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" required>
                        {selectedOption}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-start">
                        <li><button className="dropdown-item" type="button" onClick={() => updateSelectedOption('Families')} >Families</button></li>
                        <li><button className="dropdown-item" type="button" onClick={() => updateSelectedOption('Couples')} >Couples</button></li>
                        <li><button className="dropdown-item" type="button" onClick={() => updateSelectedOption('Graduation')}>Graduation</button></li>
                        <li><button className="dropdown-item" type="button" onClick={() => updateSelectedOption('Maternity')}>Maternity</button></li>
                        <li><button className="dropdown-item" type="button" onClick={() => updateSelectedOption('Headshots')}>Headshots</button></li>
                    </ul>
                </div>
                <div className="mb-3 col-12">
                    <label className="form-label">YOUR INSPIRATION</label>
                    <textarea name="message" className="form-control" placeholder="Tell me all the fun details! Your inspiration for the shoot, date, desired location, ideas, etc." rows="3" required></textarea>
                </div>
                <button className="submitBtn col-4 col-sm-3 align-self-start">Submit</button>
            </form>
            <SuccessModal show={isModalOpen} onClose={closeModal} />
        </div>
    )
}

export default Contact;