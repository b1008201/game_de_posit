        <?php
             $value =$this->Session->read('User.name');
             if(isset($value)){
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
                <img src="/img/app_top.gif">
            </div>
        </div>
    </div>
</section>
</div>
         <?php
             if(isset($value)){
                 echo "<ul class='breadcrumb'>";
                 echo '目標商品: '.$this->Session->read('User.target-item')."<br>";
                 echo '目標金額: '.$this->Session->read('User.target-price')."<br>";
                 echo '目標期間: '.$this->Session->read('User.target-span')."<br>";
                 echo "</ul>";
             }
         ?>
