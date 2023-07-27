function calcularBhaskara() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
  
    const delta = b * b - 4 * a * c;
  
    if (delta < 0) {
      document.getElementById("resultado").innerText = "Delta é negativo, não há solução real.";
    } else {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
  
      document.getElementById("resultado").innerText = `As raízes são x1 = ${x1.toFixed(2)} e x2 = ${x2.toFixed(2)}.`;
    }
  }
  