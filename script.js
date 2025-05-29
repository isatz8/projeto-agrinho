function calcular() {
    let altura = parseFloat(document.getElementById("altura").value);
    let largura = parseFloat(document.getElementById("largura").value);
    let planta = document.getElementById("planta").value;
    let espacos = {
      milho: 0.4 * 0.4,
      alface: 0.3 * 0.3,
      tomate: 0.5 * 0.5,
      cenoura: 0.1 * 0.1
    };

    let areaTerreno = altura * largura;
    let areaPorPlanta = espacos[planta];
    let quantidade = Math.floor(areaTerreno / areaPorPlanta);
    document.getElementById("resultado").textContent =
      `Compre ${quantidade} sementes de ${planta}.`;
  }