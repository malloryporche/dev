const navigationLinks = document.getElementsByClassName('fadeIn');

window.onload = function() {

  fadeInNavigation();


};

function fadeInNavigation( ){
  navigationLinks.add('visible');
  console.log('Visible class added');
}
