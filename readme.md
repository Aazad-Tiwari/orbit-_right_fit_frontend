# Right Fit Matcher 2.0

**Right Fit Matcher 2.0** is a university recommendation tool that helps students identify the best-fit universities based on their **GMAT**, **GPA**, and **work experience**.  

It goes beyond simple matching — providing a clear, data-backed comparison between a student's profile and each university’s average intake data.

---

## Live Links

- **Frontend (Vercel):** [https://orbit-right-fit-frontend.vercel.app/](https://orbit-right-fit-frontend.vercel.app/)  
- **Backend (Render):** [https://right-fit-backend.onrender.com/](https://right-fit-backend.onrender.com/)

---

## Overview

Right Fit Matcher enables users to:

- Enter their **GMAT**, **GPA**, and **Work Experience**
- Instantly see universities ranked by **match score (0–100)**
- Get clear insights on how their stats compare to the average applicant
- Click **“More Info”** on each university card to view detailed information in a clean modal

The project focuses on delivering an intuitive, minimal, and responsive UI — ensuring the experience feels smooth and professional.

---

## Matching Logic

Each university’s data includes average GMAT, GPA, and experience.  
The backend calculates a **weighted fit score** based on how close a user’s profile is to these averages.

For example:
- If your GMAT is slightly below average but your GPA is strong, the score balances accordingly.  
- Results are ranked from **most compatible** to **least compatible**.

---

## Tech Stack

**Frontend:** React (Vite) • Tailwind CSS • Context API  
**Backend:** Node.js • Express.js • PostgreSQL • Sequelize ORM  

---

## Data Source

All university data is pre-seeded from curated JSON data stored in the backend (`seed.js`).  
Each entry includes metrics such as average GMAT, GPA, and required work experience.


