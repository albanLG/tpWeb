
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	document.getElementById("spinnerWidth").onchange=(e) => this.currLineWidth = e.target.value;

	document.getElementById("butRect").onclick=() => this.currEditingMode = editingMode.rect;

	document.getElementById("butLine").onclick=() => this.currEditingMode = editingMode.line;

	document.getElementById("colour").onchange=(e) => this.currColour = e.target.value;

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	Pencil.prototype.onInteractionStart= function(dnd){
		if(this.currEditingMode==editingMode.line){
			this.currentShape=new Ligne(dnd.DebutX,dnd.DebutY,dnd.DebutX,dnd.DebutY,this.currLineWidth,this.currColour);
		}else{
			this.currentShape=new Rectangle(dnd.DebutX,dnd.DebutY,0,0,this.currLineWidth,this.currColour);//dnd.DebutX,dnd.DebutY
		}
		drawing.addForm(this.currentShape);
	}
	
	Pencil.prototype.onInteractionUpdate= function(dnd){
		if(this.currEditingMode==editingMode.line){
			drawing.formes[drawing.formes.length-1]=new Ligne(dnd.DebutX,dnd.DebutY,dnd.FinX,dnd.FinY,this.currLineWidth,this.currColour);
		}else{
			drawing.formes[drawing.formes.length-1]=new Rectangle(dnd.DebutX,dnd.DebutY,0,0,this.currLineWidth,this.currColour);//dnd.DebutX,dnd.DebutY
		}
		drawing.paint(ctx);
	}
	
	Pencil.prototype.onInteractionEnd= function(dnd){
		//nothing
	}
};