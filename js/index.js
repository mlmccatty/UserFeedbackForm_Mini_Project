const submitButton = document.getElementById('submit-button');
let ticketNum = 0;
submitButton.addEventListener('click', function () {
	//Add new ticket number
	ticketNum++;
	const ticketIdField = document.getElementById('ticketId');
	ticketIdField.innerText = ticketNum;
	//Get Input Fields
	const firstNameInpField = document.getElementById('firstNameInput');
	const lastNameInpField = document.getElementById('lastNameInput');
	const emailInpField = document.getElementById('emailInput');
	const phoneNumberInpField = document.getElementById('phoneNumberInput');
	const orderNumberInpField = document.getElementById('orderNumberInput');
	const inquiryInpField = document.getElementById('inquiry-input');
	//Get Display Fields
	const firstNameDispField = document.getElementById('firstNameDisplay');
	const lastNameDispField = document.getElementById('lastNameDisplay');
	const emailDispField = document.getElementById('emailDisplay');
	const phoneNumberDispField = document.getElementById('phoneNumberDisplay');
	const orderNumberDispField = document.getElementById('orderNumberDisplay');
	const inquiryDispField = document.getElementById('inquiry-display');
	//Retrieve text from input fields and add it to corresponding display fields.
	firstNameDispField.innerText = firstNameInpField.value;
	lastNameDispField.innerText = lastNameInpField.value;
	emailDispField.innerText = emailInpField.value;
	phoneNumberDispField.innerText = phoneNumberInpField.value;
	orderNumberDispField.innerText = orderNumberInpField.value;
	inquiryDispField.innerText = inquiryInpField.value;

})