

	   <ul class="breadcrumb">
			<li><a href="/communities/index">コミュニティTOP</a> <span class="divider">/</span></li>
			<li><a href="/communities/musicitem">楽器</a> <span class="divider">/</span></li>
			<li class="active">アルトサクソフォン</li>
	   </ul>
	   
	<div class="row">
    <div class="span9">
	<?php
	$bbs=array();
	echo $form->create("Community", array("action" => "bbs" ));
	echo $form->textarea("Community.comment",array("maxLength" => "140" ,"rows" => "4")); 
	echo $form->input("Community.username"); 
	echo $form->submit('送信', array('class'=>'btn btn-primary','value'=>'hABeO'));
	echo $form->end();
	?>

   	<ul class="thumbnails">
	<?php foreach ($all_bbs as $bbs) { ?>
    		<li class="span9">
    			    <table class="table table-bordered">
    			        <tr>
    			            <td><?php echo h($bbs["Community"]["username"]); ?></td>
    			            <td><?php echo h($bbs["Community"]["comment"]); ?></td>
    			        </tr>
    			    </table>
			</li>
	<?php	}?>
	</ul>
	</div>
</div>

<div class="row">
    <div class="span9">
        <div class="pagination">
            <ul>
                <?php echo $this->Paginator->first('<<', array('tag' => 'li')); ?>
                <?php echo $this->Paginator->prev('<', array(
                        'tag' => 'li',
                        'class' => 'prev',
                ), $this->Paginator->link('<', array()), array(
                        'tag' => 'li',
                        'escape' => false,
                        'class' => 'prev disabled',
                )); ?>
                <?php
                $page = $this->params['paging'][$model]['page'];
                $pageCount = $this->params['paging'][$model]['pageCount'];
                if ($modulus > $pageCount) {
$modulus = $pageCount;
}
$start = $page - intval($modulus / 2);
if ($start < 1) {
$start = 1;
}
$end = $start + $modulus;
if ($end > $pageCount) {
$end = $pageCount + 1;
$start = $end - $modulus;
}
for ($i = $start; $i < $end; $i++) {
$url = array('page' => $i);
$class = null;
if ($i == $page) {
$url = array();
$class = 'active';
}
echo $this->Html->tag('li', $this->Paginator->link($i, $url), array(
'class' => $class,
));
}
?>
                <?php echo $this->Paginator->next('>', array(
                        'tag' => 'li',
                        'class' => 'next',
                ), $this->Paginator->link('>', array()), array(
'tag' => 'li',
'escape' => false,
'class' => 'next disabled',
)); ?>
                <?php echo str_replace('<>', '', $this->Html->tag('li', $this->Paginator->last('>>', array(
'tag' => null,
)), array(
'class' => 'next',
))); ?>
            </ul>
        </div>
    </div>
</div>
	
	