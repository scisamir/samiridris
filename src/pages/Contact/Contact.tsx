import { CiLocationOn } from 'react-icons/ci';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import gmail from '../../assets/gmail.jpg';
import './styles.css'


const Contact = () => {
    return (
        <>
            <section id="contact">
                <h2>Contact Me</h2>
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
                                    <AiFillLinkedin color="#0072b1" fontSize="3rem" />
                                </a></li>
                                <li><a href="https://github.com/scisamir" target="_blank">
                                    <AiFillGithub color="#000000" fontSize="3rem" />
                                </a></li>
                                <li><a href="https://twitter.com/ScientistSamir" target="_blank">
                                    <FaXTwitter color="#000000" fontSize="2.5rem" />
                                </a></li>
                                <li><a href="mailto:samzidris11@gmail.com">
                                    <img src={gmail} alt="gmail logo" style={{height: "2.1rem"}} />
                                </a></li>
                            </ul>
                        </div>
                    </div>
                    <div id='contactForm'>
                        <form action="">
                            <h3>Message Me</h3>
                            <input required type="text" name="name" id="name" placeholder="Enter your Name" />
                            <input required type="email" name="email" id="email" placeholder="Enter your Email" />
                            <input type="text" name="title" id="title" placeholder="Enter message Title" />
                            <textarea name="message" id="message" placeholder="Enter your message..."></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
            <section id="copyright">
                Made with <span>&#10084;</span> by Samir Idris
            </section>
        </>
    );
}

export default Contact;