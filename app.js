var sideBar, sideBarItems;

sideBar = $("#sideBar");

sideBarItems = $(".sideBarLink");

$("#navButton").click(function() {
  sideBar.css("width", "20vw");
  sideBarItems.css("width", "65%");
  return sideBar.toggle("slide", {
    direction: "left"
  }, 250);
});

$(".sideBarLink").click(function() {
  sideBar.hide("slide", {
    direction: "left"
  }, 250);
  $("#navButton").removeClass("is-active");
  return void 0;
});

$("#bellIcon").click(function() {});
