        function signUp(){
        
        var parent = document.getElementById('myDiv');
        parent.innerHTML="";

        var headingElement=document.createElement('h1');
        headingElement.setAttribute('id','heading');
        var headingTxt=document.createTextNode('Signup Form');
        headingElement.appendChild(headingTxt);

        var nameLabel=document.createElement('label');
        var nameTxt=document.createTextNode('Name: ');
        var nameField = document.createElement('input');
        nameField.setAttribute('type','text');
        nameField.setAttribute('id','name');
        nameField.setAttribute('class','fields');
        nameField.setAttribute('name','name');
        nameLabel.appendChild(nameTxt);
        nameLabel.appendChild(nameField);

        var emailLabel=document.createElement('label');
        var emailTxt=document.createTextNode('Email: ');
        var emailField = document.createElement('input');
        emailField.setAttribute('type','email');
        emailField.setAttribute('id','email');
        emailField.setAttribute('class','fields');
        emailField.setAttribute('name','email');
        emailLabel.appendChild(emailTxt);
        emailLabel.appendChild(emailField);

        var passwordLabel=document.createElement('label');
        var passwordTxt=document.createTextNode('Password: ');
        var passwordField = document.createElement('input');
        passwordField.setAttribute('type','password');
        passwordField.setAttribute('id','password');
        passwordField.setAttribute('class','fields');
        passwordField.setAttribute('name','password');
        passwordLabel.appendChild(passwordTxt);
        passwordLabel.appendChild(passwordField);

        var desgLabel=document.createElement('label');
        var desgTxt=document.createTextNode('Designation: ');

        var desgField = document.createElement('select');
        desgField.setAttribute('id','designation');
        desgField.setAttribute('class','fields');
        var opt1Field = document.createElement('option');
        opt1Field.setAttribute('value','Teacher');
        var opt1Txt = document.createTextNode('Teacher');
        opt1Field.appendChild(opt1Txt);

        var opt2Field = document.createElement('option');
        opt2Field.setAttribute('value','Student');
        var opt2Txt = document.createTextNode('Student');
        opt2Field.appendChild(opt2Txt);

        desgField.appendChild(opt1Field);
        desgField.appendChild(opt2Field);
        desgLabel.appendChild(desgTxt);
        desgLabel.appendChild(desgField);
        

        var mybutton= document.createElement('button');
        var mybuttonTxt = document.createTextNode('SignUp');
        mybutton.setAttribute('onclick','register()');
        mybutton.setAttribute('id','submitbutton');
        mybutton.appendChild(mybuttonTxt);

        parent.appendChild(headingElement);
        parent.appendChild(nameLabel);
        var breakLine1 = document.createElement('br');
        parent.appendChild(breakLine1);
        parent.appendChild(emailLabel);
        var breakLine2 = document.createElement('br');
        parent.appendChild(breakLine2);
        parent.appendChild(passwordLabel);
        var breakLine3 = document.createElement('br');
        parent.appendChild(breakLine3);
        parent.appendChild(desgLabel);
        var breakLine4 = document.createElement('br');
        parent.appendChild(breakLine4);
        parent.appendChild(mybutton);
        }

        function signIn(){
        var parent = document.getElementById('myDiv');
        parent.innerHTML="";

        var headingElement=document.createElement('h1');
        headingElement.setAttribute('id','heading');
        var headingTxt=document.createTextNode('Login Form');
        headingElement.appendChild(headingTxt);

        var emailLabel=document.createElement('label');
        var emailTxt=document.createTextNode('Email: ');
        var emailField = document.createElement('input');
        emailField.setAttribute('type','email');
        emailField.setAttribute('id','email');
        emailField.setAttribute('class','fields');
        emailField.setAttribute('name','email');
        emailLabel.appendChild(emailTxt);
        emailLabel.appendChild(emailField);

        var passwordLabel=document.createElement('label');
        var passwordTxt=document.createTextNode('Password: ');
        var passwordField = document.createElement('input');
        passwordField.setAttribute('type','password');
        passwordField.setAttribute('id','password');
        passwordField.setAttribute('class','fields');
        passwordField.setAttribute('name','password');
        passwordLabel.appendChild(passwordTxt);
        passwordLabel.appendChild(passwordField);

        var mybutton= document.createElement('button');
        var mybuttonTxt = document.createTextNode('Login');
        mybutton.setAttribute('onclick','login()');
        mybutton.setAttribute('id','submitbutton');
        mybutton.appendChild(mybuttonTxt);

        parent.appendChild(headingElement);
        parent.appendChild(emailLabel);
        var breakLine2 = document.createElement('br');
        parent.appendChild(breakLine2);
        parent.appendChild(passwordLabel);
        var breakLine3 = document.createElement('br');
        parent.appendChild(breakLine3);
        parent.appendChild(mybutton);
        }

function register(){
    var userName = document.getElementById("name").value;
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    var userDesignation = document.getElementById("designation").value;

    if((!(userName===""))&&(!(userEmail===""))&&(!(userPassword===""))){
            var users = localStorage.getItem("users");
            if(users !== null){
                users = JSON.parse(users);
            }
            else if (users === null){
                users=[];
            }
            if(users.length===0){
                var user ={
                name : userName,
                email: userEmail,
                password : userPassword,
                designation : userDesignation
            };
            users.push(user);
            users = JSON.stringify(users);
            localStorage.setItem('users',users);
		    alert("User Registered Successfully!");
            window.location.reload();
        }
        else if(users.length>0){
            var flag=true;
            for(var i=0;i<users.length;i++){
                if(users[i].email===userEmail){
                    flag=false;
                }
            }
            if(flag){
                var user ={
                name : userName,
                email: userEmail,
                password : userPassword,
                designation : userDesignation
            };
            users.push(user);
            users = JSON.stringify(users);
            localStorage.setItem('users',users);
		    alert("User Registered Successfully!");
            window.location.reload();
        }
        else{
            alert('This email is already have an account,Please try different');
        }
        }

    }
    else{
        alert('You leave some fields empty please fill them first!');
    }
}

function login(){
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;

    if((!(userEmail===""))&&(!(userPassword===""))){
                    var userLogin;
            var userDesg;
            var users = localStorage.getItem("users");
            if(users !== null){
                users = JSON.parse(users);
            }
            else if (users == null){
                users=[];
            }
            var authentication=false;

            for(var i=0; i< users.length;i++){
                if(users[i].email === userEmail && users[i].password === userPassword)
                {
                    userDesg=users[i].designation;
                    userLogin=users[i];
                    userLogin=JSON.stringify(userLogin);
                    authentication=true;
                }
            }

            if(authentication == true){
                localStorage.setItem('userLogin',userLogin);
                if(userDesg==="Teacher"){
                    window.location="teacher.html"
                }
                else if(userDesg==="Student"){
                    window.location="student.html"
                }

            }
            else{
                alert("Login failed");
            }
    }
    else{
        alert('You leave some fields empty please fill them first!');
    }

}