- [JS\_1-Basics](#js_1-basics)
  - [1. variables](#1-variables)
  - [2. dataTypes](#2-datatypes)
  - [3. TypeConversion](#3-typeconversion)
  - [4. Operations](#4-operations)
  - [5. Comparision](#5-comparision)
  - [6. String](#6-string)
  - [7. Nums \& Math](#7-nums--math)
  - [8. Date \& Time](#8-date--time)
- [JS\_2-Basics](#js_2-basics)
  - [1. Arrays](#1-arrays)

### JS_1-Basics
#### 1. variables
    Variables are the "named storage" for data.
- Var
    - Global Scoped
        - where the variables defined outside the function can be accessed globally & variables defined inside the function can be accessed within the function.
- Let
    - Block Scoped
        - where it can't be accessible outside the particular block.
- Const
    - Block Scoped
    - When users declare the const variable, they need to initialize it otherwise, it returns an error.
    - Cannot be updated once its declared.
#### 2. dataTypes
- Primitive
    * String
        - Double Quotes : "Hello"
        - single Quotes : 'Hello'
        - BackTicks : `Hello`, this is the extended functionality of quotes.which allows us to embed  the variables & expressions into string by wrapping them in <code>${........}</code>.
    * Number
        - represents both integer and floating numbers
        - limits upto (2<sup>53</sup> - 1)
        - Special numeric values - <i>Infinity, -Infinity, NaN</i>
    * Boolean
        - has only 2 values - true, false.
    * Null
        - represents as its just <b>empty</b>, novalue.
    * unDefined
        - where value is declared/ initialized but not assigned.
    * BigInt 
        - same as type number, but can store really larger integers.
        - cretaed by adding 'n' to the end of an integer.
        - denoted by '165481515151516515451651615165n'
    * Symbol
        - used to create unique identifiers for objects.
- Non-Primitive
    * Arrays
    * Objects
- typeOf operator
    - returns the type of the operand. Helps to do a quick check the dataType of the operand.
    - used as <code>typeof x</code> or <code>typeof(x)</code>
    - always returns the value in string DataType.
        - <code>typeof(123)  // "number"</code>
        - <code>typeof(typeof 123)  // "string"</code>
#### 3. TypeConversion
- #### convert to Number
    - Number(value to Convert)
    - numeric conversion rules :
        <table>
        <tr><th>Value<th>
        <th>After Conversion<th></tr>
        <tr>
        <td>undefined</td>
        <td>NaN</td>
        </tr>
        <tr>
        <td>null</td>
        <td>0</td>
        </tr>
        <tr>
        <td>true & false</td>
        <td>1 and 0</td>
        </tr>
        <tr>
        <td>string</td>
        <td>Whitespaces are removed. If string is empty, the result is 0.If number & string is mixed, it results in an error </code>NaN</code></td>
        </tr>
        </table>
        *NOTE :- Here null & undefined behave differently,
            - Null becomes Zero
            - undefined becomes NaN.
- #### convert to Boolean
    - Boolean(value to Convert)
        - Values such as an empty string, 0, null, undefined & NaN, the value gets false.
        - else other values are true.
- #### convert to String
    - String(value to Convert)
#### 4. Operations
- +, -, *, /, %, **, etc..
- PreIncrement
    - where the value is increased and immediately use the result of the operator
    - <code>
        let counter = 0;
        alert( ++counter ); // 1
        </code>
    - <code>
        let counter = 1;
        alert( 2 * ++counter ); // 4
        </code>
- PostIncrement
    - where the value gets increased, but its previous value.
     - <code>
        let counter = 0;
        alert( counter++ ); // 0
        </code>
    - <code>
        let counter = 1;
        alert( 2 * counter++ ); // 2, because counter++ returns the "old" value
        </code>
#### 5. Comparision
- >, <, =, <=, >=, !=, ==, ===
- Boolean value is the result, i.e. it may be true or false.
#### 6. String
- ways to create String
  - 1. By using string interpolation
    - <code> const hello = 'Hello'</code>
  - 2. by using new keyword
    - <code>const sport = new String('Badminton')</code>
- String Methods
  - 
#### 7. Nums & Math
- Created by using 2 ways
  - by using 
    - <code>const gamePoint = 200</code>
  - By using new keyword
    - <code>const score = new Number(gamePoint)</code>
- 
#### 8. Date & Time
- 

<hr>
<hr>

### JS_2-Basics
#### 1. Arrays
- storing a collection of items under a single variable and all the elements perform common array operations.
- Resizeable and can mix with diff dataTypes..
- Can be accessed only through indexing.

- Ways to declare the Array
  - const Arr1 = [0, 1, 2, 3, 'Four', 'Five', 'Six', true]
  - const Arr3 = new Array(9,8,7,'Six')

- Array-copy operation
  - shallow copy
    - 
  - Deep copy

- Methods
  - push
  - pop
  - shift
  - unshift
  - includes
  - indexof
  - join
  - splice
  - slice
  - isArray
  - from
  - of
  - flat
  - Spread Operator (...ArrName)