# コマンド

- javaをコンパイルしたい
    - mvn compile
        - targetディレクトリにクラスファイルが作成される
- テストのためにコンパイルしたい
    - mvn test-compile
        - target/test-classesディレクトリにクラスファイルが作成される
- テストを実行したい
    - mvn test
        - testディレクトリにあるテストクラスを実行する
- jarファイルを作成したい
    - mvn package
        - targetディレクトリに`JavaMaven-1.0-SNAPSHOT.jar`が作成される
- mvnの実行結果をcleanしたい
    - mvn clean
        - targetディレクトリが削除される
- mavenを検証したい
    - mvn validate
        - pom.xmlが正しいかどうかを検証する
- 総合的なテストを実行したい
    - mvn verify
        - validate, compile, test, packageを実行する
- プロジェクトをPCにインストールしたい
    - mvn install
        - targetディレクトリにjarファイルが作成される
        - ローカルリポジトリにjarファイルがインストールされる
            - C:\Users\kuba-\.m2\repository\com\example\  
              test-maven-app\0.0.1-SNAPSHOT/test-maven-app-0.0.1-SNAPSHOT.jar
- プロジェクトに関するドキュメントを作成したい
    - mvn site
        - target/siteディレクトリにドキュメントが作成される
- プロジェクトをリポジトリにデプロイしたい
    - mvn deploy
        - リモートリポジトリにjarファイルがデプロイされる
        - リモートリポジトリにjarファイルがインストールされる

# コマンド(その他)

- javaを実行したい
    - mvn exec:java -Dexec.mainClass="com.example.App"
- jarファイルを実行したい
    - java -jar target/JavaMaven-1.0-SNAPSHOT.jar
- テストを実行したい(結果を出力)
    - mvn test -Dsurefire.useFile=false
- テストを実行したい(特定のクラス)
    - mvn test -Dtest=AppTest

# Note

- Maven Centralとは
    - Maven Central Repositoryは、Mavenプロジェクトのためのデフォルトのリモートリポジトリです。
    