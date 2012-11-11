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
                    echo '<img src="/img/app_top.gif" style="max-width:65%">';
                else
                    echo '<img src="/img/app_top.gif">';
                ?>
            </div>
        </div>
    </div>
</section>
</div>
<br>
         <?php
             if(isset($value)&&!empty($value)){
                 echo "<ul class='breadcrumb'>";
                 echo '目標商品: '.$this->Session->read('User.target-item')."<br>";
                 echo '目標金額: '.$this->Session->read('User.target-price')."円<br>";
                 echo '目標期間: '.$this->Session->read('User.target-span')."ヶ月";
                 echo "</ul>";
             }
         ?>
<br>