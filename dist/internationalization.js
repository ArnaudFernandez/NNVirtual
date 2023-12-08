"use strict";

var _i18next = _interopRequireDefault(require("i18next"));
var _i18nextHttpBackend = _interopRequireDefault(require("i18next-http-backend"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var basePath = '/NNVirtual/';
var textKeys = [];
document.addEventListener('DOMContentLoaded', function () {
  _i18next["default"].use(_i18nextHttpBackend["default"]).init({
    backend: {
      // Chemin d'accès aux fichiers de traduction
      loadPath: "".concat(basePath, "locales/{{lng}}/{{ns}}.json")
    },
    ns: ['translation'],
    defaultNS: 'translation',
    fallbackLng: 'fr',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  }, function (err, t) {
    if (err) return console.log('something went wrong loading', err);
    updateTranslations();
  }).then(function (_) {
    var keys = [];
    _i18next["default"].languages.forEach(function (lang) {
      var translationKeys = Object.keys(_i18next["default"].store.data[lang]['translation']);
      keys = [].concat(_toConsumableArray(keys), translationKeys);
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
  _i18next["default"].changeLanguage(lng, function (err, t) {
    if (err) return console.log('something went wrong loading', err);
    console.log(lng);
    if (lng == "en") {
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
document.getElementById('languageSelector').addEventListener('change', function (event) {
  changeLanguage(event.target.value);
});
document.getElementById('languageSelectorMobile').addEventListener('change', function (event) {
  changeLanguage(event.target.value);
});
function updateTranslations() {
  textKeys.forEach(function (elem) {
    if (document.getElementById(elem)) {
      document.getElementById(elem).innerText = _i18next["default"].t(elem);
    }
  });
}