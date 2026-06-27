function dividir(a, b) {
  if (b === 0) {
    // Bug intencionado para que Sonar lo detecte
    throw new Error("División por cero") 
  }
  
  return a / b
}

module.exports = { dividir }
