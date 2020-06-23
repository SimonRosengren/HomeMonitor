#include <ESP8266HTTPClient.h>
#include "ESP8266WiFi.h"
#include <dht11.h>
#define DHT11PIN D7

const int analogInPin = A0;
int sensorValue = 0;
const char *host = "http://simonrosengren.herokuapp.com/api/soilmoisture";
const char *tempUrl = "http://simonrosengren.herokuapp.com/api/temperature";
const char *humUrl = "http://simonrosengren.herokuapp.com/api/humidity";
HTTPClient http;
const char* ssid = "***";
const char* password = "***";

dht11 DHT11;

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

  int chk = DHT11.read(DHT11PIN);

  float temp = (float)DHT11.temperature;
  float hum = (float)DHT11.humidity;

  postData = String("{\"date\":1,\"temperature\":") + temp + "}";
  http.begin(tempUrl);
  delay(1000); // See if this prevents the problm with connection refused and deep sleep
  http.addHeader("Content-Type", "application/json");    
  http.addHeader("x-api-key", "abcdefg123456789");    
  
  httpCode = http.POST(postData);
  payload = http.getString();
  Serial.println("Temp endpoint returned: ");
  Serial.println(httpCode);
  http.end();


  postData = String("{\"date\":1,\"humidity\":") + hum + "}";
  http.begin(humUrl);
  delay(1000); // See if this prevents the problm with connection refused and deep sleep
  http.addHeader("Content-Type", "application/json");    
  http.addHeader("x-api-key", "abcdefg123456789");    
  
  httpCode = http.POST(postData);
  payload = http.getString();
  Serial.println("Hum endpoint returned: ");
  Serial.println(httpCode);
  http.end();

  delay(1000 * 60);
}
