import { GetStaticProps, InferGetStaticPropsType } from 'next'
import React, { ReactElement } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from '@/components/layout'
import ReactIcon from '@/hoc/ReactIcon'
import { MdKeyboardBackspace } from '@/components/shared/Icons'

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
      <ReactIcon icon={<MdKeyboardBackspace />} />

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
  return <Layout title={t('Pages')}>{page}</Layout>
}
