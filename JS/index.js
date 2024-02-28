function survolImage(idImage) {
    var image = document.getElementById(idImage);
    if (image) {
        image.style.opacity = '1';
    }
}

function finSurvolImage(idImage) {
    var image = document.getElementById(idImage);
    if (image) {
        image.style.opacity = '0';
    }
}

function redirigerVersProjet(page) {
    window.location.href = page;
}

function survolImage(idImage) {
    var image = document.getElementById(idImage);
    if (image) {
        image.classList.remove('flou');
    }
}

function finSurvolImage(idImage) {
    var image = document.getElementById(idImage);
    if (image) {
        image.classList.add('flou');
    }
}

function redirigerVersProjet(page) {
    window.location.href = page;
}


document.addEventListener('DOMContentLoaded', function() {
    var cartes = document.querySelectorAll('.carte');

    function estPartiellementVisible(element) {
        var rect = element.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return (rect.top <= windowHeight * 0.75); 
    }

    function gestionnaireDeDefilement() {
        cartes.forEach(function(carte) {
            if (estPartiellementVisible(carte)) {
                carte.classList.add('visible');
            }
        });
    }

    gestionnaireDeDefilement();

    
    window.addEventListener('scroll', gestionnaireDeDefilement);
});


