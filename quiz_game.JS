function send() {
    number1 = document.getElementById("input").value;
    number2 = document.getElementById("input2").value;
    actual_answer= parseInt(number1)*parseInt(number2);

    question_numbers="<h4>"+number1+" x "+number2+"</h4>";
    input_box= "<br>Answer : <input placeholder='type your answer' id='input_answer'>";
    check_button="<br><br><button class='btn btn-warning' onclick='check()'>Check</button>";
    row=question_numbers+input_box+check_button;
    document.getElementById("output").innerHTML=row;

    document.getElementById("input").value="";
    document.getElementById("input2").value="";
}
