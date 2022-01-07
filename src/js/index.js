//Made with this Dev Ed tutorial https://www.youtube.com/watch?v=3GqUM4mEYKA
//converted to ES6 for 233JS assignment

class Drawing {

    constructor() {
        //get canvas element and context
        this.canvas = document.querySelector('#canvas');
        this.ctx = this.canvas.getContext('2d');

        //resizing canvas
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;

        //signifies if the user is currently painting
        this.painting = false;

        //binding methods
        this.startPosition = this.startPosition.bind(this);
        this.finishedPosition = this.finishedPosition.bind(this);
        this.draw = this.draw.bind(this);

        //event listeners
        this.canvas.addEventListener('mousedown', this.startPosition);
        this.canvas.addEventListener('mouseup', this.finishedPosition);
        this.canvas.addEventListener('mousemove', this.draw);
    }

    //start drawing
    startPosition(e){
        this.painting = true;
        this.draw(e);
    }
    //stop drawing
    finishedPosition(){
        this.painting = false;
        this.ctx.beginPath();
    }
    //main drawing function
    draw(e){
        if(!this.painting) return; //do nothing if mouse isn't clicked

        this.ctx.lineWidth = 10;
        this.ctx.lineCap = 'round';

        this.ctx.lineTo(e.clientX, e.clientY);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(e.clientX, e.clientY);
    }
}
new Drawing();