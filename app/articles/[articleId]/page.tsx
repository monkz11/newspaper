import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { lusitana } from '../../ui/fonts';
import Image from 'next/image';
import Navbar from '@/app/ui/navbar';
import Link from 'next/link';
import {
  article,
} from '@/app/lib/definitions';

export default async function Page({
    params,
  }: {
    params: { articleId: string };
  }) {
    noStore();
    const data = await sql<article>`SELECT * FROM article WHERE id = ${params.articleId};`;
  
    return (
      <main>
        <Navbar />
        {data.rows.map((article, i) => (
          <div
            key={article.title}
            className="bg-seashell pb-28 flex justify-center items-center pt-16"
          >
            <div className="text-center">
              <h1
                className={`${lusitana.className} text-6xl mb-4 pb-4 pl-32 pr-32`}
              >
                {article.title}
              </h1>
              <p className={`${lusitana.className} mb-4 pb-8 font-light`}>
                {article.description}
              </p>
  
              <div className="flex justify-center items-center flex-col">
                <Image
                  src={article.image_url}
                  alt={`${article.title} article image`}
                  className="object-center"
                  width={600}
                  height={400}
                />
                {/* Author link positioned directly under the image, aligned to the left edge of the image */}
                <div className="w-full max-w-[600px] text-left mt-2">
                  <Link href={`/author/${article.author_id}`}>
                    <div className="pt-12 hover:underline">
                      {article.article_author}
                    </div>
                  </Link>
                  <div className="border-b-2 border-gray-300 mt-2"></div>
                </div>
              </div>
  
              <div className="article-content max-w-screen-lg text-left mx-16 mt-16">
                <div
                  className={`${lusitana.className} max-w-4 mb-8 ml-16 mr-16 mt-24 text-left text-lg`}
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
            </div>
          </div>
        ))}
      </main>
    );
  }

