
function param(p){
    var index = process.argv.indexOf(p);
 //console.log(index)
   return process.argv[index + 1];
}

var nombre = param('--Name');
var edad = param('--Age')

console.log(`Your name is ${nombre}, y tienes ${edad}`)
