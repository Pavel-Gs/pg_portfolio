// CONTACTS FUNCTION
export const Contacts = () => {
	return (<section id='contacts-section'>
		<div>
			<i className='fa-solid fa-envelope' />
			<h3>CONTACT FORM</h3>
		</div>
		<form action='https://formspree.io/f/xldbdjrw' method='POST'> {/* Using Formspree. Previously used FormSubmit is now blocked by BitDefender (old action='https://formsubmit.co/1f02d58477fe20e850b934af3418c8bb') */}
			<label htmlFor='name'>Your name</label>
			<input type='text' name='name' required />
			<label htmlFor='email'>Your Email</label>
			<input type='email' name='email' required />
			<label htmlFor='comments'>Comments</label>
			<textarea type='text' name='comments' required />
			<div><button type='submit' >Submit</button></div>
		</form>
	</section>);
};