import React from 'react'

let smallGrid = document.getElementById("small-grid");
let largeGrid = document.getElementById("large-grid");

smallGrid.onchange = () => {
    if(smallGrid.checked){
        largeGrid.checked = false;
    }
}
largeGrid.onchange =() => {
    if(largeGrid.checked){
        smallGrid.checked = false;
    }
}

const GridSize = () => {

  return (
    <div>
        <span>
            <label for="small-grid">small grid</label>
            <input type="checkbox" id='small-grid' name='gridSize' value='small-grid' />
        </span>
        <span>
            <label for="large-grid">large grid</label>
            <input type="checkbox" id='large-grid' name='gridSize' value='large-grid' />
        </span>
    </div>
  )
}

export default GridSize