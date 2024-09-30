function upadateCaseNumber(product, price, isIncreasing){
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
            if(isIncreasing){
                caseNumber = parseInt(caseNumber) + 1;
            }
            
    else if(caseNumber > 0){
           caseNumber = parseInt(caseNumber) - 1;
         }
        
        caseInput.value = caseNumber;
    // update case total 
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
    calculateTotal();
    }


    function getInputvalue(product){
        const productInput = document.getElementById(product + '-number');
        const productNumber = parseInt(productInput.value);
        return productNumber;
    }
    function calculateTotal(){
        const phoneTotal = getInputvalue('phone') * 300;
        const caseTotal = getInputvalue('case') * 200;
        const moongTotal = getInputvalue('moong') * 300;
        const upvasTotal = getInputvalue('upvas') * 300;
        const dalTotal = getInputvalue('dal') * 300;
        const kheerTotal = getInputvalue('kheer') * 300;
        const rotiTotal = getInputvalue('roti') * 300;
        const ravaTotal = getInputvalue('rava') * 100;
        const dosaTotal = getInputvalue('dosa') * 100;
        const poheTotal = getInputvalue('pohe') * 100;
        const idliTotal = getInputvalue('idli') * 100;
        const subTotal = ravaTotal+ dosaTotal+ idliTotal+ poheTotal+ phoneTotal + moongTotal + caseTotal + upvasTotal +dalTotal+kheerTotal+rotiTotal;
        const tax = subTotal / 10;
        const totalPrice = subTotal + tax;

        // update on the html 
        document.getElementById('sub-total').innerText = subTotal;
        document.getElementById('tax-amount').innerText = tax;
        document.getElementById('total-price').innerText = totalPrice;

    }

document.getElementById('dosa-plus').addEventListener('click',function(){
    upadateCaseNumber('dosa',100, true);
});

document.getElementById('dosa-minus').addEventListener('click',function(){
    upadateCaseNumber('dosa',100 , false);
});

document.getElementById('idli-minus').addEventListener('click',function(){
    upadateCaseNumber('idli',100 , false);
});

document.getElementById('idli-plus').addEventListener('click',function(){
    upadateCaseNumber('idli',100, true);
});

document.getElementById('rava-plus').addEventListener('click',function(){
    upadateCaseNumber('rava',100, true);
});

document.getElementById('rava-minus').addEventListener('click',function(){
    upadateCaseNumber('rava',100 , false);
});

document.getElementById('pohe-plus').addEventListener('click',function(){
    upadateCaseNumber('pohe',100, true);
});

document.getElementById('pohe-minus').addEventListener('click',function(){
    upadateCaseNumber('pohe',100 , false);
});

document.getElementById('upvas-plus').addEventListener('click',function(){
        upadateCaseNumber('upvas', 300 ,true);
});

document.getElementById('upvas-minus').addEventListener('click',function(){
   upadateCaseNumber('upvas', 300, false);
});

document.getElementById('moong-plus').addEventListener('click',function(){
    upadateCaseNumber('moong',300, true);
});


document.getElementById('moong-minus').addEventListener('click',function(){
    upadateCaseNumber('moong',300 , false);
});

document.getElementById('kheer-plus').addEventListener('click',function(){
    upadateCaseNumber('kheer',300, true);
});


document.getElementById('kheer-minus').addEventListener('click',function(){
    upadateCaseNumber('kheer',300 , false);
});    

document.getElementById('dal-plus').addEventListener('click',function(){
    upadateCaseNumber('dal',300, true);
});


document.getElementById('dal-minus').addEventListener('click',function(){
    upadateCaseNumber('dal',300 , false);
});

document.getElementById('roti-plus').addEventListener('click',function(){
    upadateCaseNumber('roti',300, true);
});


document.getElementById('roti-minus').addEventListener('click',function(){
    upadateCaseNumber('roti',300 , false);
});

document.getElementById('case-plus').addEventListener('click',function(){
        // const caseInput = document.getElementById('case-number');
        // const caseNumber = caseInput.value;
        // caseInput.value = parseInt(caseNumber) + 1;
   upadateCaseNumber('case', 200 ,true);
});

document.getElementById('case-minus').addEventListener('click',function(){
    // const caseInput = document.getElementById('case-number');
//     const caseNumber = caseInput.value;
//    if(caseInput.value > 1){
//         caseInput.value = parseInt(caseNumber) - 1;
//    }
upadateCaseNumber('case', 200, false);
});

// phone prcie update using add event linstner 
document.getElementById('phone-plus').addEventListener('click',function(){
    upadateCaseNumber('phone',300, true);
});


document.getElementById('phone-minus').addEventListener('click',function(){
    upadateCaseNumber('phone',300 , false);
});