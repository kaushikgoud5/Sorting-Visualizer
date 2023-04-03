let clickedStop = new Boolean(false);
async function bubble(){
    const num=document.querySelectorAll(".bar");
    console.log("bubble");
    for(let i=0;i<num.length-1;i++){
        for(let j=0;j<num.length-i-1;j++){
            
            if(clickedStop==true){
                console.log("inside")
                return;
            }
            num[j].style.background="cyan";
            num[j+1].style.background="cyan";
            if(parseInt(num[j].style.height) > parseInt(num[j+1].style.height)){
                await delayTime(delay);
                swap(num[j], num[j+1]);
                console.log("hiiiii");
            }
            
            num[j].style.background="lightgreen";
            num[j+1].style.background="lightgreen";
        }
        num[num.length-i-1].style.background="green";
    }
    
        num[0].style.background="green";
    
};



const simulateBtn=document.querySelector(".simulate");
simulateBtn.addEventListener("click",async function(){
    console.log("clicked")
    clickedStop=false;
    offNewarray();
    offSortButton();
    offSizeSlider();
    onStopButton();
    await bubble();
    if(clickedStop==true){
        offSpeedSlider();
    }
    else{
        onSortButton();
        onSizeSlider();
    }
    onNewarray();
    offStopButton();
});