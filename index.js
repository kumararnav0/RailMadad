document.addEventListener('DOMContentLoaded', () => {
    // Handle tab button clicks to show/hide forms
    const tabButtons = document.querySelectorAll('.tab-button');
    const formSections = document.querySelectorAll('.form-section');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetForm = document.getElementById(button.getAttribute('data-form'));
            
            formSections.forEach(section => {
                section.classList.remove('active');
            });

            targetForm.classList.add('active');
        });
    });

    // Example for showing a simple alert on form submission
    const submitButtons = document.querySelectorAll('.submit-btn');
    submitButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default form submission
            alert('Form Submitted!');
        });
    });

    // Chatbot Modal functionality
    const chatbotBtn = document.getElementById('chatbot-btn');
    const chatbotModal = document.getElementById('chatbot-modal');
    const closeChatbot = document.getElementById('close-chatbot');

    chatbotBtn.addEventListener('click', () => {
        chatbotModal.style.display = 'block';
    });

    closeChatbot.addEventListener('click', () => {
        chatbotModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === chatbotModal) {
            chatbotModal.style.display = 'none';
        }
    });
});
