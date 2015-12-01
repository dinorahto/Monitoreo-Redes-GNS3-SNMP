include('snmp.js');

var snmp = null;
try {
  snmp = new Snmp(); 
  var result = snmp.getSystemInfo();
  if (result) {
    for (var i = 0; i < result.length; ++i) {
        log(result[i]);    
    }
  }
}
catch (e) {
  log(e);
}
finally {
  if (snmp)
    snmp.close();
}