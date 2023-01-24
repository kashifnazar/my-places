import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const placesDirectory = path.join(process.cwd(), 'places');

export function getFileNames() {
  const placesDirectory = path.join(process.cwd(), 'places');
  return fs.readdirSync(placesDirectory);
}

export async function getPlaceData(id: string) {
  const fullPath = path.join(placesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
  .use(html)
  .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export function getSortedPlacesData() {
  // Get file names under /places
  const fileNames = fs.readdirSync(placesDirectory);
  const allPlacesData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(placesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    } as {
        id: string,
        title: string,
        date: string
    };
  });
  // Sort places by date
  return allPlacesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}