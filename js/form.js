var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('mail');
var error = document.querySelector('.error');

email.addEventListener("input", function (event) {

  if (email.validity.valid) {
   
    error.innerHTML = "";
    error.className = "error";
  }
}, false);
form.addEventListener("submit", function (event) {
 
  if (!email.validity.valid) {
 
    error.innerHTML = "Електронна адреса введена некоректно!";
    error.className = "error active";
    event.preventDefault();
  }
}, false);

function validate_form ( )
{
	valid = true;
	if ( document.form_name.tel.value == "" ){
        alert ( "Будь ласка, введіть ваш номер телефону" );
        valid = false;
    }
    if ( ( document.form_name.gender[0].checked == false ) && ( document.form_name[1].checked == false ) ){
        alert ( "Будь ласка, виберіть стать: Чоловіча чи Жіноча." );
        valid = false;
    }
    if ( document.form_name.age.selectedIndex == 0 ){
        alert ( "Будь ласка, вкажіть ваш вік." );
        valid = false;
    }
}
