console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');
const passwordSignup = document.getElementById('passwordSignup');

function validate() {
	var s = document.getElementById("passwordSignup").value;
	var re = /[a-z]\d|\d[a-z]/i;
	document.getElementById("errorLabel").style.display = re.test(s) && s.length > 5 ? 'none' : 'block';

}
passwordSignup,addEventListener('input', validate )

loginBtn.addEventListener('click', (e) => {	
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
}); 