import { memo, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import noImageAvailable from '@/../public/images/noImageAvailable.jpg'
import { GBBookCardsProps, GBBookCardsItemProps } from './types'

export const GBBookCardsItem: React.FC<GBBookCardsItemProps> = memo(
  ({ item }) => {
    return (
      <li className="mr-3">
        <div className="overflow-hidden relative cursor-pointer rounded-lg mt-3" style={{ width: 95, height: 200}}>
          <Link href={{ pathname: `/books/${item?.id}`}}>
            <a>
              {console.log(item)}
              <Image
                src={item?.volumeInfo?.imageLinks?.thumbnail !== undefined ? `${item?.volumeInfo?.imageLinks?.thumbnail}` : noImageAvailable}
                width={95}
                height={150}
              />
              <div className="text-black">
                <h1 className="text-xs" style={{maxWidth: "10ch", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
                  {item?.volumeInfo?.title}
                </h1>
                <span className="text-xs">by: {item?.volumeInfo?.authors}</span>
              </div>
            </a>
          </Link>
        </div>
      </li>
    );
  }
);

export const GBBookCards: React.FC<GBBookCardsProps> = memo(
  ({ books }) => {
    return (
      <div className="mt-7 mx-5">
        <div className= "mt-2 w-full max-w-md">
        <ul className="flex flex-wrap justify-center">
          {books?.items?.map((book: any) => (
            <GBBookCardsItem item={book}/>
          ))}
        </ul>
        </div>
      </div>
    );
  }
);
