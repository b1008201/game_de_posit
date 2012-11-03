

	<div class="page-header">
		<h2>エレキギター RGXA2</h2>
	</div>

	<?php
	$bbs=array();

	echo $form->create("Community", array("action" => "bbs" ));
	echo $form->textarea("Community.comment",array("maxLength" => "140" ,"rows" => "4")); 
	echo $form->submit('送信');
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
	<?php	} ?>



