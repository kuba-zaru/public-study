
# Create an S3 client
s3 = boto3.client('s3')

# Specify the bucket name and file key
bucket_name = 'your_bucket_name'
file_key = 'your_file_key'

# Download the file from S3
s3.download_file(bucket_name, file_key, 'local_file_path')
