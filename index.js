let name1='';

let partner='';

let sbtbtn=document.querySelector('.submit-btn');

let array1= '';

let array2 = '';

function submit(){
    name1=document.querySelector('.name').value;

    partner=document.querySelector('.partner-name').value;

    
    

    array1 = name1.split("");
    

    array2 = partner.split("");
   

    for(let i=0 ;i<array1.length;i++ ){

        for(let x=0;x<array2.length;x++){
            if(array1[i]===array2[x]){
                array1.splice(i,1);
                array2.splice(x,1);
            }
        }
        
        console.log(array1);
        console.log(array2);
        
        }

        let remaininglength = array1.length + array2.length;

    
    let flames = ["Friends", "Love", "Affection", "Marriage", "Enemy", "Siblings"];

        while (flames.length > 1) {
            let index = (remaininglength % flames.length) - 1;
            if (index >= 0) {
                flames.splice(index, 1);
            } else {
                flames.splice(flames.length - 1, 1);
            }
        }
        
        let relationship = flames[0];
            console.log("Relationship:", relationship);
            document.querySelector('.display').innerText=`${relationship}`;
        
        
        
        

}

sbtbtn.addEventListener("click",submit);















