using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CryptMessage.DAL
{
    public class SymbolRow
    {
        public int Id { get; set; }
        public string OldSymbol { get; set; }
        public string NewSymbol { get; set; }
    }
}