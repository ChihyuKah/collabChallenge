(function () {
    let num1 = document.getElementById('number1').innerHTML;
    let num2 = document.getElementById('number2').innerHTML;
    let num3 = document.getElementById('number3').innerHTML;

    console.log(num1,num2,num3);
    let current = 0;
    let interval = 0;
    const callback = () => {
        let nextcount = current++;
        console.log(nextcount);
        if (nextcount == 9) {
            clearInterval(interval)
        }
    }

    interval = setInterval(callback,50,0);


    // function countNumber(){
    //     let testnumber = document.getElementById("numberSpecific").innerHTML;
    //     let current = 0;
    //     let interval = null;
    //     const callback = () => {
    //         let nextcount = current++;
    //         console.log(nextcount);
    //         if (nextcount == testnumber) {
    //             clearInterval(interval)
    //         }
    //     }
    //     interval = setInterval(callback,0,1);
    //
    //
    //
    // }
})();



// testnumber.innerHTML = "leylowmo";




