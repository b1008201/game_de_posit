

	   <ul class="breadcrumb">
			<li><a href="/communities/index">コミュニティTOP</a> <span class="divider">/</span></li>
			<li><a href="/communities/musicitem">楽器</a> <span class="divider">/</span></li>
			<li class="active">アルトサクソフォン</li>
	   </ul>
    <div class="span9">	   
    <div class="hero-unit" style="padding: 20px;">
	<?php
	$bbs=array();
	echo $form->create("Community", array("action" => "bbs" ));
	echo $form->textarea("Community.comment",array("maxLength" => "140" ,"rows" => "4", 'placeholder'=>'本文')); 
	echo $form->input("Community.username",array('type'=>'text', 'placeholder'=>'ユーザ名','label'=>false)); 
	echo $form->submit('送信', array('class'=>'btn btn-primary','value'=>'hABeO'));
	echo $form->end();
	?>
	</div>
	</div>
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

<div class="row">
    <div class="span9">
<?php echo $this->element('paginate'); ?>
    </div>
</div>
	
	