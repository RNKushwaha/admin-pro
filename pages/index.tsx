import { GetStaticProps, InferGetStaticPropsType } from 'next'
import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from '@/components/layout'
import LineChart from '@/components/shared/charts/LineChart'
import BarChart from '@/components/shared/charts/BarChart'
import PieChart from '@/components/shared/charts/PieChart'
import DoughnutChart from '@/components/shared/charts/DoughnutChart'
import BubbleChart from '@/components/shared/charts/BubbleChart'
import ReactIcon from '@/hoc/ReactIcon'
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md'
import { Body, Card } from '@/components/shared/cards'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'menu'])),
    },
  }
}

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  // eslint-disable-next-line no-console
  console.log(props)

  return (
    <>
      <div className="row">
        <div className="col-md-6 col-xl-3 mb-3">
          <Card>
            <Body>
              <div className="float-end mt-2">chart</div>
              <div>
                <h4 className="mb-1 mt-1">
                  <span>
                    <span>$34,152</span>
                  </span>
                </h4>
                <p className="text-muted mb-0">Total Revenue</p>
              </div>
              <p className="text-muted mt-3 mb-0">
                <span className="text-success me-1">
                  <ReactIcon icon={<MdArrowUpward />} />
                  2.65%
                </span>
                since last week
              </p>
            </Body>
          </Card>
        </div>
        <div className="col-md-6 col-xl-3 mb-3">
          <Card>
            <Body>
              <div className="float-end mt-2">chart</div>
              <div>
                <h4 className="mb-1 mt-1">
                  <span>
                    <span>5,643</span>
                  </span>
                </h4>
                <p className="text-muted mb-0">Jobs</p>
              </div>
              <p className="text-muted mt-3 mb-0">
                <span className="text-danger me-1">
                  <ReactIcon icon={<MdArrowDownward />} />
                  0.82%
                </span>
                since last week
              </p>
            </Body>
          </Card>
        </div>
        <div className="col-md-6 col-xl-3 mb-3">
          <Card>
            <Body>
              <div className="float-end mt-2">chart</div>
              <div>
                <h4 className="mb-1 mt-1">
                  <span>
                    <span>45,254</span>
                  </span>
                </h4>
                <p className="text-muted mb-0">Customers</p>
              </div>
              <p className="text-muted mt-3 mb-0">
                <span className="text-success me-1">
                  <ReactIcon icon={<MdArrowUpward />} />
                  2.65%
                </span>
                since last week
              </p>
            </Body>
          </Card>
        </div>
        <div className="col-md-6 col-xl-3 mb-3">
          <Card>
            <Body>
              <div className="float-end mt-2">chart</div>
              <div>
                <h4 className="mb-1 mt-1">
                  <span>
                    <span>+12.58%</span>
                  </span>
                </h4>
                <p className="text-muted mb-0">Growth</p>
              </div>
              <p className="text-muted mt-3 mb-0">
                <span className="text-success me-1">
                  <ReactIcon icon={<MdArrowUpward />} />
                  2.65%
                </span>
                since last week
              </p>
            </Body>
          </Card>
        </div>
      </div>

      <Card className="mt-3">
        <Body>
          <div className="float-end">
            <button
              className="theme-btn theme-btn-sm mx-2 active"
              role="button"
            >
              Monthly
            </button>
            <button className="theme-btn theme-btn-sm" role="button">
              Yearly
            </button>
          </div>
          <h5 className="card-title">Sales Analytics</h5>
          <LineChart />
          <br />
        </Body>
      </Card>

      <Card className="mt-3">
        <Body>
          <div className="float-end">
            <button
              className="theme-btn theme-btn-sm mx-2 active"
              role="button"
            >
              Monthly
            </button>
            <button className="theme-btn theme-btn-sm" role="button">
              Yearly
            </button>
          </div>
          <h5 className="card-title">Top Jobs</h5>
          <BarChart />
          <br />
        </Body>
      </Card>

      <div className="row">
        <div className="col-md-6 col-xl-3 mb-3">
          <Card className="mt-3">
            <Body>
              <div className="float-end">
                <button
                  className="theme-btn theme-btn-sm mx-2 active"
                  role="button"
                >
                  Monthly
                </button>
                <button className="theme-btn theme-btn-sm" role="button">
                  Yearly
                </button>
              </div>
              <h5 className="card-title">Top Users</h5>
              <PieChart />
              <br />
            </Body>
          </Card>
        </div>
        <div className="col-md-6 col-xl-3 mb-3">
          <Card className="mt-3">
            <Body>
              <div className="float-end">
                <button
                  className="theme-btn theme-btn-sm mx-2 active"
                  role="button"
                >
                  Monthly
                </button>
                <button className="theme-btn theme-btn-sm" role="button">
                  Yearly
                </button>
              </div>
              <h5 className="card-title">Top Company</h5>
              <DoughnutChart />
              <br />
            </Body>
          </Card>
        </div>
      </div>

      <Card className="mt-3">
        <Body>
          <div className="float-end">
            <button
              className="theme-btn theme-btn-sm mx-2 active"
              role="button"
            >
              Monthly
            </button>
            <button className="theme-btn theme-btn-sm" role="button">
              Yearly
            </button>
          </div>
          <h5 className="card-title">Top User Locations</h5>
          <BubbleChart />
          <br />
        </Body>
      </Card>

      <Card className="mt-3">
        <Body>
          <h5 className="card-title">Latest Registrations</h5>
          <div className="table-responsive">
            <table className="table table-bordered table-sm table-hover">
              <thead className="">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Amit Kumar</td>
                  <td>akamit@gmail.com</td>
                  <td>7 March, 2022</td>
                </tr>
                <tr>
                  <td>Sumit Kumar</td>
                  <td>sumit@gmail.com</td>
                  <td>4 March, 2022</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
        </Body>
      </Card>
    </>
  )
}

HomePage.getLayout = function getLayout(page: JSX.Element) {
  const { t } = useTranslation('menu')
  return <Layout title={t('Dashboard')}>{page}</Layout>
}
