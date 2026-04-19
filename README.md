# Vasant Rajadhyax - Interactive ML Portfolio

**Welcome to the source code for my interactive portfolio.**
This is a Single-Page Application (SPA) designed to showcase my skills, experience, and projects as a Data Scientist and Machine Learning Engineer.It is built using HTML5, Tailwind CSS (for styling and dark mode), and Vanilla JavaScript (with Chart.js for data visualization).

---

## 🛠️ 1. How to Separate HTML and JavaScript (Recommended)

To make future updates easier, you can separate the structure (HTML) from the logic and content (JavaScript). Follow these steps on your computer:
1. **Create a Folder**: Create a new folder on your computer named portfolio.
2. **Save HTML**: Inside that folder, create a file named index.html and paste the code provided by the AI into it.
3. **Create JS File**: Create a second file in that same folder named script.js.
4. **Extract Logic**: * Open index.html in a text editor (like Notepad, VS Code, or Sublime Text).
 - Scroll all the way to the bottom and find the <script> tag. 
 - Cut (don't copy, cut) everything between <script> and </script>.
 - Paste all that code into your new script.js file and save it.
5. **Link Them**: Go back to index.html. Replace the empty <script></script> tags at the bottom with this line:

```
<script src="script.js"></script>
```
6. Save. You now have a clean HTML file and an easily editable JS file!

---

## 📝 2. How to Update Your Content in the Future

Whenever you finish a new project, get a new job, or learn a new skill, you don't need to touch the HTML. You only need to edit the data at the very top of your script.js file.

Open script.js and look for the "EDIT YOUR CONTENT HERE" section. You will see three data blocks:
 - **skillsData**: Update the labels (names of skills) and data (your proficiency percentage 0-100). Keep the number of labels and data points the same.
 - **experienceData**: Add a new block enclosed in { } for a new job. Just copy the format of an existing job, change the title, date, company, bullets, and tech stack tags.
 - **projectData**: Add a new block enclosed in { } for a new personal project. Make sure the category matches one of the filter buttons (nlp, mlops, or coreml).

---
 
## 🚀 3. How to Host on GitHub (Free Web URL)

You can host this website completely for free using GitHub Pages. By naming your repository a specific way, GitHub will automatically turn it into a live website.

### Step-by-Step Deployment:
1. **Log in to GitHub**: Go to GitHub and log into your account (vasant1012).
2. **Create a New Repository**: Click the "+" icon in the top right corner and select "New repository".
3. Name it Perfectly: This is the most crucial step. Name your repository exactly this:vasant1012.github.io(Because your username is vasant1012, this tells GitHub to make it your main website).
4. **Visibility**: Make sure it is set to Public.
5. **Create**: Click the "Create repository" button.
6. **Upload Your Files**: * On the next screen, click the link that says "uploading an existing file". 
 - Drag and drop your index.html, script.js, and this README.md file into the box.
 - Click the green "Commit changes" button at the bottom.
7. **Wait a Minute**: GitHub will take a minute or two to build your site behind the scenes.
8. View Your Website: Open a new browser tab and go to: *https://www.google.com/search?q=https://vasant1012.github.io*

**Congratulations!** Your interactive portfolio is now live on the internet. Whenever you want to update your site, just edit the files directly on GitHub or upload your new versions to overwrite the old ones—the live website will update automatically!
