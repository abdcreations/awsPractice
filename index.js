const {S3Client , GetObjectCommand, PutObjectCommand} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3Client = new S3Client({
    region: "ap-south-1",
    credentials: {
        accessKeyId: "",
        secretAccessKey: "",
    },
});

async function getObjectURL(key) {
    const command = new GetObjectCommand({
        Bucket: "",
        Key: key,
    });
    const url = await getSignedUrl(s3Client, command);
    return url;

}

async function putObject(fileName,contentType) {
    const command = new PutObjectCommand({
        Bucket:"",
        Key : ``,
        ContentType : contentType,
    })
    const url = await getSignedUrl(s3Client, command);
    return url;
}

async function logObject() {
    const val = await getObjectURL("");
    console.log("URL IS ",val); 

    // console.log("URL FOR PUT IS", await putObject(`images-${Date.now()}.jpeg`,"image/jpeg"));
}
logObject();