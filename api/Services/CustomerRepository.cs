using api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Services
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly IDataService<Customer> _dataService;
        public CustomerRepository(IDataService<Customer> dataService)
        {
            _dataService = dataService;
        }
        public Task CreateCustomer(Customer customer)
        {
            return _dataService.Create(customer);
        }
        public IEnumerable<Customer> RetrieveAll()
        {
            return _dataService.GetAll();
        }
        public Task UpdateCustomer(Customer customer)
        {
            return _dataService.Update(customer);
        }
        public Task DeleteCustomer(Customer customer)
        {
            return _dataService.Delete(customer);
        }
        public Customer GetCustomer(int id)
        {
            return _dataService.GetSingle(c => c.CustomerId == id);
        }
        public Customer GetCustomer(string email)
        {
            return _dataService.GetSingle(c => c.Email.Equals(email));
        }
    }
}
