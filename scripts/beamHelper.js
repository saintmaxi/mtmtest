const acceptedChars = new Set("0123456789,");

$("#beam-transponder-ids").on("change keyup paste", function(){
    try {
        let input = $(this).val();
        let hasProhibited;
        for (let i = 0; i < input.length; i++) {
            if (!(acceptedChars.has(input[i]))) {
                $("#invalid-chars-og-tp").html(`<span style="color: red">Invalid character detected!</span>`);
                hasProhibited = true;
                break;
            }
        }
        if (!hasProhibited) {
            $("#invalid-chars-og-tp").html('');
        }
    }
    catch {}
});

$("#beam-capsule-ids").on("change keyup paste", function(){
    try {
        let input = $(this).val();
        let hasProhibited;
        for (let i = 0; i < input.length; i++) {
            if (!(acceptedChars.has(input[i]))) {
                $("#invalid-chars-og-sc").html(`<span style="color: red">Invalid character detected!</span>`);
                hasProhibited = true;
                break;
            }
        }
        if (!hasProhibited) {
            $("#invalid-chars-og-sc").html('');
        }
    }
    catch {}
});