import displayMessage from "./displayMessage.js";

const contactFormUrl = "https://jonnekrosby.site/project-exam1/wp-json/contact-form-7/v1/contact-forms/190/feedback";

export function sendContactForm(contactData) {
  fetch(contactFormUrl, {
    method: "post",
    body: contactData,
  })
    .then((response) => {
      if (!response.ok) {
        displayMessage("Sorry, But something went wrong sending you`re form", ".form-message", "error");
      } else {
        displayMessage("Thank u for contacting me, I will contact u within 24 hours", ".form-message", "success");
      }
    })
    .catch(error => console.error("error", error));
}