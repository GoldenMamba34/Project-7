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
  $("#notifications").css("top", $("header").position().top + $("#header").height() + 20);
  $("#notifications").css("left", $("#bellIcon").position().left - $("#notifications").width() / 2);
  return alert($("#bellIcon").position().left - $("#notifications").width() / 2);
});

$(".notificationExitButton").click(function(event) {
  $(event.target).parent().slideUp(300);
  $("#bellIcon").off();
  if ($(".notification:hidden").length === $(".notification").length - 1) {
    return $("#greenAlertCircle").hide(100);
  }
});
