let checkBoxes = document.querySelectorAll(".item_checkbox");
let checkAll = document.querySelector(".checkall");
let items = document.querySelectorAll(".item");
let deleteAll = document.querySelector(".delete_all");


checkAll.addEventListener("click",function(){
     checkBoxes.forEach(element => {
         element.checked=checkAll.checked;
     });
     upDatePrice();
 });
for(let i = 0; i < checkBoxes.length; i++){
    checkBoxes[i].addEventListener("click",function(){
        let isture = true
        for(let j = 0; j < checkBoxes.length; j++){
            if(!checkBoxes[j].checked){
                isture=false;
                break;
            }
        }
        checkAll.checked=isture;
        upDatePrice();
        // console.log(checkBoxes[i].checked);
    });
}

function upDatePrice(){
    let totalNum = 0;
    let totalPrice = 0;
    items.forEach(item => {
        if(item.querySelector('.item_checkbox').checked){
			let num  = item.querySelector('.num').value;
			totalNum = totalNum + parseInt(num);
			let price = item.querySelector('.price_2').getAttribute('data-price');
			totalPrice = totalPrice + parseFloat(price) * num;
        }
    }); 
    document.querySelector('.checked_num').innerText = totalNum;
	document.querySelector('.total_price').innerText = totalPrice;
}

items.forEach(item => {
    let plus = item.querySelector('.num_plus');
    let minus = item.querySelector('.num_minus');
    let deleteItem = item.querySelector('.delete_item');


    plus.addEventListener('click',function(){
        let num = item.querySelector('.num').value;
        item.querySelector('.num').value = parseInt(num) +1;
        upDatePrice();
    });
    minus.addEventListener('click',function(){
        if( num = item.querySelector('.num').value>1){
            let num = item.querySelector('.num').value;
            item.querySelector('.num').value = parseInt(num) -1;
            upDatePrice();
        }
    });   
    deleteItem.addEventListener('click',function(){
        item.remove(item);
		checkBoxes = document.querySelectorAll(".item_checkbox");
		items = document.querySelectorAll('.item');
        upDatePrice();
    });
}); 

deleteAll.addEventListener('click',function(){
    items.forEach(element => {
        let item_checkbox = element.querySelector('.item_checkbox');
        if(item_checkbox.checked){
            element.remove(element);
        }
        checkBoxes = document.querySelectorAll(".item_checkbox");
        items = document.querySelectorAll('.item');
        upDatePrice();
    });
});










// checkBoxes.array.forEach(e => {
//     e.onclick = function(){
//         if (e.checked){
//             e.checked = disabled;   
//         }
//         console.log(e.checked);
//     }
// });
