var totalQues = 1;
var quesSubmit = 0;

var userQues = document.getElementById('question');
var userOption1 = document.getElementById('option1');
var userOption2 = document.getElementById('option2');
var userOption3 = document.getElementById('option3');
var userOption4 = document.getElementById('option4');
var userMarks = document.getElementById('marks');
var opt1select = document.getElementById('option1select');
var opt2select = document.getElementById('option2select');
var opt3select = document.getElementById('option3select');
var opt4select = document.getElementById('option4select');

function check() {
    if ((!(userQues.value === "")) && (!(userOption1.value === "")) && (!(userOption2.value === ""))
        && (!(userOption3.value === "")) && (!(userOption4.value === "")) && (!(userMarks.value === ""))) {
        return true;
    }
    else {
        return false;
    }
}

function checkNumber() {
    var mark = document.getElementById('marks').value;
    var pattern = new RegExp("^[0-9]+$");
    if (pattern.test(mark) === true) {
        return true;
    }
    else {
        return false;
    }
}

function quizData(para) {
    if (quesSubmit < totalQues) {
        var chk = check();
        if (chk) {
            var chkNum = checkNumber();
            if (chkNum) {

                var ques = {
                    question: userQues.value,
                    marks: userMarks.value,
                    options: [
                        {
                            option1: userOption1.value,
                            correct: opt1select.value
                        },
                        {
                            option2: userOption2.value,
                            correct: opt2select.value
                        },
                        {
                            option3: userOption3.value,
                            correct: opt3select.value
                        },
                        {
                            option4: userOption4.value,
                            correct: opt4select.value
                        },
                    ]
                }


                // console.log(questions);
                var quizzezData = localStorage.getItem('quizzes'); //string of quizzes
                quizzezData = JSON.parse(quizzezData); //objects of quizzes
                var current = localStorage.getItem('currentquiz'); //string of quiz
                var index;

                if (quizzezData === null) {
                    window.location = 'create.html';
                }
                else {
                    for (var i = 0; i < quizzezData.length; i++) {
                        if (quizzezData[i].name === current) {
                            index = i;
                        }
                    }
                    totalQues = quizzezData[index].questionQuan;
                    totalQues = Number(totalQues);

                    if (!("questions" in quizzezData[index])) {
                        quizzezData[index].questions = [];
                    }

                }


                if (para === 'add') {
                    quizzezData[index].questions.push(ques);
                    quizzezData = JSON.stringify(quizzezData);
                    localStorage.setItem('quizzes', quizzezData);
                    quesSubmit++;
                    if (quesSubmit < totalQues) {
                        document.getElementById('question').value = '';
                        document.getElementById('option1').value = '';
                        document.getElementById('option2').value = '';
                        document.getElementById('option3').value = '';
                        document.getElementById('option4').value = '';
                        document.getElementById('marks').value = '';
                        document.getElementById('option1select').value = 'true';
                        document.getElementById('option2select').value = 'true';
                        document.getElementById('option3select').value = 'true';
                        document.getElementById('option4select').value = 'true';
                    }
                    else {
                        alert("You successfully created this quiz!!");
                        localStorage.removeItem('currentquiz');
                        window.location = "teacher.html";
                    }
                    //alert("success");
                }
                else if (para === 'save') {
                    quizzezData[index].questions.push(ques);
                    quizzezData = JSON.stringify(quizzezData);
                    localStorage.setItem('quizzes', quizzezData);
                    quesSubmit++;
                    if (quesSubmit < totalQues) {
                        alert('You have to add more questions');
                        document.getElementById('question').value = '';
                        document.getElementById('option1').value = '';
                        document.getElementById('option2').value = '';
                        document.getElementById('option3').value = '';
                        document.getElementById('option4').value = '';
                        document.getElementById('marks').value = '';
                        document.getElementById('option1select').value = 'true';
                        document.getElementById('option2select').value = 'true';
                        document.getElementById('option3select').value = 'true';
                        document.getElementById('option4select').value = 'true';
                    }
                    else {
                        alert("You successfully created this quiz!!");
                        localStorage.removeItem('currentquiz');
                        window.location = 'teacher.html';
                    }
                }

            }
            else {
                alert("Marks field value should be integer..");
            }
        }
        else {
            alert("You leave some fields empty, please fill them..");
        }

    }
    else {
        alert("You successfully created this quiz!!");
        localStorage.removeItem('currentquiz');
        window.location = "teacher.html";
    }
}
