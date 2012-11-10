

<div class="page-header">
		<h2>アルトサクソフォン</h2>
	</div>

<div class="row">
    <div class="span9">
	<?php
	$bbs=array();

	echo $form->create("Community", array("action" => "bbs" ));
	echo $form->textarea("Community.comment",array("maxLength" => "140" ,"rows" => "4")); 
	echo $form->submit('送信', array('class'=>'btn btn-primary'));
	echo $form->end();
	?>


	<?php foreach ($all_bbs as $bbs) { ?>
    	<ul class="thumbnails">
    		<li class="span2">
    			<div class="thumbnail">
					<?php echo h($bbs["Community"]["comment"]); ?>
				</div>
			</li>
		</ul>
	<?php	}?>
	</div>
</div>

<div class="row">
    <div class="span9">
		<div class="pagination">
		    <ul>
    <?php	
        echo "<li>".$paginator->prev(__('前へ', true), array('tag' => 'a'))."</li>";
        echo $paginator->numbers( array('tag' => 'a', 'separator' => null, 'before'=>'<li>', 'after'=>'</li>', 'modulus'=>5) );
        echo "<li>".$paginator->next(__('次へ', true), array('tag' => 'a'))."</li>"; 
    ?>
            </ul>
		</div>
	</div>
</div>
	
	