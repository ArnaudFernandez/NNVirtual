<?php $basePath = '/NNVirtual/'; ?>
<header class="site-header mainHeader top-bar" id="site-header">
    <!-- Main Header start -->
    <div class="octf-main-header mainHeader">
        <div class="octf-area-wrap">
            <div class="container-fluid octf-mainbar-container">
                <div class="octf-mainbar">
                    <div class="octf-mainbar-row octf-row">
                        <!-- logo start -->
                        <div class="octf-col NNVlogo">
                            <div class="NNVlogo">
                                <a href="<?php echo $basePath ?>index.php">
                                    <img alt="NoName Virtual" class="logo-static" src="<?php echo $basePath ?>images/LOGO_Virtual_Transparent_V0_cropped.png">
                                </a>
                            </div>
                        </div>
                        <!-- logo start -->

                        <!-- nav start -->
                        <div style="display: none;" class="octf-col">
                            <nav class="main-navigation" id="site-navigation">
                                <ul class="menu" id="primary-menu">
                                    <li class="current-menu-item current-menu-ancestor"><a
                                            href="index.php"><div id="home">Accueil</div></a>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="#">
                                            <div id="services">Services</div>
                                        </a>
                                        <ul class="sub-menu">
                                            <li><a href="#">
                                                    <div id="servicesSubmenu1">Placeholder 1</div>
                                                </a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="#">
                                            <div id="realisations">Réalisations</div>
                                        </a>
                                        <ul class="sub-menu">
                                            <li><a href="#">
                                                    <div id="realisationsSubmenu1">Placeholder 1</div>
                                                </a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="#">
                                            <div id="blog">Blog</div>
                                        </a>
                                        <ul class="sub-menu">
                                            <li>
                                                <a href="#">
                                                    <div id="blogSubmenu1">Placeholder 1</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav><!-- #site-navigation -->
                        </div>

                        <div class="octf-col text-right">
                            <!-- Call To Action -->
                            <div class="octf-btn-cta">
                                <div class="octf-header-module">
                                    <div class="btn-cta-group btn-cta-header" style="margin: 0 10px 0 0">
                                        <a class="octf-btn octf-btn-third" style="padding: 15px 20px" href="<?php echo $basePath ?>contact-us.php">
                                            <div id="ctaButton">Allons-y</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="custom-select">
                                <label id="language" style="display: none"></label>
                                <div id="languageSelector">
                                    <input type="radio" id="frSelectorRadio" name="language" value="fr" class="frSelectBackground">
                                    <label for="fr">Français</label>
                                    <input type="radio" id="enSelectorRadio" name="language" value="en" class="enSelectBackground">
                                    <label for="en">English</label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Header mobile -->
    <div class="header_mobile mainHeader">
        <div class="container">
            <div class="mlogo_wrapper clearfix">

                <!-- logo mobile start -->
                <div class="mobile_logo">
                    <a href="<?php echo $basePath ?>index.php"><img alt="NoName Virtual" src="<?php echo $basePath ?>images/LOGO_Virtual_Transparent_V0_cropped.png"></a>
                </div>
                <!-- logo mobile end -->

                <div id="mmenu_toggle" class="menuButtonToggle">
                    <button aria-label="Menu"></button>
                </div>

            </div>

            <!-- nav mobile start -->
            <div class="mmenu_wrapper">
                <div class="mobile_nav">
                    <ul class="mobile_mainmenu" id="menu-main-menu">
                        <li style="display: none" class="current-menu-item current-menu-ancestor">
                            <a href="index.php">
                                <div id="homeMobile">Accueil</div>
                            </a>
                        </li>
                        <li style="display: none" class="menu-item-has-children">
                            <a href="#">
                                <div id="servicesMobile">Services</div>
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="#">
                                        <div id="servicesSubmenu1Mobile">Placeholder 1</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li style="display: none" class="menu-item-has-children">
                            <a href="#">
                                <div id="realisationsMobile">Réalisations</div>
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="#">
                                        <div id="realisationsSubmenu1Mobile">Placeholder 1</div>
                                    </a></li>
                            </ul>
                        </li>
                        <li style="display: none" class="menu-item-has-children">
                            <a href="#">
                                <div id="blogMobile">Blog</div>
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="#">
                                        <div id="blogSubmenu1Mobile">Placeholder 1</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="#">
                                <div id="languageMobile">Langue</div>
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <label for="languageSelectorMobile"></label>
                                    <select style="width: 100px;" id="languageSelectorMobile">
                                        <option value="fr">Français</option>
                                        <option value="en">English</option>
                                        <!-- ... autres options de langue -->
                                    </select>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <!-- Call To Action -->
                            <div class="octf-btn-cta">
                                <div class="octf-header-module">
                                    <div class="btn-cta-group btn-cta-header">
                                        <a class="octf-btn octf-btn-third" href="contact-us.php">
                                            <div id="ctaButtonMobile">Allons-y</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- nav mobile end -->
        </div>
    </div>
</header>