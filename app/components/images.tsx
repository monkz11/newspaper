import { list } from '@vercel/blob';
import Image from 'next/image';
 
export async function Images() {
  async function allImages() {
    const blobs = await list();
    return blobs;
  }
  const images = await allImages();
 
  return (
    <section>
      {images.blobs.map((image) => (
        <p
          key={image.pathname}
        >{image.pathname}</p>
      ))}
      <img src="https://i1.sndcdn.com/artworks-000353922099-ph95my-t1080x1080.jpg" alt="Example Blob"></img>
    </section>
  );
}