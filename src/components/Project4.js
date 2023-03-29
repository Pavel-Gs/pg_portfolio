// PROJECT4 FUNCTION
export const Project4 = () => {
	return (<section className='project-description-section'>
		<div className='icon-div'><i className='fa-solid fa-file-lines' /><h3>SKILL SHEET (WEB)</h3></div>
		<p>The page is somewhat similar to the "HTML-emails" project in terms of its structure. It is made with HTML tables and inline CSS styling. The reason for such simplicity is the possibility to copy-paste the page's content into MS Word and edit the contents further from there. Although, some styling will not be preserved, such as "font-size", "text-shadow", "box-shadow", "border-radius". But that can be compensated for in the text editor itself.</p>
		<p>The main advantage of this approach over "print as PDF" is in the preserved functionality and editability, while "print as PDF" saves the whole page as an image, making it uneditable.</p>
		<p>How it works: open the resume web-page, "ctrl+a", "ctrl+c", "ctrl+v" into an empty MS Word page (set margins to 0). The text and images are selectable and could be moved, resized and styled. All the links are also preserved and are clickable.</p>
		<p>For further usage, it is also possible to save the Word file as *.pdf, or paste the main HTML table into the email's body (paste as HTML, not just copy-paste).</p>
		<p className='spacer' />
		<div className='icon-div'><i className='fa-solid fa-toolbox' /><h3>TECHNOLOGIES</h3></div>
		<div className='description-div'><i className='fa-solid fa-file-code' /><p>HTML: the main table, table headers and table rows. Similar to HTML emails.</p></div>
		<div className='description-div'><i className='fa-brands fa-css3-alt' /><p>CSS: simple inline styling, similar to HTML emails.</p></div>
		<p className='spacer' />
		<div className='icon-div'><h3>LINKS</h3></div>
		<div className='description-div'><i className='fa-solid fa-globe' /><p><a href='https://pgs-resume.netlify.app/' rel='noopener noreferrer' target='_blank'>Published site</a></p></div>
		<div className='description-div'><i className='fa-brands fa-github' /><p><a href='https://github.com/Pavel-Gs/my_resume' rel='noopener noreferrer' target='_blank'>Git repo</a></p></div>
		<p className='spacer' />
	</section>);
};