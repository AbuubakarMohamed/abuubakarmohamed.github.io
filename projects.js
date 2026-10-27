/*
  YOUR PROJECTS
  =============
  The Projects section on the site is built from this list.

  To add a project:
    1. Copy the TEMPLATE block below.
    2. Paste it inside the [ ] list (projects show in the order they appear here).
    3. Fill it in, remove the lines you don't need, and save.
    4. Commit and push:  git add -A ; git commit -m "Add project" ; git push

  Fields:
    title      (required) Project name.
    year       e.g. "2025"
    type       Short label, e.g. "Personal project", "Hackathon", "Coursework".
    featured   true = shown as the big card at the top. Use on one project at most.
    summary    (required) One or two sentences for the card.
    details    Longer paragraphs shown when someone clicks "Read more". A list of strings.
    tags       Tech used. These also become the filter buttons.
    image      Optional picture, e.g. "images/my-project.png" (put the file in the images folder).
    imageAlt   Short description of the picture, for screen readers.
    links      Optional. code = GitHub repo, live = a working demo.

  TEMPLATE (copy from the { to the }, including the comma):

  {
    title: "Project name",
    year: "2026",
    type: "Personal project",
    summary: "What it is and what it does, in a sentence or two.",
    details: [
      "Why you built it and how it works.",
      "Anything you're proud of or learned."
    ],
    tags: ["Python", "SQL"],
    image: "images/project-name.png",
    imageAlt: "Screenshot of the project",
    links: { code: "https://github.com/AbuubakarMohamed/repo-name", live: "" }
  },
*/

window.PROJECTS = [
  {
    title: "Outdoor Worker Location Tracker",
    year: "2024",
    type: "Final-year dissertation",
    featured: true,
    summary: "A full-stack system for keeping track of people working in the field: workers run an Android app that reports their location, and supervisors see everyone on a live map in a web dashboard.",
    details: [
      "Workers run an Android app that reports their location, and supervisors see everyone on a live map in a web dashboard.",
      "Both clients share a Firebase backend, so updates from the phone show up on the dashboard without a refresh. Mapping is built on the Google Maps API.",
      "It taught me how to take an idea from a blank repo to a working mobile app and web dashboard talking to the same backend."
    ],
    tags: ["Android", "Kotlin", "JavaScript", "Firebase", "Google Maps API"],
    image: "images/location-tracker.svg",
    imageAlt: "Architecture: Android app and web dashboard both connect to Firebase, with Google Maps for mapping",
    links: { code: "https://github.com/AbuubakarMohamed/outdoor-worker-location-tracker" }
  },
];
