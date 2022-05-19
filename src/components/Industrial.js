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

const Industrial = () => {
  return (
    <div>
        <button type="button" className='collapsible'>Industrial</button>
        <div className='content input-group'>
            <div className='input-field'>
                <div>
                    <span>Basic Refinery </span>
                    <input type="number" name='quantity' id='quantity' defaultValue={0} />
                </div>
            </div>
            <div className='input-field'>
                <div>
                    <span>Advance Refinery </span>
                    <input type="number" name='quantity' id='quantity' defaultValue={0} />
                </div>
            </div>
            <div className='input-field'>
                <div>
                    <span>Basic Assembler </span>
                    <input type="number" name='quantity' id='quantity' defaultValue={0} />
                </div>
            </div>
            <div className='input-field'>
                <div>
                    <span>Advance Assembler </span>
                    <input type="number" name='quantity' id='quantity' defaultValue={0} />
                </div>
            </div>
            <div className='input-field'>
                <div>
                    <span>O2/H2 Generator </span>
                    <input type="number" name='quantity' id='quantity' defaultValue={0} />
                </div>
            </div>
            <div className='input-field'>
                <div>
                    <span>Oxygen Farm </span>
                    <input type="number" name='quantity' id='quantity' defaultValue={0} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Industrial