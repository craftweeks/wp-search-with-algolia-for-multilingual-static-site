# WP Search with Algolia for Multilingual Site

This repository contains a modified version of the WordPress plugin **WP Search with Algolia**, which enables Algolia-powered search on WordPress sites.

The main modification is the addition of a multilingual feature, which allows users to index and search content in different languages language and to switch between them dynamically based on the user's preference. This feature is useful for sites that have content in multiple languages and want to provide a fast and relevant search experience for their visitors.

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
