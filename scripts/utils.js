const loadTransponderSelect = async() => {
    const yourTransponders = await transponders.getTokensOfAddress(await getAddress());
    const sortedTransponders = [...yourTransponders].sort();
    $(".transponder-select").empty();
    $(".transponder-select").append(`<option value="" disabled selected>ID</option>`);
    for (let i = 0; i < sortedTransponders.length; i++) {
        id = sortedTransponders[i];
        $(".transponder-select").append(`<option value="${id}">${id}</option>`); 
    }
};

const loadCapsuleSelect = async() => {
    const yourCapsules = await spaceCapsules.getTokensOfAddress(await getAddress());
    const sortedCapsules = [...yourCapsules].sort();
    $(".capsule-select").empty();
    $(".capsule-select").append(`<option value="" disabled selected>ID</option>`);
    for (let i = 0; i < sortedCapsules.length; i++) {
        id = sortedCapsules[i];
        $(".capsule-select").append(`<option value="${id}">${id}</option>`); 
    }
};

const loadCharacterSelect = async() => {
    const yourCharacters = await characters.walletOfOwner(await getAddress());
    const sortedCharacters = [...yourCharacters].sort();
    $(".character-select").empty();
    $(".character-select").append(`<option value="" disabled selected>ID</option>`);
    for (let i = 0; i < sortedCharacters.length; i++) {
        id = sortedCharacters[i];
        $(".character-select").append(`<option value="${id}">${id}</option>`); 
    }
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}