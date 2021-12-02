// Loading select field options

const loadCharacterSelect = async() => {
    const yourCharacters = await characters.walletOfOwner(await getAddress());
    const sortedCharacters = [...yourCharacters].sort((a, b) => a - b);
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

const displayStatusMessage = async(message, timed=true) => {
    let fakeJSX = `<div id="status-popup"><p>${message}</p></div>`;
    $("body").append(fakeJSX);
    if (timed) {
        await sleep(2500);
        $("#status-popup").remove();
    }
};

const displayTransponder = async(id) => {
    const uri = await transponders.tokenURI(id);
    const svgStart = uri.indexOf('<svg');
    const svgEnd = uri.indexOf('/svg>') + 5;
    const svg = uri.substring(svgStart, svgEnd);
    $("body").append(`<div id="displayed-transponder"><span id="close" onclick='closeDisplay()'>x</span>${svg}</div>`);
};

const displayCapsule = async(id) => {
    await closeDisplay();
    const uri = await spaceCapsules.tokenURI(id);
    const svgStart = uri.indexOf('<svg');
    const svgEnd = uri.indexOf('/svg>') + 5;
    const svg = uri.substring(svgStart, svgEnd);
    $("body").append(`<div id="displayed-capsule"><span id="close" onclick='closeDisplay()'>x</span>${svg}</div>`);
};

const displayCharacter = async(id, returnSVG=false) => {
    await closeDisplay();
    const uri = await characters.tokenURI(id);
    const decodedUri = JSON.parse(atob(uri.replace("data:application/json;base64,", "")))
    const image = atob(decodedUri.image.replace("data:image/svg+xml;base64,", ""));
    if (returnSVG) {
        return image;
    }
    else {
        $("body").append(`<div id="displayed-character"><span id="close" onclick='closeDisplay()'>x</span>${image}</div>`);
    }
};

const populateMyCharacters = async() => {
    const ownedChars = await getCharactersOfAddress((await getAddress()), true);
    for (let i = 0; i < ownedChars.length; i++) {
        id = ownedChars[i];
        elemID = `char-${id}`;
        svg = await isolateIMG(id, elemID);
        mesYield = formatEther(await charactersController.getCharacterYieldRate(id));
        $("#characters-block").append(`<div class="your-char" onclick='displayCharacter(${id})'>${svg}<h4>${mesYield} <img src="./images/mes.png" width="30px"> /Day</h4></div>`)
        let charIMG = document.getElementById(elemID);
        charIMG.setAttribute('viewBox', '0 0 ' + 1200 + ' ' + 950);
    }
};

const closeDisplay = async() => {
    $(`#displayed-transponder`).remove();
    $(`#displayed-capsule`).remove();
    $(`#displayed-character`).remove();
};


const equipmentMap = new Map([[0, "Weapon"], [1, "Chest"], [2, "Head"], [3, "Legs"], 
                            [4, "Vehicle"], [5, "Arms"], [6, "Artifact"], [7, "Ring"]]);

const updateEquipmentUpgrade = async() => {
    const id = $("#upgrade-char").val();
    const equipmentType = $("#upgrade-eq-type").val();
    $("#upgrade-eq-amount").empty(); 
    $("#upgrade-eq-amount").append(`<option value="">-</option>`);
    const equipmentLevels = await characterStorage.equipments(id);

    if (id) {
        $("#upgrade-equip-img").empty();
        $("#upgrade-equip-img").append(await isolateIMG(id, 'upgrade-equip-svg'));
        let charIMG = document.getElementById("upgrade-equip-svg");
        charIMG.setAttribute('viewBox', '0 0 ' + 1200 + ' ' + 950);

        $("#equip-stats-1").empty();
        $("#equip-stats-2").empty();
        for (let i = 0; i < 8; i++) {
            if (i < 4) {
                $("#equip-stats-1").append(`<div style="text-align:center">${equipmentMap.get(i)}: Level ${equipmentLevels[i]}</div>`);
            }
            else {
                $("#equip-stats-2").append(`<div style="text-align:center">${equipmentMap.get(i)}: Level ${equipmentLevels[i]}</div>`);
            }
        }
        
    }

    if (id && equipmentType) {
        const currentLevel = equipmentLevels[equipmentType-1];
        const levelsLeft = 4 - currentLevel;
        for (let i = 1; i <= levelsLeft; i++) {
            $("#upgrade-eq-amount").append(`<option value="${i}">${i}</option>`); 
        }
    }
};

const updateLevelUpPoints = async() => {
    const id = $("#level-up-char").val();
    $("#level-up-amount").empty(); 
    $("#level-up-amount").append(`<option value="">-</option>`);

    if (id) {
        $("#level-up-char-img").empty();
        $("#level-up-char-img").append(await isolateIMG(id, 'level-up-svg'));
        let charIMG = document.getElementById("level-up-svg");
        charIMG.setAttribute('viewBox', '0 0 ' + 1200 + ' ' + 950);

        const stats = await characterStorage.characters(id);
        const currentBasePoints = stats.basePoints_;
        $("#level-up-char-stats").empty();
        $("#level-up-char-stats").append(`<h3>Current Base Points: ${currentBasePoints}</h3>`);

        const pointsLeft = 50 - currentBasePoints;
        for (let i = 1; i <= pointsLeft; i++) {
            $("#level-up-amount").append(`<option value="${i}">${i}</option>`); 
        }
    }
};

const isolateIMG = async(id, elemID) => {
    const svg = await displayCharacter(id, true);

    // Get opening svg tag
    const svgOpenStart = svg.indexOf('<svg');
    const svgOpenEnd = svg.indexOf('>') + 1;
    const svgOpen = svg.substring(svgOpenStart, svgOpenStart + 4) + ` id='${elemID}' class="zoom"` +  svg.substring(svgOpenStart + 4, svgOpenEnd);

    // Get style tag
    const styleStart = svg.indexOf('<style');
    const styleEnd = svg.indexOf('/style>') + 7;
    const style = svg.substring(styleStart, styleEnd);

    // Get character image
    const imgStart = svg.indexOf('<g transform');
    const nextG = svg.indexOf('</g>', imgStart);
    const imgEnd = svg.indexOf('</g>', nextG + 1) + 4;
    const img = svg.substring(imgStart, imgEnd);

    // Get header text
    const headerStart = svg.indexOf('<text');
    const headerEnd = svg.indexOf('/text') + 5;
    const header = svg.substring(headerStart, headerEnd);
    console.log(header)

    // Assemble
    const imgToDisplay = svgOpen + style + img + header + "</svg>";

    return imgToDisplay
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

function hideInventory() {
    if ($("#inventory").hasClass("hidden")) {
        $("#inventory").removeClass("hidden");
        $("#hide-inventory").text("Hide Inventory ↑");
    }
    else {
        $("#inventory").addClass("hidden");
        $("#hide-inventory").text("Show Inventory ↓");
    }
}