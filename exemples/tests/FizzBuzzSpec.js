chai.should();

describe("Décrit le jeu du FizzBuzz", () => {
  let result

  beforeEach(() => {
    let myFizzBuzz;
    myFizzBuzz = new FizzBuzz();
    result = myFizzBuzz.calcul();
  });

  it("Générer un tableau de 0 à 100", () =>
    result.length.should.equal(101));

  it("doit avoir la valeur 2 à la position 2", () =>
    result[2].should.equal(2));

  it("doit afficher Fizz pour les multiples de 3 (valeur 3)", () =>
    result[3].should.equal("Fizz"));

  it("doit afficher Buzz pour les multiples de 5 (valeur 5)", () =>
    result[5].should.equal("Buzz"));

  it("doit afficher FizzBuzz pour les multiples de 3 et 5 (valeur 15)", () =>
    result[15].should.equal("FizzBuzz"));
});
