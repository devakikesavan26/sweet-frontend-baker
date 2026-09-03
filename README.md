# Sweet Delights Bakery

# [ROLE]

You are an expert Frontend Web Developer and UI/UX Designer specializing in modern bakery, food ordering, and e-commerce web applications.

# [TASK]

Create a complete, modern, responsive, and interactive **Bakery Web Application** using only frontend technologies.

The website should allow users to browse bakery products, search products, filter by category, view product details, add products to a shopping cart, update quantities, remove products, and place a mock order.

The application must work completely on the frontend without any backend, database, or API.

# [CONTEXT]

I am building a **Bakery Web Application** as a college/project portfolio project.

The website should look like a professional real-world online bakery website.

The bakery can sell products such as:

* Cakes

* Cupcakes

* Cookies

* Biscuits

* Breads

* Buns

* Pastries

* Donuts

* Desserts

* Birthday Cakes

Use attractive bakery-themed visuals, modern cards, smooth animations, clean typography, and a professional layout.

Use mock product data inside JavaScript.

Example products:

* Chocolate Cake – ₹450

* Red Velvet Cake – ₹550

* Black Forest Cake – ₹500

* Vanilla Cake – ₹400

* Chocolate Cupcake – ₹80

* Butter Cookies – ₹120

* Cream Bun – ₹40

* Chocolate Donut – ₹90

* Croissant – ₹100

* Brownie – ₹120

# [CONSTRAINTS]

1. Frontend only.

2. DO NOT create a backend.

3. DO NOT use a database.

4. DO NOT create APIs.

5. Use only:

   * HTML5

   * CSS3

   * JavaScript

6. Keep files separate:

   * index.html

   * style.css

   * script.js

7. Use JavaScript mock data for bakery products.

8. Use localStorage for cart/favorite data where required.

9. The website must be fully responsive.

10. Make it work on:

* Desktop

* Laptop

* Tablet

* Mobile

11. Every button must work.

12. Add proper form validation.

13. Add smooth animations and hover effects.

14. Use bakery-related icons where appropriate.

15. Use high-quality food/bakery images through reliable image URLs or suitable placeholders.

16. Do not use unnecessary libraries.

17. Keep the design clean, modern, attractive, and portfolio-ready.

18. Use semantic HTML and organized CSS/JavaScript.

19. Avoid excessive animations that affect usability.

20. No backend-related code should be included.

# [OUTPUT FORMAT]

Create the project with this structure:

bakery-webapp/

│

├── index.html

├── style.css

└── script.js

The website should contain the following sections:

### 1. NAVIGATION BAR

Include:

* Bakery logo/name

* Home

* Menu

* Categories

* About

* Contact

* Search icon

* Favorites icon

* Shopping cart icon

* Mobile hamburger menu

The navbar should be responsive.

### 2. HERO SECTION

Create an attractive bakery hero section with:

* Bakery headline

* Short description

* "Order Now" button

* "Explore Menu" button

* Attractive bakery image

* Modern bakery-themed design

Example:

"Freshly Baked, Made With Love"

"Delicious cakes, pastries and treats freshly baked for every special moment."

### 3. CATEGORY SECTION

Create clickable categories:

* All

* Cakes

* Cupcakes

* Cookies

* Breads

* Buns

* Pastries

* Donuts

* Desserts

Clicking a category should dynamically filter the products.

### 4. PRODUCT SECTION

Display bakery products using attractive product cards.

Each card should contain:

* Product image

* Product name

* Category

* Price

* Rating

* Favorite button

* Add to Cart button

* View Details button

Example:

Chocolate Cake

⭐⭐⭐⭐⭐

₹450

[Add to Cart]

### 5. SEARCH FUNCTIONALITY

Add a search bar.

When the user searches:

* Filter products dynamically.

* Display matching products.

* Show "No products found" when there are no matches.

* Search should work without refreshing the page.

### 6. PRODUCT DETAILS MODAL

When the user clicks "View Details":

Open a modal containing:

* Large product image

* Product name

* Description

* Price

* Rating

* Quantity selector

* Add to Cart button

* Close button

### 7. SHOPPING CART

Create an interactive cart.

Users should be able to:

* Add products

* Increase quantity

* Decrease quantity

* Remove products

* View subtotal

* View total

* Clear cart

Store cart data in localStorage.

Cart count should update dynamically.

### 8. CHECKOUT

Create a frontend-only checkout form.

Fields:

* Full Name

* Phone Number

* Email

* Address

* City

* Pincode

* Payment Method

Payment options can be:

* Cash on Delivery

* UPI

* Card

Do NOT process real payments.

After successful validation, show:

"🎉 Order placed successfully!"

Generate a simple mock order ID.

### 9. FAVORITES

Allow users to favorite/unfavorite bakery products.

Store favorite products using localStorage.

Create a Favorites section/page or modal where users can view their favorite products.

### 10. ABOUT SECTION

Create a professional bakery story section.

Include:

* Bakery introduction

* Fresh ingredients

* Handmade products

* Quality promise

* Attractive bakery image

### 11. WHY CHOOSE US

Create cards for:

* Freshly Baked

* Premium Ingredients

* Custom Cakes

* Fast Delivery

### 12. TESTIMONIALS

Add customer testimonial cards with:

* Customer name

* Rating

* Review

Use realistic mock reviews.

### 13. CONTACT SECTION

Include:

* Bakery address

* Phone

* Email

* Opening hours

* Contact form

Contact form should have frontend validation and show a success message after submission.

### 14. FOOTER

Include:

* Bakery logo/name

* Quick links

* Categories

* Contact details

* Social media icons

* Copyright

# [EXAMPLES]

### Example 1 — Add to Cart

User clicks:

"Add to Cart"

Expected behavior:

→ Product is added to cart

→ Cart count increases

→ Show success notification

→ Product is stored in localStorage

→ Cart remains available after page refresh

### Example 2 — Category Filter

User clicks:

"Cakes"

Expected behavior:

→ Only cake products are displayed.

User clicks:

"All"

Expected behavior:

→ All products are displayed again.

### Example 3 — Search

User searches:

"Chocolate"

Expected behavior:

→ Chocolate-related products are displayed instantly.

### Example 4 — Quantity

If quantity is:

2 × ₹450

Subtotal should automatically become:

₹900

### Example 5 — Checkout

After valid checkout details:

→ Validate form

→ Generate mock order ID

→ Show order success message

→ Clear cart

→ Update cart count

# [QUALITY CHECK]

Before providing the final code, verify:

✓ Bakery website looks professional and modern.

✓ Homepage is visually attractive.

✓ Navbar works.

✓ Mobile menu works.

✓ Product cards work.

✓ Category filtering works.

✓ Search works.

✓ Product details modal works.

✓ Favorite functionality works.

✓ Add to Cart works.

✓ Cart quantity controls work.

✓ Remove product works.

✓ Clear cart works.

✓ Cart total calculates correctly.

✓ localStorage works.

✓ Checkout form validation works.

✓ Mock order confirmation works.

✓ Contact form works.

✓ No backend is used.

✓ No database is used.

✓ No API is required.

✓ No JavaScript console errors.

✓ No broken buttons.

✓ No missing files.

✓ Responsive design works on mobile, tablet, and desktop.

✓ UI spacing, typography, buttons, cards, and icons are consistent.

✓ Website can run directly by opening `index.html`.

IMPORTANT:

Do not create only a static UI.

Every important frontend feature must actually work using JavaScript.

Do not create backend code, database code, authentication server, API routes, or server-side code.

The final project must be a **100% frontend-only interactive Bakery Web Application using HTML, CSS, and JavaScript.**

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sweet-frontend-baker.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/af873f29-68f5-46b5-a429-5f0fc5fb4bc8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
