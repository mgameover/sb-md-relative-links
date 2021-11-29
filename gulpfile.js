const gulp = require("gulp");

const patch = [require("./tasks/patch"),].map(task => task(gulp));
