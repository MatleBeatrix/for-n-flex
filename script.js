function generateNull(maxLength, item){
    let string = "";
    
    for (let i = 0; i < maxLength.toString().length - item.toString().length; i++) {
             string += "0";
    }
    
    return string;
}


const generateArray = function (amount){
    let returnArray = [];
    amount = parseInt(amount);

    if (!Number.isNaN(amount)) {
        for (let i = 0; i < amount; i++) {
            returnArray.push(`${generateNull(amount, i)}${i}`);
        }  
    } else {
        returnArray.push("error");
    }
    return returnArray;
};


function loadEvent() {
    const root = document.getElementById("root");
    const list = generateArray(1001);
    if (list[0] !== "error") {
        for (const item of list) {
            root.insertAdjacentHTML("beforeend",`<div>${item}</div>`);
        }
    }
}

window.addEventListener("load", loadEvent);
