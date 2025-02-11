class Player
{
    constructor(id, points)
    {
        this.id = id;
        this.points = points;

        this.sticks = document.getElementById(`s${ id }`);

        this.sticks100 = document.getElementById(`s${ id }-100`);
        this.sticks500 = document.getElementById(`s${ id }-500`);
        this.sticks1000 = document.getElementById(`s${ id }-1000`);
        this.sticks5000 = document.getElementById(`s${ id }-5000`);
        this.sticks10000 = document.getElementById(`s${ id }-10000`);

        this.ssticks100 = document.getElementById(`ss${ id }-100`);
        this.ssticks500 = document.getElementById(`ss${ id }-500`);
        this.ssticks1000 = document.getElementById(`ss${ id }-1000`);
        this.ssticks5000 = document.getElementById(`ss${ id }-5000`);
        this.ssticks10000 = document.getElementById(`ss${ id }-10000`);

        this.score = document.getElementById(`sc${ id }`);
        
        this.setup();
        this.display();
    }

    setup()
    {   
        this.ssticks100.addEventListener("dragstart", e => 
        {
            e.dataTransfer.setData("value", "100");
            this.points -= 100;
            this.display();
        });

        this.ssticks500.addEventListener("dragstart", e => 
        {
            e.dataTransfer.setData("value", "500");
            this.points -= 500;
            this.display();
        });

        this.ssticks1000.addEventListener("dragstart", e => 
        {
            e.dataTransfer.setData("value", "1000");
            this.points -= 1000;
            this.display();
        });

        this.ssticks5000.addEventListener("dragstart", e => 
        {
            e.dataTransfer.setData("value", "5000");
            this.points -= 5000;
            this.display();
        });

        this.ssticks10000.addEventListener("dragstart", e => 
        {
            e.dataTransfer.setData("value", "10000");
            this.points -= 10000;
            this.display();
        });

        this.sticks.addEventListener("dragover", e => 
        {
            e.preventDefault();
        });

        this.sticks.addEventListener("drop", e => 
        {
            e.preventDefault();
            const value = parseInt(e.dataTransfer.getData("value"));
            this.points += value;
            this.display();
        });
    }

    display()
    {
        let remaining = this.points;
        const man = (remaining - (remaining % 10000)) / 10000;
        remaining -= 10000 * man;
        const gosen = (remaining - (remaining % 5000)) / 5000;
        remaining -= 5000 * gosen;
        const sen = (remaining - (remaining % 1000)) / 1000;
        remaining -= 1000 * sen;
        const gohyaku = (remaining - (remaining % 500)) / 500;
        remaining -= 500 * gohyaku;
        const hyaku = (remaining - (remaining % 100)) / 100;

        this.sticks100.innerText = `x${ hyaku }`;
        this.sticks500.innerText = `x${ gohyaku }`;
        this.sticks1000.innerText = `x${ sen }`;
        this.sticks5000.innerText = `x${ gosen }`;
        this.sticks10000.innerText = `x${ man }`;

        this.score.innerText = `${ this.points }`;
    }
}

const reset = document.getElementById("reset");

let p1, p2, p3, p4;
reset.addEventListener("click", () => 
{
    p1 = new Player(1, 25000);
    p2 = new Player(2, 25000);
    p3 = new Player(3, 25000);
    p4 = new Player(4, 25000);
});

const sanma = document.getElementById("sanma");

sanma.addEventListener("click", () => 
{
    p1.points = 35000;
    p2.points = 35000;
    p3.points = 0;
    p4.points = 35000;

    p1.display();
    p2.display();
    p3.display();
    p4.display();
});

const fulsc = document.getElementById("fullscreen");

fulsc.addEventListener("click", () => 
{
    if(document.fullscreenElement)
    {
        document.exitFullscreen();
    } else 
    {
        document.body.requestFullscreen();
    }
});