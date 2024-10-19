type="text/javascript">
  function sendMail() {
	var params = {
	  name: document.getElementById("first-name").value,
	  email: document.getElementById("email-address").value,
	  message: document.getElementById("message").value,
	};

	const serviceID = "service_i77m8tp"; // Replace with your EmailJS service ID
	const templateID = "template_ak5v2hg"; // Replace with your EmailJS template ID

	emailjs.send(serviceID, templateID, params)
	  .then(res => {
		document.getElementById("first-name").value = "";
		document.getElementById("email-address").value = "";
		document.getElementById("message").value = "";
		alert("Your message sent successfully!");
	  })
	  .catch(err => console.log(err));
  }

  