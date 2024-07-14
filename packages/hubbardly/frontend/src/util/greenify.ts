export const greenify = (text: string) =>
  text.replaceAll(
    /#(.*?)#/g,
    `<b class="text-green-600 dark:text-green-400">$1</b>`,
  )
