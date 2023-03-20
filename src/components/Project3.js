// PROJECT3 FUNCTION
export const Project3 = () => {
	return (<section className='project-description-section'>
		<div className='icon-div'><i className='fa-solid fa-file-lines' /><h3>THIS PORTFOLIO</h3></div>
		<p>Here I've collected all of my student projects (both of them, haha) and organized them via cards, with links and descriptions. Card's info is stored in the remote *.json file, which is fetched and mapped when loaded.</p>
		<p className='spacer' />
		<div className='icon-div'><i className='fa-solid fa-toolbox' /><h3>TECHNOLOGIES</h3></div>
		<div className='description-div'><i className='fa-brands fa-react' /><p>React library: mapping/iterating through the components. Also, useState and useEffect hooks are used extensively, which allows for the dynamic seamless update of the content.</p></div>
		<div className='description-div'><i className='fa-brands fa-react' /><p>React-router-dom: as far as I'm aware, there is no way to create routes natively in React. But there are libraries, which can provide that functionality. React-router is one of them.</p></div>
		<div className='description-div'><i className='fa-brands fa-sass' /><p>SASS: I prefer to use SASS instead of regular CSS, primarily due to the nesting capability (at the moment of making that app, "styled react components" did not have full VSCode support).</p></div>
		<p className='spacer' />
		<div className='icon-div'><i className='fa-solid fa-link' /><h3>INTEGRATIONS</h3></div>
		<div className='description-div'><i className='fa-solid fa-square-share-nodes' /><p>Normalized CSS: CSS resets. From the official description: "Normalize.css makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing."</p></div>
		<div className='description-div'><i className='fa-solid fa-square-share-nodes' /><p>FormSubmit: as the name suggests, that integration provides easy form-submission functionality and automated replies.</p></div>
		<div className='description-div'><i className='fa-solid fa-square-share-nodes' /><p>Font Awesome: provides various icons and symbols, which could be styled right in the code.</p></div>
		<p className='spacer' />
	</section>);
};