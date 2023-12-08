import i18n from 'i18next';
import Backend from 'i18next-http-backend';

const basePath = '/NNVirtual/';
let textKeys = [];

document.addEventListener('DOMContentLoaded', function () {

    i18n
        .use(Backend)
        .init({
            backend: {
                // Chemin d'accès aux fichiers de traduction
                loadPath: `${basePath}locales/{{lng}}/{{ns}}.json`
            },
            ns: [
                'translation',
            ],
            defaultNS: 'translation',
            fallbackLng: 'fr',
            debug: true,
            interpolation: {
                escapeValue: false
            }
        }, (err, t) => {
            if (err) return console.log('something went wrong loading', err);
            updateTranslations();
        }).then( _ => {
            let keys = [];
            i18n.languages.forEach(lang => {
                const translationKeys = Object.keys(i18n.store.data[lang]['translation']);
                keys = [...keys, ...translationKeys];
            });

            textKeys = keys;

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


});

function changeLanguage(lng) {
    i18n.changeLanguage(lng, (err, t) => {
        if (err) return console.log('something went wrong loading', err);
        console.log(lng);
        if(lng == "en") {
            document.getElementById("frSelectorRadio").checked = false;
            document.getElementById("enSelectorRadio").checked = true;

            document.getElementById("languageSelectorMobile").selectedIndex = 1;
        } else if (lng == "fr") {
            document.getElementById("enSelectorRadio").checked = false;
            document.getElementById("frSelectorRadio").checked = true;

            document.getElementById("languageSelectorMobile").selectedIndex = 2;

        }
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

