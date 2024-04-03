let usuariosRegistrados = [];

function registrarUsuario() {
  usuariosRegistrados.push({
    nombre: prompt("Ingrese su nombre de usuario").toUpperCase(),
    contraseña: prompt("Ingrese su contraseña"),
    saldo: 300,
    inversiones: "",
  });

  alert("Usuario registrado correctamente. ¡Bienvenido!");

}

function iniciarSesion() {
  let nombreUsuario = prompt("Nombre de usuario").toUpperCase();
  let contraseñaUsuario = prompt("Contraseña");

  // Verificar si las credenciales coinciden con algún usuario registrado
  let usuarioEncontrado = usuariosRegistrados.find(
    (u) => u.nombre === nombreUsuario && u.contraseña === contraseñaUsuario
  );

  if (usuarioEncontrado) {
    alert(
      `Bienvenido ${usuarioEncontrado.nombre}. Su saldo actual es: ${usuarioEncontrado.saldo}`
    );

    // Continuar con el flujo de inversión y consulta de inversiones
    invertirSaldo(usuarioEncontrado);
    consultarSaldosEInversiones(usuarioEncontrado);

  } else { 
    alert("Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.");

  }

}

function invertirSaldo(usuario) {

  let invertir = prompt(
    "Desea hacer una inversión? (Responder si/no)").toUpperCase();
  let plazoDeInversion;
  let cantidadDeInversion;

  if (invertir === "SI") {
    cantidadDeInversion = parseFloat(prompt("¿Qué cantidad desea invertir?"));

    if (cantidadDeInversion < usuario.saldo) {
      plazoDeInversion = parseInt(prompt("¿A qué plazo le gustaría invertir? 3, 6 u 12 meses?"));

      switch (plazoDeInversion) {
        case 3:
          alert(
            `Su rendimiento en plazo de 3 meses sería: ${cantidadDeInversion * 0.09}`
          );
          alert(
            `El total de la inversión al final del plazo sería: ${cantidadDeInversion * 1.11}`
          );

          usuario.saldo -= cantidadDeInversion;
          usuario.inversiones = `El saldo invertido a plazo de 3 meses es: ${cantidadDeInversion}`;
          break;

        case 6:
          alert(
            `Su rendimiento en plazo de 6 meses sería: ${ cantidadDeInversion * 0.13 }`
          );
          alert(
            `El total de la inversión al final del plazo sería: ${cantidadDeInversion * 1.13 }`
          );

          usuario.saldo -= cantidadDeInversion;
          usuario.inversiones = `El saldo invertido a plazo de 6 meses es: ${cantidadDeInversion}`;
          break;

        case 12:
          alert(
            `Su rendimiento en plazo de 12 meses sería: ${ cantidadDeInversion * 0.15 }`
          );
          alert(
            `El total de la inversión al final del plazo sería: ${cantidadDeInversion * 1.15 }`
          );

          usuario.saldo -= cantidadDeInversion;
          usuario.inversiones = `El saldo invertido a plazo de 12 meses es: ${cantidadDeInversion}`;
          break;
        default:
          alert("El plazo es incorrecto. Por favor, vuelva a intentarlo.");
          break;
      }

      let aceptarInversion = prompt(
        "¿Desea proceder con la inversión? (responder 'si' o 'no')").toUpperCase();
      if (aceptarInversion === "SI") {
        alert("Ha realizado su inversión correctamente.");

      } else {
        alert("Inversión cancelada.");
      }

    } else {
      alert("Su saldo no es suficiente para la inversión que desea realizar.");
    }

  } else {
    alert("Gracias por visitarnos.");
  }
}

function consultarSaldosEInversiones(usuario) {
  let consultarInversiones = prompt('¿Desea consultar sus inversiones? (responda "si" o "no")').toUpperCase();
  if (consultarInversiones === "SI") {
    console.log(usuario);
  } else {
    alert("Gracias, vuelva pronto.");
  }
}

registrarUsuario();
iniciarSesion();
