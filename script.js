document.addEventListener('DOMContentLoaded', () => {
    const cardOptions = document.querySelectorAll('.card-option');
    const sendBtn = document.getElementById('sendBtn');
    const successOverlay = document.getElementById('successOverlay');
    const closeBtn = document.getElementById('closeBtn');
    const recipientInput = document.getElementById('recipient');
    const messageInput = document.getElementById('message');

    let selectedType = 'zen';

    // Card Selection
    cardOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove active class from all
            cardOptions.forEach(opt => opt.classList.remove('active'));
            // Add to selected
            option.classList.add('active');
            selectedType = option.dataset.type;
            
            // Subtle feedback: pulse the button with the theme color
            const colors = {
                zen: '#a8e6cf',
                ocean: '#81ecec',
                forest: '#55efc4',
                nebula: '#a29bfe'
            };
            sendBtn.style.boxShadow = `0 10px 20px ${colors[selectedType]}44`;
        });
    });

    // Send Logic
    sendBtn.addEventListener('click', () => {
        if (!recipientInput.value || !messageInput.value) {
            alert('Please fill in both fields to send some calm.');
            return;
        }

        // Simulate sending
        sendBtn.disabled = true;
        sendBtn.innerHTML = '<span class="btn-text">Sending Peace...</span>';
        
        setTimeout(() => {
            successOverlay.classList.remove('hidden');
            // Reset form
            recipientInput.value = '';
            messageInput.value = '';
            sendBtn.disabled = false;
            sendBtn.innerHTML = '<span class="btn-text">Send Calm</span>';
        }, 1500);
    });

    // Close Overlay
    closeBtn.addEventListener('click', () => {
        successOverlay.classList.add('hidden');
    });
});
