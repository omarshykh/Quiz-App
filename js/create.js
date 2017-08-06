
var userQuizname= document.getElementById('quizname');
var userMarks= document.getElementById('marks');
var userTime= document.getElementById('timefield');
var userInstructions= document.getElementById('instruc');
var userSyllabus= document.getElementById('syllabus');
var userQuestions= document.getElementById('quest');
var userPassing= document.getElementById('passing');

function valid(){
    if((!(userQuizname.value===""))&&(!(userMarks.value===""))&&(!(userTime.value===""))
    &&(!(userInstructions.value===""))&&(!(userSyllabus.value===""))&&(!(userQuestions.value===""))
    &&(!(userPassing.value===""))){
        return true;
    }
    else{
        return false;
    }
}

function validNum(){
    var listOfFields=document.getElementsByClassName('short');
    var tag1=listOfFields[0].value;
    var tag2=listOfFields[1].value;
    var tag3=listOfFields[2].value;
    var tag4=listOfFields[3].value;
    var pattern = new RegExp("^[0-9]+$");
    if((pattern.test(tag1)===true)&&(pattern.test(tag2)===true)&&(pattern.test(tag3)===true)
    &&(pattern.test(tag4)===true))
    {
        return true;
    }
    else{
        return false;
    }
}

function myfunc(){
var chk = valid();

if(chk){
var chkNum = validNum();
if(chkNum){
            var quiz ={
        name: userQuizname.value,
        marks : userMarks.value,
        time: userTime.value,
        instructions: userInstructions.value,
        syllabus: userSyllabus.value,
        questionQuan: userQuestions.value,
        passing: userPassing.value
    };

var quizzes = localStorage.getItem("quizzes");
if(quizzes !== null){
    quizzes = JSON.parse(quizzes);
}
else if(quizzes === null){
    quizzes=[];
}
if(quizzes.length===0){
quizzes.push(quiz);
quizzes = JSON.stringify(quizzes);
localStorage.setItem('quizzes',quizzes);
localStorage.setItem('currentquiz',userQuizname.value);
window.location='addquestions.html';
}
else if(quizzes.length>0){
    var auth=true;
    for(var i=0;i<quizzes.length;i++){
        if(quizzes[i].name.toLowerCase()===userQuizname.value.toLowerCase()){
            auth=false;
        }
    }
    if(auth){
        quizzes.push(quiz);
quizzes = JSON.stringify(quizzes);
localStorage.setItem('quizzes',quizzes);
localStorage.setItem('currentquiz',userQuizname.value);
window.location='addquestions.html';
    }
    else{
        alert('This name of quiz is already exist,Please try different!');
    }
}


}
else{
    alert("Please give marks,time,questions and passing percentage a number!!");
}

}
else{
    alert("You leave some fields empty, please fill them..");
}

}

