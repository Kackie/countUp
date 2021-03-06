/*//////////////////////////////////////////
Author : Kackie(https://github.com/Kackie)
created: 2019/02/23
//////////////////////////////////////////*/
;(function($){
    $.fn.countUp = function(options){
        $.fn.countUp.defaults = {
            duration : 500,
            easing : 'linear',
            zeroPadding : false
        };
        var opts = $.extend({}, $.fn.countUp.defaults, options);
        
        this.each(function(index){
            var numTxt = $(this).text(),
                num = parseInt(numTxt),
                animNum = 0,
                charNum = numTxt.length;
            $(this).animate(
                {'z-index':num},
                {
                    duration:opts.duration,
                    easing:opts.easing,
                    step:function(now, fx){
                        if(opts.zeroPadding === true){
                            var nowNum = parseInt(now),
                                nowLength = String(nowNum).length;
                            if(nowLength < charNum){
                                animNum = ('0000000' + String(nowNum)).slice(-charNum);
                            }else{
                                animNum = parseInt(now);
                            }
                        }else{
                            animNum = parseInt(now);
                        }
                        $(this).text(animNum);
                    }
                }
            )
        });
    };
  }(jQuery));