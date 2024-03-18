//Punto 1
class Size{
    constructor(w,h){
        if(w==undefined || w<=0)
            this.width=80;
        else
            this.width=w;

        if (h==undefined || h<=0)
            this.height=60;
        else
            this.height=h;
    }
    resize(newWidth, newHeight){
        if(newWidth==undefined || newWidth<=0)
            this.width=80;
        else
            this.width=newWidth;

        if (newHeight==undefined || newHeight<=0)
            this.height=60;
        else
            this.height=newHeight;
    }
}

//Punto 2
class Position{
    constructor(xi, yi){
        if(xi==undefined || xi<=0)
            this.x=0;
        else
            this.x=xi;

        if(yi==undefined || yi<=0)
            this.y=0;
        else
            this.y=yi;
    }
    move(newX, newY){
        if(newX<=0)
            this.x=0;
        else
            this.x=newX;

        if(newY<=0)
            this.y=0;
        else
            this.y=newY;
    }
}

class ProgramWindow{
    constructor(){
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }
    resize(tam){
        if(tam.width==undefined || tam.width<=0)
            this.size.width=1;
        else if(tam.width + this.position.x > this.screenSize.width)
            this.size.width=tam.width-(tam.width-this.screenSize.width);
        else
            this.size.width=tam.width;

        if (tam.height==undefined || tam.height<=0)
            this.size.height=1;
        else if(tam.height + this.position.y > this.screenSize.height)
            this.size.height=tam.height-(tam.height-this.screenSize.height);
        else
            this.size.height=tam.height
    }
}

console.log("----------------------------------------------------");
//Prueba punto 1
const ventana = new Size(1080,764);
console.log(`Tamaño nueva ventana\nAncho:${ventana.width}\nAltura:${ventana.height}`);
ventana.resize(1920,1080);
console.log(`Actualiación tamaño ventana\nAncho:${ventana.width}\nAltura:${ventana.height}`);

console.log("----------------------------------------------------");
//Prueba punto 2
const posision = new Position();
console.log(`Posición inicial:\n(${posision.x},${posision.y})`);
posision.move(100,200);
console.log(`Actualización posición:\n(${posision.x},${posision.y})`);

console.log("----------------------------------------------------");
//Prueba punto 3
const programWindow = new ProgramWindow();
console.log(programWindow.size);

console.log("----------------------------------------------------");
//Prueba punto 4
const newSize = new Size(600, 400);
programWindow.resize(newSize);
console.log(programWindow.size);