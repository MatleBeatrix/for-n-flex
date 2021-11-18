const generateArray = function (amount){
    let returnArray = [];
    amount = parseInt(amount);

    if (!Number.isNaN(amount)) {
        for (let i = 0; i < amount; i++) {
            returnArray.push(`${i}`);
        }  
    } else {
        returnArray.push("error");
    }
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
                <img class="image" src="/src/happy.png" alt="logo">
                </div>
                `);
            }
            else{
                root.insertAdjacentHTML("beforeend",`
                <div class="card">
                <h1>${item}</h1>
                <img class="image" src="/src/sad.png" alt="logo">
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
    })
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