/*Реализовать класс, описывающий окружность. В классе долж-
ны быть следующие компоненты:
 ■ поле, хранящее радиус окружности;
 ■ get-свойство, возвращающее радиус окружности;
 ■ set-свойство, устанавливающее радиус окружности;
 ■ get-свойство, возвращающее диаметр окружности;
 ■ метод, вычисляющий площадь окружности;
 ■ метод, вычисляющий длину окружности.
Продемонстрировать работу свойств и методов. */

class Circle {
    constructor(r) {
        this.radius = r
    }
    get getRadius() {
        console.log(this.radius)
        return this.radius
    }
    set changeRadius(rad) {
        this.radius = rad
    } 
    get getDiameter () {
        console.log(this.radius * 2)
        return this.radius * 2
    } 
    showArea (...multiplier) {                               // если передаем числа. то будем выбирать максивальное и прибавлять его к результату                
        let max = 1                                          // пришлось ввести значение по умолчанию 1. т.к. если не передаем данные а переменная объявлена и пуста получаем андефайнд
        multiplier.forEach(function(el) {                    
            if(el > max) {
                max = el
            }
        } 
        )
        // console.log(multiplier)
        console.log(Math.PI * this.radius * this.radius + max)
    }
    showLengthCircle () {
        let LengthCircle = 2 * Math.PI * this.radius
        console.log(LengthCircle)
        this.LengthCircle = LengthCircle     // тут попопобовал записать данные в объект при вызове функции. все работает
    }
}

let myCircle = new Circle(10) 
myCircle.changeRadius = 20
myCircle.getRadius
myCircle.getDiameter
myCircle.showArea()
myCircle.showLengthCircle()     // если эту функцию не вызывать, тогда новое свойство не появиться в объекте
console.log(myCircle)
myCircle.showArea(10, 100, 10000000, -40000)   //  если передадим . выберет наибольшее

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Задание 2
Реализовать класс, описывающий html элемент. 
Класс HtmlElement должен содержать внутри себя:
 ■ название тега;
 ■ самозакрывающийся тег или нет;
 ■ текстовое содержимое;
 ■ массив атрибутов;
 ■ массив стилей;
 ■ массив вложенных таких же тегов;
2
 ■ метод для установки атрибута;
 ■ метод для установки стиля;
 ■ метод для добавления вложенного элемента в конец теку-
щего элемента;
 ■ метод  для  добавления  вложенного  элемента  в  начало  те-
кущего элемента;
 ■ метод  getHtml(),  который  возвращает  html  код  в  виде 
строки, включая html код вложенных элементов */

class HtmlElement {
    constructor(tag, closed, text) {      // если тег парный пиши true
        this.tag = tag;
        this.closed = closed;
        this.text = text;
        this.arrAtr = [];     // не будем задавать в конструкторе первоначальное значение атребута. просто создадим пустой массив
        this.arrStyles = [];  // не будем задавать в конструкторе первоначальное значение стиля просто создадим пустой массив
        this.arrTag = []
    }
    
    getAtr(atr, val) {
        this.arrAtr.push()
    }
    getStyles(s) {
        this.arrStyles.push(s)
    }

}

let test1 = new HtmlElement ('p', true, 'mrskmretg')
test1.getAtr('atrTest1', 'znachenie1')               //  добавим атрибут
test1.getStyles('stil1234')      // добавим стиль
test1.getStyles('sti0000000')    // добавим еще стиль
console.log(test1)               //  работает 



// не знаю как 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
Реализовать класс, который описывает css класс. 
Класс CssClass должен содержать внутри себя:
 ■ название css класса;
 ■ массив стилей;
 ■ метод для установки стиля;
 ■ метод для удаления стиля;
 ■ метод getCss(), который возвращает css код в виде стро-
ки. */

class CssClass {
    constructor(name) {
        this.nameClass = name;
        this.styles = [];
    }
    installStyles(s) {          // введите css свойство  + значение  в виде строки 'color: red'
        this.styles.push(s)
    }
    deleteStyles(d) {           // введите сss свойство в виде строки 'color'
        let regexp = new RegExp(`${d}`, 'gi')
        // console.log(d)
        let delIndex       //   выводим переменную содержащуюю индекс за скобки для доступа к ней 
        this.styles.forEach(function(el, index,) {
            if (regexp.test(el)) {
                delIndex = index    // получим индекс элемента который совпал с регулярынм выражением
            }
        }
        )
        // console.log(delIndex)
        this.styles.splice(delIndex, 1)
    }
    getCss() {
        // let css = ''    //  ОЧЕНЬ ВАЖНЫЙ ВОПРОС. ТУТ ПО УМОЛЧАНМЮ СТАВЛЮ '' ЕСЛИ Я НЕ ДЕЛАЮ ЭТОГО ТО ПО УМОЛЧАНИЮ У ПЕРЕМЕННОЙ undefined 
        // СООТВЕТСТВЕННОЯ ПРИБАВЛЯЮ НА ПЕРВОЙ ИТЕРРАЦИИ undefined + ЗНАЧЕНИЕ. В ДАННОМ СЛУЧАЕ ПОДХОДЯТ '' НО КАКИЕ СПОСОБЫ ОБЫЧНО ИСПОЛЬЗУЮТ В ТАКИХ СЛУЧАЯХ
        let css = 'style = "'
        this.styles.forEach(function(el, index, arr) {
            if (index != arr.length - 1 ) {    // это условие для отлавливания последнего пробела в стороке
                css += el + '; '
            } else {
                css += el + ';"' 
            }
        }     
        )
        return css            //+'"'   // тут просто ставлю кавычку в конце./  перенес в условие выше
    }
}


let test2 = new CssClass('warning')

test2.installStyles('width: 200px')
test2.installStyles('color: red')
test2.installStyles('padding-left: 15px')
test2.installStyles('font-size: 14px')   // добавилось еще свойство в конец массива this.styles
test2.installStyles('overflow: auto')
test2.deleteStyles('color')      // нашли и удалими свойство по имени
console.log(test2) 
console.log(test2.getCss()) 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// следующее не знаю как