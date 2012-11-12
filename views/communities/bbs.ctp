

	   <ul class="breadcrumb">
			<li><a href="/communities/index">コミュニティTOP</a> <span class="divider">/</span></li>
			<li><a href="/communities/musicitem">楽器</a> <span class="divider">/</span></li>
			<li class="active">RGX SERIES RGXA2 [WAG]</li>
	   </ul>
    <div class="span9">	   
    <div class="hero-unit" style="padding: 20px;">
	<?php
	$bbs=array();
	echo $form->create("Community", array("action" => "bbs" ));
	echo $form->textarea("Community.comment",array("maxLength" => "140" ,"rows" => "4", 'placeholder'=>'本文')); 
	$username=$this->Session->read('User.name');
	if(empty($username)){
	    echo $form->input("Community.username",array('type'=>'text', 'placeholder'=>'ユーザ名','label'=>false)); 
	}else{
	    echo $form->input("Community.username",array('type'=>'text', 'placeholder'=>'ユーザ名','label'=>false, 'value'=>$username)); 
	}
	echo $form->submit('送信', array('class'=>'btn btn-primary','value'=>'hABeO'));
	echo $form->end();
	?>
	</div>
	</div>
   	<ul class="row">
	<?php foreach ($all_bbs as $bbs) { ?>
    		<li class="span9">
    			    <table class="table table-bordered">
    			        <tr>
    			            <th><?php echo h($bbs["Community"]["username"]); ?></th>
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
	
	