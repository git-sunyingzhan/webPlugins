$(function () {

    $("#add").on("click", function () {
        var num = $("#num").val();
        if (num) {

            var oldNum = $(".scrool-centent li").text();
            var newNum = Number(oldNum) + Number(num);
            alert(String(newNum).length);
            for (var i = newNum.length - 1; i >= 0; i--) {
                alert(newNum.length);
                $(".scrool-centent li:eq(${index})".format({
                    index: i
                })).text(newNum[i]);
            }
            $(".scrool-right").text("+" + num).css("color", "red");
        }
    });
    $("#subtract").on("click", function () {
        var num = $("#num").val();
        if (num) {
            var oldNum = $(".scrool-centent li").text();
            alert(Number(oldNum) - num);
            $(".scrool-right").text("-" + num).css("color", "green");
        }
    });
});

String.prototype.format = function (opts) { //use 'my name is ${name}'.format({name:'lake'})
    var data = Array.prototype.slice.call(arguments, 0),
        toString = Object.prototype.toString;
    if (data.length) {
        data = data.length == 1 ?
            (opts !== null && (/\[object Array\]|\[object Object\]/.test(toString.call(opts))) ? opts : data) : data;
        return this.replace(/\$\{(.+?)\}/g, function (match, key) {
            var replacer = data[key];
            // chrome 下 typeof /a/ == 'function'

            if ('[object Function]' == toString.call(replacer)) {
                replacer = replacer(key);
            }
            return ('undefined' == typeof replacer ? '' : replacer);
        });
    }
    return this;
}