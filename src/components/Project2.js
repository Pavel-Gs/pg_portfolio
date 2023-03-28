// PROJECT2 FUNCTION
export const Project2 = () => {
	return (<section className='project-description-section'>
		<div className='icon-div'><i className='fa-solid fa-file-lines' /><h3>A LANDING PAGE</h3></div>
		<p>This is a simple React app - a landing page for a company or a proprietor. The design idea (mostly - the layout) is taken from the "Backroads app" by John Smilga. Media-queries are set for all sizes. It's just a one-page website, made of different React components.</p>
		<p className='spacer' />
		<div className='icon-div'><i className='fa-solid fa-toolbox' /><h3>TECHNOLOGIES</h3></div>
		<div className='description-div'><i className='fa-brands fa-react' /><p>React: mapping/iterating through the components, useState and useEffect hooks.</p></div>
		<div className='description-div'><i className='fa-brands fa-sass' /><p>SASS: I prefer to use SASS instead of regular CSS, primarily due to the nesting capability (at the moment of making that app, "styled react components" did not have full VSCode support).</p></div>
		<p className='spacer' />
		<div className='icon-div'><i className='fa-solid fa-link' /><h3>INTEGRATIONS</h3></div>
		<div className='description-div'><i className='fa-solid fa-square-share-nodes' /><p>FormSubmit: as the name suggests, that integration provides easy form-submission functionality and automated replies.</p></div>
		<div className='description-div'><i className='fa-solid fa-square-share-nodes' /><p>Font Awesome: provides various icons and symbols, which could be styled right in the code.</p></div>
		<p className='spacer' />
		<div className='icon-div'><h3>LINKS</h3></div>
		<div className='description-div'><i className='fa-solid fa-globe' /><p><a href='https://geomatics-consulting.netlify.app/' rel='noopener noreferrer' target='_blank'>Published site</a></p></div>
		<div className='description-div'><i className='fa-brands fa-github' /><p><a href='https://github.com/Pavel-Gs/landing_page' rel='noopener noreferrer' target='_blank'>Git repo</a></p></div>
		<p className='spacer' />
	</section>);
};