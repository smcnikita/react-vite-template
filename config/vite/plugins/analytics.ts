/**
 * Аналитика
 */
export const vitePluginAnalytics = (VITE_USE_ANALYTICS: string) => {
  const useAnalytics = JSON.parse(VITE_USE_ANALYTICS) === 'true' ? true : false;

  return {
    name: 'html-transform',
    transformIndexHtml(html: string) {
      if (!useAnalytics) {
        return html;
      }

      return html.replace(
        '</head>',
        `
        <!-- Code -->
        <div>13sfdgmskdfg</div>
        </head>
        `
      );
    },
  };
};
