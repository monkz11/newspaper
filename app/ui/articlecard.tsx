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
            <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
              Latest Articles
            </h2>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                    {articleInfo.map((article, i) => {
                    return (
                        <Link href={`/articles/${article.id}`} key={article.title}>
                            <div className='border border-4 border-black'>
                                <div className="flex items-center">
                                    <Image
                                    src={article.image_url}
                                    alt={`${article.title} article image`}
                                    className="mr-4"
                                    width={300}
                                    height={200}
                                    />
                                </div>
                                <div className="min-w-0">
                                <p className="truncate text-sm font-semibold md:text-base">
                                    {article.title}
                                </p>
                                <p className="hidden text-sm text-gray-500 sm:block">
                                    {article.description}
                                </p>
                                </div>
                            </div>
                        </Link>
                        );
                    })}
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
  