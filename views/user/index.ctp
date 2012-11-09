<h3>Welcome to Game DE Posit!</h3>
<br />
目標を設定して，さっそく貯金を始めましょう！<br />
<?php 
echo $form->create(null, array('url' => '/main/'));
echo $form->input('名前', array('size' => '40'));
echo '性別：' . $form->select('User.gender', array('male' => '男性', 'female' => '女性'), null, array('empty' => '性別')) . '<br />';
echo $form->input('年齢');
echo $form->input('目標商品');
echo $form->input('目標金額');
echo $form->submit('登録');
echo $form->end();
