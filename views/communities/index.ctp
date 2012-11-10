<?php echo $html->css("community.css", "stylesheet"); ?>
     <div class="container">
    	<div class="row">
        	<div class="span9">
				<div align="center">
				<?php echo $this->Html->image("icon/com_top.gif", array(
				    "alt" => "music",'width' => '320px', 'height' => '136px',
				    )); ?>        
				</div>
			</div>    
			<div class="span9">
				<div align="center"> 
				<?php echo $this->Html->image("icon/icon01.gif", array(
				    "alt" => "music",'width' => '100px', 'height' => '100px',
					'url' => array('controller' => 'communities', 'action' => 'musicitem')
			    	)); ?>
				<?php echo $this->Html->image("icon/icon04.gif", array(
			    	"alt" => "trip",'width' => '100px', 'height' => '100px',
					'url' => array('controller' => 'communities', 'action' => 'tripitem'),	
					'style'=>"margin:4px;"
					)); ?>
				</div>
			</div>
            <div class="span9">
				<div align="center"> 
               <?php echo $this->Html->image("icon/icon08.gif", array(
				     "alt" => "ax",'width' => '100px', 'height' => '100px',
	            		)); ?>
	            <?php echo $this->Html->image("icon/icon07.gif", array(
				    "alt" => "pet",'width' => '100px', 'height' => '100px',
	            	'style'=>"margin:4px;"
	            )); ?>
				</div>
            </div>
                        <div class="span9">
				<div align="center"> 
               <?php echo $this->Html->image("icon/icon05.gif", array(
				     "alt" => "car",'width' => '100px', 'height' => '100px',
	            		)); ?>
	            <?php echo $this->Html->image("icon/icon06.gif", array(
				    "alt" => "pc",'width' => '100px', 'height' => '100px',
	            	'style'=>"margin:4px;"
	            )); ?>
				</div>
            </div>
    </div> 
</div>   