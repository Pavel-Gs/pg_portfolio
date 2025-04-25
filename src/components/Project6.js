// PROJECT5 FUNCTION
export const Project6 = () => {
	return (<section className='project-description-section'>
		<div className='icon-div'><i className='fa-solid fa-file-lines' /><h3>ONLINE HTML-EMAILS</h3></div>
		<p>Send HTML-styled emails from any device with this online app. It is pre-built for quotes, proposals, work orders, etc... <br/> (Note: the code is outdated, requires an update.)</p>
		<p className='spacer' />
		<div className='icon-div'><i className='fa-solid fa-toolbox' /><h3>TECHNOLOGIES</h3></div>
		<div className='description-div'><i className='fa-brands fa-js' /><p>JavaScript: vanilla JavaScript in this project is used primarily for hiding/showing elements, changing CSS styles and iterating through components.</p></div>
		<div className='description-div'><i className='fa-brands fa-css3-alt' /><p>CSS: regular CSS is used for the web view. The In-line CSS is used for the email-client view. Note: different email clients interpret the CSS differently.</p></div>
		<div className='description-div'><i className='fa-solid fa-file-code' /><p>HTML: HTML emails are usually developed using tables (a lot of tables) and archaic-looking in-line CSS styling.</p></div>
		<p className='spacer' />
		<div className='icon-div'><i className='fa-solid fa-link' /><h3>INTEGRATIONS</h3></div>
		<div className='description-div'><i className='fa-solid fa-square-share-nodes' /><p>SmtpJS: this integration allows you to grab the inner HTML, put it into the email's body and send it within a JavaScript environment.</p></div>
		<div className='description-div'><i className='fa-solid fa-square-share-nodes' /><p>Elastic Email: this integration provides email tracking and marketing metrics, such as clicks, time, location, device, etc...</p></div>
		<div className='description-div'><i className='fa-solid fa-square-share-nodes' /><p>FormSubmit: as the name suggests, that integration provides easy form-submission functionality and automated replies.</p></div>
		<p className='spacer' />
		<div className='icon-div'><h3>LINKS</h3></div>
		<div className='description-div'><i className='fa-solid fa-globe' /><p><a href='https://html-quotes.netlify.app/' rel='noopener noreferrer' target='_blank'>Published site</a></p></div>
		<div className='description-div'><i className='fa-brands fa-github' /><p><a href='https://github.com/Pavel-Gs/html_emails' rel='noopener noreferrer' target='_blank'>Git repo</a></p></div>
		<p className='spacer' />
	</section>);
};