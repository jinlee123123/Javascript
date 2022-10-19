
for(let i=0; i<3 ; i++){
    $('.tab-button').eq(i).on('click',()=>{
        $('.tab-button').removeClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-button').eq(i).addClass('orange')
        $('.tab-content').eq(i).addClass('show');
    })
}


