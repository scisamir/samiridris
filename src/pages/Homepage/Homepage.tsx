import { BsChevronDoubleDown } from 'react-icons/bs'

import './styles.css'

export default function HomePage() {
	return (
		<section id="homepage">
			<div className="heroInner">
				<div className="heroCopy">
					<p className="eyebrow">Cardano, EVM, AI and biotechnology</p>
					<h1>Samir Idris</h1>
					<p className="heroHeadline">
						Software Engineer | Blockchain Developer | Web3 Builder | AI & Biotechnology Enthusiast
					</p>
					<p className="heroSummary">
						As a Lucent Labs co-founder, I build decentralized applications, smart contract infrastructure,
						and ecosystem tools across Cardano and EVM, with a research background that keeps me curious
						about biotech, agritech, and applied AI.
					</p>
					<div className="heroActions">
						<a className="primaryAction" href="#projects">View selected work</a>
						<a className="secondaryAction" href="#contact">Contact me</a>
					</div>
					<div className="heroStats" aria-label="Profile highlights">
						<div>
							<strong>First Class</strong>
							<span>Botany, ABU Zaria</span>
						</div>
						<div>
							<strong>Cardano + EVM</strong>
							<span>Smart contracts and dApps</span>
						</div>
						<div>
							<strong>Protocol Work</strong>
							<span>Indexes, staking, NFTs, RWAs, protocol tooling</span>
						</div>
					</div>
				</div>
				<figure className="heroPortrait">
					<img src="/myPix.jpg" alt="Samir Idris" />
					<figcaption>Blockchain developer building at the edge of Web3, AI, and biotech.</figcaption>
				</figure>
			</div>
			<a id="arrDown" href="#about" aria-label="Scroll to about section">
				<BsChevronDoubleDown />
			</a>
		</section>
	)
}
