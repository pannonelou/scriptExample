// JavaScript source code

function x() {
    var canvas = document.getElementById("circlecanvas");
    if (canvas.className == '_6')
        canvas.className = '_12';
    else
        canvas.className = "_6";
}
function createPoints(pointName, pointClass) {

    document.body.innerHTML =
        document.body.innerHTML +
        '<canvas id="' + pointName + '" class="' + pointClass +
        '" style="z-index : 0; " width="50" height="50"></canvas>';


    //paintCircles(pointName, "gray");
}


function paintCircles(canvasName, canvasColor) {
    canvas = document.getElementById(canvasName);
    context = canvas.getContext("2d");
    context.fillStyle = canvasColor;

    if ((canvasName.toString().indexOf("12") > 0) ||
        (canvasName.toString().indexOf("3") > 0)  ||
        (canvasName.toString().indexOf("6") > 0)  ||
        (canvasName.toString().indexOf("9") > 0)  )
                context.arc(25, 25, 15, 0, Math.PI * 2, true);
    else
        context.arc(25, 25, 8, 0, Math.PI * 2, true);
    context.fill();
}

function numberPoints(canvasName, label) {

    var xPosition = 22;
    canvas = document.getElementById(canvasName);
    context = canvas.getContext("2d");
    context.strokeStyle = 'red';
    context.fillStyle = 'red';

    context.arc(25, 25, 20, 0, Math.PI * 2, false);
    context.stroke();
    context.font = "12px Georgia";
    debugger;

    if (label > 10)
        xPosition = 20;
   
    context.fillText(label.toString(), xPosition, 28);

}
