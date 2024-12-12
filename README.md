# マイグレーションの手順

1. データベースが入ったコンテナを立ち上げる
　　このプロジェクト直下で docker-compose up -d を実行する
　　※もしDocker Desktopをパソコンにダウンロードしていない場合、ダウンロードしておく

2. データベースの列追加などの変更があった場合、該当のエンティティを変更する
　　例：usersテーブルにemail列を追加したい場合、entity/User.tsにemailを追加する

3. マイグレーションファイルを作成する
　　例：yarn typeorm migration:generate src/migration/AddEmailColumnToUserTable -d ./src/data-source.ts を実行する

4. 生成されたマイグレーションの確認
　　例：テーブルを新しく定義した場合は、1733978850567-CreateUserTable.ts の内容を参考にする
　　例：テーブルの列を新しく追加した場合は、1733979928910-AddEmailColumnToUserTable.ts の内容を参考にする

5. マイグレーションの適用
　　yarn typeorm migration:run -d ./src/data-source.ts を実行する

5. データベースの確認
　　MySQLWorkbenchなどでテーブルの構造が定義した内容に変更されているか確認する
