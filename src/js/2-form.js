const formData = {
    email: "",
    message: ""
};

const form = document.querySelector(".feedback-form");

checkInput();

form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const { email, message } = formData;

    if (!email || !message) {
        alert("Fill please all fields");
        return;
    };

    const userInfo = { email: email, message: message };
    console.log(userInfo);

    form.reset();
    localStorage.removeItem("feedback-form-state");
});

function checkInput() {
    const localInfo = JSON.parse(localStorage.getItem("feedback-form-state")) ?? {};

    formData.email = localInfo.email || '';
    formData.message = localInfo.message || '';

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}










