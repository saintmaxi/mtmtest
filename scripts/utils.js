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
        $("#characters-block").append(`<div class="your-char" onclick='displayCharacter(${id})'>${svg}<h3>${mesYield} <img src="./images/mes.png" width="30px"> /Day</h3></div>`)
        let charIMG = document.getElementById(elemID);
        charIMG.setAttribute('viewBox', '0 0 ' + 1200 + ' ' + 950);
    }
};

const closeDisplay = async() => {
    $(`#displayed-transponder`).remove();
    $(`#displayed-capsule`).remove();
    $(`#displayed-character`).remove();
};


const equipClasses = ["WEAPONS", "CHEST", "HEAD", "LEGS", "VEHICLE", "ARMS", "ARTIFACTS", "RINGS"];

const getEquipmentLevels = async(id) => {
    const capsuleID = (await characterStorage.characters(id)).spaceCapsuleId_;

    let levels = new Map();
    for (let i = 0; i < equipClasses.length; i++) {
        let equipClass = equipClasses[i];
        let rarity = await charactersController.getItemRarity(capsuleID, equipClass);
        console.log({rarity});
        let _baseTier = await charactersController.queryBaseEquipmentTier(rarity);
        console.log({_baseTier});
        let _equipClassProxy = equipClass === "WEAPONS" ? "WEAPON" : equipClass === "ARTIFACTS" ? "ARTIFACT" : equipClass === "RINGS" ? "RING" : equipClass;
        let _upgrades = (await characterStorage.equipments(id))[`${_equipClassProxy.toLowerCase()}Upgrades_`];
        console.log({_upgrades});
        let currentLevel = _baseTier + _upgrades;
        console.log({currentLevel});
        levels.set(i, currentLevel);
        levels.set(`${equipClass.toLowerCase()}Lvl`, currentLevel);
    }

    console.log(levels);
    return levels;
};


const equipmentMap = new Map([[0, "Weapon"], [1, "Chest"], [2, "Head"], [3, "Legs"], 
                            [4, "Vehicle"], [5, "Arms"], [6, "Artifact"], [7, "Ring"]]);


const updateAugment = async() => {
    const id = $("#augment-char").val();

    if (id) {
        $("#augment-w-char-img").empty();
        $("#augment-w-char-img").append(await isolateIMG(id, 'augment-w-char-svg'));
        $("#augment-w-char-img"). attr("onclick",`displayCharacter(${id})`);
        let charIMG = document.getElementById("augment-w-char-svg");
        charIMG.setAttribute('viewBox', '0 0 ' + 1200 + ' ' + 975);

        const currentAugments = (await characterStorage.characters(id)).augments_;
        $("#augment-w-char-current-augments").empty();
        $("#augment-w-char-current-augments").append(`<h3>Current Augments: ${currentAugments}</h3>`);
    }
};

const updateAugmentWithMats = async() => {
    const id = $("#augment-mats-char").val();

    if (id) {
        $("#augment-w-mats-img").empty();
        $("#augment-w-mats-img").append(await isolateIMG(id, 'augment-w-mats-svg'));
        $("#augment-w-mats-img"). attr("onclick",`displayCharacter(${id})`);
        let charIMG = document.getElementById("augment-w-mats-svg");
        charIMG.setAttribute('viewBox', '0 0 ' + 1200 + ' ' + 950);

        const currentAugments = (await characterStorage.characters(id)).augments_;
        $("#augment-w-mats-current-augments").empty();
        $("#augment-w-mats-current-augments").append(`<h3>Current Augments: ${currentAugments}</h3>`);
    }
};

const updateLevelUpPoints = async() => {
    const id = $("#level-up-char").val();
    $("#level-up-amount").empty(); 
    $("#level-up-amount").append(`<option value="">-</option>`);

    if (id) {
        $("#level-up-char-img").empty();
        $("#level-up-char-img").append(await isolateIMG(id, 'level-up-svg'));
        $("#level-up-char-img"). attr("onclick",`displayCharacter(${id})`);
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

const equipColors = new Map([[0, "white"], [1, "green"], [2, "blue"], [3,"red"], [4, "purple"]]); //update when they tell you

const updateEquipmentLevelDisplay = async(id) => {
    const levels = await getEquipmentLevels(id);
    for (let i = 0; i < 8; i++) {
        let equipmentType = equipmentMap.get(i);
        let level = levels.get(i);
        if (i < 4) {
            $("#equip-stats-1").append(`<div style="text-align:center">${equipmentType}:<span style="color:${equipColors.get(level)}"> Level ${level}<span></div>`);
        }
        else {
            $("#equip-stats-2").append(`<div style="text-align:center">${equipmentType}:<span style="color:${equipColors.get(level)}"> Level ${level}</span></div>`);
        }
    }
};

var lastId = -1;

const updateEquipmentUpgrade = async() => {
    const id = $("#upgrade-char").val();
    const equipmentType = $("#upgrade-eq-type").val();
    $("#upgrade-eq-amount").empty(); 
    $("#upgrade-eq-amount").append(`<option value="">-</option>`);
    const equipmentUpgrades = await characterStorage.equipments(id);

    if (id) {
        if (id !== lastId) {
            $("#equip-stats-1").html(`<span class="stats-loading"><h1><span class="one">.</span><span class="two">.</span><span class="three">.</span></h1></span>`);
            $("#equip-stats-2").html(`<span class="stats-loading"><h1><span class="one">.</span><span class="two">.</span><span class="three">.</span></h1></span>`);
            lastId = id;
            $("#upgrade-equip-img").empty();
            $("#upgrade-equip-img").append(await isolateIMG(id, 'upgrade-equip-svg'));
            $("#upgrade-equip-img"). attr("onclick",`displayCharacter(${id})`);
            let charIMG = document.getElementById("upgrade-equip-svg");
            charIMG.setAttribute('viewBox', '0 0 ' + 1200 + ' ' + 950);
        
            await updateEquipmentLevelDisplay(id);

            $(".stats-loading").remove();
        }
    }

    if (id && equipmentType) {
        const currentUpgrades = equipmentUpgrades[equipmentType-1];
        const upgradesLeft = 4 - currentUpgrades;
        for (let i = 1; i <= upgradesLeft; i++) {
            $("#upgrade-eq-amount").append(`<option value="${i}">${i}</option>`); 
        }
    }
};

const augmentCosts = new Map([[0, 0], [1, 1], [2, 2], [3, 5], [4, 10], [5, 15], [6, 25], [7, 50], [8, 100], [9, 250]]);

const getAugmentCost = async(desiredAugments) => {
    const id = $("#augment-char").val();
    const stats = await characterStorage.characters(id);
    const currentAugments = stats.augments_;
    const target = currentAugments + Number(desiredAugments);
    let cost = 0;
    for (i = currentAugments; i < target; i++) {
        cost += augmentCosts.get(i);
    }
    if (Number.isNaN(cost)) {
       $("#augment-mes-cost").text("-");
    }
    else {
        $("#augment-mes-cost").text(cost);
    }
};

const getAugmentWithMatsCost = async(desiredAugments) => {
    const id = $("#augment-mats-char").val();
    const stats = await characterStorage.characters(id);
    const currentAugments = stats.augments_;
    const target = currentAugments + Number(desiredAugments);
    let cost = 0;
    for (i = currentAugments; i < target; i++) {
        cost += augmentCosts.get(i);
    }
    if (Number.isNaN(cost)) {
       $("#augment-mats-mes-cost").text("-");
    }
    else {
        $("#augment-mats-mes-cost").text(cost);
    }
};

const levelUpCosts = new Map([[0, 1], [1, 2], [2,5], [3, 10], [4, 20], [5, 30], [6, 50], [7, 70], [8, 100], [9, 150]]);
const getLevelUpCost = async() => {
    const id = $("#level-up-char").val();
    const levelUpAmount = $("#level-up-amount").val();
    const stats = await characterStorage.characters(id);
    const currentBasePoints = stats.basePoints_;
    const target = currentBasePoints + Number(levelUpAmount);
    let cost = 0;
    for (i = currentBasePoints; i < target; i++) {
        cost += levelUpCosts.get(Math.floor(i/5));
    }

    $("#level-up-mes-req").text(cost);
};

const equipmentUpgradeCosts = new Map([[0, 50], [1, 250], [2, 750], [3, 1500]]);
const getEquipmentUpgradeCost = async() => {
    const id = $("#upgrade-char").val();
    const equipmentType = $("#upgrade-eq-type").val();
    const levelsToUpgrade = $("#upgrade-eq-amount").val();
    const equipmentUpgrades = await characterStorage.equipments(id);
    const currentUpgrades = equipmentUpgrades[equipmentType-1];
    const target = currentUpgrades + Number(levelsToUpgrade);
    let cost = 0;
    for (i = currentUpgrades; i < target; i++) {
        cost += equipmentUpgradeCosts.get(i);
    }

    $("#upgrade-mes-req").text(cost);
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