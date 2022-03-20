function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1)*parseInt(number2);
    /*parsInt() is used to convert a String to Integer.
Syntax of parsInt() - parsInt(variable) // This variable will contain a string.
String means it’s a sentence.
Integer means it’s a number.
When we take value from an input box it’s a string, so first we will convert this string to an integer using parsInt(). Then we will multiply these 2 numbers. */
question_number = "<h4>" + number1 + "+" + number2 + "</h4>";
input_box ="<br>Answer : <input type='text' id='input_check_box'>" ;
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}