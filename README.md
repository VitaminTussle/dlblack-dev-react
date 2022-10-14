# DLBlack.dev - Portfolio Site

DLBlack.dev serves as living, breathing proof of my programming prowess. It will continually be a work in progress as I come up with more things to add, and as I decide to experiment with or learn new technologies. This is ground zero, baby!

## Site structure

This app's paging is managed by the `react-router-dom` library. It has six pages, and is built with responsive design and user experience in mind (though mobile readiness comes after desktop completion). The nonogram page design was even explicitly approved by a UX-master-certified engineer.

### Home

The `home` page includes a picture of me and a brief summary of the type of content on each of the other pages. At the bottom are links to my professional socials. The summary dropdowns are implemented with careful state management and CSS transitions.

### Code

The `code` page is a componentized list of some of my programming projects. The list is non-exhaustive, but it shows some of the breadth and diversity of my skills. Each project is associated with a Github link for easy code viewing.

### Music

The `music` page is a componentized list of my public music endeavors. It contains basic sheet music projects at the moment, but as I work toward production and publication, more official _songs_ will be listed as well.

### Writing

The `writing` page is a componentized list of my various creative writing projects. It includes poems, short stories, and flash fiction. Each includes an associated download link if it is not currently under review at a literary magazine.

### Pockets

The `pockets` page is both my experimentation with `three.js` in its on-screen title, and a persuasive essay to convince people that the hot dogs and sandwiches debate is meaningless and we should just give them and similar foods a superclass to relate them.

### Nonogram

The `nonogram` page is my ground-up reconstruction of the nonogram/picross sudoku-esque puzzle game. It currently includes one solvable puzzle, but will soon include more and a submit-your-own-puzzle section. The submission section will act as my first expedition into Machine Learning as I plan to build a model that predicts if a person's puzzle contains... _inappropriate_ imagery. Not to laugh at. I swear. Kinda. Definitely mostly to keep the dataset as clean as possible. Mostly.

## Running the project locally

This project was built with `node 16.17.0^` and `npm 8.15.0^`, and those are the versions I would recommend for running it locally as well. To run it locally:

1. Clone the repository

2. Navigate to the folder and run `npm install`

3. `npm start`