

<?php echo $html->css("community.css", "stylesheet"); ?>

     <div class="container">
        <div class="page-header">
        <h3>コミュニティ</h3>
    </div>   

    <div class="row">
            <div class="span9">
<?php echo $this->Html->image("icon/icon01.gif", array(
    "alt" => "music",'width' => '130px', 'height' => '130px',
    'url' => array('controller' => 'communities', 'action' => 'musicitem')
    )); ?>
            <?php echo $this->Html->image("icon/icon04.gif", array(
    "alt" => "trip",'width' => '130px', 'height' => '130px',
    'url' => array('controller' => 'communities', 'action' => 'tripitem')
    )); ?>
   
</div>
            <div class="span9">
            <?php echo $this->Html->image("icon/icon08.gif", array(
     "alt" => "ax",'width' => '130px', 'height' => '130px'
    )); ?>
            <?php echo $this->Html->image("icon/icon03.gif", array(
    "alt" => "pc",'width' => '130px', 'height' => '130px',
    )); ?>
            </div>
    </div> 
</div>
<br>   
