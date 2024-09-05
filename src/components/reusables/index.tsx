import Link from "next/link";
import Picture from "../picture/Index";
import { hero_img, logo } from "../../../public/dev_images";

interface JollyCastLogoProps {
	imageClassName?: string;
}

export const JollyCastLogo = ({ imageClassName }: JollyCastLogoProps) => {
	return (
		<Link
			href='/'
			className='hover:animate-pulse transition w-[90px] absolute right-3 lg:right-12 top-6'
		>
			<Picture
				src={logo}
				alt='logo-image'
				loading='eager'
				className={`w-[90px] h-[40px] object-contain ${imageClassName} relative`}
			/>
		</Link>
	);
};
