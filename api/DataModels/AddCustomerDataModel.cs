using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.DataModels
{
    public class AddCustomerDataModel
    {
        [Required, EmailAddress]
        public string Email { get; set; }
        [Required, StringLength(50)]
        public string FirstName { get; set; }
        [Required, StringLength(50)]
        public string Surname { get; set; }
        [Required, StringLength(100)]
        public string HomeAddress { get; set; }
    }
    public class AddCustomerResult
    {
        public bool Added { get; set; }
    }
}
