import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import GuestLayout from '@/components/layout/GuestLayout'
import ALink from '@/components/shared/ALink'
import { SubmitHandler, useForm } from 'hooks/useForm'
import { Form, TextBox } from '@/components/shared/form'

interface IFormInput {
  email: string
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['auth'])),
    },
  }
}

export default function ForgotPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
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
                    {t('Forgot Password')}
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

                  <div className="mb-3 mt-3">
                    <ALink href="/auth/login">
                      {t('Already have an account? Login here.')}
                    </ALink>
                  </div>
                  <button
                    className="w-100 btn btn-lg btn-primary"
                    type="submit"
                  >
                    {t('Submit')}
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

ForgotPage.getLayout = function getLayout(page: ReactElement) {
  const { t } = useTranslation('auth')
  return <GuestLayout title={t('Forgot Password')}>{page}</GuestLayout>
}
