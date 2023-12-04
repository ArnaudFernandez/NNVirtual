<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport"/>
    <title>NoName Virtual - Contact us</title>
    <link href="css/bootstrap.css" rel="stylesheet"/>
    <link href="css/font-awesome.css" rel="stylesheet"/>
    <link href="css/flaticon.css" rel="stylesheet"/>
    <link href="css/slick.css" rel="stylesheet">
    <link href="css/slick-theme.css" rel="stylesheet"/>
    <link href="css/magnific-popup.css" rel="stylesheet"/>
    <link href="style.css" rel="stylesheet"/>
    <link href="css/noNameVirtualCustomClass.css" rel="stylesheet"/>
    <link href="css/royal-preload.css" rel="stylesheet"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <!-- REVOLUTION SLIDER CSS -->
    <link href="plugins/revolution/revolution/css/settings.css" rel="stylesheet" type="text/css">
    <!-- REVOLUTION NAVIGATION STYLE -->
    <link href="plugins/revolution/revolution/css/navigation.css" rel="stylesheet" type="text/css">

    <link href="images/Logo%20entete%20site.webp" rel="shortcut icon" type="image/x-icon"/>
    <link rel="icon" href="images/Logo%20entete%20site.webp" sizes="32x32" />
    <link rel="icon" href="images/Logo%20entete%20site.webp" sizes="192x192" />
    <link rel="apple-touch-icon" href="images/Logo%20entete%20site.webp" />
    <meta name="msapplication-TileImage" content="/images/Logo%20entete%20site.webp" />
</head>

<body class="royal_preloader">
    <div id="page" class="site">

        <?php include 'header.php' ?>

        <div id="content" class="site-content">

            <section class="p-t110 z-index-1 section-contact">
                <div class="container">
                    <div class="row flex-row">
                        <div class="col-md-6 col-xs-12 sm-m-b60">
                            <div class="our-contact text-light">
                                <div class="ot-heading text-light">
                                    <h6><span id="contactDetailTitle">Détails de contact</span></h6>
                                    <h2 id="contactUsText" class="main-heading">Nous contacter </h2>
                                </div>
                                <p id="contactUsExplain" class="m-b45">Contactez-nous quand vous le voulez, nous vous répondrons dans les
                                    meilleurs délais et nous serons heureux de répondre à toutes vos questions.</p>
                                <div class="contact-info text-light m-b30">
                                    <i class="flaticon-world"></i>
                                    <div class="info-text">
                                        <h6 id="ourAdress">Notre adresse:</h6>
                                        <p>Place Garibaldi
                                            06300, NICE</p>
                                    </div>
                                </div>
                                <div class="contact-info text-light m-b30">
                                    <i class="flaticon-note"></i>
                                    <div class="info-text">
                                        <h6 id="ourEmail">Notre e-mail:</h6>
                                        <p><a href="mailto:contact@nonamevisual.com">contact@nonamevisual.com</a></p>
                                    </div>
                                </div>
                                <div class="contact-info text-light">
                                    <i class="flaticon-viber"></i>
                                    <div class="info-text">
                                        <h6 id="ourPhoneNumber">Notre numéro de téléphone:</h6>
                                        <p><a href="tel:336-686-800-70">+0336 68 68 00 70</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xs-12 align-self-center">
                            <div class="form-contact">
                                <div class="ot-heading">
                                        <h6><span id="stayInTouch">Restons en contact</span></h6>
                                    <h2 class="main-heading" id="readyToLaunch">Prêt à vous lancer ?</h2>
                                </div>
                                <form action="contact.php" class="wpcf7-form" method="POST">
                                    <p>
                                        <span class="wpcf7-form-control-wrap your-name">
                                            <input type="text" name="name" id="name" class="wpcf7-form-control wpcf7-text" placeholder="Name *" required="">
                                        </span>
                                    </p>
                                    <p>
                                        <span class="wpcf7-form-control-wrap your-email">
                                            <input type="email" name="email" id="email" class="wpcf7-form-control wpcf7-text wpcf7-email" placeholder="E-mail *" required="">
                                        </span>
                                    </p>
                                    <p>
                                        <span class="wpcf7-form-control-wrap your-message">
                                            <textarea type="text" name="message" id="message" class="wpcf7-form-control wpcf7-textarea" placeholder="Message..." required=""></textarea>
                                        </span>
                                    </p>
                                    <p>
                                        <button id="sendText" type="submit" class="octf-btn ctaPrimaryBg octf-btn-icon nopad">Envoyer <i class="flaticon-right-arrow-1"></i></button>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="map">
                    <iframe src="https://www.google.com/maps?q=43.7010897,7.2795968&hl=fr;z=14&output=embed" width="100%" height="800" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </section>
        </div>
        <?php include 'footer.php' ?>
</div><!-- #page -->
<a id="back-to-top" href="#" class="show"><i class="flaticon-arrow-pointing-to-up"></i></a>
    <!-- jQuery -->
    <script src="js/jquery.min.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/jquery.magnific-popup.min.js"></script>
    <script src="js/jquery.isotope.min.js"></script>
    <script src="js/easypiechart.js"></script>
    <script src="js/particles.min.js"></script>
    <script src="js/jquery.countdown.min.js"></script>
    <script src="js/internationalization.js"></script>
    <script src="js/header-mobile.js"></script>
    <script src="js/royal_preloader.min.js"></script>
    <!-- REVOLUTION JS FILES -->
    <script src="plugins/revolution/revolution/js/jquery.themepunch.tools.min.js"></script>
    <script src="plugins/revolution/revolution/js/jquery.themepunch.revolution.min.js"></script>

    <!-- SLIDER REVOLUTION 5.0 EXTENSIONS  (Load Extensions only on Local File Systems !  The following part can be removed on Server for On Demand Loading) -->
    <script src="plugins/revolution/revolution/js/extensions/revolution-plugin.js"></script>

    <!-- REVOLUTION SLIDER SCRIPT FILES -->
    <script src="js/rev-script-2.js"></script>
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