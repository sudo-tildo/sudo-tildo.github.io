# Tildo's WebCorner

Hi, everyone! This is my personal blog and portfolio repository. All the info is present inside the website.
Here, I'll explain the stack I used for deploying this website because at first I made some mistakes like using a technology
that didn't fit with the purpose of my website.

## Moving from Jekyll

Jekyll has a built-in integration with Github Pages, that's why it's the first framework suggested to be used for it by the Github documentation.
But, because Jekyll is built in Ruby, it's hard to use with popular web frameworks like React in it since it needs some turnarounds. 

## Astro

Astro is a Static Site Generator framework for JavaScript/TypeScript. It is content-driven (which is good for what I need)
and has a lot of integrations with different frameworks and libraries, making it easy to develop from it.

### React

I'm using a React with Vite's plugin integration for some components inside my website, such as the Header and Footer, so
it's more reusable inside the website. Astro has its own components system that I also use in some parts of the website when
it requires some logic for retrieving the content.

### Tailwind and ShadcnUI

Before, when I used Jekyll as the core framework, styling was a pain since it was just CSS/Vanilla JS. Using Tailwind alongside 
ShadcnUI made this process more productive.

## Finally

That's it! This is not a tutorial, but a brief comment about me moving from a technology to another. Thanks for reading!