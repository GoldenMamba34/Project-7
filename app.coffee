sideBar = $("#sideBar")
$("#navButton").click(->
    sideBarItems = $(".sideBarLink")
    sideBar.css("width", "20vw")
    sideBarItems.css("width", "65%")
    sideBar.toggle( "slide", {direction: "left" }, 150 )
    )
$(".sideBarLink").click(->
    sideBar.hide( "slide", {direction: "left" }, 150 )
    )
