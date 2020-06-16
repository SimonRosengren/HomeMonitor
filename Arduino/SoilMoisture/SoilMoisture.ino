#include <ESP8266HTTPClient.h>
#include "ESP8266WiFi.h"

const int analogInPin = A0;
int sensorValue = 0;
const char *host = "http://simon-rosengren-home-monitor.herokuapp.com/api/soilmoisture";
HTTPClient http;
const char* ssid = "***";
const char* password = "***";

void setup(void)
{ 
  Serial.begin(9600);
  // Connect to WiFi
  WiFi.begin(ssid, password);

  // while wifi not connected yet, print '.'
  // then after it connected, get out of the loop
  while (WiFi.status() != WL_CONNECTED) {
     delay(500);
     Serial.print(".");
  }
  //print a new line, then print WiFi connected and the IP address
  Serial.println("");
  Serial.println("WiFi connected");
  // Print the IP address
  Serial.println(WiFi.localIP());
}

void loop() {    
  sensorValue = analogRead(analogInPin);
  
  String postData = String("{\"plantId\":1,\"moisture\":") + sensorValue + "}";
  http.begin(host);
  delay(1000); // See if this prevents the problm with connection refused and deep sleep
  http.addHeader("Content-Type", "application/json");    
  http.addHeader("x-api-key", "abcdefg123456789");    
  
  int httpCode = http.POST(postData);
  String payload = http.getString();

  Serial.println(httpCode);
  Serial.println(payload);

  http.end();

  delay(1000 * 60);
}
