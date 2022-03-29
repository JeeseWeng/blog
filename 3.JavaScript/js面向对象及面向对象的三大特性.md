# js 面向对象及面向对象的三大特性

## 一：js 面向对象编程

- 在 es5 中我们是这样去写面向对象的编程方式的：

```
function Person(name) {
     //构造函数里面的方法和属性
    this._name = name;
    this.getName = function () {
         console.log(this._name);
     };
     this.setName = function (name) {
         this._name = name;
     };
 }

 let p = new Person("张三");
 p.getName();  // 张三
 p.setName("李四");
 p.getName();  // 李四
```

- 在 es6 中，提供了新的方式去书写面向对象编程，这种方式更加接近面向对象的书写方式，但本身只是一种语法糖：

```
// 定义类class Person {
     //类的构造函数，实例化的时候执行，new的时候执行
     constructor(name) {
         this._name = name;
     }
     getName() {
         console.log(this._name);
     }
     setName(name) {
        this._name = name
    }
}
 let p = new Preson('张三')
 p.getName();  // 张三
 p.setName('李四');
 p.getName();  // 李四
```

## 二：面向对象的三大特征

三大特征分别为：封装，继承和多态

### 1. 封装

我们平时所用的方法和类都是一种封装，当我们在项目开发中，遇到一段功能的代码在好多地方重复使用的时候，我们可以把他单独封装成一个功能的方法，这样在我们需要使用的地方直接调用就可以了。

- 优点：封装的优势在于定义只可以在类内部进行对属性的操作，外部无法对这些属性修改，要想修改，也只能通过定义的封装方法；

### 2. 继承

继承在我们的项目开发中主要使用为子类继承父类，下面是 es6 继承的书写方法

```
class Father {
　　constructor(name) {
        this._name = name;
    }
    //实例方法，通过实例对象调用
    getName() {
        console.log(this._name);
    }
　　// 静态方法不会被继承,并且是通过类名去调用的　　　
    static hitXiaoMing() {
        console.log("打小明")
    }
 }

class Son extends Father {
    constructor(name, age) {
        //实例化子类的时候把子类的数据传给父类（这里的super必须有，super里的参数是所继承的父类实例化所需要的数据）
        super(name);
        this._age = age;
    }
}

 var DaMing = new Father('大明');
 Father.hitXiaoMing(); //打小明 DaMing.getName(); //大明
 var XiaoMing = new Son('小明'，15);

 XiaoMing.getName(); //小明
```

特别提醒：继承会继承父类的实例属性和实例方法，并不会继承静态属性和静态方法，并且静态方法只能通过类名去调用。

优点：继承减少了代码的冗余，省略了很多重复代码，开发者可以从父类底层定义所有子类必须有的属性和方法，以达到耦合的目的；

## 三：多态

多态的具体表现为方法重载和方法重写：

- 方法重载：重载是指不同的函数使用相同的函数名，但是函数的参数个数或类型不同。调用的时候根据函数的参数来区别不同的函数
- 方法重写：重写（也叫覆盖）是指在派生类中重新对基类中的虚函数（注意是虚函数）重新实现。即函数名和参数都一样，只是函数的实现体不一样

下面我们根据上面的例子在添加一个 work 的方法说明一下方法重写：

```
class Father {
　　constructor(name) {
        this._name = name;
    }
　　//实例方法，通过实例对象调用
     getName() {
         console.log(this._name);
     }     work() {     　　console.log('我的工作是累死累活，赚钱养家')     }
　　　// 静态方法不会被继承,并且是通过类名去调用的
　　　static hitXiaoMing() {
         console.log("打小明")
     }
 }

 class Son extends Father {
     constructor(name, age) {
         //实例化子类的时候把子类的数据传给父类（这里的super必须有，super里的参数是所继承的父类实例化所需要的数据）
         super(name);
         this._age = age;
     }
     work() {
        console.log('我的工作是好好学习，天天向上。')
     }
}

 var DaMing = new Father('大明');
 DaMing.work() // 我的工作是累死累活，赚钱养家。
 var XiaoMing = new Son('小明'，15);  XiaoMing.work(); // 我的工作是好好学习，天天向上。
```

优点：多态实现了方法的个性化，不同的子类根据具体状况可以实现不同的方法，光有父类定义的方法不够灵活，遇见特殊状况就捉襟见肘了
