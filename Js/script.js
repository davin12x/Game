$(document).ready(function(){
    $(".front").click(function(){
        $(this).hide('slow');
        var clickCounter=0;
       var getid=this.id;
        var getindex = $( "div" ).index( this );
        var imageCounter=[];
        var clickCounter=0;
       
      
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