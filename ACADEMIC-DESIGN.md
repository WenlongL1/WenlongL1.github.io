# Academic homepage

The redesign uses the existing GitHub Pages / Jekyll build. No JavaScript framework or separate hosting service is required.

## Local preview

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`. Check production output with `bundle exec jekyll build`.

## Content and styling

- `_pages/about.html`: homepage sections, research projects, education, honors, and contact links.
- `_publications/`: paper records. The homepage and publication list share `_includes/academic-publications.html`.
- `_pages/research-electric-bus.html`: complete research case study, preserving the original figures.
- `_pages/cv.html` and `file/CV.pdf`: CV page and original PDF.
- `_layouts/academic.html`: shared navigation, metadata, and footer.
- `assets/css/academic.css` and `assets/js/academic.js`: responsive styles and progressive navigation enhancement. Content and links remain available without JavaScript.

Original `/about/`, `/about.html`, `/publications/`, `/cv/`, `/resume`, and paper URLs remain available. All original image files and the CV PDF are retained. Research and experience text comes from the existing homepage and CV. Degree names are spelled out where the sources use different abbreviations. Publication authors follow the existing paper page and DOI metadata.

Development branch: `redesign/academic-homepage`. Review before merging into the repository's default branch, `master`.
