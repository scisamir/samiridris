import rootLogo from '/root.svg'
import { RiMenu3Fill } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai' 
import { useEffect } from 'react';

import './styles.css'

export default function Header() {

	useEffect(() => {
		// handle scroll
		const handleScroll = () => {
			const sections = document.querySelectorAll("section");
			const links = document.querySelectorAll("nav a")
			const scrollPosition = window.scrollY;

			for (const section of sections) {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.clientHeight;
				if (scrollPosition >= (sectionTop - 300) && scrollPosition < sectionTop + sectionHeight) {
					const section_id = section.getAttribute("id") || "";

					links.forEach((link) => {
						if (link.getAttribute("href")?.includes(section_id)) {
							link.classList.add("active");
						} else {
							link.classList.remove("active");
						}
					});
				}
			}
		};

		// handle link click
		const checkbox = document.getElementById("check") as HTMLInputElement;
		const page_links = document.getElementsByClassName("page_link");
		const handleLinkClick = () => {
			checkbox.checked = false;
		};

		// handle nav color change
		const nav = document.querySelector("nav");
		const handleNavColor = () => {
			if (checkbox.checked) {
				nav!.style.background = "rgba(14, 29, 35, 0.98)"
			} else {
				nav!.style.background = "none"
			}
		};

		// add scroll event listener
		window.addEventListener("scroll", handleScroll);

		// add link click event listener
		for (const page_link of page_links) {
			page_link.addEventListener("click", handleLinkClick);
		}

		// add nav color event listener
		checkbox.addEventListener("change", handleNavColor);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			for (const page_link of page_links) {
				page_link.removeEventListener("click", handleLinkClick);
			}
			checkbox.removeEventListener("change", handleNavColor);
		};
	}, []);

	return (
		<header>
			<nav>
				<input type="checkbox" id="check" />
				<label htmlFor="check" className='hamb'>
					<RiMenu3Fill className="hambOpen hambChild" color="#3498db" fontSize="2.5rem" />
					<AiOutlineClose className="hambClose hambChild" color="#3498db" fontSize="2.5rem" />
				</label>
				<label className='logo'>
					<a className="rootLogo" href="#homepage" aria-label="Go to homepage">
						<img src={rootLogo} alt="go to the root or home" />
					</a>
				</label>
				<ul>
					<li><a href="#homepage" className='page_link active'>Home</a></li>
					<li><a href="#about" className='page_link'>About</a></li>
					<li><a href="#experience" className='page_link'>Experience</a></li>
					<li><a href="#projects" className='page_link'>Projects</a></li>
					<li><a href="#contact" className='page_link'>Contact</a></li>
					<li><a className="resume" href="https://docs.google.com/document/d/1LSL2-zN2iZRyqhNjx0cb4dDnzThc1QiM/edit?usp=sharing&ouid=113358264175618603101&rtpof=true&sd=true" target="_blank" rel="noreferrer">CV</a></li>
				</ul>
			</nav>
		</header>
	)
}
