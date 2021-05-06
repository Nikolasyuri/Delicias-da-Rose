//Calcular Script
function calcular(){
    let con = window.document.getElementById('txtcon').value
    let sal = con*15
    let doc = con*7
    let res = window.document.getElementById('res')
    let res2 = window.document.getElementById('res-2')
    if(res2.style.display === "none"){
        res2.style.display = "flex"
    }else{
        res2.style.display === "none"
    }
    if(txtcon.value.lenght == 0 || Number(txtcon.value) < 1) {
        window.alert('Os salgados são só para olhar?')
    } else if(con < 9 || con == 9) {
        res.innerHTML = `Para um evento de ${con} pessoas, você precisa de:`
        res2.innerHTML = `<li><img src="./assets/images/Salgados.png"> <p>${sal} Salgados</p></li> <li><img src="./assets/images/Docinhos.png"> <p>${doc} Docinhos</p></li> <li><img src="./assets/images/Bolos.png"> <p>Bolo de 10cm</p></li>`
    }  else {
        res.innerHTML = `Para um evento de ${con} pessoas, você precisa de:`
        res2.innerHTML = `<li><img src="./assets/images/Salgados.png"> <p>${sal} Salgados</p></li> <li><img src="./assets/images/Docinhos.png"> <p>${doc} Docinhos</p></li> <li><img src="./assets/images/Bolos.png"> <p>Bolo de ${con}cm</p></li>`
    }
}
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
        }
    });
     //toggle menu/navbar script
     $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });
   // owl carousel script
   $('.carousel').owlCarousel({
    items:3,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        700:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        }
    }
});
})