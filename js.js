$(function(){
  // simple jQuery toggles using Tailwind
  $('.checkbox-toggle:not([data-plugin="checkbox-toggle"])').each(function(){
    var chBoxRounded = $(this).data('rounded');
    chBoxRounded = (chBoxRounded !== undefined) ? chBoxRounded : 'rounded-full';
    var chBoxHandleSize = $(this).data('handle-size');
    chBoxHandleSize = (chBoxHandleSize !== undefined) ? chBoxHandleSize : '20';
    var chBoxHandleColor = $(this).data('handle-color');
    chBoxHandleColor = (chBoxHandleColor !== undefined) ? chBoxHandleColor : 'bg-white';
    var chBoxOffColor = $(this).data('off-color');
    chBoxOffColor = (chBoxOffColor !== undefined) ? chBoxOffColor : 'bg-grey';
    var chBoxOnColor = $(this).data('on-color');
    chBoxOnColor = (chBoxOnColor !== undefined) ? chBoxOnColor : 'bg-blue-light';
    $(this)
    .attr('data-plugin', 'checkbox-toggle')
    .css({'width': (chBoxHandleSize * 2.5) + 6 +'px', 'padding': '3px', 'transition': 'all .25s'})
    .addClass(chBoxRounded +' '+ chBoxOffColor +' inline-flex cursor-pointer align-middle')
    .append('<b class="'+ chBoxHandleColor +' '+ chBoxRounded +' shadow" style="width: '+ chBoxHandleSize +'px; height: '+ chBoxHandleSize +'px; transition: all .25s" />').find('input').addClass('w-px h-px opacity-0 absolute').attr('tabindex', '-1').on('change', function(){
      if($(this).is(':checked')){
        $(this).closest('label').removeClass(chBoxOffColor).addClass(chBoxOnColor).find('b').css('transform', 'translate('+ chBoxHandleSize * 1.5 +'px, 0)');
      } else {
        $(this).closest('label').removeClass(chBoxOnColor).addClass(chBoxOffColor).find('b').css('transform', '');
      }
      if($(this).is(':disabled')){
        $(this).closest('label').addClass('opacity-25 pointer-events-none');
      } else {
        $(this).closest('label').removeClass('opacity-25 pointer-events-none');
      }
    }).trigger('change');
  });
  $('.checkbox-toggle').attr('tabindex', '0').on('keyup', function(e){
    if(e.keyCode == 13 || e.keyCode == 32){
      $(this).find('input').click();  
    }
  });

  // remote en/disable
  $('#some-ch3').on('change', function(){
    $('#some-ch4').prop('disabled', !$(this).is(':checked')).trigger('change');
  })
});