
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