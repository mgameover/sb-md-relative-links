const rr = require("rootrequire");
const path = require("path");
const replace = require('gulp-replace');

//Patch for https://github.com/storybookjs/storybook/issues/14360
module.exports = gulp => {
    const patchTask = "patch:storybook";

    const patchedFunction = `
var _patchedLink = function Link(_ref8) {
    var input = _ref8.href,
        children = _ref8.children,
        props = _objectWithoutProperties(_ref8, ["href", "children"]);
    var storybookBaseUrl = typeof window !== 'undefined' ? (window.parent.document.location.origin + window.parent.document.location.pathname) : '';

    var isStorybookPath = /^\\//.test(input);
    var isAnchorUrl = /^#.*/.test(input);
    var href = isStorybookPath ? (storybookBaseUrl + "?path=" + input) : input;
    var target = isAnchorUrl ? '_self' : '_top';
    return /*#__PURE__*/React.createElement("a", _extends({
        href: href,
        target: target
    }, props), children);
};
_patchedLink.displayName = "Link";
`;
    const source = path.join(rr, 'node_modules/@storybook/components/dist/esm/typography/');
    const target = path.join(source, 'DocumentFormatting.js');

    gulp.task(patchTask,
        () => {

            return gulp.src(target)
                .pipe(replace(/^export\svar\sA\s?=\s?styled\(Link\)/gm, patchedFunction + 'export var A = styled(_patchedLink)'))
                .pipe(gulp.dest(source));
        },
        done => {
            console.log(`${target} has been patched`);
            done();
        });

    return [patchTask];
};
