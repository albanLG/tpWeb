
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
	Element.setAttribute(DebutX, 0);
	Element.setAttribute(DebutY, 0);
	Element.setAttribute(FinX, 0);
	Element.setAttribute(FinY, 0);
	// Developper les 3 fonctions gérant les événements
	function selectionner(evt){
		const draggableElement = document.getElementById(evt);
	}
	function deplacer(evt){
		
	}
	function lacher(evt){
		
	}
	// Associer les fonctions précédentes aux évènements du canvas.
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



