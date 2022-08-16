# たむらけいとのポートフォリオ

## デプロイ
```shell
% yarn build
```
デプロイするサーバーのソースディレクトリに`build`フォルダと`.htaccess`を配置する
```.htaccess
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule ^(.+)$ build/index.html [L]
</IfModule>
```
[参考はこれ](https://qiita.com/shuntaro_tamura/items/28aeade180ea30a19d63)

githubにpushしたら自動でアップロードされるやつやりたい。。
Lintで綺麗にするやつもやりたい
