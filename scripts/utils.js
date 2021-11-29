// Loading select field options

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

const displayErrorMessage = async(message, timed=true) => {
    let fakeJSX = `<div id="error-popup"><p>${message}</p></div>`;
    $("body").append(fakeJSX);
    if (timed) {
        await sleep(2500);
        $("#error-popup").remove();
    }
};

const displayTransponder = async(id) => {
    console.log('displaying transponder ', id)
    const uri = await transponders.tokenURI(id);
    const svgStart = uri.indexOf('<svg');
    const svgEnd = uri.indexOf('/svg>') + 5;
    const svg = uri.substring(svgStart, svgEnd);
    $("body").append(`<div id="displayed-transponder"><span id="close" onclick='closeDisplay()'>x</span>${svg}</div>`);
};

const displayCapsule = async(id) => {
    console.log('displaying capsule ', id)
    await closeDisplay();
    const uri = await spaceCapsules.tokenURI(id);
    const svgStart = uri.indexOf('<svg');
    const svgEnd = uri.indexOf('/svg>') + 5;
    const svg = uri.substring(svgStart, svgEnd);
    $("body").append(`<div id="displayed-capsule"><span id="close" onclick='closeDisplay()'>x</span>${svg}</div>`);
};

const displayCharacter = async(id) => {
    console.log('displaying char ', id)
    await closeDisplay();
    const uri = await characters.tokenURI(id);
    const svgStart = uri.indexOf('<svg');
    const svgEnd = uri.indexOf('/svg>') + 5;
    const svg = uri.substring(svgStart, svgEnd);
    $("body").append(`<div id="displayed-character"><span id="close" onclick='closeDisplay()'>x</span>${svg}</div>`);
};

const closeDisplay = async() => {
    $(`#displayed-transponder`).remove();
    $(`#displayed-capsule`).remove();
    $(`#displayed-character`).remove();
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};