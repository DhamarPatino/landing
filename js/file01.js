"use strict";

import { fetchFakerData } from './functions.js';


const showToast = () => {

    const toast = document.getElementById("toast-interactive");

    if (toast) {

        toast.classList.add("md:block");

    }

};
const renderCards = (dataArray) => {
    const container = document.getElementById("skeleton-container");
    if (!container) return;

    // Limpiar el contenido previo
    container.innerHTML = "";

    // Tomar solo los primeros 3 elementos
    dataArray.slice(0, 3).forEach(({ title, author, genre, content }) => {
        const card = `
            <div class="space-y-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow">
                <div class="w-full h-40 bg-blue-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <span class="text-2xl text-blue-600 dark:text-white font-bold">${genre}</span>
                </div>
                <div class="h-6 text-xl font-semibold text-gray-900 dark:text-white">${title}</div>
                <div class="h-5 text-sm text-gray-500 dark:text-gray-300">Por: ${author}</div>
                <div class="space-y-2">
                    <div class="text-gray-700 dark:text-gray-200 text-sm">${content}</div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
};


const loadData = async () => {

    const url = 'https://fakerapi.it/api/v2/texts?_quantity=10&_characters=120';

    try {
        const result = await fetchFakerData(url);

        if (result.success) {
            console.log('Datos obtenidos con éxito:', result.body);
            renderCards(result.body.data);
        } else {
            console.error('Error al obtener los datos:', result.error);
        }

    } catch (error) {

        console.error('Ocurrió un error inesperado:', error);

    }

};

const showVideo = () => {

    const demo = document.getElementById("demo");

    if (demo) {

        demo.addEventListener("click", () => {

            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");

        });

    }

};
(() => {

    showToast();
    showVideo();
    loadData();

})();