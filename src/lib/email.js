import nodemailer from "nodemailer"

// Replace with your SMTP credentials
const smtpOptions = {
	service: "Gmail",
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: "sokol.autos@gmail.com" || "user",
		pass: "tlqn iyud vsjg lwcj" || "password",
	},
}

export const sendEmail = async (data) => {
	const transporter = nodemailer.createTransport({
		...smtpOptions,
	})

	return await transporter.sendMail({
		from: "test@test2.net",
		...data,
	})
}
