import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import { article } from '@/app/lib/definitions';
import { sql } from '@vercel/postgres';
    
    export default async function ArticleCard({
        articleInfo,
      }: {
        articleInfo: article[];
      }) 
      {
        const data_world = await sql<article>`SELECT * FROM article WHERE content_type = 'world';`;
        const data_local = await sql<article>`SELECT * FROM article WHERE content_type = 'local';`;
        const data_torah = await sql<article>`SELECT * FROM article WHERE content_type = 'torah';`;
        return (
        <div>
            <div>
                <div className='grid md:grid-cols-2 pl-8 pt-6'>
                    <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                    Latest Articles
                    </h2>
                    <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                    Most popular
                    </h2>
                </div>
                
                <div className='grid md:grid-cols-2 pt-2'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 pl-8 pr-8'>
                    {articleInfo.map((article, i) => (
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
                                {/*<p className={`${lusitana.className} text-left hidden text-sm text-gray-500 sm:block`}>
                                    {article.description}
                                </p>*/}
                        </div>
                        </Link>
                        ))}
                    </div>
                    
                    <div className='pr-8 pl-8'>
                        <div className='card-big shadow-lg hover:scale-102 hover:shadow-2xl border rounded-md mb-4 '>
                            <Link href={`/articles/4678`} key={'article.title'}>
                                <div className="image-wrapper-1">
                                    <Image
                                    src={'https://mlpqxinfrnomb00o.public.blob.vercel-storage.com/UK-election-live-blog-redesign-1200x800-High-Quality-EI5oD7Fd35IoB7TK8HMwAHOx0i47dP.avif'}
                                    alt={`article image`}
                                    className="mr-4 rounded-md"
                                    width={700}
                                    height={200}
                                    />
                                </div>
                                <div className="min-w-0">
                                    <p className="truncate text-sm font-semibold md:text-base mt-4 mb-2">
                                    Election scandals dont appear to be affecting polls
                                    </p>
                                    <p className="hidden text-sm text-gray-500 sm:block">
                                    Pollsters have reoprted that despite recent betting scandals and V-day incident conservatives are steady in the polls
                                    </p>
                                </div>
                            </Link>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 pt-2'>
                            <div className="card-mid-l p-4">
                                <Link href={`/articles/4678`} key={'article.title'}>
                                    <Image
                                        src={'https://mlpqxinfrnomb00o.public.blob.vercel-storage.com/_110469601_gettyimages-1181293259-XFHAN3QKHKeQy0erPcQJJcgYxKO4bI.jpg'}
                                        alt={`article image`}
                                        className="mr-4 rounded-md"
                                        width={700}
                                        height={200}
                                    />
                                    <h3 className="text-lg font-medium mb-2">Additional Section Title</h3>
                                    <p className="text-sm text-gray-600">
                                        This is the content of the new section that appears below the large card on the right. You can add more paragraphs, images, or any other content here.
                                    </p>
                                </Link>
                            </div>
                            <div className="card-mid-right">
                                <Link href={`/articles/4678`} key={'article.title'}>
                                    <div className="card-mid-t p-4">
                                        <div className="content">
                                            <Image
                                                src={'https://mlpqxinfrnomb00o.public.blob.vercel-storage.com/_110469601_gettyimages-1181293259-XFHAN3QKHKeQy0erPcQJJcgYxKO4bI.jpg'}
                                                alt={`article image`}
                                                className="image rounded-md"
                                                width={200}
                                                height={100}
                                            />
                                            <div className="text-container">
                                                <h3 className="text-lg font-medium mb-2">Additional Section Title</h3>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 description">
                                            This is the content of the new section that appears below the large card on the right. You can add more paragraphs, images, or any other content here.
                                        </p>
                                    </div>
                                </Link>
                                <Link href={`/articles/4678`} key={'article.title'}>
                                    <div className="card-mid-b p-4">
                                        <div className="content">
                                            <Image
                                                src={'https://mlpqxinfrnomb00o.public.blob.vercel-storage.com/_110469601_gettyimages-1181293259-XFHAN3QKHKeQy0erPcQJJcgYxKO4bI.jpg'}
                                                alt={`article image`}
                                                className="image rounded-md"
                                                width={200}
                                                height={100}
                                            />
                                            <div className="text-container">
                                                <h3 className="text-lg font-medium mb-2">Additional Section Title</h3>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 description">
                                            This is the content of the new section that appears below the large card on the right. You can add more paragraphs, images, or any other content here.
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='mt-8 mb-8'/>

            <div id="world">
                <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                    World
                </h2>
                <div className='flex flex-row'>
                    {data_world.rows.map((article, i) => (
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
                                {/*<p className={`${lusitana.className} text-left hidden text-sm text-gray-500 sm:block`}>
                                    {article.description}
                                </p>*/}
                        </div>
                    </Link>
                    ))}
                </div>
            </div>

            <hr className='mt-8 mb-8'/>

            <div id="local">
                <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                    Local
                </h2>
                <div className='flex flex-row'>
                    {data_local.rows.map((article, i) => (
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
                                {/*<p className={`${lusitana.className} text-left hidden text-sm text-gray-500 sm:block`}>
                                    {article.description}
                                </p>*/}
                        </div>
                    </Link>
                    ))}
                </div>
            </div>

            <hr className='mt-8 mb-8'/>

            <div id="torah">
                <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                    Torah
                </h2>
                <div className='flex flex-row'>
                    {data_torah.rows.map((article, i) => (
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
                                {/*<p className={`${lusitana.className} text-left hidden text-sm text-gray-500 sm:block`}>
                                    {article.description}
                                </p>*/}
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
        </div>
      );
    }
  