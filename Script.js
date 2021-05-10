
// Работа с переменными. Какие отличия между var, let и const?
testVarLetConst();

// Типы данных: какие бывают и в чем особенность каждого из них?
testTypeData();

// Комментарии
testComments();

// Операторы: сложение, вычитание, деление и умножение
testOperators();

// Логические операторы
testBoolean();

// Преобразование типов
testType();

// Циклы и ветвление кода, конструкция “switch”
testWhile();

function testWhile(params) {
    // Цикл.
    while (true) {
        break // Выходим из беск-цикла
    }

    // Цикл пройдёт 1 раз, ведь условие он проверяет после выполнения тела.
    let bool = false;
    do {
        console.log("Итерация")
    } while (bool);

    //     начало; условие; шаг
    for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
        console.log(i);
    }

    // continue
    for (let i = 0; i < 10; i++) {

        // если true, пропустить оставшуюся часть тела цикла
        if (i % 2 == 0) continue;
      
        console.log(i); // 1, затем 3, 5, 7, 9
    }

    // Метки. С вложенного цикла сразу остановить 2 цикла.
    outer: for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 3; j++) {

            break outer; // Вход
        }
    }
    // Выход

    // Применение условий
    const year = 2014;
    if (year < 2015) {
        console.log( 'Это слишком рано...' );
    } else if (year > 2015) {
        console.log( 'Это поздновато' );
    } else {
        console.log( 'Верно!' );
    }

    // Тернарный оператор
    const age = 10;
    let accessAllowed = (age > 18) ? "Да" : "Нет";
    console.log(accessAllowed); // false

    // Конструкция "switch"
    const x = "value1";
    switch(x) {
        case 'value1':  // if (x === 'value1')
            console.log("Done!") // Сработает
            break // не обязательно. Если не поставлен, весь ниже код выполнится, минуя проверки

        case 'value2':  // if (x === 'value2')
            // Код
            break

        default:
            // Код
            break
    }

    // Группировка «case». Теперь оба варианта 3 и 5 выводят одно сообщение.
    const s = 5;
    switch (s) {
        case 4:
            console.log('Правильно!');
            break;
      
        case 3: // (*) группируем оба case
        case 5:
            console.log('Неправильно!');
            console.log("Может вам посетить урок математики?");
            break;
      
        default:
            console.log('Результат выглядит странновато. Честно.');
    }
}

function testType(params) {
    let value = true;
    value = String(value); // теперь value это строка "true"

    value = "123";
    value = Number(value); // становится числом 123
}

function testBoolean(params) {
    let test = ( 1 || 0 ); // 1 - вернуло первое истинное значение
    test = ( null || 0 || 1 ); // 1 (первое истинное значение)
    test = ( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)

    test = ( 1 && 2 && null && 3 ); // null (первое ложное значание)
    test = ( 1 && 2 && 3 ); // 3 (Все верны, последнее верное значение)

    test = ( !true ); // false
    test = ( !0 ); // true
    // Аналог Boolean()
    test = ( !!"non-empty string" ); // true
    test = ( !!null ); // false
}

function testOperators(params) {
    // Объединяем строки
    let s = "моя" + "строка";

    // Ответ будет в виде строки: 12
    s = "1" + 2;

    // Ответ будет 33. 1 + 2 = 3, дальше идёт сложение со строкой
    s = 1 + 2 + "3";

    // Другие арифметические функции работают как обычно
    s = 6 - '2'; // 4. "Два" приводятся к числу
    s = "6" / "2"; // 3. Оба операнда приводятся к числам

    // Сокращение Number()
    s = +true // 1
    s = Number(true) // 1

    // Сокращение операций
    let n = 2;
    n += 5; // теперь n = 7 (работает как n = n + 5)
    n *= 2; // теперь n = 14 (работает как n = n * 2)
    // И тд.

    let counter = 2;
    counter++; // 3. Работает как counter = counter + 1, просто запись короче
    counter--; // 1

    // Префиксная форма ++counter увеличивает counter и возвращает новое значение 2
    counter = 1;
    let a = ++counter; // 2

    // Постфиксная форма counter++ также увеличивает counter, но возвращает старое значение (которое было до увеличения). Так что покажет 1.
    a = counter++; // 1

    a = "  1  " - 1 // 0. Пробелы обрезаются
}

function testComments(params) {
    // Однострочные комментарии
    /*
        Многострочные
        Комментарии
    */

    // Пример плохих комментариев
    /*
        // здесь мы добавляем виски
        for(let i = 0; i < 10; i++) {
            let drop = getWhiskey();
            smell(drop);
            add(drop, glass);
        }
        
        // здесь мы добавляем сок
        for(let t = 0; t < 3; t++) {
            let tomato = getTomato();
            examine(tomato);
            let juice = press(tomato);
            add(juice, glass);
        }
    */

    // Лучше сделать так
    /*
        addWhiskey(glass);
        addJuice(glass);

        Ниже вынесены отдельные функции
    */
}

function testTypeData(params) {
    // number
    let n = 123; // Обычное число

    // BigInt
    let bigmom = 1234567890123456789012345678901234567890;
    console.log(bigmom); // Выводит всякое непонятное число
    let normalInt = 1234567890123456789012345678901234567890n;
    console.log(normalInt); // Всё хорошо

    // NaN
    console.log("Строка" / 3); // Выводит NaN из-за математической ошибки

    // Infinity
    console.log(1 / 0); // Выводит Infinity, т.к результат равняется бесконечности

    // string
    let string = "RakBot"; // Обычная строка
    let phrase = `Обратные кавычки позволяют встраивать переменные ${string}`;
    
    // boolean
    let nameFieldChecked = true;
    nameFieldChecked = (nameFieldChecked == "строка"); // false

    // null
    let testVar = null;
    console.log(testVar); // null Пусто

    // undefined
    let test1;
    console.log(test1); // undefined. Не присвоено

    // object
    console.log(typeof(Math)); // object. Встроенный объект, который предоставляет математические операции.

    // symbol
    console.log(typeof(Symbol("id"))); // symbol. Для уникальных идентификаторов
}

function testVarLetConst() {
    if (true) {
        var variableVar = "Получил значение var";
    }
    if (true) {
        let variableLet = "Получил значение let";
    }
    
    //console.log(variableVar); // "Получил значение var"
    //console.log(variableLet); // ReferenceError: "variableLet" is not defined.

    // let доступна внутри блока, в котором она была создана и в любом вложенном блоке
    // var доступна внутри функции, в котором она была создана

    const varibleConst = "Постоянная переменная"; // Это переменная Let, но с отличием. Она не даёт переназначать ей значение, но свойства можно
    //varibleConst = "Другое значание"; // Uncaught TypeError: Assignment to constant variable.
    const array = {
        name: 'FYP'
    }
    //array.name = 'KalCor' // Работает, т.к мы изменили ей свойство, а не тип 
}