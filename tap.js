
for(let i=0; i<3 ; i++){
    $('.tab-button').eq(i).on('click',()=>{
        $('.tab-button').removeClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-button').eq(i).addClass('orange')
        $('.tab-content').eq(i).addClass('show');
    })
}

$('.list2').click((e)=>{
    Tab2(e.target.dataset.id);
})


function Tab2(num){
    $('.tab-button2').removeClass('orange');
    $('.tab-content2').removeClass('show');
    $('.tab-button2').eq(num).addClass('orange')
    $('.tab-content2').eq(num).addClass('show');
}


