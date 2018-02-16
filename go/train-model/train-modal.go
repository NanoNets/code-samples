package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	modelId := "Enter-Your-Model-ID"
	url := "https://app.nanonets.com/api/v2/ObjectDetection/" + modelId + "/Train/"
	apiKey := "Enter-your-api-key"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Content-Type", "application/json")
	req.SetBasicAuth(apiKey, "")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
