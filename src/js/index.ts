import $ from "jquery";
import Translator from "./Translator";
import Lang from "../config/lang";
import ImageHolder from "./ImageHolder";

const translator = new Translator(Lang.Locale.de_de, Lang.Locale.en_us, Lang.elements, Lang.mapping, Lang.txt, true);

$(function () {

    translator.nameAllElments();
    const swissFedLogo = new ImageHolder("../img/swissfed-logo.png", "swissfed-logo", true);

});