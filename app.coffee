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
    $("#notification").css("width", "40%")
    $("#notifications").css("position","absolute")
    $("#notifications").css("top",$("header").position().top + $("#header").height() + 20 )
    $("#notifications").css("left", $("#bellIcon").position().left - $("#notifications").width() / 2  )

    $("#notifications").toggle("slide", {direction: "up" }, 300 )
    undefined
    )

$(".notificationExitButton").click((event) ->
    $(event.target).parent().slideUp(300)
    $("#greenAlertCircle").hide(150) if $(".notification:hidden").length is $(".notification").length - 1
    $("#bellIcon").off() if (".notification:hidden").length is $(".notification").length - 1
    undefined
    )
