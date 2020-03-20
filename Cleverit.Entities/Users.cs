using System;

namespace Cleverit.Entities
{
    public class Rootobject
    {
        public Users[] Property1 { get; set; }
    }

    [Serializable]
    public class Users
    {
        public object id { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public string name { get; set; }
        public string lastName { get; set; }
    }
}
