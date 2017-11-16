class FizzBuzz {

  calcul() {
    let tab = [];

    let regle3 = new RegleMultipleDe3();
    let regle5 = new RegleMultipleDe5();
    let regle15 = new RegleMultipleDe15();

    let regles = [regle3, regle5, regle15];

    for (let i = 0; i <= 100; i++) {
      let val = i;

      regles.forEach(regle => {
        if (regle.estVraiPour(i))
          val = regle.valeurSiVrai();
      });

      tab.push(val);
    }

    console.log(tab);
    return tab;
  }

  estUnMultiple(val, multiple) {
    return val % multiple === 0;
  }
}
