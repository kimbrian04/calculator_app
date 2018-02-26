const operators = {
    "^": {
        operands: 2,
        precedence: 4,
        associativity: "right",
        calc: (a, b) => Math.pow(a, b)
    },
    "/": {
        operands: 2,
        precedence: 3,
        associativity: "left",
        calc: (a, b) => {
            if (b === 0){
                return "Can't divide by zero"
            }

            return a / b
        }
    },
    "*": {
        operands: 2,
        precedence: 3,
        associativity: "left",
        calc: (a,b) => a * b
    },
    "+": {
        operands: 2,
        precedence: 2,
        associativity: "left",
        calc: (a, b) => a + b
    },
    "-": {
        operands: 2,
        precedence: 2,
        associativity: "left",
        calc: (a, b) => a - b
    }
}

const unaryFunction = {
    sqrt: {
        operands: 1,
        calc: (a) => Math.sqrt(a)
    }
}

export const removeSpaces = function(str) {
    return str.toString().replace(/\s+/g, "")
}

export const getLastChar = function(str) {
    var removedBlank = removeSpaces(str)
    return (removedBlank.substr(removedBlank.length - 1))
}

export const isNumeric = function(str) {
    return !isNaN(parseFloat(str)) && isFinite(str)
}

/* https://github.com/Aterbonus/AterCalculator/blob/master/AterCalculator.js */

export const convertToRPN = function(expression) {
    // Using Shunting Yard Algorithm
    var cleanedExpression = removeSpaces(expression).toLowerCase()
    var tokens = cleanedExpression
                    .split(/([\+\-\*\/\^\(\)])/)
                    .filter((el) => el.length != 0)

    var operatorStack = []
    var rpn = []
    var temp

    for (var i = 0; i < tokens.length; i++) {
        var curToken = tokens[i]

        if (unaryFunction[curToken]) {
            operatorStack.push(curToken)
        } 
        else if (operators[curToken]) {
            var curOperator = operators[curToken]
            var stackLen = operatorStack.length

            while(typeof operators[operatorStack[stackLen - 1]] !== "undefined"
                  && (
                        (curOperator.associativity === "left" && curOperator.precedence <= operators[operatorStack[stackLen -1]].precedence)
                        || (curOperator.associativity === "right" && curOperator.precedence < operators[operatorStack[stackLen -1]].precedence)
                     )
                 ) {
                
                rpn.push(operatorStack.pop())
            }

            operatorStack.push(curToken)
        }
        else if (curToken === "("){
            operatorStack.push(curToken)
        }
        else if (curToken === ")") {
            while((temp = operatorStack.pop()) !== "(" && typeof temp !== "undefined") {
                rpn.push(temp)
            }

            if (unaryFunction[operatorStack[operatorStack.length - 1]]) {
                rpn.push(operatorStack.pop())
            }

            if (temp !== "(") {
                throw "Mismatched parentheses"
            }
        } 
        else {
            rpn.push(curToken)
        }
    }

    while (typeof (temp = operatorStack.pop()) !== "undefined") {
        if (temp === "(" || temp === ")") {
            throw "Mismatched parentheses"
        }

        rpn.push(temp)
    }

    return rpn
}

export const calculateExpression = function(rpn) {
    var args = []
    var resultStack = []
    var operator

    for (var i = 0; i < rpn.length; i++) {
        var curItem = rpn[i]

        if (typeof (operator = operators[curItem] || unaryFunction[curItem]) !== "undefined") {
            if (resultStack.length < operator.operands) {
                throw "Insufficient values in the expression"
            }
            
            for (var j = resultStack.length - operator.operands; j < resultStack.length; j++) {
                args.push(resultStack[j])
            }
            resultStack.length = resultStack.length - operator.operands;
            
            resultStack.push(operator.calc.apply(this, args))
            args.length = 0;
        } 
        else {
            if (isNaN(curItem)) {
                throw "Variables are not supported"
            }
            resultStack.push(parseFloat(curItem))
        }
    }
    
    if (resultStack.length !== 1) {
        throw "Too many values in the expression"
    }

    return resultStack.pop()
}

/* github code end */

export const calculateMathematicalExpression = function(expression) {
    var result = {
        value: "",
        isError: false
    }

    try {
        var rpnConverted = convertToRPN(expression)
        result.value = calculateExpression(rpnConverted)
    }
    catch(err) {
        result.isError = true
        result.value = "Error"
    }

    return result
}

export const generateGraphDataPoints = function (functionStr, xStart, xEnd, yStart, yEnd) {
    var newDataPoints = []
    try {
        // get RPN of function to graph
        var rpn = convertToRPN(functionStr) 

        // get 20 data points within the given x range
        var xSteps = (xEnd - xStart) / 20 

        for (var i = xStart; i <= xEnd; i += xSteps) {
            // Generate RPN array, replacing x with actual number i
            var finalRpn = rpn.map((item) => item === "x" ? i : item)

            // Check if calculated y value is within y range
            var yValue = calculateExpression(finalRpn)
            if (yValue <= yEnd && yValue >= yStart) {
                newDataPoints.push({x: i, y: yValue})
            }
        }
    }
    catch(err) {
        newDataPoints = []
    }
    
    return newDataPoints
}