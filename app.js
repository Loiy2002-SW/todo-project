



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

// Lab 5 addition

var questions = [
'Would you like to receive notifications for upcoming tasks? (Yes or NO)',
'Do you want to set reminders for important tasks? (Yes or NO)',
'Should we automatically save your to-do list locally for easy access? (Yes or NO)'
];


displayAnswers(askQuestions(questions));





function askQuestions(questionsArr){

    
let answers = ['Invalid', 'Invalid', 'Invalid'];

    for (let i = 0; i < questionsArr.length; i++) {
    
        var answer = prompt(questionsArr[i]);
    
        if(answer != null && (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'no')){
            answers[i] = answer;
        }
        
    }

    return answers

}

function displayAnswers(answerArr){


    console.log('The user answers: ' + answerArr);


}






