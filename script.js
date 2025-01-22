const nameInput = document.getElementById('nameInput');
const nameList = document.getElementById('nameList');
const result = document.getElementById('result');
let names = [];

function addName() {
    const name = nameInput.value.trim();

    if (name === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    names.push(name);
    const listItem = document.createElement('li');
    listItem.textContent = name;
    nameList.appendChild(listItem);
    nameInput.value = "";
}

// Adiciona o evento de tecla "Enter"
nameInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        addName();
    }
});

function drawName() {
    if (names.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * names.length);
    const winner = names[randomIndex];
    result.textContent = `🎉 O amigo secreto é: ${winner} 🎉`;
}
