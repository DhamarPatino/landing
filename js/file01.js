"use strict";

const showToast = () => {

    const toast = document.getElementById("toast-interactive");

    if (toast) {

        toast.classList.add("md:block");

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



const renderCards = (items) => {
    const container = document.getElementById("skeleton-container");
    if (!container) return;
    container.innerHTML = "";
    items.slice(0, 3).forEach(item => {
        container.innerHTML += `
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4 text-left">
                <h2 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">${item.title}</h2>
                <p class="text-sm text-gray-500 mb-1 dark:text-gray-400">Autor: ${item.author} | Género: ${item.genre}</p>
                <p class="text-gray-700 dark:text-gray-300">${item.content}</p>
            </div>
        `;
    });
};

const loadData = async () => {
    const url = "https://fakerapi.it/api/v2/texts?_quantity=10&_characters=120";
    const result = await fetchFakerData(url);
    if (result.success) {
        console.log(result.body);
        renderCards(result.body.data);
    } else {
        console.error(result.error);
    }
};


(() => {

    showToast();
    showVideo();
    loadData();
})();




