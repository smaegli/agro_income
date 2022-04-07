# TODO list

## Programming
* For all HTML elements, please use the functionality of the 'Translator' class, i.e.,
  * Define the element ids and tag names as well as the according texts in ./src/config/lang.ts
  * Attention: this Translator class must not be confused with another text-translating class that has to be created in order to translate abbreviations and encodings (see below).
* Create a prototype of your preferred figure using the d3.js library (`npm install --save d3 @types/d3`)
  * In a frist step, use arbitrary data - hardcoded in your project.
* Create a class or functions to handle your data.
  * Functionality 1: Load the data from CSV into memory.
  * Functionality 2: Filter the data according user selection.
    * Which figures to load?
	* Which dimension filters to apply (year, type, region, zone)?
	* In the chosen dimensions, which levels to select (e.g., year 2019, type 1521)?
	* Hints
	  * Use the lodash library to filter data (`npm install --save lodash @types/lodash`)
	  * In a first step, test your function with hard encoded function parameters. Handle real user input later (see below).
  * Functionality 3: Return data such that it can be processed by the d3 library.
* Create a class or functions to translate abbreviations to human-readable text.
  * Encodings such as region 1, 2, 3 = Talregion, Hügelregion, Bergregion
  * Figures such as ArbeitNAT = Arbeitstage Landwirtschaft
* Create a class or functions to give the user a choice what to analize.
  * This class/function has to load all available figures and dimensions.
    * Translate these figures and dimensions (using the class/function mentioned above).
  * Define HTML-Elements that give the user the option to select something.
  * When user selects checkbox for figure/dimension, use an action handler to transfer information from the GUI to the object.
    * An example can be seen in the class 'ImageHolder'.
* Connect all classes/functions you have created. Then your app is almost done.
* Remove unnecessary classes or interfaces that were created for illustration purpose only (such as the ImageHolder class).
* Style your website using the bootstrap functionality.

## Data delivery
* Deliver language data (translation of encodings and abbreviated figures). TBD by Daniel.