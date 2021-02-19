
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    Forme.prototype.paint.call(this,ctx) ;

    ctx.rect(this.x, this.y, this.larg, this.haut);
    ctx.stroke();
  };
  
Ligne.prototype.paint = function(ctx) {
    //TODO Manager color
    Forme.prototype.paint.call(this,ctx) ;

    ctx.beginPath();
    ctx.moveTo(this.xStart, this.yStart);
    ctx.lineTo(this.xEnd, this.yEnd);
    ctx.stroke();
};
  
Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color FF9933
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.formes.forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
})};

Forme.prototype.paint = function(ctx) {
    alert(this.taille);
    ctx.lineWidth = this.taille;
    ctx.strokeStyle = this.color;
};