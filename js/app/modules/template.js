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
                                var initialFormHtml = $("#template-screen").html();
                                var questions = [];
                                $(".question-input").each(function () {
                                    var questionDto = {
                                        Id: 0, 
                                        TemplateId: 0, 
                                        QuestionText: $(this).val()
                                    };
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
                                        $("#template-screen").html(initialFormHtml);
                                        $(".question-input").val("");
                                    },
                                    error: function(error) {
                                        // Handle error
                                        console.error("Error:", error);
                                    }
                                });
                                $("#template-name").val("");
                                $(".question-input").remove();
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
                                                $.each(data.questions, function (index, question) {
                                                    $('#questionsContainer').append('<input type="text" value="' + question + '" readonly />');
                                                });
                                            },
                                            error: function () {
                                                // Handle errors if the AJAX request fails
                                            }
                                        });
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
                                }
                                
                            }),
                             
                    }
                ]
            }).data("kendoTabStrip").select(0);
        });
    }
}

export default TemplateService;