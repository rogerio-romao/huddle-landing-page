# Frontend Mentor - Huddle landing page with curved sections solution

This is a solution to the [Huddle landing page with curved sections challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-curved-sections-5ca5ecd01e82137ec91a50f2). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./images/screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/rogerio-romao/huddle-landing-page)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

I learned I could have planned a bit more and that when you have a mobile design, especially with such a thin design at 375px, maybe you should start mobile first lol. Anyway, it didn't go too bad, and the mobile design is just one big media query and it all worked out.

I think the design is very very close to the design template. Not super proud of the css, especially reusing some classes in some places where they had no business being reused. If this was a live production website I would have better naming and such.

Example:

```html
<div class="grow-illustration">
  <div class="grow-blurb">...</div>
</div>
```

```css
.grow-blurb,
.flow-blurb {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: -5px 0;
  padding: 0 3rem;
}
```

Ok, that's fine...

```html
<footer>
  <section class="grow footer">
    <img src="./images/bg-footer-top-desktop.svg" alt="" />
    <div class="grow-illustration">
      <div class="grow-blurb">...</div>
    </div>
  </section>
</footer>
```

```css
.grow.footer .grow-blurb {
  background: var(--dark-cyan);
  color: white;
  justify-content: space-between;
  align-items: start;
}
```

Now that's just ugly lol.

### Continued development

I try to have better structure on my css in actual projects but I want to look more closely at incorporating BEM or other strategies so I have a super systematic approach.

## Author

- Website - [Rogerio Romao](https://portfolio-v2-rogerio-romao.vercel.app)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/rogerio-romao)
