let h=0;
let m=0;
let s=0;
let ms=0;
let sCal;
let ar=[];
function calculate(){
    sCal =setInterval(()=>{
        ms++;
        if (ms<10){
            document.getElementById('tms').innerHTML='0'+ms;
        }else{
            document.getElementById('tms').innerHTML=''+ms;
        }
        if (ms===60){
            ms=0;
            s++;
        }
        if (s<10){
            document.getElementById('ts').innerHTML='0'+s;
        }else{
            document.getElementById('ts').innerHTML=''+s;
        }
        if (s===60){
            s=0;
            m++
        }
        if (m<10){
            document.getElementById('tm').innerHTML='0'+m;
        }else{
            document.getElementById('tm').innerHTML=''+m;
        }
        if (m===60){
            m=0;
            h++
        }
        if (h<10){
            document.getElementById('th').innerHTML='0'+h;
        }else{
            document.getElementById('th').innerHTML=''+h;
        }

    },10)

}
function lap(){

        ar.push({'h': h, 'm': m, 's': s, 'ms': ms});
        let laps;
        let NL = ar[ar.length - 1];
        laps = `${h}:${m}:${s}:${ms}`;
        let lap1 = document.getElementById('laps').innerHTML +=laps+"<br><hr class='hr'>";





}




function reset(){
    clearInterval(sCal);
    m=0;
    s=0;
    h=0;
    ms=0;
    document.getElementById('tms').innerHTML='00'
    document.getElementById('ts').innerHTML='00'
    document.getElementById('tm').innerHTML='00'
    document.getElementById('th').innerHTML='00'

}
