var months = ["January", "February", "March", "April" ]

var date = moment().format("dddd, MMMM Do YYYY");

var hour = moment().format("h");


setDate();
colorEvents();


function setDate(){
    $(".date").text(date);
}

function colorEvents(){
    $(".events").each(function(i, elem){
        //var x = elem.attr("data-hr")
        var elemHour = $(elem).attr("data-hr")
        if(+elemHour > +hour){
            $(elem).addClass("future");
        }
        else if(+elemHour < +hour){
            $(elem).addClass("past");

        }
        else{
            $(elem).addClass("current");

        }
    })
}
