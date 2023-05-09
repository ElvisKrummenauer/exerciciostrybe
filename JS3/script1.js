// criar uma function q calcula a area de um circulo
const calculodaarea = (diametro) => {
  let raio = 0;
  let area = 0;
  let PI = 3.14;
  if (typeof diametro !== 'number') {
    return 'O diametro tem que ser um numero'
  }
  raio = diametro / 2  
  area = PI *(raio ** 2);
  return `${area}`
}
console.log(calculodaarea(50))