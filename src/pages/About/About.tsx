import './styles.css'

const About = () => {
    const strengths = [
        {
            title: 'Research-trained builder',
            text: 'First Class Botany graduate from Ahmadu Bello University, Zaria, and best graduating student in the department.'
        },
        {
            title: 'Founder and Web3 product engineer',
            text: 'Co-founder at Lucent Labs with hands-on experience shipping dApps, dashboards, protocol tooling, and smart contract integrations.'
        },
        {
            title: 'Cross-domain curiosity',
            text: 'Focused on the overlap between decentralized systems, AI, biotechnology, agritech, and entrepreneurship.'
        }
    ];

    const interests = ['Web3', 'AI', 'Biotechnology', 'Agritech', 'Entrepreneurship'];

    return (
            <section id="about" className="sectionPad lightSection">
                <div className="sectionHeading">
                    <p className="eyebrow">About me</p>
                    <h2>Engineering decentralized products with a scientist's curiosity.</h2>
                </div>
                <div className="aboutGrid">
                    <div className="aboutStory">
                        <p>
                            I am a Software Engineer and Blockchain Developer passionate about building technologies
                            at the intersection of Web3, AI, biotechnology, and entrepreneurship.
                        </p>
                        <p>
                            I graduated from Ahmadu Bello University, Zaria with First Class Honours in Botany. Alongside
                            that academic foundation, I transitioned into software engineering and blockchain development,
                            where I have built and contributed to applications across the Cardano and EVM ecosystems.
                        </p>
                        <div className="interestList" aria-label="Interests">
                            {interests.map((interest) => (
                                <span key={interest}>{interest}</span>
                            ))}
                        </div>
                    </div>
                    <div className="aboutHighlights" aria-label="Profile strengths">
                        {strengths.map((strength) => (
                            <article key={strength.title}>
                                <h3>{strength.title}</h3>
                                <p>{strength.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
    );
}

export default About;
