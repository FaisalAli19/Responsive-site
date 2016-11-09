//Toggle Menu items on click of button
$(document).ready(function(){
    $("nav button").on("click", function(){
        $("nav #Nav-list").slideToggle(600);
    });
});
