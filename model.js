
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
    this.formes=new Array();
}
Drawing.prototype.addForm=function(f){
    this.formes.push(f);
}

function Forme(t, c) {
    this.taille=t;
    this.color=c;
}

function Rectangle(x, y, larg, haut, taille, color){
    Forme.call(this, taille, color);

    this.x = x;
    this.y = y;
    this.larg = larg;
    this.haut = haut;
}
Rectangle.prototype = new Forme();

function Ligne(xStart,yStart,xEnd,yEnd, taille, color) {
    Forme.call(this, taille, color);

    this.xStart = xStart;
    this.yStart = yStart;
    this.xEnd = xEnd;
    this.yEnd = yEnd;
}
Ligne.prototype = new Forme();