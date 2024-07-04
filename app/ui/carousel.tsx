'use client';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { QueryResult, sql } from '@vercel/postgres';
import { article } from '@/app/lib/definitions';
import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';

export default function ResponsiveCarousel
    ({
        articleInfo,
        data_world
      }: {
        articleInfo: article[];
        data_world: QueryResult<article>;
      }) 
      {
        
      return (
            <Carousel
            centerMode={true}
            centerSlidePercentage={25} // Adjust percentage to show 4 cards
            showArrows={true}>

                {data_world.rows.map((article) => (
                <Link href={`/articles/${article.id}`} key={article.title}>
                <div className='card min-h-full shadow-lg hover:scale-102 hover:shadow-2xl border rounded-md'>
                    <div className="image-wrapper">
                        <Image
                            src={article.image_url}
                            alt={`${article.title} article image`}
                            layout="fill"
                            objectFit="cover"
                            className="custom-image-class"
                        />
                    </div>
                        <h3 className={`text-left mt-4 mb-4`}>
                            {article.title}
                        </h3>
                </div>
                </Link>
            ))}
            </Carousel>
      );
}