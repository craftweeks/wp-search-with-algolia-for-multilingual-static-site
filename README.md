# WP Search with Algolia for Multilingual Static Site

This plugin is a fork of the **[WP Search with Algolia](https://wordpress.org/plugins/wp-search-with-algolia/)** WordPress plugin, maintained by **[WebDevStudios](https://github.com/WebDevStudios/wp-search-with-algolia)**. It allows you to use Algolia as your WordPress site's search engine and adds features for multilingual and static WordPress sites.

The main modification is the addition of a multilingual feature, which allows users to index and search content in different languages and to switch between them dynamically based on the user's preference. This feature is useful for sites that have content in multiple languages and want to provide a fast and relevant search experience for their visitors.
![WordPress Plugin: Required WP Version](https://img.shields.io/wordpress/plugin/wp-version/wp-search-with-algolia)  ![WordPress Plugin Required PHP Version](https://img.shields.io/wordpress/plugin/required-php/wp-search-with-algolia)  ![GitHub](https://img.shields.io/github/license/craftweeks/wp-search-with-algolia-for-multilingual-static-site)  ![GitHub release (with filter)](https://img.shields.io/github/v/release/craftweeks/wp-search-with-algolia-for-multilingual-static-site)

## New Features

- **Create a Multilingual Search Experience**: If you are using a plugin like **[Polylang](https://wordpress.org/plugins/polylang/)** to create a multilingual website, this plugin will add language filters and options to your Algolia search page, so your visitors can easily switch between languages and find the content they want in their preferred language.

- **Fix Algolia Search Issues on Static WordPress**: If you are using a plugin like **[WP2Static](https://wp2static.com/)** or **[Simply Static](https://wordpress.org/plugins/simply-static/)** to convert your WordPress site into a static site, this plugin will make sure that your Algolia search works smoothly on your static site. It will replace `http://localhost` with your deployment site URL in the index files, so you don't have to worry about broken links or incorrect paths.

## How To Apply Modifications To The Original Plugin

### Using Patch Command

You can apply the enhancements to the WP Search with Algolia plugin using the `patch` command. The file `multilingual-site.patch` contains the differences between the original and the modified versions of the files in the `wp-search-with-algolia` directory.

To apply the patch, follow these steps:

1. Copy the `multilingual-site.patch` file to your `wp-content/plugins/` folder.
2. Open a terminal and navigate to that folder.
3. Run the command `patch -p0 < multilingual-site.patch` and follow the instructions on the screen.

   ```bash
   # Output
   patching file wp-search-with-algolia/includes/indices/class-algolia-posts-index.php
   patching file wp-search-with-algolia/includes/indices/class-algolia-searchable-posts-index.php
   patching file wp-search-with-algolia/includes/indices/class-algolia-terms-index.php
   patching file wp-search-with-algolia/templates/autocomplete.php
   patching file wp-search-with-algolia/templates/instantsearch.php
   ```

In this way, you will update the files in the `wp-search-with-algolia` directory with the modifications.
