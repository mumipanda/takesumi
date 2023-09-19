jQuery(window).scroll(function(){        
  jQuery('.p-ScrollImg').each(function(){
    var targetElement = jQuery(this).offset().top;
    var scroll = jQuery(window).scrollTop();
    var windowHeight = jQuery(window).height();
    if(scroll > targetElement - windowHeight + 10){
      jQuery(this).addClass('fadeout');
    }else{
      jQuery(this).removeClass('fadeout');
    }
  })
})

function copyUrl() {
  const element = document.createElement('input');
  element.value = location.href;
  document.body.appendChild(element);
  element.select();
  document.execCommand('copy');
  document.body.removeChild(element);
}