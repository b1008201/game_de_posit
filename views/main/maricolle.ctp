
<div style="min-height: 10px"></div>
<div id="myCarousel" class="carousel slide">
    <div class="carousel-inner">
        <div class="item active">
            <center>
                <a href="<?php echo $html->url(array('controller' => 'main', 'action' => 'game'));?>">
                    <img src="/img/habeo_quest.gif" alt="hABeO Quest">
                </a>
            </center>
        </div>
        <div class="item">
            <center>
                <img src="/img/habeofighter.gif" alt="hABeO Fighter">
            </center>
        </div>
        <div class="item">
            <center>
                <img src="/img/habeonomori.gif" alt="はべおのもり">
            </center>
        </div>
        <div class="item">
            <center>
                <img src="/img/habehabe.gif" alt="ハベハベ">
            </center>
        </div>
    </div>
    <a class="carousel-control left" href="#myCarousel"
        data-slide="prev">&lsaquo;</a> <a class="carousel-control right"
        href="#myCarousel" data-slide="next">&rsaquo;</a>
</div>
<script>
    $('.myCarousel').carousel('pause')
</script>

