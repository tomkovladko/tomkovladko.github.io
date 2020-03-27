//Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
   $(this).toggleClass("completed")
})
//click on X to delete Todo
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    e.stopPropagation()
})
$("input[type='text']").keypress(function(e){ 
    if(e.which === 13){
        //grabbing new todo text from input
       var todoText = $(this).val();
       var person = $("select").val();
       $(this).val("");
       //createa new li and add to ul
       $("ul").append("<li><span><i class='fa fa-trash'></i></span>"+todoText+"<em>"+person+"<em></li>")
       //clear input
    }
});
