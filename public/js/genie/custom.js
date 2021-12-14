$(document).ready(function () {
  var turn = $("#turn"),
    boxes = $("#main div"),
    o_or_x = 0;

    var box1 = $("#box1"),
        box2 = $("#box2"),
        box3 = $("#box3"),
        box4 = $("#box4"),
        box5 = $("#box5"),
        box6 = $("#box6"),
        box7 = $("#box7"),
        box8 = $("#box8"),
        box9 = $("#box9");


    for (var i = 0; i < boxes.length; i++) {
        boxes[i].onclick = function () {
            if (this.html !== "X" && this.innerHTML !== "O") {
                if (o_or_x % 2 === 0) {
                    this.innerHTML = "X";
                    turn.innerHTML = "O's Turn";
                    findWinner();
                    o_or_x += 1;
                } else {
                    turn.innerHTML = "X's Turn";
                    this.innerHTML = "O";
                    findWinner();
                    o_or_x += 1;
                }
            }
        };
    }

    $("#reset").on("click", reset);

    function reset() {
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].innerHTML = "";
            boxes[i].classList.remove("disclick");
            boxes[i].classList.remove("win");
            turn.html("Play");
            turn.css({ "font-size": "30px" });
        }
    }

    function winboxes(b1, b2, b3) {
        b1.addClass("win");
        b2.addClass("win");
        b3.addClass("win");
        turn.html(b1.html() + " Won!!");
        turn.css({ "font-size": "45px" });
        $(".box").addClass("disclick");
    }

    function findWinner() {
    
    if (
        box1.html() !== "" &&
        box1.html() === box2.html() &&
        box1.html() === box3.html()
    )
        winboxes(box1, box2, box3);

    if (
        box4.html() !== "" &&
        box4.html() === box5.html() &&
        box4.html() === box6.html()
    )
        winboxes(box4, box5, box6);

    if (
        box7.html() !== "" &&
        box7.html() === box8.html() &&
        box7.html() === box9.html()
    )
        winboxes(box7, box8, box9);

    if (
        box1.html() !== "" &&
        box1.html() === box4.html() &&
        box1.html() === box7.html()
    )
        winboxes(box1, box4, box7);

    if (
        box2.html() !== "" &&
        box2.html() === box5.html() &&
        box2.html() === box8.html()
    )
        winboxes(box2, box5, box8);

    if (
        box3.html() !== "" &&
        box3.html() === box6.html() &&
        box3.html() === box9.html()
    )
        winboxes(box3, box6, box9);

    if (
        box1.html() !== "" &&
        box1.html() === box5.html() &&
        box1.html() === box9.html()
    )
        winboxes(box1, box5, box9);

    if (
        box3.html() !== "" &&
        box3.html() === box5.html() &&
        box3.html() === box7.html()
    )
        winboxes(box3, box5, box7);
    }
});
