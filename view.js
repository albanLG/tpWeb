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
    ctx.lineWidth = this.taille;
    ctx.strokeStyle = this.color;
};

Drawing.prototype.updateShapeList= function(){
    var listDom=document.getElementById("shapeList");
    listDom.innerHTML="";//on vide la liste pour la remplir
    var i=0;
    for(var form in this.formes)
    {
        var ligneDom=document.createElement("LI");

        const txtDom=document.createElement("SPAN");
        if(typeof form == Ligne ){//CA NE MARCHE PAS
            txtDom.innerHTML+="ligne "+i+" ";
        }else{
            txtDom.innerHTML+="rectangle "+i+" ";
        }
        ligneDom.appendChild(txtDom);

        var buttonDel=document.createElement("BUTTON");
        buttonDel.className="btn btn-default";
        buttonDel.innerHTML='<span class="glyphicon glyphicon-remove-sign"></span>';
        buttonDel.onclick = () =>
        {
            var j=txtDom.innerHTML.split(" ")[1];
            //alert(j);
            this.formes.splice(j,1);
            this.paint(ctx);
            this.updateShapeList();
        }
        ligneDom.appendChild(buttonDel);
        
        listDom.appendChild(ligneDom);
        i++;
    }
}