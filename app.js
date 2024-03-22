



var username = prompt('Enter you name: ');


for(let i=0; i<1; i++){

    if(username == null || username.length == 0){

        username = prompt('You should enter your name: ');
        i--;

    }else{
        break;
    }

}


var userGender = prompt('Enter your gender (male or female):');

for(let e=0; e<1; e++){

    if(userGender == null || (userGender.toLowerCase() != 'male' && userGender.toLowerCase() != 'female')){

        userGender = prompt('You should enter male or female: ');
        e--;
        

    }else{
        break;
    }

}

var userAge = prompt('Enter your Age:');

for(let r=0; r<1; r++){

    if(userAge <= 0){

        userAge = prompt('You should enter a valid age: ');
        r--;

    }else{
        break;
    }

}

var welcomingMessage = confirm('Do you want to see the welcoming message?');

if(welcomingMessage){

    if(userGender === 'male')
    alert('Welcome, Mr. ' + username);
else if(userGender === 'female')
alert('Welcome Ms. ' + username);

}

