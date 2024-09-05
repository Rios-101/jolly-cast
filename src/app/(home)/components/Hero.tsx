import DownloadAndroidButton from "@/components/button/DownloadAndroidButton";
import DownloadIosButton from "@/components/button/DownloadIosButton";
import { JollyCastLogo } from "@/components/reusables";
import AnimatedText1 from "@/components/text/AnimatedText1";
import React from "react";

const Hero = () => {
	return (
		<div
			className='pt-8 gap-8 lg:gap-0 px-2 lg:px-20 grid place-items-center lg:place-items-start lg:flex flex-col bg-cover bg-center h-screen relative bg-no-repeat'
			style={{ backgroundImage: "url('/dev_images/hero-img.png')" }}
		>
			<JollyCastLogo />
			<div className='max-w-[650px] mt-32 space-y-6'>
				<div className='text-slate-950 text-3xl sm:text-4xl font-extrabold xl:text-6xl lg:leading-[2] text-center lg:text-start'>
					Enjoy access to{" "}
					<span className='text-primary-100'>Unlimited Podcast</span> Worldwide
				</div>

				<h3 className='text-base lg:text-2xl text-black-100 lg:text-black-200 text-center lg:text-start font-medium'>
					Listen, learn, enjoy; anywhere, anytime!
				</h3>

				<div className='flex gap-3 lg:justify-start justify-center flex-wrap py-6 md:py-3 '>
					<DownloadAndroidButton />
					<DownloadIosButton />
				</div>
			</div>
		</div>
	);
};

export default Hero;
