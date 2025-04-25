// PROJECT2 FUNCTION
export const Project3 = () => {
	return (<section className='project-description-section'>
		<div className='icon-div'><i className='fa-solid fa-file-lines' /><h3>FINANCE ORGANIZER</h3></div>
		<p>This is a full-stack MERN app. Organize and view your finances, add new expense and income entries and analyze the trends via graphs. <br />(Inspired by John Smilga's "Jobify". Allow 30+ sec. to load due to free tier limitations)</p>
		<p className='spacer' />
		<div className='icon-div'><i className='fa-solid fa-toolbox' /><h3>TECHNOLOGIES</h3></div>
		<div className='description-div'><i className='fa-brands fa-react' /><p>React: with VITE builder; consists of client side and server side; React-router used for routing.</p></div>
		<div className='description-div'><i className='fa-regular fa-file-code' /><p>Styled components: using React Styled Components in addition to the global css.</p></div>
		<p className='spacer' />
		<div className='icon-div'><i className='fa-solid fa-link' /><h3>INTEGRATIONS</h3></div>
		<div className='description-div'><i className='fa-solid fa-square-share-nodes' /><p>Cloudinary: used for image uploads.</p></div>
		<div className='description-div'><i className='fa-solid fa-square-share-nodes' /><p>Recharts: used for graphs.</p></div>
		<p className='spacer' />
		<div className='icon-div'><h3>LINKS</h3></div>
		<div className='description-div'><i className='fa-solid fa-globe' /><p><a href='https://finance-tracker-1naw.onrender.com' rel='noopener noreferrer' target='_blank'>Published site</a></p></div>
		<div className='description-div'><i className='fa-brands fa-github' /><p><a href='https://github.com/Pavel-Gs/finance_tracker_mern' rel='noopener noreferrer' target='_blank'>Git repo</a></p></div>
		<p className='spacer' />
	</section>);
};