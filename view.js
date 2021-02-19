
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.rect(this.x, this.y, this.getFinalX(),   this.getFinalY());
    ctx.stroke();
  };
  
Line.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
};
  
Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color FF9933
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
})};

forme.prototype.paint = function(ctx) {
    ctx.lineWidth = this.taille;
    ctx.strokeStyle = this.color;
};