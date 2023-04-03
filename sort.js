function swap(a,b){
    let temp=a.style.height;
    a.style.height=b.style.height;
    b.style.height=temp;
    console.log("swapped");
}

function delayTime(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}
let array_size=document.querySelector("#size_input");
array_size.addEventListener('input',function(){
    console.log(array_size.value,typeof(array_size.value));
    createNewArray(parseInt(array_size.value));
    console.log('hi')
});
let delay=260;
let delayEle=document.querySelector("#speed_input");
delayEle.addEventListener("input",function(){
    delay=320-parseInt(delayEle.value);
});
let bar_array=[];
createNewArray();
function createNewArray(n=60){
    removeArray();
    bar_array=[];
    for(let i=0;i<n;i++){
        bar_array.push(Math.floor(Math.random()*255));
        
    }
    console.log(bar_array);
    const bars=document.querySelector("#sorting");
    for (let i=0;i<n;i++){
        const bar=document.createElement("div");
        console.log(bar.outerHTML);
        bar.style.height=`${bar_array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`n${i}`);
        bars.appendChild(bar);       
}
}
function removeArray(){
    const bar=document.querySelector("#sorting");
    bar.innerHTML="";
}

const newButton=document.querySelector(".new");
newButton.addEventListener('click',function(){
    clickedStop=false;
    onSpeedSlider();
    onSortButton();
    onSizeSlider();
    createNewArray(array_size.value);
});
const stopButton=document.querySelector(".stop");
stopButton.addEventListener("click",function(){
    offSortButton();
    offSizeSlider();
    clickedStop=true;
})
function onSpeedSlider(){
    document.querySelector("#speed_input").disabled=false;

};
function onSizeSlider(){
    document.querySelector("#size_input").disabled=false;
};
function offSizeSlider(){
    document.querySelector("#size_input").disabled=true;

}
function offSpeedSlider(){
    document.querySelector("#speed_input").disabled=true;

}
function offSortButton(){
    document.querySelector(".bubble").disabled=true;
    document.querySelector(".selection").disabled=true;
    document.querySelector(".merge").disabled=true;
    document.querySelector(".quick").disabled=true;
};
function onSortButton(){
    document.querySelector(".bubble").disabled=false;
    document.querySelector(".selection").disabled=false;
    document.querySelector(".merge").disabled=false;
    document.querySelector(".quick").disabled=false;

};
function offNewarray(){
    document.querySelector(".new").disabled=true;
};
function onNewarray(){
    document.querySelector(".new").disabled=false;
};
function offStopButton(){
    document.querySelector(".stop").disabled=true;
};
function onStopButton(){
    document.querySelector(".stop").disabled=false;
};


