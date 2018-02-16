package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
)

func main() {

	url := "https://app.nanonets.com/api/v2/ObjectDetection/Model/"
	apiKey := "Enter-your-api-key"

	payload := strings.NewReader("{\"categories\" : [\"TieFighter\", \"MillenniumFalcon\"]}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("Content-Type", "application/json")
	req.SetBasicAuth(apiKey, "")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
