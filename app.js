// Complete Project Details at: https://RandomNerdTutorials.com/

// Database Paths
var dataFloatPath = 'test/float';
var dataIntPath = 'test/int';
var datatemp1Path = 'test/temp1';
var datatemp2Path = 'test/temp2';

// Get a database reference 
const databaseFloat = database.ref(dataFloatPath);
const databaseInt = database.ref(dataIntPath);
const datatemp1 = database.ref(datatemp1Path);
const datatemp2 = database.ref(datatemp2Path);

// Variables to save database current values
var floatReading;
var intReading;
var temp1Reading;
var temp2Reading;

// Attach an asynchronous callback to read the data
databaseFloat.on('value', (snapshot) => {
  floatReading = snapshot.val();
  console.log(floatReading);
  log("Nhịp tim của bạn là: " + floatReading + "bpm");
  document.getElementById("reading-float").innerHTML = floatReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

databaseInt.on('value', (snapshot) => {
  intReading = snapshot.val();
  console.log(intReading);
  log("Nồng độ oxi trong máu của bạn là: " + intReading + "%");
  document.getElementById("reading-int").innerHTML = intReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});
datatemp1.on('value', (snapshot) => {
    temp1Reading = snapshot.val();
    console.log(temp1Reading);
    log("Nhiệt độ môi trường là: " + temp1Reading + "°C");
    document.getElementById("reading-temp1").innerHTML = temp1Reading;
  }, (errorObject) => {
    console.log('The read failed: ' + errorObject.name);
  });
datatemp2.on('value', (snapshot) => {
    temp2Reading = snapshot.val();
    console.log(temp2Reading);
    log("Nhiệt độ của bạn là: " + temp2Reading + "°C");
    document.getElementById("reading-temp2").innerHTML = temp2Reading;
}, (errorObject) => {
console.log('The read failed: ' + errorObject.name);
});
function log(text) {
    const now = new Date();
    const prefixlog = now.getHours() + ':' + now.getMinutes() + ':'  + now.getSeconds() + '> ';

    $('.text-log').val($('.text-log').val() + prefixlog + text + '\n');
}