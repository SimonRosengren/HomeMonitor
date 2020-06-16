#include <ESP8266HTTPClient.h>
#include "ESP8266WiFi.h"
#include <dht11.h>
#define DHT11PIN D7

const char *host = "http://simon-rosengren-home-monitor.herokuapp.com/api/soilmoisture";
HTTPClient http;
const char* ssid = "DHARMA_INITIATIVE_24";
const char* password = "xZor1337?";

dht11 DHT11;

void setup()
{
  Serial.begin(9600);


}

void loop()
{
  Serial.println();

  int chk = DHT11.read(DHT11PIN);

  Serial.print("Humidity (%): ");
  Serial.println((float)DHT11.humidity, 2);
  Serial.print("Temperature (C): ");
  Serial.println((float)DHT11.temperature, 2);

  delay(2000);

}
