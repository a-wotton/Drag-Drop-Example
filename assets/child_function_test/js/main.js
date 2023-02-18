//FOR BOTH DIVS

let parentDiv = document.querySelectorAll(".test");

function childCheck() {
    if (this.children.length > 0) {    
        console.log("has child nodes");
    } else {
        console.log("does not have child nodes");
    }
}

parentDiv.forEach(div => div.addEventListener("click", childCheck));

//FOR A SINGLE ID

// let parentDiv = document.querySelector("#container1");

// function childCheck() {
//     if (parentDiv.children.length > 0) {    
//         console.log("has child nodes");
//     } else {
//         console.log("does not have child nodes");
//     }
// }

// parentDiv.addEventListener("click", childCheck);


