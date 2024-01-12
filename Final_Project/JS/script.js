function displayThankYou() {
    var form = document.getElementById('myForm');
    form.style.display = 'none';
  
    var thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.style.display = 'block';
  
    var requiredInfo = document.getElementById('requiredInfo');
    requiredInfo.style.display = 'none';
  
    form.reset(); // Reset the form fields
}
  
function returnToContactForm() {
    var form = document.getElementById('myForm');
    form.style.display = 'block';
  
    var thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.style.display = 'none';
  
    var requiredInfo = document.getElementById('requiredInfo');
    requiredInfo.style.display = 'block';

    form.reset(); // Reset the form fields
}

function toggleMenu() {
  var menu = document.querySelector('.hamburger-menu');
  var additionalMenu = document.querySelector('#additionalMenu');

  menu.classList.toggle('hamburger-expanded');
  additionalMenu.classList.toggle('active');
}
