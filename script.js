function navigateTo(section) {
    switch (section) {
        case 'home':
            window.location.href = 'index.html';
            break;
        case 'discord':
            window.open('https://www.discord.com/', '_blank');
            break;
        case 'about':
            window.location.href = 'about/index.html';
            break;
        case 'projects':
            window.location.href = 'projects/index.html';
            break;
        case 'contact':
            window.location.href = '';
            break;
        case 'github':
            window.open('https://github.com/bandibandus10sys/', '_blank');
            break;
        default:
            console.log('Invalid section');
    }
}
