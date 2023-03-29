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
    }
  
    // Preguntar al usuario si desea continuar ingresando 
    continuar = confirm('¿Desea ingresar otro desperdicio?');
  }
  
    // Calcular el impacto ambiental total sumando el impacto ambiental de cada basura
    //   let impactoAmbientalTotal = 0;
    //   for (let i = 0; i < basuras.length; i++) {
    //     // Buscar el nivel de impacto correspondiente al tipo de basura
    //     const nivelImpacto = sdfbsfbsjfd nsj f aaaaaaaaaaaa
    //   }
  
    // Buscar la descripción correspondiente al nivel de impacto total calculado
  
  
    // Mostrar el resultado al usuario
    console.log('El impacto ambiental total generado por las basuras ingresadas es de ${impactoAmbientalTotal} puntos. Esto corresponde a un nivel de impacto ${descripcionImpacto}');
    // Mostrar dónde debe arrojarse cada desperdicio
    console.log('Sus desperdicios deben descartarse de la siguiente manera: ${}');