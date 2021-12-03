const acceptedChars = new Set("0123456789,");

$("#augment-burn-chars").on("change keyup paste", function(){
    try {
        let charsToBurnInput = $(this).val();
        let hasProhibited;
        for (let i = 0; i < charsToBurnInput.length; i++) {
            if (!(acceptedChars.has(charsToBurnInput[i]))) {
                $("#invalid-chars-burn").html(`<span style="color: red">Invalid character detected!</span>`);
                hasProhibited = true;
                break;
            }
        }
        if (!hasProhibited) {
            $("#invalid-chars-burn").html('');
            let charsToBurn = charsToBurnInput.split(',').length;
            getAugmentCost(charsToBurn);
        }
    }
    catch {}
});

$("#augment-transponders").on("change keyup paste", function(){
    try {
        let input = $(this).val();
        let hasProhibited;

        for (let i = 0; i < input.length; i++) {
            if (!(acceptedChars.has(input[i]))) {
                $("#invalid-tp-burn").html(`<span style="color: red">Invalid character detected!</span>`);
                hasProhibited = true;
                break;
            }
        }
        if (!hasProhibited) {
            $("#invalid-tp-burn").html('');
            let tpsToBurn = input.split(',').length;
            if ($("#augment-capsules").val().split(',').length == tpsToBurn) {
                getAugmentWithMatsCost(tpsToBurn);
            }
        }
    }
    catch {}
})

$("#augment-capsules").on("change keyup paste", function(){
    try {
        let input = $(this).val();
        let hasProhibited;

        for (let i = 0; i < input.length; i++) {
            if (!(acceptedChars.has(input[i]))) {
                $("#invalid-sc-burn").html(`<span style="color: red">Invalid character detected!</span>`);
                hasProhibited = true;
                break;
            }
        }
        if (!hasProhibited) {
            $("#invalid-sc-burn").html('');
            let scsToBurn = input.split(',').length;
            if ($("#augment-transponders").val().split(',').length == scsToBurn) {
                getAugmentWithMatsCost(scsToBurn);
            }
        }
    }
    catch {}
})