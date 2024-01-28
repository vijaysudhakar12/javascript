

//Jquery

//  effect in jquery

//   hide
//   show
//   Toggle
//   fadeIn
//   fadeOut
//   fadeToggle 
//   slideIn
//   slideout
//   slideToggle
//   Animate

 //const fun1 = () => ($("#img1").fadeToggle(3000))

 $("document").ready(function (){    // it wait for the html document load

    $("button").click(() => {
         $("#img1").css('display','block')
        ($("#img1").animate({  
            opacity:'1',     
        }))
    } )
    $("button").mouseenter(() => {
        $("#btn").css("width",'100px')
    })
    $("button").mouseleave(() => {
        $("#btn").css("width",'50px')
    })
 });