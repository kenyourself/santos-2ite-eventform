function display(){

    var evType = document.getElementById("eventType").value;
    var evTitle = document.getElementById("eventTitle").value;
    var d1 = document.getElementById("eventDate1").value;
    var d2 = document.getElementById("eventDate2").value;
    var d3 = document.getElementById("eventDate3").value;

    if ((evType !== "" ) && (evTitle !== "" ) && (d1 !== "" ) && (d2 !== "" ) && (d3 !== "" ))  {

                alert("Successfully sent to the server!");
                }
    else{ 

                alert("Please fill out all the details!");

            }
}