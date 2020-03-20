using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cleverit.Api;
using Cleverit.Entities;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Cleverit.Spa.Controllers
{
    [Produces("application/json")]
    [EnableCors("CORSReactPolicy")]
    [Route("api/[controller]")]
    [ApiController]    
    public class UserController : ControllerBase
    {
        readonly Cleverit.Api.UserApi Api;

        public UserController(UserApi api)
        {
            this.Api = api;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            var result = await Api.GetAllAsync();

            if (result != null)
            {
                return Ok(result);
            }

            return NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Users user)
        {
            var result = await Api.Create(user);

            if (result != null)
            {
                return Ok(result);
            }

            return NotFound();

        }
    }
}