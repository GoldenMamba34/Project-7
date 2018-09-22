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

$("#bellIcon").click(function() {
  $("#notifications").toggle(300);
  $("#notifications").css("position", "absolute");
  return $("#notifications").css("top", $("#bellIcon").position().top + 50);
});

$(".notificationExitButton").click(function(event) {
  $(event.target).parent().slideUp(300);
  $("#bellIcon").off();
  if ($(".notification:hidden").length === $(".notification").length - 1) {
    return $("#greenAlertCircle").hide(100);
  }
});
