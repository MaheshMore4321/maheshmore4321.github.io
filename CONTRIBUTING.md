# How to contribute

I'm really glad you're reading this, because we need volunteer developers to help this project come to fruition.

This is free, open-source software. If you'd like to support the development of future projects or say thanks for this one.

Contributions, issues and feature requests are welcome.<br />
Feel free to <p align="center">
	·&nbsp;<a href="https://github.com/MaheshMore4321/maheshmore4321.github.io/issues">Check Issues Page</a>
	·&nbsp;<a href="https://github.com/MaheshMore4321/maheshmore4321.github.io/issues/new/choose">Report Bug</a>
    ·&nbsp;<a href="https://github.com/MaheshMore4321/maheshmore4321.github.io/issues/new/choose">Request Feature</a>
</p>

### Financial Contributors
Become a financial contributor and help us sustain our community.
</br>
<a href="https://www.patreon.com/maheshmore4321">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="150">
</a>
&nbsp;<a href="https://www.paypal.me/maheshmore4321"><img src="https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white" width="113"/>
</a> 

### Coder Contributors
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
</br></br>
Your contributions are always welcome! Kinldy find below steps & for more info read [`CONTRIBUTING`](https://github.com/MaheshMore4321/maheshmore4321.github.io/blob/master/CONTRIBUTING.md), [`CODE OF CONDUCT`](https://github.com/MaheshMore4321/maheshmore4321.github.io/blob/master/CODE_OF_CONDUCT.md), and the process for submitting pull requests to us. :tada:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Add some NewFeature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request with comprehensive description of changes
## Testing

We have a handful of Cucumber features, but most of our testbed consists of RSpec examples. Please write RSpec examples for new code you create.

## Submitting changes

Please send a [GitHub Pull Request](https://github.com/MaheshMore4321/maheshmore4321.github.io/pulls/) with a clear list of what you've done (read more about [pull requests](http://help.github.com/pull-requests/)). When you send a pull request, we will love you forever if you include RSpec examples. We can always use more test coverage. Please follow our coding conventions (below) and make sure all of your commits are atomic (one feature per commit).

Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should look like this:

    $ git commit -m "A brief summary of the commit
    > 
    > A paragraph describing what changed and its impact."

## Coding conventions

Start reading our code and you'll get the hang of it. We optimize for readability:

  * We indent using two spaces (soft tabs)
  * We use HAML for all views
  * We avoid logic in views, putting HTML generators into helpers
  * We ALWAYS put spaces after list items and method parameters (`[1, 2, 3]`, not `[1,2,3]`), around operators (`x += 1`, not `x+=1`), and around hash arrows.
  * This is open source software. Consider the people who will read your code, and make it look nice for them. It's sort of like driving a car: Perhaps you love doing donuts when you're alone, but with passengers the goal is to make the ride as smooth as possible.
  * So that we can consistently serve images from the CDN, always use image_path or image_tag when referring to images. Never prepend "/images/" when using image_path or image_tag.
  * Also for the CDN, always use cwd-relative paths rather than root-relative paths in image URLs in any CSS. So instead of url('/images/blah.gif'), use url('../images/blah.gif').


 
