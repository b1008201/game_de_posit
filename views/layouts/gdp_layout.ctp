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
            echo '<style type="text/css">body {padding-bottom: 40px; style="overflow-y: hidden;} </style>';
            echo $html->css("bootstrap-responsive.min.css", "stylesheet");
            echo $scripts_for_layout;
            echo '<style type="text/css">.navbar-fixed-top{position: fixed;} .brand [class^="icon-"], .brand [class*=" icon-"]{background-image: url("img/glyphicons-halflings-white.png"); margin-top: 5px;}</style>';
            //echo $html->css("bootstrap-habeo-tuned.css", "stylesheet")
        ?>
    </head>

    <body <?php if(isset($body_for_layout)) ?>>
    <div class="navbar navbar-inverse navbar-fixed-top">
        <div class="navbar-inner">
            <div class="container" style="padding: 0px 20px 0px 20px">
                <a class="btn btn-navbar" data-toggle="collapse"
                    data-target=".nav-collapse"> <span class="icon-bar"></span>
                    <span class="icon-bar"></span> <span
                    class="icon-bar"></span>
                </a>
                <a class="brand" href="./">GameDePosit</a>
                <a class="brand" href="#home"><i class="icon-home"></i> </a>
                <a class="brand" href="#game"><i class="icon-play-circle"></i> </a>
                <a class="brand" href="#community"><i class="icon-user"></i> </a>
                <a class="brand" href="./"><i class="icon-refresh"></i> </a>
                <div class="nav-collapse collapse">
                    <ul class="nav">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#game">Game</a></li>
                        <li><a href="#community">Community</a></li>
                        <li><a href="#help">Help</a></li>
                    </ul>
                </div>
                <!--/.nav-collapse -->
            </div>
        </div>
    </div>

    <section id="home">
    <div style="min-height:60px"></div>
    <div class="container" style="min-height:1136px">
        <?php echo $this->element('home', array("title" => "Home")); ?>
    </div>
    </section>

    <section id="game">
    <div style="min-height:45px"></div>
    <div class="container" style="min-height:1136px">
        <div class="row">
            <div class="span9">
                <iframe src="./mygame" style="border:0;min-width:320px;min-height:528px;margin-left:-15px"></iframe>
            </div>
        </div>
    </div>
    </section>

    <section id="community">
    <div style="min-height:60px"></div>
    <div class="container" style="min-height:1136px">
        Community
        <?php echo $content_for_layout; ?>
    </div>
    </section>

    <section id="help">
    <div style="min-height:60px"></div>
    <div class="container" style="min-height:1136px">
        <?php echo $this->element('help', array("title" => "Home")); ?>
    </div>
    </section>

    <?php
    echo $this->element('sql_dump');
    echo $html->script('jquery-1.8.2.min.js');
    echo $html->script('bootstrap.min.js');
    echo $html->script('bootstrapdropdown.js');
    echo $html->script('bootstrap-transition.js');
    echo $html->script('bootstrap-alert.js');
    echo $html->script('bootstrap-modal.js');
    echo $html->script('bootstrap-scrollspy.js');
    echo $html->script('bootstrap-tab.js');
    echo $html->script('bootstrap-tooltip.js');
    echo $html->script('bootstrap-popover.js');
    echo $html->script('bootstrap-button.js');
    echo $html->script('bootstrap-collapse.js');
    echo $html->script('bootstrap-carousel.js');
    echo $html->script('bootstrap-typeahead.js');
    ?>
    <script>
    window.addEventListener('load', function() {
        setTimeout(scrollTo, 0, 0, 1);
    }, false);
    </script>
</body>
</html>