let tour_eiffel = { 
    name: "Tour Eiffel",
    city: "Paris , FRANCE",
    description: "La Tour Eiffel est un monument emblématique de Paris, construit par Gustave Eiffel pour l'Exposition universelle de 1889. Mesurant 330 mètres de hauteur, elle est faite de fer et a été initialement critiquée, mais elle est devenue un symbole mondial de la France et de l'ingénierie moderne. Elle attire des millions de visiteurs chaque année pour sa vue panoramique sur la ville.",
    id: 'img_tour_eiffel',
};

let notre_dame = {
    name: "Notre-Dame",
    city: "Paris , FRANCE",
    description: "Notre-Dame de Paris est une cathédrale gothique du XIIe siècle, située au cœur de Paris. Elle est connue pour son architecture, ses tours, et ses célèbres gargouilles. Endommagée par un incendie en 2019, sa restauration est en cours.",
    id: 'img_notre_dame'
};

let arc_de_triomphe = {
    name: "Arc de Triomphe",
    city: "Paris , FRANCE",
    description: "L'Arc de Triomphe, est un monument néoclassique construit au XIXe siècle pour célébrer les victoires de Napoléon. Il domine l'avenue des Champs-Élysées et abrite la tombe du Soldat inconnu.",
    id: 'img_arc_de_triomphe'
};

let mont_saint_michel = {
    name: "Mont Saint-Michel",
    city: "Normandie , FRANCE",
    description: "Le Mont-Saint-Michel est une île rocheuse en Normandie, célèbre pour son abbaye médiévale perchée au sommet. Ce site unique, entouré de marées spectaculaires, attire des millions de visiteurs chaque année.",
    id: 'img_mont_saint_michel'
};

let versailles = {
    name: "Versailles",
    city: "Paris , FRANCE",
    description: "Le château de Versailles, situé près de Paris, est un ancien palais royal célèbre pour ses jardins somptueux et sa galerie des Glaces. Symbole du pouvoir absolu de Louis XIV, il est aujourd'hui un site touristique majeur.",
    id: 'img_versailles'
};

function showMonument(monument) {
    let selectedMonument;

    // Vérification du monument sélectionné
    if (monument === 'tour_eiffel') {
        selectedMonument = tour_eiffel;
    } else if (monument === 'notre_dame') {
        selectedMonument = notre_dame;
    } else if (monument === 'arc_de_triomphe') {
        selectedMonument = arc_de_triomphe;
    } else if (monument === 'mont_saint_michel') {
        selectedMonument = mont_saint_michel;
    } else if (monument === 'versailles') {
        selectedMonument = versailles;
    }

    // Met à jour le contenu dans la section infos
    if (selectedMonument) {
        document.getElementById('name').textContent = selectedMonument.name; // Injecte le titre
        document.getElementById('city').textContent = selectedMonument.city; // Injecte le texte de la ville stylisé
        document.getElementById('description').textContent = selectedMonument.description; // Injecte la description
        
        // Réinitialisation de l'animation
        let infoContainer = document.getElementById('infos');

        // Retire temporairement la classe d'animation pour la réappliquer
        infoContainer.classList.remove('animated');  // Supposons que tu aies une classe 'animated' pour ton animation

        // Forcer un reflow pour réinitialiser l'animation
        void infoContainer.offsetWidth; // Cette ligne force le navigateur à "recalculer" la disposition (reflow)

        // Réappliquer la classe 'animated' pour relancer l'animation
        infoContainer.classList.add('animated');

        // Met toutes les images en noir et blanc
        let allImages = document.querySelectorAll('.container img'); // Sélectionne toutes les images dans la div "container"
        allImages.forEach(img => img.classList.add('grayscale')); // Applique la classe "grayscale" à toutes les images

        // Retire le noir et blanc de l'image sélectionnée
        let selectedImage = document.getElementById(selectedMonument.id);
        if (selectedImage) {
            selectedImage.classList.remove('grayscale'); // Retire la classe "grayscale" de l'image sélectionnée
        }
    }
}


