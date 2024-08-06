type Planet= "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

let planet: Planet


let homePlanet: Planet

function checkPlanet(planet: Planet) {
    if (planet === "Terra") {
        console.log("Estamos na Terra!")
    }

}