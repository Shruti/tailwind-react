import React from 'react'
import Charts from '../Charts'
import ColumnChart from '../ColumnChart'
import DonutChart from '../DonutChart'
import Map from '../Map'

const Dashboard = () => {
  return (    
    <div className='container mx-auto my-auto'>
      <main>  
        <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7'>
            {/*card items starts*/}
            <div className='rounded-sm border border-stroke bg-white py-6 px-7 shadow-sm'>
              <div className='flex h-11 w-11 items-center justify-center rounded-full bg-slate-200'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

              </div>
              <div className='mt-4 flex items-end justify-between'>
                <div>
                  <p className='text-3xl font-bold text-black dark:text-white'>$3.456k</p>
                  <span className='text-sm font-200 text-slate-700'>Total Views</span>
                </div>
                <span className='flex items-center gap-1 text-sm font-medium text-green-700'>43%
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                  </svg>

                </span>
              </div>
            </div>
            <div className='rounded-sm border border-stroke bg-white py-6 px-7 shadow-sm'>
              <div className='flex h-11 w-11 items-center justify-center rounded-full bg-slate-200'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>

              </div>
              <div className='mt-4 flex items-end justify-between'>
                <div>
                  <p className='text-3xl font-bold text-black dark:text-white'>$3.456k</p>
                  <span className='text-sm font-200 text-slate-700'>Total Profit</span>
                </div>
                <span className='flex items-center gap-1 text-sm font-medium text-green-700'>43%
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                  </svg>

                </span>
              </div>
            </div>
            <div className='rounded-sm border border-stroke bg-white py-6 px-7 shadow-sm'>
              <div className='flex h-11 w-11 items-center justify-center rounded-full bg-slate-200'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>

              </div>
              <div className='mt-4 flex items-end justify-between'>
                <div>
                  <p className='text-3xl font-bold text-black dark:text-white'>$3.456k</p>
                  <span className='text-sm font-200 text-slate-700'>Total Products</span>
                </div>
                <span className='flex items-center gap-1 text-sm font-medium text-green-700'>43%
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                  </svg>

                </span>
              </div>
            </div>
            <div className='rounded-sm border border-stroke bg-white py-6 px-7 shadow-sm'>
              <div className='flex h-11 w-11 items-center justify-center rounded-full bg-slate-200'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                </svg>

              </div>
              <div className='mt-4 flex items-end justify-between'>
                <div>
                  <p className='text-3xl font-bold text-black dark:text-white'>$3.456k</p>
                  <span className='text-sm font-200 text-slate-700'>Total users</span>
                </div>
                <span className='flex items-center gap-1 text-sm font-medium text-green-700'>43%
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className='mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7 2xl:gap-7'>
            <div className='col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-5 shadow-sm sm:px-7 xl:col-span-8'>
              <div className='flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap'>
                <div className='flex w-full flex-wrap gap-3 sm:gap-5'>
                  <div className='flex min-w-47'>
                    <div className='w-full'>
                      <p className='text-blue-600 font-semibold'>Total Revenue</p>
                      <p className='text-sm font-200 text-slate-700'>12.04.2022 - 12.05.2022</p>
                    </div>
                  </div>
                  <div className='flex min-w-47'>
                    <div className='w-full'>
                      <p className='font-semibold text-indigo-800'>Total Sales</p>
                      <p className='text-sm font-200 text-slate-700'>12.04.2022 - 12.05.2022</p>
                    </div>
                  </div>
                </div>
                <div className='flex w-full max-w-45 justify-end'>
                  <div className='inline-flex items-center rounded-md bg-whiter p-1 bg-slate-200'>
                    <button className='rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card hover:bg-boxdark'>Day</button>
                    <button className='rounded py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card hover:bg-boxdark'>Week</button>
                    <button className='rounded py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card hover:bg-boxdark'>Month</button>
                  </div>
                </div>
              </div>
              <div>
              <Charts/>
              </div>
            </div>
            <div className='col-span-12 rounded-sm border border-stroke bg-white p-7 shadow-sm xl:col-span-4'>
              <div className='mb-4 justify-between gap-4 sm:flex'>
                <div>
                  <p className='text-xl font-bold text-black dark:text-white'>
                    Profit this week
                  </p>
                </div>
                <div>
                  <div className='relative z-20 inline-block'>
                    <div>
                      <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        This Week
                        <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
              <div>
                  <ColumnChart/>
                                  </div>
            </div>
            <div className='col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-5 shadow-sm sm:px-7 xl:col-span-5'>
              <div className='mb-3 justify-between gap-4 sm:flex'>
                <div>
                <p className='text-xl font-bold text-black dark:text-white'>
                    Visitor Analytics
                  </p>
                </div>
               </div>
               <div className='mb-2'>
              <DonutChart/>
            </div>
            </div>
            <div className='col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-5 shadow-sm sm:px-7 xl:col-span-7'>
            <div className='mb-3 justify-between gap-4 sm:flex'>
            <div>
                <p className='text-xl font-bold text-black dark:text-white'>
                    Region Labels
                  </p>
                </div>
           
            </div>
            <div>
                <Map/>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default Dashboard