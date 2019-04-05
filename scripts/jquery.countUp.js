/*//////////////////////////////////////////
Author : Kackie(https://github.com/Kackie)
created: 2019/02/23
//////////////////////////////////////////*/
;(function($){
    $.fn.countUp = function(options){
        $.fn.countUp.defaults = {
            duration : 500,
            easing : 'linear',
            zeroPadding : false,
            dataCount : false,
        };
        var opts = $.extend({}, $.fn.countUp.defaults, options);
        this.each(function(index){
            $.fn.countUp.countTo($(this),opts);
            return this;
        });
    };
    $.fn.countUp.countTo = function($obj,opts){
        var beforeNum,afterNum,displayNum,letterNum;
            if($obj.attr('data-count') !== undefined){
                beforeNum = parseInt($obj.text());
                afterNum = parseInt($obj.data('count'));
            }else{
                beforeNum = 0;
                afterNum = parseInt($obj.text());
            }
            displayNum = 0;
            letterNum = String(afterNum).length;
            $obj.css({
                'visibility':'visible',
                'top':beforeNum
            }).animate(
                {'top':afterNum},
                {
                    duration:opts.duration,
                    step:function(now){
                        displayNum = parseInt(now);
                        if(opts.zeroPadding === true){
                            var numLength = String(displayNum).length;
                            if(numLength < letterNum){
                                displayNum = ('0000000' + String(displayNum)).slice(-letterNum);
                            }
                        }
                        $obj.text(displayNum);
                    },
                    complete:function(){
                        $obj.css('top','');
                    }
                }
            );
    };
  }(jQuery));