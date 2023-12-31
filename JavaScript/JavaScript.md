# 👣 JavaScript

# ✨ 特点

**编程、脚本、解释性、动态类型、基于对象**

编程语言：指计算机能够接受和处理的、具有一定语法规则的语言
脚本语言：直接解释执行，缩短了编写-编译-链接-运行过程
解释行语言：解释执行不需要编译，直接由解释器解析执行代码
动态类型语言：在运行时才确定数据类型
基于对象语言：非面向对象，而是具有某些面向对象的特征

# ☕ 作用

- 网页动画效果
- 前后端交互
- 服务端运行
- 客户端运行

# ✍️ 注释

## 单行注释

`// xxx`

## 多行注释

```javascript
/*
  xxx
*/
```
```javascript
/**
  xxx
*/
```

# 🌀 JavaScript 与 Java 关系

- JavaScript 是运行在客户端的编程语言
- Java 是运行在服务端的编程语言

# 🧩 组成部分

- ECMAScript
  规定 Javascript 的语法 简称**ES**
- DOM
  Document Object Model 文档对象模型
- BOM
  Bowser Object Model 浏览器对象模型

# 📍 位置

内部 `script` 标签
外部js文件
在标签内
在浏览器控制台输入

# 🔑 变量

## 定义

变量：计算机内存中存储数据的标识符

## 声明

`var/const 变量名;`
声明并赋值
`var 变量名 = xxx;`
`var a,b,c;`
`var a=xxx,b=xxx,c=xxx;`
`a=xxx;` 不推荐

## 规则规范

规范

驼峰命名 见名知意

规则

- 由字母、数字、下划线、$符号组成，不能以数字开头 不能使用连字符
- 不能是关键字和保留字
- 区分大小写

## 字面量

# 🍡 数据类型

## 💪 基本数据类型

- number 数字
- string 字符串
- boolean 布尔
- null 空型
- undefined 未定义
- symbol 唯一值

### number 数字

可代表 八进制 十进制 十六进制 科学计数法
最大值 `Number.MAX_VALUE` 最小值 `Number.MIN_VALUE`
正无穷 `Infinity` 负无穷 `-Infinity`

#### NaN 非数值

`NaN` 数字类型

与任何值都不相等 包括他自己

`isNaN()` 判断是否为非数值

### string 字符串

`length` 长度
空字符串 字符串的长度为0
字符串的拼接
使用 `var a = '12.34'` 判断 `isNaN(a)` 时 `a` 发生隐式转换

隐式转换 不用人工干预的情况下进行的转换

### boolean 布尔

使用 `isNaN()` 判断时仍会发生隐式转换

### null 空型

使用 `typeof` 判断 `null` 时出现 `object` 为bug

### undefined 未定义

变量只定义未赋值时
会被隐式转换为0

## 🦵 引用数据类型

- array 数组
- function 函数
- object 对象
- set
- map

引用类型的`typeof`返回值为`object` _除 `function` 外_

### 数组

数组中元素的添加和删除

#### 栈操作

在栈顶操作数据 **先进后出**

- 添加 `push()`
- 删除 `pop()`

删除指定元素 `splice()`

伪数组 拥有数组的特征(索引 长度 for循环遍历) `数组方法无法使用`

#### 队列操作

### 🪑 函数

把具有特定功能的代码封装在一起

通常来说，全局方法在编程的上下文中可以理解为全局函数。全局函数是在整个程序或模块中都可以调用的函数，而不是绑定到特定的对象或类。这样的函数可以在任何地方被调用，而不受特定上下文的限制。

- 函数（Function）：
  函数是一段可重用的代码，通常接受输入参数，执行特定的任务，并返回一个结果。
  函数是独立的代码单元，可以在程序的不同部分调用。
  在许多编程语言中，函数可以是全局的，也可以是局部的（即在特定的代码块中定义和使用）。
- 方法（Method）：
  方法是与对象关联的函数。对象是程序中的一个实体，可以具有属性和方法。
  方法通常用于描述某个对象能够执行的操作，因此方法是特定于对象的。
  方法是在类（或对象）的上下文中定义的函数。

#### 定义

函数声明

```javascript
function 函数名(参数) {

}
```

函数表达式

```javascript
 var 函数名 = function (参数) {
    
}
```

#### 返回值

函数调用的结果就是函数的返回值  考试

如果函数没有使用 `return` 语句，那么函数有默认的 `undefined` 返回值

`return` 语句之后的代码将不再执行

构造函数

函数名一般首字母大写

#### 函数覆盖

函数名相同 较后的覆盖较前的

函数表达式优先级高于声明式函数

#### 函数内置对象

任何一个函数都包含一个内置对象 `arguments` _不包括内置函数_
作用：操作参数 参数是该对象数组的元素
`arguments.length` 实参个数
`arguments.callee.length` 形参个数

#### 匿名函数

```javascript
(
    function () {
      
    }
)()
```
块状代码块 模仿块级作用域

_后面的括号是调用_

- 构造函数创建

**判断方式 `type_of` 返回值**

# ♻️ 数据转换

## 转换为 string

- number/boolean --> toString() --> string
- null/undefined --> String() --> string

## 转换为 boolean

number/string/null/undefined --> Boolean() --> boolean

`0` 和 `NaN` 转换为 `false`

`""` 转换为 `false`

`null` 和 `undefined` 转换为 `false`
`" "`

## 转换为 number

`Number()`  `parseInt()`   `parseFloat()`

- undefined --> Number()/parseInt()/parseFloat() --> number (NaN)
- null --> Number() --> number (0)
- null --> parseInt()/parseFloat() --> number (NaN)

- boolean (true) --> Number() --> number (1)
- boolean (false) --> Number() --> number (0)
- boolean (true/false) --> parseInt()/parseFloat() --> number (NaN)

- string (""/"xxx") --> parseInt()/parseFloat() --> number (NaN)
- string ("12x"/"12.45") --> parseInt() --> number (12)
- string ("12.45") --> parseFloat() --> number (12.45)
- string ("0xf") --> Number() --> number (15)

# ➕ 运算

## 算数运算

`+ - * / %`

`toFixed(n)` 保留n位小数 返回字符串类型

## 一元运算

前置++ `++i` 先运算再赋值

后置++ `i++` 先赋值再运算

## 逻辑运算

`&&` `||` `!`

## 关系运算

`<` `>` `<=` `>=` `!=` `==` `===` `!==`

`==` 只比较数值 不比较类型
`===` 恒等于

## 赋值运算

`=` `+=` `-=` `/=` `*=`

## 优先级

从高到低

- 一元运算符：包括递增（`++`）、递减（`--`）、逻辑非（`!`）等一元操作符。
- 乘法、除法和取模运算符：`*`、`/` 和 `%`。
- 加法和减法运算符：`+` 和 `-`。
- 关系运算符：`>`、`<`、`>=`、`<=`、`instanceof` 和 `in`。
- 相等运算符：`==`、`!=`、`===`、`!==`。
- 逻辑与运算符：`&&`。
- 逻辑或运算符：`||`。
- 三目运算符：`?` `:`。
- 赋值运算符：`=` `+=` `-=` 等。

# 💱 流程控制

## 顺序结构

从上到下执行的代码

## 分支结构

根据不同的情况执行对应的代码

`if-else`

```javascript
if (key) {
    xxx;
} else {
    xxx;
}
```

三目运算符

`switch-case`

```javascript
switch (key) {
    case value:
        xxx;
        break;
    default:
        xxx;
        break;
}
```

`key` 变量
`value` 变量值

## 循环结构

`while`

```javascript
while (xxx) {
    xxx;
}
```

`do-while`

```javascript
do {
    xxx;
} while (xxx);
```

先执行 后判断

`for`

```javascript
for (xxx; yyy; zzz) {
    xxx;
}
```

```javascript
for (var i = 1, j = 1; i < 9, j < 6; i++, j++) {
    console.log(i)
}

// for 循环同时判断两个表达式时 以最后一个判断为准
for (var i = 1, j = 1; j < 6, i < 9; i++, j++) {
    console.log(i)
}

```

## continue和break区别

# 弹窗

## 警告框

alert()

## 确认框

confirm()

## 输入框

`prompt(xxx,yyy)`  `xxx` 提示信息 `yyy` 默认值

`document.write(xxx)` 在DOM中显示内容

返回值为字符串

# 〰️ 线程

- 进程 CPU 资源分配的最小单位
- 线程 CPU 调度的最小单位

  操作DOM的同一时间节点只能做一件事情

## 🌠 同步异步

**同步：**主线程上执行任务，任务排队执行
**异步：**不进入主线程，只是进入了任务队列，可以先执行主线程上的任务 (不需要等待)

# 定时器任务

- 事件函数
- 网络请求 Ajax axios wx.request
- 文件读写 node
- promise 对象
- generator 函数
- await async

## 定时函数

- `setTimeout(回调函数,时间间隔)` 等待一段时间执行一次回调函数中的函数体
  - 一般让匿名函数做回调函数
  - `clearTimeout(函数名)` 清除定时器
- `setInterval(回调函数,时间间隔)` 每隔一段时间执行一次回调函数中的函数体
  - `clearInterval()` 清除定时器

# ⚗️ 预解析

JavaScript引擎在对JavaScript代码进行解释执行之前，会对JavaScript代码进行预解析

预解析阶段，会将以关键字 `var` 和 `function` 语句块提前进行处理

预解析情况

## 函数提升

```javascript
demo()
function demo() {
  xxx;
}
```

## 变量提升

声明提升 赋值不会提升

```javascript
//报错,a is not defined:不带var的变量没有提升
alert(a);
a = 0;
```

正常解析下 函数名与变量名相同 变量覆盖函数
预解析下 函数名与变量名相同 函数提升
**函数提升不会超出作用域范围**

# ⚖️ 作用域

## 全局作用域

在 `script` 根标签或外部js文件内
全局变量 在任何作用域内均有效
生命周期 浏览器打开时开始 浏览器关闭时结束
全局变量为 `window` 对象下的属性 全局函数都是 `window` 对象下的方法

可以直接使用 `windows.` 调用

## 局部作用域

局部变量 只在局部作用域内有效
只在函数内产生

# 👻 隐式全局变量

在函数内创建变量时没有被修饰

```javascript
var a = 1;
function x() {
  b = 2;
  var c = 3,d = 4;
}
console.log(b);
console.log(d);
```

**作用域链的查找规则**

首先在当前作用域内查找 其次在向上级作用域查找 直到全局作用域

# 对象

## 创建对象

- 字面量创建对象
- `new Object()`
- 工厂模式
- 构造函数

### 字面量创建对象

```javascript
var 对象名 = {
  key: value,
  方法名: function () {
    
  }
}
```

在构造方法中
var创建的变量是局部变量
不使用var创建的变量是全局变量
使用this创建的变量是成员变量

## 方法

### 修改/增加

`对象.属性=值`
`对象['属性']=值`

### 删除

`delete 对象.属性=值`

### 遍历

```javascript
for(key in object){
  console.log(object[key])
}
```

## new 关键字

- 实例化
  - `new XXX()`
- 让构造函数中的 `this` 指向实例化对象

## this 中的指向问题

- 构造函数中指向实例化对象
- 普通对象的方法中指向当前对象
- 普通函数中指向 `window`
- 事件函数中指向当前事件源
- 定时器函数中指向 `window`
- 原型函数中
  - 原型对象中指向原型对象
  - 实例化对象指向实例化对象
- 数组函数中指向当前数组

考试

## 对象的变量

```javascript

function 对象名() {
  
}

for (x in 对象名){
    对象名.x
}
```

## 调用

`对象.key`

`对象.方法()`

标签的自定义对象无法通过 `.` 的方法获取

## 分类对象

- 自定义对象
- DOM 对象
  - `div` `p`
- BOM 对象
  - `window` `console`

# 内置对象

- 数学对象 `Math`
- 日期对象 `Date`
  - **特殊 构造函数** 需要实例化
- 数组对象 `Array`
- 字符串对象 `String`

## 📐 数学对象

- `Math.PI` 圆周率
- `Math.random()` 随机数 默认取值0~1
- `Math.floor(数值)` 向下取整
- `Math.ceil(数值)` 向上取整
- `Math.round(数值)` 四舍五入
- `Math.max(数值,数值,...)` 最大值
- `Math.min(数值,数值,...)` 最小值
- `Math.sin(数值)` 正弦
  - 参数单位为弧度
- `Math.cos(数值)` 余弦
  - 参数单位为弧度
- `Math.pow(底数,指数)` 指数幂
- `Math.sqrt(数值)` 平方根

`min~max`之间的随机数

```javascript
function getRand(min, max) {
  var number = Math.floor(Math.random() * (max - min) + min);
  return number; 
}
```

## 🗓️ 日期对象

- `new Date().getTime()` 获取时间戳
- `new Date().valueOf()` 获取时间戳
- `new Date().getFullYear()` 获取年份 `XXXX`
- `new Date().getMonth()` 获取月份 需要+1 索引从零开始 `xx`
- `new Date().getDate()` 获取天份 `xx`
- `new Date().getDay()` 获取星期 `xx`
- `new Date().getHours()` 获取小时 `XX`
- `new Date().getMinutes()` 获取分钟 `XX`
- `new Date().getSeconds()` 获取秒钟 `xx`

## 📏 数组

object 类型

判断方法

- `xxx instanceof Array`
  - `变量 instanceof Array`
- `isArray(变量/值)`
  - `Array.isArray()`

### 方法

队列操作在表头 先进先出
**与栈操作 顺序相反**

插入时进行插队动作

- `shift()` 删除元素
- `unshift()` 添加元素
- `reverse()` 翻转元素
  - 反转旧数组 返回新数组
- `concat()` 拼接元素
  - 拼接返回为新数组
- `slice(start,end)` 截取元素
  - 从索引 `start` 开始(包括) 到 `end` 结束(不包括) 返回新数组 不改变旧数组
- `split(start,length)` 截取元素
  - 从索引 `start` 开始(包括) 截取 `length` 个元素 返回新数组 且改变旧数组
- `indexOf()` 位置方法
  - 获取第一个匹配元素的索引值 未匹配到则返回 `-1`
- `lastIndexOf()` 位置方法
  - 获取最后一个匹配元素的索引值 未匹配到则返回 `-1`
- `join()` 合并数组

`array.length = 0` `array = []` 清空数组

### 迭代

- `forEach()` 遍历元素
  ```javascript
  var arr = new Array();
  arr.forEach(function (value, index) {
  })
  ```
- `sort()`
  排序
  ```javascript
  array.sort((a, b) => b - a)

  array.sort(function(a, b){
    return b - a
  })
  ```

- `some()`
  返回值为布尔类型 如果有元素满足条件返回 `true` 都不满足条件返回 `false`
- `every()`
  全部元素满足条件返回 `true` 有元素不满足条件返回 `false`
- `map()`
  返回新数组 一般用于数学计算
  ```javascript
  array.map((item) => item % == 1 ? item+10:item)

  array.map(function(item){
    if(item % == 1){
      return item+10
    } else {
      return item
    }
  })
  ```

  ```javascript
  array.map(function (value, index) {
    return Math.pow(value, 2)
  })
  ```

- `filter()`
  返回新数组 过滤不符合要求元素
  ```javascript
  array.filter((item, index) => item % == 1 ? true:false)

  array.filter(function(item, index){
    if(item % == 1){
      return true
    } else {
      return false
    }
  })
  ```

## 🧵 String 对象

```javascript
var str = "xxx";
str = "yyy"
```

此方式修改变量里的值会导致重新开辟内存空间 **字符串本身的不可逆性**

可通过构造函数方法创建

伪数组

方法

- `charAt(n)` 获取单个字符
  - 与 `xxx[n]` 相同
- `concat()` 拼接字符串
- `substring(start,end)` 截取字符串 开始(包括) 到 `end` 结束(不包括) 返回字符串
  - 与 `slice(start,end)` 相同 考试
- `slice(start,end)`截取元素
  - 从索引 `start` 开始(包括) 到 `end` 结束(不包括) 返回新数组 不改变旧数组
- `substr(start,length)` 截取字符串
- `indexOf()` 获取位置
- `lastIndexOf()` 获取位置
- `trim()` 删除字符串两端空格
- `search()` 检索字符串中子字符串的位置 返回子字符串的初始位置
  - `replace(old,new)` 替换字符串中首次出现的内容
  - `replaceAll(old,new)` 替换字符串中出现的内容
- `split()` 字符串转数组
- `join()` 数组转字符串