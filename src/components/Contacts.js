// CONTACTS FUNCTION
export const Contacts = () => {
	return (<section id='contacts-section'>
		<div>
			<i className='fa-solid fa-envelope' />
			<h3>CONTACT FORM</h3>
		</div>
		<form action='https://formsubmit.co/pavelgen@gmail.com' method='POST'>
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