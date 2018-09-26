sideBar = $("#sideBar")
sideBarItems = $(".sideBarLink")
$("#navButton").click(->
    sideBar.css("width", "15vw")
    sideBar.toggle( "slide", {direction: "left" }, 250 )
    undefined
    )
$(".sideBarLink").click(->
    sideBar.hide( "slide", {direction: "left" }, 250 ) if $(document).width() < 769
    $("#navButton").removeClass("is-active")
    undefined
    )
$("#bellIcon").click(->

    $("#notifications").css("position","absolute")
    $("#notifications").css("top",$("header").position().top + $("#header").height() + 20 )
    if $(document).width() > 768
        $("#notifications").css("left", $("#bellIcon").position().left - $("#notifications").width() / 2 -  $(document).width() * .1)
    else if $(document).width() > 568
        $("#notifications").css("left","30%")
    else
        $("#notifications").css("left","10%")

    $("#notifications").toggle("slide", {direction: "up" }, 250 )
    undefined
    )

$(".notificationExitButton").click((event) ->
    $(event.target).parent().slideUp(250)
    $("#greenAlertCircle").hide(150) if $(".notification:hidden").length is $(".notification").length - 1
    $("#bellIcon").off() if (".notification:hidden").length is $(".notification").length - 1
    undefined
    )
