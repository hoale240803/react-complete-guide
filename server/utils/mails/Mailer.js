const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lehoa08121998@gmail.com",
    pass: "HoaL9998",
  },
});

const sendDefaultMail = () => {
  try {
    transporter
      .sendMail({
        from: "lehoa08121998@gmail.com", // sender address
        to: "hoale240803@gmail.com, trungleo080999@gmail.com,hoale@yopmail.com", // list of receivers
        subject: " 💟  Medium HoaL 💟 ", // Subject line
        text: "There is a new article. It's about sending emails, check it out!", // plain text body
        headers:
          '<meta name="viewport" content="width=device-width, initial-scale=1">' +
          '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">',
        html:
          "<b> 🍓  There is a new article. It's about sending emails, check it out! 🍓 </b> <hr>" +
          "<a href='https://www.w3schools.com'>Visit W3Schools.com!</a> <br> <br><br>" +
          "<img src='https://images.pexels.com/photos/4194613/pexels-photo-4194613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Girl in a jacket' width='500' height='600'/> <hr> <br>" +
          "<b class='icons'> 💘 Very awesome guy, <strong>FOLLOW ME! :</strong> if you want! 💘 </b>  " +
          '<a href="#" class="fa fa-facebook" class="basdf"></a>' +
          '<a href="#" class="fa fa-twitter"></a>' +
          '<a href="#" class="fa fa-pinterest"></a>' +
          '<a href="#" class="fa fa-linkedin"></a>' +
          '<a href="#" class="fa fa-instagram"></a>' +
          '<a href="#" class="fa fa-youtube"></a>' +
          '<a href="#" class="fa fa-google"></a>',
      })
      .then((info) => {
        console.log({ info });
      })
      .catch(console.error);
  } catch (error) {
    console.log("Send mail error::", error);
  }
};

module.exports = {
  sendDefaultMail,
};
