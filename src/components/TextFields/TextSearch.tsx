import { memo, useState } from 'react'
import { useRouter } from 'next/router';

import { GBSearchSvg } from '@/components/Icons'

export const GBTextSearch: React.FC<{phrase?: any}> = memo(({phrase}) => {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');

  const executeFilter = (search: string) => {
    router.push(`/search/${search}`);
  };

  const onKeyPressed = (event: any) => {
    if (event.keyCode === 13 && search) {
      executeFilter(search);
    }
  };

  return (
    <>
      <div className=" bg-white rounded flex mx-5 p-3 shadow-sm mt-14">
        <button className="outline-none focus:outline-none">
          <GBSearchSvg />
        </button>
        <input
          className="w-full pl-4 text-base outline-none focus:outline-none bg-transparent"
          type="search"
          placeholder="Search book"
          defaultValue={phrase}
          onChange={(event: any) => setSearch(event.target.value)}
          onKeyDown={(event: any) => onKeyPressed(event)}
        />
      </div>
    </>
  )
})
