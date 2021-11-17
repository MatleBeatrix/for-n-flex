const generateArray = function (amount){
    let returnArray = [];

    /*
    let amountConverted = parseInt(amount);
    amount = amountConverted;
    */
   amount = parseInt(amount);
   /*
   console.log(amount);
   console.log(typeof amount);
    */

   //Number.isNaN(amount) !== true
    if (!Number.isNaN(amount)) {
        for (let i = 0; i < amount; i++) {
            returnArray.push(`${i}`);
            //console.log(returnArray);
        }  
    } else {
        returnArray.push("error");
    }

    //console.log(returnArray);
    return returnArray;
};


function loadEvent(cardnumber) {
    document.getElementById("winWindow").classList.remove("win");
    document.getElementById("winWindow").classList.add("notwin");

    const root = document.getElementById("root");
    const list = generateArray(cardnumber);
 
    const elements = document.getElementsByClassName("card");
    while (elements.length > 0) elements[0].remove();

    if (list[0] !== "error") {
        let random = Math.floor(Math.random() * cardnumber).toString();
        for (const item of list) {

            if (item === random){
                root.insertAdjacentHTML("beforeend",`
                <div id="good" class="card">
                <h1>${item}</h1>
                <img class="imagine" src="/src/happy.png" alt="logo">
                </div>
                `);
            }
            else{
                root.insertAdjacentHTML("beforeend",`
                <div class="card">
                <h1>${item}</h1>
                <img class="imagine" src="/src/sad.png" alt="logo">
                </div>
                `);

            }
        }
    }

    if (document.getElementById("good") !== null){
        document.getElementById("good").addEventListener("click", function(){
            document.getElementById("winWindow").classList.remove("notwin");
            document.getElementById("winWindow").classList.add("win");
            //button.classList.add("clicked");
        })
    };

 
    document.getElementById("winbutton").addEventListener("click", function(){
        document.getElementById("winWindow").classList.remove("win");
        document.getElementById("winWindow").classList.add("notwin");
            //button.classList.add("clicked");
    })

    /*
    if (document.getElementById("good") !== null){
        console.log("not null");
        document.getElementById("good").addEventListener("click", function(){
            console.log("Click");
            root.insertAdjacentHTML("beforeend",`
            <div id="winWindow" class="win">
            <h1>Nyertél</h1>
            <button type="button" id="winbutton">Ok</button>
            </div>
            `);
        })
    }
*/

}

//window.addEventListener("load", loadEvent);

window.addEventListener("load", function(){ 
    let number = 0;

    document.getElementById("numberbutton").addEventListener("click", function() {      
        number = document.getElementById("maxnumber").value;
        console.log(typeof number)
        loadEvent(number);
     })

     console.log(document.getElementById("good"));

})