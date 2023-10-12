"use strict";

var _i18next = _interopRequireDefault(require("i18next"));
var _i18nextHttpBackend = _interopRequireDefault(require("i18next-http-backend"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var projectPath = window.location.pathname.split('/').slice(0, -1).join('/');
document.addEventListener('DOMContentLoaded', function () {
  updateTranslations();
});
function changeLanguage(lng) {
  _i18next["default"].changeLanguage(lng, function (err, t) {
    if (err) return console.log('something went wrong loading', err);
    updateTranslations();
  });
}
document.getElementById('languageSelector').addEventListener('change', function (event) {
  changeLanguage(event.target.value);
});
document.getElementById('languageSelectorMobile').addEventListener('change', function (event) {
  changeLanguage(event.target.value);
});
function updateTranslations() {
  document.getElementById('home').innerText = _i18next["default"].t('home');
  document.getElementById('services').innerText = _i18next["default"].t('services');
  document.getElementById('servicesSubmenu1').innerText = _i18next["default"].t('servicesSubmenu1');
  document.getElementById('realisations').innerText = _i18next["default"].t('realisations');
  document.getElementById('realisationsSubmenu1').innerText = _i18next["default"].t('realisationsSubmenu1');
  document.getElementById('blog').innerText = _i18next["default"].t('blog');
  document.getElementById('blogSubmenu1').innerText = _i18next["default"].t('blogSubmenu1');
  document.getElementById('language').innerText = _i18next["default"].t('language');
  document.getElementById('ctaButton').innerText = _i18next["default"].t('ctaButton');
  document.getElementById('homeMobile').innerText = _i18next["default"].t('homeMobile');
  document.getElementById('servicesMobile').innerText = _i18next["default"].t('servicesMobile');
  document.getElementById('servicesSubmenu1Mobile').innerText = _i18next["default"].t('servicesSubmenu1Mobile');
  document.getElementById('realisationsMobile').innerText = _i18next["default"].t('realisationsMobile');
  document.getElementById('realisationsSubmenu1Mobile').innerText = _i18next["default"].t('realisationsSubmenu1Mobile');
  document.getElementById('blogMobile').innerText = _i18next["default"].t('blogMobile');
  document.getElementById('blogSubmenu1Mobile').innerText = _i18next["default"].t('blogSubmenu1Mobile');
  document.getElementById('languageMobile').innerText = _i18next["default"].t('languageMobile');
  document.getElementById('ctaButtonMobile').innerText = _i18next["default"].t('ctaButtonMobile');
  document.getElementById('ctaButtonSlide1').innerText = _i18next["default"].t('ctaButtonSlide1');
  document.getElementById('ctaButtonSlide2').innerText = _i18next["default"].t('ctaButtonSlide2');
  document.getElementById('ctaButtonSlide3').innerText = _i18next["default"].t('ctaButtonSlide3');
  document.getElementById('bannerTitle1').innerText = _i18next["default"].t('bannerTitle1');
  document.getElementById('bannerSubtitle1').innerText = _i18next["default"].t('bannerSubtitle1');
  document.getElementById('bannerTitle2').innerText = _i18next["default"].t('bannerTitle2');
  document.getElementById('bannerSubtitle2').innerText = _i18next["default"].t('bannerSubtitle2');
  document.getElementById('bannerTitle3').innerText = _i18next["default"].t('bannerTitle3');
  document.getElementById('bannerSubtitle3').innerText = _i18next["default"].t('bannerSubtitle3');
  document.getElementById('beforeAfterTitle').innerText = _i18next["default"].t('beforeAfterTitle');
  document.getElementById('before').innerText = _i18next["default"].t('before');
  document.getElementById('after').innerText = _i18next["default"].t('after');
  document.getElementById('beforeAfterStat1').innerText = _i18next["default"].t('beforeAfterStat1');
  document.getElementById('beforeAfterStat2').innerText = _i18next["default"].t('beforeAfterStat2');
  document.getElementById('beforeAfterStat3').innerText = _i18next["default"].t('beforeAfterStat3');
  document.getElementById('ourExpertises').innerText = _i18next["default"].t('ourExpertises');
  document.getElementById('expertisesTitle').innerText = _i18next["default"].t('expertisesTitle');
  document.getElementById('expertisesText').innerText = _i18next["default"].t('expertisesText');
  document.getElementById('ctaButtonExpertises').innerText = _i18next["default"].t('ctaButtonExpertises');
  document.getElementById('videoClips').innerText = _i18next["default"].t('videoClips');
  document.getElementById('videoClipsText').innerText = _i18next["default"].t('videoClipsText');
  document.getElementById('television').innerText = _i18next["default"].t('television');
  document.getElementById('televisionText').innerText = _i18next["default"].t('televisionText');
  document.getElementById('filmAndSeries').innerText = _i18next["default"].t('filmAndSeries');
  document.getElementById('filmAndSeriesText').innerText = _i18next["default"].t('filmAndSeriesText');
  document.getElementById('contentCreators').innerText = _i18next["default"].t('contentCreators');
  document.getElementById('contentCreatorsText').innerText = _i18next["default"].t('contentCreatorsText');
  document.getElementById('advertising').innerText = _i18next["default"].t('advertising');
  document.getElementById('advertisingText').innerText = _i18next["default"].t('advertisingText');
  document.getElementById('videoGames').innerText = _i18next["default"].t('videoGames');
  document.getElementById('videoGamesText').innerText = _i18next["default"].t('videoGamesText');
  document.getElementById('videoHighlightText').innerText = _i18next["default"].t('videoHighlightText');
  document.getElementById('expertiseYears').innerText = _i18next["default"].t('expertiseYears');
  document.getElementById('projects').innerText = _i18next["default"].t('projects');
  document.getElementById('partners').innerText = _i18next["default"].t('partners');
  document.getElementById('coffee').innerText = _i18next["default"].t('coffee');
  document.getElementById('nonameFamily').innerText = _i18next["default"].t('nonameFamily');
  document.getElementById('nonameFamilyText').innerText = _i18next["default"].t('nonameFamilyText');
  document.getElementById('iWantToJoin').innerText = _i18next["default"].t('iWantToJoin');
  document.getElementById('kevinTitle').innerText = _i18next["default"].t('kevinTitle');
  document.getElementById('julienTitle').innerText = _i18next["default"].t('julienTitle');
  document.getElementById('arnaudTitle').innerText = _i18next["default"].t('arnaudTitle');
  document.getElementById('weAdapt').innerText = _i18next["default"].t('weAdapt');
  document.getElementById('flexibleFormat').innerText = _i18next["default"].t('flexibleFormat');
  document.getElementById('flexibleFormatText').innerText = _i18next["default"].t('flexibleFormatText');
  document.getElementById('economy').innerText = _i18next["default"].t('economy');
  document.getElementById('titleOffer1').innerText = _i18next["default"].t('titleOffer1');
  document.getElementById('subtitleOffer1').innerText = _i18next["default"].t('subtitleOffer1');
  document.getElementById('offer1row1').innerText = _i18next["default"].t('offer1row1');
  document.getElementById('offer1row2').innerText = _i18next["default"].t('offer1row2');
  document.getElementById('offer1row3').innerText = _i18next["default"].t('offer1row3');
  document.getElementById('offer1row4').innerText = _i18next["default"].t('offer1row4');
  document.getElementById('ctaButtonOffer1').innerText = _i18next["default"].t('ctaButtonOffer1');
  document.getElementById('flexible').innerText = _i18next["default"].t('flexible');
  document.getElementById('titleOffer2').innerText = _i18next["default"].t('titleOffer2');
  document.getElementById('subtitleOffer2').innerText = _i18next["default"].t('subtitleOffer2');
  document.getElementById('offer2row1').innerText = _i18next["default"].t('offer2row1');
  document.getElementById('offer2row2').innerText = _i18next["default"].t('offer2row2');
  document.getElementById('offer2row3').innerText = _i18next["default"].t('offer2row3');
  document.getElementById('offer2row4').innerText = _i18next["default"].t('offer2row4');
  document.getElementById('offer2row5').innerText = _i18next["default"].t('offer2row5');
  document.getElementById('ctaButtonOffer2').innerText = _i18next["default"].t('ctaButtonOffer2');
  document.getElementById('full').innerText = _i18next["default"].t('full');
  document.getElementById('titleOffer3').innerText = _i18next["default"].t('titleOffer3');
  document.getElementById('subtitleOffer3').innerText = _i18next["default"].t('subtitleOffer3');
  document.getElementById('offer3row1').innerText = _i18next["default"].t('offer3row1');
  document.getElementById('offer3row2').innerText = _i18next["default"].t('offer3row2');
  document.getElementById('offer3row3').innerText = _i18next["default"].t('offer3row3');
  document.getElementById('offer3row4').innerText = _i18next["default"].t('offer3row4');
  document.getElementById('offer3row5').innerText = _i18next["default"].t('offer3row5');
  document.getElementById('ctaButtonOffer3').innerText = _i18next["default"].t('ctaButtonOffer3');
  document.getElementById('projects2').innerText = _i18next["default"].t('projects2');
  document.getElementById('productionCycleTitle').innerText = _i18next["default"].t('productionCycleTitle');
  document.getElementById('productionCycleTitle1').innerText = _i18next["default"].t('productionCycleTitle1');
  document.getElementById('productionCycleSubtitle1').innerText = _i18next["default"].t('productionCycleSubtitle1');
  document.getElementById('productionCycleTitle2').innerText = _i18next["default"].t('productionCycleTitle2');
  document.getElementById('productionCycleSubtitle2').innerText = _i18next["default"].t('productionCycleSubtitle2');
  document.getElementById('productionCycleTitle3').innerText = _i18next["default"].t('productionCycleTitle3');
  document.getElementById('productionCycleSubtitle3').innerText = _i18next["default"].t('productionCycleSubtitle3');
  document.getElementById('productionCycleTitle1Mobile').innerText = _i18next["default"].t('productionCycleTitle1Mobile');
  document.getElementById('productionCycleSubtitle1Mobile').innerText = _i18next["default"].t('productionCycleSubtitle1Mobile');
  document.getElementById('productionCycleTitle2Mobile').innerText = _i18next["default"].t('productionCycleTitle2Mobile');
  document.getElementById('productionCycleSubtitle2Mobile').innerText = _i18next["default"].t('productionCycleSubtitle2Mobile');
  document.getElementById('productionCycleTitle3Mobile').innerText = _i18next["default"].t('productionCycleTitle3Mobile');
  document.getElementById('productionCycleSubtitle3Mobile').innerText = _i18next["default"].t('productionCycleSubtitle3Mobile');
  document.getElementById('ourBlog').innerText = _i18next["default"].t('ourBlog');
  document.getElementById('ourLastArticle').innerText = _i18next["default"].t('ourLastArticle');
  document.getElementById('ourBlogText').innerText = _i18next["default"].t('ourBlogText');
  document.getElementById('allOurArticle').innerText = _i18next["default"].t('allOurArticle');
  document.getElementById('nonameEcosystem').innerText = _i18next["default"].t('nonameEcosystem');
  document.getElementById('forTheCurious').innerText = _i18next["default"].t('forTheCurious');
  document.getElementById('contact').innerText = _i18next["default"].t('contact');
  document.getElementById('legals').innerText = _i18next["default"].t('legals');
  document.getElementById('confidentiality').innerText = _i18next["default"].t('confidentiality');
  document.getElementById('newsletterText').innerText = _i18next["default"].t('newsletterText');
  document.getElementById('copyrights').innerText = _i18next["default"].t('copyrights');
}
_i18next["default"].use(_i18nextHttpBackend["default"]).init({
  backend: {
    // Chemin d'accès aux fichiers de traduction
    loadPath: "".concat(projectPath, "/locales/{{lng}}/{{ns}}.json")
  },
  fallbackLng: 'fr',
  debug: true,
  interpolation: {
    escapeValue: false
  }
}, function (err, t) {
  if (err) return console.log('something went wrong loading', err);
  updateTranslations();
});