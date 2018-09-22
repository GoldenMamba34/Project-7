var sideBar;

sideBar = $("#sideBar");

$("#navButton").click(function() {
  var sideBarItems;
  sideBarItems = $(".sideBarLink");
  sideBar.css("width", "20vw");
  sideBarItems.css("width", "65%");
  return sideBar.toggle("slide", {
    direction: "left"
  }, 150);
});

$(".sideBarLink").click(function() {
  return sideBar.hide("slide", {
    direction: "left"
  }, 150);
});
