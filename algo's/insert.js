async function insertion(){
    const ele = document.querySelectorAll(".bar");
    ele[0].style.background = 'green';
    for(let i = 1; i < ele.length; i++){
        if(clickedStop==true){
            return;
        }
        let j = i - 1;
        let key = ele[i].style.height;
        ele[i].style.background = 'blue';

        await delayTime(delay);
        if(clickedStop==true){
            return;
        }

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            if(clickedStop==true){
                return;
            }
            ele[j].style.background = 'blue';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await delayTime(delay);
            if(clickedStop==true){
                return;
            }
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
            }
        }
        ele[j + 1].style.height = key;
        ele[i].style.background = 'green';
    }
}

    const simulateBtn=document.querySelector(".simulate");
    simulateBtn.addEventListener("click",async function(){
        console.log("insert")
        clickedStop=false;
        offNewarray();
        offSortButton();
        offSizeSlider();
        onStopButton();
        await insertion();
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