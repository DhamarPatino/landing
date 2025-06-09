'use strict';
import { fetchFakerData } from './functions.js';
let fetchFakerData =  (url) => {

    return fetch(url)
        .then(response => {

            // Verificar si la respuesta es exitosa (status 200-299)
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            return response.json();

        })
        .then(data => {

            // Respuesta exitosa
            return {
                success: true,
                body: data
            };

        })
        .catch(error => {

            return {
                success: false,
                error: `Error en la petición: ${error.message}`
            };

        });
}



(() => {
    
    loadData();
})();

export { fetchFakerData, loadData }