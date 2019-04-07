using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using TodoWebAPI.Models;


namespace TodoWebAPI.Controllers
{
    public class todoesController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/todoes
        public IQueryable<todo> Gettodos()
        {
            return db.todoes;
        }

        // GET: api/todoes/1
        [Route("api/todoes/status/{isComplete}")]
        [HttpGet]
        public IQueryable<todo> GettodoesByStatus(int isComplete)
        {
                        
            return db.todoes.Where(t=>t.is_complete==isComplete);
        }



       

        // PUT: api/todos/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Puttodo(string id, todo todo)
        {


            if (id != todo.Id)
            {
                return BadRequest();
            } 

            db.Entry(todo).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!todoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/todoes
        [ResponseType(typeof(todo))]
        public IHttpActionResult Posttodo(todo todo)
        {

            todo.Id = Guid.NewGuid().ToString();
            db.todoes.Add(todo);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException ex)
            {
                string s = ex.Message;
                if (todoExists(todo.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = todo.Id }, todo);
        }

        // DELETE: api/todoes/5
        [ResponseType(typeof(todo))]
        public IHttpActionResult Deletetodo(long id)
        {
            todo todo = db.todoes.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            db.todoes.Remove(todo);
            db.SaveChanges();

            return Ok(todo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool todoExists(string id)
        {
            return db.todoes.Count(e => e.Id == id) > 0;
        }
    }
}