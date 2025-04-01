using LegoProductionPlatform.Application.Equipment.Interfaces;
using LegoProductionPlatform.Application.Equipment.Models;
using LegoProductionPlatform.Controllers.Models;
using Microsoft.AspNetCore.Mvc;

namespace LegoProductionPlatform.Controllers
{
    [ApiController]
    [Route("api/equipment")]
    public class EquipmentController(IEquipmentService equipmentService) : ControllerBase
    {
        [HttpGet("get-equipment-graph")]
        public ActionResult<GetEquipmentGraphResult> GetEquipmentGraph()
        {
            var result = equipmentService.GetEquipment();
            return Ok(new GetEquipmentGraphResult(result.equipments, result.connections));
        }
    }
}
