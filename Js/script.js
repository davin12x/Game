$(document).ready(function(){
    $(".front").click(function(){
        $(this).hide('slow');
        var clickCounter=0;
       var getid=this.id;//Getting the id value
        var getindex = $( "div" ).index( this );//getting ndex number
        var imageCounter=[];
            for(var i=-1;i<getindex;i++)
            {
                imageCounter[getindex]=getid;
            }
            if(imageCounter[0]!=imageCounter[getindex])
            {
                $(this).show('slow');
            }    
    });
    
    
});