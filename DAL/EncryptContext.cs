using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CryptMessage.DAL
{
    public class EncruptDbInitializer: DropCreateDatabaseAlways<EncryptContext>
    {
        protected override void Seed(EncryptContext context)
        {
            context.SymbolTable.AddRange(new List<SymbolRow>
            {
                new SymbolRow { NewSymbol = "н", OldSymbol = "а" },
                new SymbolRow { NewSymbol = "к", OldSymbol = "б" },
                new SymbolRow { NewSymbol = "ы", OldSymbol = "в" }
            });
            base.Seed(context);
        }
    }

    public class EncryptContext : DbContext
    {
        public EncryptContext(): base("DBConnection") 
        {
            Database.SetInitializer(new EncruptDbInitializer());
        }
        public DbSet<SymbolRow> SymbolTable { get; set; }
    }
}