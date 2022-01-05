console.log("connected");

var current, next, prev;

var value = 33.99;

$(".next").click(function() {

    current = $(this).parent();
    next = $(this).parent().next();

    current.slideUp("slow", function() {

    });
    next.slideDown("slow", function() {

    });
    value += 33.99;
});

$(".previous").click(function() {

    current = $(this).parent();
    prev = $(this).parent().prev();

    current.slideUp("slow", function() {

    });
    prev.slideDown("slow", function() {

    });
    value -= 33.99;
});

$("#alreadyamember").click(function() {

    current = $(this).parent();
    current.slideUp("slow", function() {

    });
    $("#form4").slideDown("slow", function() {

    });
    $(".progress").fadeOut("slow", function() {

    });
});

$("#noaccount").click(function() {

    current = $(this).parent();
    current.slideUp("slow", function() {

    });
    $("#form1").slideDown("slow", function() {

    });
    $(".progress").fadeIn("slow", function() {

    });
});
//noaccount
// $(document).ready(function() {
//   $(".submit").click(function{
//     var FirstName = $("#FirstName").val();
//     var LastName = $("#LastName").val();
//     var dob = $("#dob").val();
//     var Gender = $("#Gender").val();
//     var inputAddress = $("#inputAddress").val();
//     var inputCity = $("#inputCity").val();
//     var inputZip = $("#inputZip").val();
//     $.post("/", {
//       FirstName: FirstName,
//     	LastName: LastName,
//     	dob: dob,
//     	Gender: Gender,
//     	Address: inputAddress,
//     	City: inputCity,
//     	State: inputState,
//     	Zip: inputZip,
//     });
//   });
// });