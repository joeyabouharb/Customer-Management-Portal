using api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.SeedData
{
    public class CustomerDbSeed
    {
        public static IEnumerable<Customer> GetCustomers()
        {
            yield return new Customer { CustomerId = 1, Email = "joey.test@gmail.com", FirstName = "Joey", Surname = "Smith", HomeAddress = "13 fake street belmore" };
            yield return new Customer { CustomerId = 2, Email = "james.test@gmail.com", FirstName = "James", Surname = "Doe", HomeAddress = "14 fake street belmore" };
            yield return new Customer { CustomerId = 3, Email = "john.test@gmail.com", FirstName = "John", Surname = "Mcafee", HomeAddress = "15 fake street belmore" };
            yield return new Customer { CustomerId = 4, Email = "peter.test@gmail.com", FirstName = "Peter", Surname = "harb", HomeAddress = "16 fake street belmore" };
            yield return new Customer { CustomerId = 5, Email = "frodo.test@gmail.com", FirstName = "frodo", Surname = "baggins", HomeAddress = "17 fake street belmore" };
            yield return new Customer { CustomerId = 6, Email = "bran.test@gmail.com", FirstName = "bran", Surname = "stark", HomeAddress = "18 fake street belmore" };
            yield return new Customer { CustomerId = 7, Email = "freddie.test@gmail.com", FirstName = "freddie", Surname = "murcury", HomeAddress = "19 fake street belmore" };
        }
    }
}
