# TypeScript 面试题及答案收录

## 目录

1. 什么是 TypeScript？
2. 为什么要使用 TypeScript ? TypeScript 相对于 JavaScript 的优势是什么？
3. TypeScript 中 const 和 readonly 的区别？枚举和常量枚举的区别？接口和类型别名的区别？
4. TypeScript 中 any 类型的作用是什么？
5. TypeScript 中 any、never、unknown、null & undefined 和 void 有什么区别？
6. TypeScript 中 interface 可以给 Function / Array / Class（Indexable）做声明吗？
7. TypeScript 中可以使用 String、Number、Boolean、Symbol、Object 等给类型做声明吗？
8. TypeScript 中的 this 和 JavaScript 中的 this 有什么差异？
9. TypeScript 中使用 Union Types 时有哪些注意事项？
10. TypeScript 如何设计 Class 的声明？
11. TypeScript 中如何联合枚举类型的 Key?
12. TypeScript 中 type 和 interface 的区别?
13. TypeScript 中 ?.、??、!、!.、\_、\*\* 等符号的含义？
14.
15. 简单介绍一下 TypeScript 模块的加载机制？
16. 简单聊聊你对 TypeScript 类型兼容性的理解？抗变、双变、协变和逆变的简单理解？
17. TypeScript 中对象展开会有什么副作用吗？
18. TypeScript 中 interface、type、enum 声明有作用域的功能吗？
19. TypeScript 中同名的 interface 或者同名的 interface 和 class 可以合并吗？
20. 如何使 TypeScript 项目引入并识别编译为 JavaScript 的 npm 库包？
21. TypeScript 的 tsconfig.json 中有哪些配置项信息？
22. TypeScript 中如何设置模块导入的路径别名？
23. declare,declare global 是什么？
24. 对 TypeScript 类中成员的 public、private、protected、readonly 修饰符的理解？
25. keyof 和 typeof 关键字的作用？
26. 简述工具类型 Exclude、Omit、Merge、Intersection、Overwrite 的作用。
27. 数组定义的两种方式

## 1. 什么是 TypeScript？

Typescript 是一个强类型的 JavaScript 超集，支持 ES6 语法，支持面向对象编程的概念，如类、接口、继承、泛型等。

Typescript 并不直接在浏览器上运行，需要编译器编译成纯 Javascript 来运行。

## 2. 为什么要使用 TypeScript ? TypeScript 相对于 JavaScript 的优势是什么？

TypeScript 增加了静态类型，可以在开发人员编写脚本时检测错误，使得代码质量更好，更健壮。  
优势:

1. 杜绝手误导致的变量名写错;
2. 类型可以一定程度上充当文档;
3. IDE 自动填充，自动联想。

## 3. TypeScript 中 const 和 readonly 的区别？枚举和常量枚举的区别？接口和类型别名的区别？

1. const 和 readonly 的区别？  
   const 可以防止变量的值被修改，readonly 可以防止变量的属性被修改。
2. 枚举和常量枚举的区别？
   - 普通枚举会生成真实存在的对象。
   - 常量枚举不会生成真实存在的对象, 而是利用枚举成员的值直接 替换 使用到的地方。
   - 常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除。 常量枚举成员在使用的地方会被内联进来。之所以可以这么做是因为，常量枚举不允许包含计算成员。
3. 接口和类型别名的区别？  
   两者都可以用来描述对象或函数的类型。与接口不同，类型别名还可以用于其他类型，如基本类型（原始值）、联合类型、元组。

## 4. TypeScript 中 any 类型的作用是什么？

为编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。

## 5. TypeScript 中 any、never、unknown、null & undefined 和 void 有什么区别？

- any: 动态的变量类型（失去了类型检查的作用）。
- never: 永不存在的值的类型。例如：never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。
- unknown: 任何类型的值都可以赋给 unknown 类型，但是 unknown 类型的值只能赋给 unknown 本身和 any 类型。
- null & undefined: 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把  null 和 undefined 赋值给 number 类型的变量。当你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自。
- void: 没有任何类型。例如：一个函数如果没有返回值，那么返回值可以定义为 void。

## 6. TypeScript 中 interface 可以给 Function / Array / Class（Indexable）做声明吗？

```
/* 可以 */
// 函数声明
interface Say {
 (name: string): viod;
}
let say: Say = (name: string):viod => {}
// Array 声明
interface NumberArray {
 [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
// Class 声明
interface PersonalIntl {
 name: string
 sayHi (name: string): string
}

```

## 7. TypeScript 中可以使用 String、Number、Boolean、Symbol、Object 等给类型做声明吗？

```
/* 可以 */
let name: string = "bob";
let decLiteral: number = 6;
let isDone: boolean = false;
let sym: symbol = Symbol();
interface Person {
    name: string;
    age: number;
}
```

## 8. TypeScript 中的 this 和 JavaScript 中的 this 有什么差异？

- TypeScript：noImplicitThis: true 的情况下，必须去声明 this 的类型，才能在函数或者对象中使用 this。
- Typescript 中箭头函数的 this 和 ES6 中箭头函数中的 this 是一致的。

## 9. TypeScript 中使用 Union Types 时有哪些注意事项？

属性或方法访问: 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法。

```
function getLength(something: string | number): number {
   return something.length;
}
// index.ts(2,22): error TS2339: Property 'length' does not exist on type >'string | number'.
//   Property 'length' does not exist on type 'number'.

function getString(something: string | number): string {
   return something.toString();
}
// 公共方法和属性可以访问
```

## 10. TypeScript 如何设计 Class 的声明？

```
class Greeter {
   greeting: string;
   constructor(message: string) {
       this.greeting = message;
   }
   greet(): string{
       return "Hello, " + this.greeting;
   }
}
let greeter = new Greeter("world");
// 在声明类的时候，一般类中都会包含，构造函数、对构造函数中的属性进行类型声明、类中的方法。
```

## 11. TypeScript 中如何联合枚举类型的 Key?

```
enum str {
   A,
   B,
   C
}
type strUnion =  keyof typeof str; // 'A' | 'B' | 'C'
```

## 12. TypeScript 中 type 和 interface 的区别?

- 相同点：

1. 都可以描述 '对象' 或者 '函数'
2. 都允许拓展(extends)

- 不同点：

1. type 可以声明基本类型，联合类型，元组
2. type 可以使用 typeof 获取实例的类型进行赋值
3. 多个相同的 interface 声明可以自动合并

- 总结：使用 interface 描述‘数据结构’(对象内/数据内的内容类型)，使用 type 描述‘类型关系’(单个变量直接类型)

## 13. TypeScript 中 ?.、??、!、!.、\_、\*\* 等符号的含义？

- ?. 可选链：遇到 null 和 undefined 可以立即停止表达式的运行。
- ?? 空值合并运算符：当左侧操作数为 null 或 undefined 时，其返回右侧的操作数，否则返回左侧的操作数。
- ! 非空断言运算符：x! 将从 x 值域中排除 null 和 undefined
- !. 在变量名后添加，可以断言排除 undefined 和 null 类型
- \_ 数字分割符 分隔符不会改变数值字面量的值，使人更容易读懂数字 .e.g 1_101_324
- \*\* 求幂

## 14.抗变、双变、协变和逆变的简单理解？

Typescript 的协变和逆变和 C# Scala 中的类似，但是 Typescript 的会自动算出来接口属于协变还是逆变，C# Scala 中需要显示声明 in out 标记接口。 在 typescript 需要在 tsconfig 中使用 strictFunctionTypes 参数开启逆变检查，否则就是双变(协变或者逆变)。

### 逆变接口

接口中泛型只作为函数类型参数

```
interface Animal {
    Eat(): void
}

interface Dog extends Animal{
    Bark():void
}

interface Cat extends Animal{
    Meow():void
}

interface Comparer<T> {
    compareA: (a: T, b: T) => number;
}
```

逆变接口的赋值类型检查

```
declare let animalComparer: Comparer<Animal>;
declare let dogComparer: Comparer<Dog>;

animalComparer = dogComparer;
/*
    错误， 因为调用 animalComparer(Dog)的时候，
    dogComparer会接受到一个Animal类型的参数，这是有风险的
*/
dogComparer = animalComparer;  // 正确
```

例外情况

```
interface Comparer<T> {
    compareA(a: T, b: T)： number;
}
declare let animalComparer: Comparer<Animal>;
declare let dogComparer: Comparer<Dog>;

animalComparer = dogComparer; //正确
dogComparer = animalComparer;  // 正确
/*
    因为
        compareA(a: T, b: T)： number;
    和
        compareA: (a: T, b: T) => number;
    不太一样，前者认为是双变， 后者认为是逆变。这样做的相当于把方法类型的声明排除在外,目的在于为了确保带泛型的类和接口（如 Array）总体上仍然保持协变。
*/
```

### 协变接口

接口中泛型只作为函数类型返回值

```
interface Animal {
    Eat(): void
}

interface Dog extends Animal{
    Bark():void
}

interface Cat extends Animal{
    Meow():void
}

interface Comparer<T> {
    compareB: () => T;
}
```

协变接口的赋值类型检查

```
declare let animalComparer: Comparer<Animal>;
declare let dogComparer: Comparer<Dog>;

animalComparer = dogComparer;
// 正确
dogComparer = animalComparer;
/*
    错误， 因为调用 dogComparer(Dog)的时候，
    animalComparer会返回一个Animal类型的值，这是有风险的
*/
```

### 总结:

- 协变和抗逆变的意义在于泛型类型的类型转换带来的类型安全问题。
- 协变类型的接口只能允许派生类泛型赋值给父类泛型 I\<Dog> -> I\<Animal>
- 逆变类型的接口只能允许父类泛型赋值给派生类泛型 I\<Animal> -> I\<Dog>

## 15. 简单介绍一下 TypeScript 模块的加载机制？

假设有一个导入语句 import { a } from "moduleA";

1. 首先，编译器会尝试定位需要导入的模块文件，通过绝对或者相对的路径查找方式；
2. 如果上面的解析失败了，没有查找到对应的模块，编译器会尝试定位一个外部模块声明（.d.ts）；
3. 最后，如果编译器还是不能解析这个模块，则会抛出一个错误 error TS2307: Cannot find module 'moduleA'.

## 16. 简单聊聊你对 TypeScript 类型兼容性的理解？

TypeScript 里的类型兼容性是基于结构子类型的。 结构类型是一种只使用其成员来描述类型的方式。 它正好与名义（nominal）类型形成对比。

在基于名义类型的类型系统中，数据类型的兼容性或等价性是通过明确的声明和/或类型的名称来决定的。这与结构性类型系统不同，它是基于类型的组成结构，且不要求明确地声明。

看下面的例子：

```
interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named;
// OK, because of structural typing
p = new Person();
```

在使用基于名义类型的语言，比如 C#或 Java 中，这段代码会报错，因为 Person 类没有明确说明其实现了 Named 接口。

TypeScript 的结构性子类型是根据 JavaScript 代码的典型写法来设计的。 因为 JavaScript 里广泛地使用匿名对象，例如函数表达式和对象字面量，所以使用结构类型系统来描述这些类型比使用名义类型系统更好。

## 17. TypeScript 中对象展开会有什么副作用吗？

1. 展开对象后面的属性会覆盖前面的属性；
2. 仅包含对象自身的可枚举属性，不可枚举的属性将会丢失。

## 18. TypeScript 中 interface、type、enum 声明有作用域的功能吗？

个人见解：没有，因为声明同个参数会覆盖

## 19. TypeScript 中同名的 interface 或者同名的 interface 和 class 可以合并吗？

同名的 interface 会自动合并，同名的 interface 和 class 会自动聚合。

## 20. 如何使 TypeScript 项目引入并识别编译为 JavaScript 的 npm 库包？

- 选择安装 ts 版本，npm install @types/包名 --save；
- 对于没有类型的 js 库，需要编写同名的.d.ts 文件

## 21. TypeScript 的 tsconfig.json 中有哪些配置项信息？

```
{
  "files": [], // files 是一个数组列表，里面包含指定文件的相对或绝对路径，用来指定待编译文件，编译器在编译的时候只会编译包含在files中列出的文件
  "include": [],// 指定编译某些文件
  "exclude": [],// 指定排除某些文件
  "compileOnSave": false,// 让IDE在保存文件的时候根据tsconfig.json重新生成文件
  "extends": "",// 可以通过指定一个其他的tsconfig.json文件路径，来继承这个配置文件里的配置
  "compilerOptions": { ... } // 编译配置项，如何对具体的ts文件进行编译
}
```

## 22. TypeScript 中如何设置模块导入的路径别名？

通过 tsconfig.json 中的 paths 项来配置:

```
{
  "compilerOptions": {
    "paths": {
      "@/*": ["src/*"]
    }
  },
}
```

## 23. declare，declare global 是什么？

- declare 是用来定义全局变量、全局函数、全局命名空间、js modules、class 等
- declare global 为全局对象 window 增加新的属性

```
declare global {
   interface Window {
        csrf: string;
   }
}
```

## 24. 对 TypeScript 类中成员的 public、private、protected、readonly 修饰符的理解？

- public: 成员都默认为 public，被此限定符修饰的成员是可以被外部访问；
- private: 被此限定符修饰的成员是只可以被类的内部访问；
- protected: 被此限定符修饰的成员是只可以被类的内部以及类的子类访问;
- readonly: 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

## 25. keyof 和 typeof 关键字的作用？

- keyof 索引类型查询操作符 获取索引类型的属性名，构成联合类型。
- typeof 获取一个变量或对象的类型。

## 26. 简述工具类型 Exclude、Omit、Merge、Compute、Intersection、Overwrite 的作用。

- Exclude<T, U> 从 T 中排除出可分配给 U 的元素。
- Omit<T, K> 的作用是忽略 T 中的某些属性。
- Merge<O1, O2> 是将两个对象的属性合并。
- Compute<A & B> 是将交叉类型合并
- Intersection<T, U>的作用是取 T 的属性,此属性同样也存在与 U。
- Overwrite<T, U> 是用 U 的属性覆盖 T 的相同属性。

## 27. 数组定义的两种方式:type、interface

```
type Foo= Array<string>;
interface Bar {
     baz: Array<{ name: string, age: number}>
}

type Foo = string[];
interface Bar {
     baz : { name: string, age: number }[]
}
```
