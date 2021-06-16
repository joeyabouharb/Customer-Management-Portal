using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DataModels;
using api.Models;
using api.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CustomerController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Customer> Get()
        {
            return _customerRepository.RetrieveAll();
        }
        [HttpGet, Route("{id}")]
        public Customer GetById(int id)
        {
            return _customerRepository.GetCustomer(id);
        }
        [HttpGet, Route("search/")]
        public Customer GetByEmail([FromQuery(Name = "email") ] string email)
        {
            return _customerRepository.GetCustomer(email);
        }
        [HttpPost]
        public async Task<AddCustomerResult> Add(AddCustomerDataModel dataModel)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var result =  _customerRepository.CreateCustomer(new Customer
                    {
                        Email = dataModel.Email,
                        FirstName = dataModel.FirstName,
                        Surname = dataModel.Surname,
                        HomeAddress = dataModel.HomeAddress,
                    });
                    await result;
                    return new AddCustomerResult { Added = true };
                }
                catch (Exception e)
                {
                    _logger.LogError(e.Message, e);
                }
            }
            return new AddCustomerResult { Added = false };
        }
        [HttpPatch]
        public async Task<UpdateCustomerResult> Update(UpdateCustomerDataModel dataModel)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    if (_customerRepository.GetCustomer(dataModel.CustomerId) != null)
                    {
                        var result = _customerRepository.UpdateCustomer(new Customer
                        {
                            CustomerId = dataModel.CustomerId,
                            Email = dataModel.Email,
                            FirstName = dataModel.FirstName,
                            Surname = dataModel.Surname,
                            HomeAddress = dataModel.HomeAddress,
                        });
                        await result;
                        return new UpdateCustomerResult { Updated = true };
                    }
                }
                catch (Exception e)
                {
                    _logger.LogError(e.Message, e);
                }
            }
            return new UpdateCustomerResult { Updated = false };
        }
        [HttpDelete]
        public async Task<DeleteCustomerResult> Delete(int id)
        {
            try
            {
                var task = _customerRepository.DeleteCustomer(new Customer { CustomerId = id });
                await task;
                return new DeleteCustomerResult { Deleted = true };
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message, e);
            }
            return new DeleteCustomerResult { Deleted = false };
        }

        private readonly ILogger<CustomerController> _logger;
        private readonly ICustomerRepository _customerRepository;
        public CustomerController(ILogger<CustomerController> logger, ICustomerRepository customerRepository)
        {
            _logger = logger;
            _customerRepository = customerRepository;
        }

    }
}
