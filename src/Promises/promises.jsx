
const myPromise = new Promise((resolve, reject) => //La promise me sirve para generar un par de valores en caso de resolver o rechazar una solicitud

{
    if (false){
        setTimeout(() => {
            resolve("I have succeeded");
        }, 1000);
    }
    else{
        reject("I have failed");
    }
});

myPromise // En este caso la promise entra siempre a false, por lo que retorna lo que hay dentro de reject, y esto se captura en catch
.then(value => console.log(value)) // Si el valor de resolve es el que se retorna entonces se captura en then. Siempre hago .then antes del catch.
.catch(rejectValue => console.log(rejectValue))