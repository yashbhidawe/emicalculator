const loanAmt = document.getElementById('loanAmt');
const loanTenure = document.getElementById('loanTenure');
const intrestRate = document.getElementById(`intrestRate`);

// console.log(intrestRate);

// variables to show the calculations
const loanEMI = document.querySelector('.loanEMI');
const loanPrinciple = document.querySelector('.loanPrinciple');
const loanIntrestRate = document.querySelector('.loanIntrestRate');
const loanTotal = document.querySelector('.loanTotal');

const calculateBtn = document.getElementById('calculateBtn');



calculateBtn.addEventListener('click', function(){
amt = Number(loanAmt.value ) * 1;
console.log(amt);

tenure = Number(loanTenure.value) *12;
console.log(tenure);
rate = Number(intrestRate.value)/12/100;
console.log(rate);

emi = (amt * rate * (1 + rate)** tenure) / ((1+rate) ** tenure -1);

total = emi * tenure;
// console.log(typeof total);
// console.log(typeof emi);
// console.log(typeof tenure);

interest = total - amt;
// console.log(typeof total);
loanEMI.innerHTML = Math.floor(emi);
loanPrinciple.innerHTML = Math.floor(amt);
loanTotal.innerHTML = Math.floor(total);
loanIntrestRate.innerHTML = Math.floor(interest);



//loanChart
let xValues = ["Principle", "Interest"];
let yValues = [amt, Math.floor(interest)];
let barColors =["#962351", "#000000"];

new Chart("loanChart", {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [
            {
                backgroundColor: barColors,
                data: yValues
            }
        ]
    },
    options: {
        title: {
            display: false
        }
    }
})
})