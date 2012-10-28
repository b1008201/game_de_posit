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
            echo '<style type="text/css">body {padding-top: 60px;padding-bottom: 40px;}</style>';
            echo $html->css("bootstrap-responsive.min.css", "stylesheet");
            echo $scripts_for_layout;
        ?>

    </head>

    <body <?php if(isset($body_for_layout)) ?>>


    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <a class="brand" href="#">hABeO!</a>
          <div class="nav-collapse collapse">
            <ul class="nav">
              <li class="active"><a href="#">hABeO!</a></li>
              <li><a href="#about">hABeO!</a></li>
              <li><a href="#contact">hABeO!</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">hABeO! <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href="#">hABeO!</a></li>
                  <li><a href="#">hABeO!</a></li>
                  <li><a href="#">hABeO!</a></li>
                  <li class="divider"></li>
                  <li class="nav-header">hABeO!</li>
                  <li><a href="#">hABeO!</a></li>
                  <li><a href="#">hABeO!</a></li>
                </ul>
              </li>
            </ul>
            <form class="navbar-form pull-right">
              <input class="span2" type="text" placeholder="hABeO!">
              <input class="span2" type="password" placeholder="hABeO!">
              <button type="submit" class="btn">Sign in</button>
            </form>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>

    <div
        class="container">

        <!-- Main hero unit for a primary marketing message or call to action -->
        <div class="hero-unit">
            <h1>hABeO!</h1>
            <p>hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!
            hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!
            hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!
            hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!</p>
            <p>
                <a class="btn btn-primary btn-large">hABeO! &raquo;</a>
            </p>
        </div>

        <!-- Example row of columns -->
        <div class="row">
            <div class="span4">
                <h2>hABeO!</h2>
                <p>
                    <?php echo $content_for_layout; ?>
                </p>
                <p>
                    <a class="btn" href="#">hABeO! &raquo;</a>
                </p>
            </div>
            <div class="span4">
                <h2>hABeO!</h2>
                <p>hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!
                hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!
                hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!
                hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!</p>
                <p>
                    <a class="btn" href="#">hABeO! &raquo;</a>
                </p>
            </div>
            <div class="span4">
                <h2>Heading</h2>
                <p>hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!
                hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!
                hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!
                hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!hABeO!</p>
                <p>
                    <a class="btn" href="#">hABeO! &raquo;</a>
                </p>
            </div>
        </div>

        <hr>

        <footer>
            <p>&copy; hABeO! 2012</p>
        </footer>

    </div>
    <!-- /container -->

    <?php
    echo $this->element('sql_dump');
    echo $html->script('bootstrap.min.js');
    echo $html->script('jquery-1.8.2.min.js');
    ?>
    <script
        src="http://twitter.github.com/bootstrap//assets/js/jquery.js"></script>
    <script
        src="http://twitter.github.com/bootstrap//assets/js/bootstrap-transition.js"></script>
    <script
        src="http://twitter.github.com/bootstrap//assets/js/bootstrap-alert.js"></script>
    <script
        src="http://twitter.github.com/bootstrap//assets/js/bootstrap-modal.js"></script>
    <script
        src="http://twitter.github.com/bootstrap//assets/js/bootstrap-dropdown.js"></script>
    <script
        src="http://twitter.github.com/bootstrap//assets/js/bootstrap-scrollspy.js"></script>
    <script
        src="http://twitter.github.com/bootstrap//assets/js/bootstrap-tab.js"></script>
    <script
        src="http://twitter.github.com/bootstrap//assets/js/bootstrap-tooltip.js"></script>
    <script
        src="http://twitter.github.com/bootstrap//assets/js/bootstrap-popover.js"></script>
    <script
        src="http://twitter.github.com/bootstrap//assets/js/bootstrap-button.js"></script>
    <script
        src="http://twitter.github.com/bootstrap//assets/js/bootstrap-collapse.js"></script>
    <script
        src="http://twitter.github.com/bootstrap//assets/js/bootstrap-carousel.js"></script>
    <script
        src="http://twitter.github.com/bootstrap//assets/js/bootstrap-typeahead.js"></script>
</body>
</html>