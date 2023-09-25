import { API_CONFIG } from "../../config/api.js";

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
                        text: "Serviços",
                        imageUrl: "",
                        content: $("<div/>").appendTo("#templateGrid").kendoGrid({
                            dataSource: {
                                data: data,
                                pageSize: 6,
                                serverPaging: true,
                                serverSorting: true
                            },
                            height: 600,
                            dataBound: function() {
                                this.expandRow(this.tbody.find("tr.k-master-row").first());
                            },
                            columns: [
                                {
                                    field: "name",
                                    title: "Name",
                                    width: "110px"
                                }
                            ],
                            detailTemplate: kendo.template($("#subgrid-template").html()),
                            detailInit: createSubGrid
                        })
                    },
                    {
                        text: "Cadastro",
                        imageUrl: "",
                        content:  $("<div/>").appendTo("#form"),
                        submit: $("#submitButton").click(function() {
                            // Gather form data
                            let formData = {
                                username: $("#username").val(),
                                email: $("#email").val()
                            };
                        
                            // Send the data via AJAX
                            $.ajax({
                                url: `${API_CONFIG.BASE_URL}${API_CONFIG.ANSWER_POST_ENDPOINT}`,
                                method: "POST", // or "GET" or other HTTP methods
                                data: JSON.stringify(formData), // Pass the form data
                                headers: {
                                    'Content-Type':'application/json'
                                },
                                success: function(response) {
                                    // Handle success response
                                    console.log(formData);
                                    console.log("Data sent successfully:", response);
                                },
                                error: function(error) {
                                    // Handle error
                                    console.error("Error:", error);
                                }
                            });
                        })
                    }
                ]

            }).data("kendoTabStrip").select(0);
        }

        function submitForm(e){
            $.ajax({
                url: `${API_CONFIG.BASE_URL}${API_CONFIG.ANSWER_POST_ENDPOINT}`,
                method: 'POST',
                data: e.data,
                headers: {
                    'Content-Type':'application/javascript'
                },
                success: function(data){
                    console.log(JSON.stringify(data))
                },
                error: function(error){
                    console.error(error);
                }
            })
        }

        function createSubGrid(e) { 
            $("<div/>").appendTo(e.detailCell).kendoGrid({
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
                        success: function(data){
                            console.log(JSON.stringify(data))
                        },
                        error: function(error){
                            console.error(error);
                        }
                    })
                },
                dataBound: function() {
                    this.expandRow(this.tbody.find("tr.k-master-row").first());
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