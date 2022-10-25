/* ========================
* ======= Variáveis =======
=========================== */
var carFundo = document.getElementById('carregamento');

var carMeio = document.getElementsByClassName('carregamento carMeio');
var carInterno = document.getElementsByClassName('carInterno')[2];
var car_01 = document.getElementsByClassName('carregamento')[0];
var car_02 = document.getElementsByClassName('carregamento')[1];

var car_03 = document.getElementsByClassName('carregamento')[2];
var car_04 = document.getElementsByClassName('carregamento')[3];
var car_05 = document.getElementsByClassName('carregamento')[4];
var car_06 = document.getElementsByClassName('carregamento')[6];

var car_07 = document.getElementsByClassName('carregamento')[7];
var car_08 = document.getElementsByClassName('carregamento')[8];

var car_09 = document.getElementsByClassName('carregamento')[9];
var car_10 = document.getElementsByClassName('carregamento')[10];

/* ========================
* ====== TimelineMax ======
=========================== */
function intro_01() {
	var intro_01 = gsap.timeline();
	intro_01.fromTo(carMeio, .1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut })
  .fromTo(car_05, .1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "+=1")
  .fromTo(car_06, .1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=.1")

  .fromTo(car_04, .1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut })
  .fromTo(car_07, .1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=.1")

  .fromTo(car_03, .1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut })
  .fromTo(car_08, .1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=.1")

  .fromTo(car_02, .1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut })
  .fromTo(car_09, .1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=.1")

  .fromTo(car_01, .1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut })
  .fromTo(car_10, .1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=.1");
	return intro_01;
}

function intro_02() {
	var intro_02 = gsap.timeline();
	intro_02.to(carMeio, .1, { opacity: "0", ease: Power2.easeInOut })
  .to(car_05, .1, { opacity: "0", ease: Power2.easeInOut })
  .to(car_06, .1, { opacity: "0", ease: Power2.easeInOut }, "-=.1")

  .to(car_04, .1, { opacity: "0", ease: Power2.easeInOut })
  .to(car_07, .1, { opacity: "0", ease: Power2.easeInOut }, "-=.1")

  .to(car_03, .1, { opacity: "0", ease: Power2.easeInOut })
  .to(car_08, .1, { opacity: "0", ease: Power2.easeInOut }, "-=.1")

  .to(car_02, .1, { opacity: "0", ease: Power2.easeInOut })
  .to(car_09, .1, { opacity: "0", ease: Power2.easeInOut }, "-=.1")

  .to(car_01, .1, { opacity: "0", ease: Power2.easeInOut })
  .to(car_10, .1, { opacity: "0", ease: Power2.easeInOut }, "-=.1");
	return intro_02;
}

function intro_03() {
	var intro_03 = gsap.timeline();
	intro_03.fromTo(car_01, .1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "+=.2")
  .fromTo(car_10, .1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=.1")

  .fromTo(car_02, .1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut })
  .fromTo(car_09, .1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=.1")

  .fromTo(car_03, .1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut })
  .fromTo(car_08, .1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=.1")

  .fromTo(car_04, .1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut })
  .fromTo(car_07, .1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=.1")

  .fromTo(car_05, .1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut })
  .fromTo(car_06, .1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=.1")

  .fromTo(carMeio, .1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut });
	return intro_03;
}

function intro_04() {
	var intro_04 = gsap.timeline();
	intro_04.to(car_01, .1, { opacity: "0", ease: Power2.easeInOut }, "+=.2")
  .to(car_10, .1, { opacity: "0", ease: Power2.easeInOut }, "-=.1")
  
  .to(car_02, .1, { opacity: "0", ease: Power2.easeInOut })
  .to(car_09, .1, { opacity: "0", ease: Power2.easeInOut }, "-=.1")
  
  .to(car_03, .1, { opacity: "0", ease: Power2.easeInOut })
  .to(car_08, .1, { opacity: "0", ease: Power2.easeInOut }, "-=.1")
  
  .to(car_04, .1, { opacity: "0", ease: Power2.easeInOut })
  .to(car_07, .1, { opacity: "0", ease: Power2.easeInOut }, "-=.1")
  
  .to(car_05, .1, { opacity: "0", ease: Power2.easeInOut })
  .to(car_06, .1, { opacity: "0", ease: Power2.easeInOut }, "-=.1")
  
  .to(carInterno, .1, { color: "#FFF" })
  .to(carFundo, .1, { backgroundColor: "var(--color-neutral-900)" }, "-=.1")
  .to(carMeio, 1, { scale: "10" }, "+=1")
  .to(carMeio, .1, { opacity: "0" })
  // .to(carFundo, .1, { visibility: "hidden" })
  .to(carFundo, .1, { display: "none" })
  // .to('header', .1, { visibility: "visible" })
  .to('main', .1, { display: "block" }, "-=2");
	return intro_04;
}

function intro_05() {
	var intro_05 = gsap.timeline();
	intro_05.fromTo('.chamada h1', .6, { opacity: "0" }, { opacity: "1" }, "=.2")
  .fromTo('.chamada h1', .8, { y: "-20px" }, { y: "0" }, "-=.6")
  
  .fromTo('.chamada .colunaPequena', .6, { opacity: "0" }, { opacity: "1" }, "-=.2")
  .fromTo('.chamada .colunaPequena', .8, { y: "-20px" }, { y: "0" }, "-=.6")
  
  .fromTo('.chamada .botãoWhatsapp', .6, { opacity: "0" }, { opacity: "1" }, "-=.2")
  .fromTo('.chamada .botãoWhatsapp', .8, { y: "-20px" }, { y: "0" }, "-=.6");
  return intro_05;
}

var todosElementos = document.getElementById("todosElementos");
// console.log(window.location.host);
  if (window.location.host != "leonardopirchio.com.br") {
    todosElementos.style.display = "none"; carFundo.style.display = "none";
  }

/* ========================
* ====== ScrollMagic ======
=========================== */
function scrollMagic() {
  var controller = new ScrollMagic.Controller();

    // ====== Animação 01 ======
    var a1 = new TimelineMax();
    
    a1.fromTo('#anim_01', .6, { opacity: "0" }, { opacity: "1" })
    .fromTo('#anim_01', .8, { y: "-80px" }, { y: "0" }, "-=.6")
    .fromTo('#anim_02', .6, { opacity: "0" }, { opacity: ".7" })
    .fromTo('#anim_02', .8, { y: "-40px" }, { y: "0" }, "-=.6")

    new ScrollMagic.Scene({
      triggerElement: '.sobreMimTexto',
      triggerHook: 0.65
    })
      .setTween(a1)
      // .addIndicators({
      //   name: "Conheça mais_"
      // })
      .addTo(controller);

    // ====== Animação 02 ======
    var a2 = new TimelineMax();
    
    a2.fromTo('#anim_03', .6, { opacity: "0" }, { opacity: "1" })
    .fromTo('#anim_03', .8, { y: "-40px" }, { y: "0" }, "-=.6")

    .fromTo('#anim_h3_01', .6, { opacity: "0" }, { opacity: "1" }, "-=.8")
    .fromTo('#anim_h3_01', .8, { y: "-40px" }, { y: "0" }, "-=.6")
    .fromTo('#anim_img_01', .6, { height: "0%" }, { height: "100%" }, "-=.6")
    .fromTo('#anim_p_01', .6, { opacity: "0" }, { opacity: ".7" }, "-=.6")
    .fromTo('#anim_p_01', .8, { y: "-40px" }, { y: "0" }, "-=.6")

    new ScrollMagic.Scene({
      triggerElement: '#serviços',
      triggerHook: 0.65
    })
      .setTween(a2)
      // .addIndicators({
      //   name: "Serviços"
      // })
      .addTo(controller);

    // ====== Animação 02-A ======
    var a2A = new TimelineMax();
    
    a2A.fromTo('#anim_h3_02', .6, { opacity: "0" }, { opacity: "1" })
    .fromTo('#anim_h3_02', .8, { y: "-40px" }, { y: "0" }, "-=.6")
    .fromTo('#anim_img_02', .6, { height: "0%" }, { height: "100%" }, "-=.6")
    .fromTo('#anim_p_02', .6, { opacity: "0" }, { opacity: ".7" }, "-=.6")
    .fromTo('#anim_p_02', .8, { y: "-40px" }, { y: "0" }, "-=.6")

    new ScrollMagic.Scene({
      triggerElement: '#anim_h3_02',
      triggerHook: 0.65
    })
      .setTween(a2A)
      // .addIndicators({
      //   name: "Melhoramento"
      // })
      .addTo(controller);

    // ====== Animação 02-B ======
    var a2B = new TimelineMax();
    
    a2B.fromTo('#anim_h3_03', .6, { opacity: "0" }, { opacity: "1" })
    .fromTo('#anim_h3_03', .8, { y: "-40px" }, { y: "0" }, "-=.6")
    .fromTo('#anim_img_03', .6, { height: "0%" }, { height: "100%" }, "-=.6")
    .fromTo('#anim_p_03', .6, { opacity: "0" }, { opacity: ".7" }, "-=.6")
    .fromTo('#anim_p_03', .8, { y: "-40px" }, { y: "0" }, "-=.6")

    new ScrollMagic.Scene({
      triggerElement: '#anim_h3_03',
      triggerHook: 0.65
    })
      .setTween(a2B)
      // .addIndicators({
      //   name: "Tráfego Pago"
      // })
      .addTo(controller);

    // ====== Animação 03 ======
    var a3 = new TimelineMax();
        
    a3.fromTo('#anim_04_s1', .6, { opacity: "0" }, { opacity: "1" })
    .fromTo('#anim_04_s1', .8, { y: "-40px" }, { y: "0" }, "-=.8")

    .fromTo('#anim_04_s2', .6, { opacity: "0" }, { opacity: "1" })
    .fromTo('#anim_04_s2', .8, { y: "-40px" }, { y: "0" }, "-=.8")

    .fromTo('#anim_04_s3', .6, { opacity: "0" }, { opacity: "1" })
    .fromTo('#anim_04_s3', .8, { y: "-40px" }, { y: "0" }, "-=.8")

    new ScrollMagic.Scene({
      triggerElement: '#vamosConversar',
      triggerHook: 0.65
    })
      .setTween(a3)
      // .addIndicators({
      //   name: "Conversar"
      // })
      .addTo(controller);

    // ====== Animação 04 ======
    var a4 = new TimelineMax();
    var redesSociais = CSSRulePlugin.getRule("#redesSociais ul::before");
        
    a4.fromTo(redesSociais, 1, { height: "0vh" }, { height: "100vh" })
    .fromTo('#redesSociais ul li a', .1, { visibility: "hidden" }, { visibility: "visible" })
    .fromTo('#redesSociais ul li a', .4, { opacity: "0" }, { opacity: ".7" })

    new ScrollMagic.Scene({
      triggerElement: '#anim_01',
      triggerHook: 0.65
    })
      .setTween(a4)
      // .addIndicators({
      //   name: "Redes Sociais"
      // })
      .addTo(controller);
    // ====== Fim das Animações ======

  return scrollMagic;
}

/* ========================
* ======== Master =========
=========================== */
var master = gsap.timeline();
master
      .add(intro_01())
      .add(intro_02())
      .add(intro_03())
      .add(intro_04())
      .add(intro_05())
      .add(scrollMagic())

/* ========================
* ========= Data ==========
=========================== */
mêsNome = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")
hoje = new Date

var dia = hoje.getDate ();
var mês = mêsNome [hoje.getMonth()]
var dataPorExtenso = document.getElementById('dataPorExtenso');

dataPorExtenso.innerHTML = dia + ' de ' + mês;
