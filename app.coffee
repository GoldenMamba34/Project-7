sideBar = $("#sideBar")
sideBarItems = $(".sideBarLink")
$("#navButton").click(->
    sideBar.css("width", "20vw")
    sideBarItems.css("width", "65%")
    sideBar.toggle( "slide", {direction: "left" }, 250 )
    )
$(".sideBarLink").click(->
    sideBar.hide( "slide", {direction: "left" }, 250 )
    $("#navButton").removeClass("is-active")
    undefined
    )
$("#bellIcon").click(->
    $("#notifications").toggle(300)
    $("#notifications").css("position","absolute")
    $("#notifications").css("top",$("#bellIcon").position().top + 50)
    )

$(".notificationExitButton").click((event) ->
    $(event.target).parent().slideUp(300)
    $("#bellIcon").off()
    $("#greenAlertCircle").hide(100) if $(".notification:hidden").length is $(".notification").length - 1
    )
