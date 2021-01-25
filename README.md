# eslint-config-geenee

## Backend usage
1. Install dependencies
    ```sh
    $ yarn add --dev eslint@6.7.1 @typescript-eslint/parser@2.9.0 @typescript-eslint/eslint-plugin@2.9.0 eslint-config-airbnb-base@14.0.0 eslint-plugin-import@2.18.2 eslint-plugin-simple-import-sort@5.0.0 eslint-plugin-arca@0.9.5
    ```
2. Add config (package.json)
    ```json
    {
       "eslintConfig": {
          "root": true,
          "parser": "@typescript-eslint/parser",
          "extends": "geenee/backend"
       }
    }  
    ```

## Frontend usage
1. Install dependencies
    ```sh
    $ yarn add --dev eslint@6.7.1 @typescript-eslint/parser@2.9.0 @typescript-eslint/eslint-plugin@2.9.0 eslint-plugin-react@7.17.0 eslint-config-airbnb@18.0.1 eslint-plugin-jsx-a11y@6.2.3 eslint-plugin-import@2.18.2 eslint-plugin-simple-import-sort@5.0.0 eslint-plugin-arca@0.9.5
    ```
2. Add config (package.json)
    ```json
    {
       "eslintConfig": {
          "root": true,
          "parser": "@typescript-eslint/parser",
          "extends": "geenee/frontend"
       }
    }  
    ```

## Issues
- https://github.com/eslint/eslint/issues/3458
