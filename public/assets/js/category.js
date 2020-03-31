$('#addcategory').on('submit',function() {
    var formdata=$(this).serialize()
    $.ajax({
        type:'post',
        url:'/categories',
        data:formdata,
        success(){
            location.reload()
        }
    })
    return false;
    
})