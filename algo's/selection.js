async function select(){
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++){
        if(clickedStop==true){
            return;
        }
        let min_index = i;
        ele[i].style.background = 'lightgreen';
        for(let j = i+1; j < ele.length; j++){
            if(clickedStop==true){
                return;
            }
            // Change color of current bar
            ele[j].style.background = 'cyan';

            await delayTime(delay);
            if(clickedStop==true){
                return;
            }
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                if(min_index !== i){
                    // new min_index is found so change prev min_index color back to normal
                    ele[min_index].style.background = '#e43f5a';
                }
                min_index = j;
            } 
            else{
                // if the currnent comparision is more than min_index change is back to normal
                ele[j].style.background = '#e43f5a';
            }   
        }
        await delayTime(delay);
        if(clickedStop==true){
            return;
        }
        swap(ele[min_index], ele[i]);
        // change the min element index back to normal as it is swapped 
        ele[min_index].style.background = '#e43f5a';
        // change the sorted elements color to green
        ele[i].style.background = 'green';
    }
}
    




const simulateBtn=document.querySelector(".simulate");
simulateBtn.addEventListener("click",async function(){
    console.log("selectsort")
    clickedStop=false;
    offNewarray();
    offSortButton();
    offSizeSlider();
    onStopButton();
    await select();
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