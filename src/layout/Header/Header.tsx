import rootLogo from '/root.svg'
import { RiMenu3Fill } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai' 
import { useEffect } from 'react';

import './styles.css'

export default function Header() {

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("section");
			const links = document.querySelectorAll("nav a")
			const scrollPosition = window.scrollY;

			for (const section of sections) {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.clientHeight;
				if (scrollPosition >= (sectionTop - 300) && scrollPosition < sectionTop + sectionHeight) {
					const section_id = section.getAttribute("id") || "";
					console.log(`scrollPosition: ${scrollPosition}, sectionTop: ${sectionTop}, sectionHeight: ${sectionHeight}`);

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

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
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
					<li><a href="#homepage">./home</a></li>
					<li><a href="#projects">./projects</a></li>
					<li><a href="#">./experience</a></li>
					<li><button><a className="resume" href="https://drive.google.com/file/d/11G1CC_lACHDYSAScYctRg0zv7wPOJmIx/view?usp=sharing" target="_blank">Resume</a></button></li>
				</ul>
			</nav>
		</header>
	)
}
