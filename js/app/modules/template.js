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
                populateGrid(data);
            },
            error: function(error){
                console.error(error);
            }
        });

        function populateGrid(data){
            $("#ordersGrid").kendoGrid({
                dataSource: {
                    data: data,
                    pageSize: 20
                },
                columns: [
                    {field: "id", title: "Id"},
                    {field: "username", title: "Username"},
                    {field: "email", title: "Email"}
                ]
            })
        }
    }

}

export default TemplateService;