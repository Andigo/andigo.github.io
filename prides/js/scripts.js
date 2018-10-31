jQuery(function($) {
    $('main form.userside-card input[type="submit"]').on('click', function(e){
        var regCV = /[0-9]{3}/;
        var regName = /^[A-Za-z\s]{3,40}/;
        var regCardNum = /[0-9]{4}/;
        //Проверка CVV кода
        if(regCV.test($('.userside-card-cvcode').val())){
            $('.userside-card-cvcode').removeClass('incorrect');
        }else{
            e.preventDefault();
            $('.userside-card-cvcode').addClass('incorrect');
        };
        // Проверка держателя карты
        if(regName.test($('.userside-card-holder').val())){
            $('.userside-card-holder').removeClass('incorrect');
        }else{
            e.preventDefault();
            $('.userside-card-holder').addClass('incorrect');
        };
        // Проверка номера карты
        for(var i = 0; i < $('.userside-card-inputs').length; i++){
            if(regCardNum.test($('.userside-card-inputs').eq(i).val())){
                $('.userside-card-inputs').eq(i).removeClass('incorrect');
                
            }else{
                e.preventDefault();
                $('.userside-card-inputs').eq(i).addClass('incorrect');
            };
        }

    });
    //отработка внешнего вида активного элемента меню
    $('.userside-wrapper aside nav .userside-wrapper-speca').on('click', function(){
        $('.userside-wrapper aside nav .userside-wrapper-speca').removeClass('active');
        $(this).addClass('active');
    })
   
});