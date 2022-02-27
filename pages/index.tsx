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
            <table className="table table-striped table-hover dataTable">
              <thead>
                <tr>
                  <th
                    className="sorting sorting_desc"
                    tabIndex={0}
                    aria-controls="Transactions"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Order ID: activate to sort column ascending"
                    aria-sort="descending"
                  >
                    Order ID
                  </th>
                  <th
                    className="sorting"
                    tabIndex={0}
                    aria-controls="Transactions"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Billing Name: activate to sort column ascending"
                  >
                    Billing Name
                  </th>
                  <th
                    className="sorting"
                    tabIndex={0}
                    aria-controls="Transactions"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Date: activate to sort column ascending"
                  >
                    Date
                  </th>
                  <th
                    className="sorting sorting_asc"
                    tabIndex={0}
                    aria-controls="Transactions"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Total: activate to sort column ascending"
                  >
                    Total
                  </th>
                  <th
                    tabIndex={0}
                    aria-controls="Transactions"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Payment Status"
                  >
                    Payment Status
                  </th>
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
                <tr>
                  <td>1,001</td>
                  <td>random</td>
                  <td>data</td>
                  <td>placeholder</td>
                  <td>text</td>
                </tr>
              </tbody>
            </table>

            <div className="row mb-3">
              <div className="col-12">
                <div aria-label="Page navigation" className="pagination-cont">
                  <ul className="pagination justify-content-end mb-0">
                    <li className="page-item disabled">
                      <a
                        className="page-link"
                        href="#"
                        aria-label="Previous"
                        tabIndex={-1}
                        aria-disabled="true"
                      >
                        <span aria-hidden="true">«</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <select
                  className="form-select page-size-sel float-end"
                  aria-label="Page Size"
                >
                  <option value={5}>Show 5</option>
                  <option value={10}>Show 10</option>
                  <option value={20}>Show 20</option>
                  <option value={50}>Show 50</option>
                  <option value={100}>Show 100</option>
                </select>
              </div>
            </div>
          </div>
          <br />
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
