// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
   var random1 = document.getElementById("number1")
    var random2 = document.getElementById("number2")  
    var random3 = document.getElementById("number3")

 var numb3 
let score=0

    var number1 
    var number2 

   function random(){
     number1 = Math.round(Math.random()*100)
     number2 = Math.round(Math.random()*100)
    
     if (number1<number2){
        var temp1 = number1 
        number1 = number2
        number2= number1 
     }

    var operator = Math.round(Math.random()*5)
   

    //console.log(operator) 

    switch (operator) {
        case 1 :
        numb3=number1 + number2 ;
        break ;

        case 2 :
        numb3=number1-number2 ;
        break ;

        case 3:
        numb3 = number1*number2 ;
         break;

        case 4:
        numb3=Math.round(number1/number2)
           break ;


        case 5:
            numb3 = number1%number2
           break ;

            case 0 :
                random()
             }
   
             random1.innerText = number1 
             random2.innerText = number2 
              random3.innerText = numb3 

             //number3.innerText = numb3 

            }


random()   

   let addition = document.getElementById("plus")
    addition.onclick = add 
    function add() {
        if(number1+number2 == numb3) {
            score++ 
            random()
        } else {
            location.href = "gameover.html?score=" +score ;
        }
    } 



   let Subtraction = document.getElementById("minus")
    Subtraction.onclick =  ()=> {
        if(number1-number2 == numb3) {
            score++ 
            random()
        } else {
            location.href = "gameover.html?score=" +score ;
        }
    }


   let Multiplication = document.getElementById("mul")
   Multiplication.onclick =  ()=> {
    if(number1*number2 == numb3) {
        score++ 
        random()
    } else {
        location.href = "gameover.html?score=" +score ;
    }
}

   let Division = document.getElementById("divide")
   Division.onclick =  ()=> {
    if(number1/number2 == numb3) {
        score++ 
        random()
    } else {
        location.href =  "gameover.html?score=" +score ;
    }
}


   let Modulus = document.getElementById("modulus") 
   Modulus.onclick =  ()=> {
    if(number1%number2 == numb3) {
        score++ 
        random()
    } else {
        location.href = "gameover.html?score=" +score ;
    }
}





   //let random2 = document.getElementById("number-2")
   //random2.onclick = random 

// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional
