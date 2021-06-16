using api.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Services
{
    internal class DataService<T> : IDataService<T> where T : class
    {
        private readonly CustomerDbContext _context;
        private readonly DbSet<T> _dbSet;
        public DataService(CustomerDbContext customerDbContext)
        {
            _context = customerDbContext;
            _dbSet = _context.Set<T>();
        }
        public async Task Create(T entity)
        {
            await _dbSet.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task Delete(T entity)
        {
            _dbSet.Remove(entity);
            await _context.SaveChangesAsync();
        }

        public IQueryable<T> GetAll()
        {
            return _dbSet.AsNoTracking();
        }

        public T GetSingle(Func<T, bool> predicate)
        {
            return _dbSet.AsNoTracking().FirstOrDefault(predicate);
        }

        public IEnumerable<T> Query(Func<T, bool> predicate)
        {
            return _dbSet.AsNoTracking().Where(predicate);
        }

        public async Task Update(T entity)
        {
            var result = _dbSet.Update(entity);
            await _context.SaveChangesAsync();
        }
        public async Task AddMany(IEnumerable<T> entity)
        {
            await _dbSet.AddRangeAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateMany(IEnumerable<T> entity)
        {
            _context.Set<T>().UpdateRange(entity);
            await _context.SaveChangesAsync();
        }

        public async Task RemoveMany(IEnumerable<T> entity)
        {
            _dbSet.RemoveRange(entity);
            await _context.SaveChangesAsync();
        }

    }
}
