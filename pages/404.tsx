import { GetStaticProps /* , InferGetStaticPropsType */ } from 'next'
import React, { ReactElement } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Error404 from '@/assets/img/404-error.svg'
import GuestLayout from '@/components/layout/GuestLayout'
import Image from '@/components/shared/Image'
import Copyright from '@/components/layout/Copyright'
import ALink from '@/components/shared/ALink'
import ReactIcon from '@/hoc/ReactIcon'
import { MdDashboard, MdOutlineLogin } from '@/components/shared/Icons'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default function Custom404() {
  // props: InferGetStaticPropsType<typeof getStaticProps>
  // const router = useRouter()

  const { t } = useTranslation('common')
  const year = new Date().getFullYear()
  // eslint-disable-next-line no-console
  // console.log(props)

  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <div className="card">
              <div className="card-body p-4">
                <h1 className="h4 fw-normal text-center mt-2 mb-0">
                  {t('404 - Page Not Found')}
                </h1>

                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 text-center">
                      <Image
                        src={Error404.src}
                        unoptimized={true}
                        width={Error404.width}
                        height={Error404.height}
                        priority={true}
                      />
                      <p>{t('The page you are looking for is not avaible!')}</p>
                      <ALink href="/" className="btn btn-primary mx-2">
                        <ReactIcon icon={<MdDashboard size="16" />} />
                        {t('Go to Dashboard')}
                      </ALink>
                      <ALink
                        href="/auth/login"
                        className="btn btn-primary mx-2"
                      >
                        <ReactIcon icon={<MdOutlineLogin size="16" />} />
                        {t('Go to Log In')}
                      </ALink>
                    </div>
                  </div>
                </div>

                <p className="mt-5 mb-3 text-muted">
                  &copy; {year} <Copyright />
                </p>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  )
}

Custom404.getLayout = function getLayout(page: ReactElement) {
  const { t } = useTranslation('common')
  return <GuestLayout title={t('404 - Page Not Found')}>{page}</GuestLayout>
}
