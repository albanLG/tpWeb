
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function drawing() {
    this.formes=new Array();
}
drawing.prototype.addForm=function(f){
    this.formes.push(f);
}

function forme(t, c) {
    this.taille=t;
    this.color=c;
}

function rectangle(x, y, larg, haut){
  forme.call(this, taille, color);

  this.x = x;
  this.y = y;
  this.larg = larg;
  this.haut = haut;
}
rectangle.prototype = new forme();

function ligne(point1,point2) {
  forme.call(this, taille, color);

  this.point1 = point1;
  this.point2 = points2;
}
ligne.prototype = new forme();