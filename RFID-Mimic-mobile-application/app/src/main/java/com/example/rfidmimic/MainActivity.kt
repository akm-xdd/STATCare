package com.example.rfidmimic

import APIClient
import android.content.Context
import android.content.SharedPreferences
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.unit.dp
import com.example.rfidmimic.network.ApiService
import com.example.rfidmimic.network.RFIDBody
import com.example.rfidmimic.ui.theme.RFIDMimicTheme
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.withContext
import okhttp3.Callback
import okhttp3.OkHttpClient
import okhttp3.Request
import retrofit2.Call
import retrofit2.Response
import java.util.Date
import kotlin.random.Random

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            RFIDMimicTheme {
                // A surface container using the 'background' color from the theme
                Surface(modifier = Modifier.fillMaxSize(), color = MaterialTheme.colorScheme.background) {
                    Greeting(applicationContext)
                }
            }
        }
    }
}

fun generateRandomString(): String {
    val allowedChars = ('0'..'9') // Alphanumeric characters
    return (1..7)
        .map { allowedChars.random() }
        .joinToString("")
}

fun pickRandomDepartment(): String {
    val departments = listOf("Cardiology",
        "Oncology",
        "Neurology",
        "Orthopedics",
        "Pediatrics",
        "Obstetrics",
        "Surgery",
        "Psychiatry",
        "Radiology",
        "Anesthesiology",
        "Pathology",
        "Laboratory")
    val randomIndex = Random.nextInt(departments.size)
    return departments[randomIndex]
}

//fun refreshHid(sharedPreferences: SharedPreferences) {
//    val editor = sharedPreferences.edit()
//    editor.putString("hid", generateRandomString())
//    editor.apply()
//}
//
//fun getHID(sharedPreferences: SharedPreferences): String {
//    if (!sharedPreferences.contains("hid")) {
//        refreshHid(sharedPreferences)
//    }
//    return sharedPreferences.getString("hid", "random")!!
//}

fun pingData(context: Context, url: String, epc: String, hid: String) {

    val reserved_memory = "0123"
    val epc_memory = epc
    val tid_memory = "01234567"

    val timestamp = "${Date().time}"
    val department = pickRandomDepartment()

    val user_memory = "${timestamp},${department},${hid}"

    val apiService: ApiService = APIClient.client.create(ApiService::class.java) as ApiService

    apiService.pingRFIDCustomUrl(
        url.trim(),
        RFIDBody(
            epc_memory, timestamp, department, user_memory
        )
    ).enqueue(object : retrofit2.Callback<RFIDBody> {
        override fun onResponse(call: Call<RFIDBody>, response: Response<RFIDBody>) {
            Log.d(this.javaClass.name, response.code().toString())
            runBlocking {
                Toast.makeText(context, "${response.code()}: ${response.message()}", Toast.LENGTH_SHORT).show()
            }
        }
        override fun onFailure(call: Call<RFIDBody>, t: Throwable) {
            runBlocking {
                Toast.makeText(context, t.message.toString(), Toast.LENGTH_SHORT).show()
            }
        }
    })
}


@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun Greeting(context: Context, modifier: Modifier = Modifier) {

    val sharedPreferences: SharedPreferences = remember {
        context.getSharedPreferences("rfid", Context.MODE_PRIVATE)
    }
    var url by remember { mutableStateOf("https://8vtk5tfp-8000.inc1.devtunnels.ms/api/rfid/") }
    var hid by remember { mutableStateOf("123456700001") }
    var epc by remember { mutableStateOf("000000000000") }

    var epc_valid by remember { mutableStateOf(true) }
    var hid_valid by remember { mutableStateOf(true) }

    val maxChar = 12

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally,
        ) {
        OutlinedTextField(
            modifier = Modifier.padding(0.dp, 0.dp, 0.dp, 8.dp),
            value = url,
            onValueChange = { url = it.trim() },
            label = { Text("Enter URL") },
            singleLine = true
        )
        OutlinedTextField(
            modifier = Modifier.padding(0.dp, 0.dp, 0.dp, 8.dp),
            value = hid,
            onValueChange = {
                if (it.length <= maxChar) hid = it.trim()
                hid_valid = (hid.length == maxChar)
            },
            label = { Text("Enter HID") },
            singleLine = true
        )
        OutlinedTextField(
            modifier = Modifier.padding(0.dp, 0.dp, 0.dp, 32.dp),
            value = epc,
            onValueChange = {
                if (it.length <= maxChar) epc = it.trim()
                epc_valid = (epc.length == maxChar)
            },
            label = { Text("Enter EPC") },
            singleLine = true,
        )
        Button(
            onClick = {
                pingData(context, url, epc, hid)
            },
            enabled = (epc_valid && hid_valid)
        ) {
            Text("Ping")
        }
//        Button(onClick = {
//            refreshHid(sharedPreferences)
//        }) {
//            Text("Refresh Patient")
//        }
    }
}

//@Preview(showBackground = true)
//@Composable
//fun GreetingPreview() {
//    RFIDMimicTheme {
//        Greeting("Android")
//    }
//}