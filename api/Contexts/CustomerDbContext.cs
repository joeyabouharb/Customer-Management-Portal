using api.Models;
using api.SeedData;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Contexts
{
    public class CustomerDbContext : DbContext
    {
        public DbSet<Customer> TblCustomers { get; set; }

        public CustomerDbContext() : base()
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Customer>().HasIndex(c => c.Email).IsUnique();
            modelBuilder.Entity<Customer>().HasData(CustomerDbSeed.GetCustomers());
        }
        public CustomerDbContext(DbContextOptions<CustomerDbContext> options) : base(options)
        {

        }

    }
}
