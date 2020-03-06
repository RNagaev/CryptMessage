using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CryptMessage.Controllers
{
    internal interface IBaseApiController
    {
        string Encrypt(string msg);
    }
}
