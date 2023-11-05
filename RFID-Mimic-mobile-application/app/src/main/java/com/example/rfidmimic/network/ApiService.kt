package com.example.rfidmimic.network

import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.Url


interface ApiService {

//    @GET("/")
//    fun getData(): Call<String>

    @POST("/api/rfid/")
    fun pingRFID(@Body body: RFIDBody?): Call<RFIDBody>

    @POST
    fun pingRFIDCustomUrl(@Url url: String, @Body body: RFIDBody?): Call<RFIDBody>

}