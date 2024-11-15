// IMPORT THE LIBRARY'S COMPONENTS
import { Link } from 'react-router-dom';
// IMPORT HOOKS
import { useState, useEffect } from 'react';
// IMPORT COMPONENTS
import { About } from './About.js';
import { Contacts } from './Contacts.js';
import { Project1 } from './Project1.js';
import { Project2 } from './Project2.js';
import { Project3 } from './Project3.js';
import { Project4 } from './Project4.js';
import { Project5 } from './Project5.js';
import { Project6 } from './Project6.js';
import { Projects } from './Projects.js';
import { Footer } from './Footer.js';
// JSON URL
const url = './resources/cardsValues.json'; // in public folder

// HERO FUNCTION
export const Hero = () => {
	// fetch the json file and manage the response
	const [loadingState, setLoadingState] = useState(true);
	const [errorState, setErrorState] = useState(false);
	const [errorCode, setErrorCode] = useState();
	const [cardsValues, setCardsValues] = useState([]);
	useEffect(() => {
		fetch(url).then((response) => {
			if (response.status >= 200 && response.status <= 299) {									// HTTP response status codes: successful responses (200 – 299)
				response.json().then((cardsValues) => { setCardsValues(cardsValues) });
				setLoadingState(false);
			}
			else { setErrorCode(response.status); setLoadingState(false); setErrorState(true); };	// set error code in the useState
		})
			.catch((error) => { console.log(error) });												// log the error, if it occurs
	}, []);
	// manage the rollDown function and the visibility of the components
	const [activeIndex, setActiveIndex] = useState(0);
	const [display, setDisplay] = useState({});
	const [visibility1, setVisibility1] = useState({});
	const [visibility2, setVisibility2] = useState({});
	const [isVisible, setIsVisible] = useState(true);
	const [rollShow, setRollShow] = useState({ display: 'none' }); // Passed to the <Footer /> component. This is to avoid showing "back to projects" button too soon.
	const rollDown = () => {
		if (isVisible) {
			const showBtn = () => { setRollShow({ display: 'block' }) };
			setTimeout(showBtn, 300);
			setDisplay({ transform: 'translate(0, 1000px)', transition: '0.5s ease-in' });
			setVisibility1({ display: 'none' }); setVisibility2({ display: 'none' });
			setIsVisible(false);
		};
	};
	// rollUp function is passed to the <Footer /> component
	const rollUp = () => {
		setActiveIndex(0);
		setDisplay({ transform: 'translate(0, 0)', transition: '0.5s ease-out' });
		if (cardLowIndex === 1) setVisibility1({ display: 'none' });
		if (cardLowIndex !== 1) setVisibility1({ display: 'block' });
		if (cardHighIndex === cardsValues.length) setVisibility2({ display: 'none' });
		if (cardHighIndex !== cardsValues.length) setVisibility2({ display: 'block' });
		setIsVisible(true);
	};
	// manage the amount of displayed cards and the slider
	const [cardLowIndex, setCardLowIndex] = useState();
	const [cardHighIndex, setCardHighIndex] = useState();
	const decreaseRange = () => { setCardLowIndex(cardLowIndex - 1); setCardHighIndex(cardHighIndex - 1); };
	const increaseRange = () => { setCardLowIndex(cardLowIndex + 1); setCardHighIndex(cardHighIndex + 1); };
	// get the inner width
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const updateWindowWidth = () => setWidth(window.innerWidth);
		window.addEventListener('resize', updateWindowWidth);
		if (width >= 1200) { setCardLowIndex(1); setCardHighIndex(3); }; // display three cards
		if (width < 1200) { setCardLowIndex(1); setCardHighIndex(2); }; // display two cards
		if (width <= 800) { setCardLowIndex(1); setCardHighIndex(1); }; // display one card
		return () => window.removeEventListener('resize', updateWindowWidth);
	}, [width]); // re-run on width change

	// manage the visibility of the slider's arrows
	useEffect(() => {
		if (cardLowIndex === 1) setVisibility1({ display: 'none' });
		if (cardLowIndex !== 1) setVisibility1({ display: 'block' });
		if (cardHighIndex === cardsValues.length) setVisibility2({ display: 'none' });
		if (cardHighIndex !== cardsValues.length) setVisibility2({ display: 'block' });
	}, [cardLowIndex, cardHighIndex, cardsValues.length]);

	return (<section id='hero-section'>
		<main>
			<h1><span>PG's</span> portfolio</h1>
			<div id='btn-div'>
				<Link className='hero-btn' to='/about' onClick={() => { setActiveIndex(1); rollDown(); }}><h2>ABOUT</h2></Link>
				<Link className='hero-btn' to='/contacts' onClick={() => { setActiveIndex(2); rollDown(); }}><h2>CONTACTS</h2></Link>
			</div>
			<p style={{color: '#FCEAC5'}}>
				*All apps can be accessed on (almost) all screen sizes.<br></br>
				(including desktop, tablet and phone)
			</p>
			{loadingState ? <h2>Loading...</h2> : null}
			{errorState ? <h2>Can't load the page... {errorCode}</h2> : null}
			{activeIndex === 1 ? <About /> : null}
			{activeIndex === 2 ? <Contacts /> : null}
			{activeIndex === 3 ? <Project1 /> : null}
			{activeIndex === 4 ? <Project2 /> : null}
			{activeIndex === 5 ? <Project3 /> : null}
			{activeIndex === 6 ? <Project4 /> : null}
			{activeIndex === 7 ? <Project5 /> : null}
			{activeIndex === 8 ? <Project6 /> : null}
		</main>
		<footer><Footer activeIndexProp={activeIndex} rollUpProp={rollUp} rollShowProp={rollShow} setRollShowProp={setRollShow} /></footer>
		<section id='projects-section' style={display} >
			<div id='cards-section'>
				{cardsValues.filter((i) => i.id >= cardLowIndex && i.id <= cardHighIndex).map((i) => {
					return (<Projects {...i} key={i.id} idProp={i.id} setActiveIndexProp={setActiveIndex} rollDownProp={rollDown} widthProp={width} />)
				})}
			</div>
			<div id='arrow-section'>
				<i className='fa-solid fa-square-caret-left' onClick={() => decreaseRange()} style={visibility1} />
				<i className='fa-solid fa-square-caret-right' onClick={() => increaseRange()} style={visibility2} />
			</div>
		</section>
	</section>);
};