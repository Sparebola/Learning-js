
// Работа с переменными. Какие отличия между var, let и const?
testVarLetConst();

// Типы данных: какие бывают и в чем особенность каждого из них?
testTypeData();

// Комментарии
testComments();

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