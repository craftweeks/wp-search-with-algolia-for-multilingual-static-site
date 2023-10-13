# WP Search with Algolia for Multilingual Static Site

This plugin is a fork of the **[WP Search with Algolia](https://wordpress.org/plugins/wp-search-with-algolia/)** WordPress plugin, maintained by **[WebDevStudios](https://github.com/WebDevStudios/wp-search-with-algolia)**. It allows you to use Algolia as your WordPress site's search engine and adds features for multilingual and static WordPress sites.

The main modification is the addition of a multilingual feature, which allows users to index and search content in different languages and to switch between them dynamically based on the user's preference. This feature is useful for sites that have content in multiple languages and want to provide a fast and relevant search experience for their visitors.
![WordPress Plugin: Required WP Version](https://img.shields.io/wordpress/plugin/wp-version/wp-search-with-algolia)  ![WordPress Plugin Required PHP Version](https://img.shields.io/wordpress/plugin/required-php/wp-search-with-algolia)  ![GitHub](https://img.shields.io/github/license/craftweeks/wp-search-with-algolia-for-multilingual-static-site)  ![GitHub release (with filter)](https://img.shields.io/github/v/release/craftweeks/wp-search-with-algolia-for-multilingual-static-site)

## New Features

- **Create a Multilingual Search Experience**: If you are using a plugin like **[Polylang](https://wordpress.org/plugins/polylang/)** to create a multilingual website, this plugin will add language filters and options to your Algolia search page, so your visitors can easily switch between languages and find the content they want in their preferred language.

- **Fix Algolia Search Issues on Static WordPress**: If you are using a plugin like **[WP2Static](https://wp2static.com/)** or **[Simply Static](https://wordpress.org/plugins/simply-static/)** to convert your WordPress site into a static site, this plugin will make sure that your Algolia search works smoothly on your static site. It will replace `http://localhost` with your deployment site URL in the index files, so you don't have to worry about broken links or incorrect paths.

## Installation

To use this plugin, you need to have an Algolia account and an API key. You can sign up for a free account here: [Algolia Pricing](https://www.algolia.com/pricing/). Once you have your account and API key, you can follow the instructions below to install and configure the plugin on your WordPress site.

Here is how you can start using it:

- First, you need to sign up for an Algolia account and get your API keys from **[Algolia](https://www.algolia.com/)**. You can use Algolia for free if your site is small or not for profit. If you have a bigger or commercial site, you can check the [pricing plans](https://www.algolia.com/pricing/) on their website.
- Next, you need to install the plugin on your WordPress site. You have two options:
  - You can install the original WP Search with Algolia plugin and then apply our patch file to make it work with multiple languages. You will need a Linux shell to do this.
  - You can download this repo and copy the folder `wp-search-with-algolia` to your `wp-content/plugins/` WordPress directory.
- After that, you need to activate the plugin on your WordPress site and follow the steps in the original plugin's documentation. You can read it **[here](https://github.com/WebDevStudios/wp-search-with-algolia/wiki)**.
- Finally, you need to set up some options in your Algolia dashboard, such as adding a language attribute to your indices and creating facets for it.

That's it! If you have any questions, issues, or feedback, please feel free to open an issue or a pull request on this repository. We appreciate your contribution and support.

### ⛏ How To Apply Modifications To The Original Plugin

You can apply the enhancements to the *original* plugin using the `patch` command, which is a tool that applies changes to files based on a patch file. The patch file `multilingual-site.patch` contains the changes that we made to the original plugin files in the `wp-search-with-algolia` directory.

To apply the patch, follow these steps:

1. Copy the `multilingual-site.patch` file to your `wp-content/plugins/` folder.
2. Open a terminal and navigate to that folder.
3. Run the command `patch -p0 < multilingual-site.patch` and you should see the output below on the screen.

   ```bash
   # Output
   patching file wp-search-with-algolia/includes/indices/class-algolia-posts-index.php
   patching file wp-search-with-algolia/includes/indices/class-algolia-searchable-posts-index.php
   patching file wp-search-with-algolia/includes/indices/class-algolia-terms-index.php
   patching file wp-search-with-algolia/templates/autocomplete.php
   patching file wp-search-with-algolia/templates/instantsearch.php
   ```

This will update the plugin files with the enhancements. You can now enjoy the improved functionality of the WP Search with Algolia plugin.

## License

This project is licensed under the GNU General Public License version 2 (GPLv2). This means that you can use, modify and distribute this software freely, as long as you adhere to the terms and conditions of the GPLv2. You can find a copy of the GPLv2 in the [`LICENSE`](/LICENSE) file of this repository, or at <https://www.gnu.org/licenses/old-licenses/gpl-2.0.html>.

## Credits

This project is based on the **[WP Search with Algolia](https://wordpress.org/plugins/wp-search-with-algolia/)** plugin, a WordPress plugin that integrates Algolia's powerful search engine with WordPress sites. The original plugin was created by **[WebDevStudios](https://github.com/WebDevStudios/wp-search-with-algolia "View 'WebDevStudios/wp-search-with-algolia' on GitHub")**, and it is a fork of the **[Search by Algolia – Instant & Relevant results](https://github.com/algolia/algoliasearch-wordpress "View 'algolia/algoliasearch-wordpress' on GitHub")** plugin, which is licensed under the GPLv2. We have made some modifications to the plugin to suit our needs, but we acknowledge and appreciate the work of the original developers.
