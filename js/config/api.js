export const API_CONFIG = {
    BASE_URL: 'https://localhost:5001',
    TEMPLATE_ENDPOINT: '/Template/GetAllTemplates',
    TEMPLATE_GET_TEMPLATE_BY_ID_ENDPOINT: '/Template/GetByIdTemplate/',
    TEMPLATE_GET_TEMPLATE_BY_NAME_ENDPOINT: '/Template/GetByNameTemplate/',
    TEMPLATE_POST_CREATE: '/Template/CreateTemplate',
    ANSWER_ENDPOINT: '/Answer/GetAllAnswersByTemplateId/',
    ANSWER_POST_ENDPOINT: '/Answer/CreateAnswer',
    SERVICE_ORDER_POST: '/ServiceOrder/CreateServiceOrder',
    SERVICE_ORDER_GET_BY_CODE: '/ServiceOrder/GetServiceOrderByCode/',
    QUESTION_GET_QUESTIONS_BY_ID: '/Question/GetQuestionsToFormById/'
};

export default API_CONFIG;