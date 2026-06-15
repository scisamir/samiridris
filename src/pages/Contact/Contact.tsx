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

const contactEmail = 'samzidris11@gmail.com';

const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'portfolio_contact';
const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_3p5l5wk';
const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
    const [ formState, setFormState ] = useState({
        name: "",
        email: "",
        title: "",
        message: ""
    });
    const [isSending, setIsSending] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const buildMailtoLink = () => {
        const subject = encodeURIComponent(formState.title || `Portfolio message from ${formState.name}`);
        const body = encodeURIComponent(
            `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
        );

        return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const templateParams = {
            ...formState,
            from_name: formState.name,
            from_email: formState.email,
            reply_to: formState.email,
            subject: formState.title || `Portfolio message from ${formState.name}`,
        };

        setIsSending(true);

        if (!emailjsPublicKey) {
            toast.info("Opening your email app to complete the message.");
            window.location.href = buildMailtoLink();
            setIsSending(false);
            return;
        }

        try {
            const res = await emailjs.send(
                emailjsServiceId,
                emailjsTemplateId,
                templateParams,
                emailjsPublicKey
            );

            toast.success("Thanks! Your message has been successfully sent.");
            console.log("SUCCESS", res.status, res.text);
            setFormState({
                name: "",
                email: "",
                title: "",
                message: ""
            });
        } catch (err) {
            toast.error("Direct send failed. Opening your email app instead.");
            console.log("FAILED...", err);
            window.location.href = buildMailtoLink();
        } finally {
            setIsSending(false);
        }
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
                            <li><a href={`mailto:${contactEmail}`} aria-label="Email">
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
                        <textarea required name="message" id="message" placeholder="Tell me what you are building..." value={formState.message} onChange={handleInputChange}></textarea>
                        <button type="submit" disabled={isSending}>{isSending ? 'Sending...' : 'Send Message'}</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
