const chatContainer = document.querySelector(".chat");
const loadingBox = document.querySelector(".loading-box");

const ajax = (url) => {
    loadingBox.textContent = "Loading...";

    if (!url) {
        throw new Error('Invalid request URL: ' + url);
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    const renderChat = (messages) => {
        if (!Array.isArray(messages)) return;

        const chatContent = messages.map(message => `
            <div class="chat-item">
                <img src="../images/user_icon.png" alt="User icon" class="user-icon">
                <div class="chat-message">
                    <div class="chat-user-name">${message.email}</div>
                    <div class="chat-text">${message.body}</div>
                </div>
            </div>
        `).join("");

        chatContainer.insertAdjacentHTML('beforeend', chatContent);
    };

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            renderChat(JSON.parse(xhr.responseText));
            loadingBox.textContent = "";
        }
    };
};

ajax('https://jsonplaceholder.typicode.com/comments')