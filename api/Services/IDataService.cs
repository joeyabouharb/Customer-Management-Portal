using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Services
{
    public interface IDataService<T> where T : class
    {
        Task AddMany(IEnumerable<T> entity);
        Task Create(T entity);
        Task Delete(T entity);
        IQueryable<T> GetAll();
        T GetSingle(Func<T, bool> predicate);
        IEnumerable<T> Query(Func<T, bool> predicate);
        Task RemoveMany(IEnumerable<T> entity);
        Task Update(T entity);
        Task UpdateMany(IEnumerable<T> entity);
    }
}