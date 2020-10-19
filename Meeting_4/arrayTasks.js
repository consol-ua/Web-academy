const classNames = ['firstClass', 'secondClass', 'thirdClass'];

// task 1
// Написать функцию, которая будет возвращать строку в которой будут все классы элмента через пробел
function getClassName(classNames) {
    return classNames.join(' ');
}
console.log(getClassName(classNames));
console.log('task1', getClassName(classNames) === 'firstClass secondClass thirdClass'); // true

// task 2
// удаляет класс из строки
function removeClass(className, removeClass) {
    const arr = className.split(" ");
    function delEl(value) {
        return value != removeClass;
    }
    let filter = arr.filter(delEl);
    return filter.join(' ');
    
}
console.log('task2', removeClass('t g m', 'g'))
console.log('task2', removeClass('t g m', 'g') === 't m');
console.log('task2', removeClass('t k m', 'g') === 't k m');
console.log('task2', removeClass('t g g m', 'g') === 't m');

// task 3
// добавить класс в строку
function addClass(className, addedClass) {
    // return className.concat(addedClass);
    const arrClass = className.split(' ');
    function delClass(value) {
        return value !== addedClass;
    }
    const arrClassFilter = arrClass.filter(delClass);
    return arrClassFilter.concat(addedClass).join(' ');
}

console.log('task3', addClass('a b', 'c') === 'a b c' );
console.log('task3', addClass('a b c', 'c') === 'a b c' );

// task 4
// добавить класс, если его нет в строке и удалить, если он там есть
function toggleClass(className, toggledClass) {
    const arrClass = className.split(' ');
    function delClass(value) {
        return value !== toggledClass;
    }
    const arrClassFilter = arrClass.filter(delClass);
    if (arrClassFilter.length == arrClass.length) {
        return arrClassFilter.concat(toggledClass).join(' ');
    }
    return arrClassFilter.join(' ');
}

console.log('task 4', toggleClass('a b c', 'b') === 'a c');
console.log('task 4', toggleClass('a c', 'b') === 'a c b');

// task 5
// функция формирования классов из объекта
// Ключами обьекта, являются имена классов, значениями булевые true/false
// если стоит true, то класс добавляется к строке, если false, то не добавляется
// Object.keys, Object.values, Object.entries, for in
function cn(className, classObj) {
    const arrCassName = className.split(" ");
    const valueClassObj = Object.values(classObj);
    const keysClassObj = Object.keys(classObj);
    function getTrueValuesClassObj(value) {
        return value == true;
    }
    if (valueClassObj.some(getTrueValuesClassObj)) {
        const addNewClass = arrCassName.concat();
        
        for (let i = 0; i < valueClassObj.length; i++) {
            if (valueClassObj[i]) {
                if (!addNewClass.some(function (el) { return el == keysClassObj[i] })) {
                    addNewClass.push(keysClassObj[i]);
                }
                
            }
        }
        return addNewClass.join(' ');
    }
    return arrCassName.join(' ');
}

console.log('task 5', cn('a b', { c: true, d: false, e: true }) === 'a b c e');
console.log('task 5', cn('a b', { c: false, d: false, e: true, b: true }) === 'a b e');

// task 6
// сформировать массив состоящий из elementsCount элементов
// первый и второй элемент этого массива передаются
// каждый следующий элемент получается путем суммы двух предидущих
function fib(firstElement, lastElement, elementsCount = 10) {
    const result = [firstElement, lastElement];
    for (let i = 2; i < elementsCount; i++) {
        result.push(result[i-1] + result[i-2])
    }
    return result;
}

console.log('task 6', fib(1, 1, 10).join(',') === [1, 1, 2, 3, 5, 8, 13, 21, 34, 55].join(','));
console.log('task 6', fib(2, 4, 4).join(',') === [2, 4, 6, 10].join(','));

// task 7
// Найти произведение элементов массива
function mult(arr) {
    return arr.reduce(function (a, b) {return a*b})
}

console.log('task 7', mult([1, 2, 3, 1]) === 1*2*3*1 );
console.log('task 7', mult([1, 3, 3, 5]) === 1*3*3*5 );