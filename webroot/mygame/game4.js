enchant();

window.onload = function() {

	var game = new Game(320, 356);
	game.fps = 15;
	game.keybind(90, 'a');
	game.preload('map1.gif', 'chara0.gif');
	game.onload = function() {
		var map = new Map(16, 16);
		map.image = game.assets['map1.gif'];
		map.loadData([
		              [322,322,322,322,322,322,224,225,225,225,225,225,167,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205,205],
		              [322,322,322,322,322,322,322,322,322,322,322,322,224,225,225,225,225,225,167,205,205,205,205,205,205,205,205,205,205,205],
		              [322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,224,225,225,225,225,225,225,225,225,225,225,225],
		              [322,322,322,342,342,342,342,342,342,342,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322],
		              [322,322,322,342,342,342,342,342,342,342,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322],
		              [322,322,322,342,342,342,342,342,342,342,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322],
		              [322,322,322,342,342,342,342,342,342,342,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322],
		              [322,322,322,342,342,342,342,342,342,342,322,322,322,322,322,322,322,342,342,342,342,342,342,342,342,342,322,322,322,322],
		              [322,322,322,342,342,342,342,342,342,342,322,322,322,322,322,322,322,342,342,342,342,342,342,342,342,342,322,322,322,322],
		              [322,322,322,342,342,342,341,341,341,342,322,322,322,322,322,322,322,342,342,342,342,342,342,342,342,342,322,322,322,322],
		              [322,322,322, 24, 25, 25, 25, 26,322,322,322,322,322,322,322,322,322,342,342,342,342,342,342,342,342,342,322,322,322,322],
		              [322,322,322, 44, 45, 45, 45, 46,322,322,322,322,322,322,322,322,322,342,342,342,342,342,342,342,342,342,322,322,322,322],
		              [322,322,322, 64,  7,  6, 65, 66,322,322,322,322,322,322,322,322,322,342,342,342,342,342,342,342,342,342,322,322,322,322],
		              [322,322,322,322, 44, 46,322,322,322,322,322,322,322,322,322,322,322,342,342,342,342,322,322,322,322,322,322,322,322,322],
		              [322,322,322,322, 44, 46,322,322,322,322,322,322,322,322,322,322,322,342,342,342,342,322,322,322,322,322,322,322,322,322],
		              [322,322,322,322, 44, 46,322,322,322,322,322,322,322,322,322,322,322,342,342,342,342,322,322,322,322,322,322,322,322,322],
		              [322,322,322,322, 44, 46,322,322,322,322,322,322,322,322,322,322,322,322, 24, 26,322,322,322,322,322,322,322,322,322,322],
		              [322,322,322,322, 44, 46,322,322,322,322,322,322,322,322,322,322,322,322, 44, 46,322,322,322,322,322,322,322,322,322,322],
		              [322,322,322,322, 44, 46,322,322,322,322,322,322,322,322,322,322,322,322, 44, 46,322,322,322,322,322,322,322,322,322,322],
		              [322,322,322,322, 44, 46,322,322,322,322,322,322,322,322,322,322,322,322, 44, 46,322,322,322,322,322,322,322,322,322,322],
		              [ 25, 25, 25, 25,  5, 46,322,322,322,322,322,322,322,322,322,322,322,322, 44, 46,322,322,322,322,322,322,322,322,322,322],
		              [ 45, 45, 45, 45, 45,  4, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,  5, 49,322,322,322,322,322,322,322,322,322,322],
		              [ 45, 45, 45, 45, 45, 45,  6, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 66,322,322,322,322,322,322,322,322,322,322],
		              [ 45, 45, 45, 45, 45, 45, 46,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322],
		              [ 45, 45, 45, 45, 45,  6, 66,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,184,185,185,186,322,322,322],
		              [ 65, 65, 65, 65, 65, 66,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,184,165,205,205,164,186,322,322],
		              [322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,204,205,205,205,205,164,185,185],
		              [322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,180,161,161,161,207,205,205,205,205,205,205,205],
		              [322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,203,322,322,322,204,205,205,205,205,205,205,205],
		              [322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,322,203,322,322,322,204,205,205,205,205,205,205,205],
		              [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		              [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		              [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		              [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		              [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		              ],[
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1,461,462, -1,461,462, -1,461,462,421,461,462, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1,481,482, -1,481,482,421,481,482,421,481,482, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1,421,421,321,341,341,341,341,341,321, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1,461,462,321,422, -1, -1,400,400,321,461,462, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1,481,482,321, -1, -1, -1, -1,400,321,481,482, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1, -1, -1,321,521,521,521,521,521,321,421, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1,461,462,321, -1, -1, -1, -1, -1,321,461,462, -1, -1, -1, -1, -1,321,341,341,341,341,341,341,341,321, -1, -1, -1, -1],
		                 [ -1,481,482,321, -1, -1, -1, -1,400,321,481,482, -1, -1, -1, -1, -1,321,420, -1, -1, -1, -1,400,400,321, -1,421, -1, -1],
		                 [ -1, -1, -1,341, -1, -1, -1, -1, -1,341,421, -1, -1, -1, -1, -1, -1,321, -1, -1, -1, -1, -1, -1,400,321,461,462, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1,421,421, -1, -1, -1, -1, -1, -1, -1,321, -1, -1,321, -1, -1, -1, -1,321,481,482, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,321,521,521,321,402, -1, -1, -1,321, -1, -1, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,461,462,321, -1, -1,321,341,341,341, -1,341, -1, -1, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,481,482,321, -1, -1,321, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,421,321, -1, -1,321, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,341, -1, -1,341, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,461,462,461,462, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,481,482,481,482, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,421, -1, -1, -1, -1,460, -1, -1, -1, -1, -1, -1, -1,461,462, -1,421, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,480, -1, -1, -1, -1, -1, -1, -1,481,482,421, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,461,462, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,481,482, -1, -1, -1, -1, -1, -1, -1,421, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,421,420, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                 ]);
		map.collisionData = [
		                     [  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
		                     [  0,  1,  1,  0,  1,  1,  0,  1,  1,  0,  1,  1,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
		                     [  0,  0,  0,  1,  1,  1,  0,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
		                     [  0,  0,  0,  1,  0,  0,  0,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
		                     [  0,  1,  1,  1,  0,  1,  0,  0,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
		                     [  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
		                     [  0,  0,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0],
		                     [  0,  1,  1,  1,  0,  0,  0,  0,  1,  1,  1,  1,  0,  0,  0,  0,  0,  1,  1,  1,  0,  0,  0,  1,  1,  1,  0,  0,  0,  0],
		                     [  0,  0,  0,  1,  0,  0,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  1,  1,  1,  0,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  1,  1,  1,  1,  0,  1,  0,  0,  0,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  1,  0,  0,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  0,  0,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  0,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1],
		                     [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
		                     [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
		                     [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
		                     [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
		                     [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
		                     ];

		var foregroundMap = new Map(16, 16);
		foregroundMap.image = game.assets['map1.gif'];
		foregroundMap.loadData([
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1,461,462, -1,461,462, -1,461,462, -1,461,462, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1,461,462, -1, -1, -1, -1, -1, -1, -1,461,462, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1,461,462, -1, -1, -1, -1, -1, -1, -1,461,462, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,461,462, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,402, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,461,462, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,461,462,461,462, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,461,462, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,461,462, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
		                        ]);

		var player = new Sprite(32, 32);
		player.x = 6 * 16 - 8;
		player.y = 9 * 16;
		var image = new Surface(96, 128);
		image.draw(game.assets['chara0.gif'], 96, 0, 96, 128, 0, 0, 96, 128);
		player.image = image;

		player.isMoving = false;
		player.direction = 0;
		player.walk = 1;
		player.addEventListener('enterframe', function() {
			if(kaiwa == 0) {
				this.frame = this.direction * 3 + this.walk;
				if (this.isMoving) {
					this.moveBy(this.vx, this.vy);

					if (!(game.frame % 3)) {
						this.walk++;
						this.walk %= 3;
					}
					if ((this.vx && (this.x-8) % 16 == 0) || (this.vy && this.y % 16 == 0)) {
						this.isMoving = false;
						this.walk = 1;
					}
				} else {
					this.vx = this.vy = 0;
					if (game.input.left) {
						this.direction = 1;
						this.vx = -4;
					} else if (game.input.right) {
						this.direction = 2;
						this.vx = 4;
					} else if (game.input.up) {
						this.direction = 3;
						this.vy = -4;
					} else if (game.input.down) {
						this.direction = 0;
						this.vy = 4;
					}
					if (this.vx || this.vy) {
						var x = this.x + (this.vx ? this.vx / Math.abs(this.vx) * 16 : 0) + 16;
						var y = this.y + (this.vy ? this.vy / Math.abs(this.vy) * 16 : 0) + 16;
						if (0 <= x && x < map.width && 0 <= y && y < map.height && !map.hitTest(x, y)) {
							this.isMoving = true;
							arguments.callee.call(this);
						}
					}
				}
			}
		});

		var kaiwa = 0; // 会話中フラグ
		var sentaku = 0; // 選択肢フラグ
//		var clear = 0;	// クリアフラグ

		// 村人A
		var mura1 = new Sprite(32, 32);
		mura1.x = 5 * 16 - 8;
		mura1.y = 4 * 16;
		var image2 = new Surface(96, 128);
		image2.draw(game.assets['chara0.gif'], 0, 0, 96, 128, 0, 0, 96, 128);
		mura1.image = image2;
		mura1.frame = 1;
		// カウンター会話用
		var mura1_ = new Entity();
		mura1_.width = 16;
		mura1_.height = 16;
		mura1_.x = 5 * 16;
		mura1_.y = 6 * 16;
		// 階段用
		var kaidan = new Entity();
		kaidan.width = 16;
		kaidan.height = 16;
		kaidan.x = 4 * 16;
		kaidan.y = 4 * 16;

		// 村人B
		var mura2 = new Sprite(32, 32);
		mura2.x = 19 * 16 - 8;
		mura2.y = 7 * 16;
		var image3 = new Surface(96, 128);
		image3.draw(game.assets['chara0.gif'], 192, 0, 96, 128, 0, 0, 96, 128);
		mura2.image = image3;
		mura2.frame = 7;

		// 台詞ラベル
		var label = new Label('');
		label.x = 60;
		label.y = 210;
		label.color = 'white';

		// 台詞ウィンドウ
		var window = new Sprite(220, 60);
		window.x = 50;
		window.y = 206;
		window.backgroundColor = 'black';
		window.opacity = 0;

		// 選択肢ボタン
		var yes = new Button("はい", "light");
		yes.x = 95;
		yes.y = 130;
		yes.backgroundColor = "white";

		yes.addEventListener("touchstart", function(){
			var e = new enchant.Event("yesinput");
			this.dispatchEvent(e);
		});

		var no = new Button("いいえ", "light");
		no.x = 175;
		no.y = 130;
		no.backgroundColor = "white";

		no.addEventListener("touchstart", function(){
			var e = new enchant.Event("noinput");
			this.dispatchEvent(e);
		});

		var dep = 0;
		// 選択肢イベント
		yes.onyesinput = function() {
			if(dep == 0) {
				i++;
				label.text = mura2_serifu[i];
				dep++;
			} else {
				game.rootScene.removeChild(yes);
				game.rootScene.removeChild(no);
				depPanel.visible = true;
				depLabel1.visible = true;
				depLabel2.visible = true;
				okButton.visible = true;
			}
		};

		no.onnoinput = function() {
			game.rootScene.removeChild(yes);
			game.rootScene.removeChild(no);
			label.text = mura2_serifu[mura2_serifu.length - 1];
			i = mura2_serifu.length;
			sentaku = 0;
			dep = 0;
		};

		var mura1_serifu = new Array('しってる？<br>となりの　いえの　ひと', 'すごい　たからを　もってる<br>らしいよ。');
		var mura2_serifu = new Array('100dpで　となりの　いえの<br>ひみつを　おしえて　あげる。', 'ほんとうに　しりたいのね？',
									 '<font color=\"yellow\">ひだりから　4れつめ</font>の　かべを<br>しらべてみると　いいわよ．', 'あら　いいの？' );
		var mura1_serifu2 = new Array('ややっ　みつかっちゃったか。', 'しかたない　ちかの　たからは<br>もっていっても　いいよ。');
		var i = 0;

		var stage = new Group();
		stage.addChild(map);
		stage.addChild(mura1_);
		stage.addChild(mura2);
		stage.addChild(kaidan);
		stage.addChild(player);
		stage.addChild(mura1);
		stage.addChild(foregroundMap);
		game.rootScene.addChild(stage);
		game.rootScene.addChild(window);
		game.rootScene.addChild(label);

		// コントロールパネル
		var padArea = new Sprite(320, 80);
		padArea.x = 0;
		padArea.y = 276;
		padArea.backgroundColor = 'white';

		var pad = new Pad();
		pad.x = 0;
		pad.y = 265;
		pad.scaleX = 0.7;
		pad.scaleY = 0.7;

		var button = new Button("決定");
		button.x = 100;
		button.y = 300;
		button.backgroundColor = "black";

		button.addEventListener("touchstart", function(){
			var e = new enchant.Event("enter");
			this.dispatchEvent(e);
		});

		// 決定ボタンを押した時の動作
		button.onenter = function() {
			// 村人Aとの会話
			if(player.intersect(mura1_) && player.direction == 3) {
				if(i == 0) {
					kaiwa = 1;
					window.opacity = 1;
					label.text = mura1_serifu[i] + " ▼";
					i++;
				} else if(i < mura1_serifu.length) {
					label.text = mura1_serifu[i] + ((mura1_serifu.length > i + 1) ? " ▼" : "");
					i++;
				} else {
					window.opacity = 0; 
					label.text = '';
					i = 0;
					kaiwa = 0;
				}
			}

			// 村人Bとの会話
			if(player.intersect(mura2) && (player.direction == 1 || player.direction == 3)) {
				if(i == 0) {
					if(dep == 0) {
						kaiwa = 1;
						sentaku = 1;
						window.opacity = 1;
						label.text = mura2_serifu[i];
						game.rootScene.addChild(yes);
						game.rootScene.addChild(no);
					} else {
						kaiwa = 1;
						window.opacity = 1;
						label.text = mura2_serifu[mura2_serifu.length - 2];
						i = mura2_serifu.length;
					}
				} else {
					window.opacity = 0; 
					label.text = '';
					i = 0;
					kaiwa = 0;
				}
			}
			
			// 村人Aとの会話2
			if(player.intersect(mura1)) {
				if(i == 0) {
					kaiwa = 1;
					window.opacity = 1;
					label.text = mura1_serifu2[i] + " ▼";
					i++;
				} else if(i < mura1_serifu2.length) {
					label.text = mura1_serifu2[i] + ((mura1_serifu2.length > i + 1) ? " ▼" : "");
					i++;
				} else {
					window.opacity = 0; 
					label.text = '';
					i = 0;
					kaiwa = 0;
				}
			}
		};
		game.rootScene.addEventListener(button);

		var control = new Group();
		control.addChild(padArea);
		control.addChild(pad);
		control.addChild(button);
		game.rootScene.addChild(control);
		
		var endPanel = new Sprite(320, 356);
		endPanel.x = 0;
		endPanel.y = 0;
		endPanel.backgroundColor = 'white';
		endPanel.opacity = 0;
		endPanel.visible = false;
		
		var endLabel = new Label("<font size=\"+1\">To be continued...</font>");
		endLabel.x = 85;
		endLabel.y = 90;
		endLabel.color = 'black';
		endLabel.visible = false;
		
		var endButton = new Button("スタート画面へもどる", "light");
		endButton.x = 80;
		endButton.y = 200;
		endButton.backgroundColor = "white";
		endButton.visible = false;
		
		endButton.addEventListener("touchstart", function(){
			var e = new enchant.Event("clear");
			this.dispatchEvent(e);
		});
		
		endButton.onclear = function() {
			game.replaceScene(startScene);
		};

		var time = 0;
		var j = 0;
		game.rootScene.addEventListener('enterframe', function(e) {
			time++;
			var x = Math.min((game.width  - 16) / 2 - player.x, 0);
			var y = Math.min((game.height - 16) / 2 - player.y, 0);
			x = Math.max(game.width,  x + map.width)  - map.width;
			y = Math.max(game.height, y + map.height) - map.height;
			stage.x = x;
			stage.y = y;
			
			if(player.x ==  4 * 16 - 8 && player.y == 3 * 16) {
				if(j == 0) {
					kaiwa = 1;
					endPanel.visible = true;
				}
				if(j < 1 && time%2 == 0) {
					j += 0.1;
					endPanel.opacity = j;
				}
				if(j >= 1) {
					endLabel.visible = true;
					endButton.visible = true;
				}
			}
		});

		game.rootScene.addEventListener('touchstart', function(e) {
			if(sentaku == 0 && kaiwa == 1 && 206 < e.y && e.y < 266) {
				var e = new enchant.Event("enter");
				button.dispatchEvent(e);
			}
		});
		
		// デポジット完了画面
		var depPanel = new Sprite(260, 300);
		depPanel.x = 30;
		depPanel.y = 28;
		depPanel.backgroundColor = 'black';
		depPanel.opacity = 0.8;
		depPanel.visible = false;

		var depLabel1 = new Label("<font size=\"+1\">デポジットが完了しました！</font>");
		depLabel1.x = 50;
		depLabel1.y = 50;
		depLabel1.color = 'white';
		depLabel1.visible = false;

		var depLabel2 = new Label("今回の　デポジット：<B><font color=\"yellow\">100 dp</font></B><br>" +
				"これまでの　デポジット：<B>2200 dp</B><br><br>合計：<B><font size = \"+1\" color=\"yellow\">2300 dp</font></B><br>" +
		"<br>目標達成まで　あと<br><B><font size=\"+1\">17,700 dp</font></B>　です！");
		depLabel2.x = 60;
		depLabel2.y = 90;
		depLabel2.color = 'white';
		depLabel2.visible = false;

		var okButton = new Button("OK", "light");
		okButton.x = 140;
		okButton.y = 270;
		okButton.backgroundColor = "white";
		okButton.visible = false;

		okButton.addEventListener("touchstart", function(){
			var e = new enchant.Event("ok");
			this.dispatchEvent(e);
		});

		okButton.onok = function() {
			depPanel.visible = false;
			depLabel1.visible = false;
			depLabel2.visible = false;
			okButton.visible = false;
			sentaku = 0;			
			i++;
			label.text = mura2_serifu[i];
			i = mura2_serifu.length;
		};

		var depComplete = new Group();
		depComplete.addChild(depPanel);
		depComplete.addChild(depLabel1);
		depComplete.addChild(depLabel2);
		depComplete.addChild(okButton);
		game.rootScene.addChild(depComplete);
		
		var ending = new Group();
		ending.addChild(endPanel);
		ending.addChild(endLabel);
		ending.addChild(endButton);
		game.rootScene.addChild(ending);
		

	};

	game.start();
};