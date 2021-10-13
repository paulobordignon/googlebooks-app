import { memo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'
import bookInfoBackground from '@/../public/images/bookInfoBackground.png'

import { GBBookInfoProps } from './types'

export const GBBookInfo: React.FC<GBBookInfoProps> = memo(
  ({ item }) => {
    const router = useRouter()
    return (
      <>
        <div className="w-full max-w-md">
          <Image
            className="h-1/3"
            src={bookInfoBackground}
          />
          <div className="absolute top-10 ml-5 z-99999">
            <a onClick={() => router.back()}>
              <i className="far fa-arrow-left text-lg"></i>
            </a>
          </div>
          <div className="flex justify-center">
            <div className="absolute top-20 z-99999">
              <Image
                className="rounded-lg"
                src={`${item?.volumeInfo?.imageLinks?.thumbnail}`}
                width={153}
                height={229}
              />
            </div>
          </div>
        </div>
        <div className="mt-14 mx-5">
          <span className="text-xl font-bold">{item?.volumeInfo?.title}</span>
          <span className="text-xl"> : <span>{item?.volumeInfo?.subtitle}</span></span>
          <h3 className="text-base text-name font-medium py-2">{item?.volumeInfo?.authors[0]}</h3>
          <span className="text-sm text-gray-600">
            {item?.volumeInfo?.description ? item?.volumeInfo?.description : "This book has no description."}
          </span>
          {console.log(item)}
        </div>
      </>
    );
  }
);
