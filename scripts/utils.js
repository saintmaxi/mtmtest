// Loading select field options

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

// Tracking + displaying selections in fields w/ multiple values

var selectedForBurning = new Set();

async function selectForBurning(id) {
    id = Number(id);
    if (!selectedForBurning.has(id)) {
        selectedForBurning.add(id);
    }
    else {
        selectedForBurning.delete(id);
    }
    if (selectedForBurning.size == 0) {
        $("#selected-for-burning").text("Burning: None");
    }
    else {
        let selectedString = `${Array.from(selectedForBurning).sort().join(' ')}`;
        $("#selected-for-burning").text("Burning: " + selectedString);
    }
}

var transpondersForAugment = new Set();

async function selectAugmentTransponder(id) {
    id = Number(id);
    if (!transpondersForAugment.has(id)) {
        transpondersForAugment.add(id);
    }
    else {
        transpondersForAugment.delete(id);
    }
    if (transpondersForAugment.size == 0) {
        $("#transponders-for-augment").text("Transponders: None");
    }
    else {
        let selectedString = `${Array.from(transpondersForAugment).sort().join(' ')}`;
        $("#transponders-for-augment").text("Transponders: " + selectedString);
    }
}

var capsulesForAugment = new Set();

async function selectAugmentCapsule(id) {
    id = Number(id);
    if (!capsulesForAugment.has(id)) {
        capsulesForAugment.add(id);
    }
    else {
        capsulesForAugment.delete(id);
    }
    if (capsulesForAugment.size == 0) {
        $("#capsules-for-augment").text("Capsules: None");
    }
    else {
        let selectedString = `${Array.from(capsulesForAugment).sort().join(' ')}`;
        $("#capsules-for-augment").text("Capsules: " + selectedString);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}