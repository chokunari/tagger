# tagger
写真やドキュメントのファイルにタグを複数付与することができます。
付与したタグで検索することができます。

# 手順
## セットアップ
### フロントエンド
#### TypeScriptのReact環境構築
```
$ npx create-react-app tagger --template typescript
$ cd tagger
$ git pull https://github.com/chokunari/tagger.git main
$ yarn start
```

#### 必要なモジュールインストール
```
$ yarn add @material-ui/core
$ yarn add @material-ui/icons
$ yarn add react-router-dom
$ yarn add --dev @types/react-router-dom
$ yarn add react-google-button

```

### バックエンド
#### aws amplify 初期セットアップ
- 下記の手順を実施。
[https://docs.amplify.aws/start/q/integration/react](https://docs.amplify.aws/start/q/integration/react)
- amplifyモジュールのインストール

```
$ yarn add aws-amplify @aws-amplify/ui-react

```
