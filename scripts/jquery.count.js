var countTxt = $('.txt').text(),
    targetDigit = countTxt.length,
    countNumArr = [],
    countInitTxt = '',
    n = 0;

init();
function init() {
    while (n < targetDigit) {
        countNumArr[n] = parseInt(countTxt.charAt(n));
        countInitTxt += '<span>' + 0 + '</span>';
        n++;
    }
    $('.txt').html(countInitTxt).addClass('is_shown');
    anim();
}

function anim() {
    $('.txt').find('span').each(function (idx) {
        var self = $(this),
            targetNum = countNumArr[idx];
        $(this).animate(
            { zIndex: targetNum },
            {
                duration: targetDigit * 100,
                easing: 'linear',
                step: function (now, fx) {
                    self.text(parseInt(now));
                }
            }
        );
    });
}