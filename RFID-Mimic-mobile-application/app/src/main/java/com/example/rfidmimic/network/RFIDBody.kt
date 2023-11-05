package com.example.rfidmimic.network

import com.google.gson.annotations.SerializedName


data class RFIDBody(
    @SerializedName("epc") var epc: String,
    @SerializedName("timestamp") var timestamp: String,
    @SerializedName("department") var department: String,
    @SerializedName("data") var data: String
)
