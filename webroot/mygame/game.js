enchant();

var kaiwa = 0;	// 会話中フラグ
var sentaku = 0;	// 選択中フラグ
var s = 0;	// 台詞番号
var dep = 0;	// デポジットフラグ

window.onload = function() {
	/* ゲーム全体の初期設定等 */
	var game = new Game(320, 356);
	game.fps = 15;
	game.preload('map1.gif', 'chara0.gif', 'logo.png');
	game.onload = function() {
		/* ゲームスタート画面 */
		var startScene = new Scene();

		// タイトルロゴ
		var logo = new Sprite(848, 136);
		logo.image = game.assets['logo.png'];
		logo.scaleX = 0.3;
		logo.scaleY = 0.3;
		logo.x = -270;
		logo.y = 20;

		// スタートメニュー
		var startLabel1 = new Label("　 はじめから");
		startLabel1.x = 110;
		startLabel1.y = 190;
		startLabel1.color = 'gray';
		startLabel1.opacity = 0.7;
		var startLabel2 = new Label("▶ つづきから");
		startLabel2.x = 110;
		startLabel2.y = 220;
		startLabel2.width = 80;

		startLabel2.addEventListener("touchstart", function() {
			startLabel2.backgroundColor = 'black';
			startLabel2.color = 'white';
		});

		startLabel2.addEventListener("touchend", function(){
			startLabel2.backgroundColor = '';
			startLabel2.color = 'black';
			game.replaceScene(mainScene);
		});

		startScene.addChild(logo);
		startScene.addChild(startLabel1);
		startScene.addChild(startLabel2);
		game.pushScene(startScene);

		/* ゲーム画面 */
		var mainScene = new Scene();

		// マップの準備
		var map = new Map(16, 16);
		map.image = game.assets['map1.gif'];
		map.loadData([
		              [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
		              [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
		              [322, 322, 322, 342, 342, 342, 342, 342, 342, 342, 342, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
		              [322, 322, 322, 342, 342, 342, 342, 342, 342, 342, 342, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
		              [322, 322, 322, 342, 342, 342, 342, 342, 342, 342, 342, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
		              [322, 322, 322, 342, 342, 342, 342, 342, 342, 342, 342, 322, 322, 322, 322, 322, 342, 342, 342, 342, 342, 342, 342, 322, 322],
		              [322, 322, 322, 342, 342, 342, 342, 342, 342, 342, 342, 322, 322, 322, 322, 322, 342, 342, 342, 342, 342, 342, 342, 322, 322],
		              [322, 322, 322, 342, 342, 342, 342, 342, 342, 342, 342, 322, 322, 322, 322, 322, 342, 342, 342, 342, 342, 342, 342, 322, 322],
		              [322, 322, 322, 342, 342, 342, 342, 342, 342, 342, 342, 322, 322, 322, 322, 322, 342, 342, 342, 342, 342, 342, 342, 322, 322],
		              [322, 322, 322, 322,  24,  25,  26, 322, 322, 322, 322, 322, 322, 322, 322, 322, 342, 342, 342, 342, 342, 342, 342, 322, 322],
		              [322, 322, 322, 322,  64,  68,  66, 322, 322, 322, 322, 322, 322, 322,  24,  26, 342, 342, 342, 342, 342, 342, 342, 322, 322],
		              [322, 322, 322, 322, 322,  43, 322, 322, 322, 322, 322, 322,  20,   1,  47,  46, 342, 342, 342, 342, 342, 342, 342, 322, 322],
		              [322, 322, 322, 322, 322,  43, 322, 322, 322, 322, 322, 322,  43, 322,  64,  66, 342, 342, 342, 342, 342, 342, 342, 322, 322],
		              [322, 322, 322, 322, 322,  40,   1,   1,   1,   1,   1,   1,  62, 322, 322, 322, 342, 342, 342, 342, 342, 342, 342, 322, 322],
		              [322, 322, 322, 322, 322,  43, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 342, 342, 342, 342, 342, 342, 342, 322, 322],
		              [  1,   1,   1,   1,   1,  62, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 342, 342, 342, 342, 342, 342, 342, 322, 322],
		              [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 342, 342, 342, 342, 342, 342, 342, 322, 322],
		              [322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
		              [322, 322, 322, 322, 322, 184, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 186, 322, 322, 322, 322, 322],
		              [322, 322, 322, 322, 322, 204, 205, 166, 225, 225, 167, 205, 205, 205, 205, 205, 205, 205, 205, 206, 322, 322, 322, 322, 322],
		              [322, 322,  24,  26, 322, 204, 205, 206, 322, 322, 204, 205, 205, 205, 205, 205, 205, 205, 205, 164, 186, 322, 322, 322, 322],
		              [322, 322,  44,  49,   1, 204, 205, 206, 322, 322, 204, 205, 205, 205, 205, 205, 205, 205, 205, 205, 206, 322, 322, 322, 322],
		              [322, 322,  64,  66, 322, 204, 205, 164, 185, 185, 165, 205, 205, 205, 166, 225, 225, 225, 225, 225, 226, 322, 322, 322, 322],
		              [322, 322, 322, 322, 322, 204, 205, 205, 205, 205, 205, 205, 205, 205, 206, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
		              [322, 322, 322, 322, 322, 204, 205, 205, 205, 205, 205, 205, 205, 205, 206, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322],
		              [322, 322, 322, 322, 322, 204, 205, 205, 205, 205, 205, 205, 205, 205, 164, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185],
		              [322, 322, 322, 322, 322, 204, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205],
		              [ 82, 322, 322, 322, 322, 204, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205],
		              [102, 322,  80,  81,  82, 204, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205],
		              [101,  81, 101, 101, 102, 204, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205]
		              ],[
		                 [  -1,  -1,  -1,  -1, 461, 462,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                 [  -1,  -1,  -1,  -1, 481, 482, 421, 421, 421,  -1,  -1,  -1, 401,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                 [  -1, 421, 421, 321, 341, 341, 341, 341, 341, 341, 321,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                 [  -1,  -1,  -1, 321, 422,  -1,  -1,  -1, 400, 400, 321,  -1,  -1,  -1,  -1,  -1,  -1,  -1, 461, 462, 461, 462,  -1,  -1,  -1],
		                 [  -1,  -1,  -1, 321,  -1,  -1,  -1,  -1,  -1, 400, 321,  -1,  -1,  -1,  -1,  -1, 421,  -1, 481, 482, 481, 482,  -1,  -1,  -1],
		                 [  -1, 461, 462, 321, 521, 521, 521, 521, 521, 521, 321, 421,  -1,  -1,  -1,  -1, 321, 341, 341, 341, 341, 341, 321,  -1,  -1],
		                 [  -1, 481, 482, 321,  -1,  -1,  -1,  -1,  -1,  -1, 321,  -1,  -1,  -1,  -1,  -1, 321, 420, 420,  -1,  -1,  -1, 321,  -1,  -1],
		                 [  -1,  -1,  -1, 321,  -1,  -1,  -1,  -1,  -1,  -1, 321,  -1,  -1,  -1,  -1,  -1, 321,  -1,  -1,  -1,  -1,  -1, 321,  -1,  -1],
		                 [  -1,  -1,  -1, 341,  -1,  -1, 341, 341, 341, 341, 341,  -1,  -1,  -1,  -1,  -1, 321, 521, 521, 521,  -1, 521, 321,  -1,  -1],
		                 [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1, 341,  -1,  -1,  -1,  -1,  -1, 321,  -1,  -1],
		                 [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1, 321,  -1,  -1],
		                 [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1, 321,  -1,  -1],
		                 [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1, 421,  -1,  -1,  -1,  -1, 321, 341, 341,  -1,  -1,  -1, 321, 520,  -1],
		                 [  -1, 460,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1, 421,  -1,  -1, 321,  -1,  -1,  -1,  -1,  -1, 321, 520,  -1],
		                 [  -1, 480,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1, 321,  -1,  -1,  -1,  -1, 400, 321, 520,  -1],
		                 [ 401,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1, 321,  -1,  -1,  -1, 400, 400, 321, 520,  -1],
		                 [  -1,  -1,  -1,  -1, 421, 421, 421,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1, 341, 341, 341, 341, 341, 341, 341, 520,  -1],
		                 [  -1,  -1,  -1,  -1,  -1, 421, 421,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1, 520, 520,  -1,  -1],
		                 [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                 [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                 [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1, 421, 421,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                 [  -1,  -1,  -1,  -1,  -1, 521, 521, 521,  -1, 421,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                 [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                 [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1, 400,  -1, 421, 421, 421,  -1,  -1,  -1,  -1,  -1],
		                 [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1, 421,  -1,  -1,  -1,  -1,  -1,  -1],
		                 [ 520, 520, 520,  -1, 520,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                 [ -1,  520,  -1,  520,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                 [ -1,  -1, 520,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                 [ -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                 [ -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                 ]);
		map.collisionData = [
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
		                     [  0,  0,  0,  0,  1,  1,  0,  0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
		                     [  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
		                     [  0,  0,  0,  1,  0,  0,  0,  0,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
		                     [  0,  0,  0,  1,  0,  1,  0,  0,  0,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  0,  0,  0],
		                     [  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  0,  0],
		                     [  0,  1,  1,  1,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  1,  1,  1,  0,  0,  0,  1,  0,  0],
		                     [  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0],
		                     [  0,  0,  0,  1,  0,  0,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  0,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  0,  0,  0,  1,  1,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  1,  1,  0],
		                     [  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  1,  1,  1,  0],
		                     [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  1,  1,  1,  1,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  0,  0],
		                     [  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0],
		                     [  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0],
		                     [  0,  0,  0,  0,  0,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0],
		                     [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0],
		                     [  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0],
		                     [  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0],
		                     [  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
		                     [  1,  1,  1,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
		                     [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
		                     [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
		                     [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
		                     [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
		                     ];
		var foregroundMap = new Map(16, 16);
		foregroundMap.image = game.assets['map1.gif'];
		foregroundMap.loadData([
		                        [  -1,  -1,  -1,  -1, 461, 462,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1, 461, 462, 461, 462,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1, 461, 462,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1, 460,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        [  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
		                        ]);

		// プレイヤーの準備
		var player = new Sprite(32, 32);
		player.x = 6 * 16 - 8;
		player.y = 10 * 16;
		var image = new Surface(96, 128);
		image.draw(game.assets['chara0.gif'], 0, 0, 96, 128, 0, 0, 96, 128);
		player.image = image;

		// プレイヤー操作処理
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

		// 村人A
		var mura1 = new Sprite(32, 32);
		mura1.x = 5 * 16 - 8;
		mura1.y = 3 * 16;
		var image2 = new Surface(96, 128);
		image2.draw(game.assets['chara0.gif'], 96, 0, 96, 128, 0, 0, 96, 128);
		mura1.image = image2;
		mura1.frame = 1;

		// 村人B
		var mura2 = new Sprite(32, 32);
		mura2.x = 20 * 16 - 8;
		mura2.y = 7 * 16;
		var image3 = new Surface(96, 128);
		image3.draw(game.assets['chara0.gif'], 192, 0, 96, 128, 0, 0, 96, 128);
		mura2.image = image3;
		mura2.frame = 1;

		// 村人C
		var mura3 = new Sprite(32, 32);
		mura3.x = 9 * 16 - 8;
		mura3.y = 19 * 16;
		var image4 = new Surface(96, 128);
		image4.draw(game.assets['chara0.gif'], 96, 0, 96, 128, 0, 0, 96, 128);
		mura3.image = image4;
		mura3.frame = 4;

		// 村人D
		var mura4 = new Sprite(32, 32);
		mura4.x = 13 * 16 - 8;
		mura4.y = 0;
		var image5 = new Surface(96, 128);
		image5.draw(game.assets['chara0.gif'], 0, 0, 96, 128, 0, 0, 96, 128);
		mura4.image = image5;
		mura4.frame = 4;

		// 村人A会話用
		var mura1_ = new Entity();
		mura1_.width = 16;
		mura1_.height = 16;
		mura1_.x = 5 * 16;
		mura1_.y = 5 * 16;

		// 立札
		var fuda = new Entity();
		fuda.width = 16;
		fuda.height = 16;
		fuda.x = 1 * 16;
		fuda.y = 14 * 16;

//		// つぼ
//		var tsubo = new Array();
//		var tposX = new Array(8, 9, 21, 20, 15); // つぼの位置座標
//		var tposY = new Array(3, 4, 14, 15, 23);
//		for(var i = 0; i < 5; i++) {
//		tsubo[i] = new Entity();
//		tsubo[i].width = 16;
//		tsubo[i].height = 16;
//		tsubo[i].x = tposX[i] * 16;
//		tsubo[i].y = tposY[i] * 16;
//		}

		// 台詞ウィンドウ
		var window = new Sprite(220, 60);
		window.x = 50;
		window.y = 206;
		window.backgroundColor = 'black';
		window.visible = false;

		// 台詞ラベル
		var serifuLabel = new Label("");
		serifuLabel.x = 60;
		serifuLabel.y = 210;
		serifuLabel.color = 'white';

		// デポジット完了画面
		var depPanel = new Sprite(260, 300);
		depPanel.x = 30;
		depPanel.y = 28;
		depPanel.backgroundColor = 'black';
		depPanel.opacity = 0.8;

		var depLabel1 = new Label("<font size=\"+1\">デポジットが完了しました！</font>");
		depLabel1.x = 50;
		depLabel1.y = 50;
		depLabel1.color = 'white';

		var depLabel2 = new Label("今回の　デポジット：<B><font color=\"yellow\">100 dp</font></B><br>" +
				"これまでの　デポジット：<B>2200 dp</B><br><br>合計：<B><font size = \"+1\" color=\"yellow\">2300 dp</font></B><br>" +
		"<br>目標達成まで　あと<br><B><font size=\"+1\">17,700 dp</font></B>　です！");
		depLabel2.x = 60;
		depLabel2.y = 90;
		depLabel2.color = 'white';

		var okButton = new Button("OK", "light");
		okButton.x = 140;
		okButton.y = 270;
		okButton.backgroundColor = "white";

		var depComplete = new Group();
		depComplete.addChild(depPanel);
		depComplete.addChild(depLabel1);
		depComplete.addChild(depLabel2);
		depComplete.addChild(okButton);

		// 選択肢ボタン
		var yes = new Button("はい", "light");
		yes.x =  95;
		yes.y = 145;
		yes.backgroundColor = "white";
		yes.addEventListener("touchstart", function(){
			var e = new enchant.Event("yesinput");
			this.dispatchEvent(e);
		});
		// はいを選んだときの処理
		yes.onyesinput = function() {
			if(dep == 0) {
				s++;
				dep++;
				mura3Conv(serifuLabel, window, yes, no, mainScene);
			} else {
				dep++;
				mainScene.removeChild(yes);
				mainScene.removeChild(no);
				mainScene.addChild(depComplete);
			}
		};

		var no = new Button("いいえ", "light");
		no.x = 175;
		no.y = 145;
		no.backgroundColor = "white";
		no.addEventListener("touchstart", function(){
			var e = new enchant.Event("noinput");
			this.dispatchEvent(e);
		});
		// いいえを選んだときの処理
		no.onnoinput = function() {
			s = 3;
			dep = 0;
			sentaku = 0;
			mainScene.removeChild(yes);
			mainScene.removeChild(no);
			mura3Conv(serifuLabel, window, yes, no, mainScene);
		};
		
		// デポジット画面のOKボタンの処理
		okButton.addEventListener("touchstart", function(){
			var e = new enchant.Event("ok");
			this.dispatchEvent(e);
		});

		okButton.onok = function() {
			mainScene.removeChild(depComplete);
			sentaku = 0;
			s = 0;
			map.collisionData[2][7] = 0;
			mura3Conv(serifuLabel, window, yes, no, mainScene);
		};

		// マップ，人をゲーム画面に追加
		var stage = new Group();
		stage.addChild(map);
		stage.addChild(mura2);
		stage.addChild(mura3);
		stage.addChild(mura4);
		stage.addChild(player);
		stage.addChild(mura1);
		stage.addChild(mura1_);
		stage.addChild(fuda);
//		for(var i = 0; i < tsubo.length; i++) {
//		stage.addChild(tsubo[i]);
//		}
		stage.addChild(foregroundMap);
		mainScene.addChild(stage);
		mainScene.addChild(window);
		mainScene.addChild(serifuLabel);

		// 操作パネルの準備		
		var pad = new Pad();
		pad.x = 20;
		pad.y = 260;
		pad.scaleX = 0.8;
		pad.scaleY = 0.8;

		var button = new Button("しらべる/はなす");
		button.color = 'white';
		button.x = 160;
		button.y = 300;

		button.addEventListener("touchstart", function(){
			var e = new enchant.Event("enter");
			this.dispatchEvent(e);
		});

		// はなす/しらべるボタンを押したときの処理
		button.onenter = function() {
			if(player.intersect(mura1_) && player.direction == 3) {
				mura1Conv(serifuLabel, window);
			} else if(player.intersect(mura2) && player.direction == 3) {
				mura2Conv(serifuLabel, window);
			} else if(player.intersect(mura3) && (player.direction == 2 || player.direction == 3)) {
				mura3Conv(serifuLabel, window, yes, no, mainScene);
			} else if(player.intersect(mura4)) {
				mura4Conv(serifuLabel, window);
			} else if(player.intersect(mura1)) {
				mura1Conv2(serifuLabel, window);
			}else if(player.intersect(fuda) && player.direction == 3) {
				fudaCheck(serifuLabel, window);
			} else {
//				for(var i = 0; i < tsubo.length; i++) {
//				if(player.intersect(tsubo[i])) {
//				tsuboCheck(i);
//				return;
//				}
//				}
				nashiCheck(serifuLabel, window);
			}
		};
		mainScene.addEventListener(button);

		// 会話時はウィンドウクリックで会話が進むように設定
		window.addEventListener("touchend", function() {
			if(kaiwa == 1 && sentaku == 0) {
				var e = new enchant.Event("enter");
				button.dispatchEvent(e);
			}
		});

		serifuLabel.addEventListener("touchend", function() {
			if(kaiwa == 1 && sentaku == 0) {
				var e = new enchant.Event("enter");
				button.dispatchEvent(e);
			}
		});

		// 操作パネルをゲーム画面に追加
		var control = new Group();
		control.addChild(pad);
		control.addChild(button);
		mainScene.addChild(control);
		
		// ゲーム終了画面
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
		
		var ending = new Group();
		ending.addChild(endPanel);
		ending.addChild(endLabel);
		ending.addChild(endButton);
		mainScene.addChild(ending);

		// 階段エフェクト用
		var time = 0; 
		var j = 0;
		
		// 移動時のウィンドウ制御等
		mainScene.addEventListener('enterframe', function(e) {
			var x = Math.min((game.width  - 16) / 2 - player.x, 0);
			var y = Math.min((game.height - 16) / 2 - player.y, 0);
			x = Math.max(game.width,  x + map.width)  - map.width;
			y = Math.max(game.height, y + map.height) - map.height;
			stage.x = x;
			stage.y = y;
			
			// 階段を降りたときの処理
			if(player.x ==  4 * 16 - 8 && player.y == 2 * 16) {
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
//		game.pushScene(mainScene);
	};
	game.start();
};

var nashi = new Array("はべおは　あしもとを<br>しらべた！", "とくに　なにも<br>みつからなかった。");
var mura1_s = new Array("しってる？<br>となりの　いえの　ひと", "すごい　たからものを<br>もっている　らしいわ。");
var mura1_s2 = new Array("あらっ　みつかっちゃった。", "しかたないわね　ちかの　たからは<br>もって　いっても　いいわよ。");
var mura2_s2 = new Array("たからもの　なんて<br>うちには　ないわよ。");
var mura2_s = new Array("<font color=\"yellow\">5000 dp</font>　たまってから<br>でなおして　いらっしゃい。", "そうしたら　<font color=\"yellow\">でんせつの　ゆびわ</font> を<br>あげるわ。");
var fuda_s = new Array("キケン！　らくせきに　より<br>つうこうどめ！");
var mura4_s = new Array("おれは　ちからじまん。", "こんな　いわなんて<br>かんたんに　どかせるぜ。", "<font color=\"yellow\">でんせつの　ゆびわ</font>　を<br>わたして　くれたら", "らくせきを　かたづけて<br>やるよ。");
var mura3_s = new Array("にしがわの　いえは<br>わたしの　あねの　いえなの。", "<font color=\"yellow\">100dp</font>　で　ひみつを<br>おしえて　あげても　いいわよ。", "<font color=\"yellow\">100dp</font>　かかるけど<br>ほんとうに　きくのね？", "あら　いいの？");
var mura3_s2 = new Array("あのいえには　うらぐちが<br>あるの。", "<font color=\"yellow\">みぎから　4れつめ</font>　の　かべを<br>しらべてみると　いいわよ。");

var mura2Flag = 0;

/*
 * 村人Aとの会話
 */
function mura1Conv(label, window) {
	if(s == 0) {
		kaiwa = 1;
		window.visible = true;
		label.text = mura1_s[s] + " ▼";
		s++;
	} else if(s < mura1_s.length){
		label.text = mura1_s[s] + ((mura1_s.length > s + 1) ? "▼" : "");
		s++;
	} else {
		window.visible = false;
		label.text = "";
		s = 0;
		kaiwa = 0;
		mura2Flag++;
	}
}

/*
 * 村人Aとの会話その2
 */
function mura1Conv2(label, window) {
	if(s == 0) {
		kaiwa = 1;
		window.visible = true;
		label.text = mura1_s2[s] + " ▼";
		s++;
	} else if(s < mura1_s2.length){
		label.text = mura1_s2[s] + ((mura1_s2.length > s + 1) ? "▼" : "");
		s++;
	} else {
		window.visible = false;
		label.text = "";
		s = 0;
		kaiwa = 0;
	}
}

/*
 * 村人Bとの会話
 */
function mura2Conv(label, window) {
	if(mura2Flag == 0) {
		if(s == 0) {
			kaiwa = 1;
			window.visible = true;
			label.text = mura2_s2[s];
			s++;
		} else {
			window.visible = false;
			label.text = "";
			s = 0;
			kaiwa = 0;
		}
	} else {
		if(s == 0) {
			kaiwa = 1;
			window.visible = true;
			label.text = mura2_s[s] + " ▼";
			s++;
		} else if(s < mura2_s.length){
			label.text = mura2_s[s] + ((mura2_s.length > s + 1) ? "▼" : "");
			s++;
		} else {
			window.visible = false;
			label.text = "";
			s = 0;
			kaiwa = 0;
		}
	}
}

/*
 * 村人Cとの会話
 */
function mura3Conv(label, window, yes, no, mainScene) {
	if(dep < 2) {
		if(s == 0) {
			kaiwa = 1;
			window.visible = true;
			label.text = mura3_s[s] + " ▼";
			s++;
		}else if(s == 1) {
			label.text = mura3_s[s] +  "▼";
			sentaku = 1;
			mainScene.addChild(yes);
			mainScene.addChild(no);
		} else if(s == 2){
			label.text = mura3_s[s] + "▼";
		} else if(s == 3) {
			label.text = mura3_s[s];
			s++;
		} else {
			window.visible = false;
			label.text = "";
			s = 0;
			kaiwa = 0;
		}
	} else {
		if(s == 0) {
			kaiwa = 1;
			window.visible = true;
			label.text = mura3_s2[s] + " ▼";
			s++;
		} else if(s < mura3_s2.length){
			label.text = mura3_s2[s] + ((mura3_s2.length > s + 1) ? "▼" : "");
			s++;
		} else {
			window.visible = false;
			label.text = "";
			s = 0;
			kaiwa = 0;
		}
	}
}

/*
 * 村人Dとの会話
 */
function mura4Conv(label, window) {
	if(s == 0) {
		kaiwa = 1;
		window.visible = true;
		label.text = mura4_s[s] + " ▼";
		s++;
	} else if(s < mura4_s.length){
		label.text = mura4_s[s] + ((mura4_s.length > s + 1) ? "▼" : "");
		s++;
	} else {
		window.visible = false;
		label.text = "";
		s = 0;
		kaiwa = 0;
	}
}

/*
 * 立て札を調べたとき
 */
function fudaCheck(label, window) {
	if(s == 0) {
		kaiwa = 1;
		window.visible = true;
		label.text = fuda_s[s];
		s++;
	} else {
		window.visible = false;
		label.text = "";
		s = 0;
		kaiwa = 0;
	}
}

/*
 * つぼを調べたとき
 */
function tsuboCheck(i) {

}

/*
 * 何もないとき
 */
function nashiCheck(label, window) {
	if(s == 0) {
		kaiwa = 1;
		window.visible = true;
		label.text = nashi[s] + " ▼";
		s++;
	} else if(s < nashi.length){
		label.text = nashi[s] + ((nashi.length > s + 1) ? "▼" : "");
		s++;
	} else {
		window.visible = false;
		label.text = "";
		s = 0;
		kaiwa = 0;
	}
}