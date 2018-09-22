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


    )
