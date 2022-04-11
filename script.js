window.onload=function(){
    let grid = document.querySelector("#grid");
    let color="black";
    let invColor="white"; 
    let tempColor=color;
    let eraseBool=false;
    const slider = document.getElementById("myRange");
    let size = slider.value;

    makeGrid(grid,color,size);
    
    const invbtn = document.querySelector("#inverse");
    invbtn.addEventListener("click",()=>{
        if(eraseBool)eraseBool=!eraseBool;
        changeEraserColor(eraseBool);
        if(color==invColor)color=tempColor;
        let temp=color;
        color=invColor;
        invColor=temp;
        tempColor=color;
        grid.style.backgroundColor=invColor;
        makeGrid(grid,color,size);
    });
    const eraser = document.querySelector("#eraser");
    eraser.addEventListener("click",()=>{
        eraseBool=!eraseBool;
        changeEraserColor(eraseBool);
        if(color==invColor){
            color=tempColor; 
        }else{
            color=invColor;
        }
        const tiles = document.querySelectorAll(".cell");
        tiles.forEach((tile)=>{
            tile.addEventListener("mouseover",(e)=>{
                e.target.style.backgroundColor=color;
            });
        });
    });

    const clearbtn = document.querySelector("#clear");
    clearbtn.addEventListener("click",
    ()=>{
        const tiles = document.querySelectorAll(".cell");
        tiles.forEach((tile)=>tile.style.backgroundColor=invColor);
    });

    slider.oninput = function() {
        if(eraseBool)eraseBool=!eraseBool;
        changeEraserColor(eraseBool);
        size=slider.value;
        if(color==invColor)color=tempColor;
        makeGrid(grid,color,size);
    }
    

};

function makeGrid(grid,color,size){
    clearAll();
    grid.style.setProperty("--n", size);
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("cell");
        div.style.borderColor=color;
        div.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor=color;
        });
        grid.appendChild(div);
}
}

function clearAll(){
    var e = document.querySelector("#grid");
    let child = e.lastElementChild; 
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
}

function changeEraserColor(eraseBool){
    let eraser = document.querySelector("#eraser");
    if(eraseBool){
        eraser.style.backgroundColor="red";
    }else {
        eraser.style.backgroundColor="blue";
    }
}