function fillForm() {
  const heroineNameInput = document.getElementById('heroine-name-input');
  const heroineName = heroineNameInput.value;

  const doingAroundTownInput = document.getElementById('doing-around-town-input');
  const doingAroundTown = doingAroundTownInput.value;

  const nounThatDidItInput = document.getElementById('noun-that-did-it-input');
  const nounThatDidIt = nounThatDidItInput.value;

  const whereItCameFromInput = document.getElementById('where-it-came-from-input');
  const whereItCameFrom = whereItCameFromInput.value;

  const whatSheHadInput = document.getElementById('what-she-had-input');
  const whatSheHad = whatSheHadInput.value;

  const nameSpan = document.getElementById('heroine-name');
  nameSpan.textContent = heroineName;

  const doingAroundTownSpan = document.getElementById('doing-around-town');
  doingAroundTownSpan.textContent = doingAroundTown;

  const nounThatDidItSpan = document.getElementById('noun-that-did-it');
  nounThatDidItSpan.textContent = nounThatDidIt;

  const whereItCameFromSpan = document.getElementById('where-it-came-from');
  whereItCameFromSpan.textContent = whereItCameFrom;

  const whatSheHadSpan = document.getElementById('what-she-had');
  whatSheHadSpan.textContent = whatSheHad;

  const hiddenParagraph = document.getElementById('text');
  hiddenParagraph.classList.remove('hidden');
}