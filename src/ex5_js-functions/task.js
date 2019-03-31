var Calculator = {
    result: 0,

    // Работоает правильнее, но не проходит тест на  30 строке.
    // isNumber: function (val) {
    //     var newVal = val;
    //     if (typeof newVal !== 'number') {
    //         newVal = 0;
    //     }
    //     return newVal;
    // },

    // add: function (x) {
    //     var newX = this.isNumber(x);
    //     this.result += newX;
    //     return function (y) {
    //         var newY = Calculator.isNumber(y);
    //         return Calculator.add(newY);
    //     }
    // },


// Попытка вогнать значение в скобках в массив, работает, но непонятно как вызвать для операций
    // inArr: function (arr) {

    //     if (typeof arr === 'number') {
    //         this.arrCalc[this.index] = arr;
    //         ++this.index;
    //         return function (x) {
    //             return Calculator.inArr(x);
    //         }

    //     } else {
    //         arr = 0;
    //         return Calculator.inArr(arr);
    //     }
    // }





    add: function (x) {
        if (!isNaN(x)) {
            Calculator.result += x;
        }        
        return Calculator.add
    },

    subtract: function (x) {
        if (!isNaN(x)) {
            Calculator.result -= x;
        }        
        return Calculator.subtract
    },

    divide: function (x) {
        if (!isNaN(x)) {
            Calculator.result /= x;
        }        
        return Calculator.divide
    },

    multiply: function (x) {
        if (!isNaN(x)) {
            Calculator.result *= x;
        }        
        return Calculator.multiply
    },


    getResult: function () {
        return this.result
    },

    reset: function () {
        this.result = 0;
        return this.result
    },
}

module.exports = Calculator;



