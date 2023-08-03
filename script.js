// Get user input element
let userDate = document.getElementById("date");

// Disable future date selection
userDate.max = new Date().toISOString().split("T")[0];

function calculateAge(){
    // Get user output element
    let userAge  = document.getElementById("age");
    userAge.innerHTML = "";

    let birthDate  = new Date(userDate.value);
    if(birthDate == "Invalid date"){
        let userError  =  document.getElementById("error");

        //To show error message
        userError.innerHTML = "Date is invalid*";
    }
    else{
        let userError  =  document.getElementById("error");

        //To remove error message
        userError.innerHTML = "";

        // Separating user Birthday

        let userDay = birthDate.getDate();
        let userMonth = birthDate.getMonth() + 1;
        let userYear = birthDate.getFullYear();
        
        // Get current date
        let todayDate = new Date();

        //Separating today's date
        let todayDay = todayDate.getDate();
        let todayMonth = todayDate.getMonth() + 1;
        let todayYear = todayDate.getFullYear();

        // Calculating to get the age
        let ageDay, ageMonth, ageYear;

        // Get yeat
        ageYear = todayYear -userYear;
        // Get Month
        if(todayMonth >= userMonth){
            ageMonth = todayMonth - userMonth;
        }
        else{
            ageYear--;
            ageMonth = 12 + todayMonth - userMonth;
        }

        // Get Day
        if(todayDay >= userday){
            ageDay = todayDay - userDay;
        }else{
            ageMonth --;
            ageDay = getDaysInMonth(userYear, userMonth) + today -userDay;
        }

    }

}

function getDaysInMonth(){
    
}