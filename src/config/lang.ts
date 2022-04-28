
// Define which lanuages are supported.
const Locale = {
    "en_us": "en_us",
    "de_de": "de_de"
}

// Define the elements in your appliacation which have some text.
const Element = {
    "uppermost_title": "uppermost_title",
    "introduction_text": "introduction_text",
    "figure_title": "figure_title",
    "choose_dimension_title": "choose_dimension_title",
    "choose_figures_title": "choose_figures_title",
    "draw_figure_button": "draw_figure_button"
}

// Define language tags (one tag can be used for multple elements).
const Tag = {
    "uppermost_title": "uppermost_title",
    "introduction_text": "introduction_text",
    "figure_title": "figure_title",
    "choose_dimension_title": "choose_dimension_title",
    "choose_figures_title": "choose_figures_title",
    "draw_figure_button": "draw_figure_button"
}

// Choose a language tag for different elements in your application.
const mapping = {
    [Element.uppermost_title]: Tag.uppermost_title,
    [Element.introduction_text]: Tag.introduction_text,
    [Element.figure_title]: Tag.figure_title,
    [Element.choose_dimension_title]: Tag.choose_dimension_title,
    [Element.choose_figures_title]: Tag.choose_figures_title,
    [Element.draw_figure_button]: Tag.draw_figure_button
}

// For each tag (see above), define the description in the according language.
const txt = {
    [Locale.en_us]: {
        [Tag.uppermost_title]: "Open Government Data - FADN data visualisation",
        [Tag.introduction_text]: "Click on the left or right arrow of your keyboard and the logo will appear and disappear.",
        [Tag.figure_title]: "Data visualisation",
        [Tag.choose_dimension_title]: "Choose dimension",
        [Tag.choose_figures_title]: "Choose the figures of interest",
        [Tag.draw_figure_button]: "Draw!"
    },

    [Locale.de_de]: {
        [Tag.uppermost_title]: "Open Government Data - Visualisierung der Daten der ZA-BH von Agroscope",
        [Tag.introduction_text]: "Drücken sie auf den linken bzw. rechten Pfeil der Tastatur und das Logo wird verschwinden und wieder auftauchen.",
        [Tag.figure_title]: "Datenvisualisierung",
        [Tag.choose_dimension_title]: "Bitte wählen Sie die Dimension (Region, Betriebstyp, ...)",
        [Tag.choose_figures_title]: "Bitte wählen Sie die anzuzeigenden Kennzahlen",
        [Tag.draw_figure_button]: "Grafik anzeigen!"
    }
}

// Do not change the lines below.

const valuesToArr = function(obj): Array<string> {
    const arr: Array<string> = [];
    for(const key in obj) {
        arr.push(obj[key]);
    }
    return arr;
}

export default {
    Locale,
    Tag,
    elements: valuesToArr(Element),
    mapping,
    txt
}
