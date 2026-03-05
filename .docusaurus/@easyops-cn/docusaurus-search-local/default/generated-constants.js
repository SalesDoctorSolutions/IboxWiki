import lunr from "D:\\Projects\\Wiki\\ibox-docs-preview\\node_modules\\lunr\\lunr.js";
require("D:\\Projects\\Wiki\\ibox-docs-preview\\node_modules\\lunr-languages\\lunr.stemmer.support.js")(lunr);
require("D:\\Projects\\Wiki\\ibox-docs-preview\\node_modules\\lunr-languages\\lunr.ru.js")(lunr);
require("D:\\Projects\\Wiki\\ibox-docs-preview\\node_modules\\lunr-languages\\lunr.multi.js")(lunr);
export const removeDefaultStopWordFilter = [];
export const language = ["en","ru"];
export const searchIndexUrl = "search-index{dir}.json?_=2ada92f5";
export const searchResultLimits = 8;
export const fuzzyMatchingDistance = 1;