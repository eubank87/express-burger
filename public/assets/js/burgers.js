// Make sure to wait for handlebars attachment until DOM is loaded
$(function(){
    $(".change-devour").on("click", function(e){
        const id = $(this).data("id");
        const newDevour = $(this).data("newdevour");

        const newDevourState = {
            devoured: newDevour
        };

        // send the PUT request
        $.ajax("/api/burgers/", + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function(){
                console.log("changed devour to ", newDevour);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(e){
        e.preventDefault();

        const newBurger = {
            name: $("#ca").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        // send POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("created new burger");
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(e){
        const id = $(this).data("id");

        $.ajax("/api/burgers/", +id, {
            type: "DELETE"
        }).then(
            function(){
                console.log("deleted burger ", id)
                location.reload();
            }
        );
    });
});