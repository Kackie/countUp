var countTarget = $('.txt'),
    countTxt = countTarget.text(),
    targetDigit = countTxt.length,
    countNumArr = [],
    countInitTxt = '',
    n = 0;

init();
function init() {
    countTarget.addClass('js_countAnim');
    var newHTML = "";
    countTxt.split('').forEach(function(v) {
        newHTML += '<span><span>';
        for(var i=0;i<=parseInt(v);i++){
            newHTML += "<span>" + i + "</span>";
        }
        newHTML += '</span></span>';
    });
    countTarget.html(newHTML);
    // $('.txt').children('span').each(function(idx){
    //     var self = $(this);
    //     for(var i=0;i<countNumArr[idx];i++){
    //         self.append('<span>' + i + '</span>');
    //     }
    // });

    $('.txt').addClass('is_shown');
    setTimeout(function(){
        anim();
    },1);
}

function anim() {
    $('.txt').addClass('js_anim');
}