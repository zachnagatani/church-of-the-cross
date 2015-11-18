$("#contact-form").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
});

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#contact-name").val();
    var email = $("#contact-email").val();
    var message = $("#contact-message").val();
 

    $.ajax({
      type: "POST",
      url: "php/process.php",
      data: "name=" + name + "&email=" + email + "&message=" + message,
      success : function(text){
          if (text == "success"){
              formSuccess();
          } else {
              submitMSG(false,text);
          }
      }
  });
}
function formSuccess(){
    $( "#msgSubmit" ).removeClass( "hidden" );
}

function submitMSG(){
      $( "#msgFail" ).removeClass( "hidden" );
}

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});


// Parallax Effect
$(function() {
  
  // Cache the Window object
  var $window = $(window);
  
  // Parallax Backgrounds
  // Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641
  
  $('section[data-type="background"]').each(function(){
    var $bgobj = $(this); // assigning the object
    
    $(window).scroll(function() {
    
      // Scroll the background at var speed
      // the yPos is a negative value because we're scrolling it UP!                
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));
      
      // Put together our final background position
      var coords = '50% '+ yPos + 'px';
      
      // Move the background
      $bgobj.css({ backgroundPosition: coords });
      
    }); // end window scroll
  });
  
});