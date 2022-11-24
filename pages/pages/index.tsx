import { GetStaticProps, InferGetStaticPropsType } from 'next'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from '@/components/layout'
import ReactIcon from '@/hoc/ReactIcon'
import { MdKeyboardBackspace } from '@/components/shared/Icons'

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
  const [rows, setRows] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setRows(json))
  }, [])

  return (
    <>
      <ReactIcon icon={<MdKeyboardBackspace />} />

      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Pages</h5>
          <div className="table-responsive">
            <table className="table table-striped table-hover dataTable">
              <thead>
                <tr>
                  <th
                    className="sorting sorting_desc"
                    tabIndex={0}
                    aria-controls="Pages"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="ID: activate to sort column ascending"
                    aria-sort="descending"
                  >
                    Title
                  </th>
                  <th
                    className="sorting"
                    tabIndex={0}
                    aria-controls="Pages"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Date: activate to sort column ascending"
                  >
                    Date
                  </th>
                  <th
                    tabIndex={0}
                    aria-controls="Pages"
                    rowSpan={1}
                    colSpan={1}
                    aria-label="Status"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows &&
                  rows?.map((row: any) => {
                    return (
                      <tr key={row?.id}>
                        <td>{row?.id}</td>
                        <td>{row?.title}</td>
                        <td>{row?.userId}</td>
                      </tr>
                    )
                  })}
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

HomePage.getLayout = function getLayout(page: JSX.Element) {
  const { t } = useTranslation('menu')
  return <Layout title={t('Pages')}>{page}</Layout>
}
