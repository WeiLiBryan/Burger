$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        if (newDevoured == false) {
            newDevoured = true;
        } else {
            newDevoured = false;
        }
        var devouredState = {
            devoured: newDevoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function () {
                console.log("changed eaten to", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});