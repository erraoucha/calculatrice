// Sélectionne l'élément d'affichage
const display = document.getElementById("display");

// Vérifie si l'élément existe pour éviter les erreurs
if (!display) {
    console.error("L'élément #display n'a pas été trouvé !");
}

// Fonction pour ajouter des caractères à l'écran
function appendToDisplay(input) { // Correction du nom de la fonction
    display.value += input;
}

// Fonction pour effacer l'écran
function clearDisplay() { // Correction du nom de la fonction
    display.value = "";
}

// Fonction pour évaluer et afficher le résultat de l'expression mathématique
function calcule() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Erreur";
    }
}
