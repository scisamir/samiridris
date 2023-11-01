import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi'

import './styles.css'

export default function Footer() {
	return (
		<footer>
			<ul>
				<li><a href="https://github.com/scisamir" target="_blank">
					<AiFillGithub color="black" fontSize="3rem" />
				</a></li>
				<li><a href="https://linkedin.com/in/scisamir" target="_blank">
					<AiFillLinkedin color="black" fontSize="3rem" />
				</a></li>
				<li><a href="https://twitter.com/ScientistSamir" target="_blank">
					<BsTwitter color="black" fontSize="3rem" />
				</a></li>
				<li><a href="mailto:samzidris11@gmail.com">
					<BiLogoGmail color="black" fontSize="3rem" />
				</a></li>
			</ul>
		</footer>
	)
}