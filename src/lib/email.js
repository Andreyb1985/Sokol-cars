import nodemailer from "nodemailer"

const requiredEnv = (name) => {
	const value = process.env[name]

	if (!value) {
		throw new Error(`Missing required environment variable: ${name}`)
	}

	return value
}

export const sendEmail = async (data) => {
	const smtpOptions = {
		host: process.env.SMTP_HOST || "smtp.gmail.com",
		port: Number(process.env.SMTP_PORT || 465),
		secure: true,
		auth: {
			user: requiredEnv("SMTP_USER"),
			pass: requiredEnv("SMTP_PASSWORD"),
		},
	}
	const transporter = nodemailer.createTransport({
		...smtpOptions,
	})

	return await transporter.sendMail({
		from: process.env.SMTP_FROM || smtpOptions.auth.user,
		...data,
	})
}
