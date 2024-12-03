'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import AnimatedSection from '@/app/components/Animation';

const Carousel = ({ items, renderCard, className = '' }) => {
	return (
		<div className={`relative ${className}`}>
			<Swiper
				modules={[Navigation, Pagination]}
				spaceBetween={20}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				style={{ '--swiper-navigation-sides-offset': '0px' }}
			>
				{items.map((item, index) => (
					<SwiperSlide key={index} className="px-4">
						<AnimatedSection delay={index * 0.2}>
							<div className="p-6 max-w-[90%] mx-auto mb-6">
								{renderCard(item)}
							</div>
						</AnimatedSection>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Carousel;