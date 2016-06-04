# Chapter 2 - Browsers

Before the web itself are ways to get there.

<aside>For a seriously in-depth explanation read Tali Garsiel's <a href='http://taligarsiel.com/Projects/howbrowserswork1.htm' title='How Browsers Work by Tali Garsiel'>"How Browsers Work"</a>.</aside>

When you type a URL into your browser's address bar, your browser contacts the Domain Name System. This is essentially a giant list of URLs and associated IP Addresses. Next your browser takes the IP Address given by the Domain Name System and contacts it. This IP Address is the unique identifier for a web server, which is a computer setup to handle web pages. When the web server is contacted it looks up whatever page the browser is asking for and gives it to the browser.

<aside>For more information, check out <a href='http://technet.microsoft.com/en-us/library/cc772774(v=ws.10).aspx' title='How DNS Works'>Microsoft's explanation</a> of DNS.</aside>

Let's review:

- Your browser contacts the Domain Name System and asks for an IP Address for the URL you type in.
- The Domain Name System gives the browser the IP Address, and your browser goes to that address.
- Your browser requests the web page you want, and the web server at the IP Address gives that page to the browser.

That's how a page is accessed.

## Browser Differences

That's a pretty standard process, and the various internet browsers around don't differ much in how they do all of that stuff. But when the web server gives the browser the web page you asked for, it isn't usually in a nice format the browser can immediately display. It's in something like HTML and CSS, which need to be processed by the browser before they can be displayed. That's where browsers start to get different.

<aside>Browser rendering engines have been in flux lately. If you're interested, <a href='http://www.theguardian.com/technology/2013/apr/05/blink-google-rendering-browser' title='The Browser Wars Are Back' target='_blank'>learn more</a>.</aside>

Each browser contains what is called a rendering engine (or a layout engine). The rendering engine is the part of the browser that processes code and turns it into something displayable. Currently there are four main rendering engines: Webkit, Gecko, Trident, and Blink. Their usage is as follows:

Webkit: Safari and Opera
Gecko: Firefox
Trident: Internet Explorer
Blink: Chrome

Each of these rendering engines handles the rendering of web pages differently, and so results may vary between different engines.

But wait? Isn't there a specification for all this stuff? How can they all be different?

The answer is complicated.

<div class='exercise'>
<h3>Exercise 2.1</h3>
Do some research and make a list of three browser differences.
<div class='answer'>
<h3>Answer</h3>
There are many different answers to this, but here are a few:
<ul>
<li>In Firefox <code class='language-css'>line-height</code> doesn't affect the padding of inline elements. In other browsers it does.</li>
<li>In Internet Explorer 7, <code class='language-css'>list-style-image</code> doesn't work if the list item is floated.</li>
<li>Internet Explorer 7 doesn't support <code class='language-css'>min-height</code>.</li>
<li>Safari doesn't support Feature Queries.</li>
<li>Firefox supports <code class='language-css'>border-box: padding-box;</code>, but only with the <code class='language-css'>-moz-</code> prefix. Other browsers don't support it at all.</li>
<li>Firefox has partial support for HTML context menus. Other browsers have none.</li>
</ul>
These may not mean much to you now, but they should illustrate the level of difference between browser's HTML and CSS implementations.
</div>
</div>
<h2 id='browsers-and-the-spec'>
<a href='#browsers-and-the-spec' title='Browsers and the Spec'>Browsers and the Spec</a>
</h2>
<div class='reference-container'>
<aside>
Learn the history of the W3C and WHATWG in Jeremy Keith's "<a href='http://alistapart.com/article/a-brief-history-of-markup' title='A Brief History of Markup, by Jeremy Keith'>A Brief History of Markup</a>".
</aside>
There are in fact specifications for both HTML and CSS. Both are maintained by an organization called the <abbr title='World Wide Web Consortium'>W3C</abbr> &mdash; in partnership with the <abbr title='Web Hypertext Application Technology Working Group'>WHATWG</abbr> for the HTML spec. These specifications are worked on in a collaborative process between a large number of stakeholders, and these specifications are intended to provide exact explanations of how implementors &mdash; read: people who make browsers &mdash; should handle the code they receive. However, not everything gets implemented the way the spec-writers want it to, usually due to strategic decisions by the browser makers. So we end up with a spec that generally matches what the browsers do, but with enough differences between browsers to cause some headaches.
</div>
<div class='exercise' data-exercise-id='2.2'>
<h3>Exercise 2.2</h3>
Find out what the difference is between the W3C and the WHATWG.
<div class='answer'>
<h3>Answer</h3>
The WHATWG was made by people unhappy with the W3C. Unlike the W3C, which is a slow-moving consensus-based organization, the WHATWG is a fast-moving organization run by a single editor named Ian Hickson. While the WHATWG does discuss all proposals and receive input from many stakeholders, all decisions are subject to final approval by the editor.
More simply, the WHATWG uses a "commit then review" methodology, while the W3C uses a &ldquo;review then commit&rdquo; one.
</div>
</div>
<div class='reference-container'>
<aside>
Check out <a href='http://caniuse.com/' title='caniuse.com' target='_blank'>caniuse.com</a> for detailed reports on browser support.
</aside>
How do we work in a world like this? The answer is simple: <em>the spec doesn't matter, what's implemented does</em>.
</div>
That may seem counter-intuitive, but remember, the spec isn't for web developers, it's for the browser makers. No matter how great the proposed features are, if they don't work in a browser your site's users regularly use, you can't use them.
So what makes the browsers so different, and how is a page actually displayed once retrieved by the browser? The answer is rendering engines.
<h2 id='rendering-engines'>
<a href='#rendering-engines' title='Rendering Engines'>Rendering Engines</a>
</h2>
<div class='reference-container'>
<aside>
For a more in-depth explanation, check out <a href='http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/' title='How Browsers Work - HTML5 Rocks'>"How Browsers Work"</a> by HTML5 Rocks.
</aside>
Rendering engines are the part of a web browser that process the files the browser retrieves and turns them into something that can be displayed. In the case of HTML and CSS, the process works like this:
</div>
<figure class='image'>
<img alt="A diagram depicting Webkit's rendering flow." src='&lt;!-- @path webkit.webp --&gt;'>
<figcaption>
Webkit's rendering flow.
</figcaption>
</figure>
<ol>
<li>
First the HTML and CSS are parsed
<ol>
<li>The HTML is turned into a DOM tree, a tree of parent and children nodes</li>
<li>The CSS is turned into a collection of Style Rules, also called the <abbr title='CSS Object Model'>CSSOM</abbr></li>
</ol>
</li>
<li>The Style Rules are applied to the DOM tree, creating the render tree</li>
<li>The render tree is laid out on the screen, painted, and displayed</li>
</ol>
That's the rendering flow for Webkit, but the general flow is similar between browsers. Where the browsers truly diverge is in what HTML, CSS, and Javascript features they have implemented.
<div class='exercise' data-exercise-id='2.3'>
<h3>Exercise 2.3</h3>
Find out how the rendering flow for Gecko works. How is it different from the one shown above?
<div class='answer'>
<h3>Answer</h3>
<figure class='image'>
<img alt="A diagram depicting Gecko's rendering flow." src='&lt;!-- @path gecko.jpg --&gt;'>
<figcaption>
Gecko's rendering flow.
</figcaption>
</figure>
The biggest difference between Webkit and Gecko's rendering flow is that Gecko has an intermediate phase between parsing the HTML and constructing the DOM tree, called the "Content Sink".
</div>
</div>
<h2 id='caching'>
<a href='#caching' title='Caching'>Caching</a>
</h2>
In "<a href='#accessing-a-page' title='Accessing A Page'>Accessing a Page</a>" you learned how web browsers load pages, but that's now always how it works. To improve load times web browsers store documents and if those documents are recent, use them instead of accessing the page again. This is called Caching and it helps browsers speed up access to sites you visit most often. However, it can also cause development headaches when you update a page but the browser loads a cached version instead. How do we avoid that?
The answer is cachebusting: a practice to force the browser to load a new version of a document. There are two easy ways to implement cachebusting: query strings and mod_rewrite. The first should work no matter what server type you are using, the second is restricted to an Apache server.
<div class='reference-container'>
<aside>
The query string method is problematic. Read <a href='http://stevesouders.com/blog/2008/08/23/revving-filenames-dont-use-querystring' title='Revving Filenames: dont use querystring'>Steve Souders' article</a> to learn more.
</aside>
The query string approach uses query strings &mdash; normally used for passing information between pages &mdash; to apply versions to filenames. Each time the file is updated the query string is changed. When the browser checks the cached page the query string of the old page doesn't match the one for the new page, so the new page is loaded.
</div>
<div class='exercise' data-exercise-id='2.4'>
<h3>Exercise 2.4</h3>
Find out what the parts of a URL are. Which part is the query string?
<div class='answer'>
<h3>Answers</h3>
Take the URL <code class='language-http'>http://v.mzw.co.uk:80/play/index.html?id=3&lang=en#loc</code>:
<ul>
<li>The protocol is <code class='language-http'>http</code></li>
<li>The hostname is <code class='language-http'>v.mzw.co.uk</code></li>
<li>The subdomain is <code class='language-http'>v</code></li>
<li>The domain name is <code class='language-http'>mzw.co.uk</code></li>
<li>The <abbr title='Top Level Domain'>TLD</abbr> is <code class='language-http'>uk</code></li>
<li>The <abbr title='Second Level Domain'>SLD</abbr> is <code class='language-http'>co.uk</code></li>
<li>The port is <code class='language-http'>80</code></li>
<li>The path is <code class='language-http'>play</code></li>
<li>The filename is <code class='language-http'>index.html</code></li>
<li>The query string is <code class='language-http'>id=3&lang=en</code></li>
<li>The fragment identifier is <code class='language-http'>loc</code></li>
</ul>
</div>
</div>
The mod_rewrite method is similar, but actually uses different filenames &mdash; without query strings &mdash; which are rewritten in the browser to the intended filename. On an Apache server, the code to do so looks like this:
<pre><code class='language-http'>&lt;IfModule mod_rewrite.c&gt;
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.+)\.(\d+)\.(js|css|png|jpg|gif)$ $1.$3 [L]
&lt;/IfModule&gt;</code></pre>
Enable mod_rewrite on your Apache server and add that to your server configuration (either the global <code class='language-http'>httpd.conf</code> file or a local <code class='language-http'>.htaccess</code> file).
<h2 id='review'>
<a href='#review' title='Review'>Review</a>
</h2>
<ol class='review'>
<li class='review-item'>
Web browsers get pages by requesting an IP from the Domain Name System and then connecting to a server that returns the page.
</li>
<li class='review-item'>
Browsers are all a little different, but still work on implementing the same specifications.
</li>
<li class='review-item'>
Rendering engines are incredibly similar in concept, but vary widely in the way they implement the spec.
</li>
<li class='review-item'>
Caching is an important method for browsers to speed up page loads, but cachebusting is often necessary when developing a website.
</li>
<li class='review-item'>
Cachebusting can be achieved in several ways, each with their own pros and cons.
</li>
</ol>
<a class='button block' href='/html' title='HTML'>Next Chapter: HTML &rarr;</a>


</main>
</div>

<footer class='footer-container'>
<a class='nav-button' data-hook='show-toc'>View the Table of Contents</a>
<div class='footer'>
<div class='about vcard'>
The Web Development Field Guide is a project by <a class='url fn' href='/author' target='_blank' title='Meet the Author'>Andrew Brinker</a>, &copy; 2013 all rights reserved.
</div>
<div class='footer-notes'>
You are reading <span class='version-number'>version 1.0</span> of the field guide. It is stable for now, but the next major version is in the works.
</div>
</div>
</footer>

<script src='//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'></script>
<script>window.jQuery || document.write('<script src="/assets/js/vendor/jquery-1.9.1.min.js"><\/script>')</script>
<script src="/assets/js/plugins.js"></script>
<script src="/assets/js/main.js"></script>
<script>
(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
e=o.createElement(i);r=o.getElementsByTagName(i)[0];
e.src='//www.google-analytics.com/analytics.js';
r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
ga('create','UA-13250048-8');ga('send','pageview');
</script>

</body>
</html>
