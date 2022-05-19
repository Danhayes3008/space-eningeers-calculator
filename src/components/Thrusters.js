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

const Thrusters = () => {
  return (
    <div>
        <button type="button" className='collapsible'>Thrusters</button>
        <div className='content input-group'>
            <div className='input-field'>
                <div>
                    <span>Small Atmospheric Thrusters </span>
                    <input type="number" name='quantity' id='quantity' defaultValue={0} />
                </div>
            </div>
            <div className='input-field'>
                <div>
                    <span>large Atmospheric Thrusters</span>
                    <input type="number" name='quantity' id='quantity' defaultValue={0} />
                </div>
            </div>
            <div className='input-field'>
                <div>
                    <span>Small Hydrogen Thrusters </span>
                    <input type="number" name='quantity' id='quantity' defaultValue={0} />
                </div>
            </div>
            <div className='input-field'>
                <div>
                    <span>Large Hydrogen Thrusters</span>
                    <input type="number" name='quantity' id='quantity' defaultValue={0} />
                </div>
            </div>
            <div className='input-field'>
                <div>
                    <span>Small Ion Thrusters </span>
                    <input type="number" name='quantity' id='quantity' defaultValue={0} />
                </div>
            </div>
            <div className='input-field'>
                <div>
                    <span>Large Ion Thrusters </span>
                    <input type="number" name='quantity' id='quantity' defaultValue={0} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Thrusters