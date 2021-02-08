# Herzlin Website powered by Strapi & Next

### Backend

Create a Strapi project named `backend` using the [corporate template](https://github.com/strapi/strapi-template-corporate):

```
# Using Yarn
yarn create strapi-app backend --template https://github.com/strapi/strapi-template-corporate

# Or using NPM
npx create-strapi-app backend --template https://github.com/strapi/strapi-template-corporate
```

The Strapi server will automatically start and import sample seed data.

### Frontend

Leave the Strapi backend running in the background. Open another terminal tab, and make sure you're in the `frontend` directory:

```bash
cd frontend
```

Install dependencies and start the Next.js server:

```bash
# Using yarn
yarn install
yarn develop

# Using npm
npm install
npm run develop
```

The Next.js server will run here => [http://localhost:3000](http://localhost:3000)

## Customize your corporate site

To edit this website, you'll need to run both the frontend and the backend in your development environment.

### Adding Sections

We have built sections for you, but you will likely want to add more to fit your needs. Follow these steps:

- Create a new component in Strapi in the "sections" category
- In the Content-Types Builder, open the Pages collection and check your new section on the `contentSections` field.
- Create a React component that takes a `data` prop in `/frontend/components/sections`
- To link your Strapi section to this React component, open `/frontend/components/sections.js`, and add an entry to the `sectionComponents` object.

### Custom theme

We use Tailwind CSS for styling. To modify your page's look, you can edit the theme in `/front/tailwind.config.js`. Read the [Tailwind docs](https://v1.tailwindcss.com/docs/theme) to view all the changes you can make. For example, you can change the primary color like this:

```js
const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.green,
      },
    },
  },
};
```

## Deploying to production

You will need to deploy the `frontend` and `backend` projects separately. Here are the docs to deploy each one:

* [Deploy Strapi](https://strapi.io/documentation/v3.x/admin-panel/deploy.html#deployment)
* [Deploy Next.js](https://nextjs.org/docs/deployment)

Don't forget to set up your environment variables on your production apps.

Here are the required ones for the frontend:

- `NEXT_PUBLIC_STRAPI_API_URL`: URL of your Strapi backend, without trailing slash
- `PREVIEW_SECRET`: a random string used to protect your preview pages

And for the backend:

- `FRONTEND_URL`: URL of your frontend, without trailing slash
- `FRONTEND_PREVIEW_SECRET`: token of Next.js preview mode defined on the frontend
