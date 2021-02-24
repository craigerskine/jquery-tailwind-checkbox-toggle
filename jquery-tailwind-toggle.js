$(function(){
  // simple jQuery toggles using Tailwind
  $('[data-toggle="checkbox-toggle"]:not(.checkbox-toggle-tw)').each(function(){
    if($(this).find('input[type="checkbox"]').length = 1){
      var chBoxRounded = $(this).data('rounded');
      chBoxRounded = (chBoxRounded !== undefined) ? chBoxRounded : 'rounded-full';
      var chBoxHandleSize = $(this).data('handle-size');
      chBoxHandleSize = (chBoxHandleSize !== undefined) ? chBoxHandleSize : '20';
      var chBoxHandleColor = $(this).data('handle-color');
      chBoxHandleColor = (chBoxHandleColor !== undefined) ? chBoxHandleColor : 'bg-white';
      var chBoxOffColor = $(this).data('off-color');
      chBoxOffColor = (chBoxOffColor !== undefined) ? chBoxOffColor : 'bg-gray-500';
      var chBoxOnColor = $(this).data('on-color');
      chBoxOnColor = (chBoxOnColor !== undefined) ? chBoxOnColor : 'bg-blue-400';
      $(this)
        .attr('data-toggle', 'checkbox-toggle')
        .css({'width': (chBoxHandleSize * 2) +'px'})
        .addClass('inline-flex cursor-pointer align-middle relative')
        .append('<i class="'+ chBoxRounded +' '+ chBoxOffColor +' bg-opacity-50 absolute inset-x-1 top-1/2 transform -translate-y-1/2 transition duration-200' +'" style="height: '+ (chBoxHandleSize / 2) +'px;" />')
        .append('<b class="'+ chBoxHandleColor +' '+ chBoxRounded +' relative ring-2 ring-black ring-opacity-20 shadow transition-all duration-200" style="width: '+ chBoxHandleSize +'px; height: '+ chBoxHandleSize +'px;" />')
        .find('input').addClass('checkbox-toggle-tw w-px h-px opacity-0 absolute').attr('tabindex', '-1')
        .on('change', function(){
          if($(this).is(':checked')){
            $(this).closest('label').find('i').removeClass(chBoxOffColor + ' bg-opacity-50').addClass(chBoxOnColor).next('b').css('transform', 'translate('+ chBoxHandleSize * 1 +'px, 0)');
          } else {
            $(this).closest('label').find('i').removeClass(chBoxOnColor).addClass(chBoxOffColor + ' bg-opacity-50').next('b').css('transform', '');
          }
          if($(this).is(':disabled')){
            $(this).closest('label').addClass('opacity-25 pointer-events-none');
          } else {
            $(this).closest('label').removeClass('opacity-25 pointer-events-none');
          }
      }).trigger('change');
    }
  });
  $('[data-toggle="checkbox-toggle"]').attr('tabindex', '0').on('keydown', function(e){
    if(e.keyCode == 13 || e.keyCode == 32){
      e.preventDefault();
      $(this).find('input').click();  
    }
  });

  // remote en/disable
  // $('#some-ch3').on('change', function(){
  //   $('#some-ch4').prop('disabled', !$(this).is(':checked')).trigger('change');
  // });
});
