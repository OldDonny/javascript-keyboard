var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tainnate eate tea anne inant nean', 'itant eate anot eat nato inate eaanot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
var num = 0
var num1 = (num + 1)
var sentenceCounter = 0
var characterCounter = 0


$(document).ready(function () {

 
//keyboards-shift button//
    $('#keyboard-upper-container').hide()
    $(document).keydown(function (e) {
        if (e.keyCode == 16) {
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();

        };
    });
    $(document).keyup(function (e) {
        if (e.keyCode == 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
        };
    });
//keyboards-shift button//    
//key highlighting//
    $(document).keydown(function (e) {
        if (e.keyCode != 16) {
            if (e.keyCode >= 65 && e.keyCode <= 90) {
                if (e.shiftKey) {
                    $('#' + e.keyCode).css('background-color', 'yellow');
                } else {
                    $('#' + (e.keyCode + 32)).css('background-color', 'yellow');
                }
            }
        }
    });
    $(document).keyup(function (e) {
        if (e.keyCode != 16) {
            if (e.keyCode >= 65 && e.keyCode <= 90) {
                if (e.shiftKey) {
                    $('#' + e.keyCode).css('background-color', 'white');
                } else {
                    $('#' + (e.keyCode + 32)).css('background-color', 'white');
                }
            }
        }
    });
//key highlighting//    
});



//yellow block tracking//
    function promptHightLight() {
        $("#letter-" + (characterCounter - 1)).css('background-color', 'yellow')
        if (characterCounter != 0) {
            $("#letter-" + (characterCounter - 1)).css('background-color', 'white')
        }
    }

    function setSentence() {
        var sentenceString = sentence[sentenceCounter];
        var sentenceSplit = sentenceString.split("");
        for (var i = 0; i <= sentenceString.length - 1; i++) {
            $("<span id=letter-" + i + ">" + sentenceSplit[i] + "</span>").appendTo('#sentenceDiv');
            
        }
    }
//yellow block tracking//

//connection of check remove-keys and key board//
    var num = (0)
    var n1 = (num + 1)

    $('#sentence').text(sentences[0]);
    $('#target-letter').text(sentences[0].charAt(0));
    n = sentences[0].charAt(num++)
    $('#feedback').append("<span class='glyphicon'></span>")
    $(document).on('keypress', function (e) {
        var x = String.fromCharCode(e.which)
        if (n === x) {
            $('#target-letter').text(sentences[0].charAt(n1++));
            n = sentences[0].charAt(num++)



            $('.glyphicon').addClass('glyphicon-ok').removeClass('glyphicon-remove')
        } else {
            $('.glyphicon').removeClass('glyphicon-ok').addClass('glyphicon-remove')
        }
    });



//connection of check remove-keys and key board//

