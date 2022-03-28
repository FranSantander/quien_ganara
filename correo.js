const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "chileinfoclub@gmail.com",
    pass: "2022@infoclub",
  },
});

const send = async (ganador, correos, premio) => {
  let mailOptions = {
    from: "chileinfoclub@gmail.com",
    to: ["naturatiendacopiapo@gmail.com"].concat(correos),
    subjetc: `¡${ganador.nombre} ha ganado`,
    html: `<h3> Anuncio: El ganador de ¿Quién ganará? fue ${ganador.nombre} y ha ganado: ${premio}. <br/> Gracias a todos por participar!</h3>`,
  };
  try {
    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (e) {
    throw e;
  }
};

//send({nombre: "Ganador de prueba"}, [], "Premio de prueba ") //Prueba de si funciona o no el envio de correos

module.exports = { send };
