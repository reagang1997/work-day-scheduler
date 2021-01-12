
//used to format 
var date = moment().format("dddd, MMMM Do YYYY");

//makes hour 24 hr time
var hour = moment().format("H");

//if the planner is in local storage get it, if not create it
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


//one event handler for every button
$("button").click(function () {
    //get the time slot the button is assigned to
    var hr = this.value;

    //grab all the inputs, find the input that is with the button clicked
    var tmp = $("input").filter(function (i, elem) {
        //tmpHr = this elements data-hr
        var tmpHr = $(elem).attr("data-hr");
        //if tmpHR == hr put the input in the correct part of the planner and set storage
        if (tmpHr == hr) {
            planner[hr - 9].event = elem.value;
            
            localStorage.setItem("planner", JSON.stringify(planner));
        }
    })
});

function setDate() {
    $(".date").text(date);
}

function colorEvents() {
    //loop over each element that has class=events
    $(".events").each(function (i, elem) {
        
        //get the hour slot that element is in
        var elemHour = $(elem).attr("data-hr")

        //if it is greater than current hour assign id of future, if it is less assign past, else it is current
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

