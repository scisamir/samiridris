import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify'
import { CiLocationOn } from 'react-icons/ci';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from 'react-icons/fa6';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css'


const Contact = () => {
    const [ formState, setFormState ] = useState({
        name: "",
        email: "",
        title: "",
        message: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Send Email
        emailjs.send(
            "portfolio_contact",
            "template_3p5l5wk",
            formState,
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then((res) => {
            toast.success("Thanks! Your message has been successfully sent.");
            console.log("SUCCESS", res.status, res.text);
        }, (err) => {
            toast.error("Oops! Your message was unable to be sent. Please try again.");
            console.log("FAILED...", err);
        });

        setFormState({
            name: "",
            email: "",
            title: "",
            message: ""
        });
    }

    return (
        <section id="contact" className="sectionPad darkSection">
            <div className="sectionHeading">
                <p className="eyebrow">Contact</p>
                <h2>Let's talk about Web3, AI, biotech, or ambitious product ideas.</h2>
            </div>
            <ToastContainer theme='dark' position='bottom-center' />
            <div className="contactLayout">
                <div id='contactInfo'>
                    <h3>Available for protocol, product, and ecosystem work.</h3>
                    <p className="contactIntro">
                        I am especially interested in projects that connect decentralized systems with real-world
                        research, finance, biotechnology, agritech, and AI-enabled workflows.
                    </p>
                    <ul>
                        <li>
                            <BsFillPersonLinesFill fontSize="2.7rem" />
                            <div>
                                <p>Name</p>
                                <p className='contactDetails'>Samir Idris</p>
                            </div>
                        </li>
                        <li>
                            <CiLocationOn fontSize="3rem" />
                            <div>
                                <p>Location</p>
                                <p className='contactDetails'>Abuja</p>
                            </div>
                        </li>
                        <li>
                            <AiOutlineMail fontSize="2.7rem" />
                            <div>
                                <p>Email</p>
                                <p className='contactDetails'>samzidris11@gmail.com</p>
                            </div>
                        </li>
                    </ul>
                    <div id='socials'>
                        <p>Find me online</p>
                        <ul>
                            <li><a href="https://linkedin.com/in/scisamir" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <AiFillLinkedin color="#FFFFFF" fontSize="3rem" />
                            </a></li>
                            <li><a href="https://github.com/scisamir" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <AiFillGithub color="#FFFFFF" fontSize="3rem" />
                            </a></li>
                            <li><a href="mailto:samzidris11@gmail.com" aria-label="Email">
                                <BiLogoGmail color="#FFFFFF" fontSize="3rem" />
                            </a></li>
                            <li><a href="https://twitter.com/ScientistSamir" target="_blank" rel="noreferrer" aria-label="X Twitter">
                                <FaXTwitter color="#FFFFFF" fontSize="3rem" />
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div id='contactForm'>
                    <form onSubmit={handleSubmit}>
                        <h3>Send a message</h3>
                        <input required type="text" name="name" id="contact-name" placeholder="Your name" value={formState.name} onChange={handleInputChange} />
                        <input required type="email" name="email" id="email" placeholder="Your email" value={formState.email} onChange={handleInputChange} />
                        <input type="text" name="title" id="title" placeholder="Subject" value={formState.title} onChange={handleInputChange} />
                        <textarea name="message" id="message" placeholder="Tell me what you are building..." value={formState.message} onChange={handleInputChange}></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
