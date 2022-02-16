import { GetStaticProps, InferGetStaticPropsType } from 'next'
import React, { ReactElement } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from '@/components/layout'
import LineChart from '@/components/shared/charts/LineChart'
import BarChart from '@/components/shared/charts/BarChart'
import PieChart from '@/components/shared/charts/PieChart'
import DoughnutChart from '@/components/shared/charts/DoughnutChart'
import BubbleChart from '@/components/shared/charts/BubbleChart'
import Icons from '@/assets/icons'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
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
          <div className="card">
            <div className="card-body">
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
                  <Icons name="arrow-up" /> 2.65%
                </span>
                since last week
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-3 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="float-end mt-2">chart</div>
              <div>
                <h4 className="mb-1 mt-1">
                  <span>
                    <span>5,643</span>
                  </span>
                </h4>
                <p className="text-muted mb-0">Orders</p>
              </div>
              <p className="text-muted mt-3 mb-0">
                <span className="text-danger me-1">
                  <Icons name="arrow-down" /> 0.82%
                </span>
                since last week
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-3 mb-3">
          <div className="card">
            <div className="card-body">
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
                  <Icons name="arrow-up" /> 2.65%
                </span>
                since last week
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-3 mb-3">
          <div className="card">
            <div className="card-body">
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
                  <Icons name="arrow-up" /> 2.65%
                </span>
                since last week
              </p>
            </div>
          </div>
        </div>
      </div>
      <Icons name="incorrect" color="red" size={24} />
      <Icons name="correct" color="red" />
      <Icons name="plus" color="red" />
      <Icons name="trash" color="red" size={24} />
      <Icons name="pencil" color="red" />
      <Icons name="refresh" color="red" />
      <Icons name="backword" color="red" />
      <Icons name="forword" color="red" />

      <div className="card mt-3">
        <div className="card-body">
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
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
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
          <h5 className="card-title">Top Selling Products</h5>
          <BarChart />
          <br />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-xl-3 mb-3">
          <div className="card mt-3">
            <div className="card-body">
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
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-3 mb-3">
          <div className="card mt-3">
            <div className="card-body">
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
              <h5 className="card-title">Top Vendors</h5>
              <DoughnutChart />
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
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
          <h5 className="card-title">Top Order Locations</h5>
          <BubbleChart />
          <br />
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Latest Transactions</h5>
          <div className="table-responsive">
            <table className="table table-bordered table-sm table-hover">
              <thead className="">
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Billing Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Total</th>
                  <th scope="col">Payment Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,001</td>
                  <td>random</td>
                  <td>data</td>
                  <td>placeholder</td>
                  <td>text</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
        </div>
      </div>
    </>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  const { t } = useTranslation('common')
  return <Layout title={t('Home')}>{page}</Layout>
}
