import rootLogo from '/root.svg'
import { RiMenu3Fill } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'

export default function Header() {

	const handleModalClose = () => {
		document.getElementById("midnav")!.style.display = "none";
	}
	const handleModalOpen = () => {
		document.getElementById("midnav")!.style.display = "block";
	}

	return (
		<header>
			<a id="rootLogo">
				<img src={rootLogo} alt="go to the root or home" />
			</a>
			<nav className='largenav'>
				<ul>
					<li><a href="">./home</a></li>
					<li><a href="">./projects</a></li>
					<li><a href="">./experience</a></li>
				</ul>
			</nav>
			<button className='largenav' id="resume"><a href="">Resume</a></button>
			<div id='hamb' onClick={handleModalOpen}>
				<RiMenu3Fill color="#182828" fontSize="2.5rem" />
			</div>

			<div id="midnav">
				<div id="close" onClick={handleModalClose}>
					<AiOutlineClose color="#182828" fontSize="2.5rem" />
				</div>
				<nav>
					<ul>
						<li><a href="">./home</a></li>
						<li><a href="">./projects</a></li>
						<li><a href="">./experience</a></li>
					</ul>
				</nav>
				<button id="resume"><a href="">Resume</a></button>
			</div>
		</header>
	)
}
