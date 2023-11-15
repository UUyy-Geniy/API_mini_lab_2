 import {setFormValue, submitSignUpForm, validateEmail, validatePassword, validateRepPassword,setDisabledBtn, validateName,submitSignInForm} from "./utils.js"

console.log("Document")
console.log(document)

const first_name_id = 'first_name'
const last_name_id = 'last_name'
const password_id = 'password'
const sign_in_password_id = 'sign_in_password'
const rep_password_id = 'password-repeat'
const email_id = 'email'
const sign_in_email_id = 'sign_in_email'

const sign_in_link_id = 'sign_in_link'
const sign_up_form_id = 'sign_up_form'
const sign_up_btn_id = 'sign_up_btn'
const sign_in_form_id = 'sign_in_form'


const password = document.getElementById('password');
const rep_password = document.getElementById('password-repeat');
const sign_in_password = document.getElementById('sign_in_password');
const sign_in_email = document.getElementById('sign_in_email');
const sign_up_btn = document.getElementById('sign_up_btn');

sign_up_btn.disabled = true;
sign_in_btn.disabled = true;
let form_id = sign_up_form_id;


const first_name = document.getElementById(first_name_id);
first_name.oninput = (e) => {setFormValue(first_name_id, e.target, validateName);setDisabledBtn(sign_up_btn,form_id);}

const last_name = document.getElementById(last_name_id);
last_name.oninput = (e) => {setFormValue(last_name_id, e.target, validateName);setDisabledBtn(sign_up_btn,form_id);}

const email = document.getElementById(email_id);
email.oninput = (e) => {setFormValue(email_id, e.target, validateEmail);setDisabledBtn(sign_up_btn,form_id);}

password.oninput = (e) => {setFormValue(password_id,e.target, validatePassword);setDisabledBtn(sign_up_btn,form_id);}
rep_password.oninput = (e) => {setFormValue(rep_password_id,e.target, validateRepPassword);setDisabledBtn(sign_up_btn,form_id);}

sign_in_password.oninput = (e) => {setFormValue(sign_in_password_id,e.target, validatePassword);setDisabledBtn(sign_in_btn,form_id);}
sign_in_email.oninput = (e) => {setFormValue(sign_in_email_id, e.target, validateEmail);setDisabledBtn(sign_in_btn,form_id);}


const switch_to_sign_in = document.getElementById(sign_in_link_id);
switch_to_sign_in.onclick = (e) => {
  document.getElementById(sign_up_form_id).style.display = "none"
  form_id = sign_in_form_id
  document.getElementById(sign_in_form_id).style.display = ""
}

sign_up_btn.onclick = (e) => {
  e.preventDefault()
  submitSignUpForm()
}

sign_in_btn.onclick = (e) =>{
  e.preventDefault()
  submitSignInForm()
}


