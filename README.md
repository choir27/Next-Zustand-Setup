# Next-Zustand-Setup

Automatic Next Set-Up Installation:

```pnpm create-next-app@latest
pnpm install zustand
pnpm install immer```

Upon installation, you will see the following prompts:

```What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*```

Manual Next Set-Up Installation:

```pnpm init
pnpm install next@latest 
pnpm install react@latest 
pnpm install react-dom@latest```

Make sure you have the following for your scripts in your package.json file: 

```{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}```

Create an app folder in the root of your project.

When you want to add a route for your application, add a layout.tsx and page.tsx file. In order to name and create a new route, create a new file with the layout.tsx and page.tsx files nested in them, name the route, and you now have a new route.  In order to make a home route ('/'), just create a layout.tsx and page.tsx in the root of the app folder.  

To make api routes, create a folder named api and create a file inside of the api folder called route.tsx to add a new api route.  Just like the regular routes, new api domain path routes can be created by making new folders, naming them, and nesting the route.tsx file inside of them.

To create a new Zustand state, make sure you initialize both the state value and the state function.  Separate your state functions and state values into two different types, State and Action.  When creating your state functions inside of your Zustand store, make sure to use produce() so the rest of the application can access them (Also make sure that produce is nested inside of set).

As a reminder, Zustand useStore hook can only be used in components.

Next App Routing Set-Up
https://github.com/choir27/Next-App-Routing

Next Page Routing Set-Up
https://github.com/choir27/Next-Page-Routing