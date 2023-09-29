// Créer un événement au scroll
let navBar = document.querySelector('nav');

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        navBar.classList.add('navbar2');
    } else if (window.scrollY < 10) {
        navBar.classList.remove('navbar2');
    }
});


let imagetrans = document.getElementById('imgImprovise');

window.addEventListener('scroll', () => {
    if (window.scrollY > 170) {
        imagetrans.style.opacity = 1;
        imagetrans.style.transform = "translateX(00px)";
        imagetrans.style.transition = "(1s ease-in)";
    } else if (window.scrollY < 170) {
        imagetrans.style.opacity = 0;
        imagetrans.style.transform = "translateX(-200px)";
        imagetrans.style.transition = "(1s ease-in)";
    }
});


let popup = document.querySelector('#popup');

window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
        popup.style.transform = ("translateX(-100px)");
        popup.style.transition = ('1s ease-in');
        popup.style.opacity = '1';
    } else if (window.scrollY < 550) {
        popup.style.opacity = '0';
    }
});

window.addEventListener('click', () => {
    popup.style.display = "none";
});
// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujour