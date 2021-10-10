import React, { memo } from 'react'
import { GBBottomNavBarProps } from './types'

export const GBBottomNavBar: React.FC<GBBottomNavBarProps> = memo(({ bottomFixed = false }) => {
  return bottomFixed ? (
        <div className="px-7 bg-white shadow-lg">
          <div className="flex">
            <div className="flex-1 group">
              <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-gray-800">
                  <span className="block px-1 pt-1 pb-1">
                      <i className="fas fa-home text-2xl pt-1 mb-1 block"></i>
                      <span className="block text-xs pb-2">Home</span>
                  </span>
              </a>
                        </div>
                        <div className="flex-1 group">
                            <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-gray-800">
                                <span className="block px-1 pt-1 pb-1">
                                    <i className="far fa-book text-2xl pt-1 mb-1 block"></i>
                                    <span className="block text-xs pb-2">Libraries</span>
                                </span>
                            </a>
                        </div>
                        <div className="flex-1 group">
                            <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-gray-800">
                                <span className="block px-1 pt-1 pb-1">
                                    <i className="far fa-user text-2xl pt-1 mb-1 block"></i>
                                    <span className="block text-xs pb-2">Profile</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
      )
    : (
                <div className="bg-white shadow-lg mb-20 mx-3 ">
                        <div className="flex">
                            <div className="flex-1 group">
                                <a href="#" className="flex items-end justify-center text-center mx-auto pl-4 pt-2 w-full text-gray-400 group-hover:text-gray-800">
                                    <span className="flex items-end px-1 pt-1 pb-1">
                                        <i className="fal fa-book-open text-2xl pt-1 mb-1"></i>
                                        <span className=" text-2xs pb-2 font-bold">Read</span>
                                    </span>
                                </a>
                            </div>
                            <div className="flex-1 group">
                                <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-gray-800">
                                    <span className="flex items-end px-1 pt-1 pb-1">
                                        <i className="fas fa-headphones text-2xl pt-1 mb-1"></i>
                                        <span className="text-2xs pb-2 font-bold">Listen</span>
                                    </span>
                                </a>
                            </div>
                            <div className="flex-1 group">
                                <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-gray-800">
                                    <span className="flex items-end px-1 pt-1 pb-1">
                                        <i className="fal fa-external-link text-2xl pt-1 mb-1"></i>
                                        <span className="text-2xs pb-2 font-bold">Share</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
      )
})
