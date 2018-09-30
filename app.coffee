sideBar = $("#sideBar")
sideBarItems = $(".sideBarLink")
$("#navButton").click(->
    sideBar.css("width", "15vw")
    sideBar.toggle(250)
    undefined
    )
$(".sideBarLink").click(->
    sideBar.hide( "slide", {direction: "left" }, 250 ) if $(document).width() < 769
    $("#navButton").removeClass("is-active")
    undefined
    )
$("#bellIcon").click(->

    $("#notifications").css("position","absolute")
    $("#notifications").css("top",$("header").position().top + $("#header").height() + 20 )
    if $(document).width() > 768
        $("#notifications").css("left", $("#bellIcon").position().left - $("#notifications").width() / 2 - $(document).width() * .1)
    else if $(document).width() > 568
        $("#notifications").css("left","30%")
    else
        $("#notifications").css("left","10%")

    $("#notifications").toggle("slide", {direction: "up" }, 250 )
    undefined
    )

$(".notificationExitButton").click((event) ->
    $(event.target).parent().slideUp(250)
    $("#greenAlertCircle").hide(150) if $(".notification:hidden").length is $(".notification").length - 1
    $("#bellIcon").off() if (".notification:hidden").length is $(".notification").length - 1
    undefined
    )

Chart.defaults.global.title.display = false
Chart.defaults.global.legend.position = "right"
Chart.defaults.global.legend.fullWidth = true
ctx = document.getElementById('trafficChart').getContext('2d')
chart = new Chart(ctx,
    type: 'line'
    data:
        labels: [
            '16-22'
            '23-29'
            '30-36'
            '37-43'
            '44-50'
            '51-57'
            '58-64'
            '65-71'
            '72-78'
            '79-85'
            '86-92'
            '93-99'
        ]
        datasets: [ {
            label: 'My First dataset'
            backgroundColor: 'rgba(226, 227, 246, .75)'
            borderColor: '#005ebc'

            data: [
                500
                1000
                1500
                2000
                2500
            ]
        } ]
    options: {responsive:true})



ctx = document.getElementById('dailyTrafficChart').getContext('2d')
chart = new Chart(ctx,
    type: 'bar'
    data:
        labels: [
            'S'
            'M'
            'T'
            'W'
            'T'
            'F'
            'S' ]
        datasets: [ {
            label: 'My First dataset'
            backgroundColor: '#7377BF'
            borderColor: '#7377BF'
            data: [
                500
                1000
                1500
                2000
                2500
            ]
        } ]
    options: {responsive:true})


ctx = document.getElementById('mobileUsersChart').getContext('2d')
chart = new Chart(ctx,
    type: 'pie'
    data:
        labels: [
            'Phones'
            'Tablets'
            'Desktop'

        ]
        datasets: [ {
            label: 'My First dataset'
            backgroundColor: [
                '#81C98F'
                '#74B1BF'
                '#005ebc'
            ]
            borderColor: '#005ebc'
            data: [
                18
                27
                65
            ]
        } ]

    options: {responsive:true})
