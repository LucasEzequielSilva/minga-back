import User from "../../models/User.js"
import nodemailer from 'nodemailer'

let reSend = async (req, res, next) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS,
        }
    })
    let user = await User.findOne(
        { email: req.body.email},
        "verify_code name last_name photo"
    )

    try {
        if (user) {
            const mailOptions = {
                from: 'minga46blueteam@gmail.com',
                to: req.body.email,
                subject: 'Hello, I am glad you have chosen this community, are you ready to be part of MINGA?',
                html:
                    `
    <html>
            <head>
                <title></title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
            </head>
            <body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
                <table width="600" border="0" cellpadding="0" cellspacing="0" align="center"
                    style="font-family: 'Roboto', sans-serif;">
                    <!-- header -->
            <tr>
                <td style="text-align: center;">
                    <figure style="padding: 20px; border-bottom: 1px solid #4338CA;">
                        <img src="https://raw.githubusercontent.com/cartolanofacundo/minga_azul_front/dev/src/assets/images/logo_footer.png"
                            alt="">
                    </figure>
                </td>
            </tr>
            <tr>
                <td style="padding:0 40px;">
                    <img width="600"
                        src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/05/Manga-de-Naruto-recibira-una-reedicion-especial-por-Panini.jpg"
                        alt="">
                </td>
            </tr>
            <tr>
                <td height="20"></td>
            </tr>
            <tr>
                <td>
                    <p style="font-weight: 300; color: #4338CA; text-align: center;">Hello, ${user.name}</p>
                </td>
            </tr>
            <tr>
                <td height="20"></td>
            </tr>
            <tr>
                <td style="font-size: 14px; font-weight: 500; text-align: center;">To enjoy the content of minga please
                    verify your email</td>
            </tr>
            <tr>
                <td height="20"></td>
            </tr>
            <tr>
                <td>
                    <table width="400" border="0" cellpadding="0" cellspacing="0" align="center"
                        style="font-family: 'Roboto', sans-serif;">
                        <tr>
                            <td
                                style="height: 60px; background-color: #9D9D9D; border: 1px solid #000; font-size: 24px; text-align: center; color: #fff;">
                                ${user.verify_code}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td height="20"></td>
            </tr>
            <tr>
                <td style="text-align: center;">
                    <a style="border:0; outline:0; text-decoration:none; padding: 10px; background-color: #4338CA; border-radius: 20px; color: #fff;"
                        target="_blank" href="http://localhost:5173/verify">
                        Verify Email
                    </a>
                </td>
            </tr>
            <tr>
                <td height="20"></td>
            </tr>
            </table>
        </body>
    </html>
    `
            }
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error)
                } else {
                    console.log("send email:", info.response)
                }
            })
            return res.status(200).json({
                success: true,
                message: "email reSend"
            })
        }

    } catch (error) {
        res.status(400).json({
            succes: false,
            message: "error"
        })
    }
}
export default reSend