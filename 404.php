<?php $basePath = '/NNVirtual/'; ?>
<!DOCTYPE html>
<html lang="en">

<?php include "head.php" ?>

<body class="royal_preloader">
    <div id="page" class="site">
        <?php include "header.php"?>

        <div id="content" class="site-content">
            <div class="container">
                <div class="error-404 not-found text-center">
                    <h2>404</h2>
                    <h1 style="color: white" id="notFoundTitle">On se perd vite dans le virtuel !</h1>
                    <div class="content-404">
                        <p id="notFoundSubtext">La page que vous cherchez n'existe pas.</p>
                        <a class="octf-btn octf-btn-third octf-btn-icon" style="padding: 15px 20px" href="<?php echo $basePath?>index.php" id="notFoundButton">Retourner à l'accueil</a>
                    </div>
                </div>
            </div>

        </div>

        <?php include "footer.php"?>
    </div><!-- #page -->
    <a id="back-to-top" href="#" class="show"><i class="flaticon-arrow-pointing-to-up"></i></a>
        <!-- jQuery -->
    <script src="js/jquery.min.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/jquery.magnific-popup.min.js"></script>
    <script src="js/jquery.isotope.min.js"></script>
    <script src="js/easypiechart.js"></script>
    <script src="js/jquery.countdown.min.js"></script>
    <script src="js/scripts.js"></script>
    <script src="js/header-mobile.js"></script>
    <script src="js/royal_preloader.min.js"></script>

    <script src="dist/bundle-webpack.js"></script>

</body>
</html>
<script type="text/javascript">
    window.jQuery = window.$ = jQuery;  
    (function($) { "use strict";
        //Preloader
        Royal_Preloader.config({
            mode           : 'logo',
            logo           : 'images/LOGO_Virtual_Transparent_V0.png',
            logo_size      : [300, 120],
            showProgress   : true,
            showPercentage : true,
            text_colour: '#000000',
            background:  '#ffffff'
        });
    })(jQuery);
</script> 