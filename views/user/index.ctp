<?php 
$goods = array();
$imgs = array();
$prices = array();
foreach($data as $good) {
	$goods[] = $good['Good']['name'];
	$imgs[] = $good['Good']['image'];
	$prices[] = $good['Good']['price'];
}
$j_goods = json_encode($goods);
$j_prices = json_encode($prices);
?>
<html>
<head>
<title>ユーザ登録</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<?php  echo $html->script('jquery-1.8.2.min.js'); ?>
<script type="text/javascript">
	$(document).ready(function() {
		$("#tgt").bind('change blur keypress keyup keydown', function() {
			$("#goods").html("");
			var g = <?php echo $j_goods ?>;
			var v = $("#tgt").val();
			var j = 0;
			for(var i in g) {
				var s = String(g[i]);
				if(s.indexOf(v) >= 0) {
					j++;
					$("#goods").attr("size", j);
					$("#goods").append("<option value =\"" + i + "\">"+s+"</option>");
				}
			}
			if(j == 0) {
				$("#goods").attr("size", 1);
				$("#goods").append("<option value =\"empty\">未選択</option>");
			}
		});

		$("#goods").bind('change focus', function() {
			var p = <?php echo $j_prices?>;
			if($("#goods").val() != "empty") {
				$("#tgt").val($("#goods option:selected").text());
				$("#prc").val(p[$("#goods").val()]);
			}
		});
	})
	$
	</script>
</head>
<body>
	<h3>Welcome to Game DE Posit!</h3>
	<br /> 目標を設定して，さっそく貯金を始めましょう！
	<br />
	<?php
	echo $form->create(null, array('url' => '/main/'));
	echo $form->input('名前', array('size' => '40'));
	echo '性別：' . $form->select('User.gender', array('male' => '男性', 'female' => '女性'), null, array('empty' => '性別')) . '<br />';
	echo $form->input('年齢');
	echo $form->input('目標商品', array('id' => 'tgt'));
	?>
	<select id="goods">
	<option value="empty">未選択</option>
	</select>
	<?php
	echo $form->input('目標金額', array('id' => 'prc'));
	echo "何ヶ月で貯金を達成したいですか？<br />";
	echo $form->input('目標期間', array(
			'type' => 'select',
			'options' => array('1' => '1ヶ月', '2' => '2ヶ月', '3' => '3ヶ月', '4' => '4ヶ月'),
			'selected' => '3',
			 ));
	echo $form->submit('登録');
	echo $form->end();
	?>
</body>
</html>
