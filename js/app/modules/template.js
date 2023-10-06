import { API_CONFIG } from "../../config/api.js";
import "/js/kendo-ui-license.js";

const TemplateService = {
    getTemplates(){
        $(document).ready(function () {
            $("#tabstrip-images").kendoTabStrip({
                animation: { open: { effects: "fadeIn"} },
                dataTextField: "text",
                dataImageUrlField: "imageUrl",
                dataContentField: "content",
                dataSource: [
                    {
                        text: "Template",
                        imageUrl: "",
                        content:  $(document).ready(function () {
                            $("#template-name").kendoMaskedTextBox();
                            $("#template-description").kendoMaskedTextBox();
                            $("#add-question").click(function () {
                                var questionContainer = $("<div class='question-container'></div>");
                                var questionInput = $("<input type='text' class='question-input' />");
                                questionContainer.append(questionInput);
                                $("#questions-container").append(questionContainer);
                            });

                            $("#save-template").click(function () {
                                var questions = [];
                                $(".question-input").each(function () {
                                    var questionDto = {
                                        Id: 0, 
                                        TemplateId: 0, 
                                        QuestionText: $(this).val()
                                    };
                                    if (questionDto.QuestionText != '')
                                        questions.push(questionDto);
                                });

                                var formData = {
                                    Name: $("#template-name").val(),
                                    Description: $("#template-description").val(),
                                    Questions: questions
                                };
                                
                                $.ajax({
                                    url: `${API_CONFIG.BASE_URL}${API_CONFIG.TEMPLATE_POST_CREATE}`,
                                    method: "POST", 
                                    data: JSON.stringify(formData),
                                    headers: {
                                        'Content-Type':'application/json'
                                    },
                                    success: function(response) {
                                        console.log("Data sent successfully:", response);
                                        $(".question-input").val("");
                                    },
                                    error: function(error) {
                                        // Handle error
                                        console.error("Error:", error);
                                    }
                                });
                                $("#template-name").val("");
                                $("#template-description").val("");
                                alert("Template saved successfully!");
                            });
                        }),
                    },
                    {
                        text: "Respostas",
                        content:  
                            $("#templateDropdown").kendoDropDownList({
                                label: { 
                                    content: "Template",
                                    floating: false
                                },
                                autoBind:false,
                                dataTextField: "name",
                                dataValueField: "id",
                                filter:"contains",
                                dataSource: {
                                    transport: {
                                        read: {
                                            dataType: "json",
                                            url: `${API_CONFIG.BASE_URL}${API_CONFIG.TEMPLATE_ENDPOINT}`,
                                        }
                                    }
                                },
                                change: function() {
                                    const selectedValue = this.value(); 

                                    displayForm(selectedValue); 
                                    function displayForm(selectedValue) {
                                        generateServiceOrder(selectedValue);
                                        
                                        var answersUrl = `${API_CONFIG.BASE_URL}${API_CONFIG.TEMPLATE_GET_TEMPLATE_BY_NAME_ENDPOINT}` + selectedValue;
                                        $.ajax({
                                            url: answersUrl, // Adjust the URL to your API endpoint
                                            method: 'GET',
                                            success: function (data) {
                                                // Clear the existing content and populate the questions container
                                                $('#questionsContainer').empty();

                                                data.Questions.forEach(function (questions, index) {
                                                    var inputId = `question_${index}`;
                                                    $('#questionsContainer').append(`<div class="question"> <label>` + questions.questionText + '</label></div>');
                                                    $('#questionsContainer').append(`<input id="${inputId}" class='question-input'/>`);
                                                });

                                                $('#questionsContainer').append(`<button id="submit-answers" class="k-button">Save</button>
                                                <button id="cancel-answers" class="k-button">Cancel</button>`);

                                                submitAnswers(data);
                                            },
                                            error: function () {
                                                // Handle errors if the AJAX request fails
                                            },

                                        });

                                        function submitAnswers(data){
                                            $("#submit-answers").click(function() {
                                                var questions = data.Questions;
                                                data.Questions.forEach(function(answerText, index) {
                                                    var resultData = {
                                                        id: 0,
                                                        serviceOrderCode: 0,
                                                        dateCreated: 0,
                                                        status: ''
                                                    };
                                                    var questionId = questions[index].id; // Get question ID (if needed)
                                                    var inputId = `question_${index}`;
                                                    var answerText = $(`#${inputId}`).val();
                                                    var serviceOrderCode = $('#serviceOrderInput').val();
                                                    var serviceOrderCodeUrl = 
                                                        `${API_CONFIG.BASE_URL}${API_CONFIG.SERVICE_ORDER_GET_BY_CODE}?serviceOrderCode=${serviceOrderCode}`;
                                                    $.ajax({
                                                        url: serviceOrderCodeUrl,
                                                        method: 'GET',
                                                        success: function (response) {
                                                            resultData = {
                                                                id: response.id,
                                                                serviceOrderCode: response.serviceOrderCode,
                                                                dateCreated: response.dateCreated,
                                                                status: response.status
                                                            };

                                                            console.log(response);

                                                            var formData = {
                                                                QuestionId: questionId,
                                                                AnswerText: answerText,
                                                                ServiceOrderId: resultData.id 
                                                            };
                                                            $.ajax({
                                                                url: `${API_CONFIG.BASE_URL}${API_CONFIG.ANSWER_POST_ENDPOINT}`,
                                                                method: "POST", 
                                                                data: JSON.stringify(formData),
                                                                headers: {
                                                                    'Content-Type':'application/json'
                                                                },
                                                                success: function(response) {
                                                                    console.log("Answers submitted successfully:", response);
                                                                    $(".question-input").val("");
                                                                },
                                                                error: function(error) {
                                                                    console.error("Error:", error);
                                                                }
                                                            });
                                                        },
                                                        error: function () {
                                                            
                                                        },
                                                    }); 
                                                });
                                            });
                                        }
                                    }


                                    function generateServiceOrder(selectedValue){
                                        if (selectedValue) {
                                            var formData = {};
                                            var generateServiceOrderCodeUrl = `${API_CONFIG.BASE_URL}${API_CONFIG.SERVICE_ORDER_POST}`;
                                            $.ajax({
                                                url: generateServiceOrderCodeUrl,method: "POST", 
                                                data: JSON.stringify(formData),
                                                headers: {
                                                    'Content-Type':'application/json'
                                                },
                                                success: function (data) {
                                                    $('#serviceOrderInput').val(data.serviceOrderCode);
                                                },
                                                error: function () {}
                                            });
                                        } else {
                                            $('#serviceOrderContainer').hide();
                                            $('#questionsContainer').empty();
                                        }
                                    }
                                },
                                
                                
                            }),
                             
                    },
                    {
                        text: "Tabela de Respostas",
                        content:  
                            $("#templateGridDropdown").kendoDropDownList({
                                label: { 
                                    content: "Template",
                                    floating: false
                                },
                                autoBind:false,
                                dataTextField: "name",
                                dataValueField: "id",
                                filter:"contains",
                                dataSource: {
                                    transport: {
                                        read: {
                                            dataType: "json",
                                            url: `${API_CONFIG.BASE_URL}${API_CONFIG.TEMPLATE_ENDPOINT}`,
                                        }
                                    }
                                },
                                change: function() {
                                    const selectedValue = this.value(); 
                                    displayGrid(selectedValue); 

                                    function displayGrid(selectedValue) {
                                        $("#grid").kendoGrid({
                                            dataSource: {
                                                data: [], 
                                            },
                                            columns: [
                                                { 
                                                    field: "Question", 
                                                    title: "Question",
                                                    template: function loadGridData(selectedValue){
                                                        var questions = [];
                                                        var templatesUrl = `${API_CONFIG.BASE_URL}${API_CONFIG.TEMPLATE_GET_TEMPLATE_BY_NAME_ENDPOINT}` + selectedValue;
                                                            $.ajax({
                                                                url: templatesUrl,
                                                                method: "GET", 
                                                                success: function (response) {
                                                                    console.log(response);
                                                                    return questions
                                                                },
                                                                error: function () {}
                                                            });
                                                    }
                                                 },
                                                { field: "AnswerText", title: "Answer" },
                                            ],
                                            height: 400, 
                                            sortable: true, 
                                            pageable: true 
                                        });
                                    }

                                    
                                },
                                
                                
                            }),
                    }
                ]
            }).data("kendoTabStrip").select(0);
        });
    }
}

export default TemplateService;