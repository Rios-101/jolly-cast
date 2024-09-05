"use client";
import React from "react";
import Button from ".";
import Picture from "../picture/Index";
import { andriod } from "../../../public/dev_images";

const DownloadAndroidButton = () => {
	return (
		<Button className='text-black-200 cursor-pointer bg-bg2-300 py-2 sm:py-4 px-2 sm:px-6 gap-1.5 text-xxs lg:text-sm font-bold rounded-full shadow-xl hover:text-white hover:bg-black-100 transition-[.5] group'>
			<Picture
				src={andriod}
				alt='abr logo'
				loading='eager'
				className='w-[20px] h-[22px] lg:w-[30px] lg:h-[32px]'
			/>
			<div className='text-start'>
				<h4 className='text-mxs lg:text-xxs leading-3 tracking-wider font-light'>
					DOWNLOAD FOR FREE
				</h4>
				<h4 className='text-black-200 text-xs lg:text-xl font-semibold group-hover:text-gray-500'>
					Google Playstore
				</h4>
			</div>
		</Button>
	);
};

export default DownloadAndroidButton;
