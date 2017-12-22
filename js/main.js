$(".container").ready(function () {
    console.log("ready!");
});

var Microbiere = new Vue({
    el: '#app',
    data: {
        bieres: [{
                nom: "Imposteur",
                class: "schwarzbier",
                histoire: " À l'honneur des Schwarzbier, de ses bieres blondes qui se sont teintues en noir",
                style: "schwarzbier",
                abv: "4%",
                ibu: "20",
                format: "canette",
                maturite: "Non",
                saveur: "Vanille, chocolant, grillé",
                img: "../../image/Panther_Paw.svg"
            },
            {
                nom: 'Ourson de Berlin',
                histoire: "À Berlin, on fait comme les Berlinois. On encourage l'Ourson",
                class: "berliner",
                style: "Berliner Weisse",
                abv: "2.5%",
                ibu: "25",
                format: "canette",
                maturite: "Non",
                saveur: "suret léger, Vanille, Argrume",
                 img: "../../image/Panther_Paw.svg"
            },

            {
                nom: 'Halt',
                histoire: "Une rousse bien sexy en Allemangne, ca fait fureur!",
                style: "Altbier",
                class: "altbier",
                abv: "6.5%",
                ibu: "25",
                format: "canette",
                maturite: "Non",
                saveur: "orange",
                 img: "../../image/Panther_Paw.svg"
            },
            {
                nom: 'Dentelle',
                histoire: "De la dentelle, ce n'est pas pour elle",
                style: "Dunkel",
                class: "dunkel",
                abv: "5.5%",
                 ibu: "25",
                format: "canette",
                 maturite: "Non",
                saveur: "orange",
                 img: "../../image/Panther_Paw.svg"
            },
            {
                nom: 'Raison',
                histoire: "Pour nourrir ",
                style: "Weizenbock",
                class: "weizenbock",
                abv: "10.5%",
                ibu: "65",
                 maturite: "oui, 5 ans",
                format: "bouteille",
                saveur: "cassonade, alcool, sucre d'orge",
                 img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Panther_Paw.svg/628px-Panther_Paw.svg.png"
            }
        ]
    }
})