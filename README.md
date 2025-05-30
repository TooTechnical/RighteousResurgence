 [https://righteous-resurgence-app-ec0a23350dfe.herokuapp.com/] <!-- Replace # with your live site link -->

## Brief Introduction

# Welcome to RIGHTEOUS RESURGENCE

This is a comprehensive guide to the Righteous Resurgence website using HTML, CSS, and JavaScript. The website includes three main pages: Home, Presidents Test, and Quiz. The Home page introduces the main features of the website, the President's Test page includes a humorous quiz about presidential fitness, and the Quiz page tests users' knowledge about the 2024 presidential election.

## Major Update: Django + PostgreSQL Full-Stack Upgrade & Deployment

As part of a major enhancement, this site was transformed into a **full-stack Django web application** using Python, PostgreSQL, and deployed to Heroku. Here's a breakdown of the work done and the challenges we overcame:

### ✅ What I Did:
- Converted the site into a Django project using Django 5.2.
- Implemented PostgreSQL using Heroku’s hobby-dev add-on.
- Configured environment variables using `python-decouple` to keep sensitive data secure.
- Added `WhiteNoise` for static file handling in production.
- Deployed the application successfully to Heroku with a production-ready setup.
- Added CKEditor (rich text editor) for editing news articles through the Django admin panel.

### ⚠️ Challenges Faced:

#### Environment Setup Errors
- **Problem**: `DATABASES` not defined in `settings.py`.
- **Fix**: Defined the `DATABASES` dictionary before referencing it with `dj_database_url.config()`.

#### Deployment Issues on Heroku
- **Problem**: `collectstatic` failed due to a misconfiguration in environment variables.
- **Fix**: Set a valid `DATABASE_URL` and ensured all config vars matched Heroku's PostgreSQL connection.

#### Procfile Not Detected
- **Problem**: App wouldn't scale dynos.
- **Fix**: Corrected the Procfile syntax (`web: gunicorn righteousresurgence.wsgi`) and confirmed it was committed to Git.

#### Static Files
- **Problem**: Static files were not rendering properly.
- **Fix**: Integrated WhiteNoise and set `STATICFILES_STORAGE` to `CompressedManifestStaticFilesStorage`.

#### Admin Editing Tools
- **Problem**: Basic admin lacked rich-text functionality.
- **Fix**: Installed `django-ckeditor` and updated models to use `RichTextField()` for article body editing.

---


## Contents

- [UX (User Experience)](#ux-user-experience)
- [Design](#design)
- [Website Features](#website-features)
- [Tablet/Mobile View](#tabletmobile-view)
- [Future Features](#future-features)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Testing](#testing)
- [Credits](#credits)

## UX (User Experience)

The user experience is designed to be intuitive and engaging. The website features a clean layout, easy-to-read typography, and a humorous approach. Users can easily navigate between pages using the navigation bar, and the content is structured to provide a logical flow of information.



## User Stories

- As a user, I want to vote for who I think will win the 2024 Presidential Election so that I can see where I stand among fellow Americans.
- As a user, I want to take a fun quiz to test my knowledge about the presidential candidates.
- As a user, I want to participate in discussions about the 2024 Presidential Election.

## Strategy

The goal of this project is to create an informative and engaging website about the 2024 Presidential Election. The website should appeal to users who are interested in politics and enjoy humor. The primary call-to-action is for users to vote for their preferred candidate, with a secondary call-to-action to take quizzes and participate in discussions which will be featured in a later update due to the complexity of databases and of course, issues with Node.js and MongoDB which I did try to incorporate into the website but went down a rabbit hole, but for future updates I will incorporate the community features and will create login forms and servers where a community can engage with other members.


## Scope
The scope of this project includes:

- Designing and developing a responsive website using HTML, CSS, and JavaScript
- Creating a clean and humorous layout with easy-to-read typography
- Allowing users to vote (for Fun not real-time polls), take quizzes, and participate in discussions I will release the community feature at a later date


### Structure
The website has a simple structure for ease of navigation:
- Header: Contains navigation links.
- Main: Features sections for content including voting, quizzes, and discussions.
- Footer: Includes social media links and contact information. Regarding social  media, the links to the social media are there but I have not yet got around to making the social media profiles.
  

## Surface

The surface of the website includes:

Typography: Arial, sans-serif
Colors: #f4f4f4 (background), #333 (text), #fff (social media icons)
Imagery: A hero image related to the presidential election
Design: Clean and humorous layout with easy-to-read typography


## Typography

The website uses Arial, sans-serif for a clean, readable appearance.


## Colour Scheme

Here is the color scheme for the provided CSS file:

### Background Colors
- **General Background**: `#f8f9fa`
- **Header Background**: `#007bff`
- **Quiz Container Background**: `#fff`
- **Footer Background**: `#343a40`
- **Footer Bottom Background**: `#23272b`

### Text Colors
- **General Text**: `#333`
- **Header Text**: `#fff`
- **Quiz Container Heading**: `#007bff`
- **Quiz Button Text**: `#fff`
- **Footer Text**: `#fff`
- **Footer Section Heading**: `#f8f9fa`

### Border Colors
- **Quiz Container Border**: `#ddd`
- **Footer Section Heading Border**: `#007bff`

### Button Colors
- **Quiz Button Background**: `#007bff`
- **Quiz Button Hover Background**: `#0056b3`

### Link Colors
- **Navigation and Footer Links**: `#fff`
- **Footer Section Links**: `#007bff`
- **Footer Section Links Hover**: `#0056b3`

### Shadow
- **Quiz Container Box Shadow**: `rgba(0, 0, 0, 0.1)`

### Example Color Swatch
![Color Swatch](https://www.colorhexa.com/f8f9fa.png)
![Color Swatch](https://www.colorhexa.com/007bff.png)
![Color Swatch](https://www.colorhexa.com/333333.png)
![Color Swatch](https://www.colorhexa.com/ffffff.png)
![Color Swatch](https://www.colorhexa.com/343a40.png)
![Color Swatch](https://www.colorhexa.com/23272b.png)
![Color Swatch](https://www.colorhexa.com/dddddd.png)
![Color Swatch](https://www.colorhexa.com/0056b3.png)

And for the other 2 web pages
Here is the color scheme for the provided CSS file:

### Background Colors
- **Body Background**: `#f8f9fa`
- **Header Content Background**: `#333`
- **Navigation Background**: `#444`
- **Navigation Link Hover Background**: `#555`
- **Home Content Container Background**: `#f9f9f9`
- **Footer Background**: `#333`
- **Footer Bottom Border**: `#444`

### Text Colors
- **General Text**: `#333`
- **Header Content Text**: `#fff`
- **Navigation Link Text**: `#fff`
- **Footer Text**: `#fff`
- **Footer Bottom Text**: `#aaa`

### Header Title Text
- **Header Title Text**: `#fff`

### Footer Section Headings
- **Footer Section Heading Text**: `#ffdd57`

### Footer Social Media Links
- **Social Media Links**: `#ffdd57`
- **Social Media Links Hover**: `#fff`

### Shadows
- **Header Content Box Shadow**: `rgba(0,0,0,0.2)`
- **Navigation Box Shadow**: `rgba(0,0,0,0.2)`
- **Home Content Container Box Shadow**: `rgba(0, 0, 0, 0.1)`

## Imagery

## 🧠 A Note on Imagery, JavaScript, and Me Own Sanity

Right, so – let’s just get this out of the way: **there’s no imagery**.  
Not because I’m lazy (though fair play if you guessed that), but because this project was haunted. Genuinely. Cursed. Like **Banshee-code poltergeist** levels of chaos.

### The JavaScript?  
Wouldn’t behave.  
It kept breaking things like a drunk uncle at a communion.  

One minute it’s running grand, the next the **pie chart disappears**, the **footer decides it wants to live on top of everything like a dictator**, and HTML just stands there going,  
> “Not my problem, pal.”

---

## 🎥 The Video Situation

I tried to compensate for the visual tragedy by embedding a **video** – y’know, bring some life into it.  
Did it load?  
**Did it hell.**

At this point, I’ve given up.  
Not forever – just until I have **more time**, **more patience**, and **more Guinness** at home.  
Which I don’t.  
All I have is a **box of Lidl cornflakes** and a **Wi-Fi signal powered by grief**.

---

## ⏱️ But Wait – There’s a Timed Quiz!

Yes. In the middle of this visual mayhem, I still managed to build a **timed quiz**.  
It works!  
Mostly.

It’s like a **confused pensioner crossing a motorway** – slow, stubborn, but eventually gets to the other side.  

The JavaScript needs tweaking – not just tweaks, really – more like **therapy**.  
But I’ll get there.  
**One callback function at a time.**

---

## ⚠️ Final Thoughts

So if you’re reading this, dear examiner, and wondering:

> “Why is there no image? Why is the video not working? Why is the footer eating the chart?”

Please understand:

I **did try**.  
I **fought the code**. I **prayed**. I **wept**.  
At one point I started shouting at my screen like it owed me money.

But I’m still here.  
And the **quiz works**.  
And someday soon, when I recover and the **Guinness flows freely again**,  
I’ll fix those images.  
I’ll tame the JavaScript.  
And the footer?  
I’ll **bury it with a shovel** in the **digital bog** it crawled out of.

Go easy on me. Or don’t.  
Either way – **enjoy the quiz**, and **mind yourself**.


## Design
### Wireframes
- [Righteous Resurgence](assets/images/wire1.png)
- [quiz](assets/images/wire2.png)
- [sleepy joe](assets/images/wire3.png)

### Typography
The website uses Arial, sans-serif for a clean, readable appearance.

### Colour Scheme
The color scheme includes:
- Background: #f4f4f4
- Text: #333
- Social Media Icons: #fff

## Features

### Current Features
- **Responsive Design:** Ensures the site is functional on all devices.
- **Navigational Components:** Easy-to-use header and footer for site navigation.
- **Social Media Integration:** Links to social platforms for enhanced connectivity.

### Future Enhancements
- ** Real time data results for election probability
- **E-commerce Functionality:** To sell Trump T-shirts -related products.
- **Multi-Language Support:** To cater to a global audience.

## Technologies Used
- **HTML5** and **CSS3** And **javascript** : For structuring and styling the website.
- **Font Awesome**: For icons.
- **GitHub**: For hosting and version control.
- **Google Fonts**: For custom fonts.
- **Chrome DevTools**: For debugging and testing.c

## Deployment

### Steps to Deploy on GitHub Pages
1. **Create a GitHub Repository**.
2. **Prepare the project**: Ensure all files including `index.html` are in the root directory.
3. **Push to GitHub**: Use Git commands to push your project.
4. **Enable GitHub Pages** through the repository settings.
5. **Custom Domain (Optional)**: Configure if desired.

More details on these steps are available in the GitHub documentation.

## Testing
## lighthouse :
  - - ![Lighthouse Testing](assets/images/lh1.png)
  - - ![Lighthouse Testing](assets/images/lh2.png)
  - - ![Lighthouse Testing](assets/images/lh3.png)
  - - ![Lighthouse Testing](assets/images/lh4.png)
  - - ![Lighthouse Testing](assets/images/lh5.png)
  - - ![Lighthouse Testing](assets/images/lh6.png)
  - - ![Lighthouse Testing](assets/images/lh7.png)
  - - ![Lighthouse Testing](assets/images/lh8.png)
  - - ![Lighthouse Testing](assets/images/lh9.png)
  - - ![Lighthouse Testing](assets/images/lh10.png)
  - - ![Lighthouse Testing](assets/images/lh11.png)
   
  ## Further Testing on different devices :
  - -![multiple device testing](assets/images/s1.png)
  - -![multiple device testing](assets/images/s2.png)
  - -![multiple device testing](assets/images/s3.png)
  - -![multiple device testing](assets/images/s4.png)
  - -![multiple device testing](assets/images/s5.png)
  - -![multiple device testing](assets/images/s6.png)
  - -![multiple device testing](assets/images/s7.png)
  - -![multiple device testing](assets/images/s8.png)




  








**Index HTML Page for desktop view


##Validation Testing:

## Javascript Validation Check:
 - -![validation](assets/images/jsval1.png)
 - -![validation](assets/images/jsval2.png)
 - -![validation](assets/images/jsval3.png)


## HTML Validation Check:
 - -![validation](assets/images/htmlval1.png)
 - -![validation](assets/images/htmlval2.png)
 - -![validation](assets/images/htmlval3.png)



## CSS Validation Check:

 - -![validation](assets/images/css1.png)
 - -![validation](assets/images/css2.png)


## Credits

- [Black Box AI](https://www.blackbox.ai/)
- [OpenAI Code Examples](https://chat.openai.com/)
- [Fooocus Project on Colab](https://colab.research.google.com/github/lllyasviel/Fooocus/blob/main/fooocus_colab.ipynb)
- [How to write good commit messages](https://cbea.ms/git-commit/#separate)
- [W3Schools HTML and CSS Tutorials](https://www.w3schools.com/html/)

