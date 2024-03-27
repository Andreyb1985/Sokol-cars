'use client'
import React from 'react';
import { ArrRight } from '../icons';
import { Form, Formik } from 'formik'
import s from './QuestionAUS.module.css';
import { validationScheme } from './validationScheme'
import Input from '@/components/ui/Input'
import PhoneInput from '@/components/ui/PhoneInput'
import Button from '@/components/ui/Button'
import Textarea from '@/components/ui/Textarea'
import { handler } from '@/app/actions';

const defaultValues = {
	name: '',
	// lastName: '',
	phoneNumber: '',
	email: '',
	// message: '',
}

const Questions = () => {

	const onSubmit = (values) => {
		console.log("DEBUG values", values);
		handler(values);
	}

	return (
		<div className={s.container}>
			<div className={s.content}>
				<h2 className={s.questionsTitle}>Остались вопросы?</h2>
				<p className={s.questionsDesc}>Если у вас остались вопросы, заполните форму и наши
					специалисты в ближайшее время свяжутся с вами</p>
				<Formik
					validateOnChange={false}
					validateOnBlur={false}
					initialValues={defaultValues}
					onSubmit={(values, formikHelpers) => {
						onSubmit(values)
						formikHelpers.resetForm()
					}}
					validationSchema={validationScheme}
				>
					{({ values, setFieldValue, setFieldError, touched, errors, isSubmitting, dirty }) => {
						return (
							<Form
								className={s.form}
							>
								<div className={s.questionsForm}>
									<div className={s.inputWrapper}>
										<Input
											value={values.name}
											onChange={e => setFieldValue('name', e.target.value)}
											name='name'
											placeholder='Имя'
											error={errors.name}
											maxLength={255}
											className={s.name}
										/>
									</div>
									<div className={s.inputWrapper}>
										<PhoneInput
											name="phoneNumber"
											onChange={(value) => {
												setFieldValue('phoneNumber', value)
												setFieldError('phoneNumber', undefined)
											}}
											placeholder='Ваш телефон'
											data-test="phoneNumber"
											value={values.phoneNumber}
											error={touched?.phoneNumber ? errors?.phoneNumber : undefined}
											className={s.tel}
										/>
									</div>
									<div className={s.inputWrapper}>
										<Input
											value={values.email}
											onChange={e => setFieldValue('email', e.target.value)}
											name="email"
											placeholder='email'
											error={errors.email}
											className={s.email}
										/>
									</div>
									<div className={s.inputWrapper}>
										<Textarea
								value={values.message}
								onChange={e => setFieldValue('message', e.target.value)}
								name="message"
								placeholder='message'
								maxLength={500}
								error={errors.message}
								  />
									</div>
								</div>


								{/*<Input*/}
								{/*  value={values.lastName}*/}
								{/*  onChange={e => setFieldValue('lastName', e.target.value)}*/}
								{/*  name='last-name'*/}
								{/*  placeholder='last-name'*/}
								{/*  error={errors.lastName}*/}
								{/*  maxLength={255}*/}
								{/*/>*/}


								{/*<Textarea*/}
								{/*  value={values.message}*/}
								{/*  onChange={e => setFieldValue('message', e.target.value)}*/}
								{/*  name="message"*/}
								{/*  placeholder='message'*/}
								{/*  maxLength={500}*/}
								{/*  error={errors.message}*/}
								{/*/>*/}

								<Button
									disabled={!dirty || isSubmitting}
									// className={styles.button}
									type="submit"
									className={s.btn}>
									Oтправить запрос
									<ArrRight className={s.arr}
									/>
								</Button>
							</Form>
						)
					}}
				</Formik>

				{/* <button type="submit" className={s.btn}>Oтправить запрос <ArrRight className={s.arr}/></button>
				 {/*</form>*/}

			</div>
		</div>
	)
};

export default Questions;
