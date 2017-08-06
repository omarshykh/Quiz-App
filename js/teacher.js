function searchQuiz(){
    var parent=document.getElementById('maindiv');
    parent.innerHTML="";

    var heading=document.createElement('h3');
    heading.setAttribute('id','heading');
    var headingTxt=document.createTextNode('Search quiz to delete');
    heading.appendChild(headingTxt);

    var break1=document.createElement('br');
    var break2=document.createElement('br');

    var labelSearch=document.createElement('label');
    labelSearch.setAttribute('id','labelsearch');
    var labelTxt=document.createTextNode('Quiz Name');
    var deleteField=document.createElement('input');
    deleteField.setAttribute('type','text');
    deleteField.setAttribute('id','search');
    labelSearch.appendChild(labelTxt);
    labelSearch.appendChild(deleteField);

    var delButton = document.createElement('button');
    delButton.setAttribute('id','deleteButton');
    delButton.setAttribute('onclick','deleteQuiz()');
    var buttonTxt=document.createTextNode('Delete Quiz');
    delButton.appendChild(buttonTxt);

    parent.appendChild(heading);
    parent.appendChild(break1);
    parent.appendChild(break2);
    parent.appendChild(labelSearch);
    parent.appendChild(delButton);
}

function deleteQuiz(){
    var quizname=document.getElementById('search').value;
    if(quizname===""){
        alert("Please Enter Quiz Name which you want to delete");
    }
    else{
        var quizzezData = localStorage.getItem('quizzes'); //string of quizzes
        quizzezData = JSON.parse(quizzezData); //objects of quizzes
        var index = quizzezData.findIndex(function(o){
                return o.name===quizname;
        })
        if(index===-1){
                alert('The quiz you want to delete doesnt exists! ');
        }
        else{
        quizzezData.splice(index,1);
        quizzezData=JSON.stringify(quizzezData);
        localStorage.setItem('quizzes',quizzezData);
        alert('Successfully deleted this quiz!');
        document.getElementById('labelsearch').value="";
        }
    }
}