	<div class="container">
	   <ul class="breadcrumb">
			<li><a href="/communities/index">コミュニティTOP</a> <span class="divider">/</span></li>
			<li class="active">旅行</li>
	   </ul>
   
  	   <ul class="thumbnails">
		<li class="span9">
    		<div class="thumbnail">
				<div style= "float:left;">
				<?php echo $this->Html->image("trip/bari.gif", array(
   			 	"alt" => "RGXA2",'width' => '64px', 'height' => '64px'))
				?>
				</div>
				<div>
				<font size=3>ガルーダ・インドネシア航空(GA)<br>バリ島<br>￥54,300</font>
				</div>
			</div>
    	</li>
		<li class="span9">
	    	<div class="thumbnail">
			<div style= "float:left;">
				<?php echo $this->Html->image("trip/disny.gif", array(
    			"alt" => "amp",'width' => '64px', 'height' => '64px'))
				?>
			</div>
			<div>
			<font size=3>株式会社 ビーウェーブ<br>東京ディズニーリゾート<br>￥25,200</font>
			</div>
			</div>
		</li>
		<li class="span9">
			<div class="thumbnail">
			<div style= "float:left;">
				<?php echo $this->Html->image("trip/okinawa.gif", array(
			    "alt" => "base",'width' => '64px', 'height' => '64px'))
				?>
			</div>
			<div>
			<font size=3>株式会社 アバンティリゾートクラブ<br>那覇・首里<br>￥82,000</font>
			</div>
			</div>
		</li>
		<li class="span9">
			    <div class="thumbnail">
			<div style= "float:left;">
			<?php echo $this->Html->image("trip/usj.gif", array(
			    "alt" => "music",'width' => '64px', 'height' => '64px'))
			?>
			</div>
			<div>
			<font size=3>名鉄観光サービス 株式会社<br>USJ<br>￥27,700</font>
			</div>
			</div>
		</li>
	</ul>
	<?php echo $html->link("戻る", $referer, array('class'=>'btn btn-large disabled')); ?>   
 </div>