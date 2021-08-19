# jsWindow
A skid from a phishing website that emulates an opened window. De-obfuscated to an extent and added much easier usage -- specifically, being able to set your own url.
**PRs/issues welcome!**

## IMPORTANT
This tool is NOT intended for phishing. Well, i mean, it is, but that's not why it's here. I put it here because the idea of pretending to have a window inside a webpage is really cool, and i wanted to skid it from a REAL phishing website. DO NOT PHISH USERS WITH THIS TOOL. I am not liable for any actions you might take with this project.

## Usage
The most important variable to keep in mind is `windowUrl`. This handles, unsurprisingly, the window url. NOTE - it will place it in a standard iframe, so if your website does not allow X-Frame-Options (or if you're accessing a different website), you'll run into issues.

### Bugs
 - The displayed url does not update when you click on links. This could be fixed by listening for the source of the iframe changing.
 - Favicons are currently broken and will default to luphoria.com/favicon.ico.
 - The title of the window I currently just set to windowUrl, while it should be the actual window title. If you're hosting this and making the FakeWindow point to your own website, it should be possible to actually access `foo.bar.iframe.document.head.title` with some additional code -- however I am personally not going to implement this.
 - The resize handles are literally one pixel width/height and are quite difficult to actually grab. Not really a "bug" per se, but it should be looked at.
