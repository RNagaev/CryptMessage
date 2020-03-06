using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CryptMessage.DAL
{
    public class Repository : IRepository<SymbolRow>
    {
        private readonly EncryptContext _dbContext = new EncryptContext();
        public string EncryptMsg(string msg)
        {            
            foreach (var symbol in GetEncryptSymbolList())
            {
                msg = msg.Replace(symbol.OldSymbol, symbol.NewSymbol);
            }
            return msg;
        }

        public IEnumerable<SymbolRow> GetEncryptSymbolList()
        {
            return _dbContext.SymbolTable.ToList();
        }
    }
}