import i18n from 'i18next';
import Backend from 'i18next-http-backend';
const projectPath = window.location.pathname.split('/').slice(0, -1).join('/');

document.addEventListener('DOMContentLoaded', function() {
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
    document.getElementById('home').innerText = i18n.t('home');
    document.getElementById('services').innerText = i18n.t('services');
    document.getElementById('servicesSubmenu1').innerText = i18n.t('servicesSubmenu1');
    document.getElementById('realisations').innerText = i18n.t('realisations');
    document.getElementById('realisationsSubmenu1').innerText = i18n.t('realisationsSubmenu1');
    document.getElementById('blog').innerText = i18n.t('blog');
    document.getElementById('blogSubmenu1').innerText = i18n.t('blogSubmenu1');
    document.getElementById('language').innerText = i18n.t('language');
    document.getElementById('ctaButton').innerText = i18n.t('ctaButton');
    document.getElementById('homeMobile').innerText = i18n.t('homeMobile');
    document.getElementById('servicesMobile').innerText = i18n.t('servicesMobile');
    document.getElementById('servicesSubmenu1Mobile').innerText = i18n.t('servicesSubmenu1Mobile');
    document.getElementById('realisationsMobile').innerText = i18n.t('realisationsMobile');
    document.getElementById('realisationsSubmenu1Mobile').innerText = i18n.t('realisationsSubmenu1Mobile');
    document.getElementById('blogMobile').innerText = i18n.t('blogMobile');
    document.getElementById('blogSubmenu1Mobile').innerText = i18n.t('blogSubmenu1Mobile');
    document.getElementById('languageMobile').innerText = i18n.t('languageMobile');
    document.getElementById('ctaButtonMobile').innerText = i18n.t('ctaButtonMobile');
    document.getElementById('ctaButtonSlide1').innerText = i18n.t('ctaButtonSlide1');
    document.getElementById('ctaButtonSlide2').innerText = i18n.t('ctaButtonSlide2');
    document.getElementById('ctaButtonSlide3').innerText = i18n.t('ctaButtonSlide3');
    document.getElementById('bannerTitle1').innerText = i18n.t('bannerTitle1');
    document.getElementById('bannerSubtitle1').innerText = i18n.t('bannerSubtitle1');
    document.getElementById('bannerTitle2').innerText = i18n.t('bannerTitle2');
    document.getElementById('bannerSubtitle2').innerText = i18n.t('bannerSubtitle2');
    document.getElementById('bannerTitle3').innerText = i18n.t('bannerTitle3');
    document.getElementById('bannerSubtitle3').innerText = i18n.t('bannerSubtitle3');
    document.getElementById('beforeAfterTitle').innerText = i18n.t('beforeAfterTitle');
    document.getElementById('before').innerText = i18n.t('before');
    document.getElementById('after').innerText = i18n.t('after');
    document.getElementById('beforeAfterStat1').innerText = i18n.t('beforeAfterStat1');
    document.getElementById('beforeAfterStat2').innerText = i18n.t('beforeAfterStat2');
    document.getElementById('beforeAfterStat3').innerText = i18n.t('beforeAfterStat3');
    document.getElementById('estimatedShooting').innerText = i18n.t('estimatedShooting');
    document.getElementById('ourExpertises').innerText = i18n.t('ourExpertises');
    document.getElementById('expertisesTitle').innerText = i18n.t('expertisesTitle');
    document.getElementById('expertisesText').innerText = i18n.t('expertisesText');
    document.getElementById('ctaButtonExpertises').innerText = i18n.t('ctaButtonExpertises');
    document.getElementById('videoClips').innerText = i18n.t('videoClips');
    document.getElementById('videoClipsText').innerText = i18n.t('videoClipsText');
    document.getElementById('television').innerText = i18n.t('television');
    document.getElementById('televisionText').innerText = i18n.t('televisionText');
    document.getElementById('filmAndSeries').innerText = i18n.t('filmAndSeries');
    document.getElementById('filmAndSeriesText').innerText = i18n.t('filmAndSeriesText');
    document.getElementById('contentCreators').innerText = i18n.t('contentCreators');
    document.getElementById('contentCreatorsText').innerText = i18n.t('contentCreatorsText');
    document.getElementById('advertising').innerText = i18n.t('advertising');
    document.getElementById('advertisingText').innerText = i18n.t('advertisingText');
    document.getElementById('videoGames').innerText = i18n.t('videoGames');
    document.getElementById('videoGamesText').innerText = i18n.t('videoGamesText');
    document.getElementById('videoHighlightText').innerText = i18n.t('videoHighlightText');
    document.getElementById('expertiseYears').innerText = i18n.t('expertiseYears');
    document.getElementById('projects').innerText = i18n.t('projects');
    document.getElementById('partners').innerText = i18n.t('partners');
    document.getElementById('coffee').innerText = i18n.t('coffee');
    document.getElementById('nonameFamily').innerText = i18n.t('nonameFamily');
    document.getElementById('nonameFamilyText').innerText = i18n.t('nonameFamilyText');
    document.getElementById('iWantToJoin').innerText = i18n.t('iWantToJoin');
    document.getElementById('kevinTitle').innerText = i18n.t('kevinTitle');
    document.getElementById('julienTitle').innerText = i18n.t('julienTitle');
    document.getElementById('arnaudTitle').innerText = i18n.t('arnaudTitle');
    document.getElementById('weAdapt').innerText = i18n.t('weAdapt');
    document.getElementById('flexibleFormat').innerText = i18n.t('flexibleFormat');
    document.getElementById('flexibleFormatText').innerText = i18n.t('flexibleFormatText');
    document.getElementById('economy').innerText = i18n.t('economy');
    document.getElementById('titleOffer1').innerText = i18n.t('titleOffer1');
    document.getElementById('subtitleOffer1').innerText = i18n.t('subtitleOffer1');
    document.getElementById('offer1row1').innerText = i18n.t('offer1row1');
    document.getElementById('offer1row2').innerText = i18n.t('offer1row2');
    document.getElementById('offer1row3').innerText = i18n.t('offer1row3');
    document.getElementById('offer1row4').innerText = i18n.t('offer1row4');
    document.getElementById('ctaButtonOffer1').innerText = i18n.t('ctaButtonOffer1');
    document.getElementById('flexible').innerText = i18n.t('flexible');
    document.getElementById('titleOffer2').innerText = i18n.t('titleOffer2');
    document.getElementById('subtitleOffer2').innerText = i18n.t('subtitleOffer2');
    document.getElementById('offer2row1').innerText = i18n.t('offer2row1');
    document.getElementById('offer2row2').innerText = i18n.t('offer2row2');
    document.getElementById('offer2row3').innerText = i18n.t('offer2row3');
    document.getElementById('offer2row4').innerText = i18n.t('offer2row4');
    document.getElementById('offer2row5').innerText = i18n.t('offer2row5');
    document.getElementById('ctaButtonOffer2').innerText = i18n.t('ctaButtonOffer2');
    document.getElementById('full').innerText = i18n.t('full');
    document.getElementById('titleOffer3').innerText = i18n.t('titleOffer3');
    document.getElementById('subtitleOffer3').innerText = i18n.t('subtitleOffer3');
    document.getElementById('offer3row1').innerText = i18n.t('offer3row1');
    document.getElementById('offer3row2').innerText = i18n.t('offer3row2');
    document.getElementById('offer3row3').innerText = i18n.t('offer3row3');
    document.getElementById('offer3row4').innerText = i18n.t('offer3row4');
    document.getElementById('offer3row5').innerText = i18n.t('offer3row5');
    document.getElementById('ctaButtonOffer3').innerText = i18n.t('ctaButtonOffer3');
    document.getElementById('projects2').innerText = i18n.t('projects2');
    document.getElementById('productionCycleTitle').innerText = i18n.t('productionCycleTitle');
    document.getElementById('productionCycleTitle1').innerText = i18n.t('productionCycleTitle1');
    document.getElementById('productionCycleSubtitle1').innerText = i18n.t('productionCycleSubtitle1');
    document.getElementById('productionCycleTitle2').innerText = i18n.t('productionCycleTitle2');
    document.getElementById('productionCycleSubtitle2').innerText = i18n.t('productionCycleSubtitle2');
    document.getElementById('productionCycleTitle3').innerText = i18n.t('productionCycleTitle3');
    document.getElementById('productionCycleSubtitle3').innerText = i18n.t('productionCycleSubtitle3');
    document.getElementById('productionCycleTitle1Mobile').innerText = i18n.t('productionCycleTitle1Mobile');
    document.getElementById('productionCycleSubtitle1Mobile').innerText = i18n.t('productionCycleSubtitle1Mobile');
    document.getElementById('productionCycleTitle2Mobile').innerText = i18n.t('productionCycleTitle2Mobile');
    document.getElementById('productionCycleSubtitle2Mobile').innerText = i18n.t('productionCycleSubtitle2Mobile');
    document.getElementById('productionCycleTitle3Mobile').innerText = i18n.t('productionCycleTitle3Mobile');
    document.getElementById('productionCycleSubtitle3Mobile').innerText = i18n.t('productionCycleSubtitle3Mobile');
    document.getElementById('ourBlog').innerText = i18n.t('ourBlog');
    document.getElementById('ourLastArticle').innerText = i18n.t('ourLastArticle');
    document.getElementById('ourBlogText').innerText = i18n.t('ourBlogText');
    document.getElementById('allOurArticle').innerText = i18n.t('allOurArticle');
    document.getElementById('nonameEcosystem').innerText = i18n.t('nonameEcosystem');
    document.getElementById('forTheCurious').innerText = i18n.t('forTheCurious');
    document.getElementById('contact').innerText = i18n.t('contact');
    document.getElementById('legals').innerText = i18n.t('legals');
    document.getElementById('confidentiality').innerText = i18n.t('confidentiality');
    document.getElementById('newsletterText').innerText = i18n.t('newsletterText');
    document.getElementById('copyrights').innerText = i18n.t('copyrights');
}

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

