
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.

function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
	this.DebutX= 0;
	this.DebutY=0;
	this.FinX=0;
	this.FinY=0;
	
	// Developper les 3 fonctions gérant les événements
	DnD.prototype.selectionner= 
	function(evt){
		var mouspos=getMousePosition(canvas, evt);
		this.DebutX=mouspos.x;
		this.DebutY=mouspos.y;
	}
	function deplacer(evt){
		
	}
	function lacher(evt){
		
	}
	// Associer les fonctions précédentes aux évènements du canvas.
	canvas.addEventListener('mousedown', this.selectionner, false);
	canvas.addEventListener('mousemove', this.deplacer, false);
	canvas.addEventListener('mouseup', this.lacher, false);
	
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



