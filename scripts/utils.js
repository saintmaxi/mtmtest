const loadTransponderSelect = async(transponders) => {
    for (let i = 0; i < transponders.length; i++) {
        id = transponders[i];
        $(".transponder-select").append(`<option value="${id}">${id}</option>`); 
    }
}

const loadCapsuleSelect = async(capsules) => {
    for (let i = 0; i < capsules.length; i++) {
        id = capsules[i];
        $(".capsule-select").append(`<option value="${id}">${id}</option>`); 
    }
}