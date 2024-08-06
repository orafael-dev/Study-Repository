const planets = [];
function addPlanet(name, coordinates, situation) {
    planets.push({
        name,
        coordinates,
        situation,
        satellites: [],
    });
    alert(`O planela ${name} foi registrado com sucesso`);
}
function findPlanet(name) {
    const planet = planets.find((planet) => planet.name === name);
    return planet !== null && planet !== void 0 ? planet : false;
}
function updateSituation(situation, planet) {
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}`);
}
function addSatellites(name, planet) {
    planet.satellites.push(name);
    alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}`);
}
function removeSatellite(name, planet) {
    planet.satellites = planet.satellites.filter((satellite) => satellite !== name);
    alert(`O satélite ${name} foi removido do planeta ${planet.name}`);
}
