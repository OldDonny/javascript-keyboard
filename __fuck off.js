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







    var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tainnate eate tea anne inant nean', 'itant eate anot eat nato inate eaanot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    var num = 0
    var num1 = (num + 1)
    var sentenceCounter = 0
    var characterCounter = 0
    
    
    $(document).ready(function () {
    
        promptHightLight();
        setSentence()
    
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
                promptHightLight();
    
    
    
                $('.glyphicon').addClass('glyphicon-ok').removeClass('glyphicon-remove')
            } else {
                $('.glyphicon').removeClass('glyphicon-ok').addClass('glyphicon-remove')
            }
        });
    
    
    });
    








var sentences = [
    'this is my first sentence',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tainnate eate tea anne inant nean',
    'itant eate anot eat nato inate eatanot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'
];

var upper,
    lower;


$(document).ready(() => {
    upper = $('#keyboard-upper-container');
    lower = $('#keyboard-lower-container');

    toggleKeyboards();

    $(document).on('keyup keydown', (e) => {
        handleKeyPress(e.type, e.shiftKey, e.keyCode);
    });
});


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



$('#sentence').text(sentences[0]);
$('#target-letter').text(sentences[0].charAt(0));
n = sentences[0].charAt(num++)
$('#feedback').append("<span class='glyphicon'></span>")
$(document).on('keypress', function (e) {
    var x = String.fromCharCode(e.which)
    if (n === x) {
        $('#target-letter').text(sentences[0].charAt(n1++));
        n = sentences[0].charAt(num++)
        promptHightLight();



        $('.glyphicon').addClass('glyphicon-ok').removeClass('glyphicon-remove')
    } else {
        $('.glyphicon').removeClass('glyphicon-ok').addClass('glyphicon-remove')
    }
});




function handleKeyPress(type, isShift, keyCode) {
    if (keyCode === 16) {
        if (type === 'keydown') {
            toggleKeyboards(true);
        } else {
            toggleKeyboards();
        }
    }

    var trueKeyCode = configureTrueKeyCode(keyCode, isShift);

    handleHighlight(trueKeyCode, type);
}

function handleHighlight(keyCode, type) {
    if (type === 'keydown') {
        $('#' + keyCode).css('background-color', 'pink');
    } else {
        $('#' + keyCode).css('background-color', '#f5f5f5');
    }
}

function configureTrueKeyCode(keyCode, isShift) {
    if (isShift === false && keyCode >= 65 && keyCode <= 90) {
        return keyCode + 32;
    }

    return keyCode;
}

function toggleKeyboards(showUpper) {
    if (showUpper) {
        lower.hide();
        upper.show();
    } else {
        upper.hide();
        lower.show();
    }
}