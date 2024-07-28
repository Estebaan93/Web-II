function solucionarRompecabezas(n){
  var a=1;
  var b=1;
  var c=1;
  var d=1;

  for(let i=1; i<=n; i++){
    let resultado= 3*d + 1*c + 4*b + 1*a;
    a=b;
    b=c;
    c=d;
    d=resultado;
    console.log(resultado);
  }
  return d%10000000000;
}

console.log(solucionarRompecabezas(10));
console.log(solucionarRompecabezas(100));
// console.log(solucionarRompecabezas(Math.pow(2023,100)));
