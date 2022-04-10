window.onload=function(){
    let grid = document.querySelector("#grid");
    let color="black";
    let invColor="white"; 
    const slider = document.getElementById("myRange");
    let size = slider.value;

    makeGrid(grid,color,size);
    
    const invbtn = document.querySelector("#inverse");
    invbtn.addEventListener("click",()=>{
        let temp=color;
        color=invColor;
        invColor=temp;
        grid.style.backgroundColor=invColor;
        makeGrid(grid,color,size);
    });

    const clearbtn = document.querySelector("#clear");
    clearbtn.addEventListener("click",
    ()=>{
        const tiles = document.querySelectorAll(".cell");
        tiles.forEach((tile)=>tile.style.backgroundColor=invColor);
    });

    slider.oninput = function() {
        size=slider.value;
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