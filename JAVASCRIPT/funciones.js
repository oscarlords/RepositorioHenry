function Longitud(Palabra1,Palabra2) {
    if (typeof Palabra1 === 'string' || typeof Palabra2 === 'string' || Palabra1.length === Palabra2.length) {
      console.log ("Tienen la misma longitud");
    } else {
      console.log ("No tienen la misma longitud");
    }
  }
  Longitud('Maria', 'Lina');