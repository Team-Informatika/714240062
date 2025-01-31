import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";
import { renderHTML } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";

renderHTML ("root", "home.html");

function renderDatadariJson() {

    getJSON ("https://t.if.co.id/json/Malik.json", "aja", "enak", responseFunction);

}
