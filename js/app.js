$(document).ready(function(){
    $.ajax({
        type:'GET',
        dataType:'JSON',
        url:'data/data.json',/*as js is implemented by index.html, we don't need to retreat one level*/

        success:function(data){
            console.log(data);
            for(var i = 0 ; i<data.length; i++){
                $('nav ul').append('<li><a href="'+data[i].anchor+'">'+data[i].content+'</a></li>');
            }
        },
        error:function(err){
            console.log(err);
        },
        complete:function(){
            console.log('fin de la requete');
        }
    });

})
