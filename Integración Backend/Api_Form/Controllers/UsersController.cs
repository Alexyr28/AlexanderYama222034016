using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Dapper;
using Microsoft.Data.SqlClient;
using System;

namespace Api_Form.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly string _connectionString = "Server=ALEXYR\\MSSQLSERVER01;Database=dbform;User Id=sa;Password=12345678;TrustServerCertificate=true";

        [HttpPost("send")]
        public IActionResult Send([FromBody] Users user)
        {
            if(user == null)
            {
                return BadRequest("Invalid User data");
            }

            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = "INSERT INTO Users (Username, Lastname, Correo, Telefono, Namegerente, Correogerente, Fechainicio, Fechafin, Notas) VALUES (@Username, @Lastname, @Correo, @Telefono, @Namegerente, @Correogerente, @Fechainicio, @Fechafin, @Notas)";
                var rowsAffected = connection.Execute(sql, new { user.Username, user.Lastname, user.Correo, user.Telefono, user.Namegerente, user.Correogerente, user.Fechainicio, user.Fechafin, user.Notas });

                if (rowsAffected > 0)
                {
                    return Ok("Information sent");
                }
                else
                {
                    return StatusCode(500, "An error ocurred while registering the user");
                }
            }
        }
    }
}
