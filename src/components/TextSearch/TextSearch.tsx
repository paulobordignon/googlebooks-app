import { memo } from 'react'

export const GBTextSearch: React.FC = memo(() => {
  return (
    <>
      <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm">
        <button className="outline-none focus:outline-none"><svg className=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
        <input type="search" name="" id="" placeholder="search for images" x-model="q" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" />
      </div>
    </>
  )
})
