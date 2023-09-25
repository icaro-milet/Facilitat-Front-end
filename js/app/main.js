import TemplateService from "./modules/template.js";
import AnswerService from "./modules/answer.js";

$(document).ready(function(){
    TemplateService.getTemplates();
    AnswerService.getAnswers();
});