function suggestEmoji(event) {
    const inputMessage = document.querySelector('.InputMessage').value;
    const outputDiv = document.querySelector('.output');
    const emojiMap = {
        'happy': '😊',
        'sad': '😢',
        'angry': '😠',
        'love': '❤️',
        'laugh': '😂',
        'surprise': '😲',
        'cool': '😎',
        'thumbs up': '👍',
        'thumbs down': '👎',
        'clap': '👏',
        'party': '🎉',
        'heart': '💗',
        'smile': '😃',
        'cry': '😭',
        'kiss': '😘',
        'wink': '😉',
        'sleep': '😴',
        'money': '💰',
        'fire': '🔥',
        'star': '⭐',
        'sun': '☀️',
        'moon': '🌙',
        'rain': '🌧️',
        'snow': '❄️',
        'thunder': '⚡',
        'rainbow': '🌈',
        'flower': '🌺',
        'tree': '🌳',
        'car': '🚗',
        'plane': '✈️',
        'ship': '🚢',
        'bike': '🚲',
        'food': '🍔',
        'drink': '🍺',
        'music': '🎶',
        'dance': '💃',
        'sports': '⚽',
        'game': '🎮',
        'book': '📚',
        'camera': '📷',
        'phone': '📱',
        'computer': '💻',
        'robot': '🤖',
        'alien': '👽',
        'ghost': '👻',
        'poop': '💩',
        'unicorn': '🦄',
        'cat': '🐱',
        'dog': '🐶',
        'bird': '🐦',
        'fish': '🐟',
        'butterfly': '🦋',
        'bug': '🐛'
    };

    let emojiText = '';
    const words = inputMessage.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (emojiMap[word]) {
            emojiText += emojiMap[word] + ' ';
        } else {
            emojiText += word + ' ';
        }
    }

    outputDiv.textContent = emojiText.trim();
}
  function clearOutput() {
    document.querySelector('.output').textContent = '';
    document.querySelector('.InputMessage').value = '';
  }