

$(document).ready(function(){
    $('#keyboard-upper-container').hide()
    $(document).keydown(function(e){
        if(e.keyCode==16){
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();
            
        };
    });
    $(document).keyup(function(e){
        if(e.keyCode==16){
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
        };
    });

    $(document).keypress(function(e){
        $(keyCode).toggle(function(){
            $('#'+e.keyCode).css('background-color','yellow');
        })
    });   
    $(document).bind('keydown', 'ctrl+c', f);
    
    
});


