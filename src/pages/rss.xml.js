import {getCollection} from 'astro:content';
import rss from '@astrojs/rss';
import {SITE_DESCRIPTION, SITE_TITLE} from '../consts';

export async function GET(context) {
    const posts = await getCollection('blog');
    const projects = await getCollection('projects');

    const items = [
        ...posts.map((post) => ({
            ...post.data,
            link: `/blog/${post.id}/`,
            pubDate: post.data.pubDate,
        })),
        ...projects.map((project) => ({
            ...project.data,
            link: `/blog/${project.id}/`,
            pubDate: project.data.pubDate,
        })),
    ]
    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items,
    });
}
