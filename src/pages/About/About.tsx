// import 

import './styles.css'

const About = () => {
    return (
        <>
            <section id="about">
                <h2>About Me</h2>
                <div>
                    <figure>
                        <img className="myPix" src="/myPix.jpg" alt="A picture of me" />
                        <figcaption>Samir Idris <br /> Software Engineer</figcaption>
                    </figure>
                    
                    <div>
                        <p>The curiosity to know how things work under the hood, the fascinating quality of technology,
    that unique joy you get when you solve a problem or fix a bug, and the limitless value one can create with it,
    made me venture into tech around early 2020.</p>
                        <p>Though I made some mistakes along the way like learning without practicing, over multi-tasking, and procrastination,
    I learnt alot from them. From freecodecamp to w3schools, sololearn, linkedin learning, and others,
    I kept navigating through the tech learning space completing different courses and practicing.
                        </p>
                        <p>Maybe I thought of myself as a super-human who can do 4 full-time programmes at the same time, in 2022, I decided to take
    on the notorious 70hr/wk 15 months long ALX Software Engineering programme along with 3 other time demanding
    programmes (Udacity Cloud DevOps Engineering, HNGi9 Internship, and LinuxJobber internship).
    On realizing that, I decided to focus on and completed HNGi9 Internship
    (Frontend Track; Since I had experience with Frontend Development) and Udacity Cloud DevOps Engineering. Later on,
    I resumed the ALX Software Engineering programme.
                        </p>
                        <p>The whole journey wouldn't have been possible without immense dedication,
    discipline, perseverance, consistency, and determination. In the nearest future, I hope to build softwares
    that will improve the lives of millions of people.
                        </p>
    
                    </div>
                </div>
            </section>
            <section id="copyright">
                Made with <span>&#10084;</span> by Samir Idris
            </section>
        </>
    );
}

export default About;