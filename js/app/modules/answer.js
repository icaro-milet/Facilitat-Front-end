import { API_CONFIG } from "../../config/api.js";

const AnswerService = {
    getAnswers(){
        $.ajax({
            url: `${API_CONFIG.BASE_URL}${API_CONFIG.ANSWER_ENDPOINT}`,
            method: 'GET',
            headers: {
                'Content-Type':'application/javascript'
            },
            error: function(error){
                console.error(error);
            }
        });
    }
}

export default AnswerService;