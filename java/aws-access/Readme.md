# 概要

- AWSを操作するサンプル

# 環境

- ローカルの環境変数は、.envファイルに記載し、IntelliJの実行構成に設定する    
  AWSのクレデンシャル情報、DBの接続情報などを記載する

# aws-cli

- 一次的なクレデンシャルを取得する
  ```bash
  aws sts get-session-token --duration-seconds 30000
  ```

- s3からファイルをダウンロードする
  ```bash
  aws s3 cp s3://{バケット名}/{フォルダ名} {ローカルの保存先} --recursive
  aws s3 cp s3://hoge-backet ./hoge-backet --recursive
  ```
