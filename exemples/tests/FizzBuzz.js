class FizzBuzz {

  calcul() {
    let tab = [];

    let regle3 = new RegleMultipleDe3();
    let regle5 = new RegleMultipleDe5();
    let regle15 = new RegleMultipleDe15();

    

    for (let i = 0; i <= 100; i++) {

      let val = i;

      if (regle15.estVraiPour(i))
        val = regle15.valeurSiVrai();
      else if (regle3.estVraiPour(i))
        val = regle3.valeurSiVrai();
      else if (regle5.estVraiPour(i))
        val = regle5.valeurSiVrai();

      tab.push(val);
    }

    console.log(tab);

    return tab;
  }

  estUnMultiple(val, multiple) {
    return val % multiple === 0;
  }
}
