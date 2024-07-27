
let running = false;
let vrednosti = [];
let done = false;
let num = 0;

$(document).ready(function() {
    $("td").css("background-color", "#facdea");

    $("#pokreni").click(function() {
        vrednosti = [];
        num = 0;
        if (running) {
            return;
        }

        running = true;

        let broj = parseInt($("#slider").val());
        let last = 0;

        let handler = setInterval(function() {
            let j = Math.floor(Math.random() * 9 + 1);

            while (j == last) {
                j = Math.floor(Math.random() * 9 + 1);
            }

            $("#" + j).css("background-color", "blue");
            $("#" + last).css("background-color", "#facdea");

            vrednosti[num] = j;
            last = j;
            num++;

            if (broj == num) {
                clearInterval(handler);

                setTimeout(function() {
                    $("td").css("background-color", "#facdea");
                    running = false;
                    done = true;
                }, 1000);
            }
        }, 1000);
    });

    let cnt = 0;

    $("td").click(function() {
        if (running) {
            return;
        }

        if ($(this).attr("id") == vrednosti[cnt]) {
            $(this).css("background-color", "green");
            cnt++;

            if (cnt == vrednosti.length) {
                setTimeout(function() {
                    alert("Bravo!");
                    $("td").css("background-color", "#facdea");
                    vrednosti = [];
                    cnt = 0;
                    num = 0;
                    return;
                }, 1000);
            }
        } else {
            cnt = 0;
            $("td").css("background-color", "red");
            setTimeout(function() {
                $("td").css("background-color", "#facdea");
                console.log("tu sam");
                return;
            }, 1000);
        }
    });
});
