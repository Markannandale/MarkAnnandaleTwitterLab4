const emojibtn = document.querySelector('#emojibtn');
const emojimodalbody = document.querySelector('#emojimodalbody')
const textarea = document.querySelector('#textarea');
const searchEmoji = document.querySelector('#searchEmoji');
const emojiCategories = document.querySelector('#emojiCategories');

let emojis = [];

async function browseGifs() {
    const response = await fetch('https://unpkg.com/emoji.json@12.1.0/emoji.json');
    const data = await response.json();
    emojis = data;
    emojimodalbody.innerHTML = emojis.map((emoji, idx) => `<div class="emoji" data-index="${idx}">${emoji.char}</div>`).join('');
}

function insertEmojis(e) {
    if (!e.target.matches(".emoji")){
        return
    }
    const index = e.target.dataset.index;
    textarea.innerHTML = `${emojis[index].char}`;
}

function searchEmojis () {
    const result = emojis.filter(emoji => emoji.name.includes(searchEmoji.value));
    emojimodalbody.innerHTML = result.map((emoji, idx) => `<div class="emoji" data-index="${idx}">${emoji.char}</div>`).join('');
}

emojimodalbody.addEventListener('click', insertEmojis);
emojibtn.addEventListener('click', browseGifs);
searchEmoji.addEventListener('keyup', searchEmojis);