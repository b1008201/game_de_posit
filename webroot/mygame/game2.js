enchant();

window.onload = function() {
	var game = new Game(320, 320);
	game.fps = 24;
	game.preload('chara1.gif');
	
	game.onload = function() {
		var bear = new Sprite(32, 32);
		bear.image = game.assets['chara1.gif'];
		bear.frame = 0;
//		bear.rotation = 90;
//		bear.scaleX = 2;
//		bear.scaleY = 2;
//		bear.rotate(180);
//		bear.scale(1, 2);
		bear.x = 100;
		bear.y = 200;
		bear.backgroundColor = 'green';
		
		var bear2 = new Sprite(32, 32);
		bear2.image = game.assets['chara1.gif'];
		bear2.x = 10;
		bear2.y = 200;
		bear2.frame = 8;
		bear2.backgroundColor = 'red';
		
		var label = new Label('test');
		label.x = 5;
		label.y = 5;
		label.color = 'red';
		label.font = 'bold 24px impact';
		
		var gameOverScene = new Scene();
		gameOverScene.backgroundColor = 'black';
		
//		game.addEventListener('enterframe', function() {
//			bear.x += 5;
//		});
		
//		bear.addEventListener('touchstart', function() {
//			bear.x += 5;
//		});
		
		bear.addEventListener('enterframe', function() {
			if(game.input.right) {
				this.x += 5;
			}
			if(game.input.left) {
				this.x -= 5;
			}
//			if(this.intersect(bear2)) {
//				label.text = 'hit!';
//			}
			if(this.within(bear2, 5)) {
				game.pushScene(gameOverScene);
				game.stop();
			}

		});
		
		game.rootScene.addChild(bear);
		game.rootScene.addChild(bear2);
		game.rootScene.addChild(label);
	};
	
	game.start();
};