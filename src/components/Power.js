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

const Power = () => {
  return (
    <div>
        <button type="button" className='collapsible'>Power</button>
        <div className='content input-group'>
            <div className='input-field'>
                <div>
                    <span>Small Battery </span>
                    <input type="number" name='quantity' id='quantity' defaultValue={0} />
                </div>
            </div>
            <div className='input-field'>
                <div>
                    <span>Battery </span>
                    <input type="number" name='quantity' id='quantity' defaultValue={0} />
                </div>
            </div>
            <div className='input-field'>
                <div>
                    <span>Reactor </span>
                    <input type="number" name='quantity' id='quantity' defaultValue={0} />
                </div>
            </div>
            <div className='input-field'>
                <div>
                    <span>Solar Pannels </span>
                    <input type="number" name='quantity' id='quantity' defaultValue={0} />
                </div>
            </div>
            <div className='input-field'>
                <div>
                    <span>Hydrogen Engine </span>
                    <input type="number" name='quantity' id='quantity' defaultValue={0} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Power