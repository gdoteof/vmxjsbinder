var $vmx = {};


$(document).ready(function(){
var injector = angular.element(document).injector();
var vmxconnections = injector.get('vmxconnections');
$vmx.models = injector.get('vmxmodels');
$vmx.connections = injector.get('vmxconnections');
$vmx.detectorFactory = injector.get('VmxDetectorProviderX');
$vmx.imageStreamProvider     = injector.get('vmxImageStreamProvider');
$vmx.defaultStream = $vmx.imageStreamProvider.getInstance(document.getElementById('video-vmx-vmx'));

$vmx.appcode = injector.get('vmxappcode');
$vmx.defaultDetector = $vmx.detectorFactory.getInstance();
$vmx.defaultDetector.setVideoSrc($vmx.defaultStream);
$vmx.detect = $vmx.defaultDetector.detect
console.log("shit is ready yo");

  
});




