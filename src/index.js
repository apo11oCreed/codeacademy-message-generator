import './css/styles.styl'
import $ from "jquery"
import Dt1 from './images/dt_01.jpeg'
import Dt2 from './images/dt_02.webp'
import Dt3 from './images/dt_03.webp'
import Dt4 from './images/dt_04.jpeg'

const jq = $.noConflict(),
nouns=['wall','burder','covfefe','MAGA','loser','African American'],
verbs=['shutdown','pay','excuse'],
adjs=['huge','fake','disgusting','biggly'],
imgs=[Dt1,Dt2,Dt3,Dt4];
let 
quotes=[],
verb,
noun,
adj,
quote,
img,
app;

(function($){

    noun='<strong>' + nouns[Math.floor((Math.random() * adjs.length))] + '</strong>';
    adj='<strong>' + adjs[Math.floor((Math.random() * adjs.length))] + '</strong>';
    verb='<strong>' + verbs[Math.floor((Math.random() * verbs.length))] + '</strong>';
    img=imgs[Math.floor((Math.random() * imgs.length))];
    app=document.getElementById('app');

    quotes = [
        `I will build a ${adj}, ${adj} ${noun} on our southern border, and I will have Mexico ${verb} for that ${noun}. Mark my words.`,
        `I have a ${adj} relationship with ${noun}s, as you possibly have heard. I just have ${adj} respect for them. And they ${verb} me. I ${verb} them.`,
        `To be ${adj}, ${noun}s would ${verb} for me. They just would. Why? Maybe because I'm so ${adj} looking.`
    ];

    quote=()=>{
        return quotes[Math.floor((Math.random() * quotes.length))];
    };

    $('#app > blockquote > q').html(quote);
    $('#app').append('<img class="img-fluid" src="' + img + '" alt="Donald Trump" />');
    
    const appAnimate=app.animate([
        {
            opacity:'1.0',
        },
        ],1000,()=>{}
    );

    appAnimate.play(()=>{
        $('#app').css('opacity','1.0');
    });

    appAnimate.addEventListener('finish',()=>{

        $('#app').css('opacity','1.0');

    });
    
})(jq);