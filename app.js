$("#navButton").click(function() {
  var sideBar, sideBarItems;
  sideBarItems = $(".sideBarLink");
  sideBar = $("#sideBar");
  sideBar.css("width", "20vw");
  sideBarItems.css("width", "65%");
  return sideBar.toggle("slide", {
    direction: "left"
  }, 200);
});
