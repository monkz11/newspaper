'use server';
import { sql } from '@vercel/postgres';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
 
const FormSchema = z.object({
    image_url: z.string(),
    title: z.string(),
    description: z.string(),
    id: z.string(),
    content: z.string(),
    content_type: z.string()
});
 
const CreateArticle = FormSchema;
 
export async function createArticle(formData: FormData) {
    const { image_url, title, description, id, content, content_type } = CreateArticle.parse({
      id: formData.get('id'),
      title: formData.get('title'),
      description: formData.get('description'),
      image_url: formData.get('image_url'),
      content: formData.get('content'),
      content_type: formData.get('content_type')
    });

    await sql`
    INSERT INTO article (image_url, title, description, id, content, content_type)
    VALUES (${image_url}, ${title}, ${description}, ${id}, ${content}, ${content_type})
  `;

  revalidatePath('/');
  redirect('/');
  }