function initMap() {
  //Import and center map
  var map = new google.maps.Map(document.getElementById('map'),{
    center: {lat: 40.838113, lng: -115.771244},
    zoom: 15
  });
  
  //My house
  var homewindow = new google.maps.InfoWindow({
    content: '<h2>My House</h2>' + '<p>My family moved here from American Fork, UT when I was 10 years old.</p>',
    maxWidth: 400
  });
    
  var home = new google.maps.Marker({
    position: {lat:40.835692, lng:-115.800711},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Home'
  });
  home.addListener('click', function() {
    homewindow.open(map, home);
  });
  
  //Mountain View Elementary
  var mtviewwindow = new google.maps.InfoWindow({
    content: '<h2>Mountain View Elementary</h2>' + '<p>After moving to Elko, I spent 5th and 6th grade at Mountain View Elementary. My 5th grade teacher was an ambassador for NASA and really got me excited about science.</p>',
    maxWidth: 400
  });
  
  var mtview = new google.maps.Marker({
    position: {lat:40.843680, lng:-115.786688},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Mountain View Elementary'
  });
  mtview.addListener('click', function() {
    mtviewwindow.open(map, mtview);
  });
  
  //EJHS
  var ejhswindow = new google.maps.InfoWindow({
    content: '<h2>Elko Jr. High School</h2>' + '<p>I completed 7th and 8th grade at the Jr. High School. My class was the last group to graduate from the Jr. High, as the new middle school opened across town the next year</p>',
    maxWidth: 400
  });
  
  var ejhs = new google.maps.Marker({
    position: {lat:40.846290, lng:-115.754474},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Jr. High'
  });
  ejhs.addListener('click', function() {
    ejhswindow.open(map, ejhs);
  });
  
  //EHS
  var highwindow = new google.maps.InfoWindow({
    content: '<h2>Elko High School</h2>' + '<p>Fun Fact: The mascot for Elko High School is an Indian. During my high school career, a group came forward claiming that the mascot should be changed, as indians could be seen negatively. The group wanted the mascot to reflect the local mining community. Their suggestion? The Elko High School Golddiggers. Luckily, we are still the Elko High School Indians (with the blessing of the local Native American tribe).</p>',
    maxWidth: 400
  });
  
  var high = new google.maps.Marker({
    position: {lat:40.839133, lng:-115.761496},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'High School'
  });
  high.addListener('click', function() {
    highwindow.open(map, high);
  });
  
  //My Church
  var churchwindow = new google.maps.InfoWindow({
    content: '<h2>My Church Building</h2>' + '<p>This was my church building. Many a game of basketball was played here.</p>',
    maxWidth: 400
  });
  
  var church = new google.maps.Marker({
    position: {lat:40.838507, lng:-115.803009},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Church'
  });
  church.addListener('click', function() {
    churchwindow.open(map, church);
  });
}