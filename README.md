## Packages used:

```bash
yarn add mongodb
```

# MongoDB

To run this project you need to setup a MongoDB database. You can create a free
cluster to try it out. Register on:
[https://www.mongodb.com/](https://www.mongodb.com/)

```bash
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.something.mongodb.net/
```

## MongoDB Dummy Data:

- Database name: programming
- Collection name: languages

```bash
[
    {"name": "Python"},
    {"name": "JavaScript"},
    {"name": "Java"},
    {"name": "C++"},
    {"name": "C#"},
    {"name": "Ruby"},
    {"name": "Swift"},
    {"name": "Kotlin"},
    {"name": "Go"},
    {"name": "Rust"},
    {"name": "TypeScript"},
    {"name": "PHP"},
    {"name": "Perl"},
    {"name": "Haskell"},
    {"name": "Lua"},
    {"name": "Scala"},
    {"name": "R"},
    {"name": "Objective-C"},
    {"name": "Dart"},
    {"name": "F#"},
    {"name": "Groovy"},
    {"name": "Shell Scripting (Bash)"},
    {"name": "MATLAB"},
    {"name": "Elixir"},
    {"name": "Clojure"},
    {"name": "Erlang"},
    {"name": "VHDL"},
    {"name": "Verilog"},
    {"name": "COBOL"},
    {"name": "Fortran"},
    {"name": "Ada"},
    {"name": "Lisp"},
    {"name": "Prolog"},
    {"name": "Scheme"},
    {"name": "Smalltalk"},
    {"name": "Delphi/Object Pascal"},
    {"name": "D"},
    {"name": "ActionScript"},
    {"name": "Julia"},
    {"name": "COOL"}
]
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `app/page.js`. The page auto-updates
as you edit the file.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.
