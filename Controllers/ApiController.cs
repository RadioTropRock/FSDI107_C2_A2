using Microsoft.AspNetCore.Mvc;

namespace taskManager.Controllers
{
    public class ApiController : Controller
    {
            public ApiController()
            {
                //i am the contructor

            }

            [HttpGet]
            
            public IActionResult Test()
            {
                string name = "Eric";
                return Json(name);
                
            }

            [HttpGet]
            public IActionResult GetTask()
            {
            return Json(null);
    }
            [HttpPost]
            public IActionResult PostTask()
            {
                return Json(null);
            }
    }
}
