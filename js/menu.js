var open = false
$(".fas").click(function(){
    if(open == false){
        open = true
        $(".fas").removeClass('fas fa-bars').addClass('fas fa-times');
    $(".desc").css("left",0);
    $(".descImage").css("left",0);
    $(".desc").css("transition-delay","0.2s");
    }else{
        open = false;
        $(".fas").removeClass('fas fa-times').addClass('fas fa-bars');
        $(".desc").css("left",-900);
        $(".descImage").css("left",-900);
        $(".desc").css("transition-delay","0s");
    }
})

$(window).on('resize', function(){
if($( window ).width()>900){
    $(".desc").css("left",0);
    $(".descImage").css("left",0);
}else{
    $(".desc").css("left",-900);
    $(".descImage").css("left",-900);
}
});