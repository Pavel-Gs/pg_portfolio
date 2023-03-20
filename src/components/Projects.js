// IMPORT THE LIBRARY'S COMPONENTS
import { Link } from 'react-router-dom';
// IMPORT HOOKS
import { useState, useEffect } from 'react';

// PROJECTS FUNCTION
export const Projects = ({ idProp, setActiveIndexProp, rollDownProp, iClass, h2Text, imgSrc, imgAlt, pText, infoPath, tipInfo, iInfoClass, tipWeb, aWebHref, iLinkWebClass, tipGit, aGitHref, iLinkGitClass, tipReact, iReactClass, tipJS, iJSClass, tipSASS, iSASSClass, tipCSS, iCSSClass, tipHTML, iHTMLClass }) => {
	// if a value from cardsValues is absent - apply "display: none" only to that particular element
	const [visibility0, setVisibility0] = useState({});
	useEffect(() => { if (!infoPath) { setVisibility0({ display: 'none' }) }; }, [infoPath]);
	const [visibility1, setVisibility1] = useState({});
	useEffect(() => { if (!aWebHref) { setVisibility1({ display: 'none' }) }; }, [aWebHref]);
	const [visibility2, setVisibility2] = useState({});
	useEffect(() => { if (!aGitHref) { setVisibility2({ display: 'none' }) }; }, [aGitHref]);
	const [visibility3, setVisibility3] = useState({});
	useEffect(() => { if (!iReactClass) { setVisibility3({ display: 'none' }) }; }, [iReactClass]);
	const [visibility4, setVisibility4] = useState({});
	useEffect(() => { if (!iJSClass) { setVisibility4({ display: 'none' }) }; }, [iJSClass]);
	const [visibility5, setVisibility5] = useState({});
	useEffect(() => { if (!iSASSClass) { setVisibility5({ display: 'none' }) }; }, [iSASSClass]);
	const [visibility6, setVisibility6] = useState({});
	useEffect(() => { if (!iCSSClass) { setVisibility6({ display: 'none' }) }; }, [iCSSClass]);
	const [visibility7, setVisibility7] = useState({});
	useEffect(() => { if (!iHTMLClass) { setVisibility7({ display: 'none' }) }; }, [iHTMLClass]);
	// showDiv function
	const [display, setDisplay] = useState({});
	const [toggleClass, setToggleClass] = useState(false);
	const showDiv = () => {
		setDisplay({ opacity: '1', height: '180px', transition: '0.4s ease-in', overflow: 'hidden' });
		setToggleClass(true);
	};
	// hideDiv function
	const hideDiv = () => {
		setDisplay({ opacity: '0', height: '0', transition: '0.4s ease-out', overflow: 'hidden' });
		setToggleClass(false);
	};
	// define the current active index
	let x = parseInt(idProp)+2; // Passed down here from the <Hero /> component. Then - converted to an integer. Then - added 2, so taken active indexes (1 and 2) are untouched.

	return (<div className='project-card' onMouseEnter={() => showDiv()} onMouseLeave={() => hideDiv()}>
		<i className={!toggleClass ? iClass : 'fa-solid fa-grip-lines'} />
		<h2>{h2Text}</h2>
		<div className='img-div'>
			<img src={imgSrc} alt={imgAlt} />
		</div>
		<p>{pText}</p>
		<div className='hover-div' style={display}> {/* show/hide the div on mouse in/out */}
			<p className='links-p'>LINKS</p>
			<div className='links-div'>
				<Link to={infoPath} style={visibility0} onClick={() => { setActiveIndexProp(x); hideDiv(); rollDownProp(); }} className='tooltip' tooltip-text={tipInfo}>
					<i className={iInfoClass} />
				</Link>
				<div style={visibility1} className='tooltip' tooltip-text={tipWeb}><a href={aWebHref} rel='noopener noreferrer' target='_blank'><i className={iLinkWebClass} /></a></div>
				<div style={visibility2} className='tooltip' tooltip-text={tipGit}><a href={aGitHref} rel='noopener noreferrer' target='_blank'><i className={iLinkGitClass} /></a></div>
			</div>
			<p>TECHNOLOGIES</p>
			<div className='technologies-div'>
				<div style={visibility3} className='tooltip' tooltip-text={tipReact}><i className={iReactClass} /></div>
				<div style={visibility4} className='tooltip' tooltip-text={tipJS}><i className={iJSClass} /></div>
				<div style={visibility5} className='tooltip' tooltip-text={tipSASS}><i className={iSASSClass} /></div>
				<div style={visibility6} className='tooltip' tooltip-text={tipCSS}><i className={iCSSClass} /></div>
				<div style={visibility7} className='tooltip' tooltip-text={tipHTML}><i className={iHTMLClass} /></div>
			</div>
		</div>
	</div>);
};