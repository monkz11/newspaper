import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import { article } from '@/app/lib/definitions';
    
    export default async function ArticleCard({
        articleInfo,
      }: {
        articleInfo: article[];
      }) {return (
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
                        <div className="min-w-0">
                            <p className={`${lusitana.className} truncate text-sm font-semibold md:text-base`}>
                                {article.title}
                            </p>
                            <p className={`${lusitana.className} hidden text-sm text-gray-500 sm:block`}>
                                {article.description}
                            </p>
                        </div>
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
                                <p className="truncate text-sm font-semibold md:text-base">
                                Gaza sitch is wanked
                                </p>
                                <p className="hidden text-sm text-gray-500 sm:block">
                                Gaza sitch is wanked 2
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
                        </div>
                    </div>


                    {/*<div className='grid md:grid-cols-2 pt-2'>
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
                        <div className="md:grid-rows-2 gap-4">
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
                        </div>
                    </div>*/}
                </div>
            </div>
        </div>
      );
    }

        /*return (
          <div className="flex flex-col">
            <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
              Latest Articles
            </h2>
            <div className="flex">
      
              { <div className="bg-white px-6">
                {articleInfo.map((article, i) => {
                  return (
                    <div
                      key={article.title}
                      className={clsx(
                        'flex flex-row items-center justify-between py-4',
                        {
                          'border-t': i !== 0,
                        },
                      )}
                    >
                      <div className="flex items-center">
                            <Image
                             src={article.image_url}
                             alt={`${article.title} article image`}
                             className="mr-4 rounded-full"
                             width={32}
                             height={32}
                            />
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold md:text-base">
                            {article.title}
                          </p>
                          <p className="hidden text-sm text-gray-500 sm:block">
                            {article.description}
                          </p>
                        </div>
                      </div>
                      <p
                        className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                      >
                      </p>
                    </div>
                  );
                })}
              </div> }
            </div>
          </div> */
  