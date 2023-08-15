// wdio.conf.js

exports.config = {
    logLevel: 'silent',
    path: '/wd/hub',
    hostname: '0.0.0.0',
    port: 4723,
    capabilities: {
        platformName: 'Android',
        platformVersion: '14.0',
        deviceName: 'pixel_3a',
        app: "C:\\Users\\Junio\\OneDrive\\Documentos\\projetos_pessoais\\poc-mobile\\app\\marvelopedia.apk",
        automationName: 'UiAutomator2',
        autoGrantPermissions: true,
        appWaitActivity: '*',
        appWaitDuration: 30000,
        locationServicesEnabled: true,
        deviceReadyTimeout: 30,
        androidDeviceReadyTimeout: 30,
        avdLaunchTimeout: 30000,
        avdReadyTimeout: 30000,
        autoWebviewTimeout: 30000
    }
};
