import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { GBBookNavProps, GBBookNavItemProps } from './types'

export const GBBookNavDiscoverItem: React.FC<GBBookNavItemProps> = memo(
  ({ item, selected }) => {
    return (
      <li className="mr-3">
        <div className="bg-purple-900" style={{ width: 272, height: 139, borderRadius: 8}}>
          <Link
            href={{
              pathname: `/books/`,
              query: {},
            }}
          >
            <a>
              {item?.volumeInfo?.title}
              {/* <Image
                src={"bg-readingBook"}
                width={272}
                height={139}
              /> */}
            </a>
          </Link>
        </div>
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
        {title === "Discover new book" &&
          <div className= "mt-2 fixed w-full max-w-md">
            <ul className="flex flex-row">
              {books?.map((book: any) => (
                <GBBookNavDiscoverItem key={book.id} item={book}/>
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
