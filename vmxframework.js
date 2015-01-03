var $vmx = {};


$(document).ready(function(){
var injector = angular.element(document).injector();
var vmxconnections = injector.get('vmxconnections');
$vmx.models = injector.get('vmxmodels');
$vmx.connections = injector.get('vmxconnections');
$vmx.detectorFactory = injector.get('VmxDetectorProviderX');

$vmx.defaultDetector = $vmx.detectorFactory.getInstance();
$vmx.detect = $vmx.defaultDetector.detect
console.log("shit is ready yo");

  $vmx.init();
  
});




