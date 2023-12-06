import { BsChevronDoubleDown } from 'react-icons/bs'

import './styles.css'

export default function HomePage() {
	return (
		<section id="homepage">
			<p id="name">SAMIR IDRIS</p>
			<p id="intro">FRONTEND DEVELOPER, DEVOPS ENGINEER</p>
			<div id='arrDown'><BsChevronDoubleDown color="#3498db" fontSize="4rem" /></div>
		</section>
	)
}
