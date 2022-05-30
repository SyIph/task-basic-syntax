export function romanToInteger(str) {
    const letters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const numbers = [1, 5, 10, 50, 100, 500, 1000];
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */

    for (var i = 0; i < str.length; i++) {
        var cur_i = letters.indexOf(str.substr(i, 1)),
            to_add = numbers[cur_i];
        if (i > 1) {
            var prev = letters.indexOf(str.substr(i - 1, 1));
            if (prev < cur_i) to_add -= numbers[prev] * 2;
        }
        result += to_add;
    }

    return result;
}
