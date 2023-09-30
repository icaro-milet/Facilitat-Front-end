import { API_CONFIG } from "../../config/api.js";
import "/js/kendo-ui-license.js";

const TemplateService = {
    getTemplates(){
        const apiUrl = `${API_CONFIG.BASE_URL}${API_CONFIG.TEMPLATE_ENDPOINT}`;
        $.ajax({
            url: apiUrl,
            method: 'GET',
            headers: {
                'Content-Type':'application/javascript'
            },
            success: function(data){
                makeTabStrip(data);
            },
            error: function(error){
                console.error(error);
            }
        });

        function makeTabStrip(data){
            $("#tabstrip-images").kendoTabStrip({
                animation: { open: { effects: "fadeIn"} },
                dataTextField: "text",
                dataImageUrlField: "imageUrl",
                dataContentField: "content",
                dataSource: [
                    {
                        text: "Criar Template",
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
                                        label: "Perguntas do template",
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
                        text: "Respostas",
                        imageUrl: "",
                        content:  $("#answerform").kendoForm({
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
                                    label: "Respostas",
                                    layout: "grid",
                                    grid: { cols: 1, gutter: 10},
                                    items: [
                                        { 
                                            field: "Template", 
                                            editor: "DropDownList", 
                                            label: "Template", 
                                            validation: { required: true }, 
                                            colSpan: 1,
                                            editorOptions: {
                                                optionLabel: "Escolha um Template",
                                                dataTextField: "name",
                                                dataValueField: "id",
                                                dataSource: {
                                                    transport: {
                                                        read: {
                                                            url: `${API_CONFIG.BASE_URL}${API_CONFIG.TEMPLATE_ENDPOINT}`, // Replace with your API endpoint
                                                            dataType: "json" // Set the data type expected from the server
                                                        }
                                                    }
                                                }
                                            }
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
                                
                            },
                            clear: function(ev) {
                                validationSuccess.html("");
                            }
                        }),
                    },
                    // {
                    //     text: "Serviços",
                    //     content: $("<div/>").appendTo("#templateGrid").kendoGrid({
                    //         dataSource: {
                    //             data: data,
                    //             pageSize: 6,
                    //             serverPaging: true,
                    //             serverSorting: true
                    //         },
                    //         height: 600,
                    //         dataBound: function() {
                    //             this.expandRow(this.tbody.find("tr.k-master-row").first());
                    //         },
                    //         columns: [
                    //             {
                    //                 field: "name",
                    //                 title: "Name",
                    //                 width: "110px"
                    //             }
                    //         ],
                    //         detailTemplate: kendo.template($("#subgrid-template").html()),
                    //         detailInit: createSubGrid
                    //     })
                    // }
                ]

            }).data("kendoTabStrip").select(0);
        }

        function createSubGrid(e) { 
            $("<div/>").appendTo(e.detailCell).kendoGrid({
                dataBound: function() {
                    this.expandRow(this.tbody.find("tr.k-master-row").first());
                },
                dataSource: {
                    data: 'odata',
                },
                transport: {
                    read: $.ajax({
                        url: `${API_CONFIG.BASE_URL}${API_CONFIG.ANSWER_ENDPOINT}`,
                        method: 'GET',
                        headers: {
                            'Content-Type':'application/javascript'
                        },
                        success: function(response){
                            console.log(response)
                            
                        },
                        error: function(error){
                            console.error(error);
                        }
                    })
                },
                schema: {
                    model: {
                        fields: {
                            service_order_code: { type: "number" },
                            Username: { type: "string" },
                            Email: { type: "string" }
                        }
                    }
                },
                scrollable: false,
                columns: [
                    { field: "service_order_code", title: "Service Order", width: "110px" },
                    { field: "username", title:"Username", width: "110px" },
                    { field: "email", title:"Email" , width: "110px"}
                    ]
                });
        }
    }
}

export default TemplateService;