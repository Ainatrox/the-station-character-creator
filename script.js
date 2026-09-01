// ==========================================
// THE STATION - CHARACTER CREATOR
// ==========================================


// ==========================================
// PERSONAJE
// ==========================================

const characterImage = document.getElementById("characterImage");


// ==========================================
// COLORES
// ==========================================

const colors = {

    // ROJOS
    red_1: "#8B0000",
    red_2: "#FF0000",
    red_3: "#B22222",
    red_4: "#DC143C",
    red_5: "#FF2400",
    red_6: "#FF6347",
    red_7: "#FF7F50",
    red_8: "#D2042D",
    red_9: "#E0115F",
    red_10: "#722F37",
    red_11: "#800000",

    // NARANJAS
    orange_1: "#FF8C00",
    orange_2: "#FFA500",
    orange_3: "#FF7F00",
    orange_4: "#F28500",
    orange_5: "#FF7518",
    orange_6: "#CC5500",
    orange_7: "#E2725B",
    orange_8: "#FFCBA4",
    orange_9: "#FBCEB1",
    orange_10: "#FFBF00",
    orange_11: "#F88379",

    // AMARILLOS
    yellow_1: "#FFFF00",
    yellow_2: "#FFD700",
    yellow_3: "#B8860B",
    yellow_4: "#FFF44F",
    yellow_5: "#FFEF00",
    yellow_6: "#FFDB58",
    yellow_7: "#FBEC5D",
    yellow_8: "#FDFD96",
    yellow_9: "#FFC30B",
    yellow_10: "#F4C430",
    yellow_11: "#F3E5AB",

    // VERDES
    green_1: "#006400",
    green_2: "#008000",
    green_3: "#00FF00",
    green_4: "#228B22",
    green_5: "#50C878",
    green_6: "#98FF98",
    green_7: "#808000",
    green_8: "#8A9A5B",
    green_9: "#93C572",
    green_10: "#9CAF88",
    green_11: "#00A86B",

    // AZULES
    blue_1: "#00008B",
    blue_2: "#0000FF",
    blue_3: "#000080",
    blue_4: "#87CEEB",
    blue_5: "#B2FFFF",
    blue_6: "#4169E1",
    blue_7: "#0047AB",
    blue_8: "#4682B4",
    blue_9: "#0F52BA",
    blue_10: "#AEC6CF",
    blue_11: "#003153",

    // MORADOS
    purple_1: "#4B0082",
    purple_2: "#800080",
    purple_3: "#8F00FF",
    purple_4: "#E6E6FA",
    purple_5: "#C8A2C8",
    purple_6: "#6A0DAD",
    purple_7: "#9966CC",
    purple_8: "#8E4585",
    purple_9: "#E0B0FF",
    purple_10: "#4B0082",
    purple_11: "#614051",

    // ROSAS
    pink_1: "#C71585",
    pink_2: "#FFC0CB",
    pink_3: "#FF69B4",
    pink_4: "#FF1493",
    pink_5: "#FF77FF",
    pink_6: "#FFD1DC",
    pink_7: "#F4C2C2",
    pink_8: "#FA8072",
    pink_9: "#FF00FF",
    pink_10: "#D8A7A7",
    pink_11: "#E30B5C",

    // CIANES
    cyan_1: "#00FFFF",
    cyan_2: "#40E0D0",
    cyan_3: "#00CED1",
    cyan_4: "#7FFFD4",
    cyan_5: "#008080",
    cyan_6: "#008B8B",
    cyan_7: "#00B7C7",
    cyan_8: "#99E6E6",
    cyan_9: "#B0E0E6",
    cyan_10: "#2E8B57",
    cyan_11: "#00CCCC",

    // MARRONES
    brown_1: "#5C4033",
    brown_2: "#964B00",
    brown_3: "#7B3F00",
    brown_4: "#6F4E37",
    brown_5: "#C68E17",
    brown_6: "#D2691E",
    brown_7: "#F5F5DC",
    brown_8: "#C3B091",
    brown_9: "#C2B280",
    brown_10: "#967969",
    brown_11: "#954535",

    // BLANCOS
    white_1: "#FFFFFF",
    white_2: "#FAF9F6",
    white_3: "#FFFFF0",
    white_4: "#D3D3D3",
    white_5: "#C0C0C0",
    white_6: "#808080",
    white_7: "#696969",
    white_8: "#708090",
    white_9: "#36454F",
    white_10: "#B2BEB5",
    white_11: "#EAE0C8",

    // NEGROS
    black_1: "#000000",
    black_2: "#1C1C1C",
    black_3: "#0A0A0A",
    black_4: "#0B0B0B",
    black_5: "#0B1622",
    black_6: "#071A14",
    black_7: "#120A18",
    black_8: "#1A0808",
    black_9: "#293133",
    black_10: "#2F4F4F",
    black_11: "#343434"

};


// ==========================================
// BOTONES DE COLOR
// ==========================================

const colorButtons = document.querySelectorAll(".color");


// Poner el color HEX correspondiente a cada botón

colorButtons.forEach(button => {

    const color = button.dataset.color;

    if (colors[color]) {
        button.style.backgroundColor = colors[color];
    }

});


// ==========================================
// SELECCIONAR COLOR
// ==========================================

colorButtons.forEach(button => {

    button.addEventListener("click", () => {

        const color = button.dataset.color;


        // Cambiar imagen del personaje

        characterImage.src =
            `assets/character/colors/${color}.png`;


        // Quitar selección anterior

        colorButtons.forEach(btn => {
            btn.classList.remove("selected");
        });


        // Seleccionar este botón

        button.classList.add("selected");

    });

});


// ==========================================
// CATEGORÍAS
// ==========================================

const categoryButtons =
    document.querySelectorAll(".category-button");


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.parentElement;

        const options =
            category.querySelector(".options");


        // Comprobar si estaba abierta

        const isOpen =
            category.classList.contains("open");


        // Cerrar la categoría

        if (isOpen) {

            category.classList.remove("open");

            options.style.display = "none";

        }

        // Abrir la categoría

        else {

            category.classList.add("open");

            options.style.display = "grid";

        }

    });

});


// ==========================================
// CATEGORÍAS CERRADAS AL INICIAR
// ==========================================

document
    .querySelectorAll(".color-category .options")
    .forEach(options => {

        options.style.display = "none";

    });


// ==========================================
// COLOR INICIAL
// ==========================================

// Seleccionar el primer color

if (colorButtons.length > 0) {

    colorButtons[0].classList.add("selected");

}
// ==========================================
// CATEGORÍAS PRINCIPALES
// ==========================================

const mainCategoryButtons =
    document.querySelectorAll(".main-category-button");


mainCategoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.parentElement;

        category.classList.toggle("open");

        const content =
            category.querySelector(".main-category-content");


        if (category.classList.contains("open")) {

            content.style.display = "block";

        } else {

            content.style.display = "none";

        }

    });

});


// ==========================================
// CATEGORÍAS DE ACCESORIOS
// ==========================================

const accessoryCategoryButtons =
    document.querySelectorAll(".accessory-category-button");


accessoryCategoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.parentElement;

        category.classList.toggle("open");

        const options =
            category.querySelector(".accessory-options");


        if (category.classList.contains("open")) {

            options.style.display = "grid";

        } else {

            options.style.display = "none";

        }

    });

});


// ==========================================
// EMPEZAR CON LAS CATEGORÍAS CERRADAS
// ==========================================

document
    .querySelectorAll(".main-category-content")
    .forEach(content => {

        content.style.display = "none";

    });


document
    .querySelectorAll(".accessory-options")
    .forEach(options => {

        options.style.display = "none";

    });
// ==========================================
// SOMBREROS
// ==========================================

const hatImage = document.getElementById("hatImage");

const hatButtons =
    document.querySelectorAll(".accessory-button");


hatButtons.forEach(button => {

    button.addEventListener("click", () => {

        const hat = button.dataset.hat;


        // Poner el sombrero sobre el personaje

        hatImage.src =
            `assets/character/hats/${hat}.png`;


        // Quitar selección anterior

        hatButtons.forEach(btn => {
            btn.classList.remove("selected");
        });


        // Marcar sombrero seleccionado

        button.classList.add("selected");

    });

});
// =================================
// EXPORTAR PERSONAJE COMO PNG
// =================================

document.getElementById("exportButton").addEventListener("click", async function () {

    // Imágenes que queremos exportar
    const characterSrc = document.getElementById("characterImage").src;
    const hatElement = document.getElementById("hatImage");

    // Crear canvas transparente
    const canvas = document.createElement("canvas");

    // Tamaño final del PNG
    canvas.width = 768;
    canvas.height = 768;

    const ctx = canvas.getContext("2d");

    // Asegurarnos de que el fondo sea completamente transparente
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    // =================================
    // FUNCIÓN PARA CARGAR IMÁGENES
    // =================================

    function loadImage(src) {

        return new Promise((resolve, reject) => {

            const img = new Image();

            img.onload = () => resolve(img);

            img.onerror = () => reject(
                new Error("No se pudo cargar la imagen: " + src)
            );

            img.src = src;

        });

    }


    try {

        // =================================
        // CARGAR PERSONAJE
        // =================================

        const character = await loadImage(characterSrc);


        // =================================
        // DIBUJAR PERSONAJE
        // =================================

        ctx.drawImage(
            character,
            0,
            0,
            canvas.width,
            canvas.height
        );


        // =================================
        // CARGAR SOMBRERO
        // =================================

        const hatSrc = hatElement.src;

        if (
            hatElement.style.display !== "none" &&
            hatSrc &&
            !hatSrc.endsWith("hat_0.png")
        ) {

            const hat = await loadImage(hatSrc);

            ctx.drawImage(
                hat,
                0,
                0,
                canvas.width,
                canvas.height
            );

        }


        // =================================
        // CREAR PNG
        // =================================

        canvas.toBlob(function (blob) {

            if (!blob) {

                console.error("No se pudo crear el PNG.");
                return;

            }


            // Crear enlace de descarga
            const link = document.createElement("a");

            link.download = "the-station-personaje.png";

            link.href = URL.createObjectURL(blob);


            // Descargar
            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);


            // Liberar memoria
            URL.revokeObjectURL(link.href);

        }, "image/png");


    } catch (error) {

        console.error(
            "Error al exportar el personaje:",
            error
        );

        alert(
            "No se ha podido exportar el personaje. " +
            "Revisa la consola para ver el error."
        );

    }

});