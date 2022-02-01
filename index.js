const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Symbol{
constructor(){
this.characters='アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
this.x =x;
this.y =y;
this.size = size;
this.text ='';
this.canvasHeight = canvas.height;


}
draw(context){
    this.text=this.characters.charAt(Math.floor(Math.random()*this.characters.length));

    context.fillText(this.text,this.x*this.fontSize,this.y*this.fontSize);
    if(this.y*this.fontSize>this.canvasHeight){
        this.y=0;

    }else{
        this.y++;
    }
}
}

class Effect {
constructor(canvasWidth, canvasHeight, symbol){
this.canvasWidth = canvasWidth;
this.canvasHeight = canvasHeight;
this.fontSize=25;
this.column = this.canvasWidth/this.fontSize;
this.symbol = symbol;


}
#initialize(){
    for (let index = 0; index < this.column.length; index++) {
       this.symbol[index] = new Symbol();
        
    }

}

}

function animate(){

}