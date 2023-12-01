import i18n from 'i18next';
import Backend from 'i18next-http-backend';
const projectPath = window.location.pathname.split('/').slice(0, -1).join('/');
let textKeys = ['home',
'services',
'servicesSubmenu1',
'realisations',
'realisationsSubmenu1',
'blog',
'blogSubmenu1',
'language',
'ctaButton',
'homeMobile',
'servicesMobile',
'servicesSubmenu1Mobile',
'realisationsMobile',
'realisationsSubmenu1Mobile',
'blogMobile',
'blogSubmenu1Mobile',
'languageMobile',
'ctaButtonMobile',
'ctaButtonSlide1',
'ctaButtonSlide2',
'ctaButtonSlide3',
'bannerTitle1',
'bannerSubtitle1',
'bannerTitle2',
'bannerSubtitle2',
'bannerTitle3',
'bannerSubtitle3',
'beforeAfterTitle',
'before',
'after',
'beforeAfterStat1',
'beforeAfterStat2',
'beforeAfterStat3',
'estimatedShooting',
'ourExpertises',
'expertisesTitle',
'expertisesText',
'ctaButtonExpertises',
'videoClips',
'videoClipsText',
'television',
'televisionText',
'filmAndSeries',
'filmAndSeriesText',
'contentCreators',
'contentCreatorsText',
'advertising',
'advertisingText',
'videoGames',
'videoGamesText',
'videoHighlightText',
'expertiseYears',
'projects',
'partners',
'coffee',
'nonameFamily',
'nonameFamilyText',
'iWantToJoin',
'kevinTitle',
'julienTitle',
'arnaudTitle',
'weAdapt',
'flexibleFormat',
'flexibleFormatText',
'economy',
'titleOffer1',
'subtitleOffer1',
'offer1row1',
'offer1row2',
'offer1row3',
'offer1row4',
'ctaButtonOffer1',
'flexible',
'titleOffer2',
'subtitleOffer2',
'offer2row1',
'offer2row2',
'offer2row3',
'offer2row4',
'offer2row5',
'ctaButtonOffer2',
'full',
'titleOffer3',
'subtitleOffer3',
'offer3row1',
'offer3row2',
'offer3row3',
'offer3row4',
'offer3row5',
'ctaButtonOffer3',
'projects2',
'productionCycleTitle',
'productionCycleTitle1',
'productionCycleSubtitle1',
'productionCycleTitle2',
'productionCycleSubtitle2',
'productionCycleTitle3',
'productionCycleSubtitle3',
'productionCycleTitle1Mobile',
'productionCycleSubtitle1Mobile',
'productionCycleTitle2Mobile',
'productionCycleSubtitle2Mobile',
'productionCycleTitle3Mobile',
'productionCycleSubtitle3Mobile',
'ourBlog',
'ourLastArticle',
'ourBlogText',
'nonameEcosystem',
'forTheCurious',
'contact',
'legals',
'confidentiality',
'newsletterText',
'copyrights',
'contactDetailTitle',
'contactUsText',
'contactUsExplain',
'ourAdress',
'ourEmail',
'ourPhoneNumber',
'stayInTouch',
'readyToLaunch',
'sendText'];


document.addEventListener('DOMContentLoaded', function() {

    i18n
        .use(Backend)
        .init({
            backend: {
                // Chemin d'accès aux fichiers de traduction
                loadPath: `${projectPath}/locales/{{lng}}/{{ns}}.json`
            },
            fallbackLng: 'fr',
            debug: true,
            interpolation: {
                escapeValue: false
            }
        }, (err, t) => {
            if (err) return console.log('something went wrong loading', err);
            updateTranslations();
        });

    var userLang = navigator.language || navigator.userLanguage;

    if (userLang.startsWith("en")) {
        changeLanguage('en');
    } else if (userLang.startsWith("fr")) {
        changeLanguage('fr');
    } else {
        changeLanguage('fr');
    }

    updateTranslations();
});

function changeLanguage(lng) {
    i18n.changeLanguage(lng, (err, t) => {
        if (err) return console.log('something went wrong loading', err);
        updateTranslations();
    });
}

document.getElementById('languageSelector').addEventListener('change', (event) => {
    changeLanguage(event.target.value);
});

document.getElementById('languageSelectorMobile').addEventListener('change', (event) => {
    changeLanguage(event.target.value);
});

function updateTranslations() {

    textKeys.forEach(elem => {
       if (document.getElementById(elem)) {
           document.getElementById(elem).innerText = i18n.t(elem);
       }
    });
}

