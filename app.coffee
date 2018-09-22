$("#navButton").click(->
    sideBarItems = $(".sideBarLink")
    sideBar = $("#sideBar")
    sideBar.css("width", "20vw")
    sideBarItems.css("width", "65%")
    sideBar.toggle( "slide", {direction: "left" }, 200 )
    )
