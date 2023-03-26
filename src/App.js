// IMPORT THE LIBRARY'S COMPONENTS
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// IMPORT CSS
import './css/heroSASS.css';
import './css/aboutSASS.css';
import './css/contactsSASS.css';
import './css/projectsSASS.css';
import './css/footerSASS.css';
import './css/tooltip.css';
import './css/projectDescriptionSASS.css';
//IMPORT COMPONENTS
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Contacts } from './components/Contacts.js';
import { Project1 } from './components/Project1.js';
import { Project2 } from './components/Project2.js';
import { Project3 } from './components/Project3.js';
import { Project4 } from './components/Project4.js';

// APP FUNCTION
// for routes to work (or rather, not to break on page reload), create "_redirects" file in the "public" folder with "/*  /index.html  200"
export default function App() {
	return (<BrowserRouter><Routes>
		<Route path='/' element={<Hero />}>
			<Route path='/about' element={<About />} />
			<Route path='/contacts' element={<Contacts />} />
			<Route path='/project1' element={<Project1 />} />
			<Route path='/project2' element={<Project2 />} />
			<Route path='/project3' element={<Project3 />} />
			<Route path='/project4' element={<Project4 />} />
		</Route>
		<Route path='*' element={<div>Page not found</div>} />
	</Routes></BrowserRouter>);
};