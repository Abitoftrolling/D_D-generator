
const generateMonsterButton = document.getElementById("generateMonsterButton");
const monsterNameDisplay = document.getElementById("monsterName");

generateMonsterButton.addEventListener("click", generateMonsterName);

async function generateMonsterName() {
    try {
        const response = await fetch("https://www.dnd5eapi.co/api/monsters");
        const data = await response.json();
        const monsters = data.results;
        const randomMonsterIndex = Math.floor(Math.random() * monsters.length);
        const monsterName = monsters[randomMonsterIndex].name;
        monsterNameDisplay.textContent = ` Monster Name: ${monsterName}`;
    } catch (error) {
        console.error("Error generating monster name:", error);
    }
}
