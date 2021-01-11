

var date = moment().format("dddd, MMMM Do YYYY");

var hour = moment().format("H");


if (localStorage.getItem("planner")) {
    var planner = JSON.parse(localStorage.getItem("planner"));
    $("input").filter(function(i, elem){
        elem.value = planner[i].event;
    })
}
else {
    planner = [
        {
            event: ""
        },
        {
            event: ""
        },
        {
            event: ""
        },
        {
            event: ""
        },
        {
            event: ""
        },
        {
            event: ""
        },
        {
            event: ""
        },
        {
            event: ""
        },
        {
            event: ""
        }
    ]
}


for (var i = 0; i < planner.length; i++) {
    console.log(planner[i]);
}

setDate();
colorEvents();


$("button").click(function () {
    var hr = this.value;
    console.log(hr);
    var tmp = $("input").filter(function (i, elem) {
        var tmpHr = $(elem).attr("data-hr");
        if (tmpHr == hr) {
            planner[hr - 9].event = elem.value;
            console.log(planner[hr - 9].event);
            console.log(planner);
            localStorage.setItem("planner", JSON.stringify(planner));
        }
    })
});

function setDate() {
    $(".date").text(date);
}

function colorEvents() {
    $(".events").each(function (i, elem) {
        //var x = elem.attr("data-hr")
        var elemHour = $(elem).attr("data-hr")

        if (+elemHour > +hour) {
            $(elem).attr("id", "future");
        }
        else if (+elemHour < +hour) {
            $(elem).attr("id", "past");

        }
        else {
            $(elem).attr("id", "current");

        }
    })
}


function setLocal() {
    localStorage.setItem("planner", planner);
}

