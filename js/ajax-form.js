$(document).ready(function() {  
  const form = document.querySelector('#contact-form');
  
  form.onsubmit = (event) => {
    event.preventDefault();
    const userName = form.visitor_name.value.trim().replace(/\s+/g, ' ');
    const userEmail = form.visitor_email.value.trim();
    const userMsg = form.visitor_msg.value.trim() || "";
    const userIsEmp = form.visitor_is_employer.value;
    const formCheckResult = formChecker(userName,userEmail,userMsg);
    
    if(formCheckResult !="success") {
      modalDisplayConfig(formCheckResult);
      return false;
    } else {
      modalDisplayConfig(formCheckResult);
      clearForm(form);
      $.ajax({
        url: 'https://tranquil-sierra-86540.herokuapp.com/sova.rostislav@gmail.com',
        method: 'POST',
        data: {
          name: userName,
          email: userEmail,
          msg: userMsg,
          isEmployer: userIsEmp
        },
        dataType: 'json'
      });
    }
  }
});
 function clearForm(form){
  form.visitor_name.value = '';
  form.visitor_email.value = '';
  form.visitor_msg.value = '';
  $('form input:checked').prop('checked', false);
 }