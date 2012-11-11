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
	<legend>Welcome to Game DE Posit!</legend>
	目標を設定して貯金を始めましょう！
	<br /><br />
	<?php
	$user_name = $this->Session->read('User.name');
	if(!empty($user_name)){
    $user_gender = $this->Session->read('User.gender');
    $user_age = $this->Session->read('User.age');
    $user_target_item = $this->Session->read('User.target-item');
    $user_target_price = $this->Session->read('User.target-price');
    $user_target_span = $this->Session->read('User.target-span');
	}
	

	echo $form->create(null, array('url' => '/main/'));
	if(!empty($user_name))
	    echo $form->input('User.name',array('label'=>false, 'type'=>'text', 'placeholder'=>'名前', 'value'=>$user_name));
	else
	    echo $form->input('User.name',array('label'=>false, 'type'=>'text', 'placeholder'=>'名前'));
	if(!empty($user_gender))
	    echo $form->input('User.gender', array('label'=>false, 'type'=>'select', 'selected'=>$user_gender, 'options'=>array('male' => '男性', 'female' => '女性'), 'empty'=>'性別'));
	else
	    echo $form->input('User.gender', array('label'=>false, 'type'=>'select', 'options'=>array('male' => '男性', 'female' => '女性'), 'empty'=>'性別'));
	if(!empty($user_age))
	    echo $form->input('User.age',array('label'=>false, 'type'=>'text','placeholder'=>'年齢', 'value'=>$user_age));
	else
	    echo $form->input('User.age',array('label'=>false, 'type'=>'text','placeholder'=>'年齢'));
	if(!empty($user_target_item))
	    echo $form->input('User.target-item',array('label'=>false, 'id' => 'tgt', 'placeholder'=>'目標商品', 'value'=>$user_target_item));
	else
	    echo $form->input('User.target-item',array('label'=>false, 'id' => 'tgt', 'placeholder'=>'目標商品'));
	echo"
	<select id='goods'>
	<option value='empty'>検索候補</option>
	</select>";
	if(!empty($user_target_price))
	    echo $form->input('User.target-price',array('label'=>false, 'id' => 'prc', 'placeholder'=>'目標金額', 'value'=>$user_target_price));
	else
	    echo $form->input('User.target-price',array('label'=>false, 'id' => 'prc', 'placeholder'=>'目標金額'));
	if(!empty($user_target_span))
	    echo $form->input('User.target-span',array('label'=>false,
			'type' => 'select',
			'options' => array('1' => '1ヶ月', '2' => '2ヶ月', '3' => '3ヶ月', '4' => '4ヶ月', '5'=>'5ヶ月','6'=>'6ヶ月', '7'=>'7ヶ月','8'=>'8ヶ月'),
			'selected' => $user_target_span,
            'empty' =>'何ヶ月で達成したいですか？'
			 ));
	else
	    echo $form->input('User.target-span',array('label'=>false,
			'type' => 'select',
			'options' => array('1' => '1ヶ月', '2' => '2ヶ月', '3' => '3ヶ月', '4' => '4ヶ月', '5'=>'5ヶ月','6'=>'6ヶ月', '7'=>'7ヶ月','8'=>'8ヶ月'),
            'empty' =>'何ヶ月で達成したいですか？'
			 ));
	echo $form->submit('登録',array('class'=>'btn btn-primary'));
	echo $form->end();
	?>
</body>
</html>
