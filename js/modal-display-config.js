function modalDisplayConfig(formcheck){
  $('.btn-secondary').removeClass('btn-non-valid');
  $('.modal-content, .modal-header, .modal-body').removeClass('non-valid');
  $('.modal-body p, modal-header p').text('');

  switch (formcheck) {
    case 'wrong name':
      $('.modal-content, .modal-header, .modal-body').addClass('non-valid');
      $('.modal-header p').text('Something wrong');
      $('.modal-body p:first-child').text('Please enter correct name');
      $('.modal-body p:last-child').text('Like : "John Doe"');
      $('.btn-secondary').addClass('btn-non-valid');
      break;
    case 'wrong email':
      $('.modal-content, .modal-header, .modal-body').addClass('non-valid');
      $('.modal-header p').text('Something wrong');
      $('.modal-body p:first-child').text('Please enter correct email');
      $('.modal-body p:last-child').text('Like:"example@mail.com"');
      $('.btn-secondary').addClass('btn-non-valid');
      break;
    case 'wrong message':
      $('.modal-content, .modal-header, .modal-body').addClass('non-valid');
      $('.modal-header p').text('Something wrong');
      $('.modal-body p:first-child').text('Please enter correct message');
      $('.btn-secondary').addClass('btn-non-valid');
      break;
    case 'success':
      $('.modal-header p').text('Success');
      $('.modal-body p:first-child').text('Thank you for contacting me!');
      break;
    default:
      alert('Sorry, we have some problem, please try again leter.');
  }
}