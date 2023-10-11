import i18n from 'i18next';
import Backend from 'i18next-http-backend';

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content loaded');
});

i18n
    .use(Backend)
    .init({
        backend: {
            // Chemin d'accès aux fichiers de traduction
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },
        fallbackLng: 'fr',
        debug: true,
        interpolation: {
            escapeValue: false
        }
    }).then(r => {
        document.getElementById('bannerTitle1').innerText = i18n.t('bannerTitle1');
        document.getElementById('bannerSubtitle1').innerText = i18n.t('bannerSubtitle1');
    });

