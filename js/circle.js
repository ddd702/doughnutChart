(function(window) {
    var Circle = {
        init: function(num, totalNum) {
            var self = this;
            var deg = Math.ceil(num / totalNum * 360);
            var time = this.time = 1000 * num / totalNum;
            this.speed = self.time / num - 0.5;
            this.num = num;
            setTimeout(function() {
                self.drawCircle(deg);
                self.upCount();
            }, 500);
        },
        drawCircle: function(deg) {
            var self = this;
            var $leftCircle = $('#j-circle-left');
            var $rightCircle = $('#j-circle-right');
            var $leftDot = $('#j-left-dot');
            var $centerDot = $('#j-center-dot');
            var $rightDot = $('#j-right-dot');
            var deg = deg > 360 ? 360 : deg;
            $centerDot.show();
            $rightCircle.addClass('show');
            if (deg < 180) {
                $rightCircle.animate({
                    rotate: deg + "deg"
                }, this.time, 'linear', function() {
                    $rightDot.show();
                });
            } else {
                $rightCircle.animate({
                    rotate: '180deg'
                }, 500, 'linear', function() {
                    $leftCircle.addClass('show');
                    $leftCircle.animate({
                        rotate: (deg - 180) + 'deg'
                    }, self.time - 500, 'linear', function() {
                        $leftDot.show();
                    });
                });
            }
        },
        upCount: function() {
            var self = this;
            var i = 0;
            var $num = $('#j-number');
            var count = setInterval(function() {
                $num.text(i);
                if (i >= self.num) {
                    clearInterval(count);
                }
                i++;
            }, this.speed);
        }
    };
    window.circle = Circle;
})(window);
