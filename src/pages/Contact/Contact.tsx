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
        <section id="contact">
            <h2>Contact Me</h2>
            <ToastContainer theme='dark' position='bottom-center' />
            <div>
                <div id='contactInfo'>
                    <h3>Contact Info</h3>
                    <ul>
                        <li>
                            <BsFillPersonLinesFill fontSize="2.7rem" />
                            <div>
                                <p>Name:</p>
                                <p className='contactDetails'>Samir Idris</p>
                            </div>
                        </li>
                        <li>
                            <CiLocationOn fontSize="3rem" />
                            <div>
                                <p>Location:</p>
                                <p className='contactDetails'>Abuja, Nigeria</p>
                            </div>
                        </li>
                        <li>
                            <AiOutlineMail fontSize="2.7rem" />
                            <div>
                                <p>Email:</p>
                                <p className='contactDetails'>samzidris11@gmail.com</p>
                            </div>
                        </li>
                    </ul>
                    <div id='socials'>
                        <p>Social Handles</p>
                        <ul>
                            <li><a href="https://linkedin.com/in/scisamir" target="_blank">
                                <AiFillLinkedin color="#FFFFFF" fontSize="3rem" />
                            </a></li>
                            <li><a href="https://github.com/scisamir" target="_blank">
                                <AiFillGithub color="#FFFFFF" fontSize="3rem" />
                            </a></li>
                            <li><a href="mailto:samzidris11@gmail.com">
                                <BiLogoGmail color="#FFFFFF" fontSize="3rem" />
                            </a></li>
                            <li><a href="https://twitter.com/ScientistSamir" target="_blank">
                                <FaXTwitter color="#FFFFFF" fontSize="3rem" />
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div id='contactForm'>
                    <form onSubmit={handleSubmit}>
                        <h3>Message Me</h3>
                        <input required type="text" name="name" id="name" placeholder="Enter your Name" value={formState.name} onChange={handleInputChange} />
                        <input required type="email" name="email" id="email" placeholder="Enter your Email" value={formState.email} onChange={handleInputChange} />
                        <input type="text" name="title" id="title" placeholder="Enter message Title" value={formState.title} onChange={handleInputChange} />
                        <textarea name="message" id="message" placeholder="Enter your message..." value={formState.message} onChange={handleInputChange}></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;