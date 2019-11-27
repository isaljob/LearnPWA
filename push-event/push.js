var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BLy-5I4_AbVdd0VgSoqa6kddTs4RhUeSc7LyrH9q1wq_qDHsQsqxIig1BmmYkj5ljGVhnCnHT9e92WPB6H01jCA",
    "privateKey": "MksGCJO_oDn-nTL5GbGTcXadvJW8jDdVmnZSoGv5Ek4"
};

webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cBjM2by3e-g:APA91bFALYRRQM4bWV5KhBzlSwrb3f07EALAEQq0DsTu1bXbYLd71WepE4ibJp0AMpdd-k3O5eYyqJsHpkBwAEfC_MexfWvb_c6q0h8vumCNI3Wi-iKPmGLTo1f-zCZShTuTc9jipjgu",
    "keys": {
        "p256dh": "BIdLhg3XHI6wIjtdUv9SpDbIvQTlFpmvavM2TmgX4P4kC0cthMLOtuBuigSohGId2BYnjVYzmHeVTL7a0LxVDJo=",
        "auth": "bWM/3th/1vkHtL29RMyDLg=="
    }
};

var payload = 'Selamat, Aplikasi Anda sudah dapat menerima push notifikasi';

var options = {
    gcmAPIKey: '<FCM Sender ID>',
    TTL: 60
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);