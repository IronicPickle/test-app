using System;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace TestApp {
    public class Utils {
        async public static Task<object> ParseBody(Stream stream) {
            

            using (var reader = new StreamReader(stream, Encoding.UTF8, true, 1024, true)) {
                var bodyStr = await reader.ReadToEndAsync();
                var body = JsonConvert.DeserializeObject(bodyStr);
                        
                if (stream.CanSeek)
                    stream.Seek(0, SeekOrigin.Begin);

                return body;
            }
        }
    }
}