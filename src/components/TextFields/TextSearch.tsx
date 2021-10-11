import { memo } from 'react'

import { GBSearchSvg } from '@/components/Icons'

export const GBTextSearch: React.FC = memo(() => {
  return (
    <>
      <div className=" bg-white rounded flex mx-5 p-3 shadow-sm mt-14">
        <button className="outline-none focus:outline-none">
          <GBSearchSvg />
        </button>
        <input type="search" placeholder="Search book" className="w-full pl-4 text-base outline-none focus:outline-none bg-transparent" />
      </div>
    </>
  )
})
