import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import discoverBook from '@/../public/images/discoverBook.svg'
import currentlyReading from '@/../public/images/currentlyReading.png'

import { GBBookNavProps, GBBookNavItemProps } from './types'

export const GBBookNavDiscoverItem: React.FC<GBBookNavItemProps> = memo(
  ({ title, item }) => {
    return (
      <li className="mr-3">
        {title === "Discover new book" &&
          <div className="overflow-hidden relative cursor-pointer rounded-lg" style={{ width: 272, height: 139}}>
            <Link href={{ pathname: `/books/${item?.id}`}}>
              <a>
                <Image
                  src={discoverBook}
                  width={272}
                  height={139}
                />
                <div className="m-2 absolute top-0 left-3 w-full z-99999 text-purple-50 pr-28">
                  <h1 className="font-bold text-2xl pt-5" style={{maxWidth: "10ch", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>{item?.volumeInfo?.title}</h1>
                  <span>{item?.volumeInfo?.authors[0]}</span>
                  <div className="absolute top-2 left-40 w-full z-99999 rounded-lg">
                    <Image
                      src={`${item?.volumeInfo?.imageLinks?.smallThumbnail}`}
                      width={73}
                      height={109}
                    />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        }
        {title === "Currently Reading" &&
          <div className="overflow-hidden relative cursor-pointer rounded-lg flex items-center" style={{ width: 331, height: 136 }}>
           <Link href={{ pathname: `/books/${item?.id}`}}>
             <a>
                <Image
                  src={currentlyReading}
                  width={331}
                  height={100}
                />
                <div className="absolute top-0 left-4 w-full z-99999">
                  <Image
                    src={`${item?.volumeInfo?.imageLinks?.smallThumbnail}`}
                    width={91}
                    height={136}
                  />
                </div>
                <div className="m-2 absolute top-0 w-full z-9999 pl-28">
                  <h1 className="text-xl pt-3 text-gray-900" style={{maxWidth: "18ch", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>{item?.volumeInfo?.title}</h1>
                  <span className="text-xs pt-5 text-gray-500">{item?.volumeInfo?.authors[0]}</span>
                </div>
             </a>
           </Link>
         </div>
        }
      </li>
    );
  }
);


export const GBBookNav: React.FC<GBBookNavProps> = memo(
  ({ title, link, books }) => {
    return (
      <div className="mt-7 mx-5">
        <p className="flex justify-between">
          <span className="text-lg">{title}</span>
          <span className="text-sm text-link">{link}</span>
        </p>
        {(title === "Discover new book" || title === "Currently Reading") &&
          <div className= "mt-2 w-full max-w-md overflow-y-scroll">
            <ul className="flex flex-row">
              {books?.map((book: any) => (
                <GBBookNavDiscoverItem key={book.id} item={book} title={title}/>
              ))}
            </ul>
          </div>
        }
        {title === "Reviews of The Days" &&
          <div className= "mt-2 flex justify-center">
            <svg className="bg-readingBook rounded-lg" width="335" height="181">
              <path d="M0 5C0 2.23858 2.23858 0 5 0H330C332.761 0 335 2.23858 335 5V181H0V5Z" fill="#D8D8D8" opacity="0.2" />
            </svg>
          </div>
        }
      </div>
    );
  }
);
