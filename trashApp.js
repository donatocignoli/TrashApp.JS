// Niveles de impacto
const nivelesImpacto = [
    {
      nivel: 1,
      descripcion: 'Bajo impacto ambiental'
    },
    {
      nivel: 2,
      descripcion: 'Impacto ambiental moderado'
    },
    {
      nivel: 3,
      descripcion: 'Alto impacto ambiental'
    }
  ];
  
  // Tipos de basura y nivel de impacto
  const tiposBasura = [
    {
        tipo: 'Basura orgánica',
        nivelImpacto: 1
    },
    {
        tipo: 'Papel y cartón',
        nivelImpacto: 2
    },
    {
        tipo: 'Vidrio',
        nivelImpacto: 3
    },
    {
        tipo: 'Plásticos',
        nivelImpacto: 3
    },
    {
        tipo: 'Basura electrónica',
        nivelImpacto: 2
    },
    {
        tipo: 'Otros',
        nivelImpacto: 3
      }
  ];
  
// Inicializar variables
    let continuar = true;
    let basuras = [];
  
// Ciclo para pedir al usuario los tipos y cantidades de basura
  while (continuar) {
    const tipoBasura = prompt('Ingrese el tipo de basura (Basura orgánica, Papel y cartón, Vidrio, Plásticos, Basura electrónica, No reciclable u Otros):');
    const cantidadBasura = parseInt(prompt('Ingrese la cantidad de basura (en kilogramos):'));
  
    // Verificar si la basura es reciclable o no
    if (tipoBasura.toLowerCase() === 'no reciclable') {
      alert('Esta basura no es reciclable y debe ser tratada de manera especial para reducir su impacto ambiental.');
    } else {
      // Agregar la basura ingresada al arreglo de basuras
      basuras.push({ tipo: tipoBasura, cantidad: cantidadBasura });
        
     // Calcular el impacto ambiental de la basura ingresada y actualizar el impacto ambiental total
     for (let i = 0; i < tiposBasura.length; i++) {
      if (tiposBasura[i].tipo.toLowerCase() === tipoBasura.toLowerCase()) {
        impactoBasura[i] += cantidadBasura * tiposBasura[i].nivelImpacto;
        break;
      }
    }
  }

    // Preguntar al usuario si desea continuar ingresando 
    continuar = confirm('¿Desea ingresar otro desperdicio?');
  }
    // Calcular el impacto ambiental total sumando el impacto ambiental de cada tipo de basura
    let impactoAmbientalTotal = 0;
    for (let i = 0; i < impactoBasura.length; i++) {
      impactoAmbientalTotal += impactoBasura[i];
}
  
// Buscar la descripción correspondiente al nivel de impacto total calculado
    // let descripcionImpacto = '';
    // for (let i = 0; i < nivelesImpacto.length; i++) {
    //   if (impactoAmbientalTotal <= i + 1) {
    //     descripcionImpact
  
    // Mostrar el resultado al usuario
    console.log(`El impacto ambiental total generado por las basuras ingresadas es de ${impactoAmbientalTotal} puntos. Esto corresponde a un nivel de impacto ${descripcionImpacto}`);
    // Mostrar dónde debe arrojarse cada desperdicio
    // console.log(`Sus desperdicios deben descartarse de la siguiente manera: ${}`);