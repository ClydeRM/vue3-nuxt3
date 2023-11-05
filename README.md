# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


##  Project Structure

```
nuxt-app/
├── .nuxt/ "開發環境下由 Nuxt 產生出 Vue 的網站，.nuxt 目錄是自動產生的，不應該任意的調整裡面檔案。"
├── .output/ "當你的網站準備部署至正式環境時，每次編譯建構專案時，皆會自動重新產生這個目錄，你不應該任意調整裡面檔案。"
├── assets/  "CSS、Font、Image"
├── components/ "放置 Vue 元件的地方，Nuxt 會自動載入這個目錄中的任何元件。"
├── composables/ "組合式函數放置的目錄，Nuxt 也會自動載入這些組合式函數。"
├── content/ "以在這個目錄下建立 .md、.yml、.csv 和 .json 檔案"
├── layouts/ "放置通用或可能重複使用到的佈局模板，提供程式碼的可重複使用性。"
├── middleware/ "用以在導航到下一個頁面之前執行一些程式碼如權限驗證。"
├── node_modules/
├── pages/ "目錄主要是用來配置我們的頁面，Nuxt 3 會自動整合 vue-router，並會依據目錄及檔案結構規則來自動產生出對應路由。"
├── plugins/ "Nuxt 會自動載入這個目錄檔案，作為插件使用，在檔案名稱可以使用後綴 .server 或 .client，例如， plugin.server.ts 或 plugin.client.ts 來決定只讓伺服器端或客戶端載入這個插件。"
├── public/ "主要用於伺服器根目錄提供的文件，包含必須固定的檔案名稱如 robots.txt 或不太會變動的 favicon.ico"
└── server/ "用於建立任何後端的邏輯如後端 API，這個目錄下還包含了 api、server 和 middleware 來區分功能，不具有自動載入，但支援 HMR。"
    ├── api/
    ├── routes/
    └── middleware/
├── .gitignore
├── .nuxtignore "設置讓 Nuxt 編譯建構時，一些不需要或忽略檔案。"
├── app.config.ts "提供服務運行時暴露給客戶端使用的設定，因此，請不要在 app.config.ts 檔案中添加任何機密資訊。"
├── app.vue
├── nuxt.config.ts "Nuxt 專案的設定檔。"
├── package.json
└── tsconfig.json "配置擴展或覆蓋 Nuxt 3 預設的 TypeScript 設定檔。"
```

## [Module Explorer](https://nuxt.com/modules)

## Pages
:::info
* index.vue 表示該頁面層的根目錄 /
* 每多一層資料夾，路徑會多一層資料夾名稱
* [<pathParam>].vue 可以產生對應路徑變數的變數名稱頁面
:::

## Layouts
:::info
* 預設會自動載入 default.vue
* 名稱會對應到頁面[pages]的資料夾名稱，並在該頁面層套用指定Layout
:::

## StyleSheet (TailwindCSS)
:::info
* 路徑限定要在 ./assets/css/tailwind.css
* 一定要下載 "@nuxtjs/tailwindcss"
* 一定要在 nuxt.config.ts中設定 modules
:::
