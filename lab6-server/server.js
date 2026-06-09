require('dotenv').config();
const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const nodemailer = require('nodemailer'); // Додали nodemailer

const init = async () => {
    const server = Hapi.server({ port: 3000, host: 'localhost' });
    await server.register(Inert);

    // Налаштування транспортера (SMTP)
    const transporter = nodemailer.createTransport({
        host: 'smtp-relay.brevo.com', // Для Brevo
        port: 587,
        auth: {
            user: process.env.SMTP_USER, // Твій логін
            pass: process.env.SMTP_PASS  // Твій пароль/ключ
        }
    });

    server.route({
        method: 'POST',
        path: '/api/contact',
        handler: async (request, h) => {
            const { name, email, message } = request.payload;
            
            try {
                await transporter.sendMail({
                    from: process.env.SENDER_EMAIL,
                    to: process.env.RECEIVER_EMAIL, // Краще винести в .env
                    subject: "Нове повідомлення з сайту",
                    text: `Ім'я: ${name}, Email: ${email}, Повідомлення: ${message}`
                });
                return { success: true };
            } catch (err) {
                console.error(err); // Щоб бачити помилки в консолі
                return h.response({ error: err.message }).code(500);
            }
        }
    });

    server.route({ method: 'GET', path: '/{param*}', handler: { directory: { path: 'public', index: ['index.html'] } } });

    await server.start();
    console.log('Сервер працює на %s', server.info.uri);
};
init();