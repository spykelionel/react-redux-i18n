# Redux React i18n TailwindCSS Template

This is a React TypeScript template repository configured with **Redux** for state management, **i18n** (internationalization) for multi-language support, and **TailwindCSS** for styling. It serves as a great starting point for building modern, responsive, and localized web applications.

## Features

- **Redux**: Centralized state management for handling the application state.
- **i18n**: Support for multiple languages, easily extendable to add more.
- **TailwindCSS**: Utility-first CSS framework for fast, responsive design.
- **Dark/Light Mode**: Toggle between dark and light themes.
- **Responsive Layout**: Optimized for mobile and desktop views with TailwindCSS.

## Getting Started

### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/redux-react-i18n-tailwind-template.git
cd redux-react-i18n-tailwind-template
```

````

### 2. Install dependencies

Install the required dependencies using either **npm** or **yarn**.

With **npm**:

```bash
npm install
```

With **yarn**:

```bash
yarn install
```

### 3. Start the development server

Run the development server to launch the application locally.

With **npm**:

```bash
npm start
```

With **yarn**:

```bash
yarn start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Configuration

### i18n (Internationalization)

The project uses **react-i18next** for handling translations. You can extend it by adding more languages in the `src/locales` directory. Currently, **English** (`en`) and **French** (`fr`) are supported.

1. **Adding a new language**:
   - Create a new JSON file in `src/locales/{languageCode}.json` (e.g., `de.json` for German).
   - Add the necessary translations to the new file.
   - Update the i18n configuration in `src/i18n.ts` to include your new language.

### Redux (State Management)

The app uses **Redux** to manage the global state, such as the theme (dark/light mode). The state is accessible throughout the application and can be easily extended to manage other app-level states.

1. **Adding new state slices**:
   - Create a new slice file under `src/store/`.
   - Use **Redux Toolkit**'s `createSlice` to manage the state.
   - Don't forget to add your new slice to the Redux store in `src/store/index.ts`.

### TailwindCSS

The project is configured with **TailwindCSS** for utility-first CSS styling. Tailwind provides responsive design utilities and custom styling classes.

1. **Customizing TailwindCSS**:
   - Modify the `tailwind.config.js` file to extend the theme, add custom colors, or modify the default configuration.
   - You can also add custom CSS classes in the `src/styles` directory if needed.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

This template is designed to get you started quickly with **Redux**, **i18n**, and **TailwindCSS** in a modern React app. Feel free to adapt it to fit your project's needs!
````
