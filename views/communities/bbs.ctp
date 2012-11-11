

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
    <?php	
		echo $paginator->prev('< '.__('前へ', true), array(), null, array('class'=>'disabled' )) . ' | '.
	$paginator->numbers().
	' | '.
	$paginator->next(__('次へ', true).' >', array(), null, array
	('class'=>'disabled' )); 
	?>

        </div>
    </div>
</div>
	
	