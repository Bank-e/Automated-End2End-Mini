// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    //browserName: 'chrome'
    browserName: 'firefox'
  },
  specs: ['spec.js']
};
/*
exports.config = {
framework: 'jasmine',
capabilities:{
    browserName: 'chrome'
},
//กำหนดให้ Selenium Server ทำ Action
seleniumAddress: 'http://localhost:4444/wd/hub',
//กำหนดให้เรียก webdriver บน browser ทำ Action
//directConnect: true,
specs:['spec.js'] //Name of the file containing test cases
} ;

exports.config = {
    framework: 'jasmine',
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        // ระบุ path Chrome หากจำเป็น
        binary: 'C:/Program Files/Google/Chrome/Application/chrome.exe'
      }
    },
    
    // ใช้อย่างใดอย่างหนึ่งระหว่าง:
    seleniumAddress: 'http://localhost:4444/wd/hub', // ถ้าใช้ Selenium Server
    // หรือ
    // directConnect: true, // ถ้าต้องการเชื่อมต่อตรงไปที่ ChromeDriver
    
    specs: ['spec.js'],
    
    // เพิ่มการตั้งค่าเพื่อแก้ปัญหา timeout
    allScriptsTimeout: 30000,
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
  };

  */