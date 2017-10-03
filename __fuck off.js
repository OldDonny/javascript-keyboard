  $('#sentence').text(sentences[0]);
    $('#target-letter').text(sentences[0].charAt(0));
    var n = sentences[0].charAt(0)
    $(document).keypress(function (e) {

        var x = String.fromCharCode(e.which);
        var n1 = sentences[0].charAt(num++)
        if (n===x) {
            console.log(e)
            $('#target-letter').text(n);
            $(n).css('background-color','yellow');
        }
    });


    snetance ccounter =0


    charatcercounter=0

    seperat sentance into indiv letters

    sentance string.spilt

    for loop the spilit sentence