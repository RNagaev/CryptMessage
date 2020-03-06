using System.Collections.Generic;

namespace CryptMessage.DAL
{
    public  interface IRepository<T> where T:class
    {
        string EncryptMsg(string msg);
        IEnumerable<SymbolRow> GetEncryptSymbolList();
    }
}