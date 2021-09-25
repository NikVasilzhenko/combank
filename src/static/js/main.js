$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

function copyInBuffer(){
  let	code = document.location.href + '#first-time';
  navigator.clipboard.writeText(code);
}

$(document).ready(function(){
  //nav scroll
  $('.js-scroll').click(function(e){
    e.preventDefault();
    let anchor = $(this).attr("href"),
        scroll_el = $(anchor);
    if ($(scroll_el).length != 0) { 
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top}, 250); 
    }
  });
  
  //popup scroll
  $('.js-popup-scroll').click(function(e){
    e.preventDefault();
    let anchor = $(this).attr("href"),
        scroll_el = $(anchor);
    if ($(scroll_el).length != 0) { 
      $('#js-popup').animate({ scrollTop: (($(scroll_el).offset().top) - ($('#js-popup').offset().top) - 50)   }, 250); 
    }
  });
  
  //mob menu
  $('#js-burger').add('.js-scroll').on('click', function(){
    $('#js-burger').add('#js-menu').toggleClass('open')
  });
  
  /*валидация на заполнение отправка формы и ответ*/
  $('.js-form-val').on('submit', function(e){
    e.preventDefault();
    
    let form = $(this),
        fields = $(form).find('.js-val'),            
        valid = true;
    
    $.each($(fields), function(){
      if (!$.trim($(this).val())){
        $(this).addClass('error');
        valid = false;            
      } else {
        $(this).removeClass('error');
      }
    });
    
    if (valid){
      $.ajax({
        url: "#",
        type: "POST",
        response: "HTML",
        data: $(this).serialize(),    
        success: function(data) {
          console.log('отправлено') ;                    
        },
        error: function() {
    	 console.log("Не возможно отправить");
        }
      });
    }
  });
  $('.js-val').on('keypress', function(){
    $(this).removeClass('error');
  });
  
  //tabs
  $('.js-tab').on('click', function(){
    if( !($(this).hasClass('active')) ){
      $('.js-tab-item').toggleClass('hide');
    }
  });
  
  //start animation
  function startAnim(){
    const durationTime = 700;
    function step1(){
      $('body').addClass('step-1');
      setTimeout(
        step2 , durationTime
      );
    }
    function step2(){
      $('body').addClass('step-2');
      setTimeout(
        step3 , durationTime
      );
    }
    function step3(){
      $('body').addClass('step-3');
      setTimeout(
        step4 , durationTime
      );
    }
    function step4(){
      $('body').addClass('step-4');
      setTimeout(
        step5 , durationTime
      );
    }
    function step5(){
      $('body').addClass('step-5');
    }
    
    setTimeout(
      step1 , 100
    );
    
  };
  startAnim();
  
  //popup
  $('.js-popup-btn').on('click', function(){
    $('#js-popup').toggleClass('open');
    $('body').toggleClass('no-scroll');
  });
  
  //fade
  $('#js-fade-btn').on('click', function(){
    $('#js-fade').addClass('open');
    $(this).remove();
  });
});