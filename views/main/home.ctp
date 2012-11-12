<style type="text/css">body {padding-bottom: 40px;}img{min-width: 75%;} </style>
<?php
             $value =$this->Session->read('User.name');
             if(isset($value)&&!empty($value)){
                 echo "<ul class='breadcrumb'>";
                 echo $value.'さんログイン中';
                 echo "</ul>";
             }
         ?>

<div align="center">
<section id="help">
    <div class="container">
        <div class="row">
            <div class="span9">
            <?php
                if(isset($value)&&!empty($value))
                    echo '<img src="/img/app_top.gif" style="max-width:65%"><br>';
                else
                    echo '<img src="/img/app_top.gif"><br>'.$html->link('→ユーザ登録ページへ', array('controller' => 'user', 'action' => 'index'));
                ?>
            </div>
        </div>
    </div>
</section>
</div>
<br>
         <?php
             if(isset($value)&&!empty($value)){
                 $item=$this->Session->read('User.target-item');
                 $price=$this->Session->read('User.target-price');
                 $span=$this->Session->read('User.target-span');
                 if(!(empty($item)&&empty($price)&&empty($span))) echo "<ul class='breadcrumb'>";
                 if(!empty($item))echo '目標商品: '.$item."<br>";
                 if(!empty($price))echo '目標金額: '.$price."円<br>";
                 if(!empty($span))echo '目標期間: '.$span."ヶ月";
                 if(!(empty($item)&&empty($price)&&empty($span))) echo "</ul>";
                 else echo "<br><br>";
             }
         ?>
<br>