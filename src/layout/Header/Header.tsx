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

		// add scroll event listener
		window.addEventListener("scroll", handleScroll);

		// add link click event listener
		for (const page_link of page_links) {
			page_link.addEventListener("click", handleLinkClick);
		}

		return () => {
			window.removeEventListener("scroll", handleScroll);
			for (const page_link of page_links) {
				page_link.removeEventListener("click", handleLinkClick);
			}
		};
	}, []);

	return (
		<header>
			<nav>
				<input type="checkbox" id="check" />
				<label htmlFor="check" className='hamb'>
					<RiMenu3Fill className="hamb_open hamb_child" color="#182828" fontSize="2.5rem" />
					<AiOutlineClose className="hamb_close hamb_child" color="#182828" fontSize="2.5rem" />
				</label>
				<label className='logo'>
					<a className="rootLogo" href="\">
						<img src={rootLogo} alt="go to the root or home" />
					</a>
				</label>
				<ul>
					<li><a href="#homepage" className='page_link active'>./home</a></li>
					<li><a href="#projects" className='page_link'>./projects</a></li>
					<li><a href="#" className='page_link'>./experience</a></li>
					<li><button><a className="resume" href="https://drive.google.com/file/d/11G1CC_lACHDYSAScYctRg0zv7wPOJmIx/view?usp=sharing" target="_blank">Resume</a></button></li>
				</ul>
			</nav>
		</header>
	)
}
