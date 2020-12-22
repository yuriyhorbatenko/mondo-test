$(".btn").on("click", function(e) {

    e.preventDefault();

    function validateForm() {
        var isValid = true;
        $(".form-control").each(function() {
            if ($(this).val() === "") {
                isValid = false;
            }
        });

        return isValid;
    }


    if (validateForm()) {

        var type1 = {
            id: Date.now(),
            name: $("#name").val().trim(),
            email: $("#email").val().trim(),
            type: {
                id: Date.now(),
                name: $("#name").val().trim(),
                address: {
                    city: $("#city").val().trim(),
                    state: $("#state").val(),
                    zip: $("#zip").val().trim(),
                }
            },
            externalId: Date.now()
        };

        var type2 = {
            email: $("#email").val().trim(),
            externalId: Date.now(),
            id: Date.now(),
            name: $("#name").val().trim(),

            type: {
                address: {
                    city: $("#city").val().trim(),
                    state: $("#state").val(),
                    zip: $("#zip").val().trim(),
                },
                id: Date.now(),
                name: $("#name").val().trim(),
            }
        };



        console.log(type1, type2)
        $(".form-control").val("")

    } else {
        alert("Please fill out all fields before submitting!");
    }
});