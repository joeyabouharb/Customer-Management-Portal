using api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace api.Services
{
    public interface ICustomerRepository
    {
        Task CreateCustomer(Customer customer);
        Task DeleteCustomer(Customer customer);
        Customer GetCustomer(int id);
        Customer GetCustomer(string email);
        IEnumerable<Customer> RetrieveAll();
        Task UpdateCustomer(Customer customer);
    }
}