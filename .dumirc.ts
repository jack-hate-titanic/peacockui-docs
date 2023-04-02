/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-03-30 21:45:56
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-03-30 22:50:00
 * @FilePath: /peacock/packages/peacockui-docs/.dumirc.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'peacock',
    nav: [{ title: '组件', link: '/components/Button' }],
    sidebar: {
      "/components": [
        {
          title: "通用",
          children: [
            {
              title: "Button",
              link: "/components/Button"
            }
          ]
        }
      ] 
    }
  },
});
