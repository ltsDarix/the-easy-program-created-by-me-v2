let x = 0;
alert ('Это программа по вычислению квадратов различных чисел');
for (i = 0; i < 1; i++) {
    let prompt1 = +(prompt('Введите число: '));
    if (prompt1 == '' || typeof (prompt1) == null || isNaN(prompt1)) {
        alert ('Вы ввели не число!');
        i = i - 1;
    } else {
        x = prompt1*prompt1;
        alert ('Квадрат числа ' + prompt1 + ' равен ' + x + '.');
        i = i - 1;
    }
}


