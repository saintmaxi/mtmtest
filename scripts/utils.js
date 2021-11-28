const loadTransponderSelect = async(transponders) => {
    for (let i = 0; i < transponders.length; i++) {
        id = transponders[i];
        $(".transponder-select").append(`<option value="${id}">${id}</option>`); 
    }
}