## Test story

Click the follwing link to reproduce the issue:

[test link](/docs/markdown--target)

The link above should navigate to

`http://localhost:6006/?path=/docs/markdown--target`

 but it goes to

`http://localhost:6006/iframe.html?path=/docs/markdown--target`.

**Issue**: `iframe.html` is being added to the url.
