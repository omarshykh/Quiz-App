var quizzes = localStorage.getItem('quizzes');
quizzes = JSON.parse(quizzes);
console.log(quizzes);
if(quizzes===null){
    document.getElementById('none').innerHTML="No quizzes available right now";
}
else{
    var quizNames=[];
for(var i=0;i<quizzes.length;i++){
    quizNames.push(quizzes[i].name);
}

if(quizNames.length===0){
    document.getElementById('none').innerHTML="No quizzes available right now";
}
else if(quizNames.length>0){
    var identity="quiz";
    var click;
    for(var i=0;i<quizNames.length;i++){
        var parent=document.getElementById('maindiv');
        var breakline=document.createElement('br');        
        var anker=document.createElement('a');
        identity=identity+(i+1);
        click="startQuiz('"+identity+"')";
        anker.setAttribute('id',identity);
        anker.setAttribute('class','links');
        anker.setAttribute('href','javascript:void(0)');
        anker.setAttribute('onclick',click);
        var ankerTxt=document.createTextNode(quizNames[i]);
        anker.appendChild(ankerTxt);
        parent.appendChild(breakline);
        parent.appendChild(anker);
    }
}

}

function startQuiz(param){
    var auth=true;
    var quizname=document.getElementById(param).innerHTML;
    var userLogin=localStorage.getItem('userLogin');
    userLogin=JSON.parse(userLogin);

    //console.log(userLogin.record[0].name,userLogin.record.length);
    if("record" in userLogin){
        for(var i=0;i<userLogin.record.length;i++){
        if(userLogin.record[i].name===quizname){
            auth=false;
        } 
    }
}

   if(auth){
    localStorage.setItem('startQuizName',quizname);
    window.location='quiz.html';
}
else{
    alert('You already attempted this quiz before,quiz cant be attempted more than once!');
    var ele=document.getElementById(param);
    ele.style.color="white";

}
}
