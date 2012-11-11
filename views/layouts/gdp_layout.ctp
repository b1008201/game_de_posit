<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <title>
            <?php echo $title_for_layout; ?>
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php
            echo $html->css("bootstrap.min.css", "stylesheet");
            echo '<style type="text/css">body {padding-bottom: 40px;} </style>';
            echo $html->css("bootstrap-responsive.min.css", "stylesheet");
            echo $scripts_for_layout;
            echo '<style type="text/css">.navbar-fixed-top{position: fixed;} .brand [class^="icon-"], .brand [class*=" icon-"]{background-image: url("/img/glyphicons-halflings-white.png"); margin-top: 5px;}</style>';
            echo $html->css("bootstrap-habeo-tuned.css", "stylesheet")
        ?>
    </head>

    <body <?php if(isset($body_for_layout)) ?>>
    <div class="navbar navbar-inverse navbar-fixed-top" style="padding-right:-5px;">
        <div class="navbar-inner">
            <div class="container" style="padding: 0px 20px 0px 10px">
                <a class="btn btn-navbar" data-toggle="collapse"
                    data-target=".nav-collapse"> <span class="icon-bar"></span>
                    <span class="icon-bar"></span> <span
                    class="icon-bar"></span>
                </a>
                <a class="brand" href="<?php echo $html->url(array('controller' => 'main', 'action' => 'home'));?>">GameDEPosit</a>
                <a class="brand" href="<?php echo $html->url(array('controller' => 'main', 'action' => 'home'), array('class' => 'bland'));?>"><i class=icon-home></i></a>
                <a class="brand" href="<?php echo $html->url(array('controller' => 'main', 'action' => 'maricolle'), array('class' => 'bland'));?>"><i class="icon-play-circle"></i> </a>
                <a class="brand" href="<?php echo $html->url(array('controller' => 'communities', 'action' => 'index'), array('class' => 'bland'));?>"><i class="icon-user"></i> </a>
                <div class="nav-collapse collapse">
                    <ul class="nav">
                        <li><?php echo $html->link('Home', array('controller' => 'main', 'action' => 'home'));?></li>
                        <li><?php echo $html->link('Game', array('controller' => 'main', 'action' => 'maricolle'));?></li>
                        <li><?php echo $html->link('Community', array('controller' => 'communities', 'action' => 'index'));?></li>
                        <li><?php echo $html->link('Tweet', array('controller' => 'main', 'action' => 'tweet'));?></li>
                        <li><?php echo $html->link('User', array('controller' => 'user', 'action' => 'index'));?></li>
                        <li><?php echo $html->link('Help', array('controller' => 'main', 'action' => 'help'));?></li>
                    </ul>
                </div>
                <!--/.nav-collapse -->
            </div>
        </div>
    </div>

    <div style="min-height: 55px"></div>
    <?php echo $content_for_layout; ?>

    <?php
    echo $html->script('jquery-1.8.2.min.js');
    echo $html->script('bootstrap.min.js');
    echo $html->script('bootstrapdropdown.js');
    echo $html->script('bootstrap-carousel.js');
    /*
    echo $html->script('bootstrap-typeahead.js');
    echo $html->script('bootstrap-transition.js');
    echo $html->script('bootstrap-alert.js');
    echo $html->script('bootstrap-modal.js');
    echo $html->script('bootstrap-scrollspy.js');
    echo $html->script('bootstrap-tab.js');
    echo $html->script('bootstrap-tooltip.js');
    echo $html->script('bootstrap-popover.js');
    echo $html->script('bootstrap-button.js');
    echo $html->script('bootstrap-collapse.js');
    */
    ?>
    <script>
      $(document).ready(function(){
        $('.carousel').carousel({
          interval: 99999
        });
      });
    </script>

    <script>
    window.addEventListener('load', function() {
        setTimeout(scrollTo, 0, 0, 1);
    }, false);
    </script>
</body>
</html>