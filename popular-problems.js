multiply(a, b) {
return a*b;
}
const multiply2 = multiply.bind(this, 2);
multiply2(3);

const multiply () {
const args = [...arguments];
  function multFn () {
    multiply(...args, ...arguments)
  }
  let result = args.reduce((total, item) => total*item)
  multFn.toString = result;
  return multFn;
}


function currry (cb){
return function curried(...args) {
  if (args.length >= cb.length) {
    cb.apply(this, args);
  } else {
    return function(...args2) {
curried.apply(this,[...args, args2]);
    }
  }
}
}


Function.prototype.bind = function(context, ...args) {
 let fn = this
return function(...args2) {
  return cb.apply(fn, [...args, ...args2]);
}

}

export const debounce = (func, delay) => {
  let debounceTimer;
  return function debounced(...args) {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};
