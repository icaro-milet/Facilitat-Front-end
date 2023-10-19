import {
    API_CONFIG
} from "../../config/api.js";
import "/js/kendo-ui-license.js";

const TemplateService = {
    getTemplates() {
        $(document).ready(function() {
            $("#tabstrip-images").kendoTabStrip({
                animation: {
                    open: {
                        effects: "fadeIn"
                    }
                },
                dataTextField: "text",
                dataImageUrlField: "imageUrl",
                dataContentField: "content",
                dataSource: [{
                        text: "Template",
                        imageUrl: "",
                        content: $(document).ready(function() {
                            $("#template-name").kendoMaskedTextBox();
                            $("#template-description").kendoMaskedTextBox();
                            $("#add-question").click(function() {
                                var questionContainer = $("<div class='question-container'></div>");
                                var questionInput = $("<input type='text' class='question-input' />");
                                questionContainer.append(questionInput);
                                $("#questions-container").append(questionContainer);
                            });

                            $("#save-template").click(function() {
                                var questions = [];
                                $(".question-input").each(function() {
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
                                        'Content-Type': 'application/json'
                                    },
                                    success: function(response) {
                                        console.log("Data sent successfully:", response);
                                        $(".question-input").val("");
                                    },
                                    error: function(error) {
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
                        content: $("#templateDropdown").kendoDropDownList({
                            label: {
                                content: "Template",
                                floating: false
                            },
                            autoBind: false,
                            dataTextField: "name",
                            dataValueField: "id",
                            filter: "contains",
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

                                    var answersUrl = `${API_CONFIG.BASE_URL}${API_CONFIG.TEMPLATE_GET_TEMPLATE_BY_ID_ENDPOINT}` + selectedValue;
                                    $.ajax({
                                        url: answersUrl,
                                        method: 'GET',
                                        success: function(data) {
                                            $('#questionsContainer').empty();

                                            data.Questions.forEach(function(questions, index) {
                                                var inputId = `question_${index}`;
                                                $('#questionsContainer').append(`<div class="question"> <label>` + questions.questionText + '</label></div>');
                                                $('#questionsContainer').append(`<input id="${inputId}" class='question-input'/>`);
                                            });

                                            $('#questionsContainer').append(`<button id="submit-answers" class="k-button">Save</button>
                                                <button id="cancel-answers" class="k-button">Cancel</button>`);

                                            submitAnswers(data);
                                        },
                                        error: function() {},

                                    });

                                    function submitAnswers(data) {
                                        $("#submit-answers").click(function() {
                                            var questions = data.Questions;
                                            data.Questions.forEach(function(answerText, index) {
                                                var resultData = {
                                                    id: 0,
                                                    serviceOrderCode: 0,
                                                    dateCreated: 0,
                                                    status: ''
                                                };
                                                var questionId = questions[index].id;
                                                var inputId = `question_${index}`;
                                                var answerText = $(`#${inputId}`).val();
                                                var serviceOrderCode = $('#serviceOrderInput').val();
                                                var serviceOrderCodeUrl =
                                                    `${API_CONFIG.BASE_URL}${API_CONFIG.SERVICE_ORDER_GET_BY_CODE}?serviceOrderCode=${serviceOrderCode}`;
                                                $.ajax({
                                                    url: serviceOrderCodeUrl,
                                                    method: 'GET',
                                                    success: function(response) {
                                                        resultData = {
                                                            id: response.id,
                                                            serviceOrderCode: response.serviceOrderCode,
                                                            dateCreated: response.dateCreated,
                                                            status: response.status
                                                        };

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
                                                                'Content-Type': 'application/json'
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
                                                    error: function() {

                                                    },
                                                });
                                            });
                                        });
                                    }
                                }


                                function generateServiceOrder(selectedValue) {
                                    if (selectedValue) {
                                        var formData = {};
                                        var generateServiceOrderCodeUrl = `${API_CONFIG.BASE_URL}${API_CONFIG.SERVICE_ORDER_POST}`;
                                        $.ajax({
                                            url: generateServiceOrderCodeUrl,
                                            method: "POST",
                                            data: JSON.stringify(formData),
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            success: function(data) {
                                                $('#serviceOrderInput').val(data.serviceOrderCode);
                                            },
                                            error: function() {}
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
                        content: $("#templateGridDropdown").kendoDropDownList({
                            label: {
                                content: "Template",
                                floating: false
                            },
                            autoBind: false,
                            dataTextField: "name",
                            dataValueField: "id",
                            filter: "contains",
                            dataSource: {
                                transport: {
                                    read: {
                                        dataType: "json",
                                        url: `${API_CONFIG.BASE_URL}${API_CONFIG.TEMPLATE_ENDPOINT}`,
                                    }
                                }
                            },
                            change: function() {
                                const templateId = this.value();
                                displayGrid(templateId);

                                function displayGrid(templateId) {
                                    $("#grid").kendoGrid({
                                        dataSource: {
                                            data: []
                                        },
                                        columns: [{
                                                field: "Question",
                                                title: "Pergunta",
                                                template: loadQuestions(templateId)
                                            },
                                            {
                                                field: "Answer",
                                                title: "Resposta"
                                            }
                                        ],
                                        height: 400,
                                        sortable: true,
                                        pageable: true
                                    });
                                }

                                function loadQuestions(templateId) {
                                    var questions = [];

                                    $.ajax({
                                        url: `${API_CONFIG.BASE_URL}${API_CONFIG.QUESTION_GET_QUESTIONS_BY_ID}?templateId=${templateId}`,
                                        method: "GET",
                                        success: function(templateData) {
                                            for (var i = 0; i < templateData.length; i++) {
                                                questions.push(templateData[i].questionText)
                                            }
                                        },
                                        error: function() {
                                            console.error("Failed to fetch template data.");
                                        },
                                    });

                                    $.ajax({
                                        url: `${API_CONFIG.BASE_URL}${API_CONFIG.ANSWER_ENDPOINT}?templateId=${templateId}`,
                                        method: "GET",
                                        success: function(data) {
                                            var gridDataSource = $("#grid").data("kendoGrid").dataSource;

                                            for (var i = 0; i < data.length; i++) {
                                                var newDataRow = {
                                                    Answer: data[i].answerText,
                                                    Question: questions[i]
                                                }
                                                gridDataSource.add(newDataRow);
                                            }
                                        },
                                        error: function() {
                                            console.error("Failed to fetch template data.");
                                        },
                                    });
                                }
                            },
                        }),
                    },
                    {
                        text: "Cadastro de usuário",
                        content: $(document).ready(function() {
                            var validationSuccess = $("#validation-user-success");
                            $("#userForm").kendoForm({
                                orientation: 'vertical',
                                items: [{
                                        field: 'FirstName',
                                        title: 'FirstName',
                                        label: 'Nome',
                                        validation: {
                                            required: true
                                        }
                                    },
                                    {
                                        field: 'LastName',
                                        title: 'LastName',
                                        label: 'Sobrenome',
                                        validation: {
                                            required: true
                                        }
                                    },
                                    {
                                        field: 'Email',
                                        title: 'Email',
                                        label: 'E-mail',
                                        validation: {
                                            required: true
                                        },
                                    },
                                    {
                                        field: 'Document',
                                        title: 'Document',
                                        label: 'Documento',
                                        validation: {
                                            required: true
                                        }
                                    }
                                ],
                                validateField: function(e) {
                                    validationSuccess.html("");
                                },
                                submit: function(e) {
                                    e.preventDefault();

                                    let formData = {
                                        FirstName: $('#FirstName').val(),
                                        LastName: $('#LastName').val(),
                                        Email: $('#Email').val(),
                                        Document: $('#Document').val()
                                    }

                                    $.ajax({
                                        url: `${API_CONFIG.BASE_URL}${API_CONFIG.USER_POST_CREATE}`,
                                        method: "POST",
                                        data: JSON.stringify(formData),
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        success: function(response) {
                                            console.log("Data sent successfully:", response);
                                        },
                                        error: function(error) {
                                            console.error("Error:", error);
                                        }
                                    });

                                    validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Usuário cadastrado com sucesso</div>");
                                },
                                clear: function(ev) {
                                    validationSuccess.html("");
                                }
                            })

                            $("#userForm input[name='Document']").change(function(e) {
                                var value = $(this).val().replace(/\D/g, ''); // Remove non-numeric characters
                                var newValue = '';
                                if (value.length <= 11) {
                                    newValue = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"); // CPF format
                                } else {
                                    newValue = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5"); // CNPJ format
                                }
                                $(this).val(newValue);
                            });
                        })
                    },
                    {
                        text: "Agendamento",
                        content: $(function(){
                            $('#scheduler').kendoScheduler({
                                date: new Date(),
                                height: 600,
                                views: [
                                    "day",
                                    { type: "week", selected: true },
                                    "month",
                                    "agenda",
                                    "timeline"
                                ],
                                timezone: "Etc/UTC",
                                dataSource: {
                                    batch: true,
                                    transport: {
                                        read: {
                                            url: `${API_CONFIG.BASE_URL}${API_CONFIG.USER_GET_ALL}`,
                                            dataType: "jsonp"
                                        },
                                        create: {
                                            url: `${API_CONFIG.BASE_URL}${API_CONFIG.APPOINTMENT_CREATE}`,
                                            dataType: "json",
                                            type: "POST",
                                            contentType: "application/json",
                                            success: function(data) {
                                                console.log(data);
                                            }
                                        },
                                        parameterMap: function(options, operation) {
                                            if (operation !== "read" && options.models) {
                                                return {models: kendo.stringify(options.models)};
                                            }
                                        }
                                    },
                                    schema: {
                                        model: {
                                            id: "id",
                                            fields: {
                                                Id: { from: "id", type: "number" },
                                                Title: { from: "Title", defaultValue: "No title", validation: { required: true } },
                                                Start: { type: "date", from: "Start" },
                                                End: { type: "date", from: "End" },
                                                Description: { from: "Description" },
                                                UserId: { from: "UserId", nullable: true },
                                            }
                                        }
                                    },
                                    resources: [{
                                        field: "UserId",
                                        dataTextField: "FirstName",
                                        title: "User",
                                        dataSource: {
                                            transport: {
                                                read: {
                                                    url: `${API_CONFIG.BASE_URL}${API_CONFIG.USER_GET_ALL}`,
                                                    dataType: "json"
                                                }
                                            }
                                        }
                                    }]
                                }
                            })
                        })
                    }
                ]
            }).data("kendoTabStrip").select(0);
        });
    }
}

export default TemplateService;