using CryptMessage.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace CryptMessage.Controllers
{
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CryptController : ApiController, IBaseApiController
    {
        IRepository<SymbolRow> _repository;
        public CryptController(IRepository<SymbolRow> repository)
        {
            _repository = repository;
        }

        public string Encrypt([FromBody]string msg)
        {
            return _repository.EncryptMsg(msg);
        }
    }
}
