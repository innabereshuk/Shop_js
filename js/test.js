(function(){
    'use strict';

    // Функция проверяет, что переменная х является числом и не равна нулю. Если условие выполняется, и х - число > 0, тогда получаем 1, в противном случае получаем -1 - значит введено отрицательное число.

    let x = 1256;

    Math.sign = Math.sign || function(x) {
        x = +x; // преобразуем в число
        if (x === 0 || isNaN(x)) {
          return x;
        }
        return x > 0 ? 1 : -1;
      }
     console.log(Math.sign(x));

    // Вариативная функция -- Возвращает наибольший общий делитель списка аргументов

     Math.gcd = function() {
        if (arguments.length == 2) {
            if (arguments[1] == 0)
                return arguments[0];
            else
                return Math.gcd(arguments[1], arguments[0] % arguments[1]);
        } else if (arguments.length > 2) {
            var result = Math.gcd(arguments[0], arguments[1]);
            for (var i = 2; i < arguments.length; i++)
                result = Math.gcd(result, arguments[i]);
            return result;
        }
    };

    console.log(Math.gcd(20, 30, 15, 70, 40));

})();
