/^abc/.test('abc')

^ significa que tiene que comenzar con eso, en este caso con abc 

lo que esta  dentro del parentensis es lo que se evalua si  cumple o no

[0-9] para que existan números
[A-z]+ aceptar letras y el + significa si es 1 o mas
{0,3} rango 
$ busca al  final
i no distinguir entre mayus y minus

/abc+[0-9]{0,2}/.test('abc')


a los . agregarle \ porque sino se toma como cualquier caracter
$ que termine en uno de esos? 
+ que tenga mas de  uno
^ que comience por eso
