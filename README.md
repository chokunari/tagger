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
$ @material-ui/data-grid
```

### バックエンド
#### Apmlify関連のドキュメント
- チュートリアル
[https://docs.amplify.aws/start/q/integration/js](https://docs.amplify.aws/start/q/integration/js)
- OAUTH
[https://docs.amplify.aws/lib/auth/social/q/platform/js](https://docs.amplify.aws/lib/auth/social/q/platform/js)
- API
[https://aws-amplify.github.io/amplify-js/api/](https://aws-amplify.github.io/amplify-js/api/)

#### aws amplify 初期セットアップ
- 下記の手順を実施。
[https://docs.amplify.aws/start/q/integration/react](https://docs.amplify.aws/start/q/integration/react)
- amplifyモジュールのインストール

```
$ yarn add aws-amplify @aws-amplify/ui-react

```

- フロントエンドをGitHubリポジトリと紐付け
    - Amplify consoleでの設定。
    [https://docs.amplify.aws/guides/hosting/git-based-deployments/q/platform/js#n4-deploy-your-app-to-aws-amplify](https://docs.amplify.aws/guides/hosting/git-based-deployments/q/platform/js#n4-deploy-your-app-to-aws-amplify)
    - roleの設定
    [https://docs.aws.amazon.com/ja_jp/amplify/latest/userguide/how-to-service-role-amplify-console.html](https://docs.aws.amazon.com/ja_jp/amplify/latest/userguide/how-to-service-role-amplify-console.html)

#### ソーシャルIdPのOAUTHセットアップ
[https://docs.amplify.aws/lib/auth/social/q/platform/js](https://docs.amplify.aws/lib/auth/social/q/platform/js)

```
$ amplify add auth
$ amplify push
```
#### 環境を削除する
基本的にCLIから削除すること。中途半端にWEBコンソールで削除すると後が面倒。
```
# サービスの削除
$ amplify remove
# アプリの削除
$ amplify delete
```