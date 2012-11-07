
<div style="min-height: 10px"></div>
<div id="myCarousel" class="carousel slide">
    <div class="carousel-inner">
        <div class="item active">
            <a href="<?php echo $html->url(array('controller' => 'main', 'action' => 'game'));?>">
            <img src="/img/sample0.png" alt="">
            <div class="carousel-caption">
                <center>
                    <h4>hABeO QUEST III</h4>
                    <p>(C) Team hABeO 1988</p>
                </center>
            </div>
            </a>
        </div>
        <div class="item">
            <img src="/img/sample1.png" alt="">
            <div class="carousel-caption">
                <center>
                    <h4>OSX 10.8 Mountain Lion</h4>
                    <p>(C) Apple Inc</p>
                </center>
            </div>
        </div>
        <div class="item">
            <img src="/img/sample2.png" alt="">
            <div class="carousel-caption">
                <center>
                    <h4>OSX 10.7 Lion</h4>
                    <p>(C) Apple Inc</p>
                </center>
            </div>
        </div>
        <div class="item">
            <img src="/img/sample3.png" alt="">
            <div class="carousel-caption">
                <center>
                    <h4>OSX 10.6 Snow Leopard</h4>
                    <p>(C) Apple Inc</p>
                </center>
            </div>
        </div>
        <div class="item">
            <img src="/img/sample4.png" alt="">
            <div class="carousel-caption">
                <center>
                    <h4>OSX 10.5 Leopard</h4>
                    <p>(C) Apple Inc</p>
                </center>
            </div>
        </div>
        <div class="item">
            <img src="/img/sample5.png" alt="">
            <div class="carousel-caption">
                <center>
                    <h4>OSX 10.4 Tiger</h4>
                    <p>(C) Apple Inc</p>
                </center>
            </div>
        </div>
    </div>
    <a class="carousel-control left" href="#myCarousel"
        data-slide="prev">&lsaquo;</a> <a class="carousel-control right"
        href="#myCarousel" data-slide="next">&rsaquo;</a>
</div>


<script>
    $('.myCarousel').carousel({ interval: 0 })
</script>

