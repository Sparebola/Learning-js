
// Работа с переменными. Какие отличия между var, let и const?
testVarLetConst();

// Типы данных: какие бывают и в чем особенность каждого из них?

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
    array.name = 'KalCor' // Работает, т.к мы изменили ей свойство, а не тип
}