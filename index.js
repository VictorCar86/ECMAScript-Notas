// ES7 //
// Includes - busca el parametro dado dentro de un array *solo array* //

let array = [1,2,3,4,5,6,7];

if (array.includes(7)) {
    console.log("Sí se encuentra");
} else {
    console.log("Sí se encuentra");
}

// "Pow" - hacer operación Pow() con solo **//

let base = 4;
let exponente = 6;
let result = base ** exponente; // 4096

console.log(result);

// ES8 //
// Metodo Object.entries(); - devuelve los valores de una matriz //

const data = {
    front: 'Alejandro',
    back: 'Renegado'
};

const entries = Object.entries(data);
console.log(entries); // [ [ 'front', 'Alejandro' ], [ 'back', 'Renegado' ] ]
console.log(entries.length); // 2

/* Object values es casi lo mismo solo que funciona con los valores */

const values = Object.values(data);
console.log(values); // [ 'Alejandro', 'Renegado' ]
console.log(values.length); // 2

// Padding - nos permite añadir cadenas de texto nuevas //

const string ='hello';
console.log(string.padStart(7,'hi')) // "hihello"
console.log(string.padEnd(12,'hi')) // "hellohihihih"

// Async & Await - permite lanzar funciones en diferentes momentos distintos //

const helloWorld = () =>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=>resolve('helloWorld'),3000)
        : reject(new Error ('Test Error'))
    })
}

/* Test Error:
const helloWorld = () =>{
    return new Promise((resolve,reject)=>{
        (false)
        ? setTimeout(()=>resolve('helloWorld'),3000)
        : reject(new Error ('Test Error'))
    })
} */

const helloAsync = async() =>{
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

/* Nos permitirá usar trycatch y trabajar los errores correctamente */

const another = async() =>{
    try{
        const hello = await helloWorld();
        console.log(hello);

    } catch (error){
        console.log(error);
        
    }
}

another();

// ES9 //
// Spread Operator - ayuda a dividir los valores de un objeto en una nueva variable //

const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
  };
  
  let { name, ...addInfo } = obj;
  console.log(`name: ${name}`); // name: Oscar
  console.log(`additional information: `, addInfo); // additional information:  {age: 32, country: 'MX'}
  
  let { country, ...nameAndAge } = obj;
  console.log(`name and age: `, nameAndAge); // name and age:  {name: 'Oscar', age: 32}

// Porpagation Properties - crea un nuevo objeto junto con caracteristicas de uno ya creado //

const person = {
    name: 'Oscar',
    age: 32
  };

const personInformation = {
  ...person,
  country: 'MX'
};
console.log(`personInformation: `, personInformation);
  
/* Output: personInformation:  { name: 'Oscar', age: 32, country: 'MX' }*/

// Promise Finally - puede lanzar funciones al finalizar una promesa //

const holiWorld = () => {
    return new Promise((resolve, reject) => {
      (true)
        ? setTimeout(() => {
            resolve('Hello World!');
          }, 3000)
        : reject(new Error('Test Error'));
    });
  };

  holiWorld()
    .then(result => console.log('result -> ', result))
    .catch(err => console.log('err -> ', err))
    .finally(() => console.log('finalizó'));

// Regex - variables con datos específicos de un string //

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);

// ES10 //
// Metodo flat(); - desestructura un array lleno de array para tener solo uno //

const arraycito = [1,2,3,[1,2,3,[1,2,3,[1,2,3]]]];
console.log(arraycito.flat(1));
console.log(arraycito.flat(2));
console.log(arraycito.flat(3));

// Metodo flatMap(); - los mismo que flat pero pudiendo manipular antes de aplanar //

const arracacha = [1,2,3,1,2,3,1,2,3];
const ope = arracacha.flatMap((value) => [value, value**2]);
console.log(ope);

// Metodo trimStart(); y trimEnd(); - permite quitar los espacios al inicio y al final de un string //

let examStart = "       hello World";
console.log(examStart); // "       hello World"
console.log(examStart.trimStart()); // "hello World"

let examEnd = "hello World       ";
console.log(examEnd); // "hello World       "
console.log(examEnd.trimEnd()); // "hello World"

// Metodo Object.fromEntries(); - convierte una matriz de arrays en objetos //

let justArray = [["name", "pedro"],["age", 38]];
console.log(Object.fromEntries(justArray)); // { name: 'pedro', age: 38 }

// Symbol description - accede a la descripcion de un simbolo //

let mySymbol = "My Symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description); // "My Symbol"

// ES11 //
// Metodo BigInt - poder utilizar numeros mas grandes de lo permitido normalmente //

const bigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);
console.log(bigNumber);
console.log(anotherBigNumber);

// Metodo Promise.allSettled(); - ejecuta una funcion al terminarse todas las promesas //

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));
Promise.allSettled([promise1, promise2, promise3])
  .then(response => console.log(response));

// globalThis - usar comandos de varios niveles //

console.log(window)
console.log(globalThis)

// Nullish coalescing operator (??) - uso similar al OR || // 

const foo = null ?? 'default string';
console.log(foo); // expected output: "default string"

const baz = 0 ?? 42;
console.log(baz); // expected output: 0

// Optional chaining (?.) - define como undefinded las propiedades no establecidas de un objeto cuando se quieren usar //

const user = {};
console.log(user?.profile?.email);

/* Example */
if (user?.profile?.email){
  console.log("email");
} else {
  console.log("fail");
}

// ES12 //
// Replace - remplaza valores de un string //

const stringy = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replacedStringy = stringy.replace("JavaScript", "Python");

console.log(replacedStringy);
/* Output: Python es maravilloso, con JavaScript puedo crear el futuro de la web.*/

const replacedStringy2 = stringy.replaceAll("JavaScript", "Python");

console.log(replacedStringy2);
/* Output: Python es maravilloso, con Python puedo crear el futuro de la web.*/

// Metodos privados - //

class Message { /* Global */
  show(val){
      console.log(val);
  };
};

/* Privado:
class Message {
  #show(val){ // Con el # convertimos al método en privado
      console.log(val);
  };
}; */

const message = new Message();
message.show('Hola!');

// Promise Any - ejecuta una función cuando se resueva la primera promesa //

const promise_1 = new Promise((resolve, reject) => reject("1"));
const promise_2 = new Promise((resolve, reject) => resolve("2"));
const promise_3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise_1, promise_2, promise_3])
    .then(response => console.log(response));

// WeakRef(element);

class anyClass {
  constructor(element){
      this.ref = new WeakRef(element)
  }
  "{...}"
}

// Nuevos operadores logicos //

let isTrue_ = true;
let isFalse_ = false;
let isUndefined = undefined;

console.log(isTrue_ &&= isFalse_); // false

console.log(isTrue_ ||= isFalse_); // false

console.log(isUndefined ??= isFalse_); // false