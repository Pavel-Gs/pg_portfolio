// IMPORT THE LIBRARY'S COMPONENTS
import { Link } from 'react-router-dom';

// FOOTER FUNCTION
export const Footer = ({ activeIndexProp, rollUpProp, rollShowProp, setRollShowProp }) => {
	return (<section id='footer-section'>
		{activeIndexProp !== 0 ? (
			<Link id='footer-btn' to='/' onClick={() => { rollUpProp(); setRollShowProp({ display: 'none' }); }} style={rollShowProp}> {/* set button display to "none" on click, so when needed, it could be changed to timed "display: block" from the <Hero /> component */}
				<i className='fa-solid fa-angle-up' /><h4>BACK TO PROJECTS</h4>
			</Link>) : null
		}
		<div id='icons-container'>
			<a href='https://github.com/Pavel-Gs' rel='noopener noreferrer' target='_blank'><i className='fa-brands fa-square-git' /></a>
			<a href='https://www.linkedin.com/in/pavel-generalov/' rel='noopener noreferrer' target='_blank'><i className='fa-brands fa-linkedin' /></a>
			<a href='https://www.facebook.com/PavelSG' rel='noopener noreferrer' target='_blank'><i className='fa-brands fa-square-facebook' /></a>
			<a href='https://www.instagram.com/pavel_generalov/' rel='noopener noreferrer' target='_blank'><i className='fa-brands fa-square-instagram' /></a>
			<a href='https://youtu.be/0FvEj4ed4wwdeprecated' rel='noopener noreferrer' target='_blank'><i className="fa-brands fa-square-youtube" /></a>
		</div>
	</section>);
};