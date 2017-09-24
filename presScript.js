$(document).ready(function () {
    $("#knapp").click(function(){
        var $this = $(this);
        if($(".skills").is(":visible")){
            $(".skills").animate({opacity: "0", height: "0%", width: "50%"});
            $this.text("Visa");
        }
        if($(".skills").css("opacity") == 0){
            $(".skills").animate({opacity: "100", height: "100%", width: "50%"});
            $this.text("Dölj");
        }
    });

    $(window).resize(function(){
        if ($(window).width() <= 800) {
            $("#meny").hide();
        }
        else if ($(window).width() >= 800) {
            $("#meny").show();
        }
    }).resize();

    $(".hamburgare").click(function(){
        $("#meny").slideToggle("slow");
    });
});