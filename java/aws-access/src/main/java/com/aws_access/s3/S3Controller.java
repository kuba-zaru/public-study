package com.aws_access.s3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import software.amazon.awssdk.auth.credentials.AwsSessionCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.core.ResponseBytes;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.*;

import java.util.List;

@Controller
public class S3Controller {

    @Value("${aws.access.key}")
    private String AWS_ACCESS_KEY;

    @Value("${aws.secret.access.key}")
    private String AWS_SECRET_ACCESS_KEY;

    @Value("${aws.session.token}")
    private String AWS_SESSION_TOKEN;

    @Value("${aws.region}")
    private String AWS_REGION;

    /**
     * s3Client
     */
    @Autowired
    private S3Client s3Client;

    /**
     * S3のバケット一覧を表示する
     *
     * @return バケット一覧表示画面
     */
    @GetMapping("/s3-show-bucket")
    public String s3ShowBucket() {

        //認証情報を設定
        AwsSessionCredentials credentials =
                AwsSessionCredentials.create(
                        AWS_ACCESS_KEY,
                        AWS_SECRET_ACCESS_KEY,
                        AWS_SESSION_TOKEN);

        //S3クライアントを生成
        S3Client s3 = S3Client.builder()
                .region(Region.of(AWS_REGION))
                .credentialsProvider(StaticCredentialsProvider.create(credentials))
                .build();
        ListBucketsRequest listBucketsRequest = ListBucketsRequest.builder().build();

        //バケットリストのレスポンス取得
        ListBucketsResponse listBucketsResponse = s3.listBuckets(listBucketsRequest);

        //バケットの一覧を取得
        List<Bucket> list = listBucketsResponse.buckets();

        //バケット名を表示
        System.out.println("バケット一覧");
        for (Bucket bucket : list) {
            System.out.println(bucket.name());
        }

        //オブジェクトの取得
        GetObjectRequest objRequest = GetObjectRequest
                .builder()
                .key("index.html")
                .bucket("kuba-test-backet")
                .build();
        ResponseBytes<GetObjectResponse> objBytes = s3.getObjectAsBytes(objRequest);
        //UTF-8文字列として取得
        String message = objBytes.asUtf8String();
        System.out.println("kuba-test-backet/index.htmlの内容");
        System.out.println(message);

        return "s3/s3-show-bucket";
    }

    /**
     * S3のバケット一覧を表示する2<br>
     * s3Clientを使用
     *
     * @return バケット一覧表示画面
     */
    @GetMapping("/s3-show-bucket2")
    public String s3ShowBucket(Model model) {
        ListBucketsRequest listBucketsRequest = ListBucketsRequest.builder().build();
        ListBucketsResponse listBucketsResponse = s3Client.listBuckets(listBucketsRequest);
        List<Bucket> list = listBucketsResponse.buckets();

        //バケット名を表示
        System.out.println("バケット一覧");
        for (Bucket bucket : list) {
            System.out.println(bucket.name());
        }

        // モデルにバケット一覧を設定
        model.addAttribute("buckets", list);

        return "s3/s3-show-bucket";
    }
}