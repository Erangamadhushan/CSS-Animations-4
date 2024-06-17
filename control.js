let box = document.querySelectorAll('.box');
        let play = anime({
            targets:box,
            translateY:[
                {value:300,duration:1000},
                {value:0,duration:500}
            ],
            loop:true,
            //rotate:'1turn',
            rotate:{
                value:'.5turn',
                easing:'easeInOutQuad',//easeInputExpo, easeInOutSine, easeInOutQuad
                delay:(el,i,to) =>{
                    return i * 500
                },
            },
            delay:function(el,i,total) {
                return i*500;
            },
            autoplay:false,
        })
        document.querySelector("#btn1").onclick = () => {
            play.play();
        }
        document.querySelector('#btn2').onclick = () => {
            play.pause();
        }
        document.querySelector('#btn3').onclick = () => {
            play.add({
                targets:box,
                borderRadius:'50%'
            })
        }
        document.querySelector('#btn4').addEventListener("click",() => {
            play.restart();
        })
