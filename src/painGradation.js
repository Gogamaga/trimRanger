const containerRange = document.querySelector('.range-wrap');
var tenPercent = 10;
var fivePercent = 5;
var quartedPercent = 2.5;

export default function () {
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].forEach(function (e, i) {
        const span = document.createElement('span');
        span.className = 'grad-itemQuarted'
        //   var span = angular.element('<span class="grad-itemQuarted">');
        span.setAttribute('style', "left:" + quartedPercent + "%")
        containerRange.append(span)
        quartedPercent += 5
        if (i % 2 === 0) {
            const span = document.createElement('span');
            span.className = 'grad-item'
            // var span = angular.element('<span class="grad-item">');
            span.setAttribute('style', "left:" + tenPercent + "%")
            containerRange.append(span)
            tenPercent += 10
        } else {
            const span = document.createElement('span');
            span.className = 'grad-item5'
            // var span = angular.element('<span class="grad-item5">');
            span.setAttribute('style', "left:" + fivePercent + "%")
            containerRange.append(span);
            fivePercent += 10;
        }

    })
}