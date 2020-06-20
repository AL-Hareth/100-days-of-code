var contactForm = document.getElementById('contactForm');


if(location.href.includes('http://127.0.0.1:3000/contact?name=')) {
  contactForm.onsubmit = function(name) {
    name = contactForm.name.value;
    alert('Welcome ' + name);
  }
}

var member = $('#members-heading');

$("#admins-heading").click(function() {
  $(".admins-list").fadeToggle();
});

$('#members-heading').click(function() {
  $('.members-list').fadeToggle();
});