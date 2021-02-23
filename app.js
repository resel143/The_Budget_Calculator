console.log(2+2);

// step 1 - show hide section 

// get section 

const dropDown1 = document.querySelector('#Monthly-Savings .dropdown');

const dropDown2 = document.querySelector('#Monthly-Expenses .dropdown');

const dropDown3 = document.querySelector('#Annual-Expenses .dropdown');

const dropDown4 = document.querySelector('#Income .dropdown');

const dropDown5 = document.querySelector('#BudgetReview .dropdown');

// create array of dropdowns 

let dropDowns = [dropDown1, dropDown2, dropDown3, dropDown4, dropDown5];

// loops section 
dropDowns.forEach(function(e){
    e.addEventListener('click',()=>{
        // console.log(e.parent Element.parentElement);
        // if(e.parentElement.parentElement.id === 'Monthly-Savings'){
        //     document.querySelectorAll('#Monthly-Savings .form-group').forEach((group)=>{
        //         // console.log(group.classList);
        //         group.classList.toggle('show')
        //     })
        // }else if(e.parentElement.parentElement.id === 'Monthly-Expenses'){
        //     document.querySelectorAll('#Monthly-Expenses .form-group').forEach((group)=>{
        //         // console.log(group.classList);
        //         group.classList.toggle('show')
        //     })
        // }else if(e.parentElement.parentElement.id === 'Annual-Expenses'){
        //     document.querySelectorAll('#Annual-Expenses .form-group').forEach((group)=>{
        //         // console.log(group.classList);
        //         group.classList.toggle('show')
        //     })
        // }else if(e.parentElement.parentElement.id === 'Income'){
        //     document.querySelectorAll('#Income .form-group').forEach((group)=>{
        //         // console.log(group.classList);
        //         group.classList.toggle('show')
        //     })
        // }else if(e.parentElement.parentElement.id === 'BudgetReview'){
        //     document.querySelectorAll('#BudgetReview .form-group').forEach((group)=>{
        //         // console.log(group.classList);
        //         group.classList.toggle('show')
        //     })
        // }
        const dropID = e.parentElement.parentElement.id;
        // console.log(dropID); 

        switch(dropID){
            case "Monthly-Savings": 
                document.querySelectorAll('#Monthly-Savings .form-group').forEach((group)=>{
                            // console.log(group.classList);
                            group.classList.toggle('show');
                });
                break;
            case "Monthly-Expenses": 
                document.querySelectorAll('#Monthly-Expenses .form-group').forEach((group)=>{
                            // console.log(group.classList);
                            group.classList.toggle('show');
                });
                break;
            case "Annual-Expenses": 
                document.querySelectorAll('#Annual-Expenses .form-group').forEach((group)=>{
                            // console.log(group.classList);
                            group.classList.toggle('show');
                });
                break;     
            case "Income": 
                document.querySelectorAll('#Income .form-group').forEach((group)=>{
                            // console.log(group.classList);
                            group.classList.toggle('show');
                });
                break;
            case "BudgetReview": 
                document.querySelectorAll('#BudgetReview .form-group').forEach((group)=>{
                            // console.log(group.classList);
                            group.classList.toggle('show');
                });
                break;
        }
    });
});



// step 2- calculation budget 

// monthly savings 

document.querySelector('body').addEventListener('keyup',calcBudget);

function calcBudget(){
    // Monthly Savings 
    // input 
    const emergencyFund= document.getElementById('EmergencyFund').value;
    const investments = document.getElementById('Investments').value;
    const retirement = document.getElementById('Retirement').value;
    
    // output 
    const outputMS = document.getElementById('Monthly-Savings-Output');
    // console.log(outputMS);

    input = [emergencyFund, investments, retirement];
    let sumMS = 0;
    for(let i=0;i<input.length;i++){
        sumMS= sumMS + Number(input[i]);
        
    }outputMS.innerText = sumMS.toFixed(2);

    // Monthly Expenses 

    const food = document.getElementById('Food').value;
    const clothing = document.getElementById('Clothing').value;
    const shelter = document.getElementById('Shelter').value;
    const household = document.getElementById('Household').value;
    const transportation = document.getElementById('Transportation').value;
    const health = document.getElementById('Health').value;
    const studentLoans = document.getElementById('Student-Loans').value;
    const personal = document.getElementById('Personal').value;
    const miscellaneous = document.getElementById('Miscellaneous').value;

    // output 
    outputME = document.querySelector('#Monthly-Expenses-Output');
    input = [food,clothing,shelter,household,transportation,health,studentLoans, personal, miscellaneous];
    let sumME = 0;
    for(let i= 0;i <input.length ; i++){
        sumME = sumME + Number(input[i]);
        }outputME.innerText = sumME;

    // annual expenses 
    const tuition = document.getElementById('Tuition').value;
    const homeowner = document.getElementById('Homeowner-Rent').value;
    const car = document.getElementById('Car').value;
    const taxes = document.getElementById('Taxes').value;
    const  vacation = document.getElementById('Vacation').value;
    const other = document.getElementById('Other').value;

    // output 

    const outputAE = document.querySelector('#Annual-Expenses-Output');
    input = [tuition, homeowner, car, taxes, vacation, other];

    let sumAE = 0;
    for(let i=0;i<input.length;i++){
        sumAE+=Number(input[i]);
        
    }outputAE.innerText = sumAE.toFixed(2);

    // income 
    const monthlyPay = document.getElementById('Monthly-Pay').value;
    const monthlyOther = document.getElementById('Monthly-Other').value;
    const sideHustle = document.getElementById('Side-Hustle').value;
    const annualTaxReturn = document.getElementById('Tax-return').value;
    
    // output 

    const outputMI = document.querySelector('#Income-Output');
    input = [monthlyPay, monthlyOther, sideHustle, annualTaxReturn];

    let sumMI = 0;
    for(let i=0;i<input.length;i++){
        sumMI+=Number(input[i]);
        
    }outputMI.innerText = sumMI.toFixed(2);

    const budgetReviewBtn = document.querySelector('#budget-review-Btn');

    budgetReviewBtn.addEventListener('click',function(){
        // budget review result 
        const outputTotalMonthlySavings = document.querySelector('#Total-Monthly-Savings');
        const outputTotalMonthlyExpenses = document.querySelector('#Total-Monthly-Expenses');
        const outputTotalAnnualExpenses = document.querySelector('#Total-Annual-Expenses');
        const outputTotalMonthlyIncome = document.querySelector('#Total-Monthly-Income');
        const outputUnderOverBudget = document.querySelector('#Under-Over-Budget');
        // get DOM output Elements
        // get values 
        totalMonthlySavings = parseFloat(outputMS.value);
        totalMonthlyExpenses = parseFloat(outputME.value);
        totalAnnualExpenses = parseFloat(outputAE.value);
        totalMonthlyIncome = parseFloat(outputMI.value);
        // output Results in budget review UI 
        outputTotalMonthlySavings.innerText  = totalMonthlySavings.toFixed(2);
        outputTotalMonthlyExpenses.innerText = totalMonthlyExpenses.toFixed(2);
        outputTotalAnnualExpenses.innerText = (totalAnnualExpenses/12).toFixed(2);
        outputTotalMonthlyIncome.innerText = totalMonthlyIncome.toFixed(2);

        const outputUOB = document.querySelector('#Under-Over_Budget');
        // Calculate the results => output to DOM
        totalIncome = totalMonthlySavings+totalMonthlyIncome;
        totalExpense = (totalMonthlyExpenses+totalAnnualExpenses)/12;  

        outputUOB.innerText = (totalIncome-totalExpense).toFixed(2);
        // change BG color 
            const resultColor = document.querySelectorAll('#BudgetReview .form-group');
            console.log(resultColor[8]);
            if(outputUOB.innerText > '0'){
                resultColor[8].style.backgroundColor = 'green';
            }else{
                resultColor[8].style.backgroundColor = 'red';
            }
    })

}