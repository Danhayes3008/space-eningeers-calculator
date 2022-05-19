import React from 'react'

var col = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < col.length; i++){
    col[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if(content.style.display === "block"){
            content.style.display = "none";
        }else{
            content.style.display = "block";
        }
    });
}

function Containers() {
    return (

        <div>
            <button type="button" className='collapsible'>Containers</button>
            <div className='content input-group'>
                <div className='input-field'>
                    <div>
                        <span>large Cargo Containers </span>
                        <input type="number" name='quantity' id='quantity' defaultValue={0} />
                    </div>
                </div>
                <div className='input-field'>
                    <div>
                        <span>Medium Cargo Containers </span>
                        <input type="number" name='quantity' id='quantity' defaultValue={0} />
                    </div>
                </div>
                <div className='input-field'>
                    <div>
                        <span>Small Cargo Containers </span>
                        <input type="number" name='quantity' id='quantity' defaultValue={0} />
                    </div>
                </div>
                <div className='input-field'>
                    <div>
                        <span>Small Hydrogen Tank </span>
                        <input type="number" name='quantity' id='quantity' defaultValue={0} />
                    </div>
                </div>
                <div className='input-field'>
                    <div>
                        <span>Medium Hydrogen Tank </span>
                        <input type="number" name='quantity' id='quantity' defaultValue={0} />
                    </div>
                </div>
                <div className='input-field'>
                    <div>
                        <span>Large Hydrogen Tank </span>
                        <input type="number" name='quantity' id='quantity' defaultValue={0} />
                    </div>
                </div>
                <div className='input-field'>
                    <div>
                        <span>Oxygen Tank </span>
                        <input type="number" name='quantity' id='quantity' defaultValue={0} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Containers