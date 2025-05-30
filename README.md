 [https://righteous-resurgence-app-ec0a23350dfe.herokuapp.com/] <!-- Replace # with your live site link -->

## Brief Introduction

This is a comprehensive guide to the Righteous Resurgence website using HTML, CSS, and JavaScript. The website includes three main pages: Home, Presidents Test, and Quiz. The Home page introduces the main features of the website, the President's Test page includes a humorous quiz about presidential fitness, and the Quiz page tests users' knowledge about the 2024 presidential election.

## 🥴 Welcome to RIGHTEOUS RESURGENCE

This, dear examiner, is a *comprehensive* (ish) guide to the Righteous Resurgence website – built with HTML, CSS, JavaScript, and more caffeine than is medically advised.  

It includes three core pages:
- **Home** – where the journey begins.
- **Presidents Test** – a quiz full of satire and presidential nonsense.
- **Quiz Page** – where you’ll be grilled about the 2024 US presidential election like it’s the Leaving Cert but with more memes.

It’s basic. I know.  
**Design-wise it looks like a toaster built a website.**  
But I’m stressed out of me mind, haven’t slept since Project 3, and my **eyeballs feel like tiny dry Weetabix** from staring at the screen 24/7.

---

## 🔥 Major Update: Django + PostgreSQL Full-Stack Madness & Heroku Deployment

Because I *clearly hate myself*, I decided to upgrade the whole thing to a full-stack Django web app using Python, PostgreSQL, and Heroku.

Here’s what I did – or attempted to do – without going completely insane:

---

### ✅ What I Did (While Clinging to Sanity)
- Converted the static site into a full Django 5.2 project.
- Set up **PostgreSQL** using Heroku’s hobby-dev add-on because I love pain.
- Configured environment variables with `python-decouple` to hide sensitive info like it's state secrets.
- Added **WhiteNoise** because static files were acting like rebellious teenagers.
- Deployed to Heroku with **actual success** (after crying, shouting, praying, and briefly speaking to the modem like it was my therapist).
- Added **CKEditor** so the admin panel could edit articles without needing an exorcism.

---

### ⚠️ Challenges Faced (Also Known As Emotional Damage)

#### 🧱 Environment Setup Errors
**Problem:** DATABASES wasn’t defined in `settings.py`  
**Fix:** Defined the DATABASES dictionary like a good boy, **after hours of Googling and inner screaming.**

#### 💥 Deployment Issues on Heroku
**Problem:** `collectstatic` failed like a drunk fella at 2am trying to stand still.  
**Fix:** Set a proper `DATABASE_URL`, fixed the config vars, sacrificed a Mars bar to the Git gods.

#### 📦 Procfile Not Detected
**Problem:** Heroku looked at my Procfile and said, “Nah.”  
**Fix:** Fixed the syntax (`web: gunicorn righteousresurgence.wsgi`) and **actually committed the damn file to Git**, unlike the 14 times I forgot.

#### 🧼 Static Files… Again
**Problem:** Static files were refusing to load. Just blank. Like me brain.  
**Fix:** Installed **WhiteNoise**, set `STATICFILES_STORAGE` to `CompressedManifestStaticFilesStorage` and prayed to Saint Stack Overflow.

#### 📝 Admin Panel Woes
**Problem:** The admin panel looked like a 2005 Nokia menu. No rich text.  
**Fix:** Installed `django-ckeditor`, updated models to use `RichTextField()`, and boom – content creation, but make it glamorous.

---

## 😩 Final Reflections From a Broken Man

They said **“Python is easy to learn.”**  
I want names.  
Because **whoever said that has never met Django at 2am on a deadline.**

They said **“Once you understand Django's concept, you're grand.”**  
Right.  
Well after **1,000+ repositories, 73 nervous breakdowns**, and enough trial and error to qualify as an Olympic sport,  
I *think* I finally understand it.  
**But I’ve definitely lost at least two marbles and one sense of reality.**

So yes – it looks basic.  
It’s not shiny or sexy.  
But it works. It lives. It breathes. And it’s mine.  

I did it while stressed, under-caffeinated, over-coding, and **with the emotional stability of a wet tissue in a wind tunnel.**

Enjoy the quiz.  
Mind yourself.  
And for the love of God… **send Guinness.**



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

## 🤯 UX (User Experience)

Right. So let’s be honest here – this isn’t just a website. It’s a **comedy experiment wrapped in HTML, CSS, JavaScript, and the blood, sweat, and emotional breakdowns of a man who’s been staring at VS Code since Tuesday**.

The user experience is designed to be *intuitive*, *engaging*, and just the right amount of **“what the hell am I looking at?”**

- Clean layout (well, mostly).
- Easy-to-read text.
- A whole lotta humour.

Navigation is straightforward. Click a link. End up in a quiz. Or a news article. Or a political fever dream. It’s like *Black Mirror*, but with buttons that actually work (sometimes).

---

## 🤓 User Stories (or at least, attempts at humanity)

- *As a user*, I want to vote for who I think will win the 2024 Presidential Election, so I can feel like I participated in democracy… sort of.
- *As a user*, I want to take a quiz to test my knowledge and my sanity.
- *As a user*, I want to join a community of absolute **lunatics who take the piss out of everything**, and I mean *everything* – politics, celebrities, reality, even fonts.

---

## 🔧 Strategy (The Plan… and the Panic)

The goal here was simple:  
**Make a website about the 2024 US Election that’s informative, hilarious, and doesn’t explode.**

Main Call-to-Action:  
🗳️ *Vote for your preferred candidate!*  
Secondary:  
🧠 *Take quizzes!*  
Tertiary (aka “Coming Soon, I Swear”):  
🧑‍🤝‍🧑 *Join the comedy community from hell!*

I *did* try to build it with Node.js and MongoDB originally.  
Honestly? I fell so deep down that rabbit hole, I started hearing voices in JavaScript.

So I pivoted.  
**Django. PostgreSQL. Sanity held together by Blu Tack.**

---

## 🔙 Backend Features You Can Actually Use!

Here’s the mad thing:  
**I added a full Django backend.**

Yep. You can **log in**.  
Admins can even **create articles** using a lovely little CKEditor interface.  
Wanna try it? Go ahead – click **“News”** in the nav bar. You’ll see a **sample article** in there:

> “What If Donald Trump Became President & Commander-in-Chief of Ireland?”  
> *It’d be great craic. Go read it. Try not to cry from laughter. That’s the point of this site.*

In a future update – once I’ve regained the will to code again – users will be able to:
- **Sign up**
- **Join a community of comedians**
- **Post articles**
- **Take the mick out of absolutely everything**

Because this isn’t just satire.  
It’s a **digital therapy session disguised as a political website**.

---

## 📏 Scope

This project includes:

- A responsive (ish) site using HTML, CSS, JavaScript, Django, and PostgreSQL  
- A layout that’s clean and comedic (depending on your sense of humour and your blood sugar levels)  
- Voting (not legally binding – just for the craic)  
- Quizzes that will either teach you something or make you question everything  
- A News section populated by admin-created satire articles  
- A Django backend, login feature, and editor functionality  
- And future plans for a **community of piss-takers and satire specialists**

---

## 🧱 Structure

Simple and sane (or as sane as I could manage):

- **Header**: Navigation links. Self-explanatory. No dropdowns. I’m not a wizard.
- **Main**: All the content – voting, quizzes, articles, your existential dread.
- **Footer**: Placeholder links to social media.  
  And I mean placeholder – I haven’t made the accounts yet.  
  Priorities, ya know?

---

## 🎨 Surface

**Typography**: Arial, sans-serif.  
Classic. Functional. Not going to win awards, but won’t make your eyes bleed either.

**Colours**:
- `#f4f4f4` – calming, like a warm mug of beige.
- `#333` – dark, serious. Adds contrast. Also hides the tears.
- `#fff` – used for icons, buttons, and my hopes.

**Imagery**: There’s supposed to be a hero image.  
It exists… somewhere. Possibly on a corrupted USB stick in a parallel universe.

---

## ✍️ Typography

Arial, sans-serif.  
Why?

Because it’s **clean, safe, and doesn’t ask too many questions**.  
I was gonna use Google Fonts, but then Django gave me a migraine, and I chose peace.

---

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


  ## 😅 Final Thoughts

This site is built with:
- **Love**
- **Sarcasm**
- **Django**
- And a lot of **“Why isn’t this working!?”**

I’ve cried. I’ve screamed.  
I now **talk to Python like it’s a real person.**  
And after Project 3, I officially **lost my marbles**.

But it’s done. It works. It lives.

So read. Click. Laugh.  
Or just appreciate that **someone out there debugged for 9 hours just so you could take a Trump quiz in peace.**

---

**Mind yourself. Mind your code. And please, examiner... if you’ve smiled even once... give us a pass, will ya?**


