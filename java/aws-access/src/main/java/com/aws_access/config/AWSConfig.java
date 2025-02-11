package com.aws_access.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import software.amazon.awssdk.auth.credentials.AwsSessionCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;

/**
 * AWSConfig
 */
@Configuration
public class AWSConfig {

    @Value("${aws.access.key}")
    private String AWS_ACCESS_KEY;

    @Value("${aws.secret.access.key}")
    private String AWS_SECRET_ACCESS_KEY;

    @Value("${aws.session.token}")
    private String AWS_SESSION_TOKEN;

    @Value("${aws.region}")
    private String AWS_REGION;

    /**
     * S3Clientを生成する
     *
     * @return
     */
    @Bean
    public S3Client s3Client() {
        AwsSessionCredentials sessionCredentials = AwsSessionCredentials.create(
                AWS_ACCESS_KEY,
                AWS_SECRET_ACCESS_KEY,
                AWS_SESSION_TOKEN);

        return S3Client.builder()
                .region(Region.of(AWS_REGION))
                .credentialsProvider(StaticCredentialsProvider.create(sessionCredentials))
                .build();
    }
}