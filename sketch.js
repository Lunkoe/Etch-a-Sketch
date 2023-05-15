// container creation
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// grid size
// const grid = prompt("Choose a grid value");
const button = document.querySelector("button");
button.addEventListener("click", gridSize);

function gridSize() {
    grid = prompt("Choose a grid value");

    if (document.contains(document.querySelector(".tile"))) {
        document.querySelectorAll(".tile").forEach(tile => tile.remove());
    }

    // tile creation
    for (let i = 0; i < grid ** 2; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.style.cssText = `height : calc(70vh / ${grid}); width : calc(70vh / ${grid})`;
        tile.addEventListener("mouseover", colorChange);
        container.appendChild(tile);
    }
}

// changing color of tile on mouseover
function colorChange() {

    if (!this.style.backgroundColor) {

        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);

        this.style.backgroundColor = `rgb(${r},${g},${b})`;
        this.setAttribute("regressingcolor", [r * .2, g * .2, b * .2]);
        this.setAttribute("currentcolor", [r, g, b]);

    } else {
        temp = this.getAttribute("currentcolor").split(",");
        temp2 = this.getAttribute("regressingcolor").split(",");

        temp.forEach((element, index) => temp[index] = Math.floor(element - temp2[index]));

        this.setAttribute("currentcolor", temp);
        this.style.backgroundColor = `rgb(${temp[0]},${temp[1]},${temp[2]})`;

        console.log(this.style.backgroundColor);
    }
}

