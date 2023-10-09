# wp-search-with-algolia-for-multilingual-site


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
