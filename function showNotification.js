function showNotification(message, isSuccess) {
    const notification = document.getElementById('notification');
    notification.innerText = message;
    notification.className = `notification ${isSuccess ? 'success' : 'error'}`;
    notification.style.display = 'block';
}
