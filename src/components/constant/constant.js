//API_ROOT_LINK
//const api_baseLink = "http://localhost:8080/sym-api/me/";
const api_rootLink = "https://sym-api-dev.herokuapp.com/sym-api/";
const api_baseLink = api_rootLink + "me/";

//SIDEBAR
export const sidebar_api = api_baseLink + "sidebar";

//CONTACT_ME
export const contactme_api = api_baseLink + "contactme";
export const contactme_feedback_api = api_rootLink + "emailservice/send-feedback-email";

//HEROAREA
export const heroarea_api = api_baseLink + "heroarea";

//INTRODUCTION
export const intro_api = api_baseLink + "introduction";