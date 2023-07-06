/*
//1. Realiza el cálculo del salario que debe recibir un trabajador que gana x 
//salario con undescuento del 8% por salud y 10% por pensión

var nombreempleado = prompt ("INGRESE EL NOMBRE DEL EMPLEADO");
var salario = prompt("INGRESE EL SALARIO DEL EMPLEADO");
var salud = salario*0.08;
var pension = salario*0.10;
var salarioapagar = salario-salud-pension;

//salida
document.write("EL EMPLEADO " +nombreempleado + "<br>");
document.write("TIENE UN SALARIO DE " + salario+ "<br>");
document.write("DESCUENTO EN SALUS ES " +salud+ "<br>");
document.write("DESCUENTO EN PENSIÓN " + pension+ "<br>");
document.write("EL SALARIO A PAGAR ES DE " + salarioapagar+ "<br>");
*/


/*
//2. Aplica la fórmula a = (b*h)/2 para calcular el área de un triángulo donde sus dimensiones
//base y altura se deben pedir al usuario que las digite.

var base= prompt("INGRESE LA BASE DEL TRIANGULO");
var altura = prompt("INGRESE LA ALTURA DEL TRIANGULO");
var area =(base*altura)/2;

//salida
document.write("EL AREA DEL TRIAGULO ES : " + area);
*/

/*
//3.Realiza las operaciones de suma, resta, multiplicación, división,
 // y módulo pidiéndole solo números al usuario.

 var numero1 = prompt("INGRESE ELPRIMER NUMERO");
 var numero2 = prompt("INGRESE EL SEGUNDO NUMERO");
 var suma = parseInt (numero1) + parseInt (numero2);
 var resta = numero1 - numero2;
 var multiplicación = numero1 * numero2;
 var división = numero1 / numero2;

 //salida
 document.write("LA SUMA ES:  " + suma + "<br>");
 document.write("LA RESTA ES:  " + resta+ "<br>");
 document.write("LA MULTIPLICACIÓN ES:  " +multiplicación+ "<br>");
 document.write("LA DIVISIÓN ES:  " + división+ "<br>");
*/

/*
//4. Calcule el sueldo mensual de un trabajador ingresando
//el número de horas trabajadas enel mes y el valor tanto
//como de las horas normales de trabajo y las horas extras

var trabajador = prompt("INGRESE EL NOMBRE DEL EMPLEADO");
var horasnormalestrabajadas = prompt("INGRESE LA CANTIDAD DE HORAS NORMALES TRABAJADAS AL MES");
var horasextrastrabajadas = prompt("INGRESE LA CANTIDAD DE HORAS EXTRAS TRABAJADAS AL MES ")
var valorporhoranormal = prompt("INGRESE EL VALOR DE LA HORA NORMAL");
var valorhoraextra = prompt ("INGRESE EL VALOR DE LA HORA EXTRA");
var sueldomensual = (horasnormalestrabajadas*valorporhoranormal) + (horasextrastrabajadas*valorhoraextra);

//salida

document.write ("EL SALARIO MENSUAL ES DE :  " + sueldomensual);
*/

/*
//5. Digita el ingreso del precio de un producto y se debe calcular el IVA, mostrar cuanto es el
//IVA que se agrega, mostrar el precio del producto sin IVA y el total a pagar.

var precioproducto = prompt("Ingrese el valor del producto");
var precioconiva= precio*19/100;
var totalpagar= parseInt (precio) + parseInt (precioconiva);

//salida

document.write("El valor del producto sin iva es: " + precioproducto +"<br>");
document.write("El valor del iva es: " + precioconiva +"<br>");
document.write("El valor total del producto mas el iva es: " + totalpagar +"<br>");
*/

/*
//6. Calcule el porcentaje de alumnos y alumnas de un salón de clase, digitando el total de
//alumnos hombres y mujeres.

var mujeres = prompt("INGRESE LA CANTIDAD DE MUJERES QUE HAY EN EL SALÓN");
var hombres = prompt("INGRESE LA CANTIDAD DE MUJERES QUE HAY EN EL SALÓN");
var totalalumnos= parseInt (mujeres) + parseInt (hombres);
var porcentajemujeres = (mujeres/totalalumnos)*100;
var porcentajehombres =(hombres/totalalumnos)*100;

//salida

document.write("EL PORCENTAJE DE MUJERES ES DE " + porcentajemujeres+"<br>");
document.write("EL PORCENTAJE DE HOMBRES ES DE " + porcentajehombres);
*/


/*
//7. Calcule el promedio de 3 notas de un alumno, el rango de cada nota es del 1 al 5.

var nombrealumno =prompt("INGRESE EL NOMBRE DEL ALUMNO");
var nota1 = prompt ("INGRESE LA NOTA 1");
var nota2 = prompt ("INGRESE LA NOTA 2");
var nota3 = prompt ("INGRESE LA NOTA 3");
var promedio =( parseInt (nota1) + parseInt (nota2) + parseInt (nota3)) /3;

//SALIDA

document.write ("EL PROMEDIO DEL ALUMNO "   + nombrealumno + "ES :   " + promedio);
*/