$(".container").ready(function () {
    console.log("ready!");
});

var Microbiere = new Vue({
    el: '#app',
    data: {
        bieres: [{
                nom: 'Imposteur',
                histoire: " À l'honneur des Schwarzbier, de ses bieres blondes qui se sont teintues en noir",
                style: "Schwarzbier",
                abv: "4%",
                ibu: "25",
                contenant: "canette",
                Veillissement: "Non",
                saveur: "Vanille, chocolant, grillé"
            },
            {
                nom: 'Ourson de Berlin',
                histoire: "À Berlin, on fait comme les Berlinois. On encourage l'Ourson",
                style: "Berliner Weisse",
                abv: "3,6%",
                format: "Canette",
                saveur: "suret léger, Vanille, Argrume"
            },

            {
                nom: 'Halt',
                histoire: "Une rousse bien sexy en Allemangne, ca fait fureur!",
                style: "Altbier",
                abv: "6.5%",
                format: "canette",
                saveur: "orange"
            },
            {
                nom: 'Dentelle',
                histoire: "Biere obscure, n'ayant pas de dentelle",
                style: "Dunkel",
                abv: "5.5%",
                format: "canette",
                saveur: "orange"
            },
            {
                nom: 'Oiseau',
                histoire: "“Help me, Obi-Wan Kenobi. You’re my only hope.” — Leia Organa",
                style: "Weizenbock",
                abv: "10.5%",
                format: "canette",
                saveur: "orange"
            }
        ]
    }
})