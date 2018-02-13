$(function() {
    'use strict';
    // only for templating (form)
    $('input:radio.radio-bullet', '.w-form').change( function(){
        var name = $(this).attr('name');
        $('input:radio[name="'+ name +'"]').each(function( index ) {
          $(this).prev('.radio-bullet-replacement').removeClass('checked');
        });
        if ($(this).is(':checked')) {
            $(this).prev('.radio-bullet-replacement').addClass('checked');
        } else{
            $(this).prev('.radio-bullet-replacement').removeClass('checked');
        }
    });
    $('input:checkbox.checkbox-input', '.w-form').change( function(){
        if ($(this).is(':checked')) {
            $(this).prev('.checkbox-handle').addClass('checked');
            $(this).next('.checkbox-label').addClass('checked');
        } else{
            $(this).prev('.checkbox-handle').removeClass('checked');
            $(this).next('.checkbox-label').removeClass('checked');
        }
    });
    // --
    // Stop loading on pagess
    $('.loading-mask').addClass('stop-loading');
    // History handle (only templating)
    window.onpopstate = function(e){
        $('.loading-mask').addClass('stop-loading');
    };
});
