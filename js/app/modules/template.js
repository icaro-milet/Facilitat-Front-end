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
                            var validationSuccess = $("#validation-success");
                            
                            $("#exampleform").kendoForm({
                                formData: {
                                    name: $("#name").val(),
                                    question_one: $("#question_one").val(),
                                    question_two: $("#question_two").val()
                                },
                                layout: "grid",
                                grid: {
                                    cols: 4,
                                    gutter: 20
                                },
                                items: [
                                    {
                                        type: "group",
                                        label: "Cadastro de template",
                                        layout: "grid",
                                        grid: { cols: 1, gutter: 10},
                                        items: [
                                            { 
                                                field: "name", 
                                                label: "Nome do template:", 
                                                validation: { required: true } 
                                            },
                                            { 
                                                field: "question_one", 
                                                label: "Primeira pergunta:", 
                                                validation: { required: true } 
                                            },
                                            { 
                                                field: "question_two", 
                                                label: "Segunda pergunta:", 
                                                validation: { required: true}
                                            }
                                        ]
                                    }
                                ],
                                validateField: function(e) {
                                    validationSuccess.html("");
                                },
                                submit: function(e) {
                                    e.preventDefault();

                                    let formData = {
                                        name: $("#name").val(),
                                        questions: {
                                            question_one: $("#question_one").val(),
                                            question_two: $("#question_two").val()
                                        }
                                    };

                                    $.ajax({
                                        url: `${API_CONFIG.BASE_URL}${API_CONFIG.TEMPLATE_POST_CREATE}`,
                                        method: "POST", // or "GET" or other HTTP methods
                                        data: JSON.stringify(formData),
                                        headers: {
                                            'Content-Type':'application/json'
                                        },
                                        success: function(response) {
                                            // Handle success response
                                            console.log("Data sent successfully:", response);
                                        },
                                        error: function(error) {
                                            // Handle error
                                            console.error("Error:", error);
                                        }
                                    });
                                    
                                    validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Form data is valid!</div>");
                                },
                                clear: function(ev) {
                                    validationSuccess.html("");
                                }
                            });
                        }),
                    },
                    {
                        text: "Ordem de serviço",
                        content:  $(document).ready(function () {
                            var validationSuccess = $("#validation-success");
                            
                            $("#serviceOrderForm").kendoForm({
                                layout: "grid",
                                grid: {
                                    cols: 4,
                                    gutter: 20
                                },
                                items: [
                                    {
                                        type: "group",
                                        label: "Cadastro de ordem de serviço",
                                        layout: "grid",
                                        grid: { cols: 1, gutter: 10},
                                        items: [
                                            { 
                                                field: "service_order_name", 
                                                label: "Nome da ordem de serviço:", 
                                                validation: { required: true } 
                                            },
                                            { 
                                                field: "description", 
                                                label: "Descrição:", 
                                                validation: { required: true } 
                                            }
                                        ]
                                    }
                                ],
                                validateField: function(e) {
                                    validationSuccess.html("");
                                },
                                submit: function(e) {
                                    e.preventDefault();

                                    let formData = {
                                        service_order_name: $("#service_order_name").val(),
                                        description: $("#description").val()
                                    };

                                    $.ajax({
                                        url: `${API_CONFIG.BASE_URL}${API_CONFIG.SERVICE_ORDER_POST}`,
                                        method: "POST", // or "GET" or other HTTP methods
                                        data: JSON.stringify(formData),
                                        headers: {
                                            'Content-Type':'application/json'
                                        },
                                        success: function(response) {
                                            // Handle success response
                                            console.log("Data sent successfully:", response);
                                        },
                                        error: function(error) {
                                            // Handle error
                                            console.error("Error:", error);
                                        }
                                    });
                                    
                                    validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Form data is valid!</div>");
                                },
                                clear: function(ev) {
                                    validationSuccess.html("");
                                }
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
                                    const selectedValue = this.value(dataValueField); 
                                    
                                    console.log(selectedValue)

                                    displayForm(selectedValue); 

                                    function displayForm(selectedValue) {
                                        const myForm = $("#answerform");

                                        const firstLabel = 
                                        $.ajax({
                                            url: `${API_CONFIG.BASE_URL}${API_CONFIG.TEMPLATE_GET_TEMPLATE_BY_ID_ENDPOINT}${selectedValue}`,
                                            method: "GET", 
                                            headers: {
                                                'Content-Type':'application/json'
                                            },
                                            success: function(response) {
                                                // Handle success response
                                                console.log("Data sent successfully:", response);
                                            },
                                            error: function(error) {
                                                // Handle error
                                                console.error("Error:", error);
                                            }
                                        });

                                        if (selectedValue === "Serviço") {
                                            $("#answerform").kendoForm({
                                                layout: "grid",
                                                grid: {
                                                    cols: 4,
                                                    gutter: 20
                                                },
                                                items: [
                                                    {
                                                        type: "group",
                                                        layout: "grid",
                                                        grid: { cols: 1, gutter: 10},
                                                        items: [
                                                            { 
                                                                field: "question_one", 
                                                                label: firstLabel, 
                                                                validation: { required: true } 
                                                            },
                                                            { 
                                                                field: "question_two", 
                                                                label: "Segunda pergunta:", 
                                                                validation: { required: true}
                                                            }
                                                        ]
                                                    }
                                                ],
                                                validateField: function(e) {
                                                    validationSuccess.html("");
                                                },
                                                submit: function(e) {
                                                    e.preventDefault();
                
                                                    let formData = {
                                                        name: $("#name").val(),
                                                        questions: {
                                                            question_one: $("#question_one").val(),
                                                            question_two: $("#question_two").val()
                                                        }
                                                    };
                
                                                    $.ajax({
                                                        url: `${API_CONFIG.BASE_URL}${API_CONFIG.TEMPLATE_POST_CREATE}`,
                                                        method: "POST", // or "GET" or other HTTP methods
                                                        data: JSON.stringify(formData),
                                                        headers: {
                                                            'Content-Type':'application/json'
                                                        },
                                                        success: function(response) {
                                                            // Handle success response
                                                            console.log("Data sent successfully:", response);
                                                        },
                                                        error: function(error) {
                                                            // Handle error
                                                            console.error("Error:", error);
                                                        }
                                                    });
                                                    
                                                    validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Form data is valid!</div>");
                                                },
                                                clear: function(ev) {
                                                    validationSuccess.html("");
                                                }
                                            }); // Display the form

                                            myForm.show();
                                        } else {
                                            myForm.hide(); // Hide the form
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