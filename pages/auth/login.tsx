import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import React, { ReactElement, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import GuestLayout from '@/components/layout/GuestLayout'
import ALink from '@/components/shared/ALink'
import { SubmitHandler, useForm } from 'hooks/useForm'
import { Form, TextBox } from '@/components/shared/form'
import Icons from '@/assets/icons'

interface IFormInput {
  email: string
  password: string
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['auth'])),
    },
  }
}

export default function LoginPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    // eslint-disable-next-line no-console
    console.log(data)
    router.push('/')
  }

  const handlePassword = () => {
    setShowPassword(!showPassword)
  }
  const { t } = useTranslation('auth')
  const year = new Date().getFullYear()
  // eslint-disable-next-line no-console
  console.log(props)

  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-6 col-sm-12">
            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="card">
                <div className="card-body p-4">
                  {/* <img className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="logo" width={72} height={57} /> */}
                  <h1 className="h4 fw-normal text-center mt-2 mb-5">
                    {t('Sign In')}
                  </h1>
                  <div className="form-floating mb-3">
                    <TextBox
                      type="email"
                      name="email"
                      id="floatingInput"
                      placeholder="name@example.com"
                      register={register}
                      error={errors?.email}
                      validation={{
                        required: {
                          value: true,
                          message: 'You must enter your Email',
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: 'You must enter a valid Email',
                        },
                      }}
                    />
                    <label htmlFor="floatingInput">{t('Email ID')}</label>
                  </div>

                  <div className="input-group mb-3">
                    <div className="form-floating flex-grow-1">
                      <TextBox
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        id="floatingPassword"
                        hideError={true}
                        placeholder={t('Password')}
                        register={register}
                        error={errors?.password}
                        validation={{
                          required: {
                            value: true,
                            message: 'You must enter your Password',
                          },
                          minLength: {
                            value: 8,
                            message: 'Minimum 8 characters long',
                          },
                        }}
                      />
                      <label htmlFor="floatingPassword">{t('Password')}</label>
                    </div>
                    <span className="input-group-text">
                      <a role="button" onClick={handlePassword}>
                        <Icons name="eye" size={20} />
                      </a>
                    </span>
                    {errors?.password && errors?.password?.message && (
                      <div className="invalid-feedback error d-block">
                        {errors?.password?.message}
                      </div>
                    )}
                  </div>

                  <div className="form-check mb-3 mt-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      {t('Remember me')}
                    </label>
                    <ALink href="/auth/forgot-password" className="float-end">
                      {t('Forgot Password')}?
                    </ALink>
                  </div>
                  <button
                    className="w-100 btn btn-lg btn-primary"
                    type="submit"
                  >
                    {t('Sign In')}
                  </button>
                  <p className="mt-5 mb-3 text-muted">
                    &copy; {year}{' '}
                    <a href="https://www.cruzersoftwares.com" target="_blank">
                      CruzerSoftwares
                    </a>
                  </p>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  const { t } = useTranslation('auth')
  return <GuestLayout title={t('Sign In')}>{page}</GuestLayout>
}
