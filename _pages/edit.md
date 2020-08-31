---
layout: page
title: Edit
permalink: /edit
unlisted: true
---
We write the content for the pages in Markdown. It is mostly just plain text. You will have to [learn Markdown](https://www.markdowntutorial.com/) in order to write content for the site.

Go to [the repository](https://github.com/irvington-math-club/irvington-math-club.github.io) to edit.

You have to make a GitHub account before you can make any edits. Tell your account name to the primary website admin, then they'll give you edit access.

## Posts

Posts are individual posts tagged with a date and category

### Editing an existing post

If you look at the [list of posts](https://github.com/irvington-math-club/irvington-math-club.github.io/tree/master/_posts),
click a post to select it. To the right, there's a button to edit and to delete.

Click the edit button. At the top, there are some things to change:

 1. Change the title
 2. Change the date. This affects sorting and stuff
 3. Change the category if you want. You can put anything for the category

Then you can edit the main message below. Press "preview changes" anytime to
view what most of the post will look at.

Once you're done, press "Commit changes" to deploy the content. It should appear
on the site soon.

### Making a new post

Go to the [list of posts](https://github.com/irvington-math-club/irvington-math-club.github.io/tree/master/_posts) and click "Create new file."

  1. Make sure to name your file with the date: in the format `"2019-08-28-filename.md"`. Remember the `.md` at the end and the date.
      Labelling with the date helps keep the posts sorted properly.
  2. Copy in the contents of [a good post](
  https://github.com/irvington-math-club/irvington-math-club.github.io/edit/master/_posts/2019-08-17-see-us-at-MAZE-day.md), then follow the editing instructions above

## Pages

Pages have no date or category, but they have permalinks (permanent links) to refer to with.
There should be very few pages -- most content is time sensitive and should be posts.

### Editing an existing page

Editing a page works similar to editing a post. The [list of pages](https://github.com/irvington-math-club/irvington-math-club.github.io/tree/master/_pages) looks very similar, except these do not have dates.

When you edit these, make sure to change:

  1. the title
  2. the permalink (Should look like `"/edit"`)
  3. Whether it is unlisted (`true` or `false`)

### Making a new page

Go to the [list of pages](https://github.com/irvington-math-club/irvington-math-club.github.io/tree/master/_pages) and click "Create new file."

  1. No date here, name it like `"filename.md"` with a `.md` extension.
  2. Copy in the contents of [a good page](https://github.com/irvington-math-club/irvington-math-club.github.io/edit/master/_pages/edit.md) then follow the editing instructions above.

## Redirects

A redirect works like a Tinyurl and automatically redirects to another page. Presently, irvingtonmath.club/repo redirects to this GitHub repository.

Simply:

 - duplicate an [existing redirect](https://github.com/irvington-math-club/irvington-math-club.github.io/tree/master/_redirects).
 - edit the name of the file (must include `.html` at the end)
 - edit the `permalink` field, e.g. `/repo` would be accessed as `irvingtonmath.club/repo`. This should meet standards for a URL, such as no spaces, and it should not contain another forward slash (`/`).
 - edit the `redirect_to` field with the desired URL (including `http(s)://`)

### Advanced work

For more complex work, clone the repository to your computer and make edits locally. To see live changes, use

```
bundle exec jekyll serve
```

You will need to [set up Jekyll](https://jekyllrb.com/docs/) first.
