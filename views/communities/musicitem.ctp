   <div class="container">
<br>
<br>

   <ul class="breadcrumb">
		<li><a href="http://localhost/communities/index">コミュニティTOP</a> <span class="divider">/</span></li>
		<li class="active">楽器</li>
   </ul>
   
  
   <ul class="thumbnails">
		<li class="span9">
    		<div class="thumbnail">
				<div style= "float:left;">
				<?php echo $this->Html->image("gakki/sax.gif", array(
   			 	"alt" => "RGXA2",'width' => '64px', 'height' => '64px',
    		 	'url' => array('controller' => 'communities', 'action' => 'bbs')))
				?>
				</div>
				<div>
				<font size=3>YAMAHA<br>アルトサクソフォン<br>￥109,200</font>
				</div>
			</div>
    	</li>
		<li class="span9">
	    	<div class="thumbnail">
			<div style= "float:left;">
				<?php echo $this->Html->image("gakki/amp.gif", array(
    			"alt" => "amp",'width' => '64px', 'height' => '64px'))
				?>
			</div>
			<div>
<font size=3>VOX<br>AGA70 VOX｜アコースティックギターアンプ<br>￥30,240</font>
</div>
</div>
    </li>
   <li class="span9">
    <div class="thumbnail">
<div style= "float:left;">
<?php echo $this->Html->image("gakki/base.gif", array(
    "alt" => "base",'width' => '64px', 'height' => '64px'))
?>
</div>
<div>
<font size=3>FENDER(フェンダー)<br>Standard Jazz Bass Black ジャズベース<br>￥54,800</font>
</div>
</div>
    </li>
   <li class="span9">
    <div class="thumbnail">
<div style= "float:left;">
<?php echo $this->Html->image("music/RGXA2.jpg", array(
    "alt" => "music",'width' => '64px', 'height' => '64px'))
?>
</div>
<div>
<font size=3>ヤマハ<br>RGX SERIES RGXA2 [WAG]<br>¥45,800</font>
</div>
</div>
    </li>
  </ul>
	<?php echo $html->link("戻る", $referer, array('class'=>'btn btn-large disabled')); ?>
 </div>
   
   
