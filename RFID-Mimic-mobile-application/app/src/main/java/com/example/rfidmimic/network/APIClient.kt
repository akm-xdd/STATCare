import okhttp3.OkHttpClient
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory


object APIClient {
    private lateinit var retrofit: Retrofit
    val client: Retrofit
        get() {
            val client: OkHttpClient = OkHttpClient()
            retrofit = Retrofit.Builder()
                .baseUrl("https://8vtk5tfp-8000.inc1.devtunnels.ms")
                .addConverterFactory(GsonConverterFactory.create())
                .client(client)
                .build()
            return retrofit
        }
}