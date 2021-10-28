const crearPersona=(e)=>{
    e.preventDefault();
    console.log('Estoy Enviandome...');
let inputnombre=document.querySelector("#nombre");
  if(inputnombre.value.length){
alert('No completaste el nombre');
    return false;
    }

let inputemail=document.querySelector('#email');
if(inputemail.value.length){
    alert('No completaste el email...');
    return false;
}

}