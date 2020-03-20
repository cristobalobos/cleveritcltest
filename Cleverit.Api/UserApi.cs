using Cleverit.Entities;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;

namespace Cleverit.Api
{
    public class UserApi
    {
        public class DataObject
        {
            public string Name { get; set; }
        }

        private const string URL = "http://arsene.azurewebsites.net/UserData";
        private string urlParameters = "";
        private static readonly HttpClient client = new HttpClient();


        public async System.Threading.Tasks.Task<List<Users>> GetAllAsync()
        {
            List<Users> reservationList = new List<Users>();
            using (var httpClient = new HttpClient())
            {
                using (var response = await httpClient.GetAsync("http://arsene.azurewebsites.net/UserData"))
                {
                    //List<Item> list = await GetListAsync();

                    string apiResponse = await response.Content.ReadAsStringAsync();
                    reservationList = JsonConvert.DeserializeObject<List<Users>>(apiResponse);
                }
            }

            //Dispose once all HttpClient calls are complete. This is not necessary if the containing object will be disposed of; for example in this case the HttpClient instance will be disposed automatically when the application terminates so the following call is superfluous.
            return reservationList;
        }

        public async System.Threading.Tasks.Task<Users> Create(Users user)
        {
            Users receivedReservation = new Users();
            user.password = "qweqdsasda";
            using (var httpClient = new HttpClient())
            {
                StringContent content = new StringContent(JsonConvert.SerializeObject(user), Encoding.UTF8, "application/json");

                using (var response = await httpClient.PostAsync("http://arsene.azurewebsites.net/UserData", content))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    receivedReservation = JsonConvert.DeserializeObject<Users>(apiResponse);

                }
            }
            return receivedReservation;
        }

        public Users GetById(int id)
        {
            throw new NotImplementedException();
        }



        public void Update(Users user)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}
