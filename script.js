var n1 = parseInt(prompt("inserta un numero"));
var n2 = parseInt(prompt("inserta un segundo numero"));
var n3 = parseInt(prompt("inserta el tercer numero"));

if(n1==n2 || n1==n3 || n2==n3){
    alert("hay dos numeros iguales");

}

if(n1>n2>n3 || n1<n2<n3){
    alert("los numeros estan ordenados");
}


if((n1!=n2 && n1!=n3 && n2!=n3)&&(n1<n2 && n1<n3 && n2<n3)){
    alert("el numero intermedio es n2");
}


if(n1<n2 && n2<n3 && n1<n3){
    alert("el numero menor de todos es n1");
}


if(n1>n2 && n2>n3 && n1>n3){
    alert("el numero menor de todos es n3");
}


if(n1==n2 && n2==n3 && n1==n3){
    alert("la media de los tres numeros es igual que n1");
}

/*Como sé que la media se realiza utilizando PROMEDIO pero no lo tengo claro, he intentado hacerlo 
de otra forma de manera, tal que si n1, n2 y n3 son iguales, la media sería el propio número aunque 
en éste caso valdría cualquiera de ellos al ser todos iguales.

Con respecto al número intermedio, me pasa igual que en el otro caso y he intentado ralizarlo de otra 
forma.

Lo mismo pasa con el menor. He intentado hacerlo de otra forma, aunque en éste caso he puesto 2 opciones. 
Espero que sirva opción aunque quedo pendiente de aprenderlo para hacerlo correctamente.