
     let fname=document.getElementById('name');
    let email=document.getElementById('email');
    let place=document.getElementById('wh');
    let travlers=document.getElementById('hmt');
    let days=document.getElementById('num');
    let details=document.getElementById('md');
    let submit=document.getElementById('submit');
    let claints;




    if(localStorage.myClaints!=null){
        claints= JSON.parse(localStorage.myClaints)
    }else{
        claints=[]
    }


    submit.onclick = function(){
        let nClaint={
            fullname: fname.value,
            email: email.value,
            place: place.value,
            travlers: travlers.value,
            days: days.value,
            details: details.value,
        }
        claints.push(nClaint)
        localStorage.setItem("myClaints", JSON.stringify(claints))
        clearData()
    }

    function clearData(){
        fname.value= '';
        email.value= '';
        place.value= 'where to Go'; 
        travlers.value= '';
        days.value= '';
        details.value= '';
    }



