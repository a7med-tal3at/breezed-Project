window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClassName("header")[0].style.backgroundColor = '#fff';
    document.getElementsByClassName("header")[0].style.paddingTop = '5px';
    document.getElementsByClassName("logo")[0].style.color = '#000';
    var i;
    for (i = 0;  i < document.getElementsByClassName("tha").length; i++) {
        document.getElementsByClassName("tha")[ i].style.color = '#000';
    
    }
        
    document.getElementsByClassName("header-search")[0].style.BackgroundColor = '#60b65b';
    
    document.getElementsByClassName("header-search")[0].style.color = '#fff';
    

  } else {
    document.getElementsByClassName('header')[0].style.backgroundColor = 'transparent';
    document.getElementsByClassName("logo")[0].style.color = '#fff';
    for (i = 0;  i < document.getElementsByClassName("tha").length; i++) {
        document.getElementsByClassName("tha")[ i].style.color ='#fff';
    
    }
    document.getElementsByClassName("header-search")[0].style.BackgroundColor = '#fff';
    
    document.getElementsByClassName("header-search")[0].style.color = '#60b65b';

  }
}
